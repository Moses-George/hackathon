// import { ReactComponent as StarPu } from "@/assets/images/star-pu.svg"; 
import cwork from "@/assets/images/cwok-casual.png";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import { faQs } from "@/utils/faQs";





const FaQs = () => {

    return (
        <section className="py-20 w-full grid grid-cols-2 gap-x-20">
            <div className="space-y-12">
                <div className="space-y-5">
                    <div className="space-y-2">
                        <h2 className="text-white text-3xl font-bold">Frequently asked</h2>
                        <h2 className="text-peach text-3xl font-bold">Questions</h2>
                    </div>
                    <p className="text-white text-sm leading-normal max-w-xs">
                        We got answers to the questions that you might
                        want to ask about <span className="font-bold">getlinked Hackathon 1.0</span>
                    </p>
                </div>
                <div className="w-full max-w-md text-white space-y-3">
                    {faQs.map(faq =>
                        <Accordion type="single" collapsible key={faq.id} >
                            <AccordionItem value="item-1" className="border-solid border-b-2 border-purple">
                                <AccordionTrigger>{faq.question}</AccordionTrigger>
                                <AccordionContent>
                                    {faq.answer} 
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    )}
                </div >
            </div >
            <div className="self-center">
                <img className="" src={cwork} alt="" />
            </div>
        </section >
    )
}

export default FaQs;