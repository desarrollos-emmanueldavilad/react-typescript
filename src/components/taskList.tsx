import * as React from 'react'

import {Itask} from './task'
class TaskList extends React.Component<any,any>{

 render(): JSX.Element{
        return this.props.tasks.map((task:Itask, i: number) => {
            return (
                <div className="col-md-4 md-2" key={task.id}>
                  <div className="card card-body">
                  <h3>{task.title}</h3>
                    <p>{task.description}</p>
                    <button
                    onClick={() => this.props.deleteATask(task.id)}
                    className="btn btn-danger brn-block">Delete</button>
                  </div>
                </div>
            )
        }) ;
   }
}


interface ITaskListProps{
    tasks: Itask[];
    deleteATask:(id:number) => void;
}


export default TaskList