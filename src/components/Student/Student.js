import React, { Component } from 'react';
import axios from "axios";
import {Link} from "react-router-dom"

export default class Student extends Component {
  constructor() {
    super();
    this.state={
      student: {}
    };
  }

  componentDidMount() {
    axios
      .get(`http://localhost:3005/students/${this.props.match.params.id}`)
      .then(response => this.setState({ student: response.data }));
  }

  render() {
    const { first_name, last_name, grade, email } = this.state.student;
    return (
      <div className="box">
        <h1>Student</h1>
        <h1>{first_name} {last_name}</h1>
        <h3>Grade: {grade}</h3>
        <h3>Email: {email}</h3>
        <Link to={`/classlist/${this.state.student.class}`}>
          <button>Back to classList</button>
        </Link>
      </div>
    );
  }
}

















//   componentDidMount(){
//     return axios.get(`http://localhost:3005/students/${this.props.match.params.id}`).then((response)=>{
//       this.setState({student: response.data});
//     });
//   }

//   render() {
//     return (
//       <div className="box">
//         <h1>Student:</h1>
//         <h1>{this.state.student.first_name}  {this.state.student.last_name}</h1>
//         <h3>Grade: {this.state.student.grade}</h3>
//         <h3>Email:{this.state.student.email}</h3>

//         <Link to={`/classlist/${this.state.student.class}`}><button>Back to ClassList</button></Link>
//       </div>
//     )
//   }
// }