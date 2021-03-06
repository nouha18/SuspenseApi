import React from 'react';
export const dataFetcher = (params) => {
    return wrapPromise(fetchData(params))
}

const wrapPromise = (promise) => {
    let status = "pending";
    let result;
    let suspender = promise.then(
        r => {
            status = "success";
            result = r;
        },
        e => {
            status = "error";
            result = e;
        }
    );
    return {
        read() {
            if (status === "pending") {
                throw suspender;
            } else if (status === "error") {
                throw result;
            } else if (status === "success") {
                return result;
            }
        }
    };
}
 
const fetchData = (params) => {
    // In a real situation, use params to fetch the data required.
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({
                foo: 'reading'
            })
        }, 3000);
    });
}