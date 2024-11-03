import { useAuth0 } from '@auth0/auth0-react';

const LogOut = () => {
    const { logout, isAuthenticated } = useAuth0();

    return (
        isAuthenticated && (
            <button onClick={() => logout({ logoutParams: {returnTo: window.location.origin}})}>Log out</button>
        )

    )

};

export default LogOut;