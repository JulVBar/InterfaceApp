import ThemeItem from '../ThemeItem/ThemeItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { layoutColorSetting, primaryColorSetting, userThemesSetting } from '../../actions';
import { galaxyThemesConstants } from './galaxyThemesConstants';

import './themeSidebar.scss';

const ThemeSidebar = () => {
    const { userThemes } = useSelector(state => state);
    const dispatch = useDispatch();

    const themes = (Object.values(localStorage)).map(item => JSON.parse(item));
    // console.log(themes)
    useEffect(() => {
        dispatch(userThemesSetting(themes));
        // eslint-disable-next-line
    }, [])

    const isUserThemes = userThemes.length > 0;
    
    const onThemeChange = (theme) => {
        // console.log(e.target);
        dispatch(layoutColorSetting(theme.layoutColor))
        dispatch(primaryColorSetting(theme.primaryColor))
    }

    const onThemeDelete = (theme) => {
        localStorage.removeItem(theme.title);
        const filteredThemes = userThemes.filter(item => item.title !== theme.title)
        dispatch(userThemesSetting(filteredThemes));
        dispatch(layoutColorSetting('#ffffff'));
        dispatch(primaryColorSetting('#ffffff'));
    }

    return (
        <div className="themeSidebar">
            <h3>Galaxy themes</h3>
            <ul>
                {galaxyThemesConstants.map((item, index) => (
                    <li
                        key={`${item.title}-${index}`}
                        onClick={() => onThemeChange(item)}>
                        {item.title}
                    </li>
                ))}
            </ul>
            {isUserThemes && (
                <div>
                    <h3>User themes</h3>
                    <ul>
                        {userThemes.map((item, index) => (
                            <ThemeItem
                                key={`${item.title}-${index}`}
                                title={item.title}
                                onClick={() => onThemeChange(item)}
                                onDelete={() => onThemeDelete(item)}
                            />
                        ))}
                    </ul>
                </div>
                
            )}
            
        </div>
    )
}

export default ThemeSidebar;