import React, {Component} from 'react'

const Col1 = "Step Number";
const Col2 = "Procedure";
//a Simple component that displays the Table Headers.
const TableHeader = () => {
    return(
        <thead>
          <tr>
            <th>{Col1}</th>
            <th>{Col2}</th>
          </tr>
        </thead>)
}

//a simple Table body component that returns steps and jobs.
const TableBody = (props) => {
    //uses the index as a KEY to access individual rows, and then lists the VALUES (step objects) out
    const rows = props.steps.map((row, index) => {
        return (
            <tr key={index}>
                <td>{index+1}</td>
                <td>{row.job}</td>
                <td>
                    <button onClick={() => props.removeStep(index)}>delete</button>
                </td>
            </tr>
        )
    })

  return <tbody> {rows}</tbody>
}
  

//a simple Table component
const Table = (props) => {

    //defining two variables we're passing into TableBody from the props
    //the props are coming from the params we pass into Table 
    const {steps, removeStep} = props
    return (  
        <table>
            <TableHeader />
            <TableBody steps={steps} removeStep={removeStep}/>
        </table>
    )
}

export default Table