import React from 'react';
import skills from './data/skills.json';

const Skills = () => {
  return (
    <>
    <div className="container skills" id="skills">
      <h1 className="am">SKILLS</h1>
      <div className="items">
      {skills.map((data) => (
        <>
          <div className="item" key={data.id}>
            <img src={`/assets/${data.imageSrc}`} alt={`Logo of ${data.title}`} />
            <h3>{data.title}</h3>
          </div>
          </>
      ))}
    </div>
    </div>
    </>
  );
};

export default Skills;

