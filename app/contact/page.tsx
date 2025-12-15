export default function ContactPage() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="mb-10 text-center">
          <h1 className="text-3xl font-semibold tracking-wide">Contacto</h1>
          <p className="text-gray-500 mt-2 text-sm">
            Escribinos y te respondemos a la brevedad
          </p>
        </div>

        <form className="flex flex-col gap-5">
          <input
            type="text"
            placeholder="Nombre"
            className="border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-black transition"
          />

          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:border-black transition"
          />

          <textarea
            placeholder="Mensaje"
            rows={4}
            className="border border-gray-300 px-4 py-3 text-sm resize-none focus:outline-none focus:border-black transition"
          />

          <button
            type="submit"
            className="mt-4 border border-black py-3 text-sm uppercase tracking-widest hover:bg-black hover:text-white transition"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
}
