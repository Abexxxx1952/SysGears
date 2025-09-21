export const testCases = [
  [
    {
      data: [
        { name: "John", email: "john2@mail.com" },
        { name: "John", email: "john1@mail.com" },
        { name: "Jane", email: "jane@mail.com" },
      ],
    },

    {
      condition: {
        include: [{ name: "John" }],
        sortBy: ["email"],
      },
    },

    {
      result: [
        { name: "John", email: "john1@mail.com" },
        { name: "John", email: "john2@mail.com" },
      ],
    },
  ],
  [
    {
      data: [
        { name: "John", email: "john2@mail.com" },
        { name: "John", email: "john1@mail.com" },
        { name: "Jane", email: "jane@mail.com" },
        { name: "Jane", email: "jane2@mail.com" },
      ],
    },
    {
      condition: {
        include: [{ name: "Jane" }],
        sortBy: ["email"],
      },
    },
    {
      result: [
        { name: "Jane", email: "jane@mail.com" },
        { name: "Jane", email: "jane2@mail.com" },
      ],
    },
  ],
  [
    {
      data: [
        { name: "John", email: "zjohn@mail.com" },
        { name: "John", email: "ajohn@mail.com" },
        { name: "Alice", email: "alice@mail.com" },
      ],
    },
    {
      condition: {
        include: [{ name: "John" }],
        sortBy: ["email"],
      },
    },
    {
      result: [
        { name: "John", email: "ajohn@mail.com" },
        { name: "John", email: "zjohn@mail.com" },
      ],
    },
  ],
  [
    {
      data: [
        { name: "Alice", email: "alice@mail.com" },
        { name: "Bob", email: "bob@mail.com" },
      ],
    },
    {
      condition: {
        include: [{ name: "John" }],
        sortBy: ["email"],
      },
    },
    {
      result: [],
    },
  ],
  [
    {
      data: [
        { name: "John", email: "john2@mail.com" },
        { name: "Jane", email: "jane1@mail.com" },
        { name: "John", email: "john1@mail.com" },
        { name: "Bob", email: "bob@mail.com" },
      ],
    },
    {
      condition: {
        include: [{ name: "John" }, { name: "Jane" }],
        sortBy: ["email"],
      },
    },
    {
      result: [
        { name: "John", email: "john1@mail.com" },
        { name: "Jane", email: "jane1@mail.com" },
        { name: "John", email: "john2@mail.com" },
      ],
    },
  ],
];
