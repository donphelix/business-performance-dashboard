import Link from 'next/link';

const Navigation = () => {
    return (
        <nav className="bg-gray-800 text-white">
            <div className="container mx-auto px-4 py-6">
                <ul className="flex space-x-4">
                    <li>
                        <Link href="/">Dashboard</Link>
                    </li>
                    <li>
                        <Link href="/charts">Charts</Link>
                    </li>
                    <li>
                        <Link href="/insights">Data Insights</Link>
                    </li>
                    <li>
                        <Link href="/table">Table</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navigation;