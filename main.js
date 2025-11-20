let addWorker = document.getElementById("addWorker");
let popup = document.getElementById("popup")
let close = document.getElementById("close")

let fullName = document.getElementById("fullName");
let Role = document.getElementById("Role");
let photoURL = document.getElementById("photoURL")
// console.log(photoURL)
let Email = document.getElementById("Email")
let phone = document.getElementById("phone")
let imgInput = document.getElementById("imgInput")
let empCardContainer = document.getElementById("empCardContainer")


let employeList = []

function openPopup() {
    popup.classList.remove("hidden")
    popup.parentElement.classList.remove("hidden")

    photoURL.addEventListener("input", () => {

        // console.log(photoURL.value)
        if (photoURL.value.trim() === "") {
            imgInput.src = "Image-not-found.png"

        } else {
            imgInput.src = photoURL.value;
        }
        console.log(imgInput.src)
    })
}

function closePopup() {
    popup.classList.add("hidden")
    popup.parentElement.classList.add("hidden")
}

// let addExperience = document.getElementById("addExperience");
let cardPlaces = document.getElementById("cardPlaces");

function addExperience() {
    // cardPlaces.innerHTML += `<div class="grid grid-cols-2 grid-rows-1 gap-x-3 gap-y-1 p-2 bg-gray-100 border rounded-md mx-2">
    //                     <div class="flex flex-col">
    //                         <label class="mb-1 font-medium text-gray-700" for="Entreprise">Entreprise</label>
    //                         <input id="Entreprise" class="border-2 w-full rounded-lg  p-2" type="text"
    //                             placeholder="Entreprise">
    //                     </div>
    //                     <div class="flex flex-col">
    //                         <label class="mb-1 font-medium text-gray-700" for="Poste">Poste</label>
    //                         <input id="Poste" class="border-2 w-full rounded-lg  p-2" type="text" placeholder="Poste">
    //                     </div>
    //                     <div class="flex flex-col">
    //                         <label class="mb-1 font-medium text-gray-700" for="dateDebut">Date début</label>
    //                         <input id="dateDebut" class="border-2 w-full rounded-lg  p-2" type="date"
    //                             placeholder="Date début">
    //                     </div>
    //                     <div class="flex flex-col">
    //                         <label class="mb-1 font-medium text-gray-700" for="dateFin">Date fin</label>
    //                         <input id="dateFin" class="border-2 w-full rounded-lg  p-2" type="date"
    //                             placeholder="Date fin">
    //                     </div>

    //                         <button class="deleteExp bg-red-500 w-fit  hover:bg-red-500 rounded-md px-3 py-1"> <i class="fa-solid fa-trash"></i> Delete     </button>

    //                 </div>` ;
    let expBloc = document.createElement("div");
    expBloc.className = "expForm grid grid-cols-2 grid-rows-1 gap-x-3 gap-y-1 p-2 bg-gray-100 border rounded-md mx-2"
    expBloc.innerHTML = `<div class="flex flex-col">
                            <label class="mb-1 font-medium text-gray-700" for="Entreprise">Entreprise</label>
                            <input id="Entreprise" class="border-2 w-full rounded-lg  p-2" type="text"
                                placeholder="Entreprise">
                        </div>
                        <div class="flex flex-col">
                            <label class="mb-1 font-medium text-gray-700" for="Poste">Poste</label>
                            <input id="Poste" class="border-2 w-full rounded-lg  p-2" type="text" placeholder="Poste">
                        </div>
                        <div class="flex flex-col">
                            <label class="mb-1 font-medium text-gray-700" for="dateDebut">Date début</label>
                            <input id="dateDebut" class="border-2 w-full rounded-lg  p-2" type="date"
                                placeholder="Date début">
                        </div>
                        <div class="flex flex-col">
                            <label class="mb-1 font-medium text-gray-700" for="dateFin">Date fin</label>
                            <input id="dateFin" class="border-2 w-full rounded-lg  p-2" type="date"
                                placeholder="Date fin">
                        </div>
                        
                            <button class="deleteExp bg-red-400 w-fit  hover:bg-red-500 rounded-md px-3 py-1"> <i class="fa-solid fa-trash"></i> Delete     </button>`

    cardPlaces.appendChild(expBloc)
    // console.log(expBloc.querySelector(".deleteExp"))

    expBloc.querySelector(".deleteExp").addEventListener("click", () => {

        expBloc.remove()
    })


}

function saveEmploye() {

    let employe = {
        nom: fullName.value,
        rule: Role.value,
        mail: Email.value,
        telephone: phone.value,
        img: imgInput.src,
        expreienceList: []

    };
    console.log(employe.rule)

    let empCard = `<div class="bg-white shadow rounded-md p-2 border flex gap-1 items-center">
                        <div class="border-2  w-[60px]  h-[60px] rounded-full overflow-hidden">
                            <img class="w-full h-full object-cover" src="${employe.img}" alt="">
                        </div>
                        <div class="border-2 ">
                            <h3 class="font-semibold">${employe.nom} </h3>
                            <p class="text-sm text-gray-600">${employe.rule}.</p>
                        </div>

                    </div>`

    empCardContainer.insertAdjacentHTML("afterbegin", empCard)
    // closePopup()
    let expArr = document.querySelectorAll(".expForm")

    expArr.forEach((ele) => {
        // console.log(ele)
        let experience = {
            entreprise: ele.querySelector("#Entreprise").value,
            poste: ele.querySelector("#Poste").value,
            dateDebut: ele.querySelector("#dateDebut").value,
            dateFin: ele.querySelector("#dateFin").value
        };
        // console.log(experience.entreprise)
        // console.log(experience.dateFin)
        employe.expreienceList.push(experience);
    })

    employeList.push(employe)

    closePopup()
}

function test() {
    console.log(employeList)
}

let empLoadPopup = document.getElementById("empLoadPopup");
let loadContainer = document.getElementById("loadContainer")
function closeLoad() {
    empLoadPopup.classList.add("hidden")
    loadContainer.innerHTML = ``
}

function dispoEmploye(roleAllowed, Area) {
    empLoadPopup.classList.remove("hidden")
    console.log(roleAllowed)
    console.log(Area)
    console.log(employeList)

    let empAllowed = employeList.filter((e) => roleAllowed.includes(e.rule))
    empAllowed.forEach(ele => {
        let div = document.createElement("div")
        div.className = "bg-white shadow rounded-md p-2 border flex gap-1 items-center relative"
        div.innerHTML = `<div class="border-2  w-[60px]  h-[60px] rounded-full overflow-hidden">
                    <img class="w-full h-full object-cover" src="${ele.img}" alt="">
                </div>
                <div class="border-2 ">
                    <h3 class="font-semibold">${ele.nom} </h3>
                    <p class="text-sm text-gray-600">${ele.rule}.</p>

                    <button class="addBtn absolute right-4  top-[25%] border-2 rounded-md bg-green-400 hover:bg-green-500 h-fit px-3 py-1">add to area</button>
                </div>`

        loadContainer.appendChild(div)
    });

    document.querySelectorAll(".addBtn").forEach((e)=> {
        e.addEventListener("click", {
            
        })
    })
}



// let x = 55 ;
// delete x ;
// function sum(a,a)
// {
//     console.log(a + a);
// }
// sum(2,5);