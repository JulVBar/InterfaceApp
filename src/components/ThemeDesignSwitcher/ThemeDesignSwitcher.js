import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { changeThemeStyle } from '../../actions';

import './themeDesignSwitcher.scss';

const ThemeDesignSwitcher = ({isNeuromorphic, shadowInnerMain}) => {
    const { themeStyle } = useSelector(state => state);
    const { disabled, text } = useSelector(state => state.colors);
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
                    color: text
            }}
        >
            <option value="flat">flat</option>
            <option value="neuromorphic">neuromorphic</option>
            <option value="cyber">cyber</option>
        </select>
    )
}

export default ThemeDesignSwitcher;