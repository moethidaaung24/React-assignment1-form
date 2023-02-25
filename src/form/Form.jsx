import React, { Component } from 'react'
import "./Form.css";
import {FiSend} from "react-icons/fi"
import { frameworks, levels, learningTypes } from "../util/data"

export default class Form extends Component {
    constructor(props){
        super(props)
        this.state ={
            firstName:"",
            lastName:"",
            email:"",
            phone:"",
            framework:"React",
            level:"Basic",
            learningType:["Fundamentals"],
    likeThis:"",
        }
    }
    
    handleChange=(event)=>{
        const {name,value} = event.target;
        console.log("value",value);
       this.setState({
        [name]:value,
       })
    
        }
  render() {
    console.log('state',this.state);
    const{firstName,lastName, email, phone, framework, level, learningType, likeThis }=this.state;
  
    return <div className='bgStyle'>
        <form>
            <div className='formStyle'>
                <div className='sendCircle'>
                    <FiSend className='send_icon'/>
                </div>
                <p className='head'>Hello!!!</p>
                <div className='fullName'>
                    <div>
                        <label className='label'>First Name</label>
                        <br/>
                        <input type="text" name='firstName' value={firstName} onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label className='label'>Last Name</label>
                        <br/>
                        <input type="text" value={lastName} name="lastName" onChange={this.handleChange}/>
                    </div>
                 
                    
                </div>
                <div>
                        <label className='label'>Email</label><br/>
                        <br/>
                        <input type="email" value={email} name="email" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label className='label'>Mobile No</label><br/>
                        <br/>
                        <input type="number" value={phone} name="phone" onChange={this.handleChange}/>
                    </div>
                    <div>
                        <label className='label'>which framework is that you learn?</label><br/>
                        <select value={framework} name="framework" onChange={this.handleChange}>
                            {
                                frameworks.map((e)=>(
                                    <option>{e.value}</option>))
                                }
                            
                        </select>
                    </div>
                    <div className='label'>
                        <label>level</label><br/>
                        <div className='wrapper'>
                        {
                            levels.map((e)=>(
                                <div key={e.id}className="wrapperInner">
                                <input type="radio" name='level' value={e.name} defaultChecked={level && e.name==level} onChange={this.handleChange}/>
                                    <label>{e.name}</label>
                                </div>
                            )
    
                            )
                        }
                        
                        </div>
                    </div>
                    <div className='label'>
                        <label>which learning is that?</label><br/>
                        <div className='wrapper'>
                        {
                            learningTypes.map((e)=>(
                                <div key={e.id}className="wrapperInner">
                           
                                    <input type="checkbox" name={e.name} value={e.name} defaultChecked={learningType && learningType.includes(e.name)}/>
                                    <label>{e.name}</label>
                                </div>
                            )
    
                            )
                        }
                        
                        </div>
                    </div>
                    <div>
                        <label className='label'>Why like this?</label><br/>
                        <textarea rows="50" value={likeThis}></textarea>
                    </div>
                    <div>
                        <button className='button' type="submit">SEND</button>
                    </div>
            </div>
        </form>
    </div>;
    
  }
}
