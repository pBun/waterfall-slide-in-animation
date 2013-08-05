(function($) {
	var animationName = 'slidein';
	var items = document.getElementsByClassName('animate-' + animationName);
	init();
	function init(){
	  for(var i = 0; i < items.length; i++) {
	    items[i].className += " pre-animate";
	    setTimeout(animate.bind(undefined, items[i]), i * 300);
	  }
	}
	function animate(item){
	  item.className += ' ' + animationName;
	  item.className = item.className.replace('pre-animate', '');
	}
})(jQuery);