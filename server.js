
var express = require('express');
var app = express();


// GET /ping
app.get('/ping', function(req,res,nextFn) {
  res.send("pong")
})

let hitCount = 1

// GET /count
app.get('/count', function(req,res,nextFn) {
  res.send(`This is the ${ordinal_suffix_of(hitCount++)} load of this page since the server was last launched.`)
})


app.listen(3000, function(){
    console.log('rendering-api is now listening on port 3000...');
})


function ordinal_suffix_of(i) {
    var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return i + "st";
    }
    if (j == 2 && k != 12) {
        return i + "nd";
    }
    if (j == 3 && k != 13) {
        return i + "rd";
    }
    return i + "th";
}
