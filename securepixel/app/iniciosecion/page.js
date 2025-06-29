import Link from 'next/link';

export default function IniciarSesionPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      {/* Navbar (simple para esta página) */}
      <header className="absolute top-0 left-0 w-full flex justify-between items-center px-8 py-4 bg-white shadow-sm">
        <div className="flex items-center space-x-2">
          <span className="text-xl font-bold text-blue-600">SecurePixel</span>
        </div>
        <nav>
          <Link href="/" className="px-4 py-2 rounded-md text-blue-600 border border-blue-600 hover:bg-blue-50 transition-colors">
            Volver al Inicio
          </Link>
        </nav>
      </header>

      {/* Login Card */}
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md mt-20 md:mt-0">
        <h2 className="text-2xl font-bold text-center text-gray-900 mb-4">Iniciar Sesión</h2>
        <p className="text-center text-gray-600 mb-8">
          Accede a tu cuenta para continuar tu aprendizaje en ciberseguridad
        </p>

        {/* Google Login Button */}
        <button className="flex items-center justify-center w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm text-gray-700 bg-white hover:bg-gray-50 transition-colors mb-6">
          <img src="/imagenes/download.png" alt="Google logo" className="w-5 h-5 mr-2" />
          Iniciar sesión con Google
        </button>

        <div className="relative flex py-5 items-center mb-6">
          <div className="flex-grow border-t border-gray-300"></div>
          <span className="flex-shrink mx-4 text-gray-400">o</span>
          <div className="flex-grow border-t border-gray-300"></div>
        </div>

        {/* Email/Password Form */}
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Correo Electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="ejemplo@correo.com"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Contraseña
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Tu contraseña"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-3 rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors font-medium text-lg"
          >
            Iniciar Sesión
          </button>
        </form>

        <div className="text-center mt-4 text-sm">
          <Link href="/recuperar-contrasena" className="text-blue-600 hover:underline">
            ¿Olvidaste tu contraseña?
          </Link>
          <p className="mt-2">
            ¿No tienes una cuenta?{' '}
            <Link href="/registro" className="text-blue-600 hover:underline">
              Regístrate aquí
            </Link>
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="absolute bottom-0 w-full py-4 text-center text-gray-500 text-sm">
        <p>&copy; 2023 SecurePixel - Sistema de Aprendizaje Inteligente de Ciberseguridad</p>
      </footer>
    </div>
  );
}