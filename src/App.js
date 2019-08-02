/* eslint-disable no-undef */
import React from "react";
class App extends React.Component {
  state = {
    connect: false
  };

  componentDidMount = () => {
    FB.getLoginStatus(response => {
      if(response.status !== "connected"){
        this.setState({connect:false})
      }
    });
  };

  handleConnectFacebook() {
    FB.login(function(response) {
      console.log(response)
      if (response.authResponse) {
      //  console.log('Welcome!  Fetching your information.... ');
      //  FB.api('/me', function(response) {
      //    console.log('Good to see you, ' + response.name + '.');
      //  });
      } else {
       console.log('User cancelled login or did not fully authorize.');
      }
  });
      
  }
  render() {
    const { connect } = this.state;
    return (
      <div>
        <h1>Socionect</h1>
        {connect ? (
          <button onClick={this.handleConnectFacebook}>
            Already Connected with facebook
          </button>
        ) : (
          <button onClick={this.handleConnectFacebook}>
            Connect With Facebook
          </button>
        )}
      </div>
    );
  }
}

export default App;
