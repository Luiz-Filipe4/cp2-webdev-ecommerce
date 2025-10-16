import { Link } from 'react-router-dom';



export default function Navbar() {
  return (
      <nav className="pt-16 bg-yellow-400 min-h-screen p-6">
      <h1 className="font-bold text-xl">Fiap Commerce</h1>
      <div className="flex gap-4">
        <Link to="/" className="hover:bg-gray-700 p-2 rounded">Home</Link>
        <Link to="Perfil" className="hover:bg-gray-700 p-2 rounded">Perfil</Link>
        <Link to="Carrinho" className="hover:bg-gray-700 p-2 rounded">Carrinho</Link>
      </div>
    </nav>
  );
}



