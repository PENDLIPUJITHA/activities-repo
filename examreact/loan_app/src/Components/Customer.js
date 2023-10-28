import { useState } from "react"
import { Link, Route, Routes, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
//component to success
export function LoginSuccess()
{
    let {emailId}=useParams();//extract emailId from the path parameter
    let customer={customerId: 1, firstName:"Pujitha", lastName:"Pendli", emailId:"pendliPujitha2001@gmai.com",password:"Pooja@01", phone:7095655909, pan:"ABH990J"};
    return(<div className="row">
        <div className="col-4">
            <p>Customer ID:{customer.customerId}</p>
            <p>First Name:{customer.firstName}</p>
            <p>Last Name:{customer.lastName}</p>
            <p>Email ID:{customer.emailId}</p>
            <p>phone:{customer.phone}</p>
            <p>Pan Number:{customer.pan}</p>
        </div>
        <div className="col-6">
            <Link to='dashboard'>Dashboard</Link>|
            <Link to='viewLoans'>View Loans</Link>|
            <Link to='applyLoans'><div>
                        <input type="submit" className="btn btn-secondary" value="Login"></input>
                    </div></Link>|
            <Link to='loanStatus'>Loan Status</Link>
        <Routes>
            <Route path="" element={<div>Welcome {emailId}</div>}></Route>
            <Route path="dashboard" element={<div>Welcome {emailId}</div>}/>
            <Route path="viewLoans" element={<div>Welcome {emailId} you can view loans</div>}/>
            <Route path="applyLoans" element={<div>Welcome {emailId} you can apply loans</div>}/>
            <Route path="loanStatus" element={<div>Welcome {emailId} yu can see you loan status</div>}/>

        </Routes>
       </div>
    </div>)

}
//component to register
export function CustomerRegistration()
{
    let [customerId, setCustomerId]=useState('');
    let [firstNamename, setFirstName]=useState('');
    let [secondName, setSecondName]=useState('');
    let [emailId,setEmailId]=useState('');
    let [password, setPassword]=useState('');
    let [phone, setPhone]=useState('');
    let [pan, setPan]=useState('');
    let navigate=useNavigate();
    //authenticate the emailId and password
    let handleSubmit=(e)=>{
        e.preventDefault();
        //once the data goes backend you need to navigate to login page
        let customer={"customerId":id,"firstName": firstName, "secondName": secondName, "emailId": emailId,"password":password,"phone":phone, "pan": pan};
        let url="http://localhost:9091/api/customer/register";
        axios.post(url,profile)
        .then(Response=>navigate ('/login'))
        .catch(err=>navigate('/register'));
        console.log(profile);
    }
    return(<div className="container">
        <h3>Registratioin Form</h3><hr/>
        <form onSubmit={handleSubmit}>
            <div className="w-25">
                <label>Enter Customer Id</label>
                <input type="text" onChange={e=>setCustomerId(e.target.value)}></input>
            </div>
            <div className="w-25">
                <label>Enter First name</label>
                <input type="text" onChange={e=>setFirstName(e.target.value)}></input>
            </div>
            <div className="w-25">
                <label>Enter Second name</label>
                <input type="text" onChange={e=>setSecondName(e.target.value)}></input>
            </div>
            <div className="w-25">
                <label>Enter Email ID</label>
                <input type="text" onChange={e=>setEmailId(e.target.value)}></input>
            </div>
            <div className="w-25">
                <label>Enter Password</label>
                <input type="password" onChange={e=>setPassword(e.target.value)}></input>
            </div>
            <div className="w-25">
                <label>Enter phone number</label>
                <input type="phone" onChange={e=>setPhone(e.target.value)}></input>
            </div>
            
            <div className="w-25">
                <label>Enter Pan number</label>
                <input type="text" onChange={e=>setPan(e.target.value)}></input>
            </div>
            <div className="w-25">
                
                <input type="submit" value="Register"></input>
            </div>
        </form>
        <div>
                <Link to="/login">Login</Link>      
        </div>
    </div>)
}

//component to login
export function CustomerLogin()
{
    let [emailId,setEmailId]=useState('');
    let [password, setPassword]=useState('');
    //to programatially navigate
    let navigate=useNavigate();
    //authenticate the emailId and password
    let handleSubmit=(e)=>{
        e.preventDefault();
        let profile={"emailId": emailId,"password":password};
        let url="http://localhost:9092/profile/login";
        axios.post(url,profile)
        .then(Response=>navigate ('/success/'+emailId))
        .catch(err=>navigate('/login'));
        console.log(profile);
        navigate('/success/'+emailId);//url:success/:emailId 
    }
    return(
        <div className="container">
            <h3>Login Form</h3>
            <form onSubmit={handleSubmit}>
                <div className="w-25">
                    <input type="text" placeholder="Enter your emailId" className="form-control"
                    onChange={e=>setEmailId(e.target.value)}>
                    </input>
                </div>
                <div className="w-25">
                    <input type="text" placeholder="Enter your password" className="form-control"
                    onChange={e=>setPassword(e.target.value)}>
                    </input>
                    <div>
                        <input type="submit" className="btn btn-secondary" value="Login"></input>
                    </div>
                </div>
            </form>
            <div>
                <Link to="/register">Create Profile</Link>
            </div>
        </div>
    )
}