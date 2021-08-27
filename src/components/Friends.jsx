import React from 'react';
import '../styles/Friends.scss'


const Friends = (props) => {

    const yourUrl = "https://i.ibb.co/"+props.post.photo+".png"

    return (
        <div className='Form'>
            <div className='Ava' style={{backgroundImage: 'url('+ yourUrl +')'}}></div>
            <div className='UserInfo'>
                <div className='User'>{props.post.name}</div>
                <div className='Job'>{props.post.work}</div>
                <div className='DeleteFriend'></div>
            </div>
        </div>
    );
};

export default Friends;