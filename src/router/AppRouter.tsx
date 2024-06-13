import {routesConfig} from "./routerConfig.tsx";
import {Route, Routes} from "react-router-dom";
import {PrivateRoute} from "./PrivateRoute.tsx";

const AppRouter = () => {


    return (
        <Routes>
            {routesConfig.map(route => {
                if (route.private) {
                    return <Route key={route.path} path={route.path} element={
                        <PrivateRoute>
                            {route.element}
                        </PrivateRoute>
                    }/>
                } else {
                    return <Route key={route.path} path={route.path} element={route.element}/>
                }
            })}
        </Routes>
    );
};

export default AppRouter;