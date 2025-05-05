import { Montserrat, Pathway_Extreme } from "next/font/google";

const body = Montserrat({
  subsets: ["latin"],
  variable: "--font-body",
});

const heading = Pathway_Extreme({
  subsets: ["latin"],
  variable: "--font-heading",
});

export { body, heading };
