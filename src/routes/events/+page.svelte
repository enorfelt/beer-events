<script lang="ts">
	import { Calendar, MapPin, Users, Trophy } from '@lucide/svelte';
</script>

<svelte:head>
	<title>Events - BrewComp</title>
</svelte:head>

<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
	<!-- Header -->
	<div class="text-center mb-12">
		<h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
			Upcoming Competitions
		</h1>
		<p class="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
			Join exciting homebrew competitions and showcase your brewing skills to expert judges.
		</p>
	</div>

	<!-- Events Grid -->
	<div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
		<!-- Event Card 1 -->
		<div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-amber-100 dark:border-gray-700">
			<div class="bg-gradient-to-r from-amber-500 to-orange-600 p-6">
				<div class="flex items-center justify-between text-white">
					<div>
						<h3 class="text-2xl font-bold">Spring Brew Championship</h3>
						<p class="text-amber-100">The ultimate spring brewing showdown</p>
					</div>
					<Trophy class="h-12 w-12" />
				</div>
			</div>
			<div class="p-6">
				<div class="space-y-4 mb-6">
					<div class="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
						<Calendar class="h-5 w-5" />
						<span>Registration: March 1 - April 15, 2025</span>
					</div>
					<div class="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
						<MapPin class="h-5 w-5" />
						<span>Location: Downtown Brewing Center</span>
					</div>
					<div class="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
						<Users class="h-5 w-5" />
						<span>127 brewers registered</span>
					</div>
				</div>
				<div class="mb-6">
					<h4 class="font-semibold text-gray-900 dark:text-white mb-2">Categories</h4>
					<div class="flex flex-wrap gap-2">
						<span class="px-3 py-1 bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-200 rounded-full text-sm">IPA</span>
						<span class="px-3 py-1 bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-200 rounded-full text-sm">Stout</span>
						<span class="px-3 py-1 bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-200 rounded-full text-sm">Lager</span>
						<span class="px-3 py-1 bg-amber-100 dark:bg-amber-900/50 text-amber-800 dark:text-amber-200 rounded-full text-sm">Wheat Beer</span>
					</div>
				</div>
				<button class="w-full btn variant-filled-primary">
					Register Now
				</button>
			</div>
		</div>

		<!-- Event Card 2 -->
		<div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-amber-100 dark:border-gray-700">
			<div class="bg-gradient-to-r from-blue-500 to-indigo-600 p-6">
				<div class="flex items-center justify-between text-white">
					<div>
						<h3 class="text-2xl font-bold">Summer Ale Festival</h3>
						<p class="text-blue-100">Celebrate summer with refreshing ales</p>
					</div>
					<Trophy class="h-12 w-12" />
				</div>
			</div>
			<div class="p-6">
				<div class="space-y-4 mb-6">
					<div class="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
						<Calendar class="h-5 w-5" />
						<span>Registration: June 1 - July 20, 2025</span>
					</div>
					<div class="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
						<MapPin class="h-5 w-5" />
						<span>Location: Riverside Park Pavilion</span>
					</div>
					<div class="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
						<Users class="h-5 w-5" />
						<span>89 brewers registered</span>
					</div>
				</div>
				<div class="mb-6">
					<h4 class="font-semibold text-gray-900 dark:text-white mb-2">Categories</h4>
					<div class="flex flex-wrap gap-2">
						<span class="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full text-sm">Pale Ale</span>
						<span class="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full text-sm">Pilsner</span>
						<span class="px-3 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded-full text-sm">Saison</span>
					</div>
				</div>
				<button class="w-full btn variant-soft-primary">
					Register Now
				</button>
			</div>
		</div>

		<!-- Event Card 3 -->
		<div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-amber-100 dark:border-gray-700">
			<div class="bg-gradient-to-r from-red-500 to-pink-600 p-6">
				<div class="flex items-center justify-between text-white">
					<div>
						<h3 class="text-2xl font-bold">Oktoberfest Challenge</h3>
						<p class="text-red-100">Traditional German-style brewing competition</p>
					</div>
					<Trophy class="h-12 w-12" />
				</div>
			</div>
			<div class="p-6">
				<div class="space-y-4 mb-6">
					<div class="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
						<Calendar class="h-5 w-5" />
						<span>Registration: August 1 - September 15, 2025</span>
					</div>
					<div class="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
						<MapPin class="h-5 w-5" />
						<span>Location: German Heritage Center</span>
					</div>
					<div class="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
						<Users class="h-5 w-5" />
						<span>Registration opens soon</span>
					</div>
				</div>
				<div class="mb-6">
					<h4 class="font-semibold text-gray-900 dark:text-white mb-2">Categories</h4>
					<div class="flex flex-wrap gap-2">
						<span class="px-3 py-1 bg-red-100 dark:bg-red-900/50 text-red-800 dark:text-red-200 rounded-full text-sm">Märzen</span>
						<span class="px-3 py-1 bg-red-100 dark:bg-red-900/50 text-red-800 dark:text-red-200 rounded-full text-sm">Weissbier</span>
						<span class="px-3 py-1 bg-red-100 dark:bg-red-900/50 text-red-800 dark:text-red-200 rounded-full text-sm">Bock</span>
					</div>
				</div>
				<button class="w-full btn variant-soft text-gray-500">
					Coming Soon
				</button>
			</div>
		</div>

		<!-- Event Card 4 -->
		<div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-amber-100 dark:border-gray-700">
			<div class="bg-gradient-to-r from-green-500 to-emerald-600 p-6">
				<div class="flex items-center justify-between text-white">
					<div>
						<h3 class="text-2xl font-bold">Holiday Spice Competition</h3>
						<p class="text-green-100">Warm spices and festive flavors</p>
					</div>
					<Trophy class="h-12 w-12" />
				</div>
			</div>
			<div class="p-6">
				<div class="space-y-4 mb-6">
					<div class="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
						<Calendar class="h-5 w-5" />
						<span>Registration: October 1 - November 15, 2025</span>
					</div>
					<div class="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
						<MapPin class="h-5 w-5" />
						<span>Location: Winter Lodge</span>
					</div>
					<div class="flex items-center space-x-3 text-gray-600 dark:text-gray-300">
						<Users class="h-5 w-5" />
						<span>Registration opens soon</span>
					</div>
				</div>
				<div class="mb-6">
					<h4 class="font-semibold text-gray-900 dark:text-white mb-2">Categories</h4>
					<div class="flex flex-wrap gap-2">
						<span class="px-3 py-1 bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200 rounded-full text-sm">Spiced Ales</span>
						<span class="px-3 py-1 bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200 rounded-full text-sm">Winter Warmer</span>
						<span class="px-3 py-1 bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200 rounded-full text-sm">Holiday Beer</span>
					</div>
				</div>
				<button class="w-full btn variant-soft text-gray-500">
					Coming Soon
				</button>
			</div>
		</div>
	</div>
</div>
