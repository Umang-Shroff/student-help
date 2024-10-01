import React, { useState } from 'react';
import './InpForm.css';
import { useSearchParams } from "react-router-dom";




const fetchData = async (sem,department) => {
  try {
    const Get_url = `http://localhost:5000/notes/get/?sem=${sem}&department=${department}`; 
    const response = await fetch(Get_url, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json', 
      },
      body: JSON.stringify({
       
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
  return data;
  } catch (error) {
    console.error('Error fetching data:', error);
  return 'Error'
  }
};



const InpForm = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const [dept,setDept] = useState('CS');
    const [sem,setSem] = useState('1');

    function handleSubmit(event) {
        event.preventDefault();
        console.log(sem,dept+"  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx");
        // let params = serializeFormQuery(event.target);
        setSearchParams({department: dept, semester: sem});
       
      const data=fetchData(sem,dept)
      if(data!=='Error'){
        //data processing
      }
      }

  return (
    <div className="container-form">
      <div className="background-shape shape1"></div>
      <div className="background-shape shape2"></div>
      <div className="background-shape shape3"></div>
      <form className="form" onSubmit={handleSubmit}>
        <p className="form-title">Enter Department and Sem</p>
        <div className="input-container-form">
          {/* <input type="email" placeholder="Enter email" /> */}

            <select id="dept" onChange={(e)=>setDept(e.target.value)}>
              <option value="cs">CS</option>
              <option value="it">IT</option>
              <option value="csds">CSDS</option>
              <option value="aiml">AIML</option>
              <option value="aids">AIDS</option>
              <option value="iot">IOT</option>
              <option value="extc">EXTC</option>
              <option value="mech">MECH</option>
            </select>

          <span></span>
        </div>
        <div className="input-container-form">
          {/* <input type="password" placeholder="Enter password" /> */}
            <select id="sem" onChange={(e)=>setSem(e.target.value)}>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </select>


        </div>
        <button type="submit" className="submit">
          Sign in
        </button>
      </form>
    </div>
  );
};

export default InpForm;
