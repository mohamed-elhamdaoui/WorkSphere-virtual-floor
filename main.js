let addWorker = document.getElementById("addWorker");
let popup = document.getElementById("popup")
let close = document.getElementById("close")


addWorker.addEventListener("click", () => {
    popup.classList.remove("hidden")
    popup.parentElement.classList.remove("hidden")

    // document.querySelector("main").classList.add("bg-black")
})

close.addEventListener("click", () => {
    popup.classList.add("hidden")
    popup.parentElement.classList.add("hidden")

})

console.log()


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
    expBloc.className = "grid grid-cols-2 grid-rows-1 gap-x-3 gap-y-1 p-2 bg-gray-100 border rounded-md mx-2"
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
    console.log(expBloc.querySelector(".deleteExp"))

    expBloc.querySelector(".deleteExp").addEventListener("click", () => {

        expBloc.remove()
    })


}


