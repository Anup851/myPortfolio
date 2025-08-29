export default function Footer() {
  return (
    <footer className="text-center py-6 mt-10 border-t dark:border-gray-700">
      <p className="text-gray-500 text-sm">
        © {new Date().getFullYear()} Anup Singh. Built with React & Tailwind.
      </p>
    </footer>
  );
}
