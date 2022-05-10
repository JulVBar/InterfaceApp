import './buttonGradientBorder.scss';

const ButtonGradientBorder =  ({
    type,
    textColor,
    primaryColor,
    secondaryColor, 
    handler, 
    buttonText}) => {

    return (
        <button
            type={type}
            className="buttonsReset btnGradientBorder"
            style={{color: textColor}}
            onClick={handler}
        >
            <svg id="storage" width="0" height="0" viewBox="0 0 0 0">
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="10%">
                    <stop offset="0%" stopColor={primaryColor}></stop>
                    <stop offset="100%" stopColor={secondaryColor}></stop>
                </linearGradient>  
            </svg>
            <svg className="gradientBorder">
                <rect rx="10" ry="10" x="3" y="3" />
            </svg>
            {buttonText}
        </button>
    )
}

export default ButtonGradientBorder;