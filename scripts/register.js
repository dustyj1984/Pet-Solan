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
function Pet(name,age,gender,breed,service,ownerName,ownerPhone,ownerEmail){
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.breed = breed;
    this.service = service;
    this.ownerName= ownerName;
    this.ownerPhone= ownerPhone;
    this.ownerEmail= ownerEmail;


    //owners

}
function displaySalonInfo(){
document.getElementById("info").innerHTML =`<p>${petSalon.companyName} is located ${petSalon.address.city} ${petSalon.address.state}</p>`;
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


function register(){

    console.log(nameInput.value,ageInput.value,genderInput.value, breedInput.value,serviceSelect.value,ownerNameInput.value,ownerPhoneInput.value,ownerEmailInput.value);
    
    let thePet = new Pet(nameInput.value,ageInput.value,genderInput.value,breedInput.value,serviceSelect.value,ownerNameInput.value,ownerPhoneInput.value,ownerEmailInput.value);
    petSalon.pets.push(thePet);
    console.log(petSalon.pets);
    clearInputs();

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

function init(){
    console.log("Registering");
    displaySalonInfo();
    let scooby = new Pet("Scooby",60,"Male","Dane","Grooming","Shaggy","123-456-1234");
    let Simba = new Pet("Simba",20,"Female","Lion","Bath","Dustin","123-123-1234");         
    petSalon.pets.push(scooby,Simba);
    

}

window.onload =init;










displaySalonInfo();








