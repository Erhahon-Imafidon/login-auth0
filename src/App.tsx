import LoginButton from "./components/LoginButton.tsx";
import LogoutButton from "./components/Logout.tsx";
import Profile from "./components/Profile.tsx";

const App = () => {
  return (
    <div className='flex flex-1 flex-col h-screen justify-center items-center'>
        <h1 className='text-3xl font-bold text-amber-400'>Auth0 Login</h1>
        <LoginButton />
        <LogoutButton />
        <Profile />
    </div>
  )
}

export default App