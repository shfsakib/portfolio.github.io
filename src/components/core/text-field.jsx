import React, { Fragment } from 'react'

const TextField = ({ label, sup, type, name, className, value, readonly, placeholder, ...props }) => {

    return (
        <Fragment>
            <div className="col-12">
                <h6>{label}<sup className='text-danger'>{sup}</sup></h6>
                <input type={type}
                    autoComplete='off'
                    name={name}
                    readOnly={readonly}
                    value={value ? value : ''}
                    className={`${className} form-control`}
                    placeholder={placeholder}
                    {...props} />
            </div>
        </Fragment>
    )
}

export default TextField
