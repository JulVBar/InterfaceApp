import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { colorsSetting, setDefaultColors } from '../../actions';
import SaveThemePopup from '../SaveThemePopup/SaveThemePopup';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';
import classNames from 'classnames';
// import { INPUT_LABELS } from './inputColorsNamesConstants';


import './colorPanel.scss';

const ColorPanel = () => {
    const { themeStyle, colors } = useSelector(state => state);
    const dispatch = useDispatch();

    const colorHandler = (e, colorName) => {
        const value = e.target.value;
        dispatch(colorsSetting({
            ...colors,
            [colorName]: value,
        }));
    }

    const resetHandler = useCallback(
        () => {
            dispatch(setDefaultColors());
        // eslint-disable-next-line react-hooks/exhaustive-deps
        },[]);
    

    const interfaceDesign = classNames('colorPanel', themeStyle);

    return (
        <div
            className={interfaceDesign}
            style={{background: colors.main}}>
            <div className="inputBar">
                <ul>
                    {Object.entries(colors).map((item) => (
                        <li
                            key={item[0]}>
                            <label>
                                {item[0]}:
                                <input type="color" value={item[1]} onChange={(e) => colorHandler(e, item[0])} />
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
                <button type="button" onClick={resetHandler}>Reset</button>
            </div>
            
        </div>
    )
}

export default ColorPanel;