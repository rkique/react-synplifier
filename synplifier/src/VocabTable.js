import React from 'react'
import vocab from './vocab.json'

function VocabTable() {
	let mySearch = ""
	//we want this VocabTable to rerun each keystroke
	let filteredVocab = vocab
	console.log(`mySearch is ${mySearch}`)
	filteredVocab = vocab.filter(info => info.term.includes(mySearch))
	const DisplayData = filteredVocab.map(
		(info) => {
			return (
				<tr>
					<td>{info.term}</td>
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

export default VocabTable;
