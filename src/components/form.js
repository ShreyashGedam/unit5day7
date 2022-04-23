import { useState } from 'react'

export const From = (e) =>
{
    const [formData , setFormData] = useState({
        username : "",
        userage : ""
    })

    const formSubmit = (e) =>
    {
        e.preventDefault()
        fetch(" http://localhost:8000/users",{
            method : "POST",
            body : JSON.stringify(formData)
        })
    }

    const handleChange = (e) => 
    {
        const {id , value} = e.target
        setFormData({
            ...formData,
            [id] : value
        })
    }
    return (
    <form onSubmit={formSubmit}>
        <input 
        onChange={handleChange}
        id = "username"
        type="text" placeholder="Enter Name"></input>
        <input 
        onChange={handleChange}
        id = "usergae"
        type="number" placeholder="Enter Age"></input>
        <input type="submit" value="submit"></input>
    </form>
    )
}