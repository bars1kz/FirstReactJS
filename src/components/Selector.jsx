import React from 'react';
import '../styles/Selector.scss'

const Selector = (props) => {
    return (
        <div className='Selector'>
            <div className='TypeSpace'>
                <div className='Types'>{props.post.body}</div>
            </div>
        </div>
    );
};

export default Selector;