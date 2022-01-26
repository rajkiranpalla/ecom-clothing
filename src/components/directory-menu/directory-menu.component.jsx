import React from 'react';
import './directory-menu.styles.scss';
import MenuItem  from '../menu-item/menu-item.component';
import {connect} from 'react-redux';
import {directorySections} from '../../redux/directory/directory.selector';
import { createStructuredSelector } from 'reselect';

const DirectoryMenu = ({sections}) =>{
        return (  
            <div className = 'directory-menu'>
                {sections.map( ({id,...otherSectionProps}) => {
                   return <MenuItem key={id} {...otherSectionProps}></MenuItem>
                }
                )}
         </div>
        );
};

const mapStateToProps = createStructuredSelector({
  sections : directorySections
})

export default connect(mapStateToProps)(DirectoryMenu);