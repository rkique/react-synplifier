import React, {Component} from 'react'

//a Simple component that displays the Table Headers.
const TableHeader = () => {
    return(<h1>Steps</h1>)
}

//a simple Table body component that returns steps and jobs.
const StepsTable = (props) => {
    let steps = props.steps;
    var rows = []
    for (var i =0; i<steps.length; i++)
    {
        let step = steps[i];
        rows.push(<StepRow key={i} step={step}/>);
    }
    return rows;
}

const StepRow = (props) => {
    //create a tag for each term within the scope of each step
    //return a step split up into tags and text
    var tagsText = []
    //tags: word, def, index
    var wordArray = props.step.job.split(" ");
    for (var i = 0; i< wordArray.length; i++)
    {
        var foundTag = false;
        for(var j = 0; j<props.step.tags.length;j++)
        { 
            if(wordArray[i].toLowerCase() == props.step.tags[j][0])
            {
                //append tag instead of text
                tagsText.push(<mark style={{marginRight: "5px"}}>{wordArray[i]}</mark>)
                var foundTag = true;
            }
        }
        if(foundTag == false)
        {           
            //since no tags were found, append text
             tagsText.push(<p style={{marginRight: "5px"}}>{wordArray[i]}</p>)    
        }
    }
    return <div style={{display:'flex'}}>{tagsText}</div>

}

function HighlightedComponent(text, highlight) {
    // Split text on highlight term, include term itself into parts, ignore case
    const parts = text.split(new RegExp(`(${highlight})`, 'gi'));
    return <span>{parts.map(part => part.toLowerCase() === highlight.toLowerCase() ? <mark>{part}</mark> : part)}</span>;
}
  

//a simple Table component
const Table = (props) => {

    //defining two variables we're passing into TableBody from the props
    //the props are coming from the params we pass into Table 
    const {steps, removeStep} = props
    return (  
            <div>
            <TableHeader />
            <StepsTable steps={steps} removeStep={removeStep}/>
            </div>
    )
}

export default Table