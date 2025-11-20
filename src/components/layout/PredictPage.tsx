import { useLang } from "../../context/LangContext"

function PredictPage() {
  const { t } = useLang()

  return (
    <main className="pt-20">
      {/* headline */}
      <section className="flex flex-col items-center justify-center gap-1 pb-5">
        <span className="text-4xl font-bold">{t.page.predict.head}</span>
        <span className="text-sm font-light text-slate-500">{t.page.predict.subhead}</span>
      </section>

      {/* input card */}
      <section className="py-2 rounded-2xl bg-slate-50 shadow-md">
        this is the predict card layout, bitch.
        <form>how am i supposed to do w ts form</form>
      </section>
    </main>
  )
}

export default PredictPage
