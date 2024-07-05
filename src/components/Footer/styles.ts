import styled from 'styled-components';
import { sectionsText, terciaryText, textButton } from '../../styles/global';

export const Container = styled.div<{device: string}>`
    background: rgba(34, 80, 25, 0.75);
    ${({device}) => device === 'desktop' ? `padding: 0px 120px;` : device === 'tablet' ? `padding: 0px 40px;` : `padding: 0px 20px;`}
    min-height: 302px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const FirstLine = styled.div<{device?: string}>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    border-bottom: 1px solid var(--gray);
    ${({device}) => device === 'mobile' ? `padding: 40px 0 24px 0;` : `padding: 10px 0;`};
`;

export const SocialMediasContainer = styled.div`
    display: flex;
    flex-direction: row;
    > * {
        margin-right: 10px;
    }
`;

export const SectionButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    ${sectionsText}
    color: var(--gray);
`;

export const ModulesContainer = styled.div<{device?: string}>`
    display: flex;
    flex-direction: ${({device}) => device !== 'mobile' ? `row` : `column`};
    align-items: ${({device}) => device === 'mobile' && `flex-start`};
    > * {
        margin-right: 32px;
    }
    > *:last-child {
        margin-right: 0;
    }
`;

export const SecondLine = styled.div<{device?: string}>`
    display: flex;
    justify-content: space-between;
    flex-direction: ${({device}) => device !== 'mobile' ? `row` : `column`};
    width: 100%;
    padding: 26px 0;
`;

export const Infos = styled.div<{device?: string}>`
    display: flex;
    flex-direction: column;
    align-items: ${({device}) => device !== 'mobile' ? `flex-end` : `flex-start`};
`;

export const Title = styled.div`
    ${textButton}
    color: var(--gray);
`;

export const Description = styled.div`
    ${terciaryText}
    color: var(--gray);
    margin-top: 8px;
`;

export const Separator = styled.div`
    height: 24px;
`;