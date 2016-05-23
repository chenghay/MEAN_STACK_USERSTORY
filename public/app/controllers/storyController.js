angular.module('storyCtrl',['storyService'])

.controller('StoryController',function(Story,socketio){
	
	var vm = this;

	Story.allStory()
		.success(function(data){
			vm.stories = data;

		});

	vm.createStory = function(){
		vm.message = '';
		Story.create(vm.storyData)
			.success(function(data){
				
				//clear up the form
				vm.storyData = '';

				vm.message = data.message;

   				//window.alert(vm.message);

				//vm.stories.push(data);
			});
	};

	socketio.on('story',function(data){
		vm.stories.push(data);
	})
})

//stories is from routes resolve
.controller('AllStoriesController',function(stories,socketio){
	var vm = this;
	vm.stories = stories.data;
	socketio.on('story',function(data){
		vm.stories.push(data);
	});
});