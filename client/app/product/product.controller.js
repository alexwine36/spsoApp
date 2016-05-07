'use strict';
(function(){

class ProductComponent {
  constructor($http, $scope, socket) {
    this.$http = $http;
    this.socket = socket;
    this.products = [];
    this.isAdmin = $scope.isAdmin;

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('product');
    });
    
  }

  $onInit() {
    this.$http.get('/api/products').then(response => {
      this.products = response.data;
      this.socket.syncUpdates('product', this.products);
    });
  }

  addProduct() {
    if (this.productName) {
      
      this.$http.post('/api/products', { name: this.productName, description: this.productDescription, price: this.productPrice });
      this.productName = '';
      this.productDescription = '';
      this.productPrice = '';
    }
  }

  deleteProduct(product) {
    this.$http.delete('/api/products/' + product._id);
  }
  
  // toggleEdit(product){
  //   product.edit = !product.edit;
  // }

  // saveProduct(product) {
  //   this.$http.put('/api/products/' + product._id, product)
  //   .success(function(){
  //       product.edit = false;
  //     })
  //     .error(function(err){
  //       alert('Error! Something went wrong');
  //     });
  // }
}

angular.module('spsoApp')
  .component('product', {
    templateUrl: 'app/product/product.html',
    controller: ProductComponent
  });

})();
