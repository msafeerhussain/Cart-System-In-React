import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
    items : [],
    totalAmount : 0
}
const cartReducer = (state , action)=>{
    if(action.type === 'ADD'){
        let updatedItems = state.items.concat(action.item);
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;
        const existedItemIndex = state.items.findIndex((item) => item.id === action.item.id);
        const existingCartItem = state.items[existedItemIndex];
        
        if(existingCartItem){
            const updatedItem = {
                ...existingCartItem,
                amount : existingCartItem.amount + action.item.amount
            };
            updatedItems = [...state.items];
            updatedItems[existedItemIndex] = updatedItem;
        }else{
            updatedItems = state.items.concat(action.item);
        }
        return {
            items : updatedItems,
            totalAmount : updatedTotalAmount
        };
    }
    if(action.type === "REMOVE"){
        const existingCartIndex = state.items.findIndex((item)=> item.id === action.id);
        const existingCartItem = state.items[existingCartIndex];
        const updatedTotalAmount = state.totalAmount - existingCartItem.price;
        let updatedItems;
        if(existingCartItem.amount === 1){
            updatedItems = state.items.filter((item)=> item.id !== action.id);
        }else{
            const updateItem = {
                ...existingCartItem , amount : existingCartItem.amount -1,
            }
            updatedItems = [...state.items];
            updatedItems[existingCartIndex] = updateItem;
        }return {
            items : updatedItems,
            totalAmount : updatedTotalAmount
        }
    }
    // if(action.type === "REMOVE"){
    //     const existingCartItemIndex = state.items.findIndex((item) => item.id === action.id);
    //     const existingItem  = state.items[existingCartItemIndex];
    //     const updatedTotalAmount = state.totalAmount - existingItem.price;
    //     let updatedItems;
    //     if(existingItem.amout === 1){
    //         updatedItems = state.items.filter(item => item.id !== action.id);
    //     }else{
    //         const updateItem = {
    //             ...existingItem , amount : existingItem.amount-1
    //         }
    //         updatedItems = [...state.items];
    //         updatedItems[existingCartItemIndex] = updateItem;
    //     }
    //     return {
    //         items : updatedItems,
    //         totalAmount : updatedTotalAmount,
    //     }
    // }
    return defaultCartState;
}

const CartProvider = (props)=>{
    const [cartState , dispatchCartAction] = useReducer(cartReducer , defaultCartState);
    
    const addItemToCardHandler = item=>{
        dispatchCartAction({type:'ADD' , item:item});

    };
    const removeItemToCartHandler = id=>{
        dispatchCartAction({type:'REMOVE' , id:id});
    };
    const cartContext = {
        items:cartState.items,
        totalAmount: cartState.totalAmount,
        addItem : addItemToCardHandler,
        removeItem : removeItemToCartHandler,
    }

    return(
        <CartContext.Provider value={cartContext}>
            {props.children}


        </CartContext.Provider>
    )
}

export default CartProvider;