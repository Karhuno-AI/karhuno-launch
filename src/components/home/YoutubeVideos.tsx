"use client";
import Link from "next/link";
import React from "react";
const YoutubeVideos: React.FC = () => {
  return (
    <section className="py-20 px-6 md:px-12 relative bg-gradient-to-b from-transparent via-purple-50/50 to-white">
      <div>
        <div className="max-w-4xl mx-auto text-center relative">
          <h2 className="text-3xl md:text-4xl my-6 text-gray-900">
            What is inside
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mb-12 mx-auto">
            Everything you need to See — Check out our{" "}
            <Link
              className="text-2xl bg-clip-text text-primary font-medium"
              href="https://www.youtube.com/@Karhuno"
              target="_blank"
            >
              Youtube
            </Link>{" "}
            channel
          </p>
        </div>
        <div className="block space-y-4 lg:justify-between lg:gap-5 lg:flex lg:space-y-0">
          <iframe
            className="w-full lg:h-80"
            src="https://www.youtube.com/embed/CG2UpE1fmtg?si=TZO9VU4796NkaYvZ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <iframe
            className="w-full lg:h-80"
            src="https://www.youtube.com/embed/YXXPixSryOY?si=DoXJJOJPgcDbiEYx"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default YoutubeVideos;
