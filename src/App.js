import React from 'react';
import ModWorkPanel from './components/ModWorkPanel'
import AddWork from './components/AddWork'
import SearchControl from './components/SearchControl'
import SortControl from './components/SortControl'
import TaskList from './components/TaskList'
import './App.css';

class App extends React.Component {
      state = {
            tasks: [],
            isDisplayForm: false
      }

      onReceiveTasks=(item)=>{
            this.setState({
                  tasks: item
            })
      }

      onReceiveFlagOpenClose=()=>{
            this.setState({
                  isDisplayForm: !this.state.isDisplayForm
            })
      }

      render() {
            var { tasks,isDisplayForm } = this.state

            return (
                  <div className="container">
                        <div className="text-center">
                              <h1>Controling Work</h1>
                        </div>

                        <div className="row mt-30">
                              <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                    {isDisplayForm?<ModWorkPanel onCLoseForm={this.onReceiveFlagOpenClose}/>:''}
                              </div>

                              <div className={isDisplayForm?"col-xs-8 col-sm-8 col-md-8 col-lg-8":
                                                            "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
                                    <AddWork receiveTasks={this.onReceiveTasks} receiveFlagOpenClose={this.onReceiveFlagOpenClose}/>

                                    <div className="row">

                                          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 mt-20">
                                                <SearchControl />
                                          </div>


                                          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 mt-20">
                                                <SortControl />
                                          </div>

                                    </div>

                                    <div className="ro mt-15">
                                          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                
                                                <TaskList tasks ={tasks}/>
                                                
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>

            )
      }
}

export default App;
