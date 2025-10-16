import React, { useState, useEffect } from "react";

export default function Home() {
  const [electronics, setElectronics] = useState([]);
  const [clothing, setClothing] = useState([]);
  const [jewelery, setJewelery] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = import.meta.env.VITE_API_URL;

  const fetchCategoryProducts = async (category, setCategoryState) => {
    try {
      const response = await fetch(`${API_URL}/category/${category}`);
      if (!response.ok) {
        throw new Error(`Erro ao buscar a categoria ${category}.`);
      }
      const data = await response.json();
      setCategoryState(data);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchCategoryProducts("electronics", setElectronics);
    fetchCategoryProducts("men's clothing", setClothing);
    fetchCategoryProducts("jewelery", setJewelery);
    setLoading(false);
  }, [API_URL]);

  if (loading) return <div>Carregando...</div>;
  if (error) return <div>Erro: {error}</div>;

  const renderProductCards = (products) => {
    return products.map((product) => (
      <div key={product.id} className="bg-white p-4 shadow-lg rounded-lg w-60">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-40 object-cover rounded-md"
        />
        <h3 className="text-xl font-semibold mt-4">{product.title}</h3>
        <p className="text-lg font-bold text-gray-900">R$ {product.price}</p>
      </div>
    ));
  };

  return (
    <div className="space-y-12">
      <h2 className="text-2xl font-bold mb-4">Bem-vindo ao Fiap Commerce!</h2>

      <section className="bg-blue-200 p-8">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold">Eletrônicos</h2>
          <p className="text-lg text-gray-700">Produtos em destaque</p>
        </div>
        <div className="flex gap-6 justify-center flex-wrap">
          {renderProductCards(electronics)}
        </div>
      </section>

      <section className="bg-green-200 p-8">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold">Roupas</h2>
          <p className="text-lg text-gray-700">Produtos em destaque</p>
        </div>
        <div className="flex gap-6 justify-center flex-wrap">
          {renderProductCards(clothing)}
        </div>
      </section>

      <section className="bg-yellow-200 p-8">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold">Joias</h2>
          <p className="text-lg text-gray-700">Produtos em destaque</p>
        </div>
        <div className="flex gap-6 justify-center flex-wrap">
          {renderProductCards(jewelery)}
        </div>
      </section>
    </div>
  );
}
