const englishText = document.getElementById('eng-text');
const btn = document.getElementById('btn');
const btnClear = document.getElementById('btn-clear');
const pigLatinText = document.getElementById('pig-text');
const notification = document.getElementById('notification-container');

// function translateText() {

function checkForVowel(word) {
	let vowels = ['a', 'e', 'i', 'o', 'u', 'y'];
	let firstLetter = word.charAt(0);
	if (vowels.includes(firstLetter)) return true;
}

btn.addEventListener('click', function (e) {
	e.preventDefault();
	let text = englishText.value;
	let pLatinArr = [];
	// if empty show popup notification
	if (text == '') {
		notification.classList.add('show');
		setTimeout(() => {
			notification.classList.remove('show');
		}, 1000);
	} else {
		// turn text into arr then loop thru each word
		let textArr = text
			.toLowerCase()
			.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '')
			.trim()
			.split(' ');
		textArr.forEach(word => {
			let firstLetter = '';
			// check if first letter vowel. if yes make vowel changes
			if (checkForVowel(word)) {
				pLatinArr.push(word + '-ay');
				//if no make consonant changes
			} else {
				firstLetter = '-' + word.charAt(0) + 'ay';
				pLatinArr.push(word.slice(1, word.length) + firstLetter);
			}
			pigLatinText.innerText = pLatinArr.join(' ');
		});
	}
	console.log(pLatinArr);
});

btnClear.addEventListener('click', function (e) {
	e.preventDefault();
	englishText.value = '';
	pigLatinText.innerText = '';
});
// console.log(checkForVowel('element'));
