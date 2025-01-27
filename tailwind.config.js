module.exports = {
  content: [
    "./*.html", // Semua file HTML di root direktori
    "./src/**/*.css", // Semua file CSS di folder src
    "./dist/img/**/*", // Semua gambar di dist/img (jika Anda ingin menggunakan kelas Tailwind di atribut HTML)
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
