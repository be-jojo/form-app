import React, { useState } from 'react'
import FormInput from './FormInput'

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
            label: 'name',
            pattern: '[a-zA-Z]{1, 16}',
            required: true,
            error:'Only Alphabates allowed'
        },
        {
            id: 2,
            name:'email',
            type: 'email',
            placeholder: 'Email',
            label: 'email',
            // pattern: '',
            required: true,
            error:'only Correct Email Id allowed'
        },
        {
            id: 3,
            name:'phoneNumber',
            type: 'text',
            placeholder: 'Phone NUmber',
            label: 'phoneNumber',
            pattern: '[0-9]{10}$',
            required: true,
            error:'Only 10 digit correct Phone Numbers allowed'
        },
        {
            id: 4,
            name:'message',
            type: 'text',
            placeholder: 'Message',
            label: 'message',
            required: false,
        }
    ]

    function onChange(e){
        setData({...data, [e.target.name]: e.target.value});
    }

    return (
        <section>
            <form method='post' onSubmit={handleSubmit}>
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
            <div>
                {showData && 
                <div>
                    <div>Name: {info.name}</div>
                    <div>Email: {info.uemail}</div>
                    <div>Phone No: {info.upn}</div>
                    <div> Message: {info.um}</div>
                </div>}
            </div>
        </section>

    );
}
export default MyForm