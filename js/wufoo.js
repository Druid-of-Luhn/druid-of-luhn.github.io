//http://ejohn.org/projects/flexible-javascript-events/
function addEvent( obj, type, fn ) {
  if ( obj.attachEvent ) {
    obj["e"+type+fn] = fn;
    obj[type+fn] = function() { obj["e"+type+fn]( window.event ); };
    obj.attachEvent( "on"+type, obj[type+fn] );
  }
  else{
    obj.addEventListener( type, fn, false );
  }
}

function disableSubmitButton() {
	document.getElementById("saveForm").disabled = true;
}

function initForm(){
	var activeForm = document.getElementsByTagName("form")[0];
	addEvent(activeForm, "submit", disableSubmitButton);
}

addEvent(window, "load", initForm);
