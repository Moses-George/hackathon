import { ReactComponent as PurpleLensFlare } from "@/assets/images/Purple-Lens-Flare-PNG.svg";
// import { ReactComponent as Title } from "@/assets/images/Title.svg";
import HackathonGuy from "@/assets/images/hackathon-guy.png";
import { ReactComponent as CountDown } from "@/assets/images/countdown-time.svg";
import title from "@/assets/images/title.png";
import { Button } from "./ui/button";


const TitleSection = () => {

    return (
        <section className="relative py-20 grid grid-cols-2 border-solid">
            <PurpleLensFlare className="absolute -top-20 -left-10  " />
            <div className="w-full space-y-12">
                <div className="text-white space-y-6">
                    <img src={title} alt=""  />
                    <p className="max-w-sm">Participate in getLinked tech Hackathon 2023 stand a chance to win a big price</p>
                    <Button className="bg-gradient-to-r from-peach to-purple px-4 w-32 rounded-[.2rem] border-gradient z-[1000]" >Register</Button>
                </div>
                <CountDown />
            </div>
            <img className="w-full -mr-20 h-full justify-self-end align-self-center" src={HackathonGuy} alt="hackathon guy" />
        </section>
    )
}

export default TitleSection;