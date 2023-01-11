import Application from './modules/App';
import { createRoot } from 'react-dom/client';

//redux
import store from './redux/store'
import { Provider } from 'react-redux'


const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript



root.render(
    <Provider store={store}>
        <Application />
    </Provider>
);