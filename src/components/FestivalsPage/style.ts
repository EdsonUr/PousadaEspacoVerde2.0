import styled from 'styled-components';

import { secondaryHeader } from '../../styles/global';

export const Container = styled.div<{device: string}>`
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
    padding: ${({device}) => device === 'desktop' ? '64px 164px' : device === 'tablet' ? '64px 40px' : '20px 0px'};
`;

export const Title = styled.p<{device: string}>`
    ${secondaryHeader}
`;

export const SubTitle = styled.p`
    display:flex;
    text-align:center;
    margin-top:16px;
    margin-bottom:84px;
`;

export const List = styled.div<{device: string}>`
    display:flex;
    flex-wrap:wrap;
    flex-direction: ${({device}) => device === 'mobile' ? 'column' :'row'};
    row-gap: ${({device}) => device === 'desktop' ? '84px' : device === 'tablet' ? '48px' : '68px'};
    column-gap: ${({device}) => device === 'desktop' ? '64px' : device === 'tablet' ? '48px' : '0px'};
    justify-content:center;
    padding: ${({device}) => device === 'desktop' ? '0 164px' : device === 'tablet' ? '0px 161px' : '0px 70px'};
`;