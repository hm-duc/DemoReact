import React from 'react'
import ListItem from './ListItem'

class TaskList extends React.Component {
      render() {
            var {tasks} = this.props
            var elmTasks = tasks.map((task,index)=>{
                  return <ListItem key={task.id} index={index} task ={task} />
            })
            return (
                  <table className="table table-hover table-bordered">
                        <thead>
                              <tr>
                                    <th>STT</th>
                                    <th>Name</th>
                                    <th>Status</th>
                                    <th>Action</th>
                              </tr>
                        </thead>
                        <tbody>
                              <tr>
                                    <td></td>
                                    <td>
                                          <input type="text" className="form-control"></input>
                                    </td>
                                    <td >
                                          <select className="form-control">
                                                <option value="0"></option>
                                                <option value="1"></option>
                                                <option value="2"></option>
                                          </select>
                                    </td>
                                    <td></td>
                              </tr>
                              {elmTasks}
                        </tbody>
                  </table>
            )
      }
}

export default TaskList