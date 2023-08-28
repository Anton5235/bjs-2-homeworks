//Задача № 1
function cachingDecoratorNew(func) {
    let cache = [];

    function wrapper(...args) {
        const hash = md5(args);
        let objectInCache = cache.find((item) => item.hash == hash);
        if(objectInCache) {
            console.log('Из кэша: ' + objectInCache.value);
            return 'Из кэша: ' + objectInCache.value;
        }

        let result = func(...args);
        let calculate = {
            hash: hash,
            value: result
        }
        cache.push(calculate);
        if(cache.length > 5) {
            cache.shift()
        }
        console.log('Вычисляем: ' + result);
        return 'Вычисляем: ' + result
    }
    return wrapper
}


//Задача № 2
function debounceDecoratorNew(func, delay) {
    let timeoutId = null;
  return function(...args){
    if(timeoutId){
        clearTimeout(timeoutId)
    }
     timeoutId = setTimeout(() => {
        console.log(func(...args))}, delay )
    } 
  }

