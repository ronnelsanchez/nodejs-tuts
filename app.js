/*Main WEB SERVER by NodeJS*/

/*HTTP Module, already included on NodeJS*/
const http = require('http');
/*File System Module: Load Files*/
const fs = require('fs');

/*Loop back Address and Port*/
const hostname = '127.0.0.1';
const port = 3000;

/*File System Model Function: Reads the file*/
fs.readFile('index.html', (err,html) => {
	/* If there is a error*/
	if(err){
		throw err;
	}
	/*Request Server*/
	const server = http.createServer((req, res) => {
		/*Status Code, tells everythings ok*/
		res.statusCode = 200;
		/*Set Header/Content Type to html*/
		res.setHeader('Content-type', 'text/html');
		/*Write display the html from FS*/
		res.write(html);
		res.end();
	});
	/*Tells if the server is running on console*/
	server.listen(port,hostname,() => {
		console.log('Server started on port ' + port);
	});
});
