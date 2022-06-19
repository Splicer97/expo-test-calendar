import { ICard, ICart, IMetrics } from "./interfaces";

export const mockCardData: ICard[] = [
  {
    id: "test-id-1",
    title: "Test item 1",
    description: "Lorem ipsum dolor sit amet",
    options: [
      {
        id: "test-option-1",
        title: "Test option 1",
        price: {
          value: "10",
          currency: "EUR",
        },
      },
    ],
    price: {
      value: "100",
      currency: "EUR",
    },
    quantity: {
      min: 1,
      max: 5,
    },
  },
  {
    id: "test-id-2",
    title: "Test item 2",
    description: "Lorem ipsum dolor sit amet",
    options: [
      {
        id: "test-option-2",
        title: "Test option 2",
        price: {
          value: "20",
          currency: "EUR",
        },
      },
    ],
    price: {
      value: "200",
      currency: "EUR",
    },
    quantity: {
      min: 1,
      max: 5,
    },
  },
  {
    id: "test-id-3",
    title: "Test item 3",
    description: "Lorem ipsum dolor sit amet",
    options: [
      {
        id: "test-option-3",
        title: "Test option 3",
        price: {
          value: "30",
          currency: "EUR",
        },
      },
    ],
    price: {
      value: "300",
      currency: "EUR",
    },
    quantity: {
      min: 1,
      max: 5,
    },
  },
  {
    id: "test-id-4",
    title: "Test item 4",
    description: "Lorem ipsum dolor sit amet",
    options: [
      {
        id: "test-option-4",
        title: "Test option 4",
        price: {
          value: "40",
          currency: "EUR",
        },
      },
    ],
    price: {
      value: "400",
      currency: "EUR",
    },
    quantity: {
      min: 1,
      max: 5,
    },
  },
];

export const mockReqMetricsData: IMetrics = {
  action: "cart_update",
  itemId: "test-id-1",
  quantity: 3,
};

export const mockReqCartData: ICart = {
  items: [
    {
      id: "test-id-1",
      options: {
        "test-option-id-1": true,
        "test-option-id-2": true,
      },
      quantity: 3,
    },
  ],
};
