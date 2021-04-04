import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS, LOGIN_LINK, SIGNUP_LINK } from "@utils/siteConfig";
import logo from "@images/logo.webp";

export default function Nav() {
  return (
    <nav className="bg-black opacity-95 py-2 shadow-lg relative z-100">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex justify-start sm:items-stretch">
            <div>
              <Link href="/">
                <a href="/">
                  <Image src={logo} alt="site logo" width={138} height={50} />
                </a>
              </Link>
            </div>

            <div className="hidden lg:block sm:ml-6">
              <div className="flex space-x-4 pt-2">
                {NAV_LINKS.map((link, index) => {
                  return (
                    <Link key={`nav-link${index}`} href={link.route}>
                      <a
                        href={link.route}
                        className="text-white hover:bg-primary hover:text-black px-3 py-2 rounded-md text-sm font-medium"
                      >
                        {link.name}
                      </a>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="flex-shrink-0">
              <Link href={LOGIN_LINK}>
                <a
                  href={LOGIN_LINK}
                  className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-primary relative -top-1"
                >
                  Login
                </a>
              </Link>
              <Link href={SIGNUP_LINK}>
                <a href={SIGNUP_LINK} className="ml-8">
                  <button
                    type="button"
                    className="ml-4 relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-primary"
                  >
                    <svg
                      className="-ml-1 mr-2 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                    <span>Signup</span>
                  </button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
