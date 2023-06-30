import Users from "../components/Customers/Users";

const DUMMY_USERS = [
    { id: 'u1', name: 'Max' },
    { id: 'u2', name: 'Manuel' },
    { id: 'u3', name: 'Julie' }
  ]

const UsersPage = () => {
    return (
        <div>
            <Users users={DUMMY_USERS}/>
        </div>
    );
};
export default UsersPage;