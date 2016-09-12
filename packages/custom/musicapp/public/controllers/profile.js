'use strict';

	/*
		JOHN PAPA STYLE Y024
		Using named functions instead of passing an anonymous function in as a callback.
	*/

	/*
		JOHN PAPA STYLE Y022
		When using a module, avoid using a variable and instead use chaining with the getter syntax.
	*/

angular.module('mean.meanStarter').controller('ProfileCtrl', ProfileCtrl);


	ProfileCtrl.$inject = ['profile','$uibModal','$log'];

	/*
		JOHN PAPA STYLE Y031
		Using the controllerAs syntax over the classic controller with $scope syntax.
		
	*/

    function ProfileCtrl(profile,$uibModal, $log){
    	/*
			JOHN PAPA STYLE Y032
			Using a capture variable for this when using the controllerAs syntax. 

    	*/
		var prof = this;
		prof.profile = profile; // Profile data as received from the resolve while routing.
		// Method call to open the modal
		prof.openEditModal = function(){
			var modalInstance = $uibModal.open({
			  animation : true,
			  backdrop : true,
		      ariaLabelledBy: 'modal-title',
		      ariaDescribedBy: 'modal-body',
		      templateUrl: 'meanStarter/views/updateModal.html',
		      size: 'sm',
		      controller: 'ProfileUpdateCtrl',
	      	  controllerAs: 'profUpdate',
		      resolve: {
		        items: function () {
		          return prof.profile;
		        }
		      }
		    });
		    modalInstance.result.then(function (selectedItem) {
		      prof.profile = selectedItem;
		    }, function () {
		    });
		}
	}

	

/*
	THE FOLLOWING IS THE MODAL CONTROLLER.
	
*/

angular.module('mean.meanStarter').controller('ProfileUpdateCtrl',ProfileUpdateCtrl);

ProfileUpdateCtrl.$inject = ['$uibModalInstance','items'];

function ProfileUpdateCtrl($uibModalInstance, items){
	var profUpdate = this;
	profUpdate.profile = items;
	profUpdate.updateProfile = function(){
		$uibModalInstance.close(profUpdate.profile);
	};

	profUpdate.cancel = function(){
		$uibModalInstance.dismiss('cancel');	
	};
}
//Profile component controller
angular.module('mean.meanStarter').controller('ProfileComponentController',ProfileComponentController);


function ProfileComponentController(){
	var ctrl = this;
}

//Profile component declaration
angular.module('mean.meanStarter').component('profilePage', {
  templateUrl: 'meanStarter/views/profileComponent.html',
  controller: 'ProfileComponentController',
  bindings: {
    profile: '='
  }
});

