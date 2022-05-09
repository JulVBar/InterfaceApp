import Popup from 'reactjs-popup';
import { useState, useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userThemesSetting } from '../../actions';
import { gradient } from '../../constants/styleConstants';

import 'reactjs-popup/dist/index.css';
import './saveThemePopup.scss';

const SaveThemePopup = () => {
    const [themeName, setThemeName] = useState('');
    const { colors, userThemes } = useSelector(state => state);
    const dispatch = useDispatch();

    const {linear, degrees, from, to} = gradient;
    const {layout, main, primary, secondary, disabled, text} = colors;

    const onChangeValue = useCallback(
        (e) => {
            const value = e.target.value;
            setThemeName(value);
        },[]);

    const onSubmit = useCallback(
        (e) => {
            e.preventDefault();
    
            const savedTheme = {
                title: themeName,
                deletable: true,
                colors,
            }
    
            localStorage.setItem(`${themeName}`, JSON.stringify(savedTheme));
            userThemes.push(savedTheme);
            dispatch(userThemesSetting(userThemes));
            setThemeName('');
        },[themeName, colors, userThemes, dispatch]);

    return (
        <Popup
            trigger={<button
                    type="button"
                    style={{background: `${linear}(${degrees}, ${primary} ${from}, ${secondary} ${to})`,
                            color: main}}>
                        Save as
                    </button>}
            modal
            nested
        >
        {close => (
            <div className="modal" style={{background: layout}}>
                <button 
                    className="close" 
                    onClick={() => {
                        setThemeName('');
                        close();
                    }}
                >
                    &times;
                </button>
                <div className="header" style={{color: text}}> Name your theme </div>
                <div className="content">
                    <form className="modalForm" onSubmit={onSubmit}>
                        <input
                            type="text"
                            value={themeName}
                            onChange={onChangeValue}
                            placeholder="Theme name..."
                            style={{border: `1px solid ${disabled}`,
                                    color: text
                            }}
                        />

                        <div className="actions">
                            <button
                                type="submit"
                                className="buttonSave"
                                onClick={(e) => {
                                    onSubmit(e);
                                    close();
                                }}
                                style={{background: `${linear}(${degrees}, ${primary} ${from}, ${secondary} ${to})`,
                                color: main}}
                            >
                                Save
                            </button>
                            <button
                                className="buttonsReset btnGradientBorder"
                                style={{color: text}}
                                type="reset"
                                onClick={() => {
                                    setThemeName('');
                                    close();
                                }}
                            >
                                <svg id="storage" width="0" height="0" viewBox="0 0 0 0">
                                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="10%">
                                        <stop offset="0%" stopColor={primary}></stop>
                                        <stop offset="100%" stopColor={secondary}></stop>
                                    </linearGradient>  
                                </svg>
                                <svg className="gradientBorder">
                                    <rect rx="10" ry="10" x="3" y="3" />
                                </svg>
                                Close
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            )}
        </Popup>
    )
}

export default SaveThemePopup;