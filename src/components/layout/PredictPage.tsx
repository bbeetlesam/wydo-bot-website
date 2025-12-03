import { useState } from "react";

type Form = {
  age: number;
  isScholarship: boolean;
  isDebtor: boolean;
  totalSem1: number;
  passedSem1: number;
  gpaSem1: number;
  totalSem2: number;
  passedSem2: number;
  gpaSem2: number;
};

const initForm: Form = {
  age: 17,
  isScholarship: false,
  isDebtor: true,
  totalSem1: 8,
  passedSem1: 8,
  gpaSem1: 3.5,
  totalSem2: 8,
  passedSem2: 8,
  gpaSem2: 3.5
};

// =========================
//  URL BACKEND FLASK
// =========================
const API_URL = "https://mustofa.pythonanywhere.com/api/predict";

function PredictPage() {
  const [form, setForm] = useState<Form>(initForm);
  const [result, setResult] = useState<any>(null);

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

    
    if (!res.ok) {
      const err = await res.json();   // ambil pesan error dari backend
      alert(err.message);             // tampilkan ke user
      return;                         // jangan lanjut ke proses sukses
    }

    
    const data = await res.json();

    alert(`Probabilitas: ${data.prob}\nKategori: ${data.kategori}`);
    setResult(data);

  } catch (error) {
    alert("Tidak dapat terhubung ke server.");
  }
};



  return (
    <main className="mt-[100px] mb-14">
      <section className="w-full flex flex-col items-center mx-auto space-y-10">
        
        {/* hero */}
        <div className="text-center space-y-3">
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-800">
            Prediksi Risiko Drop Out
          </h1>
          <p className="text-slate-600 text-sm sm:text-base max-w-2xl mx-auto">
            Masukkan data akademik dua semester terakhir untuk memprediksi tingkat risiko DO.
          </p>
        </div>

        <section className="w-full max-w-4xl flex flex-col lg:flex-row gap-3">

          {/* input card */}
          <article className="w-full max-w-2xl bg-white shadow-md rounded-lg p-6 space-y-6">

            {/* usia */}
            <div>
              <label className="block font-semibold mb-1">Usia</label>
              <input
                type="number"
                min={17}
                max={25}
                value={form.age}
                onChange={e => update("age", Number(e.target.value))}
                className="w-full border rounded px-3 py-2 bg-white"
              />
            </div>

            {/* semester 1 */}
            <div className="border rounded-lg p-4 space-y-4 bg-gray-50">
              <h2 className="font-semibold text-lg">Semester 1</h2>

              <div>
                <label className="block mb-1">Jumlah Mata Kuliah</label>
                <input
                  type="number"
                  min={0}
                  max={8}
                  value={form.totalSem1}
                  onChange={e => update("totalSem1", Number(e.target.value))}
                  className="w-full border rounded px-3 py-2 bg-white"
                />
              </div>

              <div>
                <label className="block mb-1">Lulus</label>
                <input
                  type="number"
                  min={0}
                  max={form.totalSem1}
                  value={form.passedSem1}
                  onChange={e => update("passedSem1", Number(e.target.value))}
                  className="w-full border rounded px-3 py-2 bg-white"
                />
              </div>

              <div>
                <label className="block mb-1">IP Semester</label>
                <input
                  type="number"
                  min={0}
                  max={4}
                  step={0.01}
                  value={form.gpaSem1}
                  onChange={e => update("gpaSem1", Number(e.target.value))}
                  className="w-full border rounded px-3 py-2 bg-white"
                />
              </div>
            </div>

            {/* semester 2 */}
            <div className="border rounded-lg p-4 space-y-4 bg-gray-50">
              <h2 className="font-semibold text-lg">Semester 2</h2>

              <div>
                <label className="block mb-1">Jumlah Mata Kuliah</label>
                <input
                  type="number"
                  min={0}
                  max={8}
                  value={form.totalSem2}
                  onChange={e => update("totalSem2", Number(e.target.value))}
                  className="w-full border rounded px-3 py-2 bg-white"
                />
              </div>

              <div>
                <label className="block mb-1">Lulus</label>
                <input
                  type="number"
                  min={0}
                  max={form.totalSem2}
                  value={form.passedSem2}
                  onChange={e => update("passedSem2", Number(e.target.value))}
                  className="w-full border rounded px-3 py-2 bg-white"
                />
              </div>

              <div>
                <label className="block mb-1">IP Semester</label>
                <input
                  type="number"
                  min={0}
                  max={4}
                  step={0.01}
                  value={form.gpaSem2}
                  onChange={e => update("gpaSem2", Number(e.target.value))}
                  className="w-full border rounded px-3 py-2 bg-white"
                />
              </div>
            </div>

            {/* scholarship + debtor */}
            <div className="flex items-center gap-6">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={form.isScholarship}
                  onChange={e => update("isScholarship", e.target.checked)}
                />
                Penerima Beasiswa
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={form.isDebtor}
                  onChange={e => update("isDebtor", e.target.checked)}
                />
                Tanggungan UKT
              </label>
            </div>

            {/* submit */} 
            <button
              onClick={handlePredict}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
            >
              Prediksi!
            </button>
          </article>

          {/* hasil */}
          <article className="w-full max-w-md bg-white shadow-md rounded-lg p-6">
            <p className="uppercase font-semibold tracking-wide">Hasil Prediksi</p>

            {result ? (
              <div className="mt-4 space-y-2">
                <p><b>Probabilitas:</b> {result.prob ?? "-"}</p>
                <p><b>Kategori:</b> {result.kategori ?? "-"}</p>
              </div>
            ) : (
              <p className="text-slate-500 mt-4">Belum ada hasil.</p>
            )}
          </article>

        </section>
      </section>
    </main>
  );
}

export default PredictPage;
