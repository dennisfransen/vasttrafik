<template>
	<div class="shadow-lg text-center rounded-lg px-5 py-2 bg-white">
		<i :class="`${icon} text-2xl mt-2`"/>
		<h2 class="mt-1 font-light text-sm">{{ title }}</h2>
	</div>
</template>

<script>
export default {
	name: "TicketTypeCard",
	props: {
		title: String,
		icon: String,
	},
}
</script>
