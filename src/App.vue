<template>
	<AppBar/>
	<router-view/>
	<AppBottomMenuBar/>
</template>

<script>
import AppBar from "@/components/AppBar"
import AppBottomMenuBar from "@/components/AppBottomMenuBar"

export default {
	name: "App",
	components: {
		AppBar,
		AppBottomMenuBar
	}
}
</script>
