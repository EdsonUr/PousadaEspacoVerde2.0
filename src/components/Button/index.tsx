// Styles
import { Container } from './styles';
import { Link } from 'react-scroll';

// Assets
import loadingGIF from '../../assets/loading.gif'

// Props
interface ButtonProps {
    type: 'primary' | 'secondary' | 'tertiary';
    text: string;
    onClick: () => void;
    transparent?: boolean;
    size: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge';
    fullWidth?: boolean;
    redirect?: boolean;
    loading?: boolean;
}

// Renderer
export function Button({type, text, onClick, transparent=false, size, fullWidth=false, redirect=false, loading=false}: ButtonProps) {
    return (
        redirect ?
            <Link to="target-element-id" smooth={true} duration={800}>
                <Container type_button={type} size={size} transparent={transparent} onClick={onClick} fullWidth={fullWidth} disabled={loading}>
                    {loading ? <img src={loadingGIF} alt='Spinner Loader' width={46} height={46}/> : text}
                </Container>
            </Link>
        :
        <Container type_button={type} size={size} transparent={transparent} onClick={onClick} fullWidth={fullWidth} disabled={loading}>
            {loading ? <img src={loadingGIF} alt='Spinner Loader' width={46} height={46}/> : text}
        </Container>
    );
}