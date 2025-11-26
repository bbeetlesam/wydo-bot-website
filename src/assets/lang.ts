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
    footer: {
      tagline: "Alat prediksi nilai sederhana yang dibuat untuk proyek kelompok Matematika Diskrit. Dirancang agar siapa pun bisa cek gambaran semester mereka dengan mudah.",
      bottom: "WYDO. Dikembangkan oleh tim proyek Matematika Diskrit.",
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
        featSubheadline: "Ini yang sebenarnya alat ini bisa bantu.",
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
        steps: {
          headline: "Cara kerjanya",
          subheadline: "Tiga langkah cepat. Tanpa akun, tanpa formulir ribet, cuma pakai nilai yang sudah kamu punya.",
          first: {
            head: "Masukkan nilai kamu",
            desc: "Isi nilai yang sekarang atau perkiraan nilai tiap mata kuliah. Nggak perlu akurat 100%, yang penting mendekati."
          },
          second: {
            head: "Atur skenarionya",
            desc: "Coba berbagai target, remedi, atau skenario \"gimana kalau nilai matkul ini jelek?\" sampai terasa paling masuk akal."
          },
          third: {
            head: "Lihat posisi kamu",
            desc: "Dapatkan gambaran jelas tentang status semester depan. Biar kamu bisa santai, atur strategi, atau panik dengan terencana."
          }
        },
        cta: {
          headline: "Siap mencoba?",
          sub: "Cuma butuh semenit, dan bisa aja selamatkan semester kamu. Tanpa login, tanpa risiko, cuma kejelasan.",
          button: "Coba sekarang",
          lastline: "Semua berjalan di browser kamu. Nggak ada yang disimpan di server.",
        }
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
    footer: {
      tagline: "A small grade-prediction tool built for a Discrete Math group project. Designed so any student can check their semester outlook with ease.",
      bottom: "WYDO. Developed by the Discrete Math project team.",
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
        featSubheadline: "Here's what it actually helps you do.",
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
        steps: {
          headline: "How it works",
          subheadline: "Three quick steps. No signup, no complicated forms, just numbers you already have.",
          first: {
            head: "Add your grades",
            desc: "Enter your current or expected scores for each course. No need to be perfect, just close enough."
          },
          second: {
            head: "Tweak the scenario",
            desc: "Try different targets, retakes, or \"what if I bomb this one?\" plans until it feels realistic."
          },
          third: {
            head: "See where you stand",
            desc: "Get a clear look at your next semester’s status so you can chill, adjust, or panic strategically."
          }
        },
        cta: {
          headline: "Ready to try?",
          sub: "Takes under a minute, and might save your semester. No login, no risk, just clarity.",
          button: "Try it now",
          lastline: "Works in your browser. Nothing gets stored on a server.",
        },
      },
      predict: {
        head: "Predict Next Semester's Status",
        subhead: "*Free, anonymous, and won't take your data (or roast your GPA).",
      }
    },
  },
} as const

export type Lang = keyof typeof TEXT
