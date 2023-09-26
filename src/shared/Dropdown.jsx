import React, { useRef, useState } from 'react'
import { Arrow } from '../icons';

const Dropdown = ({ title, children, className }) => {
    const [active, setActive] = useState(false);
    const content = useRef();
    return (
        <div className={`flex flex-col pl-8 border-l-6 border-blue ${className} dark:border-white transition-all overflow-hidden `}>
            <div className='flex flex-row py-4 items-center cursor-pointer w-full gap-x-4 ' onClick={() => {
                setActive(!active);
            }}>
                <span className='font-semibold text-2xl text-blue dark:text-white flex-1'>{title}</span>
                <Arrow className={`text-blue dark:text-white transition-all w-3.5 h-3.5 object-cover ${active ? 'rotate-90' : '-rotate-90'}`} />
            </div>
            <div className={`transition-all ${active ? 'mb-4' : 'mb-0'}  `} ref={content} style={{ height: active ? content.current.scrollHeight : 0 }} >{children}</div>
        </div>
    )
}

export default Dropdown