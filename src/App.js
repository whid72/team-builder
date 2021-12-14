import React, { useState, useEffect }  from 'react';

import './App.css';

const initialFormValues = {
  ///// TEXT INPUTS /////
  username: '',
  email: '',
  ///// DROPDOWN /////
  role: '',
}

function App() {
  const [member, setMember] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues); // fix this using the state hook
  const [error, setError] = useState("");


  return (
    <>
      
    </>
  );
}

export default App;
