let infosAll = [
    {
        title: "Title product/service 1",
        desc: "Description product/ service 1",
        image: "images/img1.jpg"
    },
       {
        title: "Title product/service 2",
        desc: "Description product/ service 2",
        image: "images/img1.jpg"
    },
       {
        title: "Title product/service 3",
        desc: "Description product/ service 3",
        image: "images/img1.jpg"
    },
]

let container = document.getElementById("info-container")
for(let i=0; i<infosAll.length; i++){
    let info = infosAll[i]
    container.innerHTML+= `
    <div class="col-12 col-md-6 col-lg-3 mb-3">
    <div class="card">
  <img src="${info.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">${info.title}</h5>
    <p class="card-text">${info.desc}</p>
  </div>
</div>
    </div>
    `
}