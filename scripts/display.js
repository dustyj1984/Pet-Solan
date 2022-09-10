
function displayPetTables(){
    const petTable = document.getElementById("petTable");
    //travel the array
    petTable.innerHTML=``;

    for(let i = 0; i<petSalon.pets.length; i++){
//get the pet 
        let pet=petSalon.pets[i];
      
        //create the tr
        let tr =`
            <tr id="${pet.id}">
                <td>${pet.name}</td>
                <td>${pet.age}</td>
                <td>${pet.gender}</td>
                <td>${pet.breed}</td>
                <td>${pet.ownerName}</td>
                <td>${pet.ownerPhone}</td>
                <td>${pet.ownerEmail}</td>
                <td> <button onclick="deletePet(${pet.id})">🗑️</button></td>
            </tr>
        `;
        
        //insert the tmp into html   
        petTable.innerHTML+=tr;   

        }

}