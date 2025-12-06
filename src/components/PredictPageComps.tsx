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

type SemesterCardProps = {
  semester: number;
  form: Form;
  updateFunc: Function;
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

export { type Form, SemesterCard }
