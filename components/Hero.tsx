import React from "react";
import {Spotlight} from "@/components/ui/Spotlight";
import {TextGenerateEffect} from "@/components/ui/TextGenerateEffect";
import MagicButton from "@/components/ui/MagicButton";
import {FaLocationArrow} from "react-icons/fa";

const Hero = () => {
    return (
        <div className="pt-36 pb-20">
            <div>
                <Spotlight className="-top-40 -left-10 h-screen md:-top-20 md:-left-32" fill="white"/>
                <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="purple"/>
                <Spotlight className="top-28 left-80 h-[80vh] w-[50vh]" fill="blue"/>
            </div>

            <div
                className="absolute top-0 left-0 flex h-screen w-full items-center justify-center bg-white bg-grid-black/[0.2] dark:bg-black-100 dark:bg-grid-white/[0.03]">
                <div
                    className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
            </div>

            <div className="relative z-10 my-20 flex justify-center">
                <div className="flex flex-col items-center justify-center max-w-[89vw] md:max-w-2xl lg:max-w-[60vw]">
                    <TextGenerateEffect words={"From Vision to Interaction"}
                                        className="text-center text-[40px] md:text-5xl lg:text-6xl"/>
                    <p className="mb-4 text-center text-sm md:text-lg md:tracking-wider lg:text-2xl">
                        Hi, I'm Garik Sandrosyan, a Front-end Developer passionate about building engaging and impactful user experiences.
                    </p>
                    <a href="#projects">
                        <MagicButton
                            title="Show my work"
                            icon={<FaLocationArrow/>}
                            position={"right"}
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Hero;