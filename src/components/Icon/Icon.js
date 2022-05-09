import IconsSVG from './icons.svg';

function Icon ({name, className, iconColor, onClick}) {

    return(
        <svg 
            className={`icon icon-${name} ${className}`} 
            fill={iconColor} 
            onClick={onClick}
        >
            <use xlinkHref={`${IconsSVG}#${name}`} />
        </svg>
    )
}

export default Icon;