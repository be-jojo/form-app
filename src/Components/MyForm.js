import React, { useState } from 'react'
import FormInput from './FormInput'

import './myForm.css'

function MyForm() {
    const [data, setData] = useState(
        {name: '', email: '', phoneNumber: '', message: ''}
    )
    const [showData, setShowData] = React.useState(false)
    const [info, setInfo] = React.useState('')

    function handleSubmit(e){
        e.preventDefault();
        setShowData(true)
        setInfo({name: data.name, uemail: data.email, upn: data.phoneNumber, um: data.message})
        setData({name: '', email: '', phoneNumber: '', message: ''})
    }

     const inputs = [
        {
            id: 1,
            name:'name',
            type: 'text',
            placeholder: 'Name',
            label: 'Name',
            pattern: '[a-zA-Z]{1,16}',
            required: true,
            error:'Only Alphabates allowed'
        },
        {
            id: 2,
            name:'email',
            type: 'email',
            placeholder: 'Email',
            label: 'Email',
            pattern: '^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$',
            required: true,
            error:'only Correct Email Id allowed'
        },
        {
            id: 3,
            name:'phoneNumber',
            type: 'text',
            placeholder: 'Phone Number',
            label: 'Phone Number',
            pattern: '[0-9]{10}$',
            required: true,
            error:'Only 10 digit valid Phone Numbers allowed'
        },
        {
            id: 4,
            name:'message',
            type: 'text',
            placeholder: 'Message',
            label: 'Message',
        }
    ]

    function onChange(e){
        setData({...data, [e.target.name]: e.target.value});
    }

    return (
        <div className='container'>
            <form className='form' method='post' onSubmit={handleSubmit}>
                {inputs.map((input)=>
                    <FormInput
                        key={input.id}
                        {...input}
                        value={data[input.name]}
                        onChange={onChange}
                    />
                )}
                <button type='submit'>Submit Form</button>
            </form>
            {showData && 
            <div className='data-container'> 
                Submitted Data
                <div className='data-item'>Name: {info.name}</div>
                <div className='data-item'>Email: {info.uemail}</div>
                <div className='data-item'>Phone No: {info.upn}</div>
                <div className='data-item'> Message: {info.um}</div>
            </div>}
        </div>

    );
}
export default MyForm