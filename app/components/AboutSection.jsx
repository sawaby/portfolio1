"use client";
import React, { useState, useTransition } from 'react';
import Image from 'next/image';
import TabButtons from './TabButtons';


const TAB_DATA = [
    {
        title: "Qualifications",
        id: "qualifications",
        content: (
            <ul className='list-disc pl-2'>
                <li>Bash and Shell scripting</li>
                <li>Computer Networking</li>
                <li>WebSpeed</li>
                <li>OpenEdge 4GL/Progress</li>
                <li>Cisco Routers</li>
                <li>axios</li>
                <li>AJAX</li>
                <li>CSS</li>
                <li>HTML5</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className='list-disc pl-2'>
                <li>University of California, Irvine (Coding bootcamp)</li>
                <li>Technical University of Berlin (Master of Science, Information Technology)</li>
                <li>Herat University, Afghanistan (Bachelor in Computer Science)</li>
            </ul>
        )
    },
    {
        title: "Certification",
        id: "certification",
        content: (
            <ul className='list-disc pl-2'>
                <li>React Master Class (Udemy)</li>
                <li>Full Stack Web Development (UCI)</li>      
            </ul>
        )
    }
];

const AboutSection = () => {
    const [tab, setTab] = useState("qualifications");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    }
  return (
    <section id='about' className='text-white '>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image src="/images/about-image.png" width={500} height={500} className="rounded-full" alt='about'/>
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                <p className='text-base lg:text-lg'>
                    I am a full stack web developer with a passion for creating
                    interactive and responsive web applications. I have experience
                    working with JavaScript, React, Redux, Node.js, Express,
                    Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
                    looking to expand my knowledge and skill set. I am a team player and
                    I am excited to work with others to create amazing applications.
                </p>
                <div className="flex flex-row mt-8">
                    <TabButtons selectTab={() => handleTabChange("qualifications")} active={tab === "qualifications"}>
                        {" "}
                        Qualifications{" "}
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