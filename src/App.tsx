import { FC } from 'react';
import { UsersTable } from './components/users-table/users-table';

export const App: FC = () => {
  return (
    <div className="App">
      <UsersTable />
    </div>
  );
};
