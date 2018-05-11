let cache = {};
let i = 0;

var complexFunction = function (arg1, arg2) {
  let result =  arg1 + arg2;
  let key = i;
  cache[key] = {};
  cache[key]['arg1'] = arg1;
  cache[key]['arg2'] = arg2;
  cache[key]['result'] = result;
  i++;

  return console.log(`Result ${result} insert to cache for future`);
};

var cachedFunction = function (arg1, arg2) {
  for (let key in cache) {
    if (cache[key].arg1 === arg1 && cache[key].arg2 === arg2) {
      return console.log(`Result ${cache[key].result} from cache`);
    }
  }

  return complexFunction(arg1, arg2)
};

cachedFunction('foo', 'bar');
cachedFunction('foo', 'bar');
cachedFunction('foo', 'baz');
cachedFunction('foo', 'bor');
cachedFunction('hoo', 'boo');
cachedFunction('foo', 'baz');
cachedFunction('hoo', 'boo');

console.log(cache);
