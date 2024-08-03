import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/

// base of github pages
// in development is root
export default defineConfig({
  plugins: [react()],
  base: '/strigsys.company.page/'
})
