export default function Title({ title }: { title: string }) {
    return (
        <h2 className="text-2xl font-bold mb-6 border-l-4 pl-3 border-red-500">
            {title}
        </h2>
    );
}