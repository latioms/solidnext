import { StaticImageData } from "next/image";

export type Testimonial = {
    id: number;
  name: string;
  designation: StaticImageData;
  image: string;
  content: string;
};
