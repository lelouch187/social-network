import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    error?: string;
    success?: string;
}

const MyInput = (props: InputProps) => {
    let styles = 'px-2 py-2 mb-4 rounded-lg outline-none w-full border-[2px] '
    if (props.error) {
        styles += 'border-red-600 '
    }
    if (props.success) {
        styles += 'border-green-600'
    }

    return (
        <input {...props}
               className={styles}
        />
    );
};

export default MyInput;