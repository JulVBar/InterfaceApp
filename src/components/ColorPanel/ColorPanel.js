import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { colorsSetting, setDefaultColors } from '../../actions';
import SaveThemePopup from '../SaveThemePopup/SaveThemePopup';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import classNames from 'classnames';

import './colorPanel.scss';

const ColorPanel = () => {
    const { themeStyle, colors } = useSelector(state => state);
    const dispatch = useDispatch();

    const {main, primary, secondary, text, disabled} = colors;

    const colorHandler = useCallback(
        (e, colorName) => {
            const value = e.target.value;
            dispatch(colorsSetting({
                ...colors,
                [colorName]: value,
            }));
        },[colors, dispatch]);

    const resetHandler = useCallback(
        () => {
            dispatch(setDefaultColors());
        },[dispatch]);   

    const interfaceDesign = classNames('colorPanel', themeStyle);

    return (
        <div
            className={interfaceDesign}
            style={{background: main}}
        >
            <h1 style={{color: text}}>Choose colors of your theme</h1>
            <div className="inputBar">
                <ul>
                    {Object.entries(colors).map((item) => (
                        <li
                            key={item[0]}>
                            <label>
                                {item[0]}:
                                <input
                                    type="color"
                                    className="inputColor"
                                    style={{border: `1px solid ${disabled}`}}
                                    value={item[1]} 
                                    onChange={(e) => colorHandler(e, item[0])}
                                />
                            </label>
                        </li>
                    ))}
                </ul>
                
            </div>
            <div className="designBar">
                Choose Design:
                <ThemeSwitcher /> 
            </div>
            <div className="buttonsBar">
                <SaveThemePopup />

                <button
                    className="buttonsReset btnGradientBorder"
                    style={{color: text}}
                    type="button"
                    onClick={resetHandler}
                >
                    <svg id="storage" width="0" height="0" viewBox="0 0 0 0">
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="10%">
                            <stop offset="0%" stopColor={primary}></stop>
                            <stop offset="100%" stopColor={secondary}></stop>
                        </linearGradient>  
                    </svg>
                    <svg className="gradientBorder">
                        <rect rx="10" ry="10" x="3" y="3" />
                    </svg>
                    Reset
                </button>
            </div>
        </div>
    )
}

export default ColorPanel;