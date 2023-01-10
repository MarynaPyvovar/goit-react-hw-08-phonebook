import { Suspense } from "react";
import { Outlet } from 'react-router-dom';

import { MainPage } from "../MainPage/MainPage";
import { LoaderRoute } from "../Loader/Loader";
import { UserMenu } from "../UserMenu/UserMenu";

export const Layout = () => {
    return <div style={{ padding: "0 25px"}}>
        <UserMenu />
        <MainPage />
        <Suspense fallback={<LoaderRoute />}>
            <Outlet />
        </Suspense>
    </div>
}