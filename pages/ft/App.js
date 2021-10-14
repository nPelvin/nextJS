import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";

const App = () => (
	<Switch>
		<Route path="/" exact>
			<Home />
		</Route>
	</Switch>
);

export default App;
