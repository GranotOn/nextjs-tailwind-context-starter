import { useAuth } from "@context/authContext";
import { useRouter } from "next/router";

export default function Login() {
  const { login, isAuthenticated } = useAuth();
  const router = useRouter();

  const redirect = () => router.push("/");

  const handleLogin = async () => {
    if (isAuthenticated) {
      redirect();
    }

    try {
      const res = login("Bob", "123123123");
      redirect();
    } catch (error) {
      // handle error from api
      console.log(error);
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <button
        onClick={handleLogin}
        className="border-2 py-2 px-8 rounded-lg shadow-lg bg-gray-400 hover:bg-green-600 text-white font-semibold"
      >
        Login
      </button>
    </div>
  );
}
