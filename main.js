const board = document.querySelector(".board")
const keyboardBoard = document.querySelector(".keyboardBoard")
const imgContariner = document.querySelector(".hangManBoard")
const img = document.querySelector(".img")

let password = "hasło"
let password1 = ""
let letters = ""
let myAttempts = 1

password = password.toUpperCase()
let letterArr = [35]
letterArr[0] = "A"
letterArr[1] = "Ą"
letterArr[2] = "B"
letterArr[3] = "C"
letterArr[4] = "Ć"
letterArr[5] = "D"
letterArr[6] = "E"
letterArr[7] = "Ę"
letterArr[8] = "F"
letterArr[9] = "G"
letterArr[10] = "H"
letterArr[11] = "I"
letterArr[12] = "J"
letterArr[13] = "K"
letterArr[14] = "L"
letterArr[15] = "Ł"
letterArr[16] = "M"
letterArr[17] = "N"
letterArr[18] = "Ń"
letterArr[19] = "O"
letterArr[20] = "Ó"
letterArr[21] = "P"
letterArr[22] = "Q"
letterArr[23] = "R"
letterArr[24] = "S"
letterArr[25] = "Ś"
letterArr[26] = "T"
letterArr[27] = "U"
letterArr[28] = "V"
letterArr[29] = "W"
letterArr[30] = "X"
letterArr[31] = "Y"
letterArr[32] = "Z"
letterArr[33] = "Ź"
letterArr[34] = "Ż"

const passwordContainer = () => {
	board.textContent = password1
}

const passwordEncrypt = () => {
	for (let i = 0; i < password.length; i++) {
		if (password.charAt(i) == " ") {
			password1 = password1 + " "
		} else {
			password1 = password1 + "-"
		}
	}
	passwordContainer()
	keyboardLetters()
}

const keyboardLetters = () => {
	for (let i = 0; i < 35; i++) {
		letters = document.createElement("div")
		letters.textContent = letterArr[i]
		letters.classList.add("letter")
		keyboardBoard.append(letters)
		letters.addEventListener("click", showLetters)
	}
}

const replaceLetter = letter => {
	for (let i = 0; i < password.length; i++) {
		if (password.charAt(i) === letter) {
			password1 =
				password1.substring(0, i) + letter + password1.substring(i + 1)
		}
	}
	passwordContainer()
}

const showLetters = e => {
	const clickedLetter = e.target.textContent
	if (password.includes(clickedLetter)) {
		replaceLetter(clickedLetter)
	} else if (password !== password.includes(clickedLetter)) {
		myAttempts++
		imgContariner.style.backgroundImage = `url(img/s${myAttempts}.jpg)`
	}
}

passwordEncrypt()
