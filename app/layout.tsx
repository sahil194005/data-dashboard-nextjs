import "./globals.css";
import type { Metadata } from "next";

//components
import SideMenu from "../components/SideMenu/SideMenu";
import Header from "../components/Header/Header";

export const metadata: Metadata = {
	title: "Dashboard",
	description: "Data dashboard by nextjs",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body>
				<Header />
				<SideMenu />
				{children}
			</body>
		</html>
	);
}
