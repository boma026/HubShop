"use client";

interface ProductDetailsPageProps {
  params: { id: string };
}

export default function ProductDetailsPage({ params }: ProductDetailsPageProps) {
  // Mock de produto
  const product = { id: params.id, name: "Laptop", price: 2500 };

  return (
    <section>
      <h1 className="text-2xl font-semibold mb-6">Product Details</h1>

      <div className="max-w-md bg-white p-6 rounded-2xl shadow-sm border border-gray-200">
        <p>
          <span className="font-medium">ID:</span> {product.id}
        </p>
        <p>
          <span className="font-medium">Name:</span> {product.name}
        </p>
        <p>
          <span className="font-medium">Price:</span> ${product.price.toFixed(2)}
        </p>
      </div>
    </section>
  );
}
