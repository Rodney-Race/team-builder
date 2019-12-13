import React, { useState } from 'react';
import Member from './Components/members';
import MemberForm from './Components/memberForm';
import './App.css';

function App() {
  const [members, setMembers] = useState([
    {
      id: 1,
    fname: "Rodney",
    lname: "Race",
    profession: "Web Developer",
    email: "rodneyrace@gmail.com"
    },
    {
    id:2,
    fname: "Bob",
    lname: "Jones",
    profession: "WEB Developer",
    email: "Bjones@gmail.com"
    },
    {
    id: 3,
    fname: "Tony",
    lname: "Jamison",
    profession: "Web Developer",
    email: "Tjamison@gmail.com"
    }
  ]);

  const addMember = member => {
    const newMember = {
      id: Date.now(),
      fname: member.fname,
      lname: member.lname,
      email:member.city,
      profession:member.profession
    };
    setMembers([...members, MemberForm]);
  };

  const delMember = id => {
    const newArray = members.filter(member => {
      return member.id !== id;
    });
    setMembers(newArray);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className='container' >
        <MemberForm  addMember={addMember} />
        <Member membersList={members} delMember={delMember} />
        </div>
      </header>
    </div>
  );
}


export default App;
