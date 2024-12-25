import React from 'react'
import { FaPhoneAlt, FaInstagram } from "react-icons/fa";

const Contact = () => {
    return (
        <div className='bg-[#FFD14C] py-5 px-8' id='contact'>
            <div className="flex items-center justify-between mx-auto max-w-5xl">
                <div className="text-black text-sm flex items-end gap-2">
                    <FaInstagram size={24} />
                    <a href="https://instagram.com/12_editor__" target='__blank'>12_editor__</a>
                </div>
                <div className="text-black text-sm flex items-end gap-2">
                    <FaPhoneAlt size={18} className='-mr-1' />
                    <a href="tel:+919896645273" target='__blank'>+9198966-45273</a>
                </div>
            </div>
        </div>
    )
}

export default Contact
