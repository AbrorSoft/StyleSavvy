import {BaseButton, GoogleSignInButton, InvertedButton }  from './button.styles'
export const BUTTON_TYPE_CLAESS = {
    base: 'base',
    google: 'google-sign-in',
    inverted: 'inverted',
}
const getButton = (buttonType = BUTTON_TYPE_CLAESS.base) =>(
    {
        [BUTTON_TYPE_CLAESS.base]: BaseButton,
        [BUTTON_TYPE_CLAESS.google]: GoogleSignInButton,
        [BUTTON_TYPE_CLAESS.inverted]: InvertedButton,
    }[buttonType]
)
const Button = ({children, buttonType, ...othersProp})=>{
    const CustomButton = getButton(buttonType)
    return(
        <CustomButton {...othersProp} >
            {children}
        </CustomButton>
    )
}
export default Button