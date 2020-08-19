//This code is copyright to and liscensed from node-media-server
const NodeMediaServer = require('node-media-server');

const config = {
    /*logType:0,*/
    rtmp: {
        port: 1935,
        chunk_size: 3000,
        gop_cache: true,
        ping: 60,
        ping_timeout: 30
    },
    http: {
        port: 8000,
        allow_origin: '*'
    }/*,*/
    /*auth:{
        play:true,
        publish:true,
        secret:'5asdjWjd$%JKlkaSHIN_MEDI_KEY'
    }*/
}

const StartStreamServer = () => {
    var nmcs = new NodeMediaServer(config)//new NodeMediaCluster(config)
    nmcs.run();
}

module.exports = StartStreamServer
//export default StartStreamServer