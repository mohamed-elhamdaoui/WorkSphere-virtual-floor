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
let infoEmp = document.getElementById("infoEmp")
// let employeList = []
let salles = ["ReceptionRoom", "ServerRoom", "SecurityRoom", "ArchiveRoom"];
let unsignedEmp = []
let employeList = [
    {
        id: Date.now() + 1,
        inRoom: false,
        nom: "Jordan Belfort",
        rule: "Manager",
        mail: "jordan.belfort@company.com",
        telephone: "0612345678",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbY9SHGISgQgDdxFU33ZgSRrdX3f_FJHsuZg&s",
        expreienceList: []
    },
    {
        id: Date.now() + 2,
        inRoom: false,
        nom: "Donnie Azoff",
        rule: "Technicien IT",
        mail: "donnie.azoff@company.com",
        telephone: "0678123456",
        img: "https://altselection.ouest-france.fr/wp-content/uploads/2025/06/Gojo-Satoru-au-coeur-dun-moment-cle-de-sa-jeunesse-dans-Jujutsu-Kaisen-grace-a-de-nouveaux-croquis-inedits.jpg",
        expreienceList: []
    },
    {
        id: Date.now() + 3,
        inRoom: false,
        nom: "Naomi Lapaglia",
        rule: "Réceptionniste",
        mail: "naomi.lapaglia@company.com",
        telephone: "0654218765",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpVWXfxtfSgzD0A_zqS9Wy__LGgvNI5tDUOw&s",
        expreienceList: []
    },
    {
        id: Date.now() + 4,
        inRoom: false,
        nom: "Mark Hanna",
        rule: "Agent de sécurité",
        mail: "mark.hanna@company.com",
        telephone: "0698876543",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXibF_KOQp5WHqV-Q01nHJCQQ0uqnB1TJvwQ&s",
        expreienceList: []
    }
];

function empEnAttend() {
    console.log(employeList.length)
    document.getElementById("empCntr").textContent = (employeList.filter((e) => e.inRoom != true)).length
}



function displayInfo(e) {
    let worker = employeList.find((ele) => (ele.id == e));
    console.log(worker)
    let expPart = ``;
    worker.expreienceList.forEach((exp) => {
        expPart += `
            <br>
             <h3 class="col-span-4 text-center font-bold text-black text-lg uppercase mt-4">Expériences</h3>
        <div class="expCard border-2 border-green-300 flex flex-wrap bg-green-50 rounded-xl p-4 shadow-lg">

 <div class="experience text-sm mt-3"><p><span class="font-semibold">Entreprise :</span> ${exp.entreprise}</p>
 <p><span class="font-semibold">Entreprise :</span> ${exp.poste}</p>
                <p><span class="font-semibold">Début :</span> ${exp.dateDebut}</p>
                <p><span class="font-semibold">Fin :</span> ${exp.dateFin}</p>
            </div>
        </div> `

    });

    console.log(worker);
    infoEmp.innerHTML = `<div class="all-info-popup relative inset-x-0 mx-auto top-1/2 -translate-y-1/2 bg-white w-full max-w-lg rounded-2xl shadow-xl p-4 h-[60vh] overflow-scroll [scrollbar-width:none] border-4 border-black/30">
        <div class="grid grid-cols-[1fr 2fr] gap-5 p-5">

            <img src="${worker.img
        }" alt="Worker image" class="w-28 h-28 object-cover rounded-xl shadow-md border-amber-300/50 border-4">

            <div class="infos gap-2 text-blue-700 text-sm border-[5px] h-[150px] p-3 col-span-1 rounded-xl shadow-lg">
                <div class="border-b-2 border-blue-100 mb-3">
                    <h3 class="font-bold text-black text-center"><i class="fas fa-person"></i> INFO GLOBAL</h3>
                </div>
                <h5><span class="font-semibold">Nom :</span> ${worker.nom}</h5>
                <h5><span class="font-semibold">Rôle :</span> ${worker.rule
        }</h5>
                <h5><span class="font-semibold">Email :</span> ${worker.mail
        }</h5>
        <h5><span class="font-semibold">Tel :</span> ${worker.telephone}</h5>
            </div>
            <div class="col-span-2">
                ${expPart || "No Experiences"}
            </div>
        </div>
    </div>`;
    infoEmp.classList.remove("hidden");
}


let tempEmpArr = []

popup.parentElement.addEventListener("click", (e) => {
    if (e.target == popup.parentElement) {
        e.target.classList.add("hidden")

    }
})
infoEmp.addEventListener("click", (e) => {
    if (infoEmp == e.target) {
        e.target.classList.add("hidden")
    }
})

function openPopup() {

    popup.parentElement.classList.remove("hidden")

    photoURL.addEventListener("input", () => {

        // console.log(photoURL.value)
        imgInput.onerror = () => {
            imgInput.src = "Image-not-found.png"
        }

        imgInput.src = photoURL.value;

    })
}

function closePopup() {

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

function loadEmploye() {

    unsignedEmp = employeList.filter((e) => e.inRoom != true)
    empCardContainer.innerHTML = ``
    unsignedEmp.forEach((data) => {
        let dev = `<div id="${data.id}" onclick="displayInfo(${data.id})" class="bg-white shadow rounded-md p-2 border flex gap-1 items-center">
                        <div class="border-2  w-[60px]  h-[60px] rounded-full overflow-hidden">
                            <img class="w-full h-full object-cover" src="${data.img}" alt="">
                        </div>
                        <div class=" ">
                            <h3 class="font-semibold">${data.nom} </h3>
                            <p class="text-sm text-gray-600">${data.rule}.</p>
                        </div>

                    </div>`
        empCardContainer.insertAdjacentHTML("afterbegin", dev)
        empEnAttend()
    })

}
loadEmploye()
VoidRooms(salles)

function saveEmploye() {

    let employe = {
        id: Date.now(),
        inRoom: false,
        nom: fullName.value,
        rule: Role.value,
        mail: Email.value,
        telephone: phone.value,
        img: imgInput.src,
        expreienceList: []

    };
    console.log(employe)

    let empCard = `<div id="${employe.id}" onclick="displayInfo(${employe.id})" class="bg-white shadow rounded-md p-2 border flex gap-1 items-center">
                        <div class="border-2  w-[60px]  h-[60px] rounded-full overflow-hidden">
                            <img class="w-full h-full object-cover" src="${employe.img}" alt="">
                        </div>
                        <div class=" ">
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

    empEnAttend()
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
    empEnAttend()
}

function dispoEmploye(roleAllowed, Area, limit) {
    empLoadPopup.classList.remove("hidden")
    console.log(roleAllowed)
    console.log(Area)
    console.log(employeList)



    let position = document.getElementById(Area);
    console.log(position.children.length)
    if (position.children.length == limit) {
        alert("This zone , acheived their limit capacity")
        closeLoad()
    }







    let empAllowed = employeList.filter((e) => roleAllowed.includes(e.rule) && e.inRoom == false)
    console.log(empAllowed)
    loadContainer.innerHTML = ``;
    empAllowed.forEach(ele => {
        let div = document.createElement("div")
        div.id = ele.id
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

    document.querySelectorAll(".addBtn").forEach((e) => {
        e.addEventListener("click", () => {
            // for (let index = 0; index < employeList.length; index++) {
            //     if (e.parentElement.parentElement.id == employeList[index].id) {
            //         console.log(employeList[index])
            //         tempEmpArr.push(employeList[index]);
            //         employeList = employeList.filter((e) => e != employeList[index])

            //         console.log(tempEmpArr)
            //         // console.log(employeList)
            //         document.getElementById(e.parentElement.parentElement.id).remove()
            //         e.parentElement.parentElement.remove()
            //     }

            // }

            for (let i = 0; i < employeList.length; i++) {
                console.log(Area)

                console.log(i)
                console.log("heeello")
                // employeList.find((e)=> { e.inRoom })
                if (e.parentElement.parentElement.id == employeList[i].id) {
                    console.log(employeList[i]);
                    employeList[i].inRoom = true;
                    console.log(employeList[i])

                    let bloc = document.createElement("div")

                    bloc.className = "relative "
                    bloc.innerHTML = `<div id="${employeList[i].id}"
                                class="bg-white shadow rounded-md border flex justify-between items-center h-fit w-fit">
                                <div class="border-2  w-[40px]  h-[40px] rounded-full overflow-hidden">
                                    <img class="w-full h-full object-cover" src="${employeList[i].img}" alt="">
                                </div>
                                <div class=" ">
                                    <h3 class="font-normal text-xs">${employeList[i].nom} </h3>
                                    <p class="text-xs text-gray-600">${employeList[i].rule}.</p>
                                </div>
                                <button onclick="unssigned(${employeList[i].id},${Area})" class="closeUnsigned absolute rounded-full  top-[-25%] right-[-8%]"><i class="fas fa-window-close"></i></button>
                            </div>`
                    // let assignedCard =
                    let zone = document.getElementById(Area)
                    zone.appendChild(bloc)
                    zone.parentElement.querySelector("#empNmbr").textContent = zone.childElementCount

                }
            }

            loadEmploye();
            dispoEmploye(roleAllowed, Area)
            empEnAttend()
            // console.log(document.querySelector("#ConferRoom").children.length)
            VoidRooms(salles)
            closeLoad()
        })
    })
}


function unssigned(id, Area) {

    console.log(id)
    let findEmp = employeList.find((e) => e.id == id)
    findEmp.inRoom = false
    document.getElementById(id).parentElement.remove()
    console.log(Area)

    // console.log(zone)
    Area.parentElement.querySelector("#empNmbr").textContent = Area.childElementCount;

    loadEmploye();
    empEnAttend()
    // console.log(findEmp)
    VoidRooms(salles)

}



function VoidRooms(salles) {
    salles.forEach((e) => {
        console.log(e)
        let x = document.querySelector(`#${e}`)

        if (x.children.length == 0) {
            x.parentElement.classList.add("bg-red-400/50")
            x.parentElement.classList.remove("bg-green-300/30")

            console.log()
        } else {
            x.parentElement.classList.add("bg-green-300/30")
            x.parentElement.classList.remove("bg-red-400/50")
        }
        console.log(x.children.length)
    })
}

employeList.forEach((e) => {
    console.log(e.id)
})

// let x = 55 ;
// delete x ;
// function sum(a,a)
// {
//     console.log(a + a);
// }
// sum(2,5);
// console.log(Date.now())
