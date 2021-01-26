var person1 = {
    name : "Abe",
    acNo : 0001,
    balance: 90
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
    } 
    else if (acName==person2.name && acNum==person2.acNo){
        alert("Hello "+person2.name);
        let mon = parseFloat(prompt("Enter how much u want to deposit: ")) 
        let newmon = person2.balance+=mon;
        alert("You have now "+ newmon);
    }else{
        alert("Error")
    }
}

function withdraw(){
    let acName = prompt("Enter ur name: ");
    let acNum = parseInt(prompt("Enter ur account number: "));
    
    if (acName==person1.name && acNum==person1.acNo){
        if (person1.balance>=100){
            alert("Hello "+person1.name);
            let mon = parseFloat(prompt("Enter how much u want to withdraw: ")) 
            let newmon = person1.balance-=mon;
            alert("You have now "+ newmon);
        }else{
            alert("You cant withdraw. Low amount")
        }
        
    } else if (acName==person2.name && acNum==person2.acNo){
        if (person2.balance>=100){
            alert("Hello "+person2.name);
            let mon = parseFloat(prompt("Enter how much u want to withdraw: ")) 
            let newmon = person2.balance-=mon;
            alert("You have now "+ newmon);
        }else{
            alert("You cant withdraw. Low amount")
        }
    }else{
        alert("Error")
    }
}

function balance(){
    let acName = prompt("Enter ur name: ");
    let acNum = parseInt(prompt("Enter ur account number: "));
    
    if (acName==person1.name && acNum==person1.acNo){
        alert("Hello "+person1.name);
        alert("You have now "+ person1.balance);
    } else if (acName==person2.name && acNum==person2.acNo){
        alert("Hello "+person2.name);
        alert("You have now "+ person2.balance);
    }else{
        alert("Error")
    }
}

function transfer(){
    let acName = prompt("Enter ur name: ");
    let acNum = parseInt(prompt("Enter ur account number: "));
    
    if (acName==person1.name && acNum==person1.acNo){
        alert("Hello "+person1.name);
        let mon = parseFloat(prompt("Enter how much do u want to transfer: ")) 
        alert("You have transferred "+ mon + " to " + person2.name);
        person1.balance-=mon;
        person2.balance+=mon;
    } else if (acName==person2.name && acNum==person2.acNo){
        alert("Hello "+person2.name);
        let mon = parseFloat(prompt("Enter how much do u want to transfer: ")) 
        alert("You have transferred "+ mon + " to " + person1.name);
        person2.balance-=mon;
        person1.balance+=mon;
    }else{
        alert("Error")
    }
}
var x = 0;
while(x==0){
    (function(){
        var choice = parseInt(prompt("1 for deposit.\n 2 for withdraw. \n 3 for balance. \n 4 for transfer. \n 5 for Exit"))
        if(choice == 1){
            deposit();
        }else if(choice == 2){
            withdraw()
        }else if(choice == 3){
            balance()
        }else if(choice == 4){
            transfer()
        }else if(choice == 5){
            x=1;
        }
        else{
            alert("You chose inappropriately.")
        }
        
    })()
}




