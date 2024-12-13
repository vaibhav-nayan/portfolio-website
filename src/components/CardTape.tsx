import Image, { StaticImageData } from "next/image"
import { Fragment } from "react"
import { Card } from "./Card"
import { twMerge } from "tailwind-merge"


export const CardTape = ({list, title, className} : {
    list : {
        name: string,
        position: string,
        text: string,
        avatar : StaticImageData,
    }[],
    title : string,
    className : string
}) =>{
    return (
        <div className="mt-12 lg:mt-24 flex flex-col container">
            <div className=" mb-8 text-center w-full font-semibold text-2xl text-transparent 
            bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text tracking-widest uppercase">
                {title}
            </div>
            <div className=" flex overflow-x-clip 
            [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] py-4 -my-4">
                <div  className={twMerge(`flex gap-8 pr-8 flex-none [animation-duration:60s] hover:[animation-play-state:paused]`,className)}>
                    {[...new Array(2)].fill(0).map((_,index) =>(
                    <Fragment key={index}>
                        {list.map(item =>(
                            <Card key={item.name} className="max-w-xs md:p-8 p-6 
                            md:max-w-md hover:-rotate-3 transition duration-300">
                            <div className="flex gap-4 items-center">
                                <div className="size-14 bg-gray-700 inline-flex text-center
                                justify-center rounded-full flex-shrink-0">
                                <Image 
                                    src={item.avatar} 
                                    alt={item.name}
                                    className="max-h-full rounded-full"/>
                                </div>
                                <div>
                                <div className="font-semibold">{item.name}</div>
                                <div className="text-sm text-white/40">{item.position}</div>
                                </div>
                            </div>
                            <p className="mt-4 md:mt-6 text-sm">{item.text}</p>
                            </Card>
                        ))}
                    </Fragment>
                    ))}
                </div>
            </div>
        </div>
        
    )
}