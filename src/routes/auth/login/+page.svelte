<script lang="ts">
	import { enhance } from '$app/forms';
	import { User, Lock, LogIn } from '@lucide/svelte';
	import { m } from '$lib/paraglide/messages.js';

	let { form } = $props();
	let loading = $state(false);
</script>

<div class="flex min-h-[70vh] items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
	<div class="w-full max-w-md space-y-8">
		<div class="text-center">
			<h1 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
				{m.login_title()}
			</h1>
			<p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
				{m.login_subtitle()}
				<a href="/auth/register" class="font-medium text-amber-600 hover:text-amber-500">
					{m.login_register_link()}
				</a>
			</p>
		</div>

		<form
			method="POST"
			action="?/login"
			use:enhance={() => {
				loading = true;

				return async ({ update }) => {
					loading = false;
					await update();
				};
			}}
			class="mt-8 space-y-6"
		>
			<div class="space-y-4 rounded-md shadow-sm">
				{#if form?.message}
					<div class="rounded-md bg-red-50 p-4 dark:bg-red-900/30">
						<div class="flex">
							<div class="text-sm text-red-700 dark:text-red-300">
								{form.message}
							</div>
						</div>
					</div>
				{/if}
				<div>
					<label for="username" class="sr-only">{m.login_username_label()}</label>
					<div class="relative">
						<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
							<User class="h-5 w-5 text-gray-400" />
						</div>
						<input
							id="username"
							name="username"
							type="text"
							autocomplete="username"
							required
							class="block w-full rounded-lg border border-gray-300 py-2 pr-3 pl-10
                            text-gray-900 placeholder-gray-500 focus:border-amber-500
                            focus:ring-amber-500 focus:outline-none dark:border-gray-600
                            dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
							placeholder={m.login_username_placeholder()}
						/>
					</div>
				</div>
				<div>
					<label for="password" class="sr-only">{m.login_password_label()}</label>
					<div class="relative">
						<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
							<Lock class="h-5 w-5 text-gray-400" />
						</div>
						<input
							id="password"
							name="password"
							type="password"
							autocomplete="current-password"
							required
							class="block w-full rounded-lg border border-gray-300 py-2 pr-3 pl-10
                            text-gray-900 placeholder-gray-500 focus:border-amber-500
                            focus:ring-amber-500 focus:outline-none dark:border-gray-600
                            dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
							placeholder={m.login_password_placeholder()}
						/>
					</div>
				</div>
			</div>

			<div class="flex items-center justify-between">
				<div class="flex items-center">
					<input
						id="remember-me"
						name="remember-me"
						type="checkbox"
						class="h-4 w-4 rounded border-gray-300 text-amber-600 focus:ring-amber-500"
					/>
					<label for="remember-me" class="ml-2 block text-sm text-gray-900 dark:text-gray-300">
						{m.login_remember_me()}
					</label>
				</div>

				<div class="text-sm">
					<a href="/auth/forgot-password" class="font-medium text-amber-600 hover:text-amber-500">
						{m.login_forgot_password()}
					</a>
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
						<LogIn class="h-5 w-5 text-amber-200 group-hover:text-amber-300" />
					</span>
					{loading ? m.login_submitting() : m.login_submit()}
				</button>
			</div>
		</form>
	</div>
</div>
