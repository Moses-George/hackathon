import criterion from "@/assets/images/criteria.png";
import { JudgingCriteria } from "@/utils/judgingCriteria";
import { Button } from "./ui/button";


const CriteriaSection = () => {

    return (
        <section className="py-20 grid grid-cols-2 gap-x-20">
            <div className="self-center">
                <img src={criterion} alt="" />
            </div>
            <div className="space-y-5">
                <div className="space-y-2">
                    <h2 className="text-white text-3xl font-bold">Judging criteria</h2>
                    <h2 className="text-peach text-3xl font-bold">Key attributes</h2>
                </div>
                <div className="space-y-5 max-w-lg">
                    {JudgingCriteria.map(criterion =>
                        <div className="" key={criterion.id}>
                            <span className="font-semibold text-peach text-md">{criterion.heading}</span>
                            <span className="text-sm text-white"> {criterion.description}</span>
                        </div>
                    )}
                </div>
                <Button className="bg-gradient-to-r from-peach to-purple px-4 w-32 rounded-[.2rem] text-white border-gradient ">Read more</Button>
            </div>
        </section>
    )
}

export default CriteriaSection;