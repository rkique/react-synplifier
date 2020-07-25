import React, {Component} from 'react'

//A form Class component that has an initialState variable
class Form extends Component {
    initialState = {
        protocol: '',
        steps: [{job: "ugh"}, {job: "ugh2"}]
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

    //run handleSubmit, and then clear the Form (set to initial state)
    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }

    render() {
        const {protocol} = this.state;

        //returns an HTML form object with a name and a job from the state
        //this scope: refers to the Form class

        return (
            <form>
                 <label htmlFor="protocol"> Copy paste in the steps, separated by a newline character or in a list format.</label>
                 <textarea
                 type="text"
                 name="protocol"
                 id="protocol"
                 rows = "10"
                 cols = "30"
                 value={protocol}
                 onChange={this.handleChange} />
                 <input type="button" value="Submit" onClick={this.submitForm} />
            </form>
        )
    }
}

export default Form;