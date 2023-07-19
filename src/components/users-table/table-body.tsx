import { FC } from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { User } from '../../types/user';
import { Loader } from './loader';
import { TableRow } from './table-row';

export interface IProps {
  data: User[];
  loadMore: () => void;
  isLoading: boolean;
}

export const TableBody: FC<IProps> = ({ data, loadMore, isLoading }) => {
  const { ref: lastUserElementRef } = useIntersectionObserver(
    loadMore,
    isLoading
  );

  return (
    <>
      {data.map((user, idx) => {
        const rank = idx + 1;
        if (data.length === rank) {
          return (
            <TableRow
              key={JSON.stringify(user) + rank}
              ref={lastUserElementRef}
              user={user}
              rank={rank}
            />
          );
        }
        return (
          <TableRow key={JSON.stringify(user) + rank} user={user} rank={rank} />
        );
      })}
      {isLoading && <Loader />}
    </>
  );
};
