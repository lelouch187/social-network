import {Suspense} from "react";
import AppRouter from "./router/AppRouter.tsx";

function App() {
    return (
        <Suspense fallback={<h1>Идет загрузка...</h1>}>
            <AppRouter />
        </Suspense>
    )
}

export default App
