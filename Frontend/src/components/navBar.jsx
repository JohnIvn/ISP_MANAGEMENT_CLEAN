import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; 

function navBar() {
        <nav className="navbar navbar-expand-md sticky-top border-bottom" data-bs-theme="dark" style={{backgroundColor: 'white'}} id="navbar">
        <div className="container">
            <a className="navbar-brand d-md-none" href="#" style={{color: 'black'}}>
            Nihon Gaku
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" aria-controls="offcanvas" aria-label="Toggle navigation" style={{backgroundColor: 'black'}}>
            </button>
            <div className="offcanvas offcanvas-end" tabIndex={-1} id="offcanvas" aria-labelledby="offcanvasLabel" style={{backgroundColor: 'transparent !important', overflow: 'hidden'}}>
            <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasLabel">Nihon Gaku</h5>
                <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
            </div>
            <div className="offcanvas-body">
                <ul className="navbar-nav flex-grow-1 justify-content-between">
                <li className="nav-item" style={{marginTop: 15, fontSize: 'larger'}}><a className="nav-link nav-about" href="#about"><b>About</b>
                    <span style={{fontSize: '0.6em', marginTop: '-3px', padding: 0, lineHeight: 1, display: 'block'}}>
                        &nbsp;について
                    </span></a>
                </li>
                <li className="nav-item" style={{marginTop: 15, fontSize: 'larger'}}><a className="nav-link nav-courses" href="#courses"><b>Courses</b>
                    <span style={{fontSize: '0.6em', marginTop: '-3px', padding: 0, lineHeight: 1, display: 'block'}}>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;コース
                    </span></a>
                </li>
                <li className="navbar-brand">
                    <a href="en-jp-home.html">
                    <img src="../../Assets/Images/logo2.png" alt width={230} height={64} className="d-none d-md-block" />
                    </a>
                </li>                        
                <li className="nav-item" style={{marginTop: 15, fontSize: 'larger'}}><a className="nav-link nav-pricing" href="#pricing"><b>Pricing</b>
                    <span style={{fontSize: '0.6em', marginTop: '-3px', padding: 0, lineHeight: 1, display: 'block'}}>
                        価格設定
                    </span></a>
                </li>
                <li className="nav-item" style={{marginTop: 15, fontSize: 'larger'}}><a className="nav-link nav-login" href="en-jp-login.html"><b>Login</b>
                    <span style={{fontSize: '0.6em', marginTop: '-3px', padding: 0, lineHeight: 1, display: 'block'}}>
                        &nbsp;ログイン
                    </span></a>
                </li>
                </ul></div>
            </div>
        </div>
    </nav>
}

export default navBar;