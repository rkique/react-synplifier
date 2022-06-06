import React, {Component} from 'react'
import VocabTable from './VocabTable'

class App extends Component {

    render() {
        return (
            <div className="container">
                <p style={{fontSize: "14px"}} className="i"></p>
                <p style={{fontSize: "10px"}}>(June 2022) Returning to this project after a bit (lol). I realize this does literally nothing as of right now. Wish I could find the terms.json file. Current plan is to add more terms, and some example protocols that highlight where synplifier could be useful. </p>
                
                <div className="flex-row">
                    <VocabTable />
                </div>
            </div>
        )
    }
}

export default App