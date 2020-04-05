import React from 'react'

class Control extends React.Component{
      render(){
            return(
                  <div className="input-group">
                        
                        <span className="input-group-btn">
                              <button className="btn btn-primary" type="button">
                                    Sort&nbsp;&nbsp;
                                    <span className="fa fa-sort"/>
                              </button>
                        </span>
                  </div>
            )
      }
}

export default Control