import { Outlet, useLoaderData, useNavigation, useSubmit } from "react-router-dom";
import MainNavigation from "../components/Navigation/MainNavigation";
import { useEffect } from "react";
import { getTokenDuration } from "../util/auth";

const RootLayout = (props) => {
    const navigation = useNavigation();
    // const token = useLoaderData();
    // const submit = useSubmit();

    // useEffect(() => {
    //     if (!token) {
    //         return;
    //     }
    //     if (token === 'EXPIRED') {
    //         submit(null, {action:'/logout', method: 'post'});
    //         return;
    //     }
    //     const tokenDuration = getTokenDuration();
    //     setTimeout(() => {
    //         submit(null, {action:'/logout', method: 'post'});
    //     }, tokenDuration);
    // }, [token, submit]);
    return (
        <>
            {navigation.state === 'loading' && <p>Loading by route...</p>}
            <MainNavigation />
            <Outlet />
        </>
    );
}

export default RootLayout;