
import { useDispatch, useSelector } from 'react-redux';
import { layoutColorSetting, primaryColorSetting, changeThemeStyle } from '../../actions';
import SaveThemePopup from '../SaveThemePopup/SaveThemePopup';
import classNames from 'classnames';

import './colorPanel.scss';

const ColorPanel = ({interfaceStyle}) => {
    const { layoutColor, primaryColor, themeStyle } = useSelector(state => state);
    const dispatch = useDispatch();

    const colorHandler = (e, action) => {
        const value = e.target.value;
        dispatch(action(value));
    }

    const switchThemeHandler = (e) => {
        const value = e.target.value;
        dispatch(changeThemeStyle(value));
    }

    const interfaceDesign = classNames('colorPanel', interfaceStyle);

    return (
        <div className={interfaceDesign} style={{background: `${primaryColor}`}}>
            <input type="color"  value={layoutColor} onChange={(e) => colorHandler(e, layoutColorSetting)} />
            <input type="color" value={primaryColor} onChange={(e) => colorHandler(e, primaryColorSetting)}/>

            <SaveThemePopup />
            
            <select value={themeStyle} onChange={switchThemeHandler}>
                <option value="red">white</option>
                <option value="red">red</option>
                <option value="blue">blue</option>
                <option value="green">green</option>
            </select>
        </div>
    )
}

export default ColorPanel;