import React from 'react';
import project from './data/project.json';

const Project = () => {
  return (
    <>
    <div className="container projects my-3" id="project">
      <h1>PROJECTS</h1>
      <div className="row">
        {project.map((data) => (
          <>
          <div key={data.id} className="my-3 col-md-4 col-lg-3 mx-3">
            <div className="card bg-dark text-light" style={{width:'18rem'}}>
              {/* Assuming data.imageSrc holds the path to your project image */}
              <img src={data.imageSrc} className="card-img-top" alt="..." />
              <div className="card-body text-center">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">{data.description}</p>
                <a href={data.demo} className="btn btn-primary mx-3">Demo</a>
                <a href={data.code} className="btn btn-warning">Code</a>
              </div>
            </div>
          </div>
          </>
        ))}
      </div>
    </div>
    </>
  );
};

export default Project;
