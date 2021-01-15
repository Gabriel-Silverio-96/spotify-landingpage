import React from 'react';

function ButtonPrimary(props) {
    return (
        <button
            className={
                props.class === undefined ? "btn btn-primary" : "btn btn-primary " + props.class
            }>
            {props.title}
        </button>
    )
}

function ButtonSecondary(props) {
    return (
        <button
            className={
                props.class === undefined ? "btn btn-secondary" : "btn btn-secondary " + props.class
            }>
            {props.title}
        </button>
    )
}

export {ButtonPrimary, ButtonSecondary};