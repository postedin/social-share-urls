import linkedin from './providers/linkedin';
import twitter from './providers/twitter';
import whatsapp from './providers/whatsapp';

export type BuildUrlParams = {
	url: string;
	[key: string]: string;
};

export type SocialProvider = {
	name: string;
	link(params: BuildUrlParams): string;
	svg: string;
};

const providers: { [name: string]: SocialProvider } = {
	linkedin,
	twitter,
	whatsapp,
};

export function provider(name: string) {
	return providers[name];
}

export function shareUrl(providerName: string, params: BuildUrlParams) {
	return provider(providerName).link(params);
}
