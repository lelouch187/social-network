import React from 'react';

export interface ContentWrapperProps {
    children: React.ReactNode
}

const ContentWrapper = ({children}: ContentWrapperProps) => {
    return (
        <div className='px-8 py-8 bg-white rounded-lg'>
            {children}
        </div>
    );
};

export default ContentWrapper;