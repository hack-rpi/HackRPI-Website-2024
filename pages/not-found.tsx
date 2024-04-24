import React, { useEffect } from "react";

function NotFoundPage() {
	useEffect(() => {
		// This useEffect will only run on the client-side
		console.log("Component mounted on the client-side");
		return () => {
			console.log("Component unmounted on the client-side");
		};
	}, []);

	// Dynamically import Custom404 only on the client-side
	const DynamicCustom404 = React.lazy(() => import("@/pages/404"));

	return (
		<React.Suspense fallback={<div>Loading...</div>}>
			<DynamicCustom404 />
		</React.Suspense>
	);
}

export default NotFoundPage;
