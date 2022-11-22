import {
	provider as getProvider,
	SocialProvider,
} from '../src/social-share-urls';
import UrlError from '../src/url-error';
import linkedin from '../src/providers/linkedin';
import twitter from '../src/providers/twitter';

const goodParams = {
	url: 'https://vitejs.dev',
	text: 'Test "text"! (that should be encoded).',
	via: 'jest!',
	hashtags: 'one,two,three',
};

const testUrl = encodeURIComponent('https://vitejs.dev');

const providers: {
	[name: string]: [provider: SocialProvider, expected: string];
} = {
	linkedin: [
		linkedin,
		`https://www.linkedin.com/sharing/share-offsite/?url=${testUrl}`,
	],
	twitter: [
		twitter,
		`https://twitter.com/intent/tweet?url=${testUrl}&text=Test+%22text%22%21+%28that+should+be+encoded%29.&via=jest%21&hashtags=one%2Ctwo%2Cthree`,
	],
};

describe('Social Share URLs', () => {
	it('can retrieve providers', () => {
		for (const [name, [provider]] of Object.entries(providers)) {
			expect(getProvider(name)).toEqual(provider);
		}
	});

	it('can generate share links', () => {
		for (const [name, [, expected]] of Object.entries(providers)) {
			expect(getProvider(name).link(goodParams)).toEqual(expected);
		}
	});

	it("links don't include undefined params", () => {
		for (const [name, [, expected]] of Object.entries(providers)) {
			const expectedUrlOnly = expected.split(testUrl)[0] + testUrl;

			expect(getProvider(name).link({ url: goodParams.url })).toEqual(
				expectedUrlOnly
			);
		}
	});

	const badUrlParams = {
		url: '',
		title: 'Hello',
		text: 'world',
		body: 'body',
	};

	it('url is always required to generate share links', () => {
		for (const name of Object.keys(providers)) {
			expect(() => getProvider(name).link(badUrlParams)).toThrow(UrlError);
		}
	});
});
