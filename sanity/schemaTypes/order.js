export default {
    name: "order",
    title: "Order",
    type: "document",
    fields: [
      {
        name: "car",
        title: "Car",
        type: "reference",
        to: [{ type: "car" }],
      },
      {
        name: "startDate",
        title: "Start Date",
        type: "date",
      },
      {
        name: "endDate",
        title: "End Date",
        type: "date",
      },
      {
        name: "customerName",
        title: "Customer Name",
        type: "string",
      },
      {
        name: "customerEmail",
        title: "Customer Email",
        type: "string",
      },
    ],
  }
  
  