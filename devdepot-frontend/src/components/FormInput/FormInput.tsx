import React from 'react'

interface FormInputProps {
    type: string
    placeholder: string
    image: string
    state: string,
    setState: (newState: string) => void
}

export default function FormInput({type, placeholder, image, state, setState} : FormInputProps) {
    return (
        <div style={{display: 'flex', alignItems: 'center'}}>
            <img style={{position: 'absolute', marginLeft: "1vw", width: '4vw'}} src={image}></img>
            <input value={state} onChange={(e) => {setState(e.target.value)}} style={
                {width: "35vw",
                height: "6vw", 
                fontSize: "3vw", 
                paddingLeft: "6vw", 
                backgroundColor: "#7A3B6959", 
                border: 'none', outline: 'none', fontFamily: 'Outfit, sans-serif'}
                } type={type} placeholder={placeholder}></input>
        </div>
    )
}
