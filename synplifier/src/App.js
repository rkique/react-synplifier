import React, {Component} from 'react'
import Table from './Table'
import Form from './Form'
import {findVocab} from './Vocab'
class App extends Component {
    state = {   
        steps:
             [
            {job: "Sterilize the workspace.\n Dilute and aliquot the media. \nInoculate the culture.\n Pellet, suspend, lyophilize", tags: [
                ["sterilize", "Sterilizing is cleaning the workspace with ethanol.", 0],
                ["inoculate", "Inoculating is transferring bacteria from solution onto growth media, usually by a small streaking loop."]
                ,["dilute", "Diluting is adding more growth media to an initial culture"]
                ,["induce", "Inducing is adding a certain reagent to trigger protein production in a culture"]
                ,["pellet", "Pelleting is running a centrifuge to separate bacteria from a culture"]
                ,["suspend", "Suspending is adding a liquid, usually to a bacterial pellet, for long term storage."]
                ,["aliquot", "Aliquoting is splitting a large amount of liquid into many smaller containers."]
                ,["lyophilize", "Lyophilizing is like freeze-drying, and is used to preserve bacteria & enyzmes."]
            ]}
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
            return step !== ""
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
                <p style={{fontSize: "10px"}}>(June 2022) Returning to this project after a bit (lol). I realize this does literally nothing as of right now. Wish I could find the terms.json file. Current plan is to add more terms, and some example protocols that highlight where synplifier could be useful. </p>
                <div className="flex-row">
                    <div className="flex-large">
                    <Form handleSubmit={this.handleSubmit} style={{margin: "0 10px", visibility: "none"}}/>
                    </div>
                    <div className="flex-large">
                    <Table steps={steps} removeStep ={this.removeStep} style={{margin: "0 10px"}} />
                    </div>
                </div>
            </div>
        )
    }
}

export default App