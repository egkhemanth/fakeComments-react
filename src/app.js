import React,{Component} from 'react'
import ReactDOM from 'react-dom'
import App1 from './component/main'
import faker from 'faker'
import Co from './component/comment'
import ApprovalCard from './component/ApprovalCard'
class App extends Component{
    render(){
        return(
            <div>
            <ApprovalCard>
            <Co
                name={faker.name.firstName()}
                text='hello hemanth'
                time='time:9:00pm'
            />
            </ApprovalCard>
            <ApprovalCard>
            <Co
                name={faker.name.firstName()}
                text='hello samba'
                time='time:9:45pm'

            />
            </ApprovalCard>
            <ApprovalCard>
            <Co
                name={faker.name.firstName()}
                text ='hello rekha'
                time='time:10:00pm'

            />
            </ApprovalCard>
            
          
            </div>
            )
        }
    }
export default App;