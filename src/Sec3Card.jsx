


import React, { StrictMode } from 'react'

const Sec3Card = ({title,places}) => {
    return (
        <StrictMode>


            <div className="col-md-4 col-6 px-2">
                <div className="col-12 card1 ">

                    <div className="row">

                        {/* element 1 */}
                        <div className="col-8 ele1">
                            <h4>{title}</h4>
                            <p>{places}</p>
                        </div>

                        {/* element 2 */}
                        <div className="col-1 ms-auto ele2">
                            <img src="MainPageAsset/10008.svg" alt="more" />
                        </div>
                    </div>


                </div>
            </div>



        </StrictMode>
    )
}

export default Sec3Card;