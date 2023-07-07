import './sign-in-form.styles.scss'
import {
    signInWithGooglePopup,
    createUserDocumentFromAuth,
    signinAuthUserWithEmailAndPassword
    }from '../../utils/firebase/firebase.util'
import FormInput from '../form-input/from.input.component'
import {useState} from 'react'
import Button, {BUTTON_TYPE_CLAESS} from '../button/button.component'
const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () =>{
    const [formFields, setFormFileds] = useState(defaultFormFields)
    const { email, password} = formFields
    const resetFormFields = ()=>{
        setFormFileds(defaultFormFields)
    }
    const signInWithGoogle = async ()=>{
         await signInWithGooglePopup()

      }
    const handleSubmit = async e => {
        e.preventDefault()
        try {
            const {user} = await signinAuthUserWithEmailAndPassword(email, password)
            resetFormFields()
        } catch (error) {
            if(error.code  === 'auth/wrong-password' || 'auth/user-not-found' ){
                alert('incoract password or email')
            }else{
                console.log(error)
            }
        }
    }


    const handleChange = e =>{
        const  {name, value} = e.target
        setFormFileds({...formFields, [name]: value})
    }
    return (
        <div className='sign-up-container'>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label={'Email'} type="email" onChange={handleChange} name='email' value={email} required/>
                <FormInput label={'Password'} type="password" onChange={handleChange} name='password' value={password} required/>
                <div className='buttons-container'>
                <Button type="submit">Sign In</Button>
                <Button type="button" buttonType={BUTTON_TYPE_CLAESS.google}  onClick={signInWithGoogle}>Google Sign in</Button>
                </div>
            </form>
        </div>
    )
}
export default SignInForm