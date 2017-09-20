define(function(require, exports, module){
	console.log('b is loaded')

	function run(){
		console.log('b run');
	}
	exports.run = run;
})