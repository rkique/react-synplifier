import React, {Component} from 'react'
import Table from './Table'
import Form from './Form'

class App extends Component {
    state = {
        steps: [{job: "sterilize the workspace"}]
    }
    //returns a new array with a specified step removed
    //we're defining it here because we might want to do stuff with the steps that might not involve Table
    removeStep = (index) => {
        const {steps} = this.state
        const newSteps = steps.filter((step, i) => {return i !== index})
        this.setState({steps: newSteps})
    }
    //handleSubmit activates on the submit of the add-step form
    handleSubmit = (state) => {
        //an array of steps derived from the protocol
        const protocolSteps = state.protocol.split("\n");
        //construct objects with job params
        var i; 
        var steps = []
        for(i = 0; i< protocolSteps.length; i++)
        {
            steps.push({job: protocolSteps[i]})
        }
        //WOW: the spread operator "..." spreads steps out
        this.setState({ steps: [...this.state.steps].concat(steps)})
    }

    //renders a simple table from Table.js
    //this scope: the App itself

    render() {
        const {steps} = this.state
        return (
            <div className="container">
                <h1> Synplifier v0.1: You Can Input Text and It Will Display Steps</h1>
                 <Form handleSubmit={this.handleSubmit} />
                <Table steps={steps} removeStep ={this.removeStep} addStep = {this.addStep}/>
            </div>
            
        )
    }
}

export default App