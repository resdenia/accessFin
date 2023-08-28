import React, {
    memo,
    useCallback,
    useContext,
} from 'react';
import { UserContext } from '../../context/user/userContext';
import cls from './UserDisplay.module.css';
import Card from '../../components/Card/Card';
import { formatDate } from '../../utils/formatDate';
const UserDisplay = () => {
    const { user } = useContext(UserContext);
    console.log(user);
    return (
        <div className={cls.UserDisplay}>
            {user && (
                <Card thumbnail={user.avavar}>
                    <div className={cls.userName}>
                        <h3>{user.name}</h3>
                        <p>
                            Date of Birth:{' '}
                            {formatDate(user.dob)}
                        </p>
                    </div>
                </Card>
            )}
        </div>
    );
};

export default UserDisplay;
