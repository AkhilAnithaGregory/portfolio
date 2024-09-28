"use client";

import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="mx-5 sm:mx-0 my-5 bg-primary rounded-xl flex justify-between items-center text-white p-4 xl:p-0 border border-darkSecondary">
        <div className="grid grid-cols-2">
          <div>
            <Image
              src="/images/profile.jfif"
              alt="profile picture"
              width={100}
              height={100}
              layout="responsive"
            />
          </div>
          <div>
            <div>
              <span>Hey, I’m James</span>
            </div>
            <div>Senior {"{'Full Stack'}"} Web & App developer_</div>
          </div>
        </div>
      </div>
    </div>
  );
}
