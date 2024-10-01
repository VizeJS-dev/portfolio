"use client";

import { projects } from "@/data";
import { PinContainer } from "@/components/ui/3d-pin";

const RecentProjects = () => {
    return (
        <div className="py-20" id="projects">
            <h1 className="heading">
                A small selection of{" "}
                <span className="text-purple">recent projects</span>
            </h1>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-16 p-4">
                {projects.map((item) => (
                    <div
                        className="flex items-center justify-center h-[25rem] w-[80vw] sm:w-96 lg:min-h-[32.5rem]"
                        key={item.id}
                    >
                        <PinContainer
                            title={item.link}
                            href={item.link}
                        >
                            <div className="relative mb-10 flex items-center justify-center overflow-hidden w-[80vw] h-[20vh] sm:w-96 lg:h-[30vh]">
                                <div
                                    className="relative h-full w-full overflow-hidden lg:rounded-3xl"
                                    style={{ backgroundColor: "#13162D" }}
                                >
                                    <img src="/bg.png" alt="bgimg" />
                                </div>
                                <img
                                    src={item.img}
                                    alt="cover"
                                    className="absolute bottom-0 z-10 w-full h-full object-scale-down"
                                />
                            </div>

                            <h1 className="text-base font-bold line-clamp-1 md:text-xl lg:text-2xl">
                                {/*add a work in progress tag if item.workInProgress is true*/}
                                {item.title} {item.workInProgress && <span className="text-xs text-red">WIP</span>}
                            </h1>

                            <p
                                className="text-sm font-light line-clamp-2 lg:text-xl lg:font-normal"
                                style={{
                                    color: "#BEC1DD",
                                    margin: "1vh 0",
                                }}
                            >
                                {item.des}
                            </p>

                            <div className="mt-7 mb-3 flex items-center justify-between">
                                <div className="flex items-center">
                                    {item.iconLists.map((icon, index) => (
                                        <div
                                            key={index}
                                            className="flex h-8 w-8 items-center justify-center rounded-full border bg-black border-white/[.2] lg:h-10 lg:w-10"
                                            style={{
                                                transform: `translateX(-${5 * index + 2}px)`,
                                            }}
                                        >
                                            <img src={icon} alt="icon5" className="p-2" />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </PinContainer>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RecentProjects;