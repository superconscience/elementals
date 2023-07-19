import { useState, useEffect } from 'react';
import { User } from '../types/user';
import { sleep } from '../utils/sleep';
import { faker } from '@faker-js/faker';
import { createRandomUser } from '../utils/createRandomUser';

export const USERS_PER_LOAD = 50;
export const FAKE_LOADING_TIME = 1500;

export function useFetchUsers() {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState<User[]>([]);

  async function loadUsers() {
    setIsLoading(true);
    await sleep(FAKE_LOADING_TIME);
    const newUsers = faker.helpers.multiple(createRandomUser, {
      count: USERS_PER_LOAD,
    });
    setUsers((users) => [...users, ...newUsers]);
    setIsLoading(false);
  }

  useEffect(() => {
    loadUsers();
  }, []);
  return { users, loadUsers, isLoading };
}
