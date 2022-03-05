import { useDispatch } from 'react-redux';
import { TOGGGLE_CART } from '../../actions/cart-actions';
import classes from './CartButton.module.css';

const CartButton = props => {
  const dispatch = useDispatch();

  const toggleCartHandler = () => {
    dispatch({ type: TOGGGLE_CART });
  };
  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
