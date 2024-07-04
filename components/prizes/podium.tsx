import { Prize } from '@/data/prizes';
import { use, useEffect, useState } from 'react';

export default function Podium({ podiumPrizes }: { podiumPrizes: Prize[] }) {
    const [visible, setVisible] = useState(false);
    const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            setPrefersReducedMotion(true);
        }
        setVisible(true);
    }, []);

    return (
        <div className={`w-11/12 desktop:w-3/4 lg:w-2/3 2xl:w-3/5 ${prefersReducedMotion ? "h-96 xl:h-[500px]": `transition-all duration-[1500ms] ${visible ? "h-96 xl:h-[500px]": "h-0"}`} flex justify-around items-end overflow-hidden`}>
            <div className='w-1/3 mx-2 h-2/3 bg-gradient-to-b from-silver via-gray-300  to-hackrpi-secondary-dark-blue flex flex-col items-center justify-start'>
                <h1 className='text-black font-bold font-sans text-lg xs:text-2xl sm:text-4xl mt-2'>{podiumPrizes[1].name}</h1>
                <h2 className='text-black font-bold font-sans text-lg xs:text-2xl sm:text-4xl mt-2'>{podiumPrizes[1].amount}</h2>
            </div>
            <div className='w-1/3 mx-2 h-full bg-gradient-to-b from-gold via-yellow-300   to-hackrpi-secondary-dark-blue flex flex-col items-center justify-start'>
                <h1 className='text-black font-bold font-sans text-lg xs:text-2xl sm:text-4xl mt-2'>{podiumPrizes[0].name}</h1>
                <h2 className='text-black font-bold font-sans text-lg xs:text-2xl sm:text-4xl mt-2'>{podiumPrizes[0].amount}</h2>
            </div>
            <div className='w-1/3 mx-2 h-2/5 bg-gradient-to-b from-bronze via-orange-400 to-hackrpi-secondary-dark-blue flex flex-col items-center justify-start'>
                <h1 className='text-black font-bold font-sans text-lg xs:text-2xl sm:text-4xl mt-2'>{podiumPrizes[2].name}</h1>
                <h2 className='text-black font-bold font-sans text-lg xs:text-2xl sm:text-4xl mt-2'>{podiumPrizes[2].amount}</h2>
            </div>
        </div>
    )
}