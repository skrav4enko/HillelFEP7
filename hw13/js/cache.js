var complexFunction = function(arg1, arg2) { 
  return arg1 + arg2;
};
var cachedFunction = cache(complexFunction);

cachedFunction('foo', 'bar');
cachedFunction('foo', 'bar');
cachedFunction('foo', 'baz');


