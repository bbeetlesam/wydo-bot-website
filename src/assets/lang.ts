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
        hero: "Khawatir sama semester depan? Ayo cek.",
        subhero: "Alat bantu santai yang bantu kamu lihat apakah kamu lagi di zona aman atau nggak.",
        heros: {
          badge: "Untuk mahasiswa yang lagi kepikiran",
          heroBtn: "Coba prediksi",
          secondBtn: "Cara kerjanya",
          smallNote: "Cuma butuh semenit. Tanpa login, tanpa judgment."
        },
        featHeadline: "Amankan karier kuliah kamu",
        feature: {
          first: "Prediksi. Simpel. Cepat.",
          first2: "Masukin nilai kamu, dan langsung kelihatan kamu lagi aman, nanggung, atau sudah bahaya. Nggak perlu spreadsheet, nggak perlu overthinking.",
          second: "Deteksi masalah dari awal.",
          second2: "Lihat mata kuliah mana yang pelan-pelan nguras IPK kamu sebelum berubah jadi masalah gede.",
          third: "Rencanain tanpa panik.",
          third2: "Coba berbagai skenario: remedi, target nilai, batas aman IPK. Semua tanpa harus pusing hitung-hitungan.",
          fourth: "Tanpa akun. Tanpa penghakiman.",
          fourth2: "Semua data tetap di browser kamu. Nggak ada akun, nggak ada email, nggak ada tracking, nggak ada dosen yang ikut ngintip.",
        },
      },
      predict: {
        head: "Prediksi Status Semester Depan",
        subhead: "*Gratis, anonim, dan tidak akan mengambil data kamu (atau judge nilaimu).",
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
        feature: {
          first: "Predict. Simple. Fast.",
          first2: "Drop your grades in, and see instantly whether you're cruising, coasting, or crashing. No spreadsheets, no overthinking.",
          second: "Spot trouble early.",
          second2: "See which courses are quietly dragging your GPA down before they explode into a full-blown problem.",
          third: "Plan without panic.",
          third2: "Test different scenarios: retakes, target grades, safety margins or safe zones for your GPA. All without stressing over the math.",
          fourth: "No logins. No judgment.",
          fourth2: "Everything stays in your browser. No accounts, no email, no professor watching over your shoulder."
        },
      },
      predict: {
        head: "Predict Next Semester's Status",
        subhead: "*Free, anonymous, and won't take your data (or roast your GPA).",
      }
    },
  }
} as const

export type Lang = keyof typeof TEXT
