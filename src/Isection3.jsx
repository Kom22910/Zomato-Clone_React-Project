

import React, { StrictMode } from 'react'

const Isection3 = () => {
  return (
    <StrictMode>

      <div className="col-12">


        {/* ************************************************ */}
        <div className="col-10 m-auto p-4">
          <p className='fs-1 fw-bold'>Corporate announcements</p>
          <hr className='my-5' />


            <div className="col-12">
              <p className=' mb-0'>2 December 2024</p>
              <p className=' fs-2 my-1'>Zomato - Intimation of schedule of participation in investor conferences</p>
              <p className=' fs-5 text-danger mb-0'>Read More <img src="InvestorPageAsset/10002.svg" alt="" /></p>
              <hr className='my-5' />
            </div>

            <div className="col-12">
              <p className=' mb-0'>2 December 2024</p>
              <p className=' fs-2 my-1'>Zomato - Intimation of allotment of equity shares to Foodie Bay Employees ESOP Trust</p>
              <p className=' fs-5 text-danger mb-0'>Read More <img src="InvestorPageAsset/10002.svg" alt="" /></p>
            </div>

            <div className="col-6 my-5">
              <button className='btn btn-danger px-3 py-2'>See all announcements</button>
            </div>


        </div>


        {/* ********************************************************** */}


      </div>




    </StrictMode>
  )
}

export default Isection3;