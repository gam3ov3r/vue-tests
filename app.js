new Vue({
	el: '#vue-app',
	data: {
		active: false,
		inactive: false
	},
	methods: {

	},
	computed: {
		compClasses: function(){
			return {
				active: this.active,
				inactive: this.inactive
			}
		}
	}
});