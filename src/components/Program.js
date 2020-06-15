import React, { useState, useEffect } from 'react';
import config from '../config';

const Program = ({ match, programs }) => {
  const [program, setProgram] = useState(undefined);

  useEffect(() => {
    const programName = unescape(match.params.itemName).replace(/_/g, ' ');
    const programDetails = programs.find((programInList) => (
      programInList.itemName.toLowerCase() === programName.toLowerCase()
    ));
    setProgram(programDetails);
  }, [match.params.programName, programs]);

  return (
    <div>
      {program && (
        <>
          <h1>{program.itemName}</h1>
          <p>{program.itemDescription}</p>
          <div className="programs">
            {program.photos.map((photo) => (
              <div className="program" key={photo.photoName}>
                <img
                  className="program-img"
                  src={`${config.cloudfrontURL}/${photo.photoName}`}
                  alt={program.itemName}
                />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Program;
