import React from "react";

const Article = (props) => {
    console.log("props: ", props);

    const { content } = props;

    // const { title, content, image } = content;

    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={content.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{content.title}</h5>
                <p className="card-text">{content.content}</p>
                <a href="#" className="btn btn-primary">
                    Go somewhere
                </a>
            </div>
        </div>
    );
};

export default Article;
