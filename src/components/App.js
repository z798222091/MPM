import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import TodoHeader from './TodoHeader';
import TodoList from './TodoList';
import TodoFooter from './TodoFooter';
export default class App extends Component {
  render() {
    return (
      <div className="container" style={{marginTop:10}}>
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <div className="panel panel-default">
              <h3>&nbsp;&nbsp;项目进程管理</h3>
              <div className="panel-heading">
                <TodoHeader/>
              </div>
              <div className="panel-body">
                <TodoList/>
              </div>
              <div className="panel-footer">
                <TodoFooter/>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}