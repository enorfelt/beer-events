<script lang="ts">
	import { enhance } from '$app/forms';
	import { User, Lock, Mail, UserPlus } from '@lucide/svelte';
	import { m } from '$lib/paraglide/messages.js';
	
	let { form } = $props();
	let loading = $state(false);
</script>

<div class="flex min-h-[70vh] items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
	<div class="w-full max-w-md space-y-8">
		<div class="text-center">
			<h1 class="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
				{m.register_title()}
			</h1>
			<p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
				{m.register_subtitle()}
				<a href="/auth/login" class="font-medium text-amber-600 hover:text-amber-500">
					{m.register_login_link()}
				</a>
			</p>
		</div>
		
		<form method="POST" action="?/register" use:enhance={() => {
			loading = true;
			
			return async ({ update }) => {
				loading = false;
				await update();
			};
		}} class="mt-8 space-y-6">
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
					<label for="username" class="sr-only">{m.register_username_label()}</label>
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
							class="block w-full rounded-lg border border-gray-300 py-2 pl-10 pr-3 
                            text-gray-900 placeholder-gray-500 focus:border-amber-500 
                            focus:outline-none focus:ring-amber-500 dark:border-gray-600 
                            dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
							placeholder={m.register_username_placeholder()}
						/>
					</div>
				</div>
				
				<div>
					<label for="email" class="sr-only">{m.register_email_label()}</label>
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
							class="block w-full rounded-lg border border-gray-300 py-2 pl-10 pr-3 
                            text-gray-900 placeholder-gray-500 focus:border-amber-500 
                            focus:outline-none focus:ring-amber-500 dark:border-gray-600 
                            dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
							placeholder={m.register_email_placeholder()}
						/>
					</div>
				</div>
				
				<div>
					<label for="password" class="sr-only">{m.register_password_label()}</label>
					<div class="relative">
						<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
							<Lock class="h-5 w-5 text-gray-400" />
						</div>
						<input
							id="password"
							name="password"
							type="password"
							autocomplete="new-password"
							required
							class="block w-full rounded-lg border border-gray-300 py-2 pl-10 pr-3 
                            text-gray-900 placeholder-gray-500 focus:border-amber-500 
                            focus:outline-none focus:ring-amber-500 dark:border-gray-600 
                            dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
							placeholder={m.register_password_placeholder()}
						/>
					</div>
				</div>
				
				<div>
					<label for="confirmPassword" class="sr-only">{m.register_confirm_password_label()}</label>
					<div class="relative">
						<div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
							<Lock class="h-5 w-5 text-gray-400" />
						</div>
						<input
							id="confirmPassword"
							name="confirmPassword"
							type="password"
							autocomplete="new-password"
							required
							class="block w-full rounded-lg border border-gray-300 py-2 pl-10 pr-3 
                            text-gray-900 placeholder-gray-500 focus:border-amber-500 
                            focus:outline-none focus:ring-amber-500 dark:border-gray-600 
                            dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
							placeholder={m.register_confirm_password_placeholder()}
						/>
					</div>
				</div>
			</div>
			
			<div>
				<button
					type="submit"
					disabled={loading}
					class="group relative flex w-full justify-center rounded-lg border border-transparent 
                    bg-gradient-to-r from-amber-500 to-orange-600 py-2 px-4 text-sm font-medium 
                    text-white hover:from-amber-600 hover:to-orange-700 focus:outline-none 
                    focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 disabled:opacity-50"
				>
					<span class="absolute inset-y-0 left-0 flex items-center pl-3">
						<UserPlus class="h-5 w-5 text-amber-200 group-hover:text-amber-300" />
					</span>
					{loading ? m.register_submitting() : m.register_submit()}
				</button>
			</div>
			
			<div class="text-center text-xs text-gray-600 dark:text-gray-400">
				{m.register_terms_text()}
				<a href="/terms" class="font-medium text-amber-600 hover:text-amber-500">
					{m.register_terms_link()}
				</a>
				{m.register_and()}
				<a href="/privacy" class="font-medium text-amber-600 hover:text-amber-500">
					{m.register_privacy_link()}
				</a>
			</div>
		</form>
	</div>
</div>
