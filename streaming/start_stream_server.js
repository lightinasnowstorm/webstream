//This code is copyright to and liscensed from node-media-server
const { NodeMediaCluster } = require('node-media-server');
const os = require('os')

const numCPUs = os.cpus().length;
const config = {
    logType:0,
    rtmp: {
        port: 1935,
        chunk_size: 6000,
        gop_cache: true,
        ping: 60,
        ping_timeout: 30
    },
    http: {
        port: 8000,
        allow_origin: '*'
    },
    /*auth:{
        play:true,
        publish:true,
        secret:'5asdjWjd$%JKlkaSHIN_MEDI_KEY'
    },*/
    cluster: {
        num: numCPUs
    }
}

const StartStreamServer = () => {
    var nmcs = new NodeMediaCluster(config)
    nmcs.run();
}

module.exports = StartStreamServer
//export default StartStreamServer