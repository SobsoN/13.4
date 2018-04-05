var OSinfo = require('../modules/OSinfo');
process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
    var input = process.stdin.read();
    process.stdout.write('Write "/version" or "/getOSinfo" "/lang" or "/exit" \n');

    if (input !== null) {
    	var instruction = input.toString().trim();
    	switch(instruction) {
    		case '/exit' :
    			process.stdout.write('Quitting app!\n');
            	process.exit();
    			break;

    		case '/version' :
    			console.log(process.versions);
    			break;

    		case '/lang' :
    			console.log(process.env);
    			break;

    		case '/getOSinfo' :
    			OSinfo.print();
    			break;

    		default :
    			process.stderr.write('Wrong command\n');
    			break;
    	}
    }
});

