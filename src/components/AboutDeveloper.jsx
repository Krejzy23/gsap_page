import React, { useEffect, useRef, useState } from "react";
import { useGLTF, useAnimations, useFBX } from "@react-three/drei";
import * as THREE from "three";

export default function Developer({ ...props }) {
  const group = useRef();
  const [animation, setAnimation] = useState("idle");

  // GLTF model
  const { nodes, materials } = useGLTF(
    "/model/66dc819918614db10e811e96 (1).glb"
  );

  // FBX animace
  const idleFBX = useFBX("/animations/Idle.fbx");
  const clapFBX = useFBX("/animations/Clapping.fbx");
  const dyingFBX = useFBX("/animations/Dying.fbx");

  // nastav názvy, jen pokud existují
  if (idleFBX.animations[0]) idleFBX.animations[0].name = "idle";
  if (clapFBX.animations[0]) clapFBX.animations[0].name = "clap";
  if (dyingFBX.animations[0]) dyingFBX.animations[0].name = "dying";

  // jen platné animace
  const animations = [
    ...idleFBX.animations.filter(Boolean),
    ...clapFBX.animations.filter(Boolean),
    ...dyingFBX.animations.filter(Boolean),
  ];

  const { actions, mixer } = useAnimations(animations, group);

  // spouštění animace
  useEffect(() => {
    if (!actions || !animation) return;

    // zastaví všechny ostatní animace
    Object.values(actions).forEach((action) => {
      if (action) action.stop();
    });

    const action = actions[animation];
    if (!action) return;

    action.reset();

    if (animation === "idle") {
      action.setLoop(THREE.LoopRepeat);
    } else {
      action.setLoop(THREE.LoopOnce);
      action.clampWhenFinished = true;
    }
    action.play();
  }, [animation, actions]);

  useEffect(() => {
    if (!mixer) return;

    const onFinished = (e) => {
      const finished = e.action.getClip().name;

      // clap se po dokončení vrací na idle
      if (finished === "clap" && !isDead.current) {
        setAnimation("idle");
      }

      // dying NIC nedělá — zůstane zamrzlý
    };

    mixer.addEventListener("finished", onFinished);
    return () => mixer.removeEventListener("finished", onFinished);
  }, [mixer]);

  const isDead = useRef(false);

  // click handler → přepnutí na clap a zpět na idle
  const clickCount = useRef(0);
  const clickTimer = useRef(null);

  const handleClick = () => {
    if (isDead.current) return;

    clickCount.current++;

    if (clickTimer.current) clearTimeout(clickTimer.current);

    clickTimer.current = setTimeout(() => {
      clickCount.current = 0;
    }, 1200);

    if (clickCount.current >= 5) {
      triggerSpecial("dying");
      clickCount.current = 0;
      return;
    }

    triggerSpecial("clap");
  };

  const triggerSpecial = (anim) => {
    // když už běží dying → ignoruj kliky
    if (isDead.current) return;

    if (anim === "dying") {
      isDead.current = true;
      setAnimation("dying");
      return;
    }

    // clap nesmí přepsat dying
    if (animation === "dying") return;

    setAnimation(anim);
  };

  return (
    <group {...props} dispose={null} ref={group} onClick={handleClick}>
      <group rotation={[0, Math.PI / 2, 0]}>
        <primitive object={nodes.Hips} />
        <skinnedMesh
          name="EyeLeft"
          geometry={nodes.EyeLeft.geometry}
          material={materials.Wolf3D_Eye}
          skeleton={nodes.EyeLeft.skeleton}
          morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
          frustumCulled={false}
        />
        <skinnedMesh
          name="EyeRight"
          geometry={nodes.EyeRight.geometry}
          material={materials.Wolf3D_Eye}
          skeleton={nodes.EyeRight.skeleton}
          morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
          morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
          frustumCulled={false}
        />
        <skinnedMesh
          name="Wolf3D_Head"
          geometry={nodes.Wolf3D_Head.geometry}
          material={materials.Wolf3D_Skin}
          skeleton={nodes.Wolf3D_Head.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
          frustumCulled={false}
        />
        <skinnedMesh
          name="Wolf3D_Teeth"
          geometry={nodes.Wolf3D_Teeth.geometry}
          material={materials.Wolf3D_Teeth}
          skeleton={nodes.Wolf3D_Teeth.skeleton}
          morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
          morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
          frustumCulled={false}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Hair.geometry}
          material={materials.Wolf3D_Hair}
          skeleton={nodes.Wolf3D_Hair.skeleton}
          frustumCulled={false}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Glasses.geometry}
          material={materials.Wolf3D_Glasses}
          skeleton={nodes.Wolf3D_Glasses.skeleton}
          frustumCulled={false}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Top.geometry}
          material={materials.Wolf3D_Outfit_Top}
          skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
          frustumCulled={false}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
          material={materials.Wolf3D_Outfit_Bottom}
          skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
          frustumCulled={false}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
          material={materials.Wolf3D_Outfit_Footwear}
          skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
          frustumCulled={false}
        />
        <skinnedMesh
          geometry={nodes.Wolf3D_Body.geometry}
          material={materials.Wolf3D_Body}
          skeleton={nodes.Wolf3D_Body.skeleton}
          frustumCulled={false}
        />
      </group>
    </group>
  );
}
