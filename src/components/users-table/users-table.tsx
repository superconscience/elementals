import { FC } from 'react';
import useFetchUsers from '../../hooks/useFetchUsers';
import { TableBody } from './table-body';
import styles from './users-table.module.scss';

export const UsersTable: FC = () => {
  const { users, loadUsers, isLoading } = useFetchUsers();

  return (
    <div
      className={styles.tableContainer}
      role="table"
      aria-label="Table of Users"
    >
      <div className={styles.tableBody} role="rowgroup">
        <TableBody data={users} loadMore={loadUsers} isLoading={isLoading} />
      </div>
    </div>
  );
};
