import allthemes from '../../../config.json';
export default function useTheme() {
	const themes = allthemes;
	const defaultTheme = themes.themes.default;

	const activeTheme = Object.values(themes).filter(
		(theme) => theme?.active
	)[0];
	const setTheme = activeTheme ?? defaultTheme;
	return {
		...setTheme,
	};
}
