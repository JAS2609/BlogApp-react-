import React, {useId} from 'react'

const Input = React.forwardRef( function Input({
    label,
    type = "text",
    className = "",
    ...props
}, ref){
    const id = useId()
    return (
        <div className='w-full'>
            {label && <label 
            className='inline-block mb-1 pl-1' 
            htmlFor={id}>
                {label}
            </label>
            }
            <input
            type={type}
            className={` px-3 py-2 rounded-lg
          bg-white dark:bg-gray-800
          text-black dark:text-white
          border border-gray-200 dark:border-gray-700
          focus:bg-gray-50 dark:focus:bg-gray-700
          outline-none duration-200 w-full ${className}`}
            ref={ref}
            {...props}
            id={id}
            />
        </div>
    )
})

export default Input