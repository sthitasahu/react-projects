import { useState } from 'react'

import './App.css'

function App() {
  const [username,setusername]=useState("")
  const [password,setpassword]=useState("")
  const [confirmpassword,setconfirmpassword]=useState("")
  const [email,setemail]=useState("")


  const [errorUserName, setErrorUserName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorConfirmPassword, setErrorConfirmPassword] = useState("");

  const [usernameColor,setusernameColor]=useState("")
  const [passwordColor,setpaswordColor]=useState("")
  const [confirmpasswordColor,setconfirmpasworColor]=useState("")
  const [emailColor,setemailColor]=useState("")

  function check(e){
     e.preventDefault()
     if(username.length <8){
      setErrorUserName("Username should be atleast 8 letters long")
      setusernameColor("red")
     }else{
       setErrorUserName("")
       setusernameColor("green")
     }
     if(password.length >=8){
        setErrorPassword("")
        setpaswordColor("green")
     }
     else{
       setErrorPassword("Password must be atleast 8 characters long")
       setpaswordColor("red")
     }
     if(email.includes("@gmail.com")){
      setErrorEmail("")
      setemailColor("green")
     }
     else{
       setErrorEmail("Invalid email");
       setemailColor("red")
     }

     if(password != "" && password ===confirmpassword){
       setErrorConfirmPassword("")
       setconfirmpasworColor("green")
     }
     else{
       setErrorConfirmPassword("Passwords donot match")
       setconfirmpasworColor("red")
     }
  }

  return (
    
    <>
    <div className="card">
      <div className="card-image"></div>

      <form>
        <input
          type="text"
          placeholder="Name"
          style={{ borderColor:usernameColor }}
          value={username}
          onChange={(e) => setusername(e.target.value)}
        />

        <p className="error">{errorUserName}</p>

        <input
          type="text"
          placeholder="Email"
          style={{ borderColor: emailColor }}
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <p className="error">{errorEmail}</p>

        <input
          type="password"
          placeholder="Password"
          style={{ borderColor: passwordColor }}
          value={password}
          onChange={(e) =>setpassword(e.target.value)}
        />
        <p className="error">{errorPassword}</p>

        <input
          type="password"
          placeholder="Confirm Password"
          style={{ borderColor: confirmpasswordColor }}
          value={confirmpassword}
          onChange={(e) =>setconfirmpassword(e.target.value) }
        />
        <p className="error">{errorConfirmPassword}</p>

        <button className="submit-btn" onClick={check}>
          Submit
        </button>
      </form>
    </div>
  </>
    
  )
}

export default App
