import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";

export const deliveryOptions = [
  {
    id: "1",
    deliveryDays: 7,
    priceCents: 0,
  },
  {
    id: "2",
    deliveryDays: 3,
    priceCents: 499,
  },
  {
    id: "3",
    deliveryDays: 1,
    priceCents: 999,
  },
];

export function getDeliveryOption(deliveryOptionId) {
  let deliveryOption;

  deliveryOptions.forEach((option) => {
    if (option.id === deliveryOptionId) {
      deliveryOption = option;
    }
  });

  return deliveryOption;
}

export function calculateDeliveryDate(deliveryOption) {
  let deliveryDate = dayjs();
  let formatted = deliveryDate.format("dddd");
  let days = deliveryOption.deliveryDays;

  while (days > 0) {
    if (!(formatted === "Saturday" || formatted === "Sunday")) {
      days--;
    }
    deliveryDate = deliveryDate.add(1, "days");
    formatted = deliveryDate.format("dddd");
  }

  const dateString = deliveryDate.format("dddd, MMMM D");
  return dateString;
}
