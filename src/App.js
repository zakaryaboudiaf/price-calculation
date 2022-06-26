import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store";
import Wrapper from "./Wrappers/appWrapper";
import { Products  , Cart} from './Components'


function App() {

    return (
        <Provider store={store}>
            <Wrapper>
                <Products />
                <Cart />
            </Wrapper>
        </Provider>
    );
}

export default App;
