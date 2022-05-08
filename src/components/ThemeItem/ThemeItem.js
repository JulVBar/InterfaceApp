import './themeItem.scss';

const ThemeItem = ({ title, onClick, onDelete }) => {

    

    return (
        <li>
            <span onClick={onClick}>{title}</span>               
            <button 
                type="button"
                onClick={onDelete}>
                delete theme
            </button>
        </li>
    )
}

export default ThemeItem;