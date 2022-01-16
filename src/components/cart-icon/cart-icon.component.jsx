import React from "react";
import './cart-icon.styles.scss';
import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { connect } from "react-redux";
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import {selectcartItemsCount} from '../../redux/cart/cart.selector';
import {createStructuredSelector} from 'reselect';

const CartIcon = ({toggleCartHidden,itemCount}) => (
    <div className='cart-icon'>
      <ShoppingIcon className='shopping-icon' onClick={toggleCartHidden}/>
      <span className='item-count'>{itemCount}</span>
    </div>
  );

  const mapStateToProps = createStructuredSelector ({
    itemCount : selectcartItemsCount
  });
  const mapDispatchToProps = (dispatch) => ({
    toggleCartHidden: () => dispatch(toggleCartHidden()) 
  })

  export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);