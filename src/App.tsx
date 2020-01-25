import * as React from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/taskList';

import {Itask} from './components/task';
class App extends React.Component<IProps, IState>{

  constructor(props: IProps){
    super(props);
    this.state = {
      tasks: []
    };
  }

  deleteATask(id:number){
  const tasks : Itask[]= this.state.tasks.filter(
     (task: Itask)=> task.id !== id
   )
this.setState({tasks})
  }

  addNewTask(task: Itask){
    this.setState({
      tasks:[...this.state.tasks, task]
    }, () => (console.log(this.state)));
 
  }
//1:20.26
  render(){
    return(
      <div>
        <nav className="navbar navbar-light bg-light">
    <a href="/" className="navbar-brand">{this.props.title}</a>
        </nav>
        <div className="container p-4">
          <div className="row">
            <div className="col-md-4">
            <TaskForm addANewTask={this.addNewTask.bind(this)}/>
            </div>
            <div className="col-md-8">
              <div className="row">
                <TaskList tasks={this.state.tasks}
                deleteATask={this.deleteATask.bind(this)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

interface IProps {
  title: string;
}
interface IState{
  tasks: Itask[];
}
export default App;
