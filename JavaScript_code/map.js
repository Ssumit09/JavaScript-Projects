const map=new Map()
    map.set('IN','India')
    map.set('IN','India')
    map.set('Fr','France')
console.log(map)   //it will not print duplicate values

for(const [key, value] of map){
    console.log(key, ':-', value);
}
