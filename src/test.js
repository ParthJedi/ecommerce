var a = ["a","a","c","c","d"];
var z = {};
debugger
const frequenctCounter = (a) => {
    for(let i=0; i<a.length; i++) {        
        (z[a[i]]) ? z[a[i]] += 1 : z[a[i]] = 1; 
    }
        
        console.log(z);
}
frequenctCounter(a)

a: 2
c: 2
d: 1