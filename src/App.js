import React, { useState, useEffect }  from 'react';
import TeamForm from './Components/TeamForm';
import teamList from './axios';
import './App.css';
import Member from './Components/Member';
import axios from 'axios';

const initialFormValues = {
  name: '',
  email: '',
  role: ''
}

function App() {
  const [members, setMembers] = useState([]);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [error, setError] = useState("");

  const updateForm = (inputName, inputValue) => {
    setFormValues({ ...formValues, [inputName]: inputValue });
  }

  const submitForm = () => {
    const newMembers = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role
    }

    if (!newMembers.name || !newMembers.email || !newMembers.role) {
      setError("All fields are required!");
    } else {
      axios.post("fakeapi.com", newMembers)
        .then(res => {
          const membersFromServer = res.data;
          setMembers([ membersFromServer, ...members ]);
          setFormValues(initialFormValues);
        }).catch(err => console.error(err))
        .finally(() => setError(""))
    }
  }

  useEffect(() => {
    setMembers(teamList);
  }, [])

  return (
    <div className="container">
    <h1>Member's App</h1>
    <h2>{error}</h2>
      <TeamForm 
        values={formValues}
        update={updateForm}
        submit={submitForm}
      />
      {
        members.map(member => {
          return (
            <Member key={member.id} details={member} />
          )
        })
      }
    </div>
  );
}

export default App;
