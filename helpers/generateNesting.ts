import _ from "lodash";

function getNestingLevels(
  list: any[],
  previousLevelIds: any[] = [null],
  parentKey = "parentId"
): any[] {
  let result: any[] = [];
  let level: any[] = [];
  for (let i = 0; i < list.length; i++) {
    const el = list[i];
    if (previousLevelIds.includes(el[parentKey])) {
      level.push(list.splice(i--, 1)[0]);
    }
  }
  if (level.length === 0) {
    return result;
  }
  result.push(level);
  if (list.length !== 0) {
    let nestedLevel = getNestingLevels(
      list,
      level.map((el) => el.id),
      parentKey
    );
    result.push(...nestedLevel);
  }

  return result;
}

export default function generateNesting(
  list: any[],
  nestingKey = "list",
  parentKey = "parentId"
): any[] {
  let listClone = _.cloneDeep(list);
  for (let i = 0; i < listClone.length; i++) {
    const element = listClone[i];
    element[nestingKey] = [];
    element.nestedElementIds = [];
  }
  let nestingLevels = getNestingLevels(listClone);

  for (let i = nestingLevels.length - 2; i >= 0; i--) {
    const level = nestingLevels[i];
    const prevLevel = nestingLevels[i + 1];
    for (let elIdx = 0; elIdx < level.length; elIdx++) {
      const el = level[elIdx];
      for (let prevElIdx = 0; prevElIdx < prevLevel.length; prevElIdx++) {
        const prevEl = prevLevel[prevElIdx];
        if (prevEl[parentKey] === el.id) {
          el.nestedElementIds.push(prevEl.id, ...prevEl.nestedElementIds);
          el[nestingKey].push(prevLevel.splice(prevElIdx--, 1)[0]);
        }
      }
    }
  }  

  return nestingLevels[0];
}
