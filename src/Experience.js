import React from 'react';

const Experience = ({ experience, index, changeToPast, deleteExperience }) => {
  const video_code = experience.media_url.split('=')[1];
  return (
    <div style={{
      backgroundColor: experience.pastExperience ? 'green' : 'red',
      color: experience.pastExperience ? 'white' : 'black'}}
      className="experience_card"
      key={experience.id}
      >
      { experience.text }
     <div className="experience_media">{
       experience.media_type === 'image'
       ? <img src={experience.media_url} className="resize" alt="${experienceDataObject.name}" />
       : <iframe
        src={`https://www.youtube.com/embed/${video_code}`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title={experience.id}
      >
      </iframe>
     }</div>
     <div className="experience_buttons">
      <button onClick={() => changeToPast(index)}>Change to Past / Future </button>
      <button onClick={() => deleteExperience(index)}>X</button>
     </div>
    </div>
  );
}

export default Experience;
