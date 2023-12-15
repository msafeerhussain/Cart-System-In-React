import {Fragment} from 'react';
import mealImage from '../../assests/img/meals.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props)=>{
  return (
    <Fragment>
        <header className={classes.header}>
            <h1>Food Store</h1>
            <HeaderCartButton onClick={props.onCartShown} />
            </header>
        <div className={classes['main-image']}>
            <img src={mealImage} alt="Table full of food" />
        </div>
      
    </Fragment>
  )
}
export default Header
