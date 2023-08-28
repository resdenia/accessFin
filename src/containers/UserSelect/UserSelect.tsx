import React, {
    memo,
    useContext,
    useEffect,
    useState,
} from 'react';
import cls from './UserSelect.module.css';
import Dropdown from '../../components/Dropdown/Dropdown';
import { UserContext } from '../../context/user/userContext';
import { IUser } from '../../context/user/userProvider';

export type Option = {
    name: string;
    value: string;
};
const UserSelect = () => {
    const [options, setOptions] = useState<Option[]>([]);

    const { setUser, users } = useContext(UserContext);

    useEffect(() => {
        const options = users.map((user: IUser) => {
            return { name: user.name, value: user.id };
        });
        setOptions([...options]);
    }, [users]);

    const onSetUser = (id: string) => {
        setUser(id);
    };

    return (
        <div className={cls.UserSelect}>
            <Dropdown
                onChangeSelect={onSetUser}
                options={options}
            />
        </div>
    );
};

export default UserSelect;
