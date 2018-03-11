import React,{Component} from "react";

export default class Task extends Component{

    constructor(props){
        super(props);

    }


    getdata(data){
        console.log("map",data);
        data=data||[]

        return data.map((task, key) => {
            return <li>{task.name}{task.f_count}{task.created_at}{task.friends_count}</li>
        })

    }

    render(){


        return(
            <div>
                <ul>{this.getdata(this.props.data)}</ul>
            </div>
        )
    }

}

