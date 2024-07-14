import React from 'react'
import experience from './data/experience.json'
const Experience = () => {
  return (
    <>
      <div className="container ex" id="experience">
        <h1>EXPERIENCE</h1>
        {
          experience.map((data)=>{
            return(
              <>
                <div key={data.id} className="ex-items text-center">
                  <div className="left">
                  <img src={`/assets/${data.imageSrc}`} alt={`Logo of ${data.title}`} />
                  </div>
                  <div className="right">
                    <h2>{data.role}</h2>
                    <h4><span style={{color:"yellowgreen"}}>{data.startDate}</span>{" "}{data.endDate}{" "}{data.location}</h4>
                    <h5>{data.experiences[0]}</h5>
                    <h5>{data.experiences[1]}</h5>
                  </div>
                </div>
              </>
            )
          })
        }

      </div>
    </>

  )
}
export default Experience
