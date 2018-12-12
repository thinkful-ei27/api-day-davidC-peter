/* eslint-disable strict */
/* global shoppingList, store, api */

$(document).ready(function() {
  shoppingList.bindEventListeners();
  shoppingList.render();
  api.getItems((items) => {
    items.forEach(item => store.addItem(item));
    shoppingList.render();
  });
});


// api.getItems();

// api.createItem('pears', (newItem) => {
//   api.getItems((items) => {
//     console.log(items);
//   });
// });



