import React,{Component} from "react";

export default class Task extends Component{

    constructor(props){
        super(props);

    }


    getdata(data){
        console.log("map",data);
        data=data||[]

        return data.map((task, key1) => {
            return <li key={key1}>{task.name}{task.f_count}{task.created_at}{task.friends_count}</li>
        })

    }

    render(){


        return(
            <div>
                <p>Name Followers_count created_at  friends_count</p>
                <ul>{this.getdata(this.props.data)}</ul>
            </div>
        )
    }

}

