import React, { Component } from "react";
import "./Home.css";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      message: [],
    }
  }

  render() {
    if(!this.state.isLoading){
      return (
        <div className="Home">
          <div className="lander">
            <h1>Dashboard</h1>    
              {this.state.message.map(item => (
                <li key={item.id}>
                    {item.content}
                </li>
              ))}
          </div>
        </div>
      );
    } else {
      return(
        <div className="lander">
          <h1>...</h1>
        </div>
      ) ;
    }
  }

  componentDidMount(){
    fetch('http://deepwelcomemodule-env.kih2k78ipq.us-east-2.elasticbeanstalk.com/')
      .then(results => results.json())
      .then(data => {
        this.setState({
                        message: data,
                        isLoading: false,
                      });
      })
  }
  
}