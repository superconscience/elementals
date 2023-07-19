import { FC } from 'react';

export const Loader: FC = () => {
  return (
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
  );
};
