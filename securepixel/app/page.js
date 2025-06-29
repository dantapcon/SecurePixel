import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navbar */}
      <header className="flex justify-between items-center px-8 py-4 bg-white shadow-sm">
        <div className="flex items-center space-x-2">
          {/* logo */}
          <span className="text-xl font-bold text-blue-600">SecurePixel</span>
        </div>
        <nav className="space-x-4">
          <Link href="/iniciosecion" className="px-4 py-2 rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors">
            Iniciar Sesión
          </Link>
          <Link href="/registro" className="px-4 py-2 rounded-md text-blue-600 border border-blue-600 hover:bg-blue-50 transition-colors">
            Registrarse
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center justify-center py-20 px-8 text-center lg:text-left">
        <div className="max-w-xl lg:mr-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            Aprende Ciberseguridad de Forma Inteligente
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Plataforma educativa que utiliza inteligencia artificial y análisis
            emocional para personalizar tu experiencia de aprendizaje de
            ciberseguridad.
          </p>
          <div className="space-x-4">
            <button className="px-6 py-3 rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors text-lg font-medium">
              Comenzar Ahora
            </button>
            <button className="px-6 py-3 rounded-md text-blue-600 border border-blue-600 hover:bg-blue-50 transition-colors text-lg font-medium">
              Conocer Más
            </button>
          </div>
        </div>
        <div className="mt-12 lg:mt-0 lg:ml-16">
          {/* Logo Securepixel */}
          <img
            src="/imagenes/logosec.png"
            alt="Ilustración de ciberseguridad"
            className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-lg"
          />
        </div>
      </section>

      {/* Main Features Section */}
      <section className="py-20 px-8 bg-white">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Características Principales
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Cuadro 1 */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-md text-center">
            <div className="flex justify-center mb-4">
              <div className="p-1 bg-blue-100 rounded-full">
                {/* icono png */}
                <img
                  src="/imagenes/aprendizaje.png"
                  alt="Ilustración de ciberseguridad"
                  className="w-2 h-2 md:w-15 md:h-15 rounded-full object-cover shadow-lg"
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Aprendizaje Adaptativo</h3>
            <p className="text-gray-600">
              Contenido que se ajusta a tu nivel de conocimiento y estado emocional.
            </p>
          </div>

          {/* Cuadro 2 */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-md text-center">
            <div class="flex justify-center mb-4"></div>
            <div className="flex justify-center mb-4">
              <div className="p-1 bg-blue-100 rounded-full">
                {/* icono png */}
                <img
                  src="/imagenes/emociones.png"
                  alt="Ilustración de ciberseguridad"
                  className="w-2 h-2 md:w-15 md:h-15 rounded-full object-cover shadow-lg"
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Análisis Emocional</h3>
            <p className="text-gray-600">
              Tecnología para optimizar tu experiencia de aprendizaje sobre ciberseguridad.
            </p>
          </div>

          {/* cuadro 3*/}
          <div className="bg-gray-50 p-8 rounded-lg shadow-md text-center">
            <div class="flex justify-center mb-4"> </div>
            <div className="flex justify-center mb-4">
               <div className="p-1 bg-blue-100 rounded-full">
                {/* icono png */}
                <img
                  src="/imagenes/ia.png"
                  alt="Ilustración de ciberseguridad"
                  className="w-2 h-2 md:w-15 md:h-15 rounded-full object-cover shadow-lg"
                />
              </div>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">IA Generativa</h3>
            <p className="text-gray-600">
              Preguntas y ejercicios creados por inteligencia artificial según tus necesidades.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 text-sm">
        <p>&copy; 2023 SecurePixel - Sistema de Aprendizaje Inteligente de Ciberseguridad</p>
      </footer>
    </div>
  );
}