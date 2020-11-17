import {Suspense} from 'react';
import logo from './logo.svg';
import css from './App.module.scss';
import Weight from './weight/Weight';

function App() {
    return (
        <div>
            <header className={css.header}>
                <img className={css.logo} src={logo} alt="Livongo logo" />
            </header>
            <div role="main" className={css.content}>
                <Suspense fallback={<div>Loading weight data...</div>}>
                    <Weight />
                </Suspense>
            </div>
            <footer className={css.footer}>
                <small>
                    {new Date().getFullYear()} &copy; Livongo. All rights
                    reserved.
                </small>
            </footer>
        </div>
    );
}

export default App;
