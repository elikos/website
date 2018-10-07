var FtpDeploy = require('ftp-deploy');
var ftpDeploy = new FtpDeploy();

// Some environment variables have to be set separately (FTP_URL, FTP_USER, and FTP_PASSWORD)
var config = {
    user: process.env.FTP_USER,
    password: process.env.FTP_PASSWORD,
    host: process.env.FTP_URL,
    port: 21,
    localRoot: __dirname + '/src/',
    remoteRoot: '/nova_html/',
    include: ['*', '**/*'],
    exclude: [],
    deleteRemote: true
}

ftpDeploy.deploy(config)
    .then(res => console.log('finished'))
    .catch(err => console.log(err));

ftpDeploy.on('uploading', data => console.log('uploaded', data));
