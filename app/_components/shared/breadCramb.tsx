export default function BreadCramb({ items }: { items: { label: string; href: string }[] }) {
    return (
        <nav className="text-sm text-gray-500 mb-4">
            {items.map((item, index) => (
                <span key={index}>
                    <a href={item.href} className="hover:underline">
                        {item.label}
                    </a>
                    {index < items.length - 1 && " / "}
                </span>
            ))}
        </nav>
    );
}