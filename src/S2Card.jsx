import { StrictMode } from "react";
import { NavLink } from "react-router-dom";



const S2Card = ({ path, para1, para2, web }) => {



    return (
        <StrictMode>

            <div className="col-md-3 col-6 p-md-1 p-2">
                <NavLink to={web}>
                    <div className="col-12 card1 p-0" style={{ backgroundImage: path }}>
                        <div className="col-12">
                            <div className="detail">
                                <p className='p1'>{para1}</p>
                                <p className='p2'>{para2} <i class="bi bi-caret-right-fill"></i></p>
                            </div>
                        </div>
                    </div>
                </NavLink>
            </div>



        </StrictMode>
    )
}


export default S2Card;