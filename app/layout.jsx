import "./globals.css";
import { Navigation } from "./Navigation";
import Awwards from "./Awwards";

export const metadata = {
  title: "Joseph Sorensen | Get in Touch",
  description:
    "Web2 and Web3 Expert. open to collaboration. Joseph Sorensen portfolio developed by iamwebdevexpert@gmail.com. Let's connect!",
  keywords: [
    "website design",
    "UX/UI design",
    "web development",
    "full-stack development",
    "custom websites",
    "digital solutions",
    "social media management",
    "motion graphics",
    "3D motion graphics",
    "3D video production",
    "3D modeling",
    "interactive design",
    "creative digital agency",
    "multimedia design",
    "3D rendering services",
    "website redesign",
    "branding and design",
    "responsive web design",
    "animation services",
    "digital marketing solutions",
    "advanced video production",
    "digital media strategy",
  ],
  openGraph: {
    title: "Get in Touch",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* <Awwards /> */}
        <Navigation />
        {children}
      </body>
    </html>
  );
}
