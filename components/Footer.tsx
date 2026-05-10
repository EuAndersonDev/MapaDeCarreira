export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl">🗺️</span>
              <span className="text-lg font-bold text-white">Mapa de Carreira</span>
            </div>
            <p className="text-zinc-400 text-sm">
              Roteiro completo para desenvolvedores JavaScript, desde os primeiros passos até o nível Pleno.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>
                <a
                  href="/skills"
                  className="hover:text-purple-400 transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="/goals"
                  className="hover:text-purple-400 transition-colors"
                >
                  Objetivos
                </a>
              </li>
              <li>
                <a
                  href="/levels"
                  className="hover:text-purple-400 transition-colors"
                >
                  Níveis
                </a>
              </li>
              <li>
                <a
                  href="/timeline"
                  className="hover:text-purple-400 transition-colors"
                >
                  Timeline
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Links Úteis</h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              <li>
                <a
                  href="https://github.com/EuAndersonDev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-400 transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/EuAndersonDev/mapa-de-carreira/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-400 transition-colors"
                >
                  Reportar Issue
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-zinc-800 mt-8 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} EuAndersonDev. Todos os direitos reservados.
          </p>
          <p className="text-zinc-600 text-xs">
            Feito com 💜 para desenvolvedores JavaScript
          </p>
        </div>
      </div>
    </footer>
  );
}
