export const getRandomArrayIndex = (array: any[]): number => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return randomIndex;
};

/**
 * Get a random property from an object
 * @param obj - (Required) The object to get a random property from
 * @param key - (Optional) The key of the property we want to get
 * @returns The value of the random property or the value of the property with the key
 */
export const getRandomObjectProperty = (obj: any, key?: string): any => {
  let objectKeys: string[] = Object.keys(obj);
  if (key) {
    const value = obj[objectKeys[getRandomArrayIndex(objectKeys)]];
    return value[key];
  } else {
    return obj[objectKeys[getRandomArrayIndex(objectKeys)]];
  }
};

export const getRandomNumber = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};