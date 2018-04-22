var app = new Vue({
    el: '#app',
    data: {
      product : 'Socks',
      altText : 'A pair of Socks',
      inventory : 0,
      inStock : true,
      image : 'assets/vmSocks-green-onWhite.jpg',
      details :  ["80% Cotton", "20% Polyester", "Gender-neutral"],
      variants : [
        {
          variantId : 2234,
          variantColor : 'green',
          variantImage : 'assets/vmSocks-green-onWhite.jpg',
          inStock : true
        },
        {
          variantId : 2235,
          variantColor : 'blue',
          variantImage : 'assets/vmSocks-blue-onWhite.jpg',
          inStock : false
        }
      ],
      cart : 0
    },
    methods : {
      addToCart : function(){
        this.cart += 1;
      },
      updateProduct : function(variantImage, inStock){
        this.image = variantImage;
        this.inStock = inStock;
      }
    }
});