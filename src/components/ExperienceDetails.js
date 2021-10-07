
import React ,{useState} from 'react'
import { Link } from 'react-router-dom';
import './form.css'

export default function ExperienceDetails(props) {
    const [ exDetails, setExDetails] = useState(
        
        {org1 : '',
        position1 : '',
        duration1 : '',
        desc1 : '',
        org2 : '',
        position2 : '',
        duration2 : '',
        desc2 : '',
    }
    );

    const handleOnChange = (event)=>{

        const {name, value } = event.target

        setExDetails (prevState =>
            ({
                ...prevState,
                [name] : [value]
            }))

        // // temp.firstname = event.target.value ;

        // // setDetails(temp);
        
        // console.log(event.target.value); 
        // console.log('ON CHANGE')
    }

  return (
        <div className="container" style={{color : props.mode==='light'?'#212529':'#f8f9fa'}}>
            <div id="header">
                <h2 >Experience Details</h2>
            </div>

            <div id="form">
                <form>
                        <div className="inline m-auto">
                            <h3>Experience 1</h3>
                        </div>
                    <div className="form-group d-flex flex-row justify-content-around">
                        <div className="flex-fill">
                            <label className="form-label" for="org1">Institute/Organization</label>
                            <input className="form-control" value={exDetails.org1} onChange={handleOnChange} type="text" id="org1" name="org1" placeholder="Add Institute/Organization*"/> 
                        </div>
                        <div className="flex-fill">
                            <label className="form-label" for="position1">Position</label>
                            <input className="form-control" value={exDetails.position1} onChange={handleOnChange} type="text" id="position1" name="position1" placeholder="Add Position*"/> 
                        </div>
                        <div className="flex-fill">
                            <label className="form-label" for="duration1">Duration</label>
                            <input className="form-control" type="text" value={exDetails.duration1} onChange={handleOnChange} id="duration1" name="duration1" placeholder="Add Duratiion*"/> 
                        </div>
                    </div>
                    <div className="form-group d-flex flex-row justify-content-around">
                        <div className="flex-fill">
                            <label className="form-label" for="desc1">Description</label>
                            <input className="form-control" type="text" value={exDetails.desc1} onChange={handleOnChange} id="desc1" name="desc1" placeholder="Add Description*"/> 
                        </div>
                    </div>
                    <br/>
                    <hr/>
                    <br/>
                    <div className="">
                            <h3>Experience 2</h3>
                    </div>
                    <div className="form-group d-flex flex-row justify-content-around">
                        <div className="flex-fill">
                            <label className="form-label" for="org2">Institute/Organization</label>
                            <input className="form-control" type="text" value={exDetails.org2} onChange={handleOnChange} id="org2" name="org2" placeholder="Add Institute/Organization*"/> 
                        </div>
                        <div className="flex-fill">
                            <label className="form-label" for="position2">Position</label>
                            <input className="form-control" value={exDetails.position2} onChange={handleOnChange} type="text" id="position2" name="position2" placeholder="Add Position*"/> 
                        </div>
                        <div className="flex-fill">
                            <label className="form-label" for="duration2">Duration</label>
                            <input className="form-control" type="text" value={exDetails.duration2} onChange={handleOnChange} id="duration2" name="duration2" placeholder="Add Duratiion*"/> 
                        </div>
                    </div>
                    <div className="form-group d-flex flex-row justify-content-around">
                        <div className="flex-fill">
                            <label className="form-label" for="desc2">Description</label>
                            <input className="form-control" type="text" value={exDetails.desc2} onChange={handleOnChange} id="desc2" name="desc2" placeholder="Add Description*"/> 
                        </div>
                    </div>
                    <div className="form-group d-flex flex-row justify-content-center">
                        <div>
                            <Link type="button" className="btn btn-secondary " to="/projectdetails" >Back</Link>
                        </div>
                        <div>
                            <Link type="button" className="btn btn-primary" to="/extradetails">Next</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
  )
}
