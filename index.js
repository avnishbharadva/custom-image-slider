let img_gal = document.getElementById("img_gal");

let img_arr = ["./images/img1.jpg","./images/img2.jpg","./images/img3.jpg","./images/img4.jpg","./images/img5.jpg","./images/img6.jpg"]

const pre_pic = () => {
    let il = img_arr.length;
    let modalTitle = document.getElementById("exampleModalLabel");
    let n = modalTitle.innerText;
    // console.log(n.slice(0,1));
    n = n.slice(0,1);

    if(n==1){
        n = 7;
    }
    modalTitle.innerText = `${n - 1} / ${il}`;

    let modalBody = document.getElementById("modalBody");
    // console.log(n);
    modalBody.innerHTML = `<img src="${img_arr[n-2]}" width="400px" height="300px" />`;
}

const next_pic = () => {
    let il = img_arr.length;
    let modalTitle = document.getElementById("exampleModalLabel");
    let n = modalTitle.innerText;
    // console.log(n.slice(0,1));
    n = parseInt(n.slice(0,1));

    if(n==6){
        n = 0;
    }
    modalTitle.innerText = `${n + 1} / ${il}`;

    let modalBody = document.getElementById("modalBody");
    console.log(n);
    modalBody.innerHTML = `<img src="${img_arr[n]}" width="400px" height="300px" />`;
}

const showModal = (index) => {

    let il = img_arr.length;
    let modalTitle = document.getElementById("exampleModalLabel");
    modalTitle.innerText = `${index + 1} / ${il}`;
    let modalBody = document.getElementById("modalBody");
    // console.log(item);
    modalBody.innerHTML = `<img src="${img_arr[index]}" width="400px" height="300px" />`;
}

img_arr.forEach(function(item, index, arr) {
    // console.log(item);
    img_gal.innerHTML += `<div class="col-md-4 mb-3" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick="showModal(${index})"><img src="${item}" width="400px" height="300px" /></div>`; 
})