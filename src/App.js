import React from 'react';
import ModWorkPanel from './components/ModWorkPanel'
import AddWork from './components/AddWork'
import SearchControl from './components/SearchControl'
import SortControl from './components/SortControl'
import TaskList from './components/TaskList'
import './App.css';

class App extends React.Component {
      render() {
            return (

                  <div className="container">
                        <div className="text-center">
                              <h1>Controling Work</h1>
                        </div>

                        <div className="row">
                              <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
                                    <ModWorkPanel />
                              </div>

                              <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                                    <AddWork />


                                    <div className="row">

                                          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 mt-20">
                                                <SearchControl />
                                          </div>


                                          <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6 mt-20">
                                                <SortControl />
                                          </div>

                                    </div>

                                    <div class="ro mt-15">
                                          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                                                
                                                <TaskList/>
                                                
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>

            )
      }
}

export default App;
