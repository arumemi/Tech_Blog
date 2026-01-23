export function Navbar() {
  return (
    <nav 
      className="border-b transition-colors"
      style={{ 
        borderColor: 'var(--color-hover)',
        backgroundColor: 'var(--color-secondary-background)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div 
            className="text-2xl font-bold"
            style={{ color: 'var(--color-primary)' }}
          >
            Tech Blog
          </div>
          <div className="flex gap-6">
            <a 
              href="/" 
              className="hover:opacity-80 transition-opacity"
            >
              Home
            </a>
            <a 
              href="/blog" 
              className="hover:opacity-80 transition-opacity"
            >
              Blog
            </a>
            <a 
              href="/about" 
              className="hover:opacity-80 transition-opacity"
            >
              About
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}