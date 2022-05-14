import { useSelector } from 'react-redux';
import { createBoxShadow } from '../../../utils/drawFunctions';
import Icon from '../../Icon/Icon';
import './musicPlayer.scss';
import { gradient } from '../../../constants/styleConstants';
import picture from '../../../assets/picture.jpg';

const MusicPlayer = () => {
    const { colors, themeStyle, activeTheme } = useSelector(state => state);
    const { main, layout, disabled, text, primary, secondary } = colors;
    const isNeuromorphic = themeStyle === 'neuromorphic';
    const boxShadow = isNeuromorphic ? createBoxShadow(true, layout) : 'none';
    const {linear, degrees, from, to} = gradient;
    const activeThemeTitle = activeTheme ? activeTheme.slice(0, 50) : 'Active Theme Title';

    const iconBorderStyle = isNeuromorphic ? 'none' : `1px solid ${disabled}`;
    const iconButtonShadow = isNeuromorphic ? createBoxShadow(true, main) : 'none';
    const sliderShadow = isNeuromorphic ? createBoxShadow(false, main) : 'none';
    const sliderBackground = isNeuromorphic ? 'transparent' : disabled;
    const lineHeight = isNeuromorphic ? '60%' : '100%';
    const lineLeftPosition = isNeuromorphic ? '0.2rem' : '0';

    return (
        <div
            className='musicPlayer'
            style={{background: main,
                boxShadow: boxShadow}}
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
                                boxShadow: sliderShadow}}>
                        <div 
                            className='musicPlayer__slider--line' 
                            style={{background: `${linear}(${degrees}, ${primary} ${from}, ${secondary} ${to})`,
                                    height: lineHeight,
                                    left: lineLeftPosition}}
                        >
                                </div>
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
                        style={{border: iconBorderStyle, boxShadow: iconButtonShadow}}>
                        <Icon
                            name='trash'
                            iconColor={disabled}
                        />
                    </div>
                    <div 
                        className='musicPlayer__icon' 
                        style={{border: iconBorderStyle, boxShadow: iconButtonShadow}}>
                        <Icon
                            name='trash'
                            iconColor={text}
                        />
                    </div><div 
                        className='musicPlayer__icon' 
                        style={{border: iconBorderStyle, boxShadow: iconButtonShadow}}>
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