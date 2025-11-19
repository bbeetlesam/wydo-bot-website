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
        hero: "Khawatir soal semester depan? Ayo cek.",
        subhero: "Alat santai yang bantu kamu lihat apakah kamu lagi aman atau mulai oleng.",
        heroBtn: "Coba prediksi",
      },
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
        hero: "Worried about next semester? Let's check.",
        subhero: "A chill little tool that helps you figure out whether you’re cruising or crashing.",
        heroBtn: "Try to predict",
      },
    },
  }
} as const

export type Lang = keyof typeof TEXT
