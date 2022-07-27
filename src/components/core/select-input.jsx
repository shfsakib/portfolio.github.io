import React, { Fragment } from 'react'
import Select from 'react-select';

const SelectInput = ({ label, sup, setValue, className, disable, field, values, options, formik }) => {

    const changeMethod = (obj) => {
        setValue(obj.value);
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
                    isDisabled={disable}
                    isLoading={false}
                    isClearable={true}
                    isRtl={false}
                    isSearchable={true}
                    value={values && { value: values, label: values }}
                    // getOptionLabel={option => option.name}
                    // getOptionValue={option => option.value}
                    options={options}
                    onChange={(obj) => changeMethod(obj)}
                />
            </div>
        </Fragment>
    )
}

export default SelectInput
