import React from 'react';

const Layout = ({children}:{children:React.ReactNode}) => {
    return (
        <main className='flex w-full min-h-screen justify-center items-center'>
             {children}
        </main>
    );
};

export default Layout;