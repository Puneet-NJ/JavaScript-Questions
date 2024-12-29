setTimeout(() => {
	console.log("Inside timeout");
}, 2000);

fetch("http://someurl.com")
	.then((res) => console.log(res))
	.catch((err) => console.log(err));

// has 1 million lines of code
