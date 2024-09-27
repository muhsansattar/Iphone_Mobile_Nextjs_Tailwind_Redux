import Image from "next/image";
import Link from "next/link";
import React from "react";

const Macbook = () => {
    return (
        <div>
            {/* container for larger devices */}
            {/* mabook container */}
            <div className="hidden md:flex md:flex-col justify-between lg:flex-row">
                {/* left section */}
                <div className="flex flex-col justify-between flex-1">
                    {/*left upper section */}
                    <div className="flex justify-between items-center">
                        <div className="w-full h-auto">
                            <Image
                                src={'/images/PlayStation.png'}
                                alt="PlayStation 5 Console"
                                width={360}
                                height={343}
                                layout="responsive"
                            />

                        </div>
                        <div className="pr-16 flex flex-col justify-center items-left gap-4">
                            <h1 className="font-sfPro text-[3.1rem] font-medium leading-[2.5rem] text-black">Playstation 5</h1>
                            <p className="text-[#909090] font-sfPro text-md leading-[1.5rem]">Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.</p>
                        </div>
                    </div>
                    {/* left lower section */}
                    <div className="flex flex-col justify-between lg:flex-row">
                        {/* lower section left part */}
                        <div className="flex justify-between bg-[#EDEDED] items-center flex-1">
                            <div className=" h-auto">
                                <Image
                                    src={'/images/headphone.png'}
                                    alt="playstation"
                                    width={104}
                                    height={272}
                                    layout="responsive"
                                />
                            </div>
                            <div className="font-sfPro flex flex-col justify-center py-16 px-8">
                                <h1 className="text-3xl font-light leading-[2.5rem] text-left">
                                    Apple AirPods
                                    <span className="font-medium">Max</span></h1>
                                <p className="text-md font-medium leading-[1.5rem] text-[#909090] text-wrap mt-2">Computational audio. Listen, its powerful</p>
                            </div>
                        </div>
                        {/* lower section right part */}
                        <div className="flex justify-between bg-[#353535] items-center flex-1">
                            <div className="h-auto">
                                <Image
                                    src={'/images/apple-vision.png'}
                                    alt="playstation"
                                    width={136}
                                    height={190}
                                    layout="responsive"
                                />
                            </div>
                            <div className="font-sfPro py-16 px-4">
                                <h1 className="text-3xl font-light leading-[2.5rem] text-left text-white">Apple <br /> Vision Pro</h1>
                                <p className="text-md font-medium leading-[1.5rem] text-[#909090] text-wrap mt-2">An immersive way to experience entertainment</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* right section */}
                <div className="flex justify-between bg-[#EDEDED] items-center flex-1">
                    <div className="font-sfPro text-left ml-[3.5rem]">
                        <h1 className="text-[4rem] font-light leading-[3.4rem] text-nowrap">Macbook <span className="font-medium">Air</span></h1>
                        <p className="text-[#909090] font-sfPro text-md leading-[1.5rem] my-4">The new 15-inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.</p>
                        <button className="py-[1rem] px-[3.5rem] border border-black rounded-md">
                            <Link href={'/'} className="font-sfPro text-base font-medium leading-[1.5rem] text-black">
                                Shop Now
                            </Link>
                        </button>

                    </div>
                    <div className="w-full h-auto">
                        <Image
                            src={'/images/MacBook Pro 14.png'}
                            alt="cover"
                            width={292}
                            height={502}
                            layout="responsive"
                        />
                    </div>
                </div>
            </div>
            {/* container for smaller screens */}
            <div className="md:hidden font-sfPro">
                {/* Apple air pods  */}
                <div className="bg-[#EDEDED] flex flex-col justify-center items-center py-[2.5rem] px-[1rem]">
                    <div>
                        <img src="/images/mdheadphone.png" alt="playstation" />
                    </div>
                    <div className="text-center my-[1.5rem]">
                        <span className="text-[2.175rem] font-light leading-[2.5rem]">Apple AirPods</span>
                        <span className="text-[2.175rem] font-medium leading-[2.5rem]">Max</span>
                        <p className="text-base font-medium leading-[1.5rem] text-[#909090] my-[1rem]">Computational audio. Listen, it's powerful.</p>
                    </div>
                </div>
                {/* Apple visio  pro */}
                <div className="bg-[#353535] flex flex-col justify-center items-center py-[2.5rem] px-[1rem]">
                    <div>
                        <img src="/images/mdapplevision.png" alt="Appele Vision" />
                    </div>

                    <div className="text-center my-[1.5rem]">
                        <span className="text-[2.175rem] font-light leading-[2.5rem] text-white">Apple Vision</span>
                        <span className="text-[2.175rem] font-medium leading-[2.5rem] text-white">Pro</span>
                        <p className="text-base font-medium leading-[1.5rem] text-[#909090] my-[1rem]">An immersive way to experience entertainment.</p>
                    </div>
                </div>
                {/* Playstation */}
                <div className="bg-white flex flex-col justify-center items-center py-[2.5rem] px-[1rem]">
                    <div>
                        <img src="/images/mdplaystation.png" alt="Play Station" />
                    </div>
                    <div className="text-center my-[1.5rem]">
                        <span className="text-[2.175rem] font-light leading-[2.5rem]">Playstation</span>
                        <span className="text-[2.175rem] font-medium leading-[2.5rem]">5</span>
                        <p className="text-base font-medium leading-[1.5rem] text-[#909090] my-[1rem]">Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.</p>
                    </div>
                </div>
                {/* Macbook */}
                <div className="bg-[#EDEDED] flex flex-col justify-center items-center py-[2.5rem] px-[1rem]">
                    <div>
                        <img src="/images/mdmacbookpro.png" alt="Macbook" />
                    </div>
                    <div className="text-center my-[1.5rem]">
                        <span className="text-[2.175rem] font-medium leading-[2.5rem]">Macbook</span>
                        <span className="text-[2.175rem] font-light leading-[2.5rem]">Air</span>
                        <p className="text-base font-medium leading-[1.5rem] text-[#909090] my-[1rem]">The new 15-inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.</p>
                    </div>
                    <button className="py-[1rem] px-[3.5rem] border border-black rounded-[6px]">
                        <Link href={'/'} className="font-sfPro text-base font-medium leading-[1.5rem]">
                            Shop Now
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Macbook;