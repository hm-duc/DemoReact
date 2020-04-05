import React from 'react'

class TaskList extends React.Component{
      render(){
            return(
                  <table class="table table-hover table-bordered">
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
                                                            <tr>
                                                                  <td className="text-center">1</td>
                                                                  <td>Learn to code</td>
                                                                  <td className="text-center">
                                                                        <span className="label label-success">Active</span>
                                                                  </td>
                                                                  <td className="text-center">
                                                                        <button type="submit" className="btn btn-primary"><span className="fa fa-plus"> Edit</span></button>
                                                                        &nbsp;&nbsp;
                                                                        <button type="submit" className="btn btn-danger"><span className="fa fa-times-circle"> Delete</span></button>
                                                                  </td>
                                                            </tr>
                                                      </tbody>
                                                </table>
            )
      }
}

export default TaskList