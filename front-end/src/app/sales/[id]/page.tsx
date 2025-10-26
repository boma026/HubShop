export default function NovaVendaPage() {
  return (
    <div className="bg-white shadow rounded p-6 max-w-lg">
      <h2 className="text-xl font-semibold mb-4">Cadastrar Venda</h2>
      <form className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Cliente</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:ring focus:ring-blue-200"
          />
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Salvar
        </button>
      </form>
    </div>
  );
}
