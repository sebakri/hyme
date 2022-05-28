import { defineConfig } from "vite"
import eslint from "vite-plugin-eslint"
import solidPlugin from "vite-plugin-solid"
import WindiCSS from "vite-plugin-windicss"

export default defineConfig({
  plugins: [
    eslint(),
    solidPlugin(),
    WindiCSS({
      scan: {
        fileExtensions: ["html", "js", "ts", "jsx", "tsx"]
      }
    })
  ],
  build: {
    target: "esnext",
    polyfillDynamicImport: false
  }
})
