import React, { memo } from 'react';

const SlowList = ({ count }) => {
    const Elems = () => {
        let a = [];
        for (let i = 0; i < count; i++) {
            a.push(<p key={i}>User N°{i}</p>)
            
        }
         
        return a;
    }
    return (
        <div>
            <Elems style={{color:"#fff"}}/>
        </div>
    )
}

export default memo(SlowList);