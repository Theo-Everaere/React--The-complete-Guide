import { useSelector, useDispatch } from 'react-redux';
import classes from './CartButton.module.css';
import { uiActions } from "../../store/ui-slice"

const CartButton = (props) => {

  const totalItems = useSelector(state => state.cart.totalQuantity)

  const dispatch = useDispatch()

  const toggleCartHandler = (event) => {
    event.preventDefault()
    dispatch(uiActions.toggle())
  }

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalItems}</span>
    </button>
  );
};

export default CartButton;
