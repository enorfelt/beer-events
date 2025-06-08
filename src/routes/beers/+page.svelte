<script lang="ts">
	import { Beer, Plus, Star, Calendar, Eye } from '@lucide/svelte';
</script>

<svelte:head>
	<title>My Beers - BrewComp</title>
</svelte:head>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
	<!-- Header -->
	<div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
		<div>
			<h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
				My Beer Collection
			</h1>
			<p class="text-xl text-gray-600 dark:text-gray-300">
				Manage your registered beers and track their competition performance.
			</p>
		</div>
		<button class="mt-4 sm:mt-0 btn variant-filled-primary flex items-center space-x-2">
			<Plus class="h-5 w-5" />
			<span>Register New Beer</span>
		</button>
	</div>

	<!-- Beer Grid -->
	<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
		<!-- Beer Card 1 -->
		<div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-amber-100 dark:border-gray-700">
			<div class="aspect-w-16 aspect-h-9 bg-gradient-to-br from-amber-200 to-orange-300">
				<div class="flex items-center justify-center">
					<Beer class="h-16 w-16 text-amber-700" />
				</div>
			</div>
			<div class="p-6">
				<div class="flex items-start justify-between mb-4">
					<div>
						<h3 class="text-xl font-bold text-gray-900 dark:text-white">Hoppy Horizons IPA</h3>
						<p class="text-gray-600 dark:text-gray-300">American IPA</p>
					</div>
					<div class="flex items-center space-x-1 bg-amber-100 dark:bg-amber-900/50 px-2 py-1 rounded-full">
						<Star class="h-4 w-4 text-amber-500" />
						<span class="text-sm font-medium text-amber-800 dark:text-amber-200">4.2</span>
					</div>
				</div>
				
				<div class="space-y-3 mb-6">
					<div class="flex justify-between text-sm">
						<span class="text-gray-600 dark:text-gray-300">ABV:</span>
						<span class="font-medium text-gray-900 dark:text-white">6.8%</span>
					</div>
					<div class="flex justify-between text-sm">
						<span class="text-gray-600 dark:text-gray-300">IBU:</span>
						<span class="font-medium text-gray-900 dark:text-white">65</span>
					</div>
					<div class="flex justify-between text-sm">
						<span class="text-gray-600 dark:text-gray-300">Competitions:</span>
						<span class="font-medium text-gray-900 dark:text-white">2</span>
					</div>
				</div>

				<div class="mb-4">
					<div class="flex items-center space-x-2 mb-2">
						<Calendar class="h-4 w-4 text-gray-500" />
						<span class="text-sm text-gray-600 dark:text-gray-300">Last Competition</span>
					</div>
					<p class="text-sm text-gray-900 dark:text-white font-medium">Spring Brew Championship</p>
				</div>

				<div class="flex space-x-2">
					<button class="flex-1 btn variant-soft-primary text-sm">
						<Eye class="h-4 w-4 mr-2" />
						View Details
					</button>
					<button class="flex-1 btn variant-filled-primary text-sm">
						Enter Competition
					</button>
				</div>
			</div>
		</div>

		<!-- Beer Card 2 -->
		<div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-amber-100 dark:border-gray-700">
			<div class="aspect-w-16 aspect-h-9 bg-gradient-to-br from-gray-800 to-gray-900">
				<div class="flex items-center justify-center">
					<Beer class="h-16 w-16 text-gray-300" />
				</div>
			</div>
			<div class="p-6">
				<div class="flex items-start justify-between mb-4">
					<div>
						<h3 class="text-xl font-bold text-gray-900 dark:text-white">Midnight Stout</h3>
						<p class="text-gray-600 dark:text-gray-300">Imperial Stout</p>
					</div>
					<div class="flex items-center space-x-1 bg-amber-100 dark:bg-amber-900/50 px-2 py-1 rounded-full">
						<Star class="h-4 w-4 text-amber-500" />
						<span class="text-sm font-medium text-amber-800 dark:text-amber-200">4.6</span>
					</div>
				</div>
				
				<div class="space-y-3 mb-6">
					<div class="flex justify-between text-sm">
						<span class="text-gray-600 dark:text-gray-300">ABV:</span>
						<span class="font-medium text-gray-900 dark:text-white">9.2%</span>
					</div>
					<div class="flex justify-between text-sm">
						<span class="text-gray-600 dark:text-gray-300">IBU:</span>
						<span class="font-medium text-gray-900 dark:text-white">45</span>
					</div>
					<div class="flex justify-between text-sm">
						<span class="text-gray-600 dark:text-gray-300">Competitions:</span>
						<span class="font-medium text-gray-900 dark:text-white">1</span>
					</div>
				</div>

				<div class="mb-4">
					<div class="flex items-center space-x-2 mb-2">
						<Calendar class="h-4 w-4 text-gray-500" />
						<span class="text-sm text-gray-600 dark:text-gray-300">Last Competition</span>
					</div>
					<p class="text-sm text-gray-900 dark:text-white font-medium">Winter Warmer Contest</p>
				</div>

				<div class="flex space-x-2">
					<button class="flex-1 btn variant-soft-primary text-sm">
						<Eye class="h-4 w-4 mr-2" />
						View Details
					</button>
					<button class="flex-1 btn variant-filled-primary text-sm">
						Enter Competition
					</button>
				</div>
			</div>
		</div>

		<!-- Beer Card 3 -->
		<div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-amber-100 dark:border-gray-700">
			<div class="aspect-w-16 aspect-h-9 bg-gradient-to-br from-yellow-200 to-yellow-400">
				<div class="flex items-center justify-center">
					<Beer class="h-16 w-16 text-yellow-700" />
				</div>
			</div>
			<div class="p-6">
				<div class="flex items-start justify-between mb-4">
					<div>
						<h3 class="text-xl font-bold text-gray-900 dark:text-white">Golden Wheat</h3>
						<p class="text-gray-600 dark:text-gray-300">Hefeweizen</p>
					</div>
					<div class="flex items-center space-x-1 bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full">
						<span class="text-sm font-medium text-gray-600 dark:text-gray-300">New</span>
					</div>
				</div>
				
				<div class="space-y-3 mb-6">
					<div class="flex justify-between text-sm">
						<span class="text-gray-600 dark:text-gray-300">ABV:</span>
						<span class="font-medium text-gray-900 dark:text-white">5.2%</span>
					</div>
					<div class="flex justify-between text-sm">
						<span class="text-gray-600 dark:text-gray-300">IBU:</span>
						<span class="font-medium text-gray-900 dark:text-white">15</span>
					</div>
					<div class="flex justify-between text-sm">
						<span class="text-gray-600 dark:text-gray-300">Competitions:</span>
						<span class="font-medium text-gray-900 dark:text-white">0</span>
					</div>
				</div>

				<div class="mb-4">
					<p class="text-sm text-gray-600 dark:text-gray-300">Ready to enter your first competition!</p>
				</div>

				<div class="flex space-x-2">
					<button class="flex-1 btn variant-soft-primary text-sm">
						<Eye class="h-4 w-4 mr-2" />
						View Details
					</button>
					<button class="flex-1 btn variant-filled-primary text-sm">
						Enter Competition
					</button>
				</div>
			</div>
		</div>

		<!-- Add New Beer Card -->
		<div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border-2 border-dashed border-amber-300 dark:border-amber-600 hover:border-amber-400 dark:hover:border-amber-500 transition-colors duration-200">
			<div class="p-6 flex flex-col items-center justify-center min-h-[400px] text-center">
				<div class="bg-amber-100 dark:bg-amber-900/50 p-4 rounded-full mb-4">
					<Plus class="h-8 w-8 text-amber-600 dark:text-amber-400" />
				</div>
				<h3 class="text-xl font-bold text-gray-900 dark:text-white mb-2">Add New Beer</h3>
				<p class="text-gray-600 dark:text-gray-300 mb-6">
					Register a new beer for competitions
				</p>
				<button class="btn variant-filled-primary">
					Register Beer
				</button>
			</div>
		</div>
	</div>
</div>
