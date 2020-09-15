<template>
	<hr class="ml-8 mr-2">
	<div class="flex justify-between py-4 px-2">
		<div class="flex">
			<i class="far fa-clock mt-1 mr-2 text-lg"/>
			<div>
				<p class="font-bold text-sm">Göteborg - Ale Norra</p>
				<p class="text-sm text-gray-600 font-thin">Vuxen, 180 minuter</p>
			</div>
		</div>
		<div class="text-right font-bold text-sm">
			<p class="pb-2">68 kr</p>
			<button class="bg-green-500 px-4 py-1 rounded-md text-white uppercase font-bold text-sm shadow-md">
				Köp
			</button>
		</div>
	</div>
</template>

<script>
export default {
	name: "HistoryListItem"
}
</script>
