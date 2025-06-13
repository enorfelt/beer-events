<script lang="ts">
	import { enhance } from '$app/forms';
	import { Mail } from '@lucide/svelte';
	import { m } from '$lib/paraglide/messages.js';

	let loading = $state(false);
	let emailSent = $state(false);
</script>

<div class="flex min-h-[70vh] items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
	<div class="w-full max-w-md space-y-8">
		<div class="text-center">
			<h1 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
				{m.forgot_password_title()}
			</h1>
			<p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
				{#if !emailSent}
					{m.forgot_password_subtitle()}
				{/if}
			</p>
		</div>

		{#if !emailSent}
			<form
				method="POST"
				use:enhance={() => {
					loading = true;

					return async () => {
						loading = false;
						emailSent = true;
					};
				}}
				class="mt-8 space-y-6"
			>
				<div class="space-y-4 rounded-md shadow-sm">
					<div>
						<label for="email" class="sr-only">{m.forgot_password_email_label()}</label>
						<div class="relative">
							<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
								<Mail class="h-5 w-5 text-gray-400" />
							</div>
							<input
								id="email"
								name="email"
								type="email"
								autocomplete="email"
								required
								class="block w-full rounded-lg border border-gray-300 py-2 pr-3 pl-10
                                text-gray-900 placeholder-gray-500 focus:border-amber-500
                                focus:ring-amber-500 focus:outline-none dark:border-gray-600
                                dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
								placeholder={m.forgot_password_email_placeholder()}
							/>
						</div>
					</div>
				</div>

				<div>
					<button
						type="submit"
						disabled={loading}
						class="group relative flex w-full justify-center rounded-lg border border-transparent
                        bg-gradient-to-r from-amber-500 to-orange-600 px-4 py-2 text-sm font-medium
                        text-white hover:from-amber-600 hover:to-orange-700 focus:ring-2
                        focus:ring-amber-500 focus:ring-offset-2 focus:outline-none disabled:opacity-50"
					>
						<span class="absolute inset-y-0 left-0 flex items-center pl-3">
							<Mail class="h-5 w-5 text-amber-200 group-hover:text-amber-300" />
						</span>
						{loading ? m.forgot_password_submitting() : m.forgot_password_submit()}
					</button>
				</div>
			</form>
		{:else}
			<div class="mt-8 text-center">
				<div
					class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30"
				>
					<svg
						class="h-6 w-6 text-green-600 dark:text-green-400"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"
						></path>
					</svg>
				</div>
				<p class="mt-4 text-sm text-gray-600 dark:text-gray-400">
					{m.forgot_password_check_email()}
				</p>
			</div>
		{/if}

		<div class="text-center">
			<a href="/auth/login" class="font-medium text-amber-600 hover:text-amber-500">
				{m.forgot_password_back_to_login()}
			</a>
		</div>
	</div>
</div>
