import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { colorsSetting, setDefaultColors, setActiveTheme } from '../../actions';
import SaveThemePopup from '../SaveThemePopup/SaveThemePopup';
import ThemeDesignSwitcher from '../ThemeDesignSwitcher/ThemeDesignSwitcher';
import ButtonGradientBorder from '../ButtonGradientBorder/ButtonGradientBorder';
import { createBoxShadow } from '../../utils/drawFunctions';

import './colorPanel.scss';

const ColorPanel = () => {
    const { colors, themeStyle } = useSelector(state => state);
    const dispatch = useDispatch();

    const {layout, main, primary, secondary, text, disabled} = colors;
    const isNeuromorphic = themeStyle === 'neuromorphic';

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

    const boxShadow = isNeuromorphic ? createBoxShadow(true, layout) : 'none';
    const buttonShadow = createBoxShadow(true, main);
    
    return (
        <div
            className='colorPanel'
            style={{background: main,
                    boxShadow: boxShadow}}
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
                <ThemeDesignSwitcher /> 
            </div>
            <div className="buttonsBar">
                <SaveThemePopup />

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