import React from 'react';

export default function AuthLayout({children}: { children: Readonly<React.ReactNode> }) {
	return (
		<section>
			{children}
		</section>
	);
}