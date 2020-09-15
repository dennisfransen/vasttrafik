<template>
	<header class="bg-blue-500 text-white h-32 absolute inset-x-0 top-0">
		<div class="flex items-center p-4">
			<button @click="toggle">
				<i class="fas fa-bars mr-6"/>
			</button>
			<h1 class="font-light">{{ $route.meta.title }}</h1>
		</div>
	</header>
	<transition
		enter-class="opacity-0"
		enter-active-class="ease-out transition-medium"
		enter-to-class="opacity-100"
		leave-class="opacity-100"
		leave-active-class="ease-out transition-medium"
		leave-to-class="opacity-0"
	>
		<div
			@keydown.esc="toggle"
			v-show="drawer"
			class="z-10 fixed inset-0 transition-opacity"
		>
			<div
				@click="toggle"
				class="absolute inset-0 bg-black opacity-50"
				tabindex="0"
			></div>
		</div>
	</transition>
	<aside
		class="transform top-0 left-0 w-2/3 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-20"
		:class="drawer ? 'translate-x-0' : '-translate-x-full'"
	>
		<header class="flex justify-center items-center bg-blue-500 h-40">
			<div class="text-center">
				<i class="fas fa-user fill-current text-white fa-2x"></i>
				<h2 class="text-white text-base font-normal mt-2">Mitt konto</h2>
				<p class="text-white text-sm font-normal mt-1">Ej inloggad</p>
			</div>
		</header>
		<section class="px-4 py-2">
			<a @click="toggle(item.route)" class="flex items-center py-2 cursor-pointer" v-for="(item, i) in firstSection" :key="i">
				<i class="fas fa-user fill-current text-gray-600 fa-1x mr-8"></i>
				<p class="text-sm font-medium text-gray-600" v-text="item.title"></p>
			</a>
		</section>
		<hr>
		<section class="px-4 py-2">
			<a @click="goTo(item.route)" class="flex items-center py-2 cursor-pointer" v-for="(item, i) in secondSection" :key="i">
				<i class="fas fa-user fill-current text-gray-600 fa-1x mr-8"></i>
				<p class="text-sm font-medium text-gray-600" v-text="item.title"></p>
			</a>
		</section>
		<hr>
		<div class="text-right mr-4 mt-1">
			<small class="text-xs text-gray-500">Version 4.12.0 (3249)</small>
		</div>
	</aside>
</template>

<script>
export default {
	name: "AppBar",
	data: () => ({
		drawer: false,
		firstSection: [
			{icon: '', title: 'Logga in', route: '/'},
			{icon: '', title: 'Skapa konto', route: '/'},
		],
		secondSection: [
			{icon: '', title: 'Mina inställningar', route: '/'},
			{icon: '', title: 'Låna ut biljett', route: '/'},
			{icon: '', title: 'Lös in värdekod', route: '/'},
			{icon: '', title: 'Återbäring', route: '/'},
			{icon: '', title: 'Tidigare köp', route: '/'},
			{icon: '', title: 'Lämna feedback', route: '/'},
			{icon: '', title: 'Mer om To Go', route: '/'},
			{icon: '', title: 'Ring kundservice', route: '/'},
		]
	}),
	methods: {
		toggle() {
			this.drawer = !this.drawer;
		},
		goTo(route) {
			this.toggle();
			this.$router.push(route)
		}
	}
}
</script>
