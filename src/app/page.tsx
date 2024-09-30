"use client";

import React from "react";
import Image from "next/image";
import { FaBookBookmark } from "react-icons/fa6";
import { GiArchiveResearch } from "react-icons/gi";

export default function Home() {
  return (
    <div>
      <div className="mx-5 sm:mx-0 my-5 bg-primary rounded-xl flex justify-between items-center text-white p-4 border border-darkSecondary">
        <div className="grid grid-cols-2">
          <div className="flex justify-center items-center">
            <Image
              src="/images/profile.jfif"
              alt="profile picture"
              width={300}
              height={100}
              layout="fixed"
              className="custom_polygon m-auto"
            />
          </div>
          <div>
            <div>
              <span>Hey, I&apos;m James</span>
            </div>
            <div>Senior {"{'Full Stack'}"} Web & App developer_</div>
            <p>
              With expertise in cutting-edge technologies such as NodeJS, React,
              Angular, and Laravel... I deliver web solutions that are both
              innovative and robust.
            </p>
            <div>
              <div>carousel</div>
              <div>... and more</div>
            </div>
            <div>Download CV</div>
          </div>
        </div>
      </div>
      <div className="mx-5 sm:mx-0 my-5 bg-primary rounded-xl flex justify-between items-center text-white p-4 border border-darkSecondary">
        <div className="grid grid-cols-4 w-full">
          <div>
            <div>Icon</div>
            <div>12 +</div>
            <div>Years Experience</div>
          </div>
          <div>
            <div>Icon</div>
            <div>250 +</div>
            <div>Project Completed</div>
          </div>
          <div>
            <div>Icon</div>
            <div>680 +</div>
            <div>Satisfied Clients</div>
          </div>
          <div>
            <div>Icon</div>
            <div>18 +</div>
            <div>Award Winner</div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3">
        <div className="mx-5 sm:mx-0 my-5 bg-primary rounded-xl flex justify-between items-center text-white p-4 border border-darkSecondary col-span-2">
          Corporation
        </div>
        <div className="mx-5 sm:mx-0 my-5 bg-primary rounded-xl flex justify-between items-center text-white p-4 border border-darkSecondary col-span-1">
          Git Journaling
        </div>
      </div>
      <div className="mx-5 sm:mx-0 my-5 bg-primary rounded-xl text-white p-4 border border-darkSecondary">
        <div className="text-center">
          <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2" />
          <span className="text-green-500">Cooperation</span>
        </div>
        <div className="text-center text-xl xl:text-4xl">
          Designing solutions{" "}
          <span className="text-lightGray">
            customized <br /> to meet your requirements
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 my-5">
          <div className="bg-primary rounded-xl text-white border border-darkSecondary p-[30px] pt-[70px] lg:p-[42px] lg:pt-[93px]">
            <div>Icon</div>
            <div>Web & App Development</div>
            <p>
              Crafting visually appealing and user-friendly interfaces using
              HTML, CSS, JavaScript, and modern frameworks like React and
              Angular.
            </p>
          </div>
          <div className="bg-primary rounded-xl text-white border border-darkSecondary p-[30px] pt-[70px] lg:p-[42px] lg:pt-[93px]">
            <div>Icon</div>
            <div>Database Management</div>
            <p>
              Designing and managing databases with SQL and NoSQL technologies
              such as MySQL, PostgreSQL, and MongoDB.
            </p>
          </div>
          <div className="bg-primary rounded-xl text-white border border-darkSecondary p-[30px] pt-[70px] lg:p-[42px] lg:pt-[93px]">
            <div>Icon</div>
            <div>API Development</div>
            <p>
              Creating and integrating RESTful APIs to enable smooth
              communication between front-end and back-end systems.
            </p>
          </div>
          <div className="bg-primary rounded-xl text-white border border-darkSecondary p-[30px] pt-[70px] lg:p-[42px] lg:pt-[93px]">
            <div>Icon</div>
            <div>Performance Optimization</div>
            <p>
              Improving the speed and performance of web applications to provide
              a better user experience. Work with Nodejs, Express
            </p>
          </div>
          <div className="bg-primary rounded-xl text-white border border-darkSecondary p-[30px] pt-[70px] lg:p-[42px] lg:pt-[93px]">
            <div>Icon</div>
            <div>E-commerce Solutions</div>
            <p>
              Developing scalable and secure payment solutions for e-commerce
              platforms tailored to your business needs.
            </p>
          </div>
          <div className="bg-primary rounded-xl text-white border border-darkSecondary p-[30px] pt-[70px] lg:p-[42px] lg:pt-[93px]">
            <div>Icon</div>
            <div>Integrating AI</div>
            <p>
              Boost your applications with AI for improved efficiency,
              automation, and enhanced user experience
            </p>
          </div>
        </div>
        <p className="text-center">
          Excited to take on new projects and collaborate. <br />
          Let&apos;s chat about your ideas. Reach out!
        </p>
      </div>
      <div className="mx-5 sm:mx-0 my-5 bg-primary rounded-xl text-white p-4 border border-darkSecondary">
        <div className="px-5">
          <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2" />
          <span className="text-green-500">Expericence</span>
        </div>
        <div className="text-xl xl:text-4xl px-5">
          +2 <span className="text-lightGray">years of</span> passion{" "}
          <span className="text-lightGray">
            for <br /> programming techniques
          </span>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-5 p-5">
          <div className="grid gap-2 xl:col-span-1">
            <div className="bg-primary rounded-xl flex items-center gap-2 text-white p-4 border border-darkSecondary">
              <Image
                src="/images/company/02.png"
                alt="company logo"
                width={50}
                height={100}
                layout="fixed"
              />
              <div>
                <h3 className="text-2xl">Xenia Technologies</h3>
                <p className="text-lightGray">2023 - Present</p>
              </div>
            </div>
            <div className="bg-primary rounded-xl flex items-center gap-2 text-white p-4 border border-darkSecondary">
              <Image
                src="/images/company/01.png"
                alt="company logo"
                width={50}
                height={100}
                layout="fixed"
              />
              <div>
                <h3 className="text-2xl">IAntz It Solutions</h3>
                <p className="text-lightGray">2022 - 2023</p>
              </div>
            </div>
          </div>
          <div className="xl:col-span-2 px-10">
            <span className="text-brightSecondary">
              Senior Software Engineer
            </span>
            <ul className="list-disc">
              <li>
                Led development of scalable web applications, improving
                performance and user experience for millions of users.
              </li>
              <li>
                Implemented machine learning algorithms to enhance search
                functionality.
              </li>
              <li>
                Collaborated with cross-functional teams to integrate new
                features seamlessly.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-5">
        <div className="bg-primary rounded-xl text-white p-4 border border-darkSecondary">
          <div className="flex items-center gap-4 text-3xl">
            <FaBookBookmark className="text-brightSecondary" />
            Education
          </div>
        </div>
        <div className="bg-primary rounded-xl text-white p-4 border border-darkSecondary">
          <div className="flex items-center gap-4 text-3xl">
            <GiArchiveResearch className="text-brightSecondary" />
            Researched
          </div>
        </div>
      </div>
      <div className="mx-5 sm:mx-0 my-5 bg-primary rounded-xl flex justify-between items-center text-white p-4 border border-darkSecondary">
        My Recent Works
      </div>
      <div className="mx-5 sm:mx-0 my-5 bg-primary rounded-xl text-white p-4 border border-darkSecondary">
        <div className="text-center">
          <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2" />
          <span className="text-green-500">Projects</span>
        </div>
        <div className="text-center text-xl xl:text-4xl">My Skills</div>
        <ul className="space-y-5 p-5 list-disc">
          <li>
            {" "}
            Front-End :{" "}
            <span className="text-lightGray">
              HTML, CSS, JavaScript, React, Angular
            </span>
          </li>
          <li>
            Back-End :{" "}
            <span className="text-lightGray">
              Node.js, Express, Python, Django
            </span>
          </li>
          <li>
            Databases : <span className="text-lightGray">MongoDB</span>
          </li>
          <li>
            Tools & Platforms :{" "}
            <span className="text-lightGray">Git, Netlify</span>
          </li>
          <li>
            Others :{" "}
            <span className="text-lightGray">
              RESTful APIs, Agile or Scrum Methodologies
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
