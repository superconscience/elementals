import { faker } from '@faker-js/faker';
import { Color } from '../types/color';
import { User } from '../types/user';
import { randomEnumValue } from './randomEnumValue';

export function createRandomUser(): User {
  return {
    name: faker.person.fullName(),
    color: randomEnumValue(Color),
    time: faker.number.int({ min: 1, max: 3600000 }),
    speed: faker.number.int({ min: 1, max: 1000000 }),
  };
}
