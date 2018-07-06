var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {


    fs.readFile('config.json',function (error, text) {

        if (error) {
            
            console.error('Error while reading config file');
        
        } else {
            try {
                const obj = JSON.parse(text);
                console.log(JSON.stringify(obj, null, 4));
            } catch (e) {
                console.error('Invalid JSON in file');
            }
        }
    });



    readFilePromisified('config.json')
    .then(function (text) { // (A)
        const obj = JSON.parse(text);
        console.log(JSON.stringify(obj, null, 4));
    })
    .catch(function (error) { // (B)
        // File read error or JSON SyntaxError
        console.error('An error occurred', error);
    });


    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!');

}).listen(4080);


function readFilePromisified(filename) {
    return new Promise(
        function (resolve, reject) {
            fs.readFile(filename, { encoding: 'utf8' },
                (error, data) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(data);
                    }
                });
        });
}