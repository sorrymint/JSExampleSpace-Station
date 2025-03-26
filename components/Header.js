import Link from 'next/link';

export default function Header() {
    return (
        <header className="bg-black text-white p-6 text-center">
            <h1 className="text-4xl font-bold mb-4">Space Stations Around the World</h1>
            <p className="text-lg">Exploring the greatest orbital outposts in history</p>
        </header>
    );
}