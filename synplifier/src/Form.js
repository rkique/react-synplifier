import React, {Component} from 'react'

//A form Class component that has an initialState variable
class Form extends Component {

    //initialState
    //an empty protocol (text input by user)
    //an empty set of steps (converted from protocol)
    initialState = {
        protocol: '',
        steps: []
    }
    state = this.initialState

    //an arrow function that runs whenever changes made to input
    //attached to the "onChange" built-in function
    handleChange = (event) => {
        //this is a way to store and process key value pairs
        const {name, value} = event.target
        
        this.setState({
            [name]: value,
            job: "Test Job"
        })
    }

    //run handleSubmit, and maybe clear the Form by setting to initial state
    submitForm = () => {
        this.props.handleSubmit(this.state)

        //don't clear the Form 
        //this.setState(this.initialState)
    }

    render() {
        //returns an HTML form object with a name and a job from the state
        //this scope: refers to the Form class
        const rows = 40;
        const cols = 40;
        const {protocol} = this.state;

        return (
            <form>
                 <label htmlFor="protocol"> Copy paste in the steps, separated by a newline character. Each separate step will be treated as an atomic action</label>
                 <textarea
                 type="text"
                 name="protocol"
                 id="protocol"
                 rows = {rows}
                 cols = {cols}
                 value={protocol}
                 onChange={this.handleChange} />
                 <input type="button" value="Submit" onClick={this.submitForm} />
            </form>
        )
    }
}

export default Form;