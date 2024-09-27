import Link from "next/link";
import React from "react";

const IPhone = () => {
    return (
        <section className="bg-custom-gradient">
            <div className="container mx-auto flex flex-col md:flex-row justify-between px-4 md:px-10">
                <div className="flex flex-col text-center md:text-left justify-center text-white my-[5.5rem] md:my-0">
                    <p className="font-figtree font-semibold text-3xl leading-[2rem] text-[#909090]">Pro.Beyond.</p>
                    <h1 className="font-sfPro font-light text-[4.5rem] md:text-[6rem] leading-[4.5rem] tracking-tight my-6">
                        iPhone 14 <span className="font-semibold">Pro</span>
                    </h1>
                    <p className="font-sfPro font-medium text-[#909090] text-lg leading-[1.5rem]">
                        Created to change everything for the better. For everyone
                    </p>
                    <button className="mt-6 border border-white rounded-md py-4 px-14 self-center md:self-start hover:bg-white hover:text-black transition-colors duration-300" aria-label="Shop for iPhone 14 Pro">
                        <Link href={'/'} className="font-sfPro font-medium text-base leading-[1.5rem]">
                            Shop Now
                        </Link>
                    </button>
                </div>
                <div className="flex justify-center">
                    <img src="images/IphoneImage.png" alt="" />
                </div>
            </div>
        </section>
    )
}
export default IPhone;
