import { useDispatch, useSelector } from 'react-redux';
import { changeThemeStyle } from '../../actions';

import './themeSwitcher.scss';

const ThemeSwitcher = () => {
    const { themeStyle } = useSelector(state => state);
    const dispatch = useDispatch();

    const switchThemeHandler = (e) => {
        const value = e.target.value;
        dispatch(changeThemeStyle(value));
    }

    return (
        <select value={themeStyle} onChange={switchThemeHandler}>
            <option value="flat">flat</option>
            <option value="neuromorphic">neuromorphic</option>
        </select>
    )
}

export default ThemeSwitcher;