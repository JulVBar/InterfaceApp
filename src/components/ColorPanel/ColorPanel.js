import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { colorsSetting, setDefaultColors, setActiveTheme } from '../../actions';
import SaveThemePopup from '../SaveThemePopup/SaveThemePopup';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import ButtonGradientBorder from '../ButtonGradientBorder/ButtonGradientBorder';
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
            dispatch(setActiveTheme(''));
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

                <ButtonGradientBorder
                    type="button"
                    textColor={text}
                    primaryColor={primary}
                    secondaryColor={secondary}
                    handler={resetHandler}
                    buttonText="Reset"
                />
            </div>
        </div>
    )
}

export default ColorPanel;