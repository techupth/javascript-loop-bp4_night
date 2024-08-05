// Exercise #6: Reverse the String
let companyName = "TechUp Thailand";
let reversedCompanyName = "";

// Start coding here
for(let i = 0; i < companyName.length ; i = i+1){
    reversedCompanyName = companyName[i] + reversedCompanyName ;
}

console.log(reversedCompanyName);
