import * as React from 'react'
import {Itask} from './task'

class TaskForm extends React.Component<ITaskFormProps, any>{

    constructor(props: ITaskFormProps){
        super(props);
        this.state ={
            title: '',
            description: '',
        }
    }

    getCurrentTimeStamp(): number{
      const date: Date =  new Date();
      return date.getTime();
    }

    handleNewTask(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const newTask: Itask = {
            id: this.getCurrentTimeStamp(),
            title: this.state.title,
            description:this.state.description,
            completed: false
        };
        this.props.addANewTask(newTask);
        this.setState({title:'', description:''})

    }

    handleInputChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        const {name,value} = e.target;
        this.setState({
            [name]: value,
        });
        console.log(this.state)
    }

    render() {
        return (
            <div className="card card-body">

                <form onSubmit={e => this.handleNewTask(e)}>
                    <div className="form-group">
                        <input value={this.state.title} type="text" name="title" onChange={e=> this.handleInputChange(e)} className="form-control" placeholder="Task Title" />

                    </div>
                    <div className="form-group">
                        <textarea  value={this.state.description} name="description" onChange={e=>this.handleInputChange(e)} className="form-control" placeholder="task description"></textarea>
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Save</button>
                </form>
            </div>
        )
    }
}

interface ITaskFormProps{
    addANewTask : (task: Itask) => void;
}

interface ITaskFormState{
    title:'',
    description:''
}

export default TaskForm