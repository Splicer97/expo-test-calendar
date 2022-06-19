export interface ICard {
  id: String;
  title: String;
  description: String;
  options: [
    {
      id: String;
      title: String;
      price: {
        value: String;
        currency: String;
      };
    }
  ];
  price: {
    value: String;
    currency: String;
  };
  quantity: {
    min: Number;
    max: Number;
  };
}

export interface IMetrics {
  action: String;
  itemId: String;
  quantity: Number;
}

export interface ICart {
  items: [
    {
      id: String;
      options: {
        [key: string]: Boolean;
      };
      quantity: Number;
    }
  ];
}
