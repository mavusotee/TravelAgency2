/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./dist/*.{html,js}"],
    theme: {
      extend: {
        margin: {
          '100': '30rem', // Adds a margin-left of 10px
          '105': '35rem', // Adds a margin-left of 15px
          '107': '40rem',
          // You can add more custom margin-left values as needed
        },
  
      },
      fontFamily: {
        'Poppins': ['Poppins', 'sans-serif'],
      }
    },
    plugins: [],
  }