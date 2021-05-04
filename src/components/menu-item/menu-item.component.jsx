import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-item.style.scss'

const MenuItem = ({title, imageUrl, subtitle, urlPath, size, history, match}) => {
   return ( <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${urlPath}`)}>
                <div className='background-image' style={{
                    backgroundImage: `url(${imageUrl})`
                    }} />
                <div className='content'>
                    <h1 className='title'>{title.toUpperCase()}</h1>
                    <span className='subtitle'>{subtitle.toUpperCase()}</span>
                </div>
            </div> )
}

export default withRouter(MenuItem);