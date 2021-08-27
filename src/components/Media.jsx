import React from 'react';
import '../styles/Media.scss'

const Media = (props) => {

    const foto = "https://i.ibb.co/"+props.post.imgs+".png"

    return (
        <div className='PhotoArea'>
            <div className='Image' style={{backgroundImage: 'url('+ foto +')'}}>
                <div className='DeleteImg'>
                    <div className='XStyle'></div>
                </div>
            </div>
        </div>
    );
};

export default Media;