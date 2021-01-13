import React from 'react';


export default function ButtonPrimary(props) {
    return (
        <button
            className={
                props.class === undefined ? "btn btn-primary" : "btn btn-primary " + props.class
            }>
            {props.title}
        </button>
    )
}