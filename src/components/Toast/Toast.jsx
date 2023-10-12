import { ToastBar, Toaster } from "react-hot-toast";

const Toast = () => {
	return (
		<Toaster
			toastOptions={{
				success: {
					style: {
						background: "#ff9f00",
						color: "#1c1f24",
					},
				},
				error: {
					style: {
						background: "red",
					},
				},
			}}
		>
			{(t) => (
				<ToastBar
					toast={t}
					style={{
						...t.style,
						animation: t.visible
							? "custom-enter 8s ease"
							: "custom-exit 8s ease",
					}}
				/>
			)}
		</Toaster>
	);
};

export default Toast;
