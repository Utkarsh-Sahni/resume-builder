import React from 'react'

export default function Navbar(props) {
  return (
    <div style={{color : props.mode==='light'?'#212529':'#f8f9fa'}}>
        <nav className={`navbar navbar-expand-lg navbar-${props.mode}`} style={{backgroundColor : props.mode==='light'?'#3d85c6':'rgb(33,37,41)'}} >
            <div className="container-fluid">
                <h2 className="h2 ml-3">Resume Builder</h2>
            <div className="form-check form-switch mr-3">
                <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault"><h6>{props.mode==='light'?'Dark':'Light'} Mode</h6></label>
            </div>
            </div>
        </nav>
    </div>
  )
}
