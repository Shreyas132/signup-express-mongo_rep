import React, { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom'
import axios from 'axios'
import './style1.css'

const Signup = () => {
    const [email,setemail] = useState('')
    const [password,setpassword] = useState('')
    const [username,setusername] = useState('')
    const history = useNavigate()

    
    const submit = async (e) =>{
        e.preventDefault()

        try{
            await axios.post("http://localhost:8000/signup",{
                username,email,password
            })
            .then((res)=>{
                if(res.data === 'exist'){
                    alert("User already exist")

                }
                else if(res.data === 'not exist'){
                    history('/',{state:{id:email}})

                }
            })
            .catch((error)=>{
                alert("details unmatched")
                console.log(error)
            })

        }
        catch(err){
            console.log(err)

        }


        
    }

  return (
    <div className='signup'>
        <form action="POST" className='tray'>
            <h1>Signup</h1>
            <label for="Name"><b>UserName</b></label>
            <input id="name" type="text" placeholder="Enter Name" required onChange={(e)=>(setusername(e.target.value))} />

            <label for="email"><b>E-mail</b></label>
            <input type='email' placeholder='e-mail'  id='email' onChange={(e)=>(setemail(e.target.value))} />
            <label for="password"><b>Password</b></label>
            <input type='password'  id="pass" placeholder='password' onChange={(e)=>(setpassword(e.target.value))} />
            

            <button type='submit'  id='btn-1' onClick={submit}><span>SignUp</span></button>
            <br />
            <p>OR</p>
            <br />
            <Link to='/'> Login</Link>

        </form>
    </div>
  )
}

export default Signup