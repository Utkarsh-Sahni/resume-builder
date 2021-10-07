import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import './form.css'

export default function ExtraDetails(props) {

    const [ extraDetails, setExtraDetails] = useState(
        
        {
            skill1 : '',
            skill2 : '',
            skill3 : '',
            skill4 : '',
            skill5 : '',
            skill6 : '',
        interest1 : '',
        interest2 : '',
        interest3 : '',
        interest4 : '',
        interest5 : '',
        interest6 : ''
    }
    );

    const handleOnChange = (event)=>{

        const {name, value } = event.target

        setExtraDetails (prevState =>
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
            <h2 >Extra Details</h2>
        </div>

        <div id="form">
            <form>
                <div>
                    <h3>Skills</h3>
                </div>
                <div className="form-group d-flex flex-row justify-content-center py-3">
                    <div className="flex-fill">
                        <input className="form-control" value={extraDetails.skill1} onChange={handleOnChange} type="text" id="skill1" name="skill1" placeholder="Skill 1"/> 
                    </div>
                    <div className="flex-fill">
                        <input className="form-control" value={extraDetails.skill2} onChange={handleOnChange} type="text" id="skill2" name="skill2" placeholder="Skill 2"/> 
                    </div>
                    <div className="flex-fill">
                        <input className="form-control" value={extraDetails.skill3} onChange={handleOnChange} type="text" id="skill3" name="skill3" placeholder="Skill 3"/> 
                    </div>
                </div>
                <div className="form-group d-flex flex-row justify-content-center py-3">
                    <div className="flex-fill">
                        <input className="form-control" value={extraDetails.skill4} onChange={handleOnChange} type="text" id="skill4" name="skill4" placeholder="Skill 4"/> 
                    </div>
                    <div className="flex-fill">
                        <input className="form-control" value={extraDetails.skill5} onChange={handleOnChange} type="text" id="skill5" name="skill5" placeholder="Skill 5"/> 
                    </div>
                    <div className="flex-fill">
                        <input className="form-control" value={extraDetails.skill6} onChange={handleOnChange} type="text" id="skill6" name="skill6" placeholder="Skill 6"/> 
                    </div>
                </div>
                <br/>
                <hr/>
                <div>
                    <h3>Interests</h3>
                </div>
                <div className="form-group d-flex flex-row justify-content-center py-3">
                    <div className="flex-fill">
                        <input className="form-control" value={extraDetails.interest1} onChange={handleOnChange} type="text" id="interest1" name="interest1" placeholder="Interest 1"/> 
                    </div>
                    <div className="flex-fill">
                        <input className="form-control" value={extraDetails.interest2} onChange={handleOnChange} type="text" id="interest2" name="interest2" placeholder="Interest 2"/> 
                    </div>
                    <div className="flex-fill">
                        <input className="form-control" value={extraDetails.interest3} onChange={handleOnChange} type="text" id="interest3" name="interest3" placeholder="Interest 3"/> 
                    </div>
                </div>
                <div className="form-group d-flex flex-row justify-content-center py-3">
                    <div className="flex-fill">
                        <input className="form-control" value={extraDetails.interest4} onChange={handleOnChange} type="text" id="interest4" name="interest4" placeholder="Interest 4"/> 
                    </div>
                    <div className="flex-fill">
                        <input className="form-control" value={extraDetails.interest5} onChange={handleOnChange} type="text" id="interest5" name="interest5" placeholder="Interest 5"/> 
                    </div>
                    <div className="flex-fill">
                        <input className="form-control" value={extraDetails.interest6} onChange={handleOnChange} type="text" id="interest6" name="interest6" placeholder="Interest 6"/> 
                    </div>
                </div>
                <div className="form-group d-flex flex-row justify-content-center">
                    <div>
                        <Link type="button" className="btn btn-secondary " to="/experiencedetails" >Back</Link>
                    </div>
                    <div>
                        <Link type="button" style={{display :'none'}} className="btn btn-primary" to="">Next</Link>
                    </div>
                </div>
                <div className="text-center my-3" id="submit-btn">
                    <button className='btn btn-success'>Make Resume</button>
                </div>
            </form>
        </div>
    </div>
  )
}
