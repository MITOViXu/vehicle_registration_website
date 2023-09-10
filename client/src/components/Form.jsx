import React from 'react'

const FormField = ({
    labelName,
    placeholder,
    value,
    handleChange,
}) => {
    return (
        <label className="label-form">
            {labelName && <span className="">{labelName}</span>}

            <input
                value={value}
                onChange={handleChange}
                type='text'
                step="0.1"
                placeholder={placeholder}
                className=""
            />
        </label>
    )
}

export default FormField
