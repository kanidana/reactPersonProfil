import React from 'react';
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "John Doe",
        bio: "I'm a software developer since June 2024",
        imgSrc: "https://cdn.pixabay.com/photo/2019/10/29/10/16/model-4586589_1280.jpg",
        profession: "Software Developer"
      },
      show: false,
      mountedTime: 0
    };
    this.toggleShow = this.toggleShow.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ mountedTime: this.state.mountedTime + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  toggleShow() {
    this.setState({ show: !this.state.show });
  }

  render() {
    const { person, show, mountedTime } = this.state;
    return (
      <div className='App'>
        <button onClick={this.toggleShow}>
          {show ? "Hide Profile" : "Show Profile"}
        </button>
        {show && (
          <div>
            <h1>{person.fullName}</h1>
            <p>{person.profession}</p>
            <img style={{ width: "10rem" }} src={person.imgSrc} alt='my profile' />
            <p style={{ fontStyle: "italic" }}>{person.bio}</p>
          </div>
        )}
        <p>Time since last component mount: {mountedTime} seconds</p>
      </div>
    );
  }
}

export default App;
