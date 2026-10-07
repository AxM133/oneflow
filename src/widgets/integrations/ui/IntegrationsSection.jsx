import { integrations } from '../../../config/integrations'

export function IntegrationsSection() {
  return (
    <section id="integrations" className="mx-auto w-full max-w-7xl px-4 py-16">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <h2 className="text-4xl font-semibold text-slate-900 md:text-5xl">
            Seamless integrations
          </h2>
          <p className="mt-4 max-w-md text-slate-700">
            Integrate your favorite tools with your contract workflow and work
            wonders.
          </p>
          <a
            href="#"
            className="mt-6 inline-block rounded bg-[#f8d94b] px-6 py-3 text-sm font-medium text-slate-900 transition hover:brightness-95"
          >
            See all integrations
          </a>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {integrations.map((item) => (
            <div
              key={item.id}
              className="flex aspect-square items-center justify-center rounded-xl bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-md"
            >
              <img
                src={item.logo}
                alt={item.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}