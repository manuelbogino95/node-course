const fs = require('fs')
const chalk = require('chalk')

const addNote = (title, body) => {
	const notes = loadNotes()
	const duplicateNote = notes.find((note) => note.title === title)

	if(!duplicateNote) {
		notes.push({
			title: title,
			body: body
		})
	
		saveNotes(notes)
		console.log(chalk.green.inverse('New note added!'))
	} else {
		console.log(chalk.red.inverse('Note title taken!'))
	}
}

const removeNote = (title) => {
	const notes = loadNotes()
	const notesToKeep = notes.filter((note) => note.title !== title)

	if(notes.length > notesToKeep.length) {
		saveNotes(notesToKeep)
		console.log(chalk.green.inverse('Note removed!'))
	} else {
		console.log(chalk.red.inverse('No note found!'))
	}
}

const listNotes = () => {
	console.log(chalk.magenta.inverse('Your notes'))
	const notes = loadNotes()
	notes.forEach(note => {
		console.log(note.title)
	});
}

const readNote = (title) => {
	const notes = loadNotes()
	const note = notes.find((note) => note.title === title)

	if(note) {
		console.log(chalk.magenta.inverse(note.title))
		console.log(note.body)
	} else {
		console.log(chalk.red.inverse('No note found!'))
	}
}

const loadNotes = () => {
	try {
		const dataBuffer = fs.readFileSync('notes.json')
		const dataJSON = dataBuffer.toString()
		return JSON.parse(dataJSON)
	} catch (err) {
		return []
	}
}

const saveNotes = (notes) => {
	const notesJSON = JSON.stringify(notes)
	fs.writeFileSync('notes.json', notesJSON)
}

module.exports = {
	listNotes: listNotes,
	addNote: addNote,
	removeNote: removeNote,
	readNote: readNote
}