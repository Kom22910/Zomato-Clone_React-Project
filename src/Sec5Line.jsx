


import React, { StrictMode } from 'react'

const Sec5Line = ({ p, path, fun, list, s }) => {

    console.log(s);


    return (
        <StrictMode>

            <div className="col-12 firstLine mt-4" onClick={fun}>
                <div className="row">

                    <div className="col-8 part1">
                        <p>{p}</p>
                    </div>

                    <div className="col-1 ms-auto part2">
                        <p>{path}</p>
                    </div>
                </div>


                <div className="row part2">

                    {
                        s && (

                            <ul>
                                {

                                    list.map((val) => {
                                        return (
                                            <li className='my-1 ms-4 me-4'>
                                                <span>{val}</span>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        )
                    }
                </div>
            </div>





        </StrictMode>
    )
}

export default Sec5Line;