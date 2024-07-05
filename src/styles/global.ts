import { createGlobalStyle } from "styled-components";


// Estilo padrão para toda a aplicação.
export const GlobalStyle = createGlobalStyle`
    :root {
        --dark-green: #0C2008;
        --green: #225019;
        --light-green: #B1D668;
        --gray: #E8F2ED;
        --disabled: #C4C4C4;
    }

    /* Default Patterns */
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    /* From here on down these are styles that will automatically be applied to the default components */
    html, body, #root {
        background: var(--neutral-color-high-lightest);
        -webkit-font-smoothing: antialiased;
        min-height: 100vh;
        font-family: 'Inter', sans-serif;
        font-size: 16px;
        font-weight: 400;
        color: var(--neutral-color-low-main);
    }
    button {
        cursor: pointer;
        font-family: 'Inter', sans-serif;
    }
    button[disabled] {
        cursor: not-allowed;
    }
`;

// Fontes e estilos padrão para toda a aplicação.
export const primaryHeader = `
    font-size: 40px;
    font-weight: 800;
    line-height: 120%;
`;

export const secondaryHeader = `
    font-size: 36px;
    font-weight: 800;
    line-height: 120%;
`;

export const secondaryHeaderSemiBold = `
    font-size: 36px;
    font-weight: 600;
    line-height: 150%;
`;
    
export const terciaryHeader = `
    font-size: 28px;
    font-weight: 600;
    line-height: 150%;
`;

export const quaternaryHeader = `
    font-size: 24px;
    font-weight: 600;
    line-height: 125%;
`;

export const primaryText = `
    font-size: 18px;
    font-weight: 400;
    line-height: 150%;
`;

export const secondaryText = `
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
`;

export const terciaryText = `
    font-size: 14px;
    font-weight: 400;
    line-height: 150%;
`;

export const textButton = `
    font-size: 16px;
    font-weight: 600;
    line-height: 140%;
`;

// Estilos para a hero stack e footer
export const sectionsText = ` 
    font-size: 14px;
    font-weight: 600;
    line-height: 150%;
`;

export const navbarText = `
    font-size: 12px;
    font-weight: 600;
    line-height: 140%;
`;

export const breakpoints = {
    mobile: 786,
    tablet: 1440,
    desktop: 1920,
  };