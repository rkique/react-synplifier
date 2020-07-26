import React, {Component} from 'react'
import Table from './Table'
import Form from './Form'

class App extends Component {
    state = {
        steps: [{job: "sterilize the workspace"}],
        verbs: []
    }

    //returns a new array with a specified step removed
    //we're defining it here because we might want to do stuff with the steps that might not involve Table
    removeStep = (index) => {
        const {steps} = this.state
        const newSteps = steps.filter((step, i) => {return i !== index})
        this.setState({steps: newSteps})
    }
    //handleSubmit activates on the submit of the add-step form, updating the tabular representation
    handleSubmit = (state) => {
        //using an array of steps derived from the protocol
        const protocolSteps = state.protocol.split("\n");
        //A stupid way to construct objects with Job params)
        var i; 
        var steps = []
        for(i = 0; i< protocolSteps.length; i++)
        {
            steps.push({job: protocolSteps[i]})
        }
        //WOW: the spread operator "..." spreads steps out
        this.setState({ steps: steps})
    }

    //this scope: the App
    //Renders a HEADER, a FORM, and a TABLE

    render() {
        const {steps} = this.state
        return (
            <div className="container">
                <h1 style={{color: "red"}}>Synplifier v0.1</h1>
                <div class="flex-row">
                    <div class="flex-large">
                    <Form handleSubmit={this.handleSubmit} style={{margin: "0 10px", visibility: "none"}}/>
                    </div>
                    <div class="flex-large">
                    <Table steps={steps} removeStep ={this.removeStep} style={{margin: "0 10px"}} />
                    </div>
                </div>
            </div>
        )
    }
}

export default App