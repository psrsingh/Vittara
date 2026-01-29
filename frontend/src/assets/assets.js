import p_img1 from "./p_img1.JPG";
import p_img2 from "./p_img2.JPG";
import p_img3 from "./p_img3.JPG";
import p_img4 from "./p_img4.JPG";
import p_img5 from "./p_img5.JPG";
import p_img6 from "./p_img6.JPG";
import p_img7 from "./p_img7.JPG";
import p_img8 from "./p_img8.JPG";
import p_img9 from "./p_img9.JPG";
import p_img10 from "./p_img10.JPG";
import boots from "../assets/boots.png";


export const products = [
  {
    id: "p001",
    name: "Women Round Neck Cotton Top",
    description: "Lightweight cotton top for everyday comfort.",
    price: 100,
    image: [p_img1],
    category: "Women",
    subCategory: "Topwear",
    sizes: ["S", "M", "L"],
    bestseller: true
  },
  {
    id: "p002",
    name: "Men Slim Fit T-Shirt",
    description: "Soft cotton slim-fit t-shirt.",
    price: 120,
    image: [p_img2],
    category: "Men",
    subCategory: "Topwear",
    sizes: ["M", "L", "XL"],
    bestseller: false
  },
  {
    id: "p003",
    name: "Women High Rise Jeans",
    description: "Stretchable denim jeans with modern fit.",
    price: 299,
    image: [p_img3],
    category: "Women",
    subCategory: "Bottomwear",
    sizes: ["S", "M", "L", "XL"],
    bestseller: true
  },
  {
    id: "p004",
    name: "Men Regular Fit Jeans",
    description: "Classic regular fit jeans for daily wear.",
    price: 349,
    image: [p_img4],
    category: "Men",
    subCategory: "Bottomwear",
    sizes: ["M", "L", "XL"],
    bestseller: false
  },
  {
    id: "p005",
    name: "Women Printed Kurti",
    description: "Elegant printed kurti with ethnic style.",
    price: 259,
    image: [p_img5],
    category: "Women",
    subCategory: "Ethnic Wear",
    sizes: ["S", "M", "L", "XL"],
    bestseller: true
  },
  {
    id: "p006",
    name: "Men Casual Shirt",
    description: "Comfortable casual shirt for all occasions.",
    price: 199,
    image: [p_img6],
    category: "Men",
    subCategory: "Shirts",
    sizes: ["M", "L", "XL"],
    bestseller: false
  },
  {
    id: "p007",
    name: "Women Palazzo Pants",
    description: "Loose fit palazzo pants with breathable fabric.",
    price: 219,
    image: [p_img7],
    category: "Women",
    subCategory: "Bottomwear",
    sizes: ["S", "M", "L"],
    bestseller: false
  },
  {
    id: "p008",
    name: "Men Hooded Sweatshirt",
    description: "Warm hoodie with adjustable drawstring.",
    price: 399,
    image: [p_img8,boots],
    category: "Men",
    subCategory: "Winterwear",
    sizes: ["M", "L", "XL"],
    bestseller: true
  },
  {
    id: "p009",
    name: "Women Woolen Sweater",
    description: "Soft woolen sweater for winter comfort.",
    price: 349,
    image: [p_img9],
    category: "Women",
    subCategory: "Winterwear",
    sizes: ["S", "M", "L"],
    bestseller: false
  },
  {
    id: "p010",
    name: "Men Formal Trousers",
    description: "Tailored trousers suitable for office wear.",
    price: 329,
    image: [p_img10],
    category: "Men",
    subCategory: "Bottomwear",
    sizes: ["M", "L", "XL"],
    bestseller: false
  }
];
 