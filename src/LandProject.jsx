import React from 'react';
import { NavLink } from 'react-router-dom';


const LandProject=(props)=>
{
 
  return (
      <>

      
                    <div className='col-md-4 col-10 mx-auto'>
                    <div className="card">
                        <img className="card-img-top" src={props.imgsrc} alt={props.imgsrc} />    
                    </div>
                    </div>

      </>
  );
};

export default LandProject