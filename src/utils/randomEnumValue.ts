export function randomEnumValue<T extends object>(anEnum: T): number {
  const enumValues = Object.keys(anEnum) as unknown as T[keyof T][];
  const randomIndex = Math.floor((Math.random() * enumValues.length) / 2);
  return Number(enumValues[randomIndex]);
}
