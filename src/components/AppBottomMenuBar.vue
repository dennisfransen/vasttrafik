<template>
	<div class="flex justify-around absolute bottom-0 inset-x-0 h-16 bg-white">
		<router-link class="w-1/3 text-center flex items-center justify-center focus:outline-none" to="/tickets" v-slot="{ isActive }">
			<div>
				<i class="fas fa-check-square text-xl text-gray-600"/>
				<p class="text-xs text-gray-600 font-thin" :class="isActive ? 'text-blue-400' : ''">Biljetter</p>
			</div>
		</router-link>

		<router-link class="w-1/3 text-center flex items-center justify-center focus:outline-none" to="/" v-slot="{ isActive }">
			<div>
				<i class="fas fa-ticket-alt text-xl text-gray-600"/>
				<p class="text-xs text-gray-600 font-thin" :class="isActive ? 'text-blue-400' : ''">Köp biljett</p>
			</div>
		</router-link>

		<router-link class="w-1/3 text-center flex items-center justify-center focus:outline-none" to="/travel_planning" v-slot="{ isActive }">
			<div>
				<i class="fas fa-train text-xl text-gray-600"/>
				<p class="text-xs text-gray-600 font-thin" :class="isActive ? 'text-blue-400' : ''">Reseplanering</p>
			</div>
		</router-link>
	</div>
</template>

<script>
export default {
	name: "AppBottomMenuBar"
}
</script>
