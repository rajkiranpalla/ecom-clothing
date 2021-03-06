import React from 'react';
import './custom-button.styles.scss';
const CustomButton = ({children,isGoogleSignIn,inverted,...otherprops}) => (
 <button className={`${inverted?'inverted':''} ${isGoogleSignIn?'google-signin':''} custom-button`} {...otherprops}>
    {children}
 </button>
)

export default CustomButton;