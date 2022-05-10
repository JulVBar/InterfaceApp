import Popup from 'reactjs-popup';
import { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userThemesSetting } from '../../actions';
import ButtonGradientBorder from '../ButtonGradientBorder/ButtonGradientBorder';
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
                            <ButtonGradientBorder
                                type="reset"
                                textColor={text}
                                primaryColor={primary}
                                secondaryColor={secondary}
                                handler={() => {
                                    setThemeName('');
                                    close();
                                }}
                                buttonText="Close"
                            />
                        </div>
                    </form>
                </div>
            </div>
            )}
        </Popup>
    )
}

export default SaveThemePopup;