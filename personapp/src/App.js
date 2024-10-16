import React, { useState, useEffect } from 'react';

const MyPersonnComponent = () => {
  const [person, setPerson] = useState({
    name: "John Doe",
    profession: "Software Developer",
    imageSrc: "https://cdn.pixabay.com/photo/2019/10/29/10/16/model-4586589_1280.jpg",
    bio: "I'm a software developer since June 2024"
  });

  const [show, setShow] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(tmp => tmp + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{display: "flex", alignItems: "center", justifyContent:"center", marginTop:"50px", backgroundColor:"#CFE7EC"}}>
      <div>
      {show && (
        <div>
          <h1>{person.name}</h1>
          <p>{person.profession}</p>
          <img style={{width:"10rem"}} src={person.imageSrc} alt='my profile' />
          <p style={{fontStyle:"italic"}}>{person.bio}</p>
        </div>
      )}

      <button style={{border:"none", backgroundColor:"#91BBC5", borderRadius:"30px", fontWeight:"bold"}} onClick={() => setShow(!show)}>
        {show ? 'Hide' : 'Show'} Person
      </button>
      <p>Le temps écoulé est : {time} secondes</p>
      </div>
      
    </div>
  );
};

export default MyPersonnComponent;
