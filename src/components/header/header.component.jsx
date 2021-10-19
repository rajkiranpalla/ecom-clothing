import React from 'react';
import {Link} from 'react-router-dom';
import './header.styles.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';

const Header = () => (
 <div className="header">

  <Link to='/' > homepage</Link>
  <Link to='/shop'>shoppage</Link>

 </div>

);

export default Header;