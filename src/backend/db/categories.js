import { v4 as uuid } from "uuid";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Men",
    description:
      "Men's shoes are footwear designed specifically for males, offering comfort, style, and functionality.",
  },
  {
    _id: uuid(),
    categoryName: "Women",
    description:
      "Women's shoes are footwear designed specifically for females, offering a combination of style, comfort, and versatility.",
  },
  {
    _id: uuid(),
    categoryName: "Kids",
    description:
      "Kids' shoes are footwear specially designed for children, prioritizing their comfort, support, and safety as they grow and engage in various activities. ",
  },
];
