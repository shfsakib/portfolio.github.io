import React, { Fragment } from 'react'
import Select from 'react-select';

const SelectInput5 = ({ label, sup, className, field, disable, options, formik, values, isMulti, maxLimit, limit, idName, nameValue, method }) => {

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
                    isMulti={isMulti}
                    isSearchable={true}
                    isOptionDisabled={() => limit >= maxLimit}
                    value={values ? values.map((item, key) => ({
                        [idName]: item[idName],
                        [nameValue]: item[nameValue],
                    })
                    ) : ''}
                    getOptionLabel={option => option[nameValue]}
                    getOptionValue={option => option[idName]}
                    options={options}
                    onChange={(obj) => method(obj)}
                />
            </div>
        </Fragment>
    )
}

export default SelectInput5
