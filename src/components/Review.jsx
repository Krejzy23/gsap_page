import React from "react";
import PostCard from "./PostCard";
import { posts } from "../constants/index";

export default function Review() {
  return (
    <main className="bg-gray-300 h-full w-full">
      <div
        className="
          grid gap-5 p-2
          grid-cols-1
          sm:grid-cols-2
          xl:auto-rows-fr
          lg:grid-cols-4
          max-w-9xl mx-auto py-10
        "
      >
        {/* Velká karta */}
        <div
          className="
            bg-gray-200 p-5 shadow-lg
            md:col-span-2 lg:row-span-3
            flex flex-col justify-center
            relative aspect-square 
            transition duration-300 hover:bg-black
            hover:text-white saturate-0 hover:saturate-100 
          "
        >
          {/* Rohy pro velkou kartu */}
          <div className="pointer-events-none absolute -top-1 -left-1 h-5 w-5 border-l border-t border-black" />
          <div className="pointer-events-none absolute -top-1 -right-1 h-5 w-5 border-r border-t border-black" />
          <div className="pointer-events-none absolute -bottom-1 -left-1 h-5 w-5 border-l border-b border-black" />
          <div className="pointer-events-none absolute -bottom-1 -right-1 h-5 w-5 border-r border-b border-black" />
          <span className="text-xs md:text-sm">#LATEST</span>

          <h2 className="text-xl md:text-6xl font-roboto font-bold leading-tight uppercase hover:text-white">
            photographer portfolio & services // gallery
          </h2>
          <div className="flex justify-end">
            <img
              src="/pictures/photo.webp"
              alt="photo picture"
              className="md:w-96 md:h-96"
            />
          </div>
        </div>

        {/* Iterované malé karty s rámečky */}
        {posts.map((post) => (
          <div key={post.id} className="relative">
            {/* Rohy */}
            <div className="pointer-events-none absolute -top-1 -left-1 h-5 w-5 border-l border-t border-black" />
            <div className="pointer-events-none absolute -top-1 -right-1 h-5 w-5 border-r border-t border-black" />
            <div className="pointer-events-none absolute -bottom-1 -left-1 h-5 w-5 border-l border-b border-black" />
            <div className="pointer-events-none absolute -bottom-1 -right-1 h-5 w-5 border-r border-b border-black" />
            <PostCard title={post.title} image={post.image} tags={post.tags} />
          </div>
        ))}
      </div>
    </main>
  );
}
