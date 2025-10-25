'use client';

import Link from 'next/link';

export default function Sidebar() {

  return (
    <aside className="w-64 hidden md:flex flex-col border-r border-gray-200 bg-white">
        {/* Navegação */}
        <nav className="flex-1 px-4 py-6 space-y-2">
          <Link
            href="/dashboard"
            className="block px-3 py-2 rounded-md bg-blue-600 text-white font-medium"
          >
            Dashboard
          </Link>

          <Link
            href="/campaigns"
            className="block px-3 py-2 rounded-md hover:bg-gray-100"
          >
            Vendas
          </Link>

          <Link
            href="/campaigns/create"
            className="block px-3 py-2 rounded-md hover:bg-gray-100"
          >
            Compras
          </Link>

        </nav>

        {/* Rodapé */}
        <div className="border-t border-gray-200 p-4 text-sm text-gray-500">
          © {new Date().getFullYear()} HubShop
        </div>
      </aside>
  );
}
