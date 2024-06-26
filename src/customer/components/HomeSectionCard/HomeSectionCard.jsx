import React from 'react'

const HomeSectionCard = () =>{
    return(
        <div className='cursor-pointer flex flex-col items-start bg-white rounded-lg shadow-lg
        overflow-hidden w-[15rem] mx-3 border border-gray-500'>
            <div className='h-[13rem] w-[10rem]'>
                <img className="object-cover object-top w-full h-full" src="https://rukminim1.flixcart.com/image/612/612/k4d27ww0/shirt/q/w/t/
                l-el024-el-senor-original-imafnadnjp5pq6tg.jpeg?q=70" alt="" />
            </div>
            <div className='p-4'>
                <h3 className="text-ig font-medium text-gray-900">Nofilter</h3>
                <p className="mt-2 text-sm text-gray-500">Men Solid Pure Cotton</p>
            </div>

        </div>
    )
}

export default HomeSectionCard