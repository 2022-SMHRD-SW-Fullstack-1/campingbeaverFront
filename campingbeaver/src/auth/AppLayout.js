import React from 'react';
import {Menu, Input} from 'antd';

const AppLayout = ({children}) =>{
    return (
        <div>
            <Menu mode="horizontal">
                
            </Menu>
            {children}
        </div>
    );
};
export default AppLayout;