import http from "http"
import fs from "fs"

http.createServer(function (req, res) {
  fs.readFile('demoFile.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    return res.end();
  });
}).listen(8080);

fs.appendFileSync('demoFile1.html', "Hello file is here", function (err) {
    if (err) throw err;
    console.log('File has been saved');
})

fs.open('demoFile1.html','w', function (err,data) {
    if (err) throw err;
    console.log(data);
})