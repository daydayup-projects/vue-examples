import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { loadEnv } from 'vite'

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd());
  console.log(env);
  return {
    plugins: [vue()],
    define: {
      'process.env': env
    },
    server: {
      port: env.VITE_SERVER_PORT
    }
  }
})
