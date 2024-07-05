export interface ComponentProps {
    image: string;
    imageSide: 'left' | 'right';
    title: string;
    firstParagraph: string;
    secondParagraph: string;
    buttonText: string;
    buttonOnClick: () => void;
    buttonSize?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge';
}