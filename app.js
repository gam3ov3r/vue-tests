Vue.component('greeting', {
	template: '<p>Hey there, i am {{name}} . <button v-on:click="changeName">Change name</button></p>',
	data: function(){
		return {
			name: 'Dave'
		}
	},
	methods: {
		changeName: function(){
			this.name = 'Daverz';
		}
	}
});

new Vue({
	el: '#vue-app-one'
});

new Vue({
	el: '#vue-app-two'
});