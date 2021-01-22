import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Register from './components/Register/Register';
import Signin from './components/Signin/Signin';
import FcRcgntn from './components/FcRcgntn/FcRcgntn';
import Particles from 'react-particles-js';
import Levelr from './components/Levelr/Levelr';
import './App.css';

const prtclChcs = {
  particles: {
    number: {
      value: 40,
      density: {
        enable: true,
        value_area: 300,
        isSndIn: false

      }
    }
  }
}


const initialState = {
  input: '',
  imgURL: '',
  box: {},
  route: 'signin',
  isSndIn: false,
  user: {
    id: '',
    name: '',
    email: '',
    entries: 0,
    joined: ''
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = initialState;
  }

  loadUser = (data) => {
    this.setState({
      user: {
        id: data.id,
        name: data.name,
        email: data.email,
        entries: data.entries,
        joined: data.joined
      }
    })
  }

  // componentDidMount() {
  //   fetch('http://localhost:3000/')
  //     .then(response => response.json())
  //     .then(console.log)
  // }

  clcltFclctn = (data) => {
    const clrfyFc = data.outputs[0].data.regions[0].region_info.bounding_box;
    const imge = document.getElementById('inptimg')
    const width = Number(imge.width)
    const height = Number(imge.height)
    return {
      lftCl: clrfyFc.left_col * width,
      tpRw: clrfyFc.top_row * height,
      rtCl: width - (clrfyFc.right_col * width),
      btmRw: height - (clrfyFc.bottom_row * height)
    }
  }

  dsplyFbx = (box) => {
    this.setState({ box: box });
  }

  onInptchng = (event) => {
    this.setState({ input: event.target.value })
  }

  onbttnsbmt = () => {
    this.setState({ imgURL: this.state.input });
    fetch('https://boiling-chamber-44889.herokuapp.com/imageurl', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        input: this.state.input
      })
    })
      .then(response => response.json())
      .then(rsp => {
        if (rsp) {
          fetch('https://boiling-chamber-44889.herokuapp.com/image', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              id: this.state.user.id
            })
          })
            .then(response => response.json())
            .then(count => {
              this.setState(Object.assign(this.state.user, {
                entries: count
              }))
            })
            .catch(console.log)
        }
        this.dsplyFbx(this.clcltFclctn(rsp))
      })
      .catch(err => console.log(err))
    // 
  }

  onRtChng = (route) => {
    if (route === 'signout') {
      this.setState(initialState)
    }
    else if (route === 'home') {
      this.setState({ isSndIn: true })
    }
    this.setState({ route: route });
  }

  render() {
    const { isSndIn, imgURL, route, box } = this.state;
    return (
      <div className="App">
        <Particles className='prtcls'
          params={prtclChcs}
        />
        <Navigation isSndIn={isSndIn} onRtChng={this.onRtChng} />
        { route === 'home'
          ? <div>
            <Logo />
            <Levelr
              name={this.state.user.name}
              entries={this.state.user.entries}
            />
            <ImageLinkForm
              onInptchng={this.onInptchng}
              onbttnsbmt={this.onbttnsbmt}
            />
            <FcRcgntn box={box} imgURL={imgURL} />
          </div>
          : (route === 'signin'
            ? < Signin loadUser={this.loadUser} onRtChng={this.onRtChng} />
            : < Register loadUser={this.loadUser} onRtChng={this.onRtChng} />
          )
        }
      </div>
    );
  }
}


export default App;
