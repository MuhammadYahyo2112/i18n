import React from 'react'
import location from "../assets/location.png"
import qongiroq from "../assets/qongiroq.png"
import money from "../assets/money.png"
import eat from "../assets/eat.png"
import { useTranslation } from "react-i18next";

const section2 = () => {
      const { t } = useTranslation();
  return (
    <div className='bg-[linear-gradient(180deg,rgba(255,206,103,0.22)_-42.47%,rgba(253,237,202,0)_100%)]'>
        <h1 className='text-[#F17228] text-center font-bold text-[43px]'>  {t("title")}</h1>
        <div className='flex flex-wrap justify-center gap-10 py-20'>
            <div className='w-[350px]'>
                <img className='m-auto' src={location} alt="" />
                <p className='text-[22px] text-center font-bold'>Select location</p>
                <p className='w-[280px] m-auto text-center'>Choose the location where your food will be delivered.</p>
            </div>
               <div className='w-[350px]'>
                <img className='m-auto' src={qongiroq} alt="" />
                <p className='text-[22px] text-center font-bold'>Choose order</p>
                <p className='w-[280px] m-auto text-center'>Check over hundreds of menus to pick your favorite food</p>
            </div>
               <div className='w-[350px]'>
                <img className='m-auto' src={money} alt="" />
                <p className='text-[22px] text-center font-bold'>Pay advanced</p>
                <p className='w-[280px] m-auto text-center'>It's quick, safe, and simple. Select several methods of payment</p>
            </div>
               <div className='w-[350px]'>
                <img className='m-auto' src={eat} alt="" />
                <p className='text-[22px] text-center font-bold'>Enjoy meals</p>
                <p className='w-[280px] m-auto text-center'>Food is made and delivered directly to your home.</p>
            </div>
        </div>
    </div>
  )
}

export default section2