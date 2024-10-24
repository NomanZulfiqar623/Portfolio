import React from 'react';
import "./Workcardstyle.css";
import Workcard from './Workcard';
import WorkcardData from './Workcarddata';

const Work = () => {
  return (
    <div className='work-container'>
        <h1 className='projetc-heading'>Projects</h1>
        <div className="project-container">
            {WorkcardData.map((val, ind) =>{
                return(
                    <Workcard 
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                    view={val.View}/>
                )
            })}
        </div>
    </div>
  )
}

export default Work