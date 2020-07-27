import React, {Component} from 'react'
import Table from './Table'
import Form from './Form'
import {findVocab} from './Vocab'
class App extends Component {
    state = {
        steps:
             [
            {job: "sterilize the workspace", tags: ["sterilize", "Sterilizing is cleaning the workspace with ethanol.", 0]}
            ]
    }

    //returns a new .steps with a specified step removed
    removeStep = (index) => {
        const {steps} = this.state
        const newSteps = steps.filter((step, i) => {return i !== index})
        this.setState({steps: newSteps})
    }
    
    //activates on the submit of the text input to update the steps
    handleSubmit = (state) => {
        //using an array of steps derived from the protocol: ['fill tube', 'mix tube', etc.]
        let protocolSteps = state.protocol.split("\n");
        protocolSteps = protocolSteps.filter(function(step) {
            return step != ""
          });
        //A quick, possibly inefficient way to construct objects with Job params from the prtocolSteps
        var i; 
        var steps = []
        for(i = 0; i< protocolSteps.length; i++)
        {
            //tags is a collection of 0+ [word,def, index] arrays
            steps.push({job: protocolSteps[i], tags: findVocab(protocolSteps[i])})
        }
        //update .steps with new derived steps
        this.setState({steps:steps})
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