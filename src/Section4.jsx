import { StrictMode } from "react"




const Section4 = () => {


    const i1 = {
        type : "Email"
    }


    return (
        <StrictMode>

            <div className="col-12 mt-5 section4">
                <div className="row">

                    {/* part 1 */}
                    <div className="col-md-6">
                        <div className="col-9 ms-md-auto m-auto">
                            <img src="MainPageAsset/10033.webp" alt="" className="d-block w-100" />
                        </div>
                    </div>


                    {/* part 2 */}
                    <div className="col-md-6 part2 py-3">
                        <div className="col-12">

                            {/* element 1 */}
                            <div className="col-12 ele1">
                                <h1>Get the Zomato app</h1>
                                <p>We will send you a link, open it on your Phone to Download the app</p>
                            </div>


                            {/* element2 */}

                            <div className="col-12 ele2 mt-md-5 mt-4">
                                <div className="row">

                                    <div className="col-3 input1">
                                        <input type="radio" checked="checked" name="platform" />
                                        <label>Email</label>
                                    </div>

                                    <div className="col-3 input1">
                                        <input type="radio" name="platform"  placeholder="Phone Number"/>
                                        <label>Phone</label>
                                    </div>


                                </div>
                            </div>


                            {/* element 3 */}
                            <div className="col-md-12 col-10 mt-md-5 mt-4 m-auto">
                                <div className="row">

                                    {/* part1 */}
                                    <div className="col-md-6 col-8 pe-0">
                                        <input type="email" placeholder="Email" className="form-control py-2 fs-md-5" />
                                    </div>

                                    {/* part 2 */}
                                    <div className="col-md-6 col-4 ps-1">
                                        <button className="btn btn-danger py-2 fs-md-5 fw-light ">Share App Link</button>
                                    </div>

                                </div>
                            </div>


                            {/* element 4 */}
                            <div className="col-12 mt-md-5 mt-4 ele2">

                                <p className="fs-5">Download app from</p>

                                <div className="row">
                                    <div className="col-md-3 col-4">
                                        <img src="MainPageAsset/10035.webp" alt="" className="d-block w-100" />
                                    </div>

                                    <div className="col-md-3 col-4">
                                        <img src="MainPageAsset/10034.webp" alt="" className="d-block w-100" />
                                    </div>
                                </div>


                            </div>

                        </div>
                    </div>


                </div>
            </div>



        </StrictMode>
    )
}


export default Section4;