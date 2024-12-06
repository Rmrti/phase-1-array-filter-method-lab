// Code your solution here
function findMatching(source, sought) {
    return source.filter((possibleMatch) => {
      return possibleMatch.toLowerCase() === sought.toLowerCase();
    });
  }
  
  function fuzzyMatch(source, testString) {
    return source.filter((possibleMatch) => {
      return possibleMatch.toLowerCase().startsWith(testString.toLowerCase());
    });
  }
  
  function matchName(source, soughtName) {
    return source.filter((record) => {
      return record.name === soughtName;
    });
  }
  
