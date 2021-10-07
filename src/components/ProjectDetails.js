import React, {useState} from 'react'
import { Link } from 'react-router-dom';
import './form.css'

export default function ProjectDetails(props) {

    const [ projDetails, setProjDetails] = useState(
        
        {
            proj1Title : '',
            proj1Link : '',
            proj1Desc : '',
            proj2Title : '',
            proj2Link : '',
            proj2Desc : '',
            proj3Title : '',
            proj3Link : '',
            proj3Desc : '',
    }
    );

    const handleOnChange = (event)=>{

        const {name, value } = event.target

        setProjDetails (prevState =>
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
            <h2 >Project Details</h2>
        </div>

        <div id="form">
            <form>
                <div className="form-group d-flex flex-column justify-content-center py-3">
                    <div className="flex-fill m-auto">
                        <h3>Project 1</h3>
                    </div>
                    <div className="flex-fill">
                        <label className="form-label" for="proj1Title">Title</label>
                        <input className="form-control" value={projDetails.proj1Title} onChange={handleOnChange} type="text" id="proj1Title" name="proj1Title" placeholder="Add Title*"/> 
                    </div>
                    <div className="flex-fill">
                        <label className="form-label" for="proj1Link">Link</label>
                        <input className="form-control" value={projDetails.proj1Link} onChange={handleOnChange} type="url" id="proj1Link" name="proj1Link" placeholder="Add Link*"/> 
                    </div>
                    <div className="flex-fill">
                        <label className="form-label" for="proj1Desc">Description</label>
                        <input className="form-control" value={projDetails.proj1Desc} onChange={handleOnChange} type="text" id="proj1Desc" name="proj1Desc" placeholder="Add Description*"/> 
                    </div>
                </div>
                <br/><hr/>
                <div className="form-group d-flex flex-column justify-content-center py-3">
                    <div className="flex-fill m-auto">
                        <h3>Project 2</h3>
                    </div>
                    <div className="flex-fill">
                        <label className="form-label" for="proj2Title">Title</label>
                        <input className="form-control" value={projDetails.proj2Title} onChange={handleOnChange} type="text" id="proj2Title" name="proj2Title" placeholder="Add Title*"/> 
                    </div>
                    <div className="flex-fill">
                        <label className="form-label" for="proj2Link">Link</label>
                        <input className="form-control" value={projDetails.proj2Link} onChange={handleOnChange}  type="url" id="proj2Link" name="proj2Link" placeholder="Add Link*"/> 
                    </div>
                    <div className="flex-fill">
                        <label className="form-label" for="proj2Desc">Description</label>
                        <input className="form-control" value={projDetails.proj2Desc} onChange={handleOnChange} type="text" id="proj2Desc" name="proj2Desc" placeholder="Add Description*"/> 
                    </div>
                </div>
                <br/><hr/>
                <div className="form-group d-flex flex-column justify-content-center py-3">
                    <div className="flex-fill m-auto">
                        <h3>Project 3</h3>
                    </div>
                    <div className="flex-fill">
                        <label className="form-label" for="proj3Title">Title</label>
                        <input className="form-control" value={projDetails.proj3Title} onChange={handleOnChange} type="text" id="proj3Title" name="proj3Title" placeholder="Add Title*"/> 
                    </div>
                    <div className="flex-fill">
                        <label className="form-label" for="proj3Link">Link</label>
                        <input className="form-control" value={projDetails.proj3Link} onChange={handleOnChange} type="url" id="proj3Link" name="proj3Link" placeholder="Add Link*"/> 
                    </div>
                    <div className="flex-fill">
                        <label className="form-label" for="proj3Desc">Description</label>
                        <input className="form-control" value={projDetails.proj3Desc} onChange={handleOnChange} type="text" id="proj3Desc" name="proj3Desc" placeholder="Add Description*"/> 
                    </div>
                </div>
                <div className="form-group d-flex flex-row justify-content-center">
                    <div>
                        <Link type="button" className="btn btn-secondary " to="/educationaldetails" >Back</Link>
                    </div>
                    <div>
                        <Link type="button" className="btn btn-primary" to="/experiencedetails">Next</Link>
                    </div>
                </div>
            </form>
        </div>
    </div>

  )
}
