import React, { useState, useTransition, Suspense,lazy } from 'react';
const DataDisplay = lazy(() => import('./DataDisplay'));
import { dataFetcher } from './api';

const initialData = { read: () => { return { foo: "initial" } } };

const Data = () => {
    const [data, setData] = useState(initialData);
    const [count, setCount] = useState(0);
    const [startDataTransition, isDataPending] = useTransition({ timeoutMs: 10000 });

    const fetchNewData = () => {
        startDataTransition(() => {
            setData(dataFetcher())
        })
    }

    return (
        <div>
            <Suspense fallback={<h3 style={{color:'#f00'}}>Loading...</h3>}>
            <DataDisplay data={data} />
             <button disabled={isDataPending} onClick={fetchNewData.bind(this)}>Click me to begin data fetch</button>
            </Suspense>
            <p>Counter: {count}</p>
            <button onClick={() => { setCount(count + 1); }}> Click me</button>
        </div>
    )
}

export default Data;