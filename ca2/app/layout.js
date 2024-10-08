import "./globals.css";
import { StateContextProvider } from "./stateContext";

export const metadata = {
  title: "SP 70 | Celebrating 70 Years of Singapore Polytechnic",
  description: "We're celebrating SP's 70th anniversary in 2024 with a lineup of exciting activities throughout the year. Come learn more about Singapore's first poly and the journey taken to get here!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <StateContextProvider>
        <body>
          {children}
        </body>
      </StateContextProvider>
    </html>
  );
}
