var os = require('os');
var formatTime = require('./formatTime');
function getOSinfo() {
	var cpu = os.cpus()[0].model;				
	var type = os.type();
	var release = os.release();
	if(type === 'Darwin') {
	    type = 'OSX';
	} else if(type === 'Windows_NT') {
	    type = 'Windows';
	}
	var uptime = os.uptime();
	var userInfo = os.userInfo();
	console.log('System:', type);
	console.log('Release:', release);
	console.log('CPU model:', cpu);
	console.log('Uptime: ~ ', formatTime.printFormatedTime(uptime));
	console.log('User name:', userInfo.username);
	console.log('Home dir:', userInfo.homedir);
}
exports.print = getOSinfo;