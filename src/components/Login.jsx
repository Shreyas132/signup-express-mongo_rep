import React, { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom'
import axios from 'axios'
import './style.css'

const Login = () => {
    const [email,setemail] = useState('')
    const [password,setpassword] = useState('')

    const history = useNavigate()
    
    const submit = async (e) =>{
        e.preventDefault()

        try{
            await axios.post("http://localhost:8000/",{
                email,password
            })
            .then((res)=>{
                if(res.data ==='exist'){
                    history('/Landingpage',{state:{id:email}})

                }
                else if(res.data ==='not exist'){
                    alert("user not exist")

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
    <div className='login'>
        <form action="POST" className='container'>
            <h1>Login</h1>
            <label for="email"><b>E-mail</b></label>
            <input type='email' placeholder='e-mail'  id='email' onChange={(e)=>(setemail(e.target.value))} />
            <label for="password"><b>Password</b></label>
            <input type='password'  id="pass" placeholder='password' onChange={(e)=>(setpassword(e.target.value))} />

            <button type='submit'  id='btn' onClick={submit}><span>Login</span></button>
            <br />
            <p>OR</p>
            <br />
            <Link to='/Signup'><span>New User?</span> Signup</Link>


        </form>
        

    </div>
  )
}

export default Login