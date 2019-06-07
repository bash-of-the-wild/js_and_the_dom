
    function displayProducts() {
      var products = [
                      {id: 1, name: "lightsaber", price: 100 },
                      {id: 2, name: "Yoda Sleeping Bag", price: 67 },
                      {id: 3, name: "Space Laser Gun", price: 42 }
                      ];

      var productsTag = document.querySelector("#products");
      var productsHTML = "";

      products.forEach(function(product) {
        productsHTML += `<div>`;
          productsHTML += `<h2>${product.name}</h2>`;
          productsHTML += `<p>Price: ${product.price}</p>`;
        productsHTML += `</div>`;
      });

      productsTag.innerHTML = productsHTML;
    }





    function bigNews() {
      var message1 = "Big News Today";
      var message2 = "train went off the rails";
      var message3 = "more at 11";

      var firstElement = document.querySelector(".first");
      var secondElement = document.querySelector("#second");
      var thirdElement = document.querySelector("h6");

      firstElement.innerHTML = message1;
      secondElement.innerHTML = message2;
      thirdElement.innerHTML = message3;
    }

    function doSomething(event) {
      var x = event.clientX;
      var y = event.clientY;
      console.log(x, y);

      var xElement = document.querySelector(".x-coordinate");
      var yElement = document.querySelector(".y-coordinate");

      xElement.innerHTML = x;
      yElement.innerHTML = y;
    }

    function somethingElse() {
      var colorizedElement = document.querySelector(".colorized");
      var characters = "0123456789ABCDEF";
      var color = "#";

      for(var i = 0; i < 6; i++) {
        color += characters[Math.floor(Math.random() * characters.length)];
      }
      
      console.log(color);
      colorizedElement.style.color = color;
    }