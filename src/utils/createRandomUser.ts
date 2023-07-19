import { faker } from '@faker-js/faker';
import { Color } from '../types/color';
import { User } from '../types/user';
import { randomEnumValue } from './randomEnumValue';

// Time in milliseconds
export const MIN_RACE_TIME = 1000;
export const MAX_RACE_TIME = 24 * 3600 * 1000;

// Speed in km/h
export const MIN_RACE_SPEED = 60;
export const MAX_RACE_SPEED = 200;

export function createRandomUser(): User {
  return {
    name: faker.person.fullName(),
    color: randomEnumValue(Color),
    time: faker.number.int({ min: 1000, max: MAX_RACE_TIME }),
    speed: faker.number.int({ min: 60, max: 200 }),
  };
}
