import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './form.css';

// import { Button, Form, FormGroup, Label, Input, FormText ,Container, Row, Col} from 'reactstrap';

function PersonalDetails(props) {

    const [ details, setDetails] = useState(
        
        {firstname : '',
        lastname : '',
        email : '',
        number : '',
        portfolio : '',
        github : '',
        linkedin : '',
        twitter : ''
    }
    );

    const handleOnChange = (event)=>{

        const {name, value } = event.target

        setDetails (prevState =>
            ({
                ...prevState,
                [name] : [value]
            }))

        // temp.firstname = event.target.value ;

        // setDetails(temp);
        
        console.log(event.target.value); 
        console.log('ON CHANGE')
    }

    return  (
        <div className="container" style={{color : props.mode==='light'?'#212529':'#f8f9fa'}}>
            <div id="header">
                <h2 >Personal Details</h2>
            </div>

            <div id="form">
                <form>
                    <div className="form-group d-flex flex-row justify-content-around">
                            <div className="flex-fill">
                                <label className="form-label" htmlFor="firstname">First Name</label>
                                <input className="form-control" value = {details.firstname}   onChange={handleOnChange} type="text" id="firstname" name="firstname" placeholder="E.g. John"/> 
                            </div>
                            <div className="flex-fill">
                                <label className="form-label" htmlFor="lastname">Last Name</label>
                                <input className="form-control" value={details.lastname} onChange={handleOnChange}  type="text" id="lastname" name="lastname" placeholder="E.g. Snow"/> 
                            </div>
                    </div>
                    <div className="form-group d-flex flex-row justify-content-around">
                            <div className="flex-fill">
                                <label className="form-label" htmlFor="email">Email</label>
                                <input className="form-control" value={details.email} onChange={handleOnChange} type="email" id="email" name="email" placeholder="E.g. abc@gmail.com"/> 
                            </div>
                            <div className="flex-fill">
                                <label className="form-label" htmlFor="number">Phone Number</label>
                                <input className="form-control" value={details.number} onChange={handleOnChange} type="tel" id="number" name="number" placeholder="E.g. 9944551144"/> 
                            </div>
                    </div>
                    <div className="form-group d-flex flex-row justify-content-around">
                            <div className="flex-fill">
                                <label className="form-label" htmlFor="portfolio">Your Portfolio</label>
                                <input className="form-control" value={details.portfolio} onChange={handleOnChange} type="url" id="portfolio" name="portfolio" placeholder="portfolio link"/> 
                            </div>
                            <div className="flex-fill">
                                <label className="form-label" htmlFor="github">GitHub</label>
                                <input className="form-control" value={details.github} onChange={handleOnChange} type="url" id="github" name="github" placeholder="Github account"/> 
                            </div>
                    </div>
                    <div className="form-group d-flex flex-row justify-content-around">
                            <div className="flex-fill">
                                <label className="form-label" htmlFor="linkedin">LinkedIn</label>
                                <input className="form-control" value={details.linkedin} onChange={handleOnChange} type="url" id="linkedin" name="linkedin" placeholder="LinkedIn account"/> 
                            </div>
                            <div className="flex-fill">
                                <label className="form-label" htmlFor="twitter">Twitter</label>
                                <input className="form-control" value={details.twitter} onChange={handleOnChange} type="url" id="twitter" name="twitter" placeholder="Twitter account"/> 
                            </div>
                    </div>
                    <div className="form-group d-flex flex-row justify-content-center">
                            <div>
                                <Link type="button" style={{display :'none'}} className="btn btn-secondary" to="" >Back</Link>
                            </div>
                            <div>
                                <Link type="button" className="btn btn-primary" to="/educationaldetails">Next</Link>
                            </div>
                    </div>
                </form>
            </div>
        </div>
        );
}

export default PersonalDetails;