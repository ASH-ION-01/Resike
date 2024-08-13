import React from 'react'

function Details() {
  return (
    <div className=' flex justify-center items-center mt-3'>
        <div className='flex flex-row w-[50%] justify-evenly border border-black rounded-lg  items-center '>
        <div className='flex flex-col'>
            <h1 className='font-bold mb-5'>Starting</h1>
            <div className='flex flex-row'> 
                <p className=' font-bold'>Lat:</p>
                <p>22.1696</p>
            </div>
            <div className='flex flex-row'> 
                <p className=' font-bold'>Long:</p>
                <p>91.4996</p>
            </div>
        </div>

        <div>
            <div className='flex flex-row text-blue-800'> 
                <p className=' font-bold'>Speed:</p>
                <p>20kmp</p>
            </div>
        </div>

        <div className=' flex flex-col'>
            <h1 className='font-bold mb-5' >Ending</h1>
            <div className='flex flex-row'> 
                <p className=' font-bold'>Lat:</p>
                <p>22.2637</p>
            </div>
            <div className='flex flex-row'> 
                <p className=' font-bold'>Long:</p>
                <p>91.7159</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Details
