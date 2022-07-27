import React, { Fragment } from 'react'
import Select from 'react-select';

const SelectInputEvent = ({ label, className, field, sup, options, formik, secondField }) => {
    const changeMethod = (obj) => {
        formik.setFieldValue(secondField, `I know that you wanted to be notified when we had our events.Good news!  We are planning to have a '${obj.Title}' event between '${obj.Start}' and '${obj.End}'.We would like to invite you.`);
        formik.setFieldValue(field, obj._id);

    }
    return (
        <Fragment>
            <div className="col-12">
                <h6>{label}<sup className='text-danger'>{sup}</sup></h6>
                <Select
                    name={field}
                    className={`${className}`}
                    classNamePrefix='select'
                    isDisabled={false}
                    isLoading={false}
                    isClearable={false}
                    isRtl={false}
                    isSearchable={true}
                    getOptionLabel={option => option.Title}
                    getOptionValue={option => option._id}
                    options={options}
                    onChange={(obj) => changeMethod(obj)}
                />
            </div>
        </Fragment>
    )
}

export default SelectInputEvent
