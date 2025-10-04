export function NotFound() {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-400">
      <div className="flex flex-col items-center">
        <h1 className="text-gray-200 font-bold text-9xl mb-8">404</h1>
        <h1 className="text-gray-100 font-semibold text-2xl mb-8">
          Ops! Página não encontrada
        </h1>
        <a
          href="/"
          className="h-12 px-4 flex items-center justify-center font-semibold bg-green-100 rounded-lg text-white cursor-pointer hover:bg-green-200 transition ease-linear disabled:opacity-50 disabled:cursor-progress"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}
