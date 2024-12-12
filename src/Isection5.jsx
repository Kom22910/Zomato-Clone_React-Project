


import React, { StrictMode } from 'react'

const Isection5 = () => {
  return (
    <StrictMode>

        <div className="col-12 isection5">
            <div className="col-10 py-5 px-1 m-auto">

                <div className="row">

                    {/* part1  */}
                    <div className="col-6 part1">
                        <p className='fs-1 fw-bold'>Subscribe to our email alerts</p>
                        <p className='p1'>Get regular updates through email</p>

                        <div className="col-8">
                            <input type="text" placeholder='Email' className='form-control p1'/>
                            <button className='py-2 p1 px-3 w-50 btn btn-danger mt-4'>Subscribe</button>
                        </div>
                    </div>


                    <div className="col-6 part2">
                        <p className='fs-1 fw-bold'>Have question ?</p>
                        <p className='p1'>Reach out to us by emailing at <span className='text-danger'>shareholders@zomato.com</span> , and we'll get back to you.</p>

                        <div className="col-8 mt-4">
                            <button className='btn btn-danger p1 w-50 py-2'>Contact Us</button>    
                        </div>
                    </div>

                </div>

            </div>
        </div>





    </StrictMode>
  )
}

export default Isection5;