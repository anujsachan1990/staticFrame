/**
 *	global.js
 * 	Global footer file
 *
 *  @project    < write project name here >
 *  @date       < put date here > 
 *  @author  	< author name >	
 * 	@site       < site name >
 */

NameSpace.global = (function($, ns, window, document, undefined){
	var _global = function(){
		this.init = function(){
			initEventListeners();
			initEventTriggers();
		};

		var initEventListeners = function(){

		};
		
		var initEventTriggers = function(){

		};
	}
	return new _global();

	$.subscribe(ns.events.INIT_MODULES, ns.global.init);

})((typeof jQuery !== "undefined") ? jQuery : null, NameSpace || {}, window, window.document);