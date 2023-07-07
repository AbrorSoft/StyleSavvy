import './sign-up-form.styles.scss'
import FormInput from '../form-input/from.input.component'
import {useState} from 'react'
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from '../../utils/firebase/firebase.util'
import Button from '../button/button.component'
const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

const SignUpForm = () =>{
    const [formFields, setFormFileds] = useState(defaultFormFields)
    const {displayName, email, password, confirmPassword} = formFields
    const resetFormFields = ()=>{
        setFormFileds(defaultFormFields)
    }
    const handleSubmit = async e => {
        e.preventDefault()
        if(password !== confirmPassword){
            alert("password do not match")
            return
        }
        try {
            const {user} = await createAuthUserWithEmailAndPassword(email, password)
            await createUserDocumentFromAuth(user, {displayName})
            resetFormFields()
        } catch (error) {
            if(error.code === 'auth/email-already-in-use'){
                alert('This email alrady created ')
            }else{

                alert(error)
            }
        }


    }
    const handleChange = e =>{
        const  {name, value} = e.target
        setFormFileds({...formFields, [name]: value})
    }
    return (
        <div className='sign-up-container'>
            <h2>Do not have an account?</h2>
            <span>Sign Up your email and password</span>
            <form onSubmit={handleSubmit}>
                <FormInput label={'Display Name'} type="text" onChange={handleChange} name='displayName' value={displayName} required/>
                <FormInput label={'Email'} type="email" onChange={handleChange} name='email' value={email} required/>
                <FormInput label={'Password'} type="password" onChange={handleChange} name='password' value={password} required/>
                <FormInput label={'Confirm Password'} type="password" onChange={handleChange} name='confirmPassword' value={confirmPassword} required/>
                <Button type="submit">Sign Up</Button>
            </form>
        </div>
    )
}
export default SignUpForm