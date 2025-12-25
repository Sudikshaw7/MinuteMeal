import VegIcon from "../assets/images/icons/vegicon.png";
import NonVegIcon from "../assets/images/icons/nonvegicon.png";
import DessertIcon from "../assets/images/icons/desserticon.svg";
import BeverageIcon from "../assets/images/icons/beverageicon.png";

export const icons = {
  veg: VegIcon,
  nonveg: NonVegIcon,
  dessert: DessertIcon,
  beverage: BeverageIcon,
};

export const categories = [
  { id: "veg", title: "Veg Delights", color: "text-success" },
  { id: "nonveg", title: "Non-Veg Specials", color: "text-danger" },
  { id: "dessert", title: "Desserts", color: "text-warning" },
  { id: "beverage", title: "Beverages", color: "text-primary" },
];