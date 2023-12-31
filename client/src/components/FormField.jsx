import React from 'react'

const FormField = ({ LabelName, type, name, placeholder, value, handleChange, isSurpriseMe, handleSurpriseMe }) => {
    return (
        <div>
            <div className="flex items-center gap-2 mb-2">
                <label htmlFor={name} className='block text-sm font-medium text-gray-900'>
                    {LabelName}</label>
                {isSurpriseMe && (<button className='text-xs font-semibold bg-[#ececf1] py-1 px-2 rounded-[5px] text-black' type="button" onClick={handleSurpriseMe}>Surprise me</button>)}


            </div> <input type={type} id={name} name={name} placeholder={placeholder} value={value} onChange={handleChange} required className='border bg-gray-50 border-gray-300 text-gray-900 txet-sm rounded-lg focus:ring-[#4649ff] focus:border-[#4649ff]  outline-none block w-full p-3' />
        </div>
    )
}

export default FormField