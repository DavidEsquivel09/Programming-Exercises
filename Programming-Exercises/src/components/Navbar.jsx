import React from 'react';
import '.././index.css'

const Navbar = () => {
    
    return (
        <div>
            <nav class="navbar navbar-expand-lg mb-5"> {/*navbar navbar-expand-lg navbar-light bg-light bg-info-subtle rounded-3*/}
                <div class="container-fluid">
                    <a class="navbar-brand logo" style={{fontWeight: "bold"}} href="#">David Diaz</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav"></ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar