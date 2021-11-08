import React, { useEffect, useState } from 'react';
import Img from '../Img/Img';

const Gallery = () => {
    const [imgs, setImgs] = useState([]);
    console.log(imgs);
    useEffect(()=>{
        fetch('/img.json')
        .then(res => res.json())
        .then(data=>setImgs(data))
    },[])
    return (
        <div>
            <div className="container">
                <h1 className='text-center'>Our Gallery</h1>
                <div className="row">
                    {
                        imgs.map(img=> <Img 
                            key={img.id}
                            img={img}
                        ></Img>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Gallery;