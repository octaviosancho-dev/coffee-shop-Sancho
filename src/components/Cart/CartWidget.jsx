import React, { useContext } from 'react';
import CartIcon from '../../assets/img/cart-icon.png'
import { Link } from 'react-router-dom';
import { ItemsContext } from '../Context/CartContext';

const CartWidget = () => {

  const {items} = useContext(ItemsContext);

  const totalItems = items.map( item => {
    return item.quantity;
  }).reduce( (init, current) => {
    return init + current;
  },0)

  return(
    <Link to='/cart'>
      {items.length === 0 ? null : 
      <>
        <img src={CartIcon} alt="cart-icon" className='logo'/>
        <div className='logo--counter'><p>{totalItems}</p></div>
      </>}
    </Link>
  );
}

export default CartWidget;