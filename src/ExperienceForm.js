import React, {useState} from 'react';

const ExperienceForm = ({addExperience}) => {
  const [info, updateInfo] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    if(!info) return;
    addExperience(info);
    updateInfo('');
  }

  return (
  <div className="experience_form">
    <form onSubmit={handleSubmit}>
      <legend><span className="number">1</span>Event Info</legend>
      <input id="experience_name" type="text" name="field1" placeholder="Name of your event"></input>
      <label>Select the date</label>
      <input id="experience_date" type="date" name="field2" placeholder="Select a date"></input>
      <label>Media type</label>
      <select id="media_type" name="media_type">
        <option value="image">Image</option>
        <option value="youtube video">YouTube Video</option>
      </select>
      <label>Add URL</label>
      <input id="experience_media_link" type="text" name="field3" placeholder="URL"></input>
      <label htmlFor="category">Category:</label>
      <select id="experience_category" name="field4">
      <optgroup label="Category">
        <option value="">Drop down to select</option>
        <option value="Concert">Concert</option>
        <option value="Exhibition">Exhibition</option>
        <option value="Theatre">Theatre</option>
        <option value="Sports">Sports</option>
        <option value="Book">Book</option>
        <option value="TV series">TV series</option>
        <option value="Film">Film</option>
        <option value="Other">Other</option>
      </optgroup>
      </select>
      <fieldset id="comment-box">
      <legend><span className="number">2</span>Comment</legend>
      <textarea id="experience_comment" name="field3" placeholder="Add a comment"></textarea>
      </fieldset>
      <input id="add-button" type="submit" value="Add to your scrapbook">
      </input>
    </form>
  </div>
  )
}

export default ExperienceForm;
