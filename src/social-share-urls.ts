import linkedin from './linkedin';

export type BuildUrlParams = {
	url: string;
};

export type SocialProvider = {
	name: string;
	link(params: BuildUrlParams): string;
	svg: string;
	svgAlt?: string;
};

const providers: { [name: string]: SocialProvider } = { linkedin };

export function provider(name: string) {
	return providers[name];
}

export function shareUrl(providerName: string, params: BuildUrlParams) {
	return provider(providerName).link(params);
}
