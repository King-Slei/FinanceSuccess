import { defineConfig, PluginOption } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import tsConfigPaths from 'vite-tsconfig-paths';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [reactRefresh(), tsConfigPaths() as PluginOption, svgr()],
});
