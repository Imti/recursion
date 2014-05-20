// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className){
  var output = [];
	var search = function(nodeList) {
	  _.each(nodeList, function(node) {
      if(node.classList && node.classList.contains(className))
        output.push(node);

		  if(node.childNodes)
        search(node.childNodes);
	  });
  }
	if(document.body.className.match(className)) output.push(document.body);
	search(document.body.childNodes);
	//console.log(output);
	//console.log(document.getElementsByClassName(className));
	return output;
};
