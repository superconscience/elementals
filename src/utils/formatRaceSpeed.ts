export const RACE_SPEED_UNIT = 'km/h';

export function formatRaceSpeed(speed: number): string {
  return `${speed} ${RACE_SPEED_UNIT}`
}