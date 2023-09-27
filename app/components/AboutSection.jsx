"use client";
import React, { useState, useTransition } from 'react';
import Image from 'next/image';
import TabButtons from './TabButtons';


const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-2'>
                <li>Node.js</li>
                <li>Express</li>
                <li>PostgreSQL</li>
                <li>Sequelize</li>
                <li>JavaScript</li>
                <li>React</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className='list-disc pl-2'>
                <li>Fullstack Academy of Code</li>
                <li>University of California, Irvine</li>
            </ul>
        )
    },
    {
        title: "Certification",
        id: "certification",
        content: (
            <ul className='list-disc pl-2'>
                <li>AWS</li>
                <li>Google Professional Certificate</li>
                
            </ul>
        )
    }
];

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    }
  return (
    <section className='text-white '>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image src="/images/about-image.png" width={500} height={500} alt='about'/>
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                <p className='text-base lg:text-lg'>
                    I am a full stack web developer with a passion for creating
                    interactive and responsive web applications. I have experience
                    working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
                    Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
                    looking to expand my knowledge and skill set. I am a team player and
                    I am excited to work with others to create amazing applications.
                </p>
                <div className="flex flex-row mt-8">
                    <TabButtons selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
                        {" "}
                        Skills{" "}
                    </TabButtons>
                    <TabButtons selectTab={() => handleTabChange("education")} active={tab === "education"}>
                        {" "}
                        Education{" "}
                    </TabButtons>
                    <TabButtons selectTab={() => handleTabChange("certification")} active={tab === "certification"}>
                        {" "}
                        Certifications{" "}
                    </TabButtons>

                </div>
                <div className='mt-8'>
                    {TAB_DATA.find((t) => t.id === tab).content}
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutSection