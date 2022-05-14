import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { colorsSetting, userThemesSetting, setDefaultColors, setActiveTheme } from '../../actions';
import { GALAXY_THEMES } from '../../constants/galaxyThemesConstants';
import { gradient } from '../../constants/styleConstants';
import Icon from '../Icon/Icon';
import { createBoxShadow } from '../../utils/drawFunctions';
import styled from 'styled-components';
import './themeSidebar.scss';

const ThemeSidebar = () => {
    const { userThemes, activeTheme, themeStyle } = useSelector(state => state);
    const { layout, main, disabled, primary, secondary } = useSelector(state => state.colors);
    const {linear, degrees, from, to} = gradient;

    const dispatch = useDispatch();

    const themes = (Object.values(localStorage)).map(item => JSON.parse(item));
    const themesList = [...GALAXY_THEMES, ...userThemes];

    const isNeuromorphic = themeStyle === 'neuromorphic';

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

    const onActiveTheme = useCallback(
        (item) => {
            dispatch(setActiveTheme(item.title));
        },[dispatch]);

    const boxShadow = isNeuromorphic ? createBoxShadow(true, layout) : 'none';

    const ThemeList = styled.ul`
        &.neuromorphic {
            li {
                &.themeActive {
                    background: transparent;
                    box-shadow: ${createBoxShadow (false, main)};
                }
            }
        }

        li {
            &.themeActive {
                background: ${linear}(${degrees}, ${primary} ${from}, ${secondary} ${to})
            }
        }
    `;

    return (
        <div 
            className="themeSidebar"
            style={{background: main,
                    boxShadow: boxShadow}}
        >
            <ThemeList className={themeStyle}>
                {themesList.map((item, index) => (
                    <li 
                        className={activeTheme === item.title ? 'themeActive themeItem' : 'themeItem'}
                        key={`${item.title}-${index}`}
                        title={item.title}
                        
                        onClick={()=>{onActiveTheme(item)}}
                    >
                        <span 
                            onClick={() => {
                                onThemeChange(item);
                                
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
            </ThemeList>
        </div>
    )
}

export default ThemeSidebar;