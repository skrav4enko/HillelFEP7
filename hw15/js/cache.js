var complexFunction = function(arg1, arg2) { 
  return arg1 + arg2;
};
var cachedFunction = function cache(complexFunction) {
  let cache = [];
  return complexFunction()
};

cachedFunction('foo', 'bar');
cachedFunction('foo', 'bar');
cachedFunction('foo', 'baz');