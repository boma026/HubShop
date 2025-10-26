"use client";

const mockPurchases = [
  {
    id: 101,
    supplier: "Tech Distributors Inc.",
    date: "2025-10-24",
    total: 940.25,
    relatedSale: 1,
  },
  {
    id: 102,
    supplier: "Office Supplies Co.",
    date: "2025-10-23",
    total: 480.75,
    relatedSale: 2,
  },
  {
    id: 103,
    supplier: "Global Parts Ltd.",
    date: "2025-10-21",
    total: 3100,
    relatedSale: 3,
  },
];

export default function PurchasesPage() {
  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Purchases</h1>
        <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors">
          + New Purchase
        </button>
      </div>

      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50 text-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium">#</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Supplier</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Date</th>
              <th className="px-6 py-3 text-right text-sm font-medium">Total</th>
              <th className="px-6 py-3 text-center text-sm font-medium">Sale ID</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {mockPurchases.map(purchase => (
              <tr key={purchase.id} className="hover:bg-gray-50 transition-colors duration-150">
                <td className="px-6 py-4 text-sm text-gray-600">{purchase.id}</td>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{purchase.supplier}</td>
                <td className="px-6 py-4 text-sm text-gray-600">{purchase.date}</td>
                <td className="px-6 py-4 text-sm text-right font-semibold text-gray-800">
                  ${purchase.total.toFixed(2)}
                </td>
                <td className="px-6 py-4 text-sm text-center text-gray-700">
                  {purchase.relatedSale}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
