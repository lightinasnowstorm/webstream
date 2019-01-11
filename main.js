const StartStreamServer = require('./streaming/start_stream_server')
{
    //Minimal
    const express = require('express')
    var app = express()
    app.use(express.static('site'))
    app.listen(80)
}

StartStreamServer();
