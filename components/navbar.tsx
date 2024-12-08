import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  return (
    <header className="bg-gray-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          MGIDLA S. SCHOOL
        </Link>
        <div className="flex space-x-4">
          <Link href="/register" className="hover:text-violet-500">
            Register
          </Link>
          <Link href="/myhub" className="hover:text-violet-500">
            Sign in
          </Link>
          <Link href="/contact" className="hover:text-violet-500">
            Help
          </Link>
        </div>
      </div>
      <nav className="bg-gray-800 mt-4">
        <ul className="flex justify-center space-x-4 p-4">
          <li>
            <Link href="/" className="hover:text-violet-500">
              Home
            </Link>
          </li>
          <li className="relative group">
            <span className="hover:text-violet-500 cursor-pointer">
              About Us
            </span>
            <div className="absolute left-0 mt-2 w-48 bg-gray-800 text-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out">
              <ul className="py-2 shadow-lg">
                <li className="px-4 py-2 hover:bg-gray-700">
                  <Link href="/ourteam" className="block hover:text-violet-500">
                    Our Team
                  </Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-700">
                  <Link href="/ourmission" className="block hover:text-violet-500">
                    Our Mission
                  </Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-700">
                  <Link href="/history" className="block hover:text-violet-500">
                    History
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Link href="/admissions" className="hover:text-violet-500">
              Admissions
            </Link>
          </li>
          <li className="relative group">
            <span className="hover:text-violet-500 cursor-pointer">
              Resources
            </span>
            <div className="absolute left-0 mt-2 w-48 bg-gray-800 text-white opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out">
              <ul className="py-2 shadow-lg">
                <li className="px-4 py-2 hover:bg-gray-700">
                  <Link href="/resources" className="block hover:text-violet-500">
                    Gr. 12 Resources
                  </Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-700">
                  <Link href="/nsc" className="block hover:text-violet-500">
                    NSC Pass Levels
                  </Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-700">
                  <Link href="/applications" className="block hover:text-violet-500">
                    Tertiary Applications
                  </Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-700">
                  <Link href="/bursaries" className="block hover:text-violet-500">
                    Bursaries & Funding
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Link href="/myhub" className="hover:text-violet-500">
              MyHub
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-violet-500">
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}