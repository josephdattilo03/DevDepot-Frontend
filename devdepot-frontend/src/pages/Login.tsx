import React from 'react'
import RegisterFrame from '../components/RegisterFrame/RegisterFrame'
import profileImg from '../assets/profile.svg'
import '../styles/Auth.css'
import FormInput from '../components/FormInput/FormInput'
import hollowProfile from '../assets/hollowProfile.svg'
import lock from '../assets/lock.svg'

export default function Login() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <RegisterFrame image={profileImg} title={'Login'} subtitle={"Input your account details. If you don't have an account, click register."}>
                <form style={{ marginTop: '5vh', display: 'flex', flexDirection: 'column', gap: '3vw' }}>
                    <FormInput type='text' image={hollowProfile} placeholder='email' ></FormInput>
                    <FormInput type='password' image={lock} placeholder='password'></FormInput>
                </form>
                <a href='/' className='body-ig' style={{ color: '#626262', marginTop: '4vw' }}>I forgot my password</a>
                <div style={{ marginTop: '3vw' }}>
                    <a href='/signup/details'>
                        <div className='btn-inv btn-txt'>
                            <p>Register</p>
                        </div>
                    </a>
                    <div className='btn btn-txt'>
                        <p>Login</p>
                    </div>
                </div>
            </RegisterFrame>
        </div>
    )
}
