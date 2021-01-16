import React from 'react'
import "./wrapper.css"


export default function Wrapper(props) {
    return (
        <div className="main">
            {props.children}
        </div>
    )
}
