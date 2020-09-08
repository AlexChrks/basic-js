module.exports = function createDreamTeam(members) {

  let teamName = '';

  if (!Array.isArray(members)) {
    return false;
  }

  for (let item of members) {

    if (typeof item != "string") {
      continue;
    }

    item = item.trim();

    teamName += item[0];
  }

  return teamName.toUpperCase().split('').sort().join('');
}