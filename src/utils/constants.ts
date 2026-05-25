export const APP_NAME = "Next.js Tailwind Boilerplate";

export const ROUTES = {
	home: "/",
	login: "/login",
	register: "/register",
	dashboard: "/dashboard",
	health: "/api/health",
} as const;

export const FORM_LIMITS = {
	passwordMinLength: 8,
} as const;
