import React, { Component } from 'react';
import '../assets/css/base.css';
import BaseImage from '../components/BaseImage'

const Base = ( {  data, ...props } ) => {
    return (
        <div className="base">
            {data && <BaseImage basenumber={data.baseLevel}/>}
        </div>
    )
}

export default Base;