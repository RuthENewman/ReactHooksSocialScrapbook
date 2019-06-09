import React, {useState} from 'react';
import './App.css';

function Experience({ experience, index, changeToPast, deleteExperience }) {
  return (
    <div style={{
      backgroundColor: experience.pastExperience ? 'green' : 'red',
      color: experience.pastExperience ? 'white' : 'black'}}
      className="experience">
      { experience.text }
     <div>
      <button onClick={() => changeToPast(index)}>Change to Past / Future </button>
      <button onClick={() => deleteExperience(index)}>Delete Experience</button>
     </div>
    </div>
  )
}

function ExperienceForm({addExperience}) {
  const [info, updateInfo] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    if(!info) return;
    addExperience(info);
    updateInfo('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text"
      className="input"
      value={info}
      placeholder="Add an Experience"
      onChange={(event) => updateInfo(event.target.value)}
      />
    </form>
  )
}

function App() {
  const [experiences, setExperiences] = useState([{
    text: 'Van Gogh at the Tate Modern',
    type: 'Exhibition',
    pastExperience: false,
  },
  {
    text: 'Pasta at Al Dente restaurant',
    type: 'Food',
    pastExperience: true,
  },
  {
    text: 'Maren Morris gig at Albert Hall',
    type: 'Concert',
    pastExperience: true,
  },
  {
    text: '9 to 5 Musical',
    type: 'Theatre',
    pastExperience: false,
  },
  {
    text: 'Ukulele group perfomance',
    type: 'Concert',
    pastExperience: false,
  },
  {
    text: 'Wildlife Photographer of the Year at the Natural History Museum',
    type: 'Exhibition',
    pastExperience: true,
  },
  {
    text: 'Rachel Bloom Live at the London Palladium',
    type: 'Concert',
    pastExperience: true,
  },
  {
    text: 'Waitress on the West End',
    type: 'Theatre',
    pastExperience: true,
  },
  {
    text: 'Natalia Goncharova at the Tate Modern',
    type: 'Art',
    pastExperience: false,
  }]);

  const addExperience = text => {
    const newExperiences = [...experiences, {text}];
    setExperiences(newExperiences)
  }

  const changeToPast = index => {
    const newExperiences = [...experiences];
    newExperiences[index].pastExperience = !newExperiences[index].pastExperience;
    setExperiences(newExperiences)
  }

  const deleteExperience = index => {
    const newExperiences = [...experiences];
    newExperiences.splice(index, 1);
    setExperiences(newExperiences);
  }

  return (
    <div className="app">
      <div className="experiences-list">
        {experiences.map((experience, index) => (
          <Experience
            key={index}
            index={index}
            experience={experience}
            changeToPast={changeToPast}
            deleteExperience={deleteExperience}
          />
        ))}
         <ExperienceForm addExperience={addExperience} />
      </div>
    </div>
  )
}

export default App;
