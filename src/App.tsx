/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
import React, {
    Suspense,
    useContext,
    useEffect,
} from 'react';
import {
    BrowserRouter,
    Route,
    Routes,
} from 'react-router-dom';
import { HomePageAsync } from './pages/Home/Home.async';
import NotFound from './pages/NotFound';
import { UserContext } from './context/user/userContext';

function App() {
    const { getUsers } = useContext(UserContext);

    useEffect(() => {
        getUsers();
    }, []);
    return (
        <Suspense fallback={<div>loading</div>}>
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={<HomePageAsync />}
                    />
                    <Route
                        path="/*"
                        element={<NotFound />}
                    />
                </Routes>
            </BrowserRouter>
        </Suspense>
    );
}

export default App;
