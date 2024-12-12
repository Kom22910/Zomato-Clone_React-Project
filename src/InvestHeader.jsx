

import React, { StrictMode, useState } from 'react'

const InvestHeader = () => {



    const [show, setHide] = useState(false);

    return (
        <StrictMode>

            <div className="col-12 p-5 bg-danger">

                <div className="col-10 m-auto iheader">
                    <div className="row">


                        {/* part 1 */}
                        <div className="col-4 p-3 part1">
                            <div className="row">


                                {/* element 1 */}
                                <div className="col-4 middle">
                                    <img src="InvestorPageAsset/10021.webp" alt="" className='d-block w-100' />
                                </div>

                                {/* element  2 */}
                                <div className="col-8 middle ele2">
                                    <p className='py-2 pb-0'>Investor Relations</p>
                                </div>


                            </div>
                        </div>



                        {/* part 2 */}
                        <div className="col-8 ms-auto part2">
                            <div className="row">

                                <ul className='py-4'>
                                    <li>Home</li>
                                    <li>Financials</li>
                                    <li>Announcements</li>
                                    <li>Blog</li>
                                    <li>Governance</li>
                                    <li onMouseEnter={() => setHide(true)} >ESG <i class="bi bi-chevron-down"></i></li>
                                    <li>Resource</li>
                                </ul>

                            </div>

                            {
                                show && (

                                    <div className="col-3 bg-warning drop" onMouseLeave={() => setHide(false)}>
                                        <p>ESG Initiative</p>
                                        <p>ESG Microsite</p>
                                    </div>
                                )
                            }
                        </div>




                    </div>
                </div>

            </div>

        </StrictMode>
    )
}

export default InvestHeader;