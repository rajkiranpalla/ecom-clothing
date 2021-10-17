
import './menu-item.styles.scss';
import {withRouter} from 'react-router-dom';

const MenuItem = ({ title, imageUrl, size ,linkUrl, history, match }) => (
    <div className={`${size} menu-item`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div className = 'background-image' style={{
        backgroundImage: ` url(${imageUrl})`
    }}>
        </div>
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'> Shop Now </span>
        </div>
    </div>
)

//withrouter component is from react-router-dom which wil help us to access the histroy, match and location of the route 
//by wrapping the child inside it. this makes the menuitem component a higher order component
export default withRouter(MenuItem);