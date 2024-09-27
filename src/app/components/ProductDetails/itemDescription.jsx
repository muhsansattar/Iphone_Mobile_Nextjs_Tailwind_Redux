'use client'
import { useSelector } from "react-redux"
import { FiChevronDown } from "react-icons/fi"
const ScreenValue=[
    {
        text:'Screen diagonal',
        val:'6.7"'
    },
    {
        text:'The screen resolution',
        val:'2796x1290'
    },
    {
        text:'The screen refresh rate',
        val:'120 Hz'
    },
    {
        text:'The pixel density',
        val:'460 ppi'
    },
    {
        text:'Screen type',
        val:'OLED'
    },
]
const cpu=[
    {
        text:'CPU',
        val:'A16 Bionic'
    },
    {
        text:'Number of cores',
        val:'6'
    }
]


const Details=()=>{
    const selectedProduct=useSelector(state=>state?.mobileReducer?.selectedMobile)
    if(!selectedProduct){
        return <div className='text-2xl font-bold text-black text-center font-sfPro py-4'></div>
    }
    return(
        <div>
           <div className="bg-[#FAFAFA] my-[5rem] mx-[10rem] py-[3rem] px-[2.5rem] font-sfPro">
           <div>
                <h1 className="text-black text-2xl font-medium">Details</h1>
                <p className="break-all text-[#9D9D9D] font-medium text-md leading-6 my-8">{selectedProduct.description}</p>
            </div>
            <div>
                <h1 className="text-xl font-medium text-black">Screen</h1>
                <div>
                    {ScreenValue.map((value,index)=>(
                        <div key={index} className="flex justify-between items-center my-6 border-b pb-2">
                            <span className="font-medium text-base">{value.text}</span>
                            <span className="text-[0.937rem] text-base">{value.val}</span>
                        </div>
                    ))}
                        <div className="flex justify-between  my-6 border-b pb-2">
                            <span className="font-medium text-base">Additionally</span>
                            <span className="text-[0.937rem] text-base text-right">
                                Dynamic Island <br /> Always-On display <br />HDR display True <br /> Tone Wide color (P3)
                            </span>
                        </div>
                </div>
            </div>
            <div className="pt-[2.5rem]">
                <h1 className="text-xl font-medium text-black mb-4">CPU</h1>
                <div className="">
                    {cpu.map((val,index)=>(
                        <div key={index} className="flex justify-between items-center my-6 border-b pb-2">
                            <span className="font-medium text-base">{val.text}</span>
                            <span className="text-[0.937rem] text-base">{val.val}</span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="flex justify-center">
                <button className="flex justify-between items-center border py-2 px-[3.5rem]  rounded-lg "><span className="mr-2">View More</span><span><FiChevronDown/></span></button>
            </div>
           </div>
        </div>
    )
}
export default Details;