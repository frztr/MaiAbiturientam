import React, { forwardRef, useImperativeHandle, useState } from 'react'

const Input = forwardRef(({ className, value, ...otherprops },ref) => {
    const [_value, setValue] = useState(value != null ? value : "");

    useImperativeHandle(ref,()=>{
        return{
            getValue(){
                return _value;
            }
        }
    });

    return (
        <div className={`flex flex-col px-6 h-20 items-center bg-white dark:bg-black rounded-lg ${className} relative `}>
            <input className='bg-transparent focus:outline-none border-none text-blue dark:text-white text-2xl font-semibold w-full h-full placeholder-blue dark:placeholder-white' {...otherprops} onInput={(x) => {
                setValue(x.target.value);
            }} />
        </div>
    )
})

export default Input