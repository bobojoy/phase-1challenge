function calculateNetSalary(basicSalary, benefits) {
    // Calculate the gross salary
    const grossSalary = basicSalary + benefits;
    // Calculate the tax payee
  let taxPayee = 0;
  if (grossSalary <= 24000) {
    taxPayee = basicSalary * TaxRate;
  } else {
    taxPayee = 24000 * TaxRate + (grossSalary - 24000) * higherTaxRate;
  }
  // Calculate the NHIF deduction
  let nhifDeduction = 0;
  if (grossSalary >= 5999) {
    if (grossSalary <= 7999) {
      nhifDeduction = nhifRate * 150;
    } else if (grossSalary <= 11999) {
      nhifDeduction = nhifRate * 300;
    } else if (grossSalary <= 14999) {
      nhifDeduction = nhifRate * 400;
    } else if (grossSalary <= 19999) {
      nhifDeduction = nhifRate * 500;
    } else if (grossSalary <= 24999) {
      nhifDeduction = nhifRate * 600;
    } else if (grossSalary <= 29999) {
      nhifDeduction = nhifRate * 750;
    } else if (grossSalary <= 34999) {
      nhifDeduction = nhifRate * 850;
    } else if (grossSalary <= 39999) {
      nhifDeduction = nhifRate * 950;
    } else if (grossSalary <= 44999) {
      nhifDeduction = nhifRate * 1050;
    } else if (grossSalary <= 49999) {
      nhifDeduction = nhifRate * 1150;
    } else if (grossSalary <= 59999) {
      nhifDeduction = nhifRate * 1200;
    } else if (grossSalary <= 69999) {
      nhifDeduction = nhifRate * 1300;
    } else if (grossSalary <= 79999) {
      nhifDeduction = nhifRate * 1400;
    } else if (grossSalary <= 89999) {
      nhifDeduction = nhifRate * 1500;
    } else if (grossSalary <= 99999) {
      nhifDeduction = nhifRate * 1600;
    } else if (grossSalary <= 100000) {
      nhifDeduction = nhifRate * 1700;
    } else {
      nhifDeduction = nhifRate * 1800;
    }
  }

  // Calculate the NSSF deduction
  const nssfDeduction = grossSalary * nssfRate;

  // Calculate the net salary
  const netSalary = grossSalary - taxPayee - nhifDeduction
}