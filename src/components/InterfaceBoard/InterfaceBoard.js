import { useSelector } from 'react-redux';
import classNames from 'classnames';

import styled from 'styled-components';

import './interfaceBoard.scss';

const InterfaceBoard = () => {
    const { colors, themeStyle } = useSelector(state => state);
    const interfaceDesign = classNames('interfaceBoard', themeStyle);

    const Button = styled.button`
      font-size: 1.5em;
      text-align: center;
      color: ${colors.primary};

      &:hover {
        background: ${colors.primary};
      }
    `;

    return (
        <div className={interfaceDesign}>
          <Button>
            Show
          </Button>
            {/* <button type="button" style={{background: `${colors.layout}`}}>Show me</button> */}
        </div>
    )
}

export default InterfaceBoard;