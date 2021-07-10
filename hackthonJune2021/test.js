// map
// const a = [ 2, 4, 6, 8]
// const d = a.map(x => x * 2)
// console.log(d);




// callback
// function hide() {
//     const t = "Hello";
//     return t
// }

// function show() {
//     const d = hide()
//     console.log(d + " Navgurukul");
// }

// show(hide())

// const prom = new Promise((resolve, reject) => {
      
//     const isclean = true

//     if (isclean) {
//         resolve(); 
//     } else {
//         reject(); 
//     }  
//     });
    
//     prom.then((resolve) => {
//         console.log("Room is clean");
//     }).catch((reject) => {
//         console.log("Room isn't clean");
//     });

const students = ['anmol', 'subhash', 'satpal', 'anmol', 'anmol']
const fil = students.filter(x => x == 'anmol')
console.log(fil);


