"use client";

const mockSales = [
  {
    id: 1,
    customer: "John Doe",
    date: "2025-10-25",
    total: 1299.99,
  },
  {
    id: 2,
    customer: "Jane Smith",
    date: "2025-10-24",
    total: 749.5,
  },
  {
    id: 3,
    customer: "Carlos Silva",
    date: "2025-10-20",
    total: 2150,
  },
];

export default function SalesPage() {
  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Sales</h1>
        <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors">
          + New Sale
        </button>
      </div>

      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50 text-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium">#</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Customer</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Date</th>
              <th className="px-6 py-3 text-right text-sm font-medium">Total</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {mockSales.map(sale => (
              <tr key={sale.id} className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-6 py-4 text-sm text-gray-600">{sale.id}</td>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{sale.customer}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{sale.date}</td>
                <td className="px-6 py-4 text-sm text-right font-semibold text-gray-800">
                  ${sale.total.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
