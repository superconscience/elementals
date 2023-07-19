import useFetchUsers from './hooks/useFetchUsers';

export const App = () => {
  const { users, loadUsers, isLoading } = useFetchUsers();
  console.log(users);

  return <div style={{ background: '#000000', height: 200 }}></div>;
};
