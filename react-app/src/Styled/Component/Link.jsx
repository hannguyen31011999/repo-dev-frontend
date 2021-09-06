import styled from 'styled-components';
import React, { Component } from 'react';

export const Link = ({ className, children }) => (
    <a className={className}>
        {children}
    </a>
);

export const StyleLink = styled(Link)`
    color:red;
    font-weight:bold;
`;


// export const Link = (className, children, ...resProps) => {
//     return <a className={className}>
//         {children}
//     </a>
// };