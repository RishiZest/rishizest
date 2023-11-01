import "./globals.css";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import ScrollingBar from "./components/scrollingBar";
import ScrollLeft from "./components/scrollLeft";

const figtree = Figtree({
	weight: "900",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "RishiZest",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			className="oveflow-y-auto oveflow-x-hidden h-[100vh] max-w-[100vw]"
			lang="en"
		>
			<body>
				<div className="min-h-screen grad flex-col justify-center items-center">
					<div className="flxed bg-darkzestygreen">
						<ScrollingBar />
					</div>
					<div
						className={`sect h-[calc(100vh-70px)] sm:h-[calc(100vh-140px)] md:h-[calc(100vh-180px)] ${figtree.className}`}
					>
						{children}
					</div>
					<div className="hidden sm:block bottom-0 left-0 right-0 bg-darkzestygreen">
						<ScrollLeft />
					</div>
				</div>
			</body>
		</html>
	);
}
