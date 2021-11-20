import React from 'react';
import CinemaProject from './CinemaProject';
import CinemaData from './CinemaData';


const CinemaPhoto=()=>
{
  return (
  <>
      <div className="my-5">
            <h1 className="text-center">Cinema Photos</h1>
      </div>

      <div className='container-fluid mb-5'>
        <div className='row'>
            <div className='col-10 mx-auto'>
                <div className='row gy-4'>
                    {
                        CinemaData.map((val,ind)=>
                        {
                            return <CinemaProject
                            imgsrc={val.imgsrc}
                            //title={val.title}
                            />
  
                        }
                        )
                    }
                </div>
            </div>
        </div>
    </div>
    
</>
  );
};

export default CinemaPhoto