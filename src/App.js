import React, {Component} from 'react';
import axios from 'axios';
import './App.css';

class App extends Component{
//  const event = Date();
  // Date= e.toISOString().substring(0, 10));
 
  state={
    Confirmed:[],
    
  }

 
    
  
    componentDidMount(){
      axios.get('https://api.covid19api.com/total/dayone/country/egypt').then(res =>{
        console.log(res.data)
        
        this.setState({
          Confirmed:res.data.reverse()
        })
      })
    }
  render(){
   
    return(
      <div className="App">
        <div className="container">
          <h3>عدد الاصابات في جمهورية  مصر العربية </h3>
         {this.state.Confirmed.map(conf => <div className="total"> مجموع الاصابات <span className="num">{conf.Confirmed}</span>  <span className="his">  في يوم  {conf.Date.substring(0,10)} </span></div>)}
        </div>
        </div>
    )
  }
}

export default App;
