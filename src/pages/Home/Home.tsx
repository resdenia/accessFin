import React from 'react';
import cls from './Home.module.css';
import UserDisplay from '../../containers/UserDisplay/UserDisplay';
import UserSelect from '../../containers/UserSelect/UserSelect';

const Home = () => (
    <div className={cls.PageWrapper}>
        <UserSelect />
        <UserDisplay />
    </div>
);

export default Home;
