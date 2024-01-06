import React from 'react'
import RegisterFrame from '../components/RegisterFrame/RegisterFrame'
import '../styles/Auth.css'
import FormInput from '../components/FormInput/FormInput'
import school from '../assets/school.svg'
import schoolBlack from '../assets/schoolBlack.svg'
import menu from '../assets/menu.svg'

export default function Attributes() {
    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh'}}>
            <RegisterFrame image={schoolBlack} title={'Education & Attributes'} subtitle={"The two s's, school and skills."}>
                <form style={{marginTop: '5vh', display: 'flex', flexDirection: 'column', gap: '3vw'}}>
                    <FormInput type='text' image={school} placeholder='School' ></FormInput>
                    <FormInput type='password' image={menu} placeholder='Skills'></FormInput>
                </form>
                <div style={{marginTop: '8vw'}}>
                    <div className='btn btn-txt' style={{width: '33vw'}}>
                        <p style={{fontSize: '1.2vw'}}>Finish Registration</p>
                    </div>
                </div>
            </RegisterFrame>
        </div>
    )
}
