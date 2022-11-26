const employee = {
    name: "joe",
    streetAddress: "123 main",
  };
  
  function updateEmployeeWithKeyAndValue(employeeObj, key, value2) {

const copyOfEmployee = {...employeeObj}
copyOfEmployee[key] = value2
return copyOfEmployee
  }


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value2) {

employee[key] = value2;
  return employee;
}

function deleteFromEmployeeByKey(employeeObj, key, value2) {

  const copyOfEmployee = {...employeeObj}
copyOfEmployee[key] = value2
return copyOfEmployee
  }

  delete copyOfEmployee.value2


  function destructivelyDeleteFromEmployeeByKey(employee, key, value2) {
    employee[key] = value2;
    return employee;
  }

  delete employee.key;
  
