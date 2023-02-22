import { Suspense } from "react";
import { Outlet } from 'react-router-dom';

import { LoaderRoute } from "../Loader/Loader";
import { UserMenu } from "../UserMenu/UserMenu";

export const Layout = () => {
    return <div style={{ padding: "0 25px"}}>
        <UserMenu />
        <Suspense fallback={<LoaderRoute />}>
            <Outlet />
        </Suspense>
    </div>
}