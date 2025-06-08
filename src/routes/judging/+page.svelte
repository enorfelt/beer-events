<script lang="ts">
	import { Trophy, Star, Eye, CheckCircle } from '@lucide/svelte';
</script>

<svelte:head>
	<title>Judging Dashboard - BrewComp</title>
</svelte:head>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
	<!-- Header -->
	<div class="text-center mb-12">
		<h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
			Judging Dashboard
		</h1>
		<p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
			Evaluate submitted beers and provide valuable feedback to brewers.
		</p>
	</div>

	<!-- Stats Cards -->
	<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
		<div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-amber-100 dark:border-gray-700">
			<div class="flex items-center space-x-4">
				<div class="bg-blue-100 dark:bg-blue-900/50 p-3 rounded-xl">
					<Eye class="h-8 w-8 text-blue-600 dark:text-blue-400" />
				</div>
				<div>
					<p class="text-3xl font-bold text-gray-900 dark:text-white">12</p>
					<p class="text-gray-600 dark:text-gray-300">Pending Reviews</p>
				</div>
			</div>
		</div>
		
		<div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-amber-100 dark:border-gray-700">
			<div class="flex items-center space-x-4">
				<div class="bg-green-100 dark:bg-green-900/50 p-3 rounded-xl">
					<CheckCircle class="h-8 w-8 text-green-600 dark:text-green-400" />
				</div>
				<div>
					<p class="text-3xl font-bold text-gray-900 dark:text-white">47</p>
					<p class="text-gray-600 dark:text-gray-300">Completed Reviews</p>
				</div>
			</div>
		</div>
		
		<div class="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-amber-100 dark:border-gray-700">
			<div class="flex items-center space-x-4">
				<div class="bg-amber-100 dark:bg-amber-900/50 p-3 rounded-xl">
					<Star class="h-8 w-8 text-amber-600 dark:text-amber-400" />
				</div>
				<div>
					<p class="text-3xl font-bold text-gray-900 dark:text-white">4.3</p>
					<p class="text-gray-600 dark:text-gray-300">Avg. Score Given</p>
				</div>
			</div>
		</div>
	</div>

	<!-- Pending Reviews -->
	<div class="mb-12">
		<h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Pending Reviews</h2>
		<div class="space-y-4">
			<!-- Review Item 1 -->
			<div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-amber-100 dark:border-gray-700">
				<div class="flex items-center justify-between">
					<div class="flex items-center space-x-4">
						<div class="bg-gradient-to-br from-amber-200 to-orange-300 w-16 h-16 rounded-xl flex items-center justify-center">
							<Trophy class="h-8 w-8 text-amber-700" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 dark:text-white">Citrus Burst IPA</h3>
							<p class="text-gray-600 dark:text-gray-300">American IPA • Spring Brew Championship</p>
							<div class="flex items-center space-x-4 mt-2 text-sm text-gray-500 dark:text-gray-400">
								<span>Brewer: Alex Thompson</span>
								<span>•</span>
								<span>ABV: 6.5%</span>
								<span>•</span>
								<span>IBU: 58</span>
							</div>
						</div>
					</div>
					<div class="flex items-center space-x-2">
						<span class="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-200 rounded-full text-sm font-medium">
							Pending
						</span>
						<button class="btn variant-filled-primary">
							Start Review
						</button>
					</div>
				</div>
			</div>

			<!-- Review Item 2 -->
			<div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-amber-100 dark:border-gray-700">
				<div class="flex items-center justify-between">
					<div class="flex items-center space-x-4">
						<div class="bg-gradient-to-br from-gray-700 to-gray-900 w-16 h-16 rounded-xl flex items-center justify-center">
							<Trophy class="h-8 w-8 text-gray-300" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 dark:text-white">Dark Roast Porter</h3>
							<p class="text-gray-600 dark:text-gray-300">Robust Porter • Spring Brew Championship</p>
							<div class="flex items-center space-x-4 mt-2 text-sm text-gray-500 dark:text-gray-400">
								<span>Brewer: Maria Garcia</span>
								<span>•</span>
								<span>ABV: 5.8%</span>
								<span>•</span>
								<span>IBU: 35</span>
							</div>
						</div>
					</div>
					<div class="flex items-center space-x-2">
						<span class="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-200 rounded-full text-sm font-medium">
							Pending
						</span>
						<button class="btn variant-filled-primary">
							Start Review
						</button>
					</div>
				</div>
			</div>

			<!-- Review Item 3 -->
			<div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-amber-100 dark:border-gray-700">
				<div class="flex items-center justify-between">
					<div class="flex items-center space-x-4">
						<div class="bg-gradient-to-br from-yellow-200 to-yellow-400 w-16 h-16 rounded-xl flex items-center justify-center">
							<Trophy class="h-8 w-8 text-yellow-700" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 dark:text-white">Summer Wheat</h3>
							<p class="text-gray-600 dark:text-gray-300">American Wheat • Spring Brew Championship</p>
							<div class="flex items-center space-x-4 mt-2 text-sm text-gray-500 dark:text-gray-400">
								<span>Brewer: John Smith</span>
								<span>•</span>
								<span>ABV: 4.9%</span>
								<span>•</span>
								<span>IBU: 18</span>
							</div>
						</div>
					</div>
					<div class="flex items-center space-x-2">
						<span class="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/50 text-yellow-800 dark:text-yellow-200 rounded-full text-sm font-medium">
							Pending
						</span>
						<button class="btn variant-filled-primary">
							Start Review
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Recent Reviews -->
	<div>
		<h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Recent Reviews</h2>
		<div class="space-y-4">
			<!-- Completed Review 1 -->
			<div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-amber-100 dark:border-gray-700">
				<div class="flex items-center justify-between">
					<div class="flex items-center space-x-4">
						<div class="bg-gradient-to-br from-green-200 to-green-400 w-16 h-16 rounded-xl flex items-center justify-center">
							<Trophy class="h-8 w-8 text-green-700" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 dark:text-white">Hoppy Session</h3>
							<p class="text-gray-600 dark:text-gray-300">Session IPA • Spring Brew Championship</p>
							<div class="flex items-center space-x-4 mt-2 text-sm text-gray-500 dark:text-gray-400">
								<span>Brewer: Sarah Wilson</span>
								<span>•</span>
								<span>Reviewed: 2 days ago</span>
							</div>
						</div>
					</div>
					<div class="flex items-center space-x-2">
						<div class="flex items-center space-x-1 bg-green-100 dark:bg-green-900/50 px-3 py-1 rounded-full">
							<CheckCircle class="h-4 w-4 text-green-600 dark:text-green-400" />
							<span class="text-sm font-medium text-green-800 dark:text-green-200">Complete</span>
						</div>
						<div class="flex items-center space-x-1 bg-amber-100 dark:bg-amber-900/50 px-3 py-1 rounded-full">
							<Star class="h-4 w-4 text-amber-500" />
							<span class="text-sm font-medium text-amber-800 dark:text-amber-200">4.5</span>
						</div>
					</div>
				</div>
			</div>

			<!-- Completed Review 2 -->
			<div class="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-amber-100 dark:border-gray-700">
				<div class="flex items-center justify-between">
					<div class="flex items-center space-x-4">
						<div class="bg-gradient-to-br from-red-200 to-red-400 w-16 h-16 rounded-xl flex items-center justify-center">
							<Trophy class="h-8 w-8 text-red-700" />
						</div>
						<div>
							<h3 class="text-xl font-bold text-gray-900 dark:text-white">Belgian Strong Ale</h3>
							<p class="text-gray-600 dark:text-gray-300">Belgian Strong Golden Ale • Spring Brew Championship</p>
							<div class="flex items-center space-x-4 mt-2 text-sm text-gray-500 dark:text-gray-400">
								<span>Brewer: David Lee</span>
								<span>•</span>
								<span>Reviewed: 3 days ago</span>
							</div>
						</div>
					</div>
					<div class="flex items-center space-x-2">
						<div class="flex items-center space-x-1 bg-green-100 dark:bg-green-900/50 px-3 py-1 rounded-full">
							<CheckCircle class="h-4 w-4 text-green-600 dark:text-green-400" />
							<span class="text-sm font-medium text-green-800 dark:text-green-200">Complete</span>
						</div>
						<div class="flex items-center space-x-1 bg-amber-100 dark:bg-amber-900/50 px-3 py-1 rounded-full">
							<Star class="h-4 w-4 text-amber-500" />
							<span class="text-sm font-medium text-amber-800 dark:text-amber-200">3.8</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
