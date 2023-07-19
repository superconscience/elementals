import { forwardRef, memo } from 'react';
import { User } from '../../types/user';
import { Avatar } from '../avatar';
import cn from 'classnames';
import styles from './users-table.module.scss';
import { formatRaceTime } from '../../utils/formatRaceTime';
import { formatRaceSpeed } from '../../utils/formatRaceSpeed';

export interface IProps {
  user: User;
  rank: number;
}

export const TableRow = memo(
  forwardRef<HTMLDivElement | null, IProps>(({ user, rank }, ref) => {
    const { name, color, speed, time } = user;
    return (
      <div ref={ref} className={styles.tableRow} role="row">
        <div className={cn(styles.rank, styles.tableCell)} role="cell">
          {rank}
        </div>
        <div className={cn(styles.avatar, styles.tableCell)} role="cell">
          <Avatar color={color} />
        </div>
        <div className={cn(styles.info, styles.tableCell)} role="cell">
          <h3 className={cn(styles.name)}>
            {name} {name}
          </h3>
          <div className={cn(styles.stats)}>
            <span className={styles.textViolet}>{formatRaceTime(time)}</span>
            <div className={styles.separator}></div>
            <span className={styles.textBlue}>{formatRaceSpeed(speed)}</span>
          </div>
        </div>
      </div>
    );
  })
);
