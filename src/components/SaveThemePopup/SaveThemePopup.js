import Popup from 'reactjs-popup';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userThemesSetting } from '../../actions';

import 'reactjs-popup/dist/index.css';
import './saveThemePopup.scss';

const SaveThemePopup = () => {
    const [themeName, setThemeName] = useState('');
    const { layoutColor, primaryColor, userThemes } = useSelector(state => state);
    const dispatch = useDispatch();

    const onChangeValue = (e) => {
        const value = e.target.value;
        setThemeName(value);
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const savedTheme = {
            title: themeName,
            layoutColor,
            primaryColor,
        }

        // console.log(savedTheme);

        localStorage.setItem(`${themeName}`, JSON.stringify(savedTheme));
        userThemes.push(savedTheme);
        dispatch(userThemesSetting(userThemes));
        setThemeName('');
    }

    return (
        <Popup
    trigger={<button type="button">Save as</button>}
    modal
    nested
    >
    {close => (
        <div className="modal">
            <button 
            className="close" 
            onClick={() => {
                setThemeName('');
                close();
            }}>
            &times;
            </button>
            <div className="header"> Modal Title </div>
            <div className="content">
                <form onSubmit={onSubmit}>
                    <input type="text" value={themeName} onChange={onChangeValue}/>

                    <div className="actions">
                        <button
                        type="submit"
                            className="button"
                            onClick={(e) => {
                                onSubmit(e);
                                close();
                            }}
                        >
                            save
                        </button>
                        <button
                            type="reset"
                            className="button"
                            onClick={() => {
                                setThemeName('');
                                close();
                            }}
                        >
                            close modal
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