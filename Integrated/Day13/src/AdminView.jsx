// UserRequest.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ApplyForm from './ApplyForm';

const UserRequest = (props) => {
  const navigate = useNavigate();

  const handleAcc = (comp, tit) => {
    console.log(comp);
    const note = {
      company: comp,
      title: tit
    };
    props.Accept(note);
    console.log(note);
    navigate("/Notifications");
  };

  return (
    <>
      <h1>UserApplication Requests</h1>
      <div className='req'>
        {props.toAdmin.map((job, index) => (
          <div key={index} className="job-listing">
            <h2>{job.name}</h2>
            <p className="company">{job.email}</p>
            {job.company}
            {job.title}
            <div className='buttons'>
              <button onClick={() => handleAcc(job.name, job.email)}>Accept</button>
              <button onClick={() => handleAcc(job.name, job.email)}>Decline</button>
            </div>
          </div>
        ))}
      </div>
      <ApplyForm />
    </>
  );
}

export default UserRequest;
