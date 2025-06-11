import './navbar.scss';

const Navbar = () => {
    return (
        <div className="navbar">
            {/* Sidebar */}
            <div className="wrapper">
                <span>LK</span>
                <div className="social">
                    <a href="#">
                        <img src="/linkedin.png" alt="" />
                    </a>
                    <a href="#">
                        <img src="/github-sign.png" alt="" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
