import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import './form.css'


export default function EducationalDetails(props) {

    const [ edDetails, setEdDetails] = useState(    
        {
        college : '',
        cStartYear : '',
        cEndYear : '',
        cQual : '',
        cDesc : '',
        school : '',
        sStartYear : '',
        sEndYear : '',
        sQual : '',
        sDesc : '',
    }
    );

    const handleOnChange = (event)=>{

        const {name, value } = event.target

        setEdDetails (prevState =>
            ({
                ...prevState,
                [name] : [value]
            }))

        // temp.firstname = event.target.value ;

        // setDetails(temp);
        
        console.log(event.target.value); 
        console.log('ON CHANGE')
    }

  return (
        <div className="container" style={{color : props.mode==='light'?'#212529':'#f8f9fa'}}>
            <div id="header">
                <h2 >Educational Details</h2>
            </div>

            <div id="form">
                <form>
                    <div className="form-group d-flex flex-row justify-content-around">
                        <div className="flex-fill">
                            <label className="form-label" for="college">College</label>
                            <input className="form-control" value={edDetails.college} onChange={handleOnChange} type="text" id="college" name="college" placeholder="Add College*"/> 
                        </div>
                        <div className="flex-fill">
                            <label className="form-label" for="cStartYear">Start year</label>
                            <input className="form-control datepicker" value={edDetails.cStartYear} onChange={handleOnChange} type="text" id="cStartYear" name="cStartYear" placeholder="01/01/2000"/> 
                        </div>
                        <div className="flex-fill">
                            <label className="form-label" for="cEndYear">End year</label>
                            <input className="form-control datepicker" value={edDetails.cEndYear} onChange={handleOnChange} type="text" id="cEndYear" name="cEndYear" placeholder="01/01/2000"/> 
                        </div>
                    </div>
                    <div className="form-group d-flex flex-row justify-content-around">
                        <div className="flex-fill">
                            <label className="form-label" for="cQual">Qualification</label>
                            <input className="form-control" value={edDetails.cQual} onChange={handleOnChange}  type="email" id="cQual" name="cQual" placeholder="Add Qualifications*"/> 
                        </div>
                        <div className="flex-fill">
                            <label className="form-label" for="cDesc">Description</label>
                            <input className="form-control" value={edDetails.cDesc} onChange={handleOnChange} type="text" id="cDesc" name="cDesc" placeholder="Add Description*"/> 
                        </div>
                    </div>
                    <br/>
                    <hr/>
                    <br/>
                    <div className="form-group d-flex flex-row justify-content-around">
                        <div className="flex-fill">
                            <label className="form-label" for="school">School</label>
                            <input className="form-control" value={edDetails.school} onChange={handleOnChange} type="text" id="school" name="school" placeholder="Add College*"/> 
                        </div>
                        <div className="flex-fill">
                            <label className="form-label" for="sStartYear">Start year</label>
                            <input className="form-control datepicker" value={edDetails.sStartYear} onChange={handleOnChange} type="text" id="sStartYear" name="sStartYear" placeholder="01/01/2000"/> 
                        </div>
                        <div className="flex-fill">
                            <label className="form-label" for="sEndYear">End year</label>
                            <input className="form-control datepicker" value={edDetails.sEndYear} onChange={handleOnChange} type="text" id="sEndYear" name="sEndYear" placeholder="01/01/2000"/> 
                        </div>
                    </div>
                    <div className="form-group d-flex flex-row justify-content-around">
                        <div className="flex-fill">
                            <label className="form-label" for="sQual">Qualification</label>
                            <input className="form-control" value={edDetails.sQual} onChange={handleOnChange}  type="email" id="sQual" name="sQual" placeholder="Add Qualifications*"/> 
                        </div>
                        <div className="flex-fill">
                            <label className="form-label" for="sDesc">Description</label>
                            <input className="form-control" value={edDetails.sDesc} onChange={handleOnChange} type="text" id="sDesc" name="sDesc" placeholder="Add Description*"/> 
                        </div>
                    </div>
                    <div className="form-group d-flex flex-row justify-content-center">
                        <div>
                            <Link type="button" className="btn btn-secondary " to="/personaldetails" >Back</Link>
                        </div>
                        <div>
                            <Link type="button" className="btn btn-primary" to="/projectdetails">Next</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
  )
}
