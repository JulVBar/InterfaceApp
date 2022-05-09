import { useEffect, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { colorsSetting, userThemesSetting, setDefaultColors } from '../../actions';
import { GALAXY_THEMES } from '../../constants/galaxyThemesConstants';
import Icon from '../Icon/Icon';
import './themeSidebar.scss';

const ThemeSidebar = () => {
    const { userThemes } = useSelector(state => state);
    const { main, disabled } = useSelector(state => state.colors);

    const dispatch = useDispatch();
    const itemRefs = useRef([]);

    const themes = (Object.values(localStorage)).map(item => JSON.parse(item));
    const themesList = [...GALAXY_THEMES, ...userThemes];

    useEffect(() => {
        dispatch(userThemesSetting(themes));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    const onThemeChange = useCallback(
        (theme) => {
            dispatch(colorsSetting(theme.colors))
        },[dispatch]);
    

    const onThemeDelete = useCallback(
        (theme) => {
            localStorage.removeItem(theme.title);
            const filteredThemes = userThemes.filter(item => item.title !== theme.title)
            dispatch(userThemesSetting(filteredThemes));
            dispatch(setDefaultColors());
        },[dispatch, userThemes]);

    const focusOnItem = useCallback(
        (title) => {
            itemRefs.current.forEach(item => item.classList.remove('themeActive'));
            itemRefs.current[title].classList.add('themeActive');
            itemRefs.current[title].focus();
        },[]);

    return (
        <div className="themeSidebar" style={{background: main}}>
            {/* <h2>Themes:</h2> */}
            <ul>
                {themesList.map((item, index) => (
                    <li 
                        className='themeItem'
                        key={`${item.title}-${index}`}
                        title={item.title}
                        ref={el => itemRefs.current[index] = el}
                    >
                        <span 
                            onClick={() => {
                                onThemeChange(item);
                                focusOnItem(index);
                            }}
                        >
                            {item.title}
                        </span>

                        {item.deletable && (
                            <Icon
                                onClick={() => onThemeDelete(item)}
                                name='trash'
                                className='themeItemIcon'
                                iconColor={disabled}
                            />)
                        }
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ThemeSidebar;