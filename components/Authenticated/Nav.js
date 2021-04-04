import { useAuth } from "@context/authContext";
export default function Nav() {
  const { logout, user } = useAuth();
  return (
    <div className="w-full bg-white shadow-lg flex justify-between p-6 items-center">
      <h1 className="text-lg">
        Welcome Back, <span>{user?.name}</span>
      </h1>
      <button
        onClick={logout}
        className="border-2 px-4 py-2 rounded bg-primary text-white font-semibold cursor-pointer"
      >
        Logout
      </button>
    </div>
  );
}
