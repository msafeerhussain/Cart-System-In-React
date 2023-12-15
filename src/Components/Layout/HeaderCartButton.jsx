import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../store/cart-context';
import { useContext , useEffect , useState } from 'react';

const HeaderCartButton = (props)=>{
    const cartCtx = useContext(CartContext);
    const numberOfCardItem = cartCtx.items.reduce((currNumber , item)=>{
        return currNumber + item.amount;
    } , 0);
    const [btnIsHightLighted , setBtnIsHightLighted] = useState(false);
    const btnClasses = `${classes.button} ${ btnIsHightLighted ?  classes.bump : ''}`;
    const {items} = cartCtx;
    useEffect(()=>{
        if(items.length ===0){
           return;
        }
        setBtnIsHightLighted(true);
        const timer = setTimeout(()=>{
            setBtnIsHightLighted(false);

        } , 300)
        return ()=>{
            clearTimeout(timer);
        }

    } , [items])
    return(
        <button className={btnClasses} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCardItem}</span>

        </button>

    );

}
export default HeaderCartButton;