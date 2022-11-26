import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className="collapse">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-cyan-400 text-primary-content peer-checked:bg-rose-300 peer-checked:text-secondary-content">
                    1. What are the different ways to manage a state in a React application?
                </div>
                <div className="collapse-content bg-cyan-400		 text-primary-content peer-checked:bg-rose-300 peer-checked:text-secondary-content">
                    <p>
                        Ans: There are four main types of state you need to properly manage in your
                        React apps: 1. Local (UI) state - Local state is data we manage in one or another component.,
                        2. Global (UI) state - Global state is data we manage across multiple components., 3. Server
                        state - Data that comes from an external server that must be integrated with our UI state
                        , 4. URL state - Data that exists on our URLs, including the pathname and query parameters.
                    </p>
                </div>
            </div>
            <div className="collapse">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-cyan-400		 text-primary-content peer-checked:bg-rose-300 peer-checked:text-secondary-content">
                    2. How does prototypical inheritance work?
                </div>
                <div className="collapse-content bg-cyan-400		 text-primary-content peer-checked:bg-rose-300 peer-checked:text-secondary-content">
                    <p>
                        Ans: Everything in Javascript is an object. Even when creating a Class is an Object via an
                        Object Literal or Constructor Function. This is how Javascript does class-based programming
                        as to other traditional Object-Oriented Programming languages where they use the keyword
                        ‘class’ and ‘inheritance’.
                    </p>
                </div>
            </div>
            <div className="collapse">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-cyan-400		 text-primary-content peer-checked:bg-rose-300 peer-checked:text-secondary-content">
                    3. What is a unit test? Why should we write unit tests?
                </div>
                <div className="collapse-content bg-cyan-400		 text-primary-content peer-checked:bg-rose-300 peer-checked:text-secondary-content">
                    <p>
                        Ans: Unit testing is a testing method that tests an individual software unit in isolation.
                        This involves verifying the output of a function or component for a given input.
                        For React components, this could mean checking that the component renders correctly for the
                        specified props. Unit Testing is important for React Apps, as it helps in testing the individual
                        functionality of React components.
                    </p>
                </div>
            </div>
            <div className="collapse">
                <input type="checkbox" className="peer" />
                <div className="collapse-title bg-cyan-400		 text-primary-content peer-checked:bg-rose-300 peer-checked:text-secondary-content">
                    4. React vs. Angular vs. Vue?
                </div>
                <div className="collapse-content bg-cyan-400		 text-primary-content peer-checked:bg-rose-300 peer-checked:text-secondary-content">
                    <p>
                        Ans: React is considered a UI library. They define themselves as:
                        “A JavaScript library for building user interfaces”
                        Facebook developers are behind the development and maintenance of this library.Angular is a
                         front-end framework with lots of components, services, and tools. On Angular’s site, you can see
                          that they define Angular as:
                        “The modern web developer’s platform”
                        It is developed and maintained by Google developers.Vue.js is, according to its site:
                        “A progressive JavaScript framework”
                        Vue.js is developed and led by Evan You, but also it counts on a huge open-source community.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;