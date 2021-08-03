<template>
	<div class="settingto">
			<div class="contain">
				<!-- <demo></demo> -->
			</div>
	</div>

</template>

<script>
	import Settingto from "@/components/settingto.vue";
	
	//     import Sortable from 'sortablejs'
	// import draggable from 'vuedraggable';
	export default {
		name: "settingto",
		components: {
			// draggable,
			// Sortable
		},
		data() {
			return {
				falgs: 'article',
				disabled: false,
				list1: [],
				showitem: false,
				showstart:false,
				issuccess: true,
				list3: [{
						id: 1,
						name: "b"
					}, {
						id: 2,
						name: "a"
					}, {
						id: 3,
						name: "l"
					},
					{
						id: 4,
						name: "l"
					}
				],
				list2: [{
						id: 1,
						name: "b"
					}, {
						id: 2,
						name: "l"
					}, {
						id: 3,
						name: "a"
					},
					{
						id: 4,
						name: "l"
					}
					
				],
				id: '',
				ended: true,
				page: this.page++,
				type: 'pageto',
			}
		},
		computed: {},
		methods: {
		
		},
		
	};
	// var A = document.getElementById('A');
	// console.log(this.A);
	// var B = document.getElementById('B');
	// new	Sortable.create(this.A, {
	//   animation: 200,
	//   group: {
	//     name: "shared",
	//     pull: "clone",
	//     revertClone: true,
	//   },
	//   sort: true
	// });
	// 
	// new	Sortable.create(this.B, {
	//   group: "shared",
	//   sort: false
	// });
</script>

<style scoped lang="less">
	body {
  padding: 20px;
}

.list-group-item {
  cursor: move;
  cursor: -webkit-grabbing;
}

</style>
