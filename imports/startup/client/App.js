import React,{Component} from "react";
import ReactDOM from "react-dom";
import {Followers} from "../../api/Followers";
import Task from "../../ui/Task";

export default class App extends Component{

    constructor(){
        super();
        this.state={
            query:" ",followers:[]
        };
    }

    aj(event){
        this.setState({query:event.target.value});
    }

    click(){
        let name=this.state.query;
        console.log(name);
        Meteor.call("followers.check",name,(err,res)=>{
             if(err)
                 throw err;
             else{
                 console.log(res);
                 if(res==undefined)
                 {
                     Meteor.call("followers.find",name,(err,res)=>{
                             if(err)
                                 throw err;
                             else
                             {
                                 this.setState({followers:res});
                                 Meteor.call("followers.insert",name,res,res.length,(err,res)=>{
                                     if(err)
                                         throw err;
                                     else
                                         console.log("all set");
                                 })
                             }
                     })
                 }
                 else
                 {
                     this.setState({followers:res.followers});
                 }
             }
        })

    }

    render()
    {
        return(
            <div>
                <div className="page-header">
                    <h1>Twitter Page API <small>Extract followers data</small></h1>
                </div>
                <input value={this.state.query} placeholder="Page Search" onChange={this.aj.bind(this)}/>
                <button className="btn btn-success" onClick={this.click.bind(this)}>Get Followers List</button>
                <Task data={this.state.followers} />
            </div>

        )
    }
}

Meteor.startup(()=>{
    ReactDOM.render(<App />,document.getElementById('render-target'))
    }
    );