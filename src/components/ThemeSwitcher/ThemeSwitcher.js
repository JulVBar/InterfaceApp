import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { changeThemeStyle } from '../../actions';

import './themeSwitcher.scss';

const ThemeSwitcher = () => {
    const { themeStyle } = useSelector(state => state);
    const { disabled, text } = useSelector(state => state.colors);
    const dispatch = useDispatch();

    const switchThemeHandler = useCallback(
        (e) => {
            const value = e.target.value;
            dispatch(changeThemeStyle(value));
        },[dispatch]);
    

    return (
        <select 
            value={themeStyle}
            onChange={switchThemeHandler}
            style={{border: `1px solid ${disabled}`,
                    color: text
            }}
        >
            <option value="flat">flat</option>
            <option value="neuromorphic">neuromorphic</option>
        </select>
    )
}

export default ThemeSwitcher;