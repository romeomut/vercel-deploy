import { useState } from 'react';
import './index.css'

export default function CreateToDo() {

    const [text, setText] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        sendData(JSON.stringify({ text }))
    }

    const handleChange = (e) => {
        setText(e.target.value)
    }

    //

    const sendData = async (data) => {

        try {
            // const res = await fetch('http://localhost:5050/create-todo', {
            const res = await fetch('https://vercel-deploy-server-beta.vercel.app', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                }, body: data
            })

            const result = await res.json()
            console.log(result.message)
            if (!res.ok) {
                console.log(result.message)
            }

        } catch (error) {
            console.log(error.message)
        }

    }

    return (
        <div className="form">
            <form className="form" onSubmit={handleSubmit}>
                <input className='input' placeholder='Enter item' type='text' onChange={handleChange} />
                <button className='btn' name='create'>Create</button>
            </form>
        </div>
    )
}