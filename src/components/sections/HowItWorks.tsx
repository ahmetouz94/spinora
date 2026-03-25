import { PRODUCT } from "@/lib/product-data";

export function HowItWorks() {
  return (
    <section className="bg-brand-50 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-slate-500">
            Up and spinning in 3 simple steps.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
          {PRODUCT.steps.map((step, i) => (
            <div key={step.step} className="relative flex flex-col items-center text-center">
              {i < PRODUCT.steps.length - 1 && (
                <div className="absolute left-1/2 top-6 hidden h-0.5 w-full translate-x-6 bg-brand-200 sm:block" />
              )}
              <div className="relative z-10 mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-500 text-xl font-bold text-white shadow-lg shadow-brand-500/30">
                {step.step}
              </div>
              <h3 className="mb-2 font-bold text-slate-900 text-lg">{step.title}</h3>
              <p className="text-slate-500 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
