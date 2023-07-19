import { FC, useCallback, useRef } from 'react';
import { User } from '../../types/user';
import { TableRow } from './table-row';
export interface IProps {
  data: User[];
  loadMore: () => void;
  isLoading: boolean;
}

export const TableBody: FC<IProps> = ({ data, loadMore, isLoading }) => {
  const observer = useRef<IntersectionObserver>();
  const lastUserElementRef = useCallback(
    (node: Element | null) => {
      if (isLoading) {
        return;
      }
      if (observer.current) {
        observer.current.disconnect();
      }
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          loadMore();
        }
      });
      if (node) {
        observer.current.observe(node);
      }
    },
    [loadMore, isLoading]
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
      {isLoading && (
        <div
          style={{
            height: '100px',
            textAlign: 'center',
            fontSize: '30px',
            width: '100%',
            maxWidth: '100%',
          }}
        >
          {'Loading...'}
        </div>
      )}
    </>
  );
};
