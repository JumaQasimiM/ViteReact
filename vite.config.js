import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"/ViteReact/"
  // css:{
  //   preprocessorOptions:{
  //     css:{
  //       additionalData:'@import "bootstrap/dist/css/bootstrap.main.css";'
  //     }

  //   }
  // }
})
