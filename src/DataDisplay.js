import React, { memo } from 'react';

const DataDisplay = ({ data }) => {
    return (
        <div>
        <h3>{data.read().foo}</h3>
         
        </div>
    )
}

export default memo(DataDisplay);
