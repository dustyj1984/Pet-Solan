console.log("Registering");
let petSalon ={
    companyName:"Cool Pets",
    phone:"123-456-7890",
    address:{
        state:"California",
        city:"Los Angeles",
        street:"Del Amo",
        zip:"90505"
    },
    pets:[
        {
           name: "Rex",
           age: 10,
           gender: "Male",
           breed: "Akia",
           service: "Grooming",
           owner: "Dustin",
           phone: "123-456-7890",
           color: "black",

        },
        {
            name: "Vic",
            age: 3,
            gender: "Female",
            breed: "Pig",
            service: "Polish",
            owner: "Charlotte",
            phone: "123-456-7890",
        },
        {
            name: "Simba",
            age: 20,
            gender: "Male",
            breed: "Lion",
            service: "Teeth Sharping",
            owner: "Walt",
            phone: "123-456-7890",
        },
        {
            name: "Po",
            age: 25,
            gender: "Female",
            breed: "Panda",
            service: "Diet Plan",
            owner: "Tang",
            phone: "123-456-7890",
        }
    ]
}

console.log(petSalon.pets);
console.log(petSalon.address.street);


function displaySalonInfo(){
document.getElementById("info").innerHTML =`<p>${petSalon.companyName} is located ${petSalon.address.city} ${petSalon.address.state}</p>`;
}




for(let i=0; i<petSalon.pets.length; i++) 
{console.log(petSalon.pets[i].name);}



alert(petSalon.pets.length);




displaySalonInfo();








