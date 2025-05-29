interface NavigationBarProps {
	children: React.ReactNode;
}

export function NavigationBar({ children }: NavigationBarProps) {
	return (
		<>
			<h1>NavigationBar</h1>
			{children}
		</>
	);
}
