import React from 'react';
import './LeaderBoard.scss';

const LeaderBoard = () => {
    return (
        <div className='board'>
            <ol className='board__list'>
                <div className='board__group'>
                <h1 className='board__title'>Every dog has its day</h1>
                <p className='board__finish'>1.dog eat dog</p>
                <p className='board__finish'>2.</p>
                <p className='board__finish'>3.</p>
                <p className='board__finish'>4.Fuzz Lightyear</p>
                <p className='board__finish'>5.</p>
                <p className='board__finish'>6. Sir Barks-a-Lot</p>
                </div>
                <div className='board__group'>
                <p className='board__finish'>7. see spot run </p>
                <p className='board__finish'>8.</p>
                <p className='board__finish'>9.</p>
                <p className='board__finish'>10. William Shakespaw</p>
                <p className='board__finish'>11.</p>
                <p className='board__finish'>12. Harry Pupper</p>
                </div>
            </ol>
            
        </div>
    );
};

export default LeaderBoard;