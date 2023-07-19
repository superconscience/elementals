import { RACE_SPEED_UNIT } from '../constants';

export function formatRaceSpeed(speed: number): string {
  return `${speed} ${RACE_SPEED_UNIT}`;
}
