/* eslint-disable no-console */
const getEmployerRole = (employeeName, employees) => {
  const ansName = employees.filter(employee => employee.name === employeeName);
  return ansName[0].role    
};
module.exports = getEmployerRole;
