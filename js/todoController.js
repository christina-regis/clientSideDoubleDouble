angular.module('TodoApp')
	.controller('TodoController', TodoController)

TodoController.$inject = ['$http']

function TodoController($http){
	var self = this;
	self.addTodo = addTodo;
	self.getTodo = getTodo;
	// self.deleteTodo = deleteTodo;
	self.newTodo = {};
	self.allTasks = []

	function getTodo(){
		$http
			.get('http://localhost:3000/api/todos')
			.then(function(response){
				console.log(response);
				self.allTasks = response.data;
			});
	}

	getTodo();


	function addTodo(){
		$http
			.post('http://localhost:3000/api/todos', self.newTodo)
			.then(function(response){
				console.log(response);
				getTodo();
			});
			self.newTodo = {};
	}

}