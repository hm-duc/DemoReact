import React from 'react'

class ListItem extends React.Component {
      render() {
            var {task,index} = this.props
            return (
                  <tr>
                        <td className="text-center">{index+1}</td>
                        <td>{task.name}</td>
                        <td className="text-center">
                              <span className={task.status===true?'label label-success':'label label-danger'}>
                                    {task.status===true?'Active':'Listless'}
                              </span>
                        </td>
                        <td className="text-center">
                              <button type="submit" className="btn btn-primary"><span className="fa fa-plus"> Edit</span></button>
                                                                        &nbsp;&nbsp;
                                                                        <button type="submit" className="btn btn-danger"><span className="fa fa-times-circle"> Delete</span></button>
                        </td>
                  </tr>
            )
      }
}

export default ListItem