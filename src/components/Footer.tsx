export default function Footer() {
  return (
    <footer className="w-full border-t mt-10 py-6 text-center text-sm text-neutral-500 dark:text-neutral-400">
      © {new Date().getFullYear()} Cancionero <span className="text-[#fa1818]">Folclórico</span>. 
      <p>Hecho con ❤️ para las guitarreadas.</p>
    </footer>
  );
}