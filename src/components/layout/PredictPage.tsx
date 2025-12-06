import { useState } from "react";
import { type Form, SemesterCard } from "../PredictPageComps";
import { useLang } from "../../context/LangContext";

const initForm: Form = {
  age: 17,
  semester: 1,
  isScholarship: false,
  isDebtor: true,
  totalSem1: 8,
  passedSem1: 8,
  gpaSem1: 3.5,
  totalSem2: 8,
  passedSem2: 8,
  gpaSem2: 3.5
};

// url backend flask
const API_URL = "https://mustofa.pythonanywhere.com/api/predict";

function PredictPage() {
  const [form, setForm] = useState<Form>(initForm);
  const [result, setResult] = useState<any>(null);
  const [warning, setWarning] = useState<string | null>(null);
  const { t } = useLang()

  const update = (key: keyof Form, value: any) => {
    setForm(prev => ({ ...prev, [key]: value }));
  };

  const handlePredict = async () => {
    const payload = {
      age: form.age,
      gender: "L",
      scholar: form.isScholarship ? 1 : 0,
      debtor: form.isDebtor ? 1 : 0,

      mk1: form.totalSem1,
      c1_approved: form.passedSem1,
      c1_grade: form.gpaSem1,

      mk2: form.totalSem2,
      c2_approved: form.passedSem2,
      c2_grade: form.gpaSem2
    };

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      // show warning for backend error
      if (!res.ok) {
        const err = await res.json();
        setWarning(err.message);
        setResult(null);
        return;
      }

      const data = await res.json();
      setWarning(null);
      setResult(data);

    } catch (error) {
      setWarning("Cannot connected to the server. What a pity.");
    }
  };

  return (
    <main className="mt-[100px] mb-14">
      <section className="w-full flex flex-col items-center mx-auto space-y-10">

        {/* hero */}
        <div className="text-center space-y-3">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-800">
            {t.page.predict.head}
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
            {t.page.predict.subhead}
          </p>
        </div>

        {/* input and result cards section */}
        <section className="w-full max-w-4xl flex flex-col lg:flex-row items-start gap-3">
          {/* input card */}
          <article className="w-full lg:w-[55%] xl:w-[60%] bg-white shadow-md rounded-lg p-6 space-y-6">
            {/* age + semester */}
            <div className="w-full flex flex-row items-start gap-3">
              {/* age */}
              <div className="flex-1">
                <label className="w-full block font-semibold mb-1">
                  {t.page.predict.input.age}
                </label>
                <input
                  type="number"
                  min={17}
                  max={25}
                  value={form.age}
                  onChange={e => update("age", Number(e.target.value))}
                  className="w-full border rounded px-3 py-2 bg-white"
                />
              </div>

              {/* semester */}
              <div className="flex-1">
                <label className="w-full block font-semibold mb-1">Semester</label>
                <input
                  type="number"
                  min={1}
                  max={14}
                  value={form.semester}
                  onChange={e => update("semester", Number(e.target.value))}
                  className="w-full border rounded px-3 py-2 bg-white"
                />
              </div>
            </div>

            {/* 1st semester */}
            <SemesterCard
              semester={1}
              form={form}
              updateFunc={update}
            />

            {/* 2nd semester */}
            <SemesterCard
              semester={2}
              form={form}
              updateFunc={update}
            />

            {/* scholarship + debtor */}
            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={form.isScholarship}
                  onChange={e => update("isScholarship", e.target.checked)}
                  className="cursor-pointer"
                />
                {t.page.predict.input.scholarship}
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={form.isDebtor}
                  onChange={e => update("isDebtor", e.target.checked)}
                  className="cursor-pointer"
                />
                {t.page.predict.input.debtor}
              </label>
            </div>

            {/* submit */}
            <button
              onClick={handlePredict}
              className="w-full bg-cyan-600 hover:bg-cyan-700 text-white py-2 rounded transition"
            >
              {t.header.predict}
            </button>
          </article>

          {/* warning + result card */}
          <section className="w-full lg:w-[45%] xl:w-[40%] flex flex-col gap-3">
            {/* result card */}
            <article className="w-full bg-white shadow-md rounded-lg p-6">
              <p className="uppercase font-semibold tracking-wide">
                {t.page.predict.result.head}
              </p>

              {result ? (
                <div className="mt-4 space-y-2">
                  <p><b>Probabilitas:</b> {result.prob ? result.prob * 100 + "%" : "-"}</p>
                  <p><b>Kategori:</b> {result.kategori ?? "-"}</p>
                </div>
              ) : (
                <p className="text-slate-500 mt-4">Belum ada hasil.</p>
              )}
            </article>

            {/* warning card */}
            {warning && (
              <article className="w-full p-3 bg-red-100 text-red-700 rounded border border-red-300">
                {warning}
              </article>
            )}
          </section>
        </section>
      </section>
    </main>
  );
}

export default PredictPage;
