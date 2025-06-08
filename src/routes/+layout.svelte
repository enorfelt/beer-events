<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import { Beer, Trophy, Calendar, Users, Menu, X } from '@lucide/svelte';
	
	let { children } = $props();
	let mobileMenuOpen = $state(false);
	
	const navigation = [
		{ name: 'Home', href: '/', icon: Calendar },
		{ name: 'Events', href: '/events', icon: Calendar },
		{ name: 'My Beers', href: '/beers', icon: Beer },
		{ name: 'Judging', href: '/judging', icon: Trophy },
		{ name: 'Leaderboard', href: '/leaderboard', icon: Users }
	];
</script>

<div class="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100 dark:from-gray-900 dark:to-gray-800">
	<!-- Navigation -->
	<nav class="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-b border-amber-200 dark:border-gray-700 sticky top-0 z-50">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<div class="flex justify-between h-16">
				<!-- Logo and brand -->
				<div class="flex items-center">
					<div class="flex-shrink-0 flex items-center space-x-3">
						<div class="bg-gradient-to-r from-amber-500 to-orange-600 p-2 rounded-lg">
							<Beer class="h-6 w-6 text-white" />
						</div>
						<div>
							<h1 class="text-xl font-bold text-gray-900 dark:text-white">BrewComp</h1>
							<p class="text-xs text-gray-600 dark:text-gray-400">Competition Platform</p>
						</div>
					</div>
				</div>

				<!-- Desktop navigation -->
				<div class="hidden md:flex items-center space-x-1">
					{#each navigation as item}
						<a
							href={item.href}
							class="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center space-x-2
								{$page.url.pathname === item.href
									? 'bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-200'
									: 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}"
						>
							<svelte:component this={item.icon} class="h-4 w-4" />
							<span>{item.name}</span>
						</a>
					{/each}
				</div>

				<!-- User menu -->
				<div class="hidden md:flex items-center space-x-4">
					<button class="btn variant-soft-primary">
						Sign In
					</button>
					<button class="btn variant-filled-primary">
						Register
					</button>
				</div>

				<!-- Mobile menu button -->
				<div class="md:hidden flex items-center">
					<button
						onclick={() => mobileMenuOpen = !mobileMenuOpen}
						class="p-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
					>
						{#if mobileMenuOpen}
							<X class="h-6 w-6" />
						{:else}
							<Menu class="h-6 w-6" />
						{/if}
					</button>
				</div>
			</div>
		</div>

		<!-- Mobile navigation -->
		{#if mobileMenuOpen}
			<div class="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700">
				<div class="px-4 py-2 space-y-1">
					{#each navigation as item}
						<a
							href={item.href}
							class="flex items-center space-x-3 px-3 py-2 rounded-lg text-base font-medium transition-all duration-200
								{$page.url.pathname === item.href
									? 'bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-200'
									: 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'}"
							onclick={() => mobileMenuOpen = false}
						>
							<svelte:component this={item.icon} class="h-5 w-5" />
							<span>{item.name}</span>
						</a>
					{/each}
					<div class="pt-4 pb-2 space-y-2">
						<button class="w-full btn variant-soft-primary">
							Sign In
						</button>
						<button class="w-full btn variant-filled-primary">
							Register
						</button>
					</div>
				</div>
			</div>
		{/if}
	</nav>

	<!-- Main content -->
	<main class="flex-1">
		{@render children()}
	</main>

	<!-- Footer -->
	<footer class="bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg border-t border-amber-200 dark:border-gray-700 mt-auto">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
			<div class="grid grid-cols-1 md:grid-cols-4 gap-8">
				<div class="col-span-1 md:col-span-2">
					<div class="flex items-center space-x-3 mb-4">
						<div class="bg-gradient-to-r from-amber-500 to-orange-600 p-2 rounded-lg">
							<Beer class="h-6 w-6 text-white" />
						</div>
						<div>
							<h2 class="text-lg font-bold text-gray-900 dark:text-white">BrewComp</h2>
							<p class="text-sm text-gray-600 dark:text-gray-400">Homebrew Competition Platform</p>
						</div>
					</div>
					<p class="text-gray-600 dark:text-gray-400 text-sm max-w-md">
						The ultimate platform for homebrew competitions. Register your beers, compete with fellow brewers, and get expert judging feedback.
					</p>
				</div>
				<div>
					<h3 class="font-semibold text-gray-900 dark:text-white mb-3">Platform</h3>
					<ul class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
						<li><a href="/events" class="hover:text-amber-600 dark:hover:text-amber-400">Events</a></li>
						<li><a href="/beers" class="hover:text-amber-600 dark:hover:text-amber-400">My Beers</a></li>
						<li><a href="/judging" class="hover:text-amber-600 dark:hover:text-amber-400">Judging</a></li>
						<li><a href="/leaderboard" class="hover:text-amber-600 dark:hover:text-amber-400">Leaderboard</a></li>
					</ul>
				</div>
				<div>
					<h3 class="font-semibold text-gray-900 dark:text-white mb-3">Support</h3>
					<ul class="space-y-2 text-sm text-gray-600 dark:text-gray-400">
						<li><a href="/help" class="hover:text-amber-600 dark:hover:text-amber-400">Help Center</a></li>
						<li><a href="/rules" class="hover:text-amber-600 dark:hover:text-amber-400">Competition Rules</a></li>
						<li><a href="/contact" class="hover:text-amber-600 dark:hover:text-amber-400">Contact Us</a></li>
					</ul>
				</div>
			</div>
			<div class="border-t border-gray-200 dark:border-gray-700 mt-8 pt-8 text-center">
				<p class="text-sm text-gray-600 dark:text-gray-400">
					© 2025 BrewComp. All rights reserved. Made with ❤️ for the homebrew community.
				</p>
			</div>
		</div>
	</footer>
</div>
