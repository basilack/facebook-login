import React from 'react';
import './register.css';

function Register() {
    
    return(

        <>
        <body className='body'>
            <div className='row'>
                <div className='col-sm-6'>
                    <h1 style={{color:"#1877F2", paddingTop:'30%', paddingLeft:'20%'}}><b>facebook</b></h1>
                    <h3 style={{paddingLeft:'20%'}}>Connet with friends and the world around you on facebook.</h3>
                
                 </div>
    
                 <div className='col-sm-6'>

         <div className='form-group'>
           <form className='form'>
                <div className='row'>
                     <div className='col-sm-6'>
                        <label>
                   
                            <input type="text" name="fname" placeholder="First Name" className='input'/>
                        </label>
                    </div>
                </div>
                <br></br>
                <div className='row'>
                     <div className='col-sm-6'>
                        <label>
                   
                            <input type="text" name="lname" placeholder="Last Name" className='input' />
                        </label>
                    </div>
                </div>
                <br></br>
                <div className='row'>
                     <div className='col-sm-6'>
                        <label>
                   
                            <input type="text" name="name" placeholder="Mobile No. or Email" className='input'/>
                        </label>
                    </div>
                </div>
            <br></br>
            
            <div className='row'>
                <div className='col-sm-6'>
                    <label>
                   
                        <input type="password" name="pass" placeholder="Enter Password"  className='input' />
                    </label>
                </div>
            </div>
            <br></br>
            <div className='row'>
                <div className='col-sm-6'>
                     <button variant="primary" className='signup'>Sign Up</button>
                </div>
            </div>
            </form>
            </div>
            </div>
            </div>
            </body>
        </>
    )
}
 
export default Register;