import TheBigIdea from "@/assets/images/the-big-idea.png";
// import { ReactComponent as StarGra } from "@/assets/images/star-gra.svg";
// import { ReactComponent as StarPu } from "@/assets/images/star-pu.svg";


const IntroSection = () => {

    return (
        <section className="py-20 grid grid-cols-2 gap-x-20">
            {/* <StarGra className="absolute left-5 w-16 h-16 z-[100] " /> */}
            {/* <StarPu className="absolute right-60" /> */}
            <div className="">
                <img className="w-4/5" src={TheBigIdea} />
            </div>
            <div className="space-y-5 self-center w-full max-w-lg">
                <div className="space-y-2">
                    <h2 className="text-white text-3xl font-bold">Intoduction to getLinked</h2>
                    <h2 className="text-peach text-3xl font-bold">techHackathon 1.0</h2>
                </div>
                <p className="text-white leading-7">
                    Our tech hackathon is a melting pot of visionaries, and its purpose is as
                    clear as day: to shape the future. Whether you're a coding genius, a
                    design maverick, or a concept wizard, you'll have the chance to transform
                    your ideas into reality. Solving real-world problems, pushing the boundaries
                    of technology, and creating solutions that can change the world,
                    that's what we're all about!
                </p>
            </div>
        </section>
    )
}

export default IntroSection;