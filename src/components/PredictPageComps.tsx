import { type Lang, TEXT } from "../assets/lang";
import { useLang } from "../context/LangContext"

type Form = {
  age: number;
  semester: number;
  isScholarship: boolean;
  isDebtor: boolean;
  totalSem1: number;
  passedSem1: number;
  gpaSem1: number;
  totalSem2: number;
  passedSem2: number;
  gpaSem2: number;
};

type PredictResult = {
  status: string; prob: number; kategori: string;
}

type SemesterCardProps = {
  semester: number; form: Form; updateFunc: Function;
}

type ResultCardProps = {
  result: PredictResult | null; t: typeof TEXT[Lang];
}

function SemesterCard({ semester, form, updateFunc }: SemesterCardProps) {
  const { t } = useLang()

  return (
    <div className="border rounded-lg p-4 space-y-4 bg-gray-50">
      <h2 className="font-semibold text-lg">Semester {semester}</h2>

      <div>
        <label className="block mb-1">{t.page.predict.semcard.curUnits}</label>
        <input
          type="number"
          min={0}
          max={8}
          value={form.totalSem1}
          onChange={e => updateFunc("totalSem1", Number(e.target.value))}
          className="w-full border rounded px-3 py-2 bg-white"
        />
      </div>

      <div>
        <label className="block mb-1">{t.page.predict.semcard.curApproved}</label>
        <input
          type="number"
          min={0}
          max={form.totalSem1}
          value={form.passedSem1}
          onChange={e => updateFunc("passedSem1", Number(e.target.value))}
          className="w-full border rounded px-3 py-2 bg-white"
        />
      </div>

      <div>
        <label className="block mb-1">{t.page.predict.semcard.semGpa}</label>
        <input
          type="number"
          min={0}
          max={4}
          step={0.1}
          value={form.gpaSem1}
          onChange={e => updateFunc("gpaSem1", Number(e.target.value))}
          className="w-full border rounded px-3 py-2 bg-white"
        />
      </div>
    </div>
  )
}

function ResultCard({ result, t }: ResultCardProps) {
  function getRiskInfo(prob: number) {
    if (prob < 0.35) {
      return {
        label: "Risiko rendah",
        note: "Secara model kamu cukup aman. Tetap jaga ritme kuliah.",
        badgeClasses: "bg-emerald-50 text-emerald-800",
        cardClasses: "bg-emerald-50/40 border-emerald-200",
        barClasses: "bg-emerald-500",
      };
    } else if (prob < 0.65) {
      return {
        label: "Risiko sedang",
        note: "Kamu di area rawan. Nilai semester berikutnya bakal sangat berpengaruh.",
        badgeClasses: "bg-amber-50 text-amber-800",
        cardClasses: "bg-amber-50/40 border-amber-200",
        barClasses: "bg-amber-500",
      };
    } else {
      return {
        label: "Risiko tinggi",
        note: "Model melihat risiko DO tinggi. Perlu evaluasi serius dan cari bantuan akademik.",
        badgeClasses: "bg-rose-50 text-rose-800",
        cardClasses: "bg-rose-50/40 border-rose-200",
        barClasses: "bg-rose-500",
      };
    }
  }

  return (
    <article className="w-full">
      <p className="uppercase text-xs font-semibold tracking-wide text-slate-500 mb-2">
        {t.page.predict.result.head}
      </p>

      {result && typeof result.prob === "number" ? (
        (() => {
          const prob = result.prob;                // 0–1
          const percent = (prob * 100).toFixed(1); // "46.5"
          const info = getRiskInfo(prob);

          return (
            <div
              className={
                "rounded-xl border shadow-sm px-5 py-4 sm:px-6 sm:py-5 " +
                info.cardClasses
              }
            >
              {/* top row: badge + big number */}
              <div className="flex items-start justify-between gap-3">
                <div
                  className={
                    "inline-flex py-1 rounded-full text-[0.7rem] font-semibold uppercase tracking-wide " +
                    info.badgeClasses
                  }
                >
                  {info.label}
                </div>

                <div className="text-right">
                  <div className="text-2xl sm:text-3xl font-bold text-slate-900">
                    {percent}%
                  </div>
                  <div className="text-[0.7rem] text-slate-500">
                    probabilitas risiko DO
                  </div>
                </div>
              </div>

              {/* progress bar */}
              <div className="mt-4">
                <div className="h-1.5 w-full rounded-full bg-slate-200 overflow-hidden">
                  <div
                    className={"h-full rounded-full " + info.barClasses}
                    style={{ width: `${Math.min(prob * 100, 100)}%` }}
                  />
                </div>
              </div>

              {/* note */}
              <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                {info.note}
              </p>
            </div>
          );
        })()
      ) : (
        <div className="rounded-xl border border-slate-200 bg-white px-5 py-4 sm:px-6 sm:py-5">
          <p className="text-sm text-slate-500">
            Belum ada hasil. Isi data di formulir untuk melihat prediksi.
          </p>
        </div>
      )}
    </article>
  )
}

export { type Form, type PredictResult, SemesterCard, ResultCard }
