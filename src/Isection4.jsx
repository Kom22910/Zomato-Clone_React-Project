

import React, { StrictMode } from 'react'

const Isection4 = () => {


    const info = [
        {
            image: "InvestorPageAsset/10036.png",
            subtitle: "Restaurants",
            p: "Shurba Saha | 2 December 2024",
            title: "The Big Brand Theory | From Piano ..",
            p1: "Read more about the story of Chowman, a brand which is enchanting tastebuds with a flavorful and authentic take on Chinese cuisine"
        },
        {
            image: "InvestorPageAsset/10037.png",
            subtitle: "Technology",
            p: "Data Platform Team | 18 November 2024",
            title: "Apache Flink Journey @Zomato: From...",
            p1: "How we built a self-serve stream processing platform to empower real-time analytics"
        },
        {
            image: "InvestorPageAsset/10038.png",
            subtitle: "Restaurants",
            p: "Shurba Saha | 14 November 2024",
            title: "The Big Brand Theory | How Ma's Recipe...",
            p1: "Discover how childhood friends Ankit Gupta and Chirag Chhajer brought Burma’s hidden treasures to India through a unique dining experience."
        }
    ]





    return (

        <StrictMode>

            <div className="col-12 isection4 py-1 pb-5">

                <div className="col-10 m-auto py-5">

                    <p className='fs-1 fw-bold'>From our blogs</p>

                    <div className="row ps-3">

                        {
                            info.map((val) => {
                                return (
                                    <div className="col-4 p-3">
                                        <div className="col-12 card1">



                                            {/* element1 */}
                                            <div className="col-12 ele1 mb-2">
                                                <img src={val.image} alt="" className='d-block w-100' />

                                                <p className='substitle btn'>{val.subtitle}</p>
                                            </div>

                                            {/* element 2 */}
                                            <div className="col-12 ele2 ps-2">
                                                <p className='mb-2'><small>{val.p}</small></p>
                                                <p className='fs-4 p1' >{val.title}</p>
                                                <p style={{ fontSize: 18 + "px" }}>{val.p1}</p>
                                            </div>


                                        </div>
                                    </div>

                                )
                            })
                        }


                    </div>


                    <div className="row">
                        <div className="col-6">
                            <button className='btn btn-danger py-2 w-25'>Read our blogs</button>
                        </div>
                    </div>


                </div>



            </div>



        </StrictMode>
    )
}

export default Isection4;