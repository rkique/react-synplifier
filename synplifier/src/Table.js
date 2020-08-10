import React, {Component} from 'react'

//a table header ... idk if this might become useful 
const TableHeader = () => {
    return null;
}

//a StepsTable that displays StepRows in different rows
const StepsTable = (props) => {
    let steps = props.steps;
    var rows = []
    for (var i =0; i<steps.length; i++)
    {
        let step = steps[i];
        rows.push(<StepRow key={i} step={step}/>);
    }
    return <div className="stepsTable">{rows}</div>;
}

//a StepRow is a collection of tags and text objects (words) in a row (5px margin)
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
                tagsText.push(
                <div class="cardTooltip">{wordArray[i]}
                <span class="tooltiptext">{props.step.tags[j][1]}</span>
                </div>)
                foundTag = true;
            }
        }
        if(foundTag == false)
        {           
            //since no tags were found, append text
             tagsText.push(<p style={{marginRight: "5px"}}>{wordArray[i]}</p>)    
        }
    }
    return <div id="tagsText">{tagsText}</div>

}

//a "Table" component (dninclude)
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