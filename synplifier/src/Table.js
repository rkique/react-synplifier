import React from 'react'
import vocab from './vocab.json'

const Table = (props) =>  {

	//we want this Table to rerun each keystroke
	let filteredVocab = vocab
	console.log(`mySearch is ${props.mySearch}`)
	let filteredBoldedVocab;

	if(props.mySearch == ""){
		//bold no part of string info.term
		filteredVocab = vocab
		filteredBoldedVocab = filteredVocab.map(info => {
		let newInfo = {...info}
		newInfo.term = [info.term,"", ""]
		console.log(`newInfo.term ${newInfo.term}`)
		return newInfo
	})
	}
	else {
	filteredVocab = vocab.filter(info => info.term.includes(props.mySearch))
	//bold text within info.term that matches props.mySearch
	filteredBoldedVocab = filteredVocab.map(info => {
		//makes new copy
		let newInfo = {...info}
		newInfo.term = [newInfo.term.split(props.mySearch)[0],props.mySearch, newInfo.term.split(props.mySearch)[1]]
		console.log(`newInfo.term ${newInfo.term}`)
		return newInfo
	})
	}
	console.log(filteredBoldedVocab)
	const DisplayData = filteredBoldedVocab.map(
		(info) => {
			return (
				<tr>
					<td>{info.term[0]}<b>{info.term[1]}</b>{info.term[2]}</td>
					<td>{info.definition}</td>
				</tr>
			)
		}
	)

	return (
		<div>
			<table class="table table-striped">
				<thead>
					<tr>
						<th>term</th>
						<th>definition</th>
					</tr>
				</thead>
				<tbody>

					{DisplayData}

				</tbody>
			</table>

		</div>
	)
}

export default Table;
