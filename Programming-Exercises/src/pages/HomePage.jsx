import React from 'react';
import Navbar from '../components/Navbar';
import Exercise from '../components/Exercise';

const HomePage = () => {

    return (
        <div>
            <Navbar />
            <h1 class="col-md-12 mb-2">Home</h1>
            <p class="col-md-12 mb-5">
                This is a page dedicated to solve logic programming exercises
            </p>
            <div class="row">
                <div class="col">
                    <Exercise />
                </div>
            </div>
        </div>
    )
}

export default HomePage