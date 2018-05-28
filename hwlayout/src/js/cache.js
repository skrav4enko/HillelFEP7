const cache = {};
let i = 0;

function complexFunction(arg1, arg2) {
  const result = arg1 + arg2;
  const key = i;
  cache[key] = {};
  cache[key].arg1 = arg1;
  cache[key].arg2 = arg2;
  cache[key].result = result;
  i += 1;

  return console.log(`Result ${result} insert to cache for future`);
}

function cachedFunction(arg1, arg2) {
  for (const key in cache) {
    if (cache[key].arg1 === arg1 && cache[key].arg2 === arg2) {
      return console.log(`Result ${cache[key].result} from cache`);
    }
  }

  return complexFunction(arg1, arg2);
}

cachedFunction('foo', 'bar');
cachedFunction('foo', 'bar');
cachedFunction('foo', 'baz');
cachedFunction('foo', 'bor');
cachedFunction('hoo', 'boo');
cachedFunction('foo', 'baz');
cachedFunction('hoo', 'boo');

console.log(cache);
