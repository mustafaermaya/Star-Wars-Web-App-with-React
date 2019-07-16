import React from 'react';

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.style = {
            width: "900px",
            height: "900px"
        }
    }
    render() {

        return (
            <div className="container">
                <br />
                <h5 className="text-center">Welcome to everything about Star Wars Page</h5>
                <p className="text-center">You will be seeign everything about Star Wars</p>
                <img className="container" src="/assets/img/starwars.jpg" alt="" /><br></br><br></br>
                <p className="text-center">There ara a lot of information about Star Wars and more will be come with good animations...</p>
                <p className="text-center">Keep in touch for more...</p>
                <footer className="text-muted">
                    <div className="container text-center">
                        <p>This website developed by Mustafa Ermaya</p>
                        <p>You can keep in touch with me by clicking links down below</p>
                        <p>
                            <a target="_blank" href="https://www.facebook.com/mustafaermaya">Facebook</a>
                        </p>
                        <p>
                            <a target="_blank" href="https://twitter.com/mustafaermaya">Twitter</a>
                        </p>
                        <p>
                            <a target="_blank" href="https://www.instagram.com/mustafaermaya/">Instagram</a>
                        </p>
                    </div>
                </footer>
            </div>
        )
    }
}

export default Home;