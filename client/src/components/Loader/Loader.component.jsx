// React
import React from 'react';
import { Oval } from  'react-loader-spinner';

const Loader = () => {
    return (
        <Oval
            height={60}
            width={60}
            color='rgb(32, 43, 62)'
            wrapperStyle={{}}
            wrapperClass=''
            visible={true}
            ariaLabel='oval-loading'
            secondaryColor='rgb(63, 162, 219)'
            strokeWidth={2}
            strokeWidthSecondary={2}

        />
    );
}

export default Loader;