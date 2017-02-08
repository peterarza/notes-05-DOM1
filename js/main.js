/* querySelector () is a DOM level method that is used to select classes or IDs. */
document.querySelector('.getThisQuery').textContent = 'Got this text using querySelector.';

/* Use getElementById to manipulate the DOM. */
document.getElementById('getThisId').textContent = 'Got this text using getElementById';



function submitAnswer()	{

	var x = document.querySelector('.myAnimal').value;
	
	document.querySelector('.response').innerHTML = 'That\'s great, I like ' + x + ' too!';
	


	// document.write('<br>That\'s great, I like ' + x +' too!');
}

