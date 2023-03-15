import React from 'react'

const FormField = ({ labelName, type, name, placeholder, value, handleChange, isSurpriseMe, handleSurpriseMe}) => {
  return (
    <div>
      <div className='flex items-center gap-0 mb-2'>
        <label 
          htmlFor={name}
          className="block text-md font-medium text-[#9b9b9b]"
        >
          {labelName}
        </label>
        {isSurpriseMe && (
            <button
              type='button'
              onClick={handleSurpriseMe}
              className="font-semibold text-xs bg-[#635985] py-1 px-2 rounded-[5px] text-black mb-0.5"
            >
              Surprise Me
            </button>
          )
        }
      </div>
      <input 
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        className='bg-[#584d88]  text-[#E5E5CB] text-sm rounded-lg focus:ring-[#4649ff] focus:border-[#4649ff] outline-none block w-full p-3' 
      />
    </div>
  )
}

export default FormField
