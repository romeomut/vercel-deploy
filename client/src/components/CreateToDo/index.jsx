import { useEffect, useState } from 'react';
import './index.css'

export default function CreateToDo() {

    const [text, setText] = useState('')
    const [dt, setDt] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text) {
            sendData(JSON.stringify({ text }))
        }
    }

    const handleChange = (e) => {
        setText(e.target.value)
    }

    //

    const sendData = async (data) => {

        try {
            //const res = await fetch('http://localhost:5050/create-todo', {
            //const res = await fetch('https://vercel-deploy-server-beta.vercel.app/create-todo', {
            const res = await fetch('http://137.184.228.199:5050/create-todo', {

                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                }, body: data
            })

            const result = await res.json()

            if (!res.ok) {
                console.log(result.message)
            }

        } catch (error) {
            console.log(error.message)
        }

        setText('')
    }

    //

    useEffect(() => { getData() }, [text])

    //

    const getData = async () => {

        try {
            //const res = await fetch('http://localhost:5050/get-todo', {
            //const res = await fetch('https://vercel-deploy-server-beta.vercel.app/get-todo', {
            const res = await fetch('http://137.184.228.199:5050/get-todo', {
                method: 'GET',
            })

            const result = await res.json()

            if (res.ok) {
                setDt(result.reverse())
            }
            else {
                console.log(result.message)
            }

        } catch (error) {
            console.log(error.message)
        }

    }

    //

    return (
        <div className="form">
            <form className="form" onSubmit={handleSubmit}>
                <input className='input' placeholder='Enter item' type='text' onChange={handleChange} />
                <button className='btn' name='create'>Create</button>
            </form>

            <div className="list-todo">
                <ul>
                    {dt && (dt.map((el, key) =>
                        <li key={key}>
                            id {el.id} - {el.text}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}