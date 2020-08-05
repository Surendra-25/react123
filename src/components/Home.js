import React from 'react';
import data from '../data/data.json';
import icon from '../data/mobile.jpg';
import Resume from './Resume'
import { Router, Switch, Route, Link } from "react-router-dom";

let Home=()=>{
    let product=data.Mobiles;
    console.log(product);
    return(
        <div className="row justify-content-center">
            {product.map( (values,index)=>(
                <section className="col-lg-4 col-md-4 col-sm-10 mt-2" key={index}>
                    <div className="card">
                        <Link to={{ pathname:"/Resume", data1:{key:index} }}>
                            <article className="card-body">
                                <img src={icon} alt="profile image" style={{width:"50%"}}></img>   
                                <h1>{ values.details.name }</h1>
                            </article>
                        </Link>
                    </div>
                </section>
            )
        
            )}
        </div>
    );
}
export default Home;