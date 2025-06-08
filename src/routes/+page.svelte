<script lang="ts">
	import { Beer, Trophy, Users, Calendar, Star, Award, TrendingUp } from '@lucide/svelte';
</script>

<svelte:head>
	<title>BrewComp - Homebrew Competition Platform</title>
	<meta name="description" content="The ultimate platform for homebrew beer competitions. Register your beers, compete, and get expert judging feedback." />
</svelte:head>

<!-- Hero Section -->
<section class="relative overflow-hidden">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
		<div class="text-center">
			<div class="mb-8">
				<div class="inline-flex items-center space-x-2 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 px-4 py-2 rounded-full text-sm font-medium">
					<Trophy class="h-4 w-4" />
					<span>Join the Competition</span>
				</div>
			</div>
			
			<h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
				Compete with Your
				<span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">
					Best Brews
				</span>
			</h1>
			
			<p class="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-3xl mx-auto">
				Register your homebrewed beers for competitions, get expert feedback from certified judges, 
				and see how your creations stack up against fellow brewers.
			</p>
			
			<div class="flex flex-col sm:flex-row gap-4 justify-center">
				<a href="/events" class="btn variant-filled-primary text-lg px-8 py-3">
					View Competitions
				</a>
				<a href="/register" class="btn variant-soft-primary text-lg px-8 py-3">
					Get Started
				</a>
			</div>
		</div>
	</div>
</section>

<!-- Features Section -->
<section class="py-20 bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-16">
			<h2 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
				Everything You Need to Compete
			</h2>
			<p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
				From registration to results, we've built the complete platform for homebrew competitions.
			</p>
		</div>
		
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			<!-- Register Beers -->
			<div class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-amber-100 dark:border-gray-700">
				<div class="bg-gradient-to-r from-amber-500 to-orange-600 p-3 rounded-xl w-fit mb-6">
					<Beer class="h-8 w-8 text-white" />
				</div>
				<h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Register Your Beers</h3>
				<p class="text-gray-600 dark:text-gray-300 mb-6">
					Easily register your homebrewed beers for competitions. Upload photos, add detailed descriptions, and track your entries.
				</p>
				<ul class="space-y-2 text-sm text-gray-600 dark:text-gray-300">
					<li class="flex items-center space-x-2">
						<div class="w-2 h-2 bg-amber-500 rounded-full"></div>
						<span>Multiple beer categories</span>
					</li>
					<li class="flex items-center space-x-2">
						<div class="w-2 h-2 bg-amber-500 rounded-full"></div>
						<span>Photo uploads</span>
					</li>
					<li class="flex items-center space-x-2">
						<div class="w-2 h-2 bg-amber-500 rounded-full"></div>
						<span>Recipe tracking</span>
					</li>
				</ul>
			</div>
			
			<!-- Expert Judging -->
			<div class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-amber-100 dark:border-gray-700">
				<div class="bg-gradient-to-r from-orange-500 to-red-600 p-3 rounded-xl w-fit mb-6">
					<Trophy class="h-8 w-8 text-white" />
				</div>
				<h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Expert Judging</h3>
				<p class="text-gray-600 dark:text-gray-300 mb-6">
					Get your beers evaluated by certified judges who provide detailed feedback and professional scoring.
				</p>
				<ul class="space-y-2 text-sm text-gray-600 dark:text-gray-300">
					<li class="flex items-center space-x-2">
						<div class="w-2 h-2 bg-orange-500 rounded-full"></div>
						<span>BJCP certified judges</span>
					</li>
					<li class="flex items-center space-x-2">
						<div class="w-2 h-2 bg-orange-500 rounded-full"></div>
						<span>Detailed scorecards</span>
					</li>
					<li class="flex items-center space-x-2">
						<div class="w-2 h-2 bg-orange-500 rounded-full"></div>
						<span>Improvement feedback</span>
					</li>
				</ul>
			</div>
			
			<!-- Track Progress -->
			<div class="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-amber-100 dark:border-gray-700">
				<div class="bg-gradient-to-r from-blue-500 to-indigo-600 p-3 rounded-xl w-fit mb-6">
					<TrendingUp class="h-8 w-8 text-white" />
				</div>
				<h3 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">Track Your Progress</h3>
				<p class="text-gray-600 dark:text-gray-300 mb-6">
					Monitor your competition history, view scores, and see how you rank against other brewers in the community.
				</p>
				<ul class="space-y-2 text-sm text-gray-600 dark:text-gray-300">
					<li class="flex items-center space-x-2">
						<div class="w-2 h-2 bg-blue-500 rounded-full"></div>
						<span>Competition history</span>
					</li>
					<li class="flex items-center space-x-2">
						<div class="w-2 h-2 bg-blue-500 rounded-full"></div>
						<span>Score analytics</span>
					</li>
					<li class="flex items-center space-x-2">
						<div class="w-2 h-2 bg-blue-500 rounded-full"></div>
						<span>Community rankings</span>
					</li>
				</ul>
			</div>
		</div>
	</div>
</section>

<!-- Stats Section -->
<section class="py-20">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="bg-gradient-to-r from-amber-500 to-orange-600 rounded-3xl p-12 text-white">
			<div class="text-center mb-12">
				<h2 class="text-3xl sm:text-4xl font-bold mb-4">
					Join the Growing Community
				</h2>
				<p class="text-xl text-amber-100">
					Thousands of brewers are already competing and improving their craft
				</p>
			</div>
			
			<div class="grid grid-cols-2 md:grid-cols-4 gap-8">
				<div class="text-center">
					<div class="text-4xl sm:text-5xl font-bold mb-2">1,247</div>
					<div class="text-amber-100">Active Brewers</div>
				</div>
				<div class="text-center">
					<div class="text-4xl sm:text-5xl font-bold mb-2">3,892</div>
					<div class="text-amber-100">Registered Beers</div>
				</div>
				<div class="text-center">
					<div class="text-4xl sm:text-5xl font-bold mb-2">156</div>
					<div class="text-amber-100">Competitions</div>
				</div>
				<div class="text-center">
					<div class="text-4xl sm:text-5xl font-bold mb-2">89</div>
					<div class="text-amber-100">Expert Judges</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="py-20 bg-white/60 dark:bg-gray-800/60 backdrop-blur-lg">
	<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
		<h2 class="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
			Ready to Enter Your First Competition?
		</h2>
		<p class="text-xl text-gray-600 dark:text-gray-300 mb-10">
			Join thousands of homebrewers who are improving their craft through competition and community feedback.
		</p>
		<div class="flex flex-col sm:flex-row gap-4 justify-center">
			<a href="/register" class="btn variant-filled-primary text-lg px-10 py-4">
				Create Account
			</a>
			<a href="/events" class="btn variant-soft-primary text-lg px-10 py-4">
				Browse Events
			</a>
		</div>
	</div>
</section>
