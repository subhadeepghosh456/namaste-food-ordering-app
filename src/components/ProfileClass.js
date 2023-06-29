import React from "react";
class ProfileClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo:{
           name:"Dummy Name",
           location:"Dummy Location",
      },
    };
    console.log("constructor");
  }

 async componentDidMount(){

  const data = await fetch("https://api.github.com/users/subhadeepghosh456")
  const json = await data.json();
  this.setState({
    userInfo:json,  
  })

  
    console.log("componentDidMount");
  }

  render() {
    console.log("render")
    return (
      <div>
        <img src={this.state?.userInfo?.avater_url}/>
        <h1>Name: {this.state?.userInfo?.name}</h1>
        <h1>Location: {this.state?.userInfo?.location}</h1>
        
      </div>
    );
  }
}

export default ProfileClass;
