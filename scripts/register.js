let petSalon ={
    companyName:"Cool Pets",
    phone:"123-456-7890",
    address:{
        state:"California",
        city:"Los Angeles",
        street:"Del Amo",
        zip:"90505"
    },
    pets:[]
}

//constructor
let c=0;
function Pet(name,age,gender,breed,service,ownerName,ownerPhone,ownerEmail){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.breed = breed;
    this.service = service;
    this.ownerName= ownerName;
    this.ownerPhone= ownerPhone;
    this.ownerEmail= ownerEmail;
    this.id=c++;


    
}
function displaySalonInfo(){
document.getElementsByClassName("info").innerHTML =`<p>${petSalon.companyName} is located ${petSalon.address.city} ${petSalon.address.state}</p>`;
}

// get the values from the inputs
let nameInput = document.getElementById("petName")
let ageInput = document.getElementById("petAge");
let genderInput = document.getElementById("petGender");
let breedInput = document.getElementById("petBreed");
let serviceSelect = document.getElementById("petService");
//owners
let ownerNameInput = document.getElementById("petOwner");
let ownerPhoneInput = document.getElementById("ownerPhone");
let ownerEmailInput = document.getElementById("ownerEmail");

function isValid(aPet){ 
    let valid=true;

    if(aPet.name == "" || aPet.service=="" || aPet.ownerPhone==""){
        valid=false;
    }
    return valid;
}

function register(){

    console.log(nameInput.value,ageInput.value,genderInput.value, breedInput.value,serviceSelect.value,ownerNameInput.value,ownerPhoneInput.value,ownerEmailInput.value);
    
    let thePet = new Pet(nameInput.value,ageInput.value,genderInput.value,breedInput.value,serviceSelect.value,ownerNameInput.value,ownerPhoneInput.value,ownerEmailInput.value);
    
    if(isValid(thePet)){
        petSalon.pets.push(thePet);
        clearInputs();
        displayPetTables();
    }else{
        alert("Please add the required information.");
    }
}

function clearInputs(){
nameInput.value ="";
ageInput.value ="";
genderInput.value ="";
breedInput.value ="";
serviceSelect.value ="";
ownerNameInput.value ="";
ownerPhoneInput.value ="";
ownerEmailInput.value ="";

}

function deletePet(petID){
    let removeIndex;
    console.log("deleteing pet " + id);
    for(let i=0; i<petSalon.pets.length; i++){
        let pet = petSalon.pets[i];
        if(pet.id == petID){
            removeIndex = i;
        }
    }
    petSalon.pets.splice(removeIndex, 1);
    document.getElementById(id).remove();
}

function search(){
    let searchString = document.getElementById("petSearch").value;
    let searchIndex;
    for(let i=0; i<petSalon.pets.length; i++){
        let pet = petSalon.pets[i];
        if(pet.name == searchString){
            searchIndex = i;
            console.log("searching...");
        }

    }
}
function init(){
    console.log("Registering");
    displaySalonInfo();
   

    displayPetTables(); 
    

}

window.onload =init;









