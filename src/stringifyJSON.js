// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:
var stringifyJSON = function(obj) {
  if (obj === null) return '' + obj + ''; // take care of pesky null special case
  switch(typeof obj) {
    case 'undefined':
		case 'function':
			return undefined;

		case 'string':
			return '"' + obj + '"';

		case 'number':
		case 'boolean':
			return '' + obj + '';
	}

	if(obj instanceof Array) { // is it an array?
		var output = [];
		_.each(obj, function(elem) {
			if(stringifyJSON(elem) === undefined)
			  output.push('null');
		  else
        output.push(stringifyJSON(elem));
		});
    return "[" + output + "]";

	} else { //it must be an object then

    var output = "";
    _.each(obj, function(elem, index) {
      if(output !== "") 
			  output += ",";
		  
		  if(stringifyJSON(elem) !== undefined)
				output += stringifyJSON(index) + ":" + stringifyJSON(elem);
		});
    return "{" + output + "}";
	}
};
