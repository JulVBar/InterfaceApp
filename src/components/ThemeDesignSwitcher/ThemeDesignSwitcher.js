import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { changeThemeStyle } from './themeDesignSwitcherSlice'; 

import './themeDesignSwitcher.scss';

const ThemeDesignSwitcher = ({isNeuromorphic, shadowInnerMain}) => {
    const { themeStyle } = useSelector(state => state.themeStyle);
    const { colors } = useSelector(state => state.colors);
    const { disabled, text, main } = colors;
    
    const dispatch = useDispatch();

    const switchThemeHandler = useCallback(
        (e) => {
            const value = e.target.value;
            dispatch(changeThemeStyle(value));
        },[dispatch]);
    
    const inputBorder = isNeuromorphic ? 'none' : `1px solid ${disabled}`;

    return (
        <select 
            value={themeStyle}
            onChange={switchThemeHandler}
            style={{border: inputBorder,
                    boxShadow: shadowInnerMain,
                    color: text,
                    background: main
            }}
        >
            <option value="flat">flat</option>
            <option value="neuromorphic">neuromorphic</option>
        </select>
    )
}

export default ThemeDesignSwitcher;