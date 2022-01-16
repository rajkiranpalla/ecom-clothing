import { createSelector } from "reselect";

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectHidden = createSelector(
    [selectCart],
    (cart) => cart.hidden
);

export const selectcartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((totalQuantity,cartItem) => {
        return totalQuantity = totalQuantity + cartItem.quantity 
   },0)
);

export const selectCartTotal = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((totalCost,cartItem) => {
        return totalCost = totalCost + cartItem.quantity * cartItem.price 
   },0)
);

