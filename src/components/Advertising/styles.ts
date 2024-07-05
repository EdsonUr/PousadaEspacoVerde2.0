import styled from 'styled-components';

import propaganda from '../../assets/propaganda.png'
import footer from '../../assets/footer.png'
import { terciaryHeader } from '../../styles/global';

export const Container = styled.div<{background_opacity: boolean, has_children: boolean}>`
    ${({background_opacity, has_children}) => `
        background: ${background_opacity ? `linear-gradient(0deg, rgba(34, 80, 25, 0.4), rgba(34, 80, 25, 0.4)), url(${has_children ? footer : propaganda})` : `url(${has_children ? footer : propaganda})`};
        background-repeat: no-repeat;
        background-size: cover;
    `}
    width: 100%;
    background-position: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    min-height: 548px;
    ${({has_children}) => has_children && `justify-content: space-between;`}
`;

export const TitleContainer = styled.div<{device: string, has_children: boolean}>`
    padding: 16px 32px;
    background: rgba(255, 255, 255, 0.5);
    ${({has_children}) => has_children && `
    background: rgba(255, 255, 255, 0.7);
    `}
    box-shadow: 2px 4px 32px rgba(0, 0, 0, 0.15);
    ${({device}) => device === 'mobile' && `width: 90%`}
    align-self: center;
`;

export const Title = styled.p`
    ${terciaryHeader}
    color: var(--green);
    text-transform: uppercase;
    text-align: center;
`;

export const ChildrenContainer = styled.div`
    align-items: flex-end;
    justify-content: center;
    width: 100%;
`;

export const BannerContainer = styled.div<{has_children: boolean, device: string}>`
    ${({has_children, device}) => has_children && device === 'desktop' ? `padding: 80px 160px;` : device === 'tablet' ? `padding: 80px 40px;` : `padding: 80px 20px;`}
`;