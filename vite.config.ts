import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths';

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  
  let viteConf =  { plugins: [react(), tsconfigPaths()]}

  if (env.CODESERVER == 1) {
    viteConf={
      ...viteConf,
      ...{ server:{ hmr:{ clientPort:443 }}}
    }
  }

  return defineConfig(viteConf);
}