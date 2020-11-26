import React from 'react';
import './home.css';
import logo from '../../assets/1200px-Instagram_logo_2016.svg.png'

class App extends React.Component {
  url = 'https://www.google.com/'
  constructor() {
    super()
    this.state = {
      userName: '{}',
      nameError: '',
      nameErrorCorrect: ''
    }
  }

  onClick = ($event) => {
    console.log("save button is clicked!", $event);
    window.open(this.url, "_blank");
  }

  onNameChange = (event) => {
    const nameRegex = RegExp('^[A-Z]{1}[a-zA-Z\\s]{2,}$');

    this.setState({ userName: event.target.value })

    if (event.target.value == '') {
      this.setState({ userName: '{}' })
      this.setState({ nameErrorCorrect: '' })
      this.setState({ nameError: '' })
    } else {
      if (nameRegex.test(event.target.value)) {
        this.setState({ nameErrorCorrect: 'Fine' })
        this.setState({ nameError: '' })
      } else {
        this.setState({ nameError: 'Name is incorrect!!' })
        this.setState({ nameErrorCorrect: '' })
      }
    }
    console.log("value is: ", event.target.value);
  }

  render() {
    return (
      <div class="home-div">
        <div class="body-div">
          <div>
            <h1>
              {this.state.title}
              <h2>Hello {this.state.userName} from BridgeLabz!!</h2>
              <img src={logo} onClick={this.onClick} alt="The logo" />
            </h1>
          </div>
          <div>
            <input onChange={this.onNameChange} placeholder = "Enter your name..."/>
            <span className="error-output">{this.state.nameError}</span>
            <span className="error-output-correct">{this.state.nameErrorCorrect}</span>
          </div>
          <p>At BridgeLabz, we're a techie community of</p>
          <ul>
            <li>technologists</li>
            <li>thinkers</li>
            <li>builders</li>
          </ul>
          <p>Working together to keep the Tech Employability of Engineers alive and accessible,
          so Tech Companies worldwide can get contributers and creators for Technology Solutions.
          We believe this act of human collaboration across and employability platform is essential
           to individual growth and our collective future</p>
          <p>To know about us, visit <a href="https://www.bridgelabz.com/">BridgeLabz</a>
            to learn even more about our mission i.e. <strong>Employability to all</strong></p>
        </div>
      </div>
    );
  }
}

export default App;
