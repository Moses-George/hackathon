import championCup from "@/assets/images/champion-cup.png";
import reward from "@/assets/images/rewards.png";

const Rewards = () => {

    return (
        <section className="py-20 grid grid-cols-[4fr_6fr] gap-x-20">
            <div className="w-fit self-center">
                <img className="" src={championCup} alt="" />
            </div>
            <div className="space-y-20 justify-self-end flex flex-col">
                <div className="space-y-6 self-center">
                    <div className="space-y-2">
                        <h2 className="text-white text-3xl font-bold">Prizes and</h2>
                        <h2 className="text-peach text-3xl font-bold">Rewards</h2>
                    </div>
                    <p className="text-white max-w-sm">Highlight of the prizes or reward for the winners and participants</p>
                </div>
                <img className="w-[90%]" src={reward} alt="" />
            </div>
        </section>
    )
}

export default Rewards;