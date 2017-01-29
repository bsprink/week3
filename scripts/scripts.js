var first = document.getElementById("firstName");
var last = document.getElementById("lastName");
var email = document.getElementById("emailAddress");
var submit = document.getElementById("submitButton");
var guest = document.getElementById("firstName");
var entries = document.getElementById("guestEntries");

submit.addEventListener("click", submitGuest);

function submitGuest(){
	var newEntry = document.createElement("h1");
	var newEntryText = document.createTextNode(first.value + " " + last.value + " | " + email.value);
	newEntry.appendChild(newEntryText);
	entries.appendChild(newEntry);
	first.value = "";
	last.value = "";
	email.value = "";

	//alert(first.value + " " + last.value );
}