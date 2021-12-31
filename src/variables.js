export const ENV = Object.freeze({
	discordHook: import.meta.env.VITE_DISCORD_HOOK,
	isProduction: import.meta.env.VITE_IS_PRODUCTION === '1'
});
