import Icon from '../../Icon/Icon';
import './dropDown.scss';

const DropDown = ({ main, text, gradientColor, shadowColor, shadowInnerMain }) => {
    
    const dropDownItems = [{
        title: 'Dashboard',
        backgroundColor: 'transparent',
        textColor: main,
        triangle: true,
        activeShadow: 'none'
    },
    {
        title: 'Settings',
        backgroundColor: main,
        textColor: text,
        triangle: false,
        activeShadow: shadowInnerMain
    },
    {
        title: 'Contacts',
        backgroundColor: 'transparent',
        textColor: main,
        triangle: false,
        activeShadow: 'none'
    }]

    return (
        <ul className="dropDown" style={{background: gradientColor, boxShadow: shadowColor}}>
            {dropDownItems.map(({title, backgroundColor, textColor, triangle, activeShadow}, index) => (
                <li key={index} style={{background: backgroundColor, color: textColor, boxShadow: activeShadow}}>
                    {title}
                    {triangle && (
                        <Icon
                        name='play'
                        iconColor={main}
                    />
                    )}
                </li>
            ))}
        </ul>
    )
}

export default DropDown;