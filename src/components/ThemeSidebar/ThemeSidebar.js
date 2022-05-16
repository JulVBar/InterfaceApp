import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { colorsSetting, setDefaultColors } from '../ColorPanel/colorPanelSlice';
import { userThemesSetting, setActiveTheme } from './themeSidebarSlice';
import { THEMES } from '../../constants/themesConstants';
import Icon from '../Icon/Icon';
import styled from 'styled-components';
import './themeSidebar.scss';

const ThemeSidebar = ({gradientColor, shadowOut, shadowInnerMain}) => {
    const { userThemes, activeTheme } = useSelector(state => state.themes);
    const { themeStyle } = useSelector(state => state.themeStyle);
    const { colors } = useSelector(state => state.colors);
    const { main, disabled } = colors;

    const dispatch = useDispatch();

    const themes = sessionStorage.length !== 0 ? (Object.values(sessionStorage)).map(item => JSON.parse(item)) : [];

    useEffect(() => {
        dispatch(userThemesSetting(themes));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    
    const themesList = [...THEMES, ...userThemes];

    const onThemeChange = useCallback(
        (theme) => {
            dispatch(colorsSetting(theme.colors))
        },[dispatch]);

    const onThemeDelete = useCallback(
        (theme) => {
            sessionStorage.removeItem(theme.title);
            const filteredThemes = userThemes.filter(item => item.title !== theme.title)
            dispatch(userThemesSetting(filteredThemes));
            dispatch(setDefaultColors());
        },[dispatch, userThemes]);

    const onActiveTheme = useCallback(
        (item) => {
            dispatch(setActiveTheme(item.title));
        },[dispatch]);

    const ThemeList = styled.ul`
        &.neuromorphic {
            li {
                &.themeActive {
                    background: transparent;
                    box-shadow: ${shadowInnerMain};
                }
            }
        }
        li {
            &.themeActive {
                background: ${gradientColor};
            }
        }
    `;

    return (
        <div 
            className="themeSidebar"
            style={{background: main,
                    boxShadow: shadowOut}}
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