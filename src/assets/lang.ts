/* this place contains all text configs for each language */

export const TEXT = {
  /* indonesian */
  id: {
    name: "Indonesia",
    header: {
      home: "Beranda",
      predict: "Prediksi!",
      about: "Tentang"
    },
    page: {
      home: {
        hero: "Khawatir soal semester depan kamu? Ayo cek.",
        subhero: "Alat bantu santai yang bantu kamu lihat apakah kamu lagi aman atau nggak.",
        heros: {
          badge: "Bagi mahasiswa yang khawatir",
          heroBtn: "Coba prediksi",
          secondBtn: "Cara dia bekerja",
          smallNote: "Cuma satu menit. Tanpa login, tanpa kritikan."
        },
        featHeadline: "Amankan karir kuliah kamu"
      },
      predict: {
        head: "Prediksi Status Semester Depan",
        subhead: "*Gratis, anonim, dan tidak akan mengambil data kamu (atau mengkritik nilaimu).",
      }
    },
  },

  /* english */
  en: {
    name: "English",
    header: {
      home: "Home",
      predict: "Predict!",
      about: "About"
    },
    page: {
      home: {
        hero: "Worried about your next semester? Let's check.",
        subhero: "A chill little tool that helps you figure out whether you’re cruising or crashing.",
        heros: {
          badge: "For overwhelmed students",
          heroBtn: "Try to predict",
          secondBtn: "How it works",
          smallNote: "Takes under a minute. No login, no judgement."
        },
        featHeadline: "Secure your college career",
      },
      predict: {
        head: "Predict Next Semester's Status",
        subhead: "*Free, anonymous, and won't take your data (or roast your GPA).",
      }
    },
  }
} as const

export type Lang = keyof typeof TEXT
