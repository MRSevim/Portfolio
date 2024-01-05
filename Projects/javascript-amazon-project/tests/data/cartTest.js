import {
  addToCart,
  removeFromCart,
  updateDeliveryOption,
  cart,
  loadFromStorage,
} from "../../scripts/data/cart.js";

describe("test suite: addToCart", function () {
  beforeEach(function () {
    spyOn(localStorage, "setItem");
  });
  it("adds an existing product to the cart", function () {
    spyOn(localStorage, "getItem").and.callFake(function () {
      return JSON.stringify([
        {
          productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
          quantity: 1,
          deliveryOptionId: "1",
        },
      ]);
    });
    loadFromStorage();

    document.querySelector(
      ".js-test-container"
    ).innerHTML = `<div class="js-added-to-cart-e43638ce-6aa0-4b85-b27f-e1d07eb678c6"></div>
      <input class="js-quantity-selector-e43638ce-6aa0-4b85-b27f-e1d07eb678c6"
        value="1"
      />`;

    addToCart("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
    expect(cart.length).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      "cart",
      JSON.stringify(cart)
    );
    expect(cart[0].productId).toEqual("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
    expect(cart[0].quantity).toEqual(2);

    document.querySelector(".js-test-container").innerHTML = "";
  });

  it("adds a new product to the cart", function () {
    spyOn(localStorage, "getItem").and.callFake(function () {
      return JSON.stringify([]);
    });
    loadFromStorage();

    document.querySelector(
      ".js-test-container"
    ).innerHTML = `<div class="js-added-to-cart-e43638ce-6aa0-4b85-b27f-e1d07eb678c6"></div>
      <input class="js-quantity-selector-e43638ce-6aa0-4b85-b27f-e1d07eb678c6"
        value="1"
      />`;

    addToCart("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
    expect(cart.length).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      "cart",
      JSON.stringify(cart)
    );
    expect(cart[0].productId).toEqual("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
    expect(cart[0].quantity).toEqual(1);

    document.querySelector(".js-test-container").innerHTML = "";
  });
});
describe("test suite: removeFromCart", function () {
  beforeEach(function () {
    spyOn(localStorage, "setItem");
    spyOn(localStorage, "getItem").and.callFake(function () {
      return JSON.stringify([
        {
          productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
          quantity: 1,
          deliveryOptionId: "1",
        },
      ]);
    });
    loadFromStorage();
  });
  it("removes existing product", function () {
    removeFromCart("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
    expect(cart.length).toEqual(0);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      "cart",
      JSON.stringify([])
    );
  });
  it("does nothing on non existing product removal", function () {
    removeFromCart("1234");
    expect(cart.length).toEqual(1);
    expect(cart[0].productId).toEqual("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
    expect(cart[0].quantity).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      "cart",
      JSON.stringify([
        {
          productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
          quantity: 1,
          deliveryOptionId: "1",
        },
      ])
    );
  });
});
describe("test suite: updateDeliveryOption", function () {
  beforeEach(function () {
    spyOn(localStorage, "setItem");
    spyOn(localStorage, "getItem").and.callFake(function () {
      return JSON.stringify([
        {
          productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
          quantity: 1,
          deliveryOptionId: "1",
        },
      ]);
    });
    loadFromStorage();
  });

  it("updates delivery option", function () {
    updateDeliveryOption("e43638ce-6aa0-4b85-b27f-e1d07eb678c6", "3");
    expect(cart.length).toEqual(1);
    expect(cart[0].productId).toEqual("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
    expect(cart[0].quantity).toEqual(1);
    expect(cart[0].deliveryOptionId).toEqual("3");

    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      "cart",
      JSON.stringify([
        {
          productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
          quantity: 1,
          deliveryOptionId: "3",
        },
      ])
    );
  });
  it("does nothing on items that does not exist", function () {
    updateDeliveryOption("xdd", "3");
    expect(cart.length).toEqual(1);
    expect(cart[0].productId).toEqual("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
    expect(cart[0].quantity).toEqual(1);
    expect(cart[0].deliveryOptionId).toEqual("1");

    expect(localStorage.setItem).toHaveBeenCalledTimes(0);
  });
  it("does nothing on invalid delivery option", function () {
    updateDeliveryOption("e43638ce-6aa0-4b85-b27f-e1d07eb678c6", "4");
    expect(cart.length).toEqual(1);
    expect(cart[0].productId).toEqual("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");
    expect(cart[0].quantity).toEqual(1);
    expect(cart[0].deliveryOptionId).toEqual("1");

    expect(localStorage.setItem).toHaveBeenCalledTimes(0);
  });
});
