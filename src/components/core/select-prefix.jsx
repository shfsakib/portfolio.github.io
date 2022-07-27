import React, { Fragment } from 'react'
import Select from 'react-select';

const SelectPrefix = ({ label, className, field, sup, options, isMulti, formik, prefix }) => {
    const changeMethod = (obj) => {
        formik.setFieldValue(field, obj.value);
    }
    return (
        <Fragment>
            <div className="col-12">
                <h6>{label}<sup className='text-danger'>{sup}</sup></h6>
                <Select
                    name={field}
                    className={`${className}`}
                    classNamePrefix='select'
                    placeholder={prefix ? prefix : 'Select...'}
                    isDisabled={false}
                    isLoading={false}
                    isClearable={true}
                    isRtl={false}
                    isSearchable={true}
                    isMulti={isMulti}
                    // getOptionLabel={option => option.name}
                    // getOptionValue={option => option.value}
                    options={options}
                    onChange={(obj) => changeMethod(obj)}
                />
            </div>
        </Fragment>
    )
}

export default SelectPrefix
