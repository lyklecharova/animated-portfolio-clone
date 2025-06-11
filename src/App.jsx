import './app.scss';
import Navbar from './components/navbar/Navbar';
const App = () => {
    return (
        <div>
            <section>
                <Navbar />
            </section>
            <section>Hero</section>
            <section>Parallax</section>
            <section>Services</section>
            <section>Projects</section>
            <section>Portfolio</section>
            <section>Contacts</section>
        </div>
    );
};

export default App;
