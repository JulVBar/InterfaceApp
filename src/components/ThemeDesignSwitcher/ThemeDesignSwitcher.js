import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { changeThemeStyle } from '../../actions';
import { createBoxShadow } from '../../utils/drawFunctions';

import './themeDesignSwitcher.scss';

const ThemeDesignSwitcher = () => {
    const { themeStyle } = useSelector(state => state);
    const { disabled, text, main } = useSelector(state => state.colors);
    const dispatch = useDispatch();

    const switchThemeHandler = useCallback(
        (e) => {
            const value = e.target.value;
            dispatch(changeThemeStyle(value));
        },[dispatch]);
    
    const inputBorder = themeStyle === 'neuromorphic' ? 'none' : `1px solid ${disabled}`;
    const inputShadow = themeStyle === 'neuromorphic' ? createBoxShadow(false, main) : 'none';

    return (
        <select 
            value={themeStyle}
            onChange={switchThemeHandler}
            style={{border: inputBorder,
                    boxShadow: inputShadow,
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