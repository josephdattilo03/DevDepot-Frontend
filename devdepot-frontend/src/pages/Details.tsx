import React from 'react'
import RegisterFrame from '../components/RegisterFrame/RegisterFrame'
import settings from '../assets/settings.svg'
import FormInput from '../components/FormInput/FormInput'
import email from '../assets/email.svg'
import hollowProfile from '../assets/hollowProfile.svg'
import lock from '../assets/lock.svg'
import '../styles/Auth.css'

export default function Details() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 900}}>
            <RegisterFrame image={settings} title={'Account Details'} subtitle={"don't lie... we'll know"}>
                <form style={{display: 'flex', flexDirection: 'column', gap: '.5vw', marginTop: '.25vw'}}>
                    <FormInput image={email} type='email' placeholder='email' ></FormInput>
                    <FormInput image={hollowProfile} type='text' placeholder='first name' ></FormInput>
                    <FormInput image={hollowProfile} type='text' placeholder='last name'></FormInput>
                    <FormInput image={lock} type='password'  placeholder='password'></FormInput>
                    <FormInput image={lock} type='password'  placeholder='confirm password'></FormInput>
                </form>
                <div className='btn btn-txt' style={{marginTop: '1vw', width: '15vw'}}>
                        <p>Next</p>
                    </div>
            </RegisterFrame>
        </div>
    )
}
