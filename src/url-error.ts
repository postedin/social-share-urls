export default class UrlError extends TypeError {
	constructor(name: string) {
		super(`A valid URL is required to create a share link for ${name}.`);
	}
}
