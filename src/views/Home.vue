<template>
	<main class="bg-blue-100 h-screen">
		<div class="absolute top-0 mt-20 right-0 left-0">
			<div class="flex justify-around px-3">
				<TicketTypeCard title="Enkelbiljett" icon="far fa-clock"/>
				<TicketTypeCard title="Periodbiljett" icon="far fa-calendar-alt"/>
				<TicketTypeCard title="Dygnsbiljett" icon="fas fa-history"/>
			</div>
			<div class="container mx-auto px-5 mt-10">
				<div class="polygon-shadow">
					<div class="px-2 rounded-lg bg-white polygon">
						<h3 class="px-2 py-4 text-sm font-light">Dina vanligaste köp</h3>
						<HistoryListItem v-for="n in 3" :key="n"/>
					</div>
				</div>
			</div>
		</div>
	</main>
</template>

<script>
import TicketTypeCard from "@/components/TicketTypeCard"
import HistoryListItem from "@/components/HistoryListItem"

export default {
	name: "Home",
	components: {
		TicketTypeCard,
		HistoryListItem
	},
}
</script>

<style scoped>
.polygon {
	clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 10%, 90% 0);
}

.polygon-shadow {
	filter: drop-shadow(2px 2px 6px rgba(0, 0, 0, 0.2));
}
</style>
