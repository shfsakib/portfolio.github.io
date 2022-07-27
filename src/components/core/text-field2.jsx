import React, { Fragment } from 'react'

const TextField2 = ({ placeholder, type, name, readOnly, className, ...props }) => {
    return (
        <Fragment>
            <input type={type}
                autoComplete='off'
                name={name}
                className={`${className} form-control`}
                placeholder={placeholder}
                {...props}
                readOnly={readOnly}
            />
        </Fragment>
    )
}

export default TextField2
