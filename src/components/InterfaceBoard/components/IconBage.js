import Icon from '../../Icon/Icon';
import './iconBage.scss';

const IconBage = ({main, disabled, gradientColor, shadowOut }) => {
    return (
        <div className="iconBage" style={{boxShadow: shadowOut}}>
            <Icon
                name='trash'
                iconColor={disabled}
            />
            <span style={{background: gradientColor, color: main}}>3</span>
        </div>
    )
}

export default IconBage;