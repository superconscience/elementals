import { faker } from '@faker-js/faker';
import { Color } from '../types/color';
import { User } from '../types/user';
import { randomEnumValue } from './randomEnumValue';
import { MAX_RACE_SPEED, MAX_RACE_TIME, MIN_RACE_SPEED, MIN_RACE_TIME } from '../constants';

export function createRandomUser(): User {
  return {
    name: faker.person.fullName(),
    color: randomEnumValue(Color),
    time: faker.number.int({ min: MIN_RACE_TIME, max: MAX_RACE_TIME }),
    speed: faker.number.int({ min: MIN_RACE_SPEED, max: MAX_RACE_SPEED }),
  };
}
