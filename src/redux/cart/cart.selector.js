import { createSelector } from "reselect";

const selectCart = state => state.cart;

export const selectCartItems = createSelector(
    [selectCart],
    cart => cart.cartItems
);

export const selectcartItemsCount = createSelector(
    [selectCartItems],
    cartItems => cartItems.reduce((totalQuantity,cartItem) => {
        return totalQuantity = totalQuantity + cartItem.quantity 
   },0)
)

