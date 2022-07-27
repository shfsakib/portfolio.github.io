import React from "react";

export const RadioButton = ({ options, label, name, sup, formik }) => {
    const handleGetValue = (e) => {
        formik.setFieldValue(name, e.target.value);
    }
    return (
        <div className="col-12">
            <h6 className='text-justify'>{label}<sup className='text-danger'>{sup}</sup></h6>
            {options && options.map((value) => (
                <div key={value} className="icheck-primary d-inline">
                    <label>
                        <input type="radio" name={name} value={value} onChange={(e) => handleGetValue(e)} checked={formik.getFieldProps(name).value === value} />
                        <span className="ms-2">{value && value}</span>&nbsp;&nbsp;
                    </label>
                </div>
            ))}
            {/* <ErrorMessage name={name}>
                {(msg) => <span className="invalid-feedback">{msg}</span>}
            </ErrorMessage> */}
        </div>

    );
};
