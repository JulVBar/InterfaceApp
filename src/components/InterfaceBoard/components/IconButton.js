import Icon from '../../Icon/Icon';
import './iconButton.scss';

const IconButton = ({main, disabled, isNeuromorphic, gradientColor, shadowInner}) => {

    const backgroundColor = isNeuromorphic ? 'transparent' : gradientColor;
    const iconColor = isNeuromorphic ? disabled: main;

    return (
        <div className="iconButton" style={{boxShadow: shadowInner, background: backgroundColor}}>
            <Icon
                name='trash'
                iconColor={iconColor}
            />
        </div>
    )
}

export default IconButton;