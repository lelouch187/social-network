import React from 'react';
import './myBtn.scss';


interface BtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    is_loading?: boolean;
}

const MyBtn = ({children, ...props}: BtnProps) => {
    if (props.is_loading) {
        props.className+='hover:bg-blue-600'
    }

    return (
        <button disabled={props.is_loading} {...props}>
            {props.is_loading?
                <div className="loader">
                    <img src="/loader.svg" alt='loading...' width="25"/>
                </div>
                :
                children}
        </button>
    );
};

export default MyBtn;