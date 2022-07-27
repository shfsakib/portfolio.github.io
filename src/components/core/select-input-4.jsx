import React, { Fragment } from "react";
import Select from "react-select";

const SelectInput4 = ({
  label,
  sup,
  setValue,
  className,
  field,
  values,
  options,
  formik,
}) => { 
  const changeMethod = (obj) => {
    formik.setFieldValue(field, obj._id);
    setValue(obj);
  };
  return (
    <Fragment>
      <div className="col-12">
        <h6>
          {label}
          <sup className="text-danger">{sup}</sup>
        </h6>
        <Select
          name={field}
          className={`${className}`}
          classNamePrefix="select"
          isDisabled={false}
          isLoading={false}
          isClearable={true}
          isRtl={false}
          isSearchable={true}
          value={values && { _id: values._id, Name: values.Name }}
          getOptionLabel={(option) => option.Name}
          getOptionValue={(option) => option._id}
          options={options}
          onChange={(obj) => changeMethod(obj)}
        />
      </div>
    </Fragment>
  );
};

export default SelectInput4;
