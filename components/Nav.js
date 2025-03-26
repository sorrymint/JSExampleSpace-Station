export default function Nav() {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <div className="max-w-7xl mx-auto flex justify-center gap-6">
                <a href="#iss" className="hover:text-gray-300 transition-colors">ISS</a>
                <a href="#tiangong" className="hover:text-gray-300 transition-colors">Tiangong</a>
                <a href="#mir" className="hover:text-gray-300 transition-colors">Mir</a>
            </div>
        </nav>
    );
}