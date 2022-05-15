import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { colorsSetting, setDefaultColors } from './colorPanelSlice';
import { setActiveTheme } from '../ThemeSidebar/themeSidebarSlice';
import SaveThemePopup from '../SaveThemePopup/SaveThemePopup';
import ThemeDesignSwitcher from '../ThemeDesignSwitcher/ThemeDesignSwitcher';
import ButtonGradientBorder from '../ButtonGradientBorder/ButtonGradientBorder';

import './colorPanel.scss';

const ColorPanel = ({
    isNeuromorphic,
    shadowOut,
    shadowInnerMain,
    shadowColor,
    gradientColor,
    buttonShadow,
    shadowInner,
    buttonShadowLayout
}) => {
    const { colors } = useSelector(state => state.colors);
    const { main, primary, secondary, text, disabled } = colors;
    const dispatch = useDispatch();

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

    return (
        <div
            className='colorPanel'
            style={{background: main,
                    boxShadow: shadowOut}}
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
                <ThemeDesignSwitcher
                    isNeuromorphic={isNeuromorphic}
                    shadowInnerMain={shadowInnerMain}
                /> 
            </div>
            <div className="buttonsBar">
                <SaveThemePopup
                    isNeuromorphic={isNeuromorphic}
                    shadowColor={shadowColor}
                    gradientColor={gradientColor}
                    shadowInner={shadowInner}
                    buttonShadowLayout={buttonShadowLayout}
                />

                {isNeuromorphic && (
                    <button
                        type="button"
                        onClick={resetHandler}
                        style={{background: `transparent`,
                                boxShadow: buttonShadow,
                                color: text}}
                    >
                        Reset
                    </button>
                )}

                {!isNeuromorphic && (
                    <ButtonGradientBorder
                        type="button"
                        textColor={text}
                        primaryColor={primary}
                        secondaryColor={secondary}
                        handler={resetHandler}
                        buttonText="Reset"
                    />
                )}
            </div>
        </div>
    )
}

export default ColorPanel;