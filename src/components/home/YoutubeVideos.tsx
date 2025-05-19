"use client";
import Link from "next/link";
import React from "react";
const YoutubeVideos: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-12 relative bg-gradient-to-b from-transparent via-purple-50/50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto text-center relative mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl my-4 sm:my-6 text-gray-900">
            What is inside
          </h2>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            Everything you need to See — Check out our{" "}
            <Link
              className="text-xl sm:text-2xl bg-clip-text text-primary font-medium"
              href="https://www.youtube.com/@Karhuno"
              target="_blank"
            >
              Youtube
            </Link>{" "}
            channel
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 max-w-6xl mx-auto">
          <div className="aspect-video w-full relative">
            <iframe
              className="w-full h-full absolute inset-0 rounded-md shadow-md"
              src="https://www.youtube.com/embed/CG2UpE1fmtg?si=TZO9VU4796NkaYvZ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="aspect-video w-full relative">
            <iframe
              className="w-full h-full absolute inset-0 rounded-md shadow-md"
              src="https://www.youtube.com/embed/YXXPixSryOY?si=DoXJJOJPgcDbiEYx"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YoutubeVideos;
