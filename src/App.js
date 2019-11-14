import React , {Component} from 'react';
import './App.css';
import Cardlist from './cardlist/Cardlist'
import axios from 'axios'

class App extends Component{
  state = {
    users: [],
    requested: false
  }

  deleteUser = (id) =>{
    console.log("id:"+id);
    let newUsers = [...this.state.users];
    newUsers = newUsers.filter(user => user.id!==id)
    this.setState({users: newUsers})

  }

  componentDidMount () {
    console.log("componentDidMount");
    if(!this.state.requested){
      axios.get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        return(
          this.setState({
            users: response.data,
            requested: true
          })
        );
      }).catch(() => console.log("Invalid request try again later!"));
    }  
    
    
  }
  
  render () {
    return (this.state.users.length!==0?
      (<div>
        <Cardlist users = {this.state.users} clicked = {(id) => this.deleteUser(id)}/>
      </div>):null
    );
  }
}



export default App;
