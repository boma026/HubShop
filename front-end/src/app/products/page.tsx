"use client";

const mockProducts = [
  { id: 1, name: "Laptop", price: 2500 },
  { id: 2, name: "Keyboard", price: 150 },
  { id: 3, name: "Monitor", price: 800 },
];

export default function ProductsPage() {
  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Products</h1>
        <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 transition-colors">
          + New Product
        </button>
      </div>

      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50 text-gray-700">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium">#</th>
              <th className="px-6 py-3 text-left text-sm font-medium">Name</th>
              <th className="px-6 py-3 text-right text-sm font-medium">Price</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {mockProducts.map(product => (
              <tr
                key={product.id}
                className="hover:bg-gray-50 transition-colors duration-150 cursor-pointer"
              >
                <td className="px-6 py-4 text-sm text-gray-600">{product.id}</td>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">{product.name}</td>
                <td className="px-6 py-4 text-sm text-right font-semibold text-gray-800">
                  ${product.price.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
