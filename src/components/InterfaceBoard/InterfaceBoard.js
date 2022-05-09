import { useSelector } from 'react-redux';
import classNames from 'classnames';

import './interfaceBoard.scss';

const InterfaceBoard = () => {
    const { layoutColor, themeStyle } = useSelector(state => state);
    const interfaceDesign = classNames('interfaceBoard', themeStyle);

    return (
        <div className={interfaceDesign}>
            <button type="button" style={{background: `${layoutColor}`}}>Show me</button>
        </div>
    )
}

export default InterfaceBoard;