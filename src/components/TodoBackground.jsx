export default function TodoBackground() {
	return (
		<div>
			<div className="fixed top-0 left-0 w-screen h-screen flex flex-col items-center justify-center z-[-10]">
				<img className="w-full h-full object-cover" src="/background-9.jpg" alt="background" />
				<div className="absolute inset-0 bg-black opacity-40"></div>
			</div>
		</div>
	)
}
