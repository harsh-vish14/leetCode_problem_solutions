
function minimumDistances(i) {
    var r=[]
    i.map((x,y,z)=>(z.slice(0).splice(y,1),~(I=z.indexOf(x))&&r.push(Math.abs(y-I))))
    return(Math.min(...r.filter(x=>x).length>0?r.filter(x=>x):[-1]))
}

console.log(minimumDistances([1, 2, 3, 4, 10]));