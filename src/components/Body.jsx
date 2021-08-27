import React from 'react';
import '../styles/Body.scss'
import Selector from './Selector';
import Friends from './Friends';
import Media from './Media';

const Body = () => {
    return (
        <div className='Body'>
            <div className='Personality'>
                <div className='Avatar'>
                    <div className='Photo'>
                        <div className='Circle'>
                            <div className='ChangePhoto'></div>
                        </div>
                    </div>
                </div>
                <div className='UserName'>Tiana Rosser</div>
                <div className='UserJob'>Developer</div>
            </div>
            <div className='Line'></div>
            <div className='SelectSpace'>
                <div className='Select'>Select type</div>
                <div className='Selectors'>
                    <Selector post={{body:'Black'}}/>
                    <Selector post={{body:'Bold'}}/>
                    <Selector post={{body:'Medium'}}/>
                    <Selector post={{body:'Regular'}}/>
                    <Selector post={{body:'Light'}}/>
                </div>
            </div>
            <div className='Line'></div>
            <div className='Friendship'>
                <div className='FriendTitle'>Friends</div>
                <div className='FriendList'>
                    <Friends post={{name: 'Corey George', work: 'Developer', photo: 'XXPtW4q/12345'}}/>
                    <div className='Line2'></div>
                    <Friends post={{name: 'Ahmad Vetrovs', work: 'Developer', photo: 'rtJWhRB/1234'}}/>
                    <div className='Line2'></div>
                    <Friends post={{name: 'Cristofer Workman', work: 'Developer', photo: 'D9PJkgv/123'}}/>
                    <div className='Line2'></div>
                    <Friends post={{name: 'Tiana Korsgaard', work: 'Developer', photo: 'nDsFghC/123456'}}/>
                    <div className='ButtonFriend'>
                        <div className='TitleArea'>
                            <div className='AddTitle'>ADD FRIEND</div>
                            <div className='Symbol'></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Line'></div>
            <div className='MediaArea'>
                <div className='MediaTitle'>My media</div>
                <div className='Album'>
                    <div className='Row1'>
                        <Media post={{imgs: 'yQtMbW8/Rectangle-6'}}/>
                        <Media post={{imgs: 'YjVNZRn/Rectangle-7'}}/>
                        <Media post={{imgs: '5GNC1Gw/Rectangle-9'}}/>
                    </div>
                    <div className='Row2'>
                        <Media post={{imgs: 'zfZd8vg/Rectangle-8'}}/>
                        <Media post={{imgs: 'LC8K3Jj/Rectangle-11'}}/>
                        <Media post={{imgs: 'RgT2VwL/Rectangle-10'}}/>
                    </div>
                    <div className='Row3'>
                        <Media post={{imgs: 'mBnMn3S/Rectangle-12'}}/>
                        <Media post={{imgs: 'KhQkYfj/Rectangle-14'}}/>
                        <Media post={{imgs: 'zPTQjt1/Rectangle-13'}}/>
                    </div>
                </div>
                <div className='ButtonsSpace'>
                    <div className='ButtonDelete'>
                        <div className='TitleD'>DELETE</div>
                    </div>
                    <div className='ButtonAdd'>
                        <div className='TitleA'>ADD</div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Body;