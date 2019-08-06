import React, {useState} from 'react';
import './App.css';
import Experience from './Experience';
import ExperienceForm from './ExperienceForm';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      experiences:   [{
          id: 1,
          text: 'Van Gogh at the Tate Modern',
          type: 'Exhibition',
          media_type: 'image',
          media_url: "https://i.ytimg.com/vi/VeM0ktptknI/maxresdefault.jpg",
          pastExperience: false,
        },
        {
          id: 2,
          text: 'Pasta at Al Dente restaurant',
          type: 'Food',
          media_type: 'image',
          media_url: "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.vox-cdn.com%2Fthumbor%2FIMHUgZZUmHZ3BIXhtNB084shSx4%3D%2F0x0%3A1245x830%2F1200x800%2Ffilters%3Afocal(524x316%3A722x514)%2Fcdn.vox-cdn.com%2Fuploads%2Fchorus_image%2Fimage%2F60392585%2FAL_DENTE_Kitchen.0.jpg&f=1",
          pastExperience: true,
        },
        {
          id: 3,
          text: 'Maren Morris gig at Albert Hall',
          type: 'Concert',
          media_type: 'youtube-video',
          media_url: "https://www.youtube.com/watch?v=ueIYhFQZPjI",
          pastExperience: true,
        },
        {
          id: 4,
          text: '9 to 5 Musical',
          type: 'Theatre',
          media_type: 'youtube-video',
          media_url: "https://www.youtube.com/watch?v=_8H04b7IBOo",
          pastExperience: false,
        },
        {
          id: 5,
          text: 'Ukulele group perfomance',
          type: 'Concert',
          media_type: 'image',
          media_url: "https://londonbridgecity.co.uk/uploads/_920xAUTO_crop_center-center_60/190720_London-Ukulele-Choir.jpg",
          pastExperience: false,
        },
        {
          id: 6,
          text: 'Wildlife Photographer of the Year at the Natural History Museum',
          type: 'Exhibition',
          media_type: 'image',
          media_url: "https://www.nhm.ac.uk/content/nhmwww/en/home/discover/nine-wildlife-photography-tips-for-beginners/_jcr_content/article/ctapar/headertextimage_copy.img.320.low.jpg/1560524140185.jpg",
          pastExperience: true,
        },
        {
          id: 7,
          text: 'Rachel Bloom Live at the London Palladium',
          type: 'Concert',
          media_type: 'image',
          media_url: "https://s3-eu-west-1.amazonaws.com/lwt-live/wp-content/uploads/2019/03/09124512/Rachel-Bloom-452px-x-282px.jpg",
          pastExperience: true,
        },
        {
          id: 8,
          text: 'Waitress on the West End',
          type: 'Theatre',
          media_type: 'image',
          media_url: "https://www.londonlive.co.uk/Media/Default/!!!Clipping/Screen%20Shot%202019-02-07%20at%2018.11.46.png?width=960&height=540&quality=85&mode=Crop&scale=Both&format=jpg",
          pastExperience: true,
        },
        {
          id: 9,
          text: 'Natalia Goncharova at the Tate Modern',
          type: 'Art',
          media_type: 'image',
          media_url: "https://www.artlyst.com/wp-content/uploads/2019/06/NATALIA-GONCHAROVA-%C2%A9Tate.jpg",
          pastExperience: false,
        }]
    }
  }

  addExperience = (text) => {
    const newExperiences = [...this.state.experiences, {text}];
    this.setState({
      experiences: newExperiences
    });
  }

  changeToPast = (index) => {
    const newExperiences = [...this.state.experiences];
    newExperiences[index].pastExperience = !newExperiences[index].pastExperience;
    this.setState({
      experiences: newExperiences
    });
  }

  deleteExperience = (index) => {
    const newExperiences = [...this.state.experiences];
    newExperiences.splice(index, 1);
    this.setState({
      experiences: newExperiences
    });
  }

  render() {
    return (
      <div className="app">
        <h1>Social Scrapbook</h1>
        <ExperienceForm addExperience={this.addExperience} />
        <div className="experience_cards">
          {this.state.experiences.map((experience, index) => (
            <Experience
              key={index}
              index={index}
              experience={experience}
              changeToPast={this.changeToPast}
              deleteExperience={this.deleteExperience}
            />
          ))}
        </div>
      </div>
    )
  }

}

export default App;
