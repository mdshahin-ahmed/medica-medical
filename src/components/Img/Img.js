import React from 'react';

const Img = ({img}) => {
    const {imgSrc} = img;
    // console.log(imgSrc);
    return (
        
        <div className="col-md-6 col-lg-4 mb-4">
            <img className='h-100 w-100' src={imgSrc} alt="" />
        </div>
        
    );
};

export default Img;