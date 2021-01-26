var person1 = {
    name : "Abe",
    acNo : 0001,
    balance: 2000
}

var person2 = {
    name : "Kebe",
    acNo : 0002,
    balance: 1000
}


function deposit(){
    let acName = prompt("Enter ur name: ");
    let acNum = parseInt(prompt("Enter ur account number: "));
    
    if (acName==person1.name && acNum==person1.acNo){
        alert("Hello "+person1.name);
        let mon = parseFloat(prompt("Enter how much u want to deposit: ")) 
        let newmon = person1.balance+=mon;
        alert("You have now "+ newmon);
    } else if (acName==person2.name && acNum==person2.acNo){
        alert("Hello "+person2.name);
        let mon = parseFloat(prompt("Enter how much u want to deposit: ")) 
        let newmon = person2.balance+=mon;
        alert("You have now "+ newmon);
    }else{
        alert("Error")
    }
}

// while(true){
//     (function(){
//         var choice = parseInt(prompt("1 for deposit.\n 2 for withdraw. \n 3 for balance. \n 4 for transfer."))
//         if(choice == 1){
//             deposit();
//         }else if(choice == 2){
//             withdraw()
//         }else if(choice == 3){
//             balance()
//         }else if(choice == 4){
//             transfer()
//         }else{
//             alert("You chose inappropriately.")
//         }
        
//     })()
// }



deposit();

