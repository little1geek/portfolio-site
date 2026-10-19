export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 font-sans">
      {/* Шапка */}
      <header className="border-b border-zinc-100 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="#" className="text-xl font-black tracking-tight text-[#1a2a52]">
            BOXPACK
          </a>
          <nav className="hidden items-center gap-6 text-sm text-zinc-600 md:flex">
            <a href="#services" className="hover:text-black">
              Услуги
            </a>
            <a href="#how" className="hover:text-black">
              Как это работает
            </a>
            <a href="#video" className="hover:text-black">
              Видеофиксация
            </a>
            <a href="#calc" className="hover:text-black">
              Калькулятор
            </a>
            <a href="#cases" className="hover:text-black">
              Кейсы
            </a>
            <a href="#contacts" className="hover:text-black">
              Контакты
            </a>
          </nav>
        </div>
      </header>

      {/* Первый экран */}
      <section className="bg-[#1a2a52] text-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
            {/* Текст и кнопки слева */}
            <div className="lg:col-span-7">
              <span className="text-xs uppercase tracking-wider text-cyan-400 font-medium">
                Автоматизированный фулфилмент
              </span>
              <h1 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                Фулфилмент, который держит сроки и репутацию
              </h1>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-300 sm:text-base">
                Автоматизированная упаковка, видеоконтроль каждого заказа и отправка в день поступления.
                Мы берем на себя хранение, сборку, маркировку и логистику.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#contacts"
                  className="inline-flex items-center text-sm font-semibold text-white hover:text-cyan-300"
                >
                  Рассчитать стоимость <span className="ml-1">→</span>
                </a>
                <a
                  href="#contacts"
                  className="rounded-lg border border-white/40 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  Получить консультацию
                </a>
              </div>

              {/* 3 карточки с цифрами */}
              <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="rounded-xl bg-[#314064] p-4 text-left">
                  <div className="mb-2 text-base text-cyan-300">📦</div>
                  <div className="text-xl font-bold">5000+</div>
                  <div className="mt-1 text-xs text-zinc-300">заказов в день</div>
                </div>

                <div className="rounded-xl bg-[#314064] p-4 text-left">
                  <div className="mb-2 text-base text-cyan-300">🛡️</div>
                  <div className="text-xl font-bold">99.8%</div>
                  <div className="mt-1 text-xs text-zinc-300">точность сборки</div>
                </div>

                <div className="rounded-xl bg-[#314064] p-4 text-left">
                  <div className="mb-2 text-base text-cyan-300">🚚</div>
                  <div className="text-xl font-bold">FBO/FBS</div>
                  <div className="mt-1 text-xs text-zinc-300">все маркетплейсы</div>
                </div>
              </div>
            </div>

            {/* Место под видео справа */}
            <div className="lg:col-span-5">
              <div
                id="video"
                className="flex aspect-video w-full items-center justify-center rounded-2xl bg-[#d1d4dc] p-6 text-center shadow-inner"
              >
                <div className="flex flex-col items-center gap-2">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/70 text-zinc-700 shadow-sm">
                    ▶
                  </div>
                  <p className="text-xs font-medium text-zinc-600 sm:text-sm">
                    Видео автоматической упаковочной линии
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
