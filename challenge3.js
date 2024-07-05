// Calculate the tax payee
function calculatePAYE(grossSalary) {
  let paye = 0;
  if (grossSalary <= 24000) {
      paye = grossSalary * 0.1;
  } else if(grossSalary <=32333){
      paye = 2400 + (grossSalary - 24000) * 0.25;
  }else {
      paye = 2400 + 2083.25 + (grossSalary - 32333) * 0.3;
  }

  return paye;
     
}
  

//Calculate NHIF Deductions
  function calculateNHIF(grossSalary) {
    
  
    if (grossSalary >= 5999) {
      nhif = 150;
    }else if (grossSalary <= 7999) {
      nhif = 300; 
    } else if (grossSalary <= 11999) {
      nhif = 400;
    } else if (grossSalary <= 14999) {
      nhif = 500;
    } else if (grossSalary <= 19999) {
      nhif = 600;
    } else if (grossSalary <= 24999) {
      nhif = 750;
    } else if (grossSalary <= 29999) {
      nhif = 850;
    } else if (grossSalary <= 34999) {
      nhif = 900;
    } else if (grossSalary <= 39999) {
      nhif = 950;
    } else if (grossSalary <= 44999) {
      nhif = 1000;
    } else if (grossSalary <= 49999) {
      nhif = 1100;
    } else if (grossSalary <= 59999) {
      nhif = 1200;
    } else if (grossSalary <= 69999) {
      nhif = 1300;
    } else if (grossSalary <= 79999) {
      nhif = 1400;
    } else if (grossSalary <= 89999) {
      nhif = 1500;
    } else if (grossSalary <= 99999) {
      nhif = 1600;
    } else {
      nhif = 1700;

    }
      
      return nhif;  
  } 

// Calculate the NSSF Deductions
  function calculateNSSF(grossSalary) {
//Assuming the grosssalary is 6%
    return grossSalary * 0.06; 
  }

     
//Calculate Net Salary
function calculateNetSalary(basicSalary, benefits ) {
  let grossSalary = basicSalary + benefits;
  let paye = calculatePAYE(grossSalary);
  let nhif = calculateNHIF(grossSalary);
  let nssf = calculateNSSF(grossSalary);
  let netSalary = grossSalary - paye - nhif - nssf;

  return netSalary;
}

 console.log(calculateNetSalary(50000, 7000)); 