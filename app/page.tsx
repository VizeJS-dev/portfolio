import Hero from "@/components/Hero";
import {FloatingNav} from "@/components/ui/FloatingNav";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import {navItems} from "@/data";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main
            className="relative mx-auto flex flex-col items-center justify-center overflow-clip px-5 bg-black-100 sm:px-10">
            <div className="w-full max-w-7xl">
                <FloatingNav navItems={navItems} className={"top-10"}/>
                <Hero/>
                <Grid/>
                <RecentProjects/>
                <Experience/>
                <Footer/>
            </div>
        </main>
    );
}
