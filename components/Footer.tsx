import React from 'react';
import Image from "next/image";
import MagicButton from "@/components/ui/MagicButton";
import {FaLocationArrow} from "react-icons/fa";
import {socialMedia} from "@/data";

const Footer = () => {
    // @ts-ignore
    return (
        <footer className="w-full pb-10 mb-[100px] md:mb-5" id="contact">
            <div className="flex flex-col items-center">
                <h1 className="heading lg:max-w-[45vw]">
                    Ready to take <span className="text-purple">your</span> digital presence to the next level?
                </h1>
                <p className="my-5 text-center text-white-200 md:mt-10">I&apos;m always open for new opportunities and collaborations. If you have a project in mind or just want to chat, feel free to contact me.</p>
                <a href="mailto:garik.sandros@gmail.com">
                    <MagicButton
                        title="Let&apos;s get in touch"
                        icon={<FaLocationArrow/>}
                        position="right"
                    />
                </a>
            </div>

            <div className="mt-16 flex flex-col items-center justify-between md:flex-row">
                <p className="text-sm font-light md:text-base md:font-normal">Copyright © 2024 Garik</p>
                <div className="flex items-center gap-6 md:gap-3">
                    {socialMedia.map((profile) => (
                        <div key={profile.id}
                             className="flex h-10 w-10 items-center justify-center rounded-lg border bg-opacity-75 backdrop-blur-lg backdrop-filter saturate-180 bg-black-200 border-black-300">
                            <a href={profile.link} target="_blank" rel="noreferrer"
                               className="flex items-center justify-center w-full h-full">
                                <Image src={profile.img} alt="icons" width={20} height={20} />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;