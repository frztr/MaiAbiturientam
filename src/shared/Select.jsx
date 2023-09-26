import React, { forwardRef, useRef, useState } from 'react'
import { Arrow } from '../icons';

const Select = ({ children, className, onSelectedItemChanged }) => {
    const content = useRef();
    const [active, setActive] = useState(false);
    const [selectedItem, setSelectedItem] = useState(0);
    return (
        <div className={`relative flex flex-col ${className}`}>
            <div className='cursor-pointer flex flex-row items-center w-full border-blue dark:border-white border-2 rounded' onClick={() => {setActive(!active)}}>
                {React.Children.map(children, (x, i) => {
                    if (i == selectedItem) return (x);
                })}
                <div className='pr-4 flex flex-col'>
                    <Arrow className={`text-blue dark:text-white h-2.5 w-1.5 transition-all  ${active ? 'rotate-90' : '-rotate-90'}`} />
                </div>
            </div>
            <div className={`flex overflow-hidden transition-all w-full flex-col gap-y-2 px-2 absolute bottom-0 translate-y-full cursor-pointer bg-lightblue-300 dark:bg-black-300 rounded-b ${active ? 'py-2' : 'py-0'}`} ref={content} style={{height: active ? content.current.scrollHeight + 16 : 0}}>
                {React.Children.map(children, (x, i) => {
                    if (i != selectedItem) {
                        return (
                            <div className='border-blue dark:border-white border-2 rounded' onClick={() => {
                                setActive(false);
                                if(onSelectedItemChanged!=null) onSelectedItemChanged(i);
                                setSelectedItem(i);
                            }}>
                                {x}
                            </div>
                        );
                    }
                })}
            </div>
        </div>
    )
};

export default Select