import React, { Fragment } from 'react'

const TextArea = ({ label, sup, name, className, readonly, placeholder, ...props }) => {

    return (
        <Fragment>
            <div className="col-12">
                <h6>{label}<sup className='text-danger'>{sup}</sup></h6>
                <textarea
                    name={name}
                    readOnly={readonly}
                    className={`${className} form-control`}
                    placeholder={placeholder}
                    {...props} ></textarea>
            </div>
        </Fragment>
    )
}

export default TextArea
