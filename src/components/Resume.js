import React from 'react'
import data from '../data/data.json';

export default function Resume(props) {
    let info=data.Mobiles[props.location.data1.key];
    console.log(info);


    return (
        <div className="row justify-content-center">
            <div className="col-lg-3 m-2">
                <div className="card">
                    <div className="card-body">
                        <h1>product: {info.details.name}</h1>
                        <h3 className="text-secondary">Model: { info.details.model }</h3>
                        <h3>price: {info.details.price}</h3>
                    </div>
                </div>
            </div>
            <div className="col-lg-8 m-2"></div>
        </div>
    )
}

