export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Experience", link: "#experience" },
    { name: "Contact", link: "#contact" },
];

export const gridItems = [
    {
        id: 1,
        title: "I'm deeply passionate about web development and design in all its aspects. Why? Because it's incredible how just a few lines of code can transform the world. The possibilities are endless, and you're free to create anything you imagine.",
        description: "",
        className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
        imgClassName: "w-full h-full",
        titleClassName: "justify-end",
        spareImg: "",
    },
    {
        id: 2,
        title: "27-year-old Front-end Developer from Friesland, NL.",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "",
        spareImg: "",
    },
    {
        id: 3,
        title: "My tech stack",
        description: "I constantly try to improve",
        className: "lg:col-span-2 md:col-span-3 md:row-span-2",
        imgClassName: "",
        titleClassName: "justify-center",
        img: "",
        spareImg: "",
    },
    {
        id: 4,
        title: "Tech enthusiast with a passion for development.",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-start",
        img: "/grid.svg",
        spareImg: "/b4.svg",
    },

    {
        id: 5,
        title: "Currently building a Reddit clone",
        description: "The Inside Scoop",
        className: "md:col-span-3 md:row-span-2",
        imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
        titleClassName: "justify-center md:justify-start lg:justify-center",
        img: "/b5.svg",
        spareImg: "/grid.svg",
    },
    {
        id: 6,
        title: "Do you want to contact me?",
        description: "",
        className: "lg:col-span-2 md:col-span-3 md:row-span-1",
        imgClassName: "",
        titleClassName: "justify-center md:max-w-full max-w-60 text-center",
        img: "",
        spareImg: "",
    },
];

export const projects = [
    {
        id: 1,
        title: "Listify",
        workInProgress: true,
        des: "A app that allows users to create Spotify playlists based on their favorite songs.",
        img: "/spotify.png",
        iconLists: ["/next.svg","/re.svg", "/tail.svg", "/fm.svg"],
        link: "https://listify-inky.vercel.app/",
    },
    {
        id: 2,
        title: "Reddit Clone",
        workInProgress: true,
        des: "A Reddit clone that allows users to post and comment on posts.",
        img: "/reddit.png",
        iconLists: ["/re.svg", "/tail.svg", "/redux.svg"],
        link: "https://github.com/VizeJS-dev/reddit",
    }
];


export const workExperience = [
    {
        id: 1,
        title: "Independent React.js Development",
        desc: "Independently contributed to the development of a web-based platform using React.js, enhancing interactivity and user experience.",
        className: "md:col-span-2",
        thumbnail: "/exp1.svg",
    },
    {
        id: 2,
        title: "Web Development Projects",
        desc: "Independently designed and built web-based features using React.js, focusing on creating responsive and interactive user experiences.",
        className: "md:col-span-2",
        thumbnail: "/exp2.svg",
    },
    {
        id: 3,
        title: "Full Development Lifecycle",
        desc: "Managed the development of a web platform, handling everything from concept to deployment, with a focus on user interface improvements.",
        className: "md:col-span-2",
        thumbnail: "/exp3.svg",
    },
    {
        id: 4,
        title: "User-Facing Features",
        desc: "Developed and maintained user-facing features using modern frontend tools and frameworks, including React and JavaScript, working autonomously.",
        className: "md:col-span-2",
        thumbnail: "/exp4.svg",
    },
];

export const socialMedia = [
    {
        id: 1,
        img: "/git.svg",
        link: "https://github.com/VizeJS-dev"
    },
    {
        id: 2,
        img: "/link.svg",
        link: "https://www.linkedin.com/in/garik-sandrosyan-5b010a2b3/"
    },
    {
        id: 3,
        img: "/instagram.svg",
        link: "https://www.instagram.com/garik.sandros/"
    }
];