import React from 'react';

function Sponsors() {
  return (
      <React.Fragment>
    <div className='mt-32'>
        <h3 className='text-gray-200 text-center font-bold text-xs md:text-base lg:text-3xl  capitalize '>Our tech partners</h3>
        <div className='grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-4 lg:grid-cols-4 lg:gap-4 items-center mt-4'>
            <div>
                <img src="/assets/moralis.svg" alt="moralis_logo" />
            </div>
            <div>
            <img src="/assets/web3Bridge.svg" alt="web3bridge_logo" />
            </div>
            <div>
            <img src="/assets/conflux.png" alt="conflux_logo" />
            </div>
            <div>
            <img src="/assets/opensea.png" alt="opensea_logo" />
            </div>
        </div>
    </div>
      </React.Fragment>
  )
  }


export default Sponsors