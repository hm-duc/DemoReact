import React from 'react'

class ModWorkPanel extends React.Component {
      render() {
            return (
                  <div className="panel panel-info">
                        <div className="panel-heading">
                              <h3 className="panel-title">Adding Work
                                    <span className="fa fa-times-circle text-right " aria-hidden="true"></span>
                              </h3>

                        </div>
                        <div className="panel-body">

                              <form action="">

                                    <div className="form-group">
                                          <label htmlFor="">Name:</label>
                                          <input type="text" className="form-control" name="AddName" />
                                    </div>

                                    <div className="form-group">
                                          <label htmlFor="">Status:</label>
                                          <select className="form-control" name="AddStatus">
                                                <option value="1">Active</option>
                                                <option value="0">Non Active</option>
                                          </select>
                                    </div>
                                    <div className="text-center">
                                          <button type="submit" className="btn btn-primary"><span className="fa fa-plus"> Submit</span></button>&nbsp;&nbsp;
                                          <button type="submit" className="btn btn-danger"><span className="fa fa-times-circle"> Cancel</span></button>
                                    </div>

                              </form>

                        </div>
                  </div>
            )
      }
}

export default ModWorkPanel