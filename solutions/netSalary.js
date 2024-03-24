//the sallary 
function salaryCalculator(basicSalary, allowances){
    const taxRate =0.25;
    const nhifRate =0.53;
    const nssfRate =0.06;

    
    const grossSalary =basicSalary +allowances;
    const nssfDeduction =grossSalary * nssfRate;
    const nhifDeduction =grossSalary * nhifRate;
    
    // const basicSalary =grossSalary - nssfDeduction -nhifDeduction -taxRate;

    const paye =Math.max(grossSalary - nhifDeduction -nssfDeduction) * taxRate;
     const netSalary =grossSalary - nhifDeduction - nssfDeduction - paye;

     //to print out output of the salary
     console.log(`NSSF deduction is; $[nssfDeductions]`);
     console.log(`NHIF deductions: ${nhifDeduction}`);
     console.log(`PAYE ; ${paye}`);
     console.log(`NET SALARY: ${netSalary}`);
     console.log(`GROSS SALARY: ${grossSalary}`);

}
console.log(salaryCalculator(84000, 50000));   

