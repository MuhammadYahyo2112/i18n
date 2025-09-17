import React from 'react'
import location from "../assets/location.png"
import qongiroq from "../assets/qongiroq.png"
import money from "../assets/money.png"
import eat from "../assets/eat.png"
import { useTranslation } from "react-i18next";

const Section2 = () => {
  const { t } = useTranslation();

  return (
    <div className='mt-20 bg-[linear-gradient(180deg,rgba(255,206,103,0.22)_-42.47%,rgba(253,237,202,0)_100%)]'>
      <h1 className='text-[#F17228] text-center font-bold text-[43px]'>
        {t("section2.title")}
      </h1>

      <div className='flex flex-wrap justify-center gap-10 py-20'>
        <div className='w-[350px]'>
          <img className='m-auto' src={location} alt="" />
          <p className='text-[22px] text-center font-bold'>
            {t("section2.steps.0.title")}
          </p>
          <p className='w-[280px] m-auto text-center'>
            {t("section2.steps.0.desc")}
          </p>
        </div>

        <div className='w-[350px]'>
          <img className='m-auto' src={qongiroq} alt="" />
          <p className='text-[22px] text-center font-bold'>
            {t("section2.steps.1.title")}
          </p>
          <p className='w-[280px] m-auto text-center'>
            {t("section2.steps.1.desc")}
          </p>
        </div>

        <div className='w-[350px]'>
          <img className='m-auto' src={money} alt="" />
          <p className='text-[22px] text-center font-bold'>
            {t("section2.steps.2.title")}
          </p>
          <p className='w-[280px] m-auto text-center'>
            {t("section2.steps.2.desc")}
          </p>
        </div>

        <div className='w-[350px]'>
          <img className='m-auto' src={eat} alt="" />
          <p className='text-[22px] text-center font-bold'>
            {t("section2.steps.3.title")}
          </p>
          <p className='w-[280px] m-auto text-center'>
            {t("section2.steps.3.desc")}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Section2
