// Create web server
// 1. Create a server object
var http = require('http');
var url = require('url');
var fs = require('fs');
var port = 8080;
var server = http.createServer(function (req, res) {
    // 2. Get the request url
    var requestUrl = req.url;
    // 3. Parse the url to get the path
    var path = url.parse(requestUrl).pathname;
    // 4. Based on the path, read the file and write the contents of the file to the response
    if (path === '/comments') {
        fs.readFile('comments.json', function (err, data) {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/html' });
                return res.end('404 Not Found');
            }
            res.writeHead(200, { 'Content-Type': 'text/html' });
            // Convert the data into a string
            var comments = JSON.parse(data.toString());
            // Create a string that will hold the contents of the file
            var commentsHtml = '<ul>';
            // Loop through the comments and create an HTML string
            for (var i = 0; i < comments.length; i++) {
                commentsHtml += '<li>' + comments[i] + '</li>';
            }
            commentsHtml += '</ul>';
            // Write the contents of the file to the response
            res.write(commentsHtml);
            return res.end();
        });
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        return res.end('404 Not Found');
    }
});
// 5. Listen for connections on the specified port
server.listen(port);
console.log('Server listening on port ' + port);
