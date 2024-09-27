import Image from "next/image";
import Link from "next/link";

const Lcd = () => {
    return (
        <div>
            {/* for desktop */}
            <div className="hidden md:flex bg-lcd-gradient items-center justify-between">
                <div className="">
                    <Image src="/bidSale/lcd.png" alt="LCD" className="ml-[1.5rem] -mb-[1.5rem] z-10" width={200} height={200} />
                    <Image src="/bidSale/biglcd.png" alt="Big LCD" className="z-0" width={600} height={400} />
                </div>
                <div className="flex flex-col justify-center items-center font-sfPro text-center text-nowrap">
                    <div>
                        <span className="md:text-[2rem] lg:text-[4.5rem] font-thin leading-[4.5rem] text-[#FFFFFF]">Big Summer</span>
                        <span className="md:text-[2rem] lg:text-[4.5rem] font-light leading-[4.5rem] text-[#fff]"> Sale</span>
                    </div>
                    <p className="font-normal text-base leading-[2rem] text-[#787878] mt-2">Commodo fames vitae vitae leo mauris in. Eu consequat.</p>
                    <button className="py-[1rem] px-[3.5rem] rounded-md border mt-[1.5rem] hover:bg-white hover:text-black transition-colors duration-300">
                        <Link href="/" aria-label="Shop Now" className="text-base font-medium leading-[1.5rem] text-white">
                            Shop Now
                        </Link>
                    </button>
                </div>
                <div className="flex flex-col items-end">
                    <Image src="/bidSale/lcdiphone.png" alt="IPhone" className="-mb-[6.5rem]" width={150} height={300} />
                    <Image src="/bidSale/lcdwatch.png" alt="Iwatch" width={150} height={150} />
                </div>
            </div>

            {/* for mobile */}
            <div className="flex flex-col bg-lcd-gradient justify-between md:hidden">
                <div className="flex justify-between items-start">
                    <Image src="/bidSale/mlcd.png" alt="LCD" className="w-[30%]" width={100} height={100} />
                    <Image src="/bidSale/mbiglcd.png" alt="Big LCD" className="w-full" width={300} height={200} />
                    <Image src="/bidSale/miphone.png" alt="IPhone" className="w-full h-auto -ml-[3rem]" width={150} height={300} />
                </div>
                <div className="flex flex-col justify-center items-center font-sfPro">
                    <div>
                        <span className="text-[3rem] sm:text-[4.5rem] font-thin leading-[4.5rem] text-[#FFFFFF]">Big Summer</span>
                        <span className="text-[3rem] sm:text-[4.5rem] font-light leading-[4.5rem] text-[#fff]"> Sale</span>
                    </div>
                    <p className="font-normal text-base leading-[2rem] text-[#787878] mt-2">Commodo fames vitae vitae leo mauris in. Eu consequat.</p>
                    <button className="py-[1rem] px-[3.5rem] rounded-md border mt-[1.5rem] hover:bg-white hover:text-black transition-colors duration-300">
                        <Link href="/" aria-label="Shop Now" className="text-base font-medium leading-[1.5rem] text-white">
                            Shop Now
                        </Link>
                    </button>
                </div>
                <div className="self-end">
                    <Image src="/bidSale/mwatch.png" alt="Iwatch" width={100} height={100} />
                </div>
            </div>
        </div>
    );
};

export default Lcd;
