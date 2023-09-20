import { ReactComponent as PurpleLensFlare } from "@/assets/images/Purple-Lens-Flare-PNG.svg"; 
// import { ReactComponent as Rules } from "@/assets/images/rules.svg";
import rules from "@/assets/images/rules.png";


const RulesSection = () => {

    return (
        <section className="py-20 grid grid-cols-2 gap-x-20">
            <PurpleLensFlare className="absolute -top-10 -left-10  " />
            <PurpleLensFlare className="absolute -bottom-50 right-0 ml-40  " />
            {/* <StarGra className="absolute left-5 w-16 h-16 z-[100] " /> */}
            {/* <StarPu className="absolute right-60" /> */}
            <div className="space-y-5 self-center max-w-lg ">
                <div className="space-y-2">
                    <h2 className="text-white text-3xl font-bold">Rules and</h2>
                    <h2 className="text-peach text-3xl font-bold">Guidelines</h2>
                </div>
                <p className="text-white leading-7">Our tech hackathon is a melting pot of visionaries, and its purpose is as clear as day: to shape the future.
                    Whether you're a coding genius, a design maverick, or a concept wizard, you'll have the chance to transform
                    your ideas into reality. Solving real world problems, pushing the boundaries of technology and, creating
                    solutions that can change the world, that's what we're all about!
                </p>
            </div>
            <div className="w-full  justify-self-end">
                <img src={rules} />
            </div>
        </section>
    )
}

export default RulesSection;