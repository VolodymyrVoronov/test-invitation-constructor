import {
  Circle,
  CircleDashed,
  Cloud,
  Cross,
  Diamond,
  Droplet,
  Flag,
  Heart,
  Hexagon,
  MessageCircle,
  MessageCircleDashed,
  MessageSquare,
  MessageSquareDashed,
  Octagon,
  Pentagon,
  RectangleHorizontal,
  RectangleVertical,
  Search,
  Shield,
  Sparkle,
  Sparkles,
  Square,
  Squircle,
  Star,
  Triangle,
} from "lucide-react";

const FIGURES: { id: number; shape: JSX.Element; description?: string }[] = [
  {
    id: 1,
    shape: <Circle />,
    description: "Circle",
  },
  {
    id: 2,
    shape: <CircleDashed />,
    description: "Circle Dashed",
  },
  {
    id: 3,
    shape: <Cross />,
    description: "Cross",
  },
  {
    id: 4,
    shape: <Diamond />,
    description: "Diamond",
  },
  {
    id: 5,
    shape: <Heart />,
    description: "Heart",
  },
  {
    id: 6,
    shape: <Hexagon />,
    description: "Hexagon",
  },
  {
    id: 7,
    shape: <Octagon />,
    description: "Octagon",
  },
  {
    id: 8,
    shape: <Pentagon />,
    description: "Pentagon",
  },
  {
    id: 9,
    shape: <RectangleHorizontal />,
    description: "Rectangle Horizontal",
  },
  {
    id: 10,
    shape: <RectangleVertical />,
    description: "Rectangle Vertical",
  },
  {
    id: 11,
    shape: <Shield />,
    description: "Shield",
  },
  {
    id: 12,
    shape: <Sparkle />,
    description: "Sparkle",
  },
  {
    id: 13,
    shape: <Sparkles />,
    description: "Sparkles",
  },
  {
    id: 14,
    shape: <Square />,
    description: "Square",
  },
  {
    id: 15,
    shape: <Triangle />,
    description: "Triangle",
  },
  {
    id: 16,
    shape: <Star />,
    description: "Star",
  },
  {
    id: 17,
    shape: <Squircle />,
    description: "Squircle",
  },
  {
    id: 18,
    shape: <MessageCircle />,
    description: "Message Circle",
  },
  {
    id: 19,
    shape: <Flag />,
    description: "Flag",
  },
  {
    id: 20,
    shape: <MessageCircleDashed />,
    description: "Message Circle Dashed",
  },
  {
    id: 21,
    shape: <MessageSquare />,
    description: "Message Square",
  },
  {
    id: 22,
    shape: <MessageSquareDashed />,
    description: "Message Square Dashed",
  },
  {
    id: 23,
    shape: <Search />,
    description: "Search",
  },
  {
    id: 24,
    shape: <Cloud />,
    description: "Cloud",
  },
  {
    id: 25,
    shape: <Droplet />,
    description: "Droplet",
  },
] as const;

export default FIGURES;
