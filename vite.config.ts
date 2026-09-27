import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // GitHub Pages では https://<ユーザー名>.github.io/<リポジトリ名>/ に置かれるため、相対パスで読み込む
  base: './',
})
