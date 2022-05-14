import { useSelector } from 'react-redux';
import Icon from '../../Icon/Icon';
import picture from '../../../assets/picture.jpg';
import './musicPlayer.scss';

const MusicPlayer = ({colors, isNeuromorphic, gradientColor, shadowOut, shadowOutMain, shadowInnerMain}) => {
    const { activeTheme } = useSelector(state => state);
    const { main, disabled, text } = colors;

    const activeThemeTitle = activeTheme ? activeTheme.slice(0, 50) : 'Active Theme Title';

    const iconBorderStyle = isNeuromorphic ? 'none' : `1px solid ${disabled}`;
    const sliderBackground = isNeuromorphic ? 'transparent' : disabled;
    const lineHeight = isNeuromorphic ? '60%' : '100%';
    const lineLeftPosition = isNeuromorphic ? '0.2rem' : '0';

    return (
        <div
            className='musicPlayer'
            style={{background: main,
                boxShadow: shadowOut}}
        >
            <div className='musicPlayer__image'>
                <img  src={picture} alt="galaxy" />
            </div>
            <div className='musicPlayer__content'>
                <h3>{activeThemeTitle}</h3>
                <div className='musicPlayer__slider'>
                    <div 
                        className='musicPlayer__slider--path'
                        style={{background: sliderBackground,
                                boxShadow: shadowInnerMain}}>
                        <div 
                            className='musicPlayer__slider--line' 
                            style={{background: gradientColor,
                                    height: lineHeight,
                                    left: lineLeftPosition}}
                        />
                    </div>
                    <div
                        className='musicPlayer__slider--time'
                        style={{color: disabled}}
                    >
                        -00:45
                    </div>
                </div>
                <div className='musicPlayer__playerButtons'>
                    <div 
                        className='musicPlayer__icon' 
                        style={{border: iconBorderStyle, boxShadow: shadowOutMain}}
                    >
                        <Icon
                            name='trash'
                            iconColor={disabled}
                        />
                    </div>
                    <div 
                        className='musicPlayer__icon' 
                        style={{border: iconBorderStyle, boxShadow: shadowOutMain}}
                    >
                        <Icon
                            name='trash'
                            iconColor={text}
                        />
                    </div>
                    <div 
                        className='musicPlayer__icon' 
                        style={{border: iconBorderStyle, boxShadow: shadowOutMain}}
                    >
                        <Icon
                            name='trash'
                            iconColor={disabled}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MusicPlayer;