<script lang="ts">
	import { Trophy, Medal, Star, TrendingUp } from '@lucide/svelte';
</script>

<svelte:head>
	<title>Leaderboard - BrewComp</title>
</svelte:head>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
	<!-- Header -->
	<div class="text-center mb-12">
		<h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
			Competition Leaderboard
		</h1>
		<p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
			See who's leading the pack in our brewing competitions and get inspired by top performers.
		</p>
	</div>

	<!-- Top 3 Podium -->
	<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
		<!-- 2nd Place -->
		<div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-gray-200 dark:border-gray-700 order-2 md:order-1">
			<div class="text-center">
				<div class="bg-gradient-to-r from-gray-400 to-gray-500 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
					<Medal class="h-10 w-10 text-white" />
				</div>
				<div class="bg-gray-100 dark:bg-gray-700 w-16 h-16 rounded-full mx-auto mb-4"></div>
				<h3 class="text-xl font-bold text-gray-900 dark:text-white">Sarah Wilson</h3>
				<p class="text-gray-600 dark:text-gray-300 mb-4">Craft Brewing Co.</p>
				<div class="bg-gray-50 dark:bg-gray-700 rounded-lg p-4">
					<div class="flex items-center justify-center space-x-2 mb-2">
						<Star class="h-5 w-5 text-amber-500" />
						<span class="text-2xl font-bold text-gray-900 dark:text-white">4.6</span>
					</div>
					<p class="text-sm text-gray-600 dark:text-gray-300">Average Score</p>
				</div>
			</div>
		</div>

		<!-- 1st Place -->
		<div class="bg-gradient-to-br from-amber-400 to-orange-500 rounded-2xl shadow-2xl p-8 text-white order-1 md:order-2 transform md:scale-105">
			<div class="text-center">
				<div class="bg-white/20 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-4">
					<Trophy class="h-12 w-12 text-white" />
				</div>
				<div class="bg-white/20 w-20 h-20 rounded-full mx-auto mb-4"></div>
				<h3 class="text-2xl font-bold">Alex Thompson</h3>
				<p class="text-amber-100 mb-4">Horizon Brewing</p>
				<div class="bg-white/10 rounded-lg p-4">
					<div class="flex items-center justify-center space-x-2 mb-2">
						<Star class="h-6 w-6 text-white" />
						<span class="text-3xl font-bold">4.8</span>
					</div>
					<p class="text-sm text-amber-100">Average Score</p>
				</div>
			</div>
		</div>

		<!-- 3rd Place -->
		<div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border border-amber-200 dark:border-gray-700 order-3">
			<div class="text-center">
				<div class="bg-gradient-to-r from-amber-600 to-yellow-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
					<Medal class="h-10 w-10 text-white" />
				</div>
				<div class="bg-amber-100 dark:bg-amber-900/50 w-16 h-16 rounded-full mx-auto mb-4"></div>
				<h3 class="text-xl font-bold text-gray-900 dark:text-white">Mike Rodriguez</h3>
				<p class="text-gray-600 dark:text-gray-300 mb-4">Artisan Ales</p>
				<div class="bg-amber-50 dark:bg-amber-900/20 rounded-lg p-4">
					<div class="flex items-center justify-center space-x-2 mb-2">
						<Star class="h-5 w-5 text-amber-500" />
						<span class="text-2xl font-bold text-gray-900 dark:text-white">4.4</span>
					</div>
					<p class="text-sm text-gray-600 dark:text-gray-300">Average Score</p>
				</div>
			</div>
		</div>
	</div>

	<!-- Full Leaderboard -->
	<div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-amber-100 dark:border-gray-700">
		<div class="bg-gradient-to-r from-amber-500 to-orange-600 p-6">
			<h2 class="text-2xl font-bold text-white">Full Rankings</h2>
			<p class="text-amber-100">Based on average scores across all competitions</p>
		</div>
		
		<div class="overflow-x-auto">
			<table class="w-full">
				<thead class="bg-gray-50 dark:bg-gray-700">
					<tr>
						<th class="px-6 py-4 text-left text-sm font-medium text-gray-500 dark:text-gray-300">Rank</th>
						<th class="px-6 py-4 text-left text-sm font-medium text-gray-500 dark:text-gray-300">Brewer</th>
						<th class="px-6 py-4 text-left text-sm font-medium text-gray-500 dark:text-gray-300">Brewery</th>
						<th class="px-6 py-4 text-left text-sm font-medium text-gray-500 dark:text-gray-300">Avg Score</th>
						<th class="px-6 py-4 text-left text-sm font-medium text-gray-500 dark:text-gray-300">Competitions</th>
						<th class="px-6 py-4 text-left text-sm font-medium text-gray-500 dark:text-gray-300">Trend</th>
					</tr>
				</thead>
				<tbody class="divide-y divide-gray-200 dark:divide-gray-600">
					<tr class="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20">
						<td class="px-6 py-4">
							<div class="flex items-center space-x-2">
								<Trophy class="h-5 w-5 text-amber-500" />
								<span class="font-bold text-gray-900 dark:text-white">1</span>
							</div>
						</td>
						<td class="px-6 py-4">
							<div class="flex items-center space-x-3">
								<div class="bg-amber-100 dark:bg-amber-900/50 w-10 h-10 rounded-full"></div>
								<span class="font-medium text-gray-900 dark:text-white">Alex Thompson</span>
							</div>
						</td>
						<td class="px-6 py-4 text-gray-600 dark:text-gray-300">Horizon Brewing</td>
						<td class="px-6 py-4">
							<div class="flex items-center space-x-1">
								<Star class="h-4 w-4 text-amber-500" />
								<span class="font-bold text-gray-900 dark:text-white">4.8</span>
							</div>
						</td>
						<td class="px-6 py-4 text-gray-600 dark:text-gray-300">8</td>
						<td class="px-6 py-4">
							<div class="flex items-center space-x-1 text-green-600 dark:text-green-400">
								<TrendingUp class="h-4 w-4" />
								<span class="text-sm">+0.2</span>
							</div>
						</td>
					</tr>
					
					<tr>
						<td class="px-6 py-4">
							<div class="flex items-center space-x-2">
								<Medal class="h-5 w-5 text-gray-400" />
								<span class="font-bold text-gray-900 dark:text-white">2</span>
							</div>
						</td>
						<td class="px-6 py-4">
							<div class="flex items-center space-x-3">
								<div class="bg-gray-100 dark:bg-gray-700 w-10 h-10 rounded-full"></div>
								<span class="font-medium text-gray-900 dark:text-white">Sarah Wilson</span>
							</div>
						</td>
						<td class="px-6 py-4 text-gray-600 dark:text-gray-300">Craft Brewing Co.</td>
						<td class="px-6 py-4">
							<div class="flex items-center space-x-1">
								<Star class="h-4 w-4 text-amber-500" />
								<span class="font-bold text-gray-900 dark:text-white">4.6</span>
							</div>
						</td>
						<td class="px-6 py-4 text-gray-600 dark:text-gray-300">12</td>
						<td class="px-6 py-4">
							<div class="flex items-center space-x-1 text-green-600 dark:text-green-400">
								<TrendingUp class="h-4 w-4" />
								<span class="text-sm">+0.1</span>
							</div>
						</td>
					</tr>
					
					<tr>
						<td class="px-6 py-4">
							<div class="flex items-center space-x-2">
								<Medal class="h-5 w-5 text-amber-600" />
								<span class="font-bold text-gray-900 dark:text-white">3</span>
							</div>
						</td>
						<td class="px-6 py-4">
							<div class="flex items-center space-x-3">
								<div class="bg-amber-100 dark:bg-amber-900/50 w-10 h-10 rounded-full"></div>
								<span class="font-medium text-gray-900 dark:text-white">Mike Rodriguez</span>
							</div>
						</td>
						<td class="px-6 py-4 text-gray-600 dark:text-gray-300">Artisan Ales</td>
						<td class="px-6 py-4">
							<div class="flex items-center space-x-1">
								<Star class="h-4 w-4 text-amber-500" />
								<span class="font-bold text-gray-900 dark:text-white">4.4</span>
							</div>
						</td>
						<td class="px-6 py-4 text-gray-600 dark:text-gray-300">6</td>
						<td class="px-6 py-4">
							<div class="flex items-center space-x-1 text-gray-500 dark:text-gray-400">
								<span class="text-sm">-</span>
							</div>
						</td>
					</tr>
					
					<tr>
						<td class="px-6 py-4 font-bold text-gray-900 dark:text-white">4</td>
						<td class="px-6 py-4">
							<div class="flex items-center space-x-3">
								<div class="bg-blue-100 dark:bg-blue-900/50 w-10 h-10 rounded-full"></div>
								<span class="font-medium text-gray-900 dark:text-white">Emma Davis</span>
							</div>
						</td>
						<td class="px-6 py-4 text-gray-600 dark:text-gray-300">Valley Brewing</td>
						<td class="px-6 py-4">
							<div class="flex items-center space-x-1">
								<Star class="h-4 w-4 text-amber-500" />
								<span class="font-bold text-gray-900 dark:text-white">4.2</span>
							</div>
						</td>
						<td class="px-6 py-4 text-gray-600 dark:text-gray-300">9</td>
						<td class="px-6 py-4">
							<div class="flex items-center space-x-1 text-green-600 dark:text-green-400">
								<TrendingUp class="h-4 w-4" />
								<span class="text-sm">+0.3</span>
							</div>
						</td>
					</tr>
					
					<tr>
						<td class="px-6 py-4 font-bold text-gray-900 dark:text-white">5</td>
						<td class="px-6 py-4">
							<div class="flex items-center space-x-3">
								<div class="bg-green-100 dark:bg-green-900/50 w-10 h-10 rounded-full"></div>
								<span class="font-medium text-gray-900 dark:text-white">James Chen</span>
							</div>
						</td>
						<td class="px-6 py-4 text-gray-600 dark:text-gray-300">Mountain Brew</td>
						<td class="px-6 py-4">
							<div class="flex items-center space-x-1">
								<Star class="h-4 w-4 text-amber-500" />
								<span class="font-bold text-gray-900 dark:text-white">4.1</span>
							</div>
						</td>
						<td class="px-6 py-4 text-gray-600 dark:text-gray-300">7</td>
						<td class="px-6 py-4">
							<div class="flex items-center space-x-1 text-gray-500 dark:text-gray-400">
								<span class="text-sm">-</span>
							</div>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</div>
