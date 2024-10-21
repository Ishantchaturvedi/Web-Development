

// //code 1
// const t1 = performance.now()

// for(let i=1; i<=100; i++) {
//     let para = document.createElement('p');
//     para.textContent = "This is para " + i;
//     document.body.appendChild(para);
// }

// const t2 = performance.now();

// console.log("total time by code 1: " + (t2-t1));

// //code 2

// const t3 = performance.now();
// let mydiv = document.createElement('div');

// for(let i=1; i<=100; i++) {
//     let para = document.createElement('p');
//     para.textContent = "This is para " + i;
//     mydiv.appendChild(para);
// }
// document.body.appendChild(mydiv);

// const t4 = performance.now();

// console.log("total time by code 2: " + (t4-t3));


//Best code

let fragment = document.createDocumentFragment();

for(let i=1; i<=100; i++) {
    let para = document.createElement('p');
    para.textContent = "This is para " + i + 1;

    //No reflow and no repaint for the below line
    fragment.appendChild(para);
}

//The below line takes 1 reflow and 1 repaint
document.body.appendChild(fragment);