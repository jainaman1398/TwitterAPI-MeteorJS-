import React,{Component} from "react";

export default class Task extends Component{

    constructor(props){
        super(props);

    }


    getdata(data){
        console.log("map",data);
        data=data||[]

        return data.map((task, key1) => {
            return(
                <tr>
                    <th>{task.name}</th>
                    <th>{task.f_count}</th>
                    <th>{task.created_at}</th>
                    <th>{task.friends_count}</th>
                </tr>
            )
        })

    }

    render(){


        return(
            <table className="table">
                <tr>
                    <th>Name</th>
                    <th>Followers_count</th>
                    <th>created_at</th>
                    <th>friends_count</th>
                </tr>
                {this.getdata(this.props.data)}
            </table>
        )
    }

}

