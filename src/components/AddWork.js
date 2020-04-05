import React from 'react'

class AddWork extends React.Component{

      sendMess = () => {
            var tasks = [
                  {
                        id: this.generateID(),
                        name:'React',
                        status: true
                  },
                  {
                        id: this.generateID(),
                        name: 'iOS',
                        status: true
                  },
                  {
                        id: this.generateID(),
                        name: 'Android',
                        status: false
                  }
            ]

            localStorage.setItem('tasks',JSON.stringify(tasks)) 
            this.props.receiveFlagOpenClose()
      }

      s4(){
            return Math.floor((1+Math.random()) * 0x10000).toString(16).substring(1)
      }

      generateID(){
            return this.s4() +'-'+ this.s4() +'-'+ this.s4() +'-'+ this.s4()
      }

      componentWillMount(){
            if(localStorage && localStorage.getItem('tasks')){
                  var tasks = JSON.parse(localStorage.getItem('tasks'))
                  this.props.receiveTasks(tasks)
            }
      }

      render(){
            return(
                  <button className="btn btn-primary" onClick={this.sendMess}>
                        <span className="fa fa-plus"> Add Work</span>
                  </button>
            )
      }     
}

export default AddWork