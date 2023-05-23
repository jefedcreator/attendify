import { StaticImageData } from 'next/image'
import React from 'react'
import Image from "next/image"

type FeaturesCardProps = {
    src:StaticImageData,
    title:string,
    description:string,
    alt:string
}

function FeaturesCard({src, title, description,alt}:FeaturesCardProps) {
  return (
    <div>
      <div className='flex justify-center items-center my-2'>
        <Image width={34} height={40} src={src.src} alt={alt} />
        </div>
        <h4 className='text-center font-bold text-[#F9F8FB] lg:text-smallxx md:leading-sm-x lg:text-smallxx lg:leading-sm-x my-2'>{title}</h4>
        <p className='text-[#9D94B8] md:w-11/12 lg:w-11/12 text-center leading-sm-xx text-minimal md:text-minimal md:leading-sm-xx lg:text-minimal lg:leading-sm-xx'>{description}</p>
    </div>
  )
}

export default FeaturesCard