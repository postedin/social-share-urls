import './dummy.css';
import { BuildUrlParams, provider, SocialProvider } from './social-share-urls';

const providers: { [name: string]: SocialProvider } = {
	linkedin: provider('linkedin'),
	twitter: provider('twitter'),
};

const tokenData: BuildUrlParams = {
	url: '__URL__',
};

const exampleData: BuildUrlParams = {
	url: 'https://vitejs.dev',
};

const html = `
	<div class="h-screen bg-slate-800">
		<div class="p-4 sm:p-6 lg:p-8 max-w-6xl">
			<h1 class="text-xl font-semibold text-slate-100">Social Share URLs Dummy Test</h1>
			<p class="mt-2 text-sm text-slate-400">This package is just exposing https://github.com/bradvin/social-share-urls/tree/master/code/javascript for NPM usage with font awesome SVGs as well.</p>
			<div class="mt-5 text-sm text-slate-400">
				<div class="font-semibold mb-2">Data used for link display and examples.</div>
				<div>
					<pre>
<span class="font-semibold">[Link Column]</span>
${Object.entries(tokenData).map(
	([param, value]) => `${param}: ${JSON.stringify(value)}`
)}

<span class="font-semibold">[Example Column]</span>
${Object.entries(exampleData).map(
	([param, value]) => `${param}: ${JSON.stringify(value)}`
)}
          </pre>
        </div>
			</div>
			<div class="mt-5 flex flex-col">
				<div class="-my-2 -mx-4 sm:-mx-6 lg:-mx-8">
					<div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
						<table class="min-w-full divide-y divide-slate-700">
							<thead>
								<tr>
									<th scope="col" class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-slate-100 sm:pl-6 md:pl-0">Provider</th>
									<th scope="col" class="py-3.5 px-3 text-left text-sm font-semibold text-slate-100">SVG</th>
									<th scope="col" class="py-3.5 px-3 text-left text-sm font-semibold text-slate-100">Name</th>
									<th scope="col" class="py-3.5 px-3 text-left text-sm font-semibold text-slate-100">Link</th>
									<th scope="col" class="py-3.5 px-3 text-left text-sm font-semibold text-slate-100">Example</th>
								</tr>
							</thead>
							<tbody class="divide-y divide-gray-200">
								${Object.entries(providers)
									.map(([name, provider]) => {
										const example = provider.link(exampleData);

										return `
										<tr>
											<td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-slate-100 sm:pl-6 md:pl-0">${name}</td>
											<td class="whitespace-nowrap py-4 px-3 text-sm text-slate-400">
											  <div class="h-6 w-6">${provider.svg}</div>
											</td>
											<td class="whitespace-nowrap py-4 px-3 text-sm text-slate-400">${
												provider.name
											}</td>
											<td class="whitespace-nowrap py-4 px-3 text-sm text-slate-400">${provider.link(
												tokenData
											)}</td>
											<td class="whitespace-nowrap py-4 px-3 text-sm text-slate-400">
												<a class="flex items-center hover:text-slate-300 mb-px" href="${example}" target="_blank" rel="noopener">
													<span class="h-5 w-5 mr-1.5">${provider.svg}</span>
													<span class="text-base font-semibold">Share to ${provider.name}</span>
												</a>
												<p class="text-xs text-slate-500">${example}</p>
											</td>
										</tr>
									`;
									})
									.join('\n')}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</div>
	</div>
`;

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
document.querySelector<HTMLDivElement>('#app')!.innerHTML = html;
