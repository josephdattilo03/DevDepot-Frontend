import React, {ReactNode} from 'react'
import '../../styles/Auth.css'

interface RegisterFrameProps {
    children: ReactNode
    image: string
    title: string
    subtitle: string
}
export default function RegisterFrame({children, image, title, subtitle} : RegisterFrameProps) {
    return (
        <div>
            <div className='form-background'>
                <div className='form-foreground'>

                    <div className='profile-border'>
                        <img src={image}></img>
                    </div>
                    <p style={{marginTop: "4vh", marginBottom: 0}} className='subtitle-sm'>{title}</p>
                    <p style={{marginTop: "1vh", textAlign: 'center'}} className='body-ig'>{subtitle}</p>
                    {children}
                </div>
            </div>
        </div>
    )
}
