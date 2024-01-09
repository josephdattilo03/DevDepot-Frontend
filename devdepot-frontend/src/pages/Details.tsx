
import RegisterFrame from '../components/RegisterFrame/RegisterFrame'
import settings from '../assets/settings.svg'
import FormInput from '../components/FormInput/FormInput'
import emailPicture from '../assets/email.svg'
import hollowProfile from '../assets/hollowProfile.svg'
import lock from '../assets/lock.svg'
import '../styles/Auth.css'
import { useState } from 'react'
import emailValidator from 'email-validator'


export default function Details() {
    const [email, setEmail] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [alert, setAlert] = useState('')

    function onSubmit() {
        console.log(email)
        if (!email || !firstName || !lastName || !password || !confirmPassword) {
            setAlert('Please fill in all fields')
            return
        }
        if (password != confirmPassword) {
            setAlert('Passwords do not patch')
            return
        } 
        if (!emailValidator.validate(email)){
            setAlert('This is not a valid email')
            return
        }
        
    }

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh'}}>
            <RegisterFrame image={settings} title={'Account Details'} subtitle={"don't lie... we'll know"}>
                <form style={{display: 'flex', flexDirection: 'column', gap: '.5vw', marginTop: '.25vw'}}>
                    <FormInput state={email} setState={setEmail} image={emailPicture} type='email' placeholder='email' ></FormInput>
                    <FormInput state={firstName} setState={setFirstName} image={hollowProfile} type='text' placeholder='first name' ></FormInput>
                    <FormInput state={lastName} setState={setLastName} image={hollowProfile} type='text' placeholder='last name'></FormInput>
                    <FormInput state={password} setState={setPassword} image={lock} type='password'  placeholder='password'></FormInput>
                    <FormInput state={confirmPassword} setState={setConfirmPassword} image={lock} type='password'  placeholder='confirm password'></FormInput>
                </form>
                <p className='body-ig' style={{color: 'red', marginTop: '1vh'}}>{alert}</p>
                <div onClick={() => {onSubmit()}} className='btn btn-txt' style={{marginTop: '1vw', width: '15vw'}}>
                        <p>Next</p>
                </div>
            </RegisterFrame>
        </div>
    )
}
