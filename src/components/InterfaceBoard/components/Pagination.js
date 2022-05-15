import { useState, useCallback } from 'react';
import Icon from '../../Icon/Icon';
import styled from 'styled-components';

import './pagination.scss';

const Pagination = ({themeStyle, text, main, disabled, gradientColor, shadowOut, shadowInnerMain}) => {
    const paginationArr = [1, 2, 3, 4, 5, 6, 7, 8];

    const [activePage, setActivePage] = useState(7);

    const onActivePage = useCallback(
        (item) => {
            setActivePage(item);
        },[]);

    const PaginationList = styled.ul`
        &.neuromorphic {
            li {
                &.activePage {
                    background: transparent;
                    box-shadow: ${shadowInnerMain};
                    color: ${text};
                }
            }
        }
        li {
            &.activePage {
                background: ${gradientColor};
                color: ${main};
            }
        }
    `;

    return (
        <div className="pagination">
            <div className="pagination__arrow">
                <Icon
                    name='play'
                    iconColor={disabled}
                />
            </div>
            <PaginationList className={themeStyle} style={{background: main, boxShadow: shadowOut}}>
                {paginationArr.map((item, index) => (
                    <li 
                        key={index}
                        className={activePage === item ? 'activePage' : ''}
                        onClick={() => onActivePage(item)}
                    >
                        {item}
                    </li>
                ))}
            </PaginationList>
            <div>
                <Icon
                    name='play'
                    iconColor={disabled}
                />
            </div>
        </div>
    )
}

export default Pagination;