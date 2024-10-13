"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  HomeIcon,
  CurrencyDollarIcon,
  ChartBarIcon,
  CogIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";

const navItems = [
  { name: "Dashboard", href: "/dashboard", icon: HomeIcon },
  { name: "Savings", href: "/dashboard/savings", icon: CurrencyDollarIcon },
  { name: "Goals", href: "/dashboard/goals", icon: ChartBarIcon },
  { name: "Settings", href: "/dashboard/settings", icon: CogIcon },
  { name: "Help", href: "/dashboard/help", icon: QuestionMarkCircleIcon },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="flex flex-col h-full bg-gray-900 text-white w-64">
      <div className="flex items-center justify-center h-20 bg-gray-800">
        <h1 className="text-2xl font-bold">Futureproof</h1>
      </div>
      <nav className="flex-grow mt-5">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link href={item.href}>
                <span
                  className={`flex items-center px-6 py-3 text-gray-300 hover:bg-gray-800 hover:text-white transition-all duration-200 ${
                    pathname === item.href
                      ? "bg-gray-800 text-white border-l-4 border-blue-500"
                      : ""
                  }`}
                >
                  <item.icon className="h-5 w-5 mr-3" />
                  {item.name}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="p-4 border-t border-gray-700">
        <p className="text-sm text-gray-400">
          © 2023 Futureproof. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Sidebar;
