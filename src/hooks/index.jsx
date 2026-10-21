import { UserProvider } from "./UserContent"
import { CartProvider } from './CartContent'

const AppProvider = ({ children }) => {
    return (
        <UserProvider>
            <CartProvider>{children}</CartProvider>
        </UserProvider>
    );
};


export default AppProvider;