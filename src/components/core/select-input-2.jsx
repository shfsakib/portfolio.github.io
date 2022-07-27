import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import Select, { components } from 'react-select';

const
    SelectInput2 = ({ label, className, field, sup, options, isMulti, values, withId, placeholder, packages, changeMethod, dropLabel, dropValue, dropPart, NoOptionText }) => {
        // const DropdownIndicator = (props) => {
        //     return (
        //         <components.DropdownIndicator {...props}>
        //             <Fragment>
        //                 {props.selectProps.menuIsOpen ?
        //                     <img src="/dist/img/location.png" style={{ width: '20px', height: '20px' }} alt="logo" />
        //                     :
        //                     <img src="/dist/img/sms.png" style={{ width: '20px', height: '20px' }} alt="logo" />
        //                 }
        //             </Fragment>
        //         </components.DropdownIndicator >
        //     )
        // }
        // const Placeholder = (props) => {
        //     return <components.Placeholder {...props} />;
        // };
        return (
            <Fragment>
                <div className="col-12">
                    <h6>{label}<sup className='text-danger'>{sup}</sup></h6>
                    <Select
                        name={field}
                        className={`${className}`}
                        classNamePrefix='select'
                        placeholder={placeholder}
                        // components={{ Placeholder, DropdownIndicator }}
                        isDisabled={false}
                        isLoading={false}
                        isClearable={true}
                        isRtl={false}
                        isSearchable={true}
                        isMulti={isMulti}
                        value={values && { [dropValue]: values[dropValue], [dropLabel]: withId ? values[dropPart] + ' - ' + values[dropLabel] : packages ? values[dropLabel] + ' - $' + values[dropPart] + ' Per Month' : values[dropLabel] }}
                        getOptionLabel={option => withId ? option[dropPart] + ' - ' + option[dropLabel] : packages ? option[dropLabel] + ' - $' + option[dropPart] + ' Per Month' : option[dropLabel]}
                        getOptionValue={option => option[dropValue]}
                        options={options}
                        onChange={(obj) => changeMethod(obj)}
                        noOptionsMessage={({ inputValue }) => !inputValue ? NoOptionText && <Fragment><h6>You don't have any active number</h6><Link className='btn btn-primary' to={'/add-number'}>Buy Number from Twilio</Link></Fragment> : "No Options"}
                    />
                </div>
            </Fragment>
        )
    }

export default SelectInput2
