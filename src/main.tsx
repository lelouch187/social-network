import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.scss'
import {BrowserRouter} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "react-query";
import UserContext from "./context/userContext.tsx";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <UserContext>
            <QueryClientProvider client={queryClient}>
                <App/>
            </QueryClientProvider>
        </UserContext>
    </BrowserRouter>
)
