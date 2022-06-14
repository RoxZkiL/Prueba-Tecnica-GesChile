const dataBase = require("../Database/regalos.json");

const idGroups = (dataBase) => {
  const allGroupsArray = [];
  for (let i = 0; i < dataBase.length; i++) {
    let currentGifter = dataBase[i].gifter;
    let currentGifted = dataBase[i].gifted;
    let GroupArray = [currentGifter, currentGifted];

    for (let j = 0; j < dataBase.length; j++) {
      if (currentGifter === dataBase[j].gifter)
        GroupArray.push(dataBase[j].gifted);
      if (currentGifted === dataBase[j].gifted)
        GroupArray.push(dataBase[j].gifter);
      if (currentGifter === dataBase[j].gifted)
        GroupArray.push(dataBase[j].gifter);
      if (currentGifted === dataBase[j].gifter)
        GroupArray.push(dataBase[j].gifted);
    }
    GroupArray.sort((n1, n2) => n1 - n2);
    const filt = [...new Set(GroupArray)];
    allGroupsArray.push(filt);
  }
  const splitArray = (bd) => {
    let contains = false;
    for (let i = 0; i < bd.length; i++) {
      for (let j = i + 1; j < bd.length; j++) {
        let aux = bd[i];
        let aux2 = bd[j];
        for (let k = 0; k < aux.length; k++) {
          for (let h = 0; h < aux2.length; h++) {
            if (aux[k] === aux2[h]) contains = true;
          }
        }
        if (contains) {
          bd[i] = [...bd[i], ...bd[j]];
          bd[j] = [];
          contains = false;
        }
      }
    }
    return bd
      .filter((bd) => bd.length > 0)
      .map((bd) => [...new Set(bd)].sort((n1, n2) => n1 - n2));
  };

  return splitArray(splitArray(allGroupsArray));
};

console.log(idGroups(dataBase));
