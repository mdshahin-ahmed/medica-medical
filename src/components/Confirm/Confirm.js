import React from 'react';
import { Link } from 'react-router-dom';

const Confirm = () => {
    return (
        <div className='mt-5 pt-5'>
            <div style={{width:'500px', height:'auto', margin:'0 auto'}}>
                <img className='w-100 h-auto' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDMDzuc5X1SO0f_T1gSh-rNCAnHVpI6ANf6g&usqp=CAU" alt="" />
            </div>
            <div>
                <Link to='/home'>
                    <button className="btn btn-primary m-auto d-flex">Home</button>
                </Link>
            </div>
        </div>
    );
};

export default Confirm;