import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Home from "./components/Home";
import Cotizador from "./components/Cotizador";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainLayout />}>
					<Route index element={<Home />} />
					<Route path="/cotizador" element={<Cotizador />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
