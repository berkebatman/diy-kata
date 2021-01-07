const joinNames = namesObj => {
  let ans = []; 
  for (let name of namesObj) {
    ans.push(name.name);
  }
  const lastName = ans.pop();

  return ans.join(', ') + ' &' + ` ${lastName}`;
  
};

module.exports = joinNames;
