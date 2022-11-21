import { provider } from '../src/social-share-urls';
import linkedin from '../src/linkedin';

describe('Social Share URLs', () => {
	it('can retrieve providers', () => {
		expect(provider('linkedin')).toEqual(linkedin);
	});

	it('can generate share links', () => {
		expect(provider('linkedin').link({ url: 'https://vitejs.dev' })).toEqual(
			'https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fvitejs.dev'
		);
	});
});
