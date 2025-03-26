const HeaderContent = ({header, content}) => {
    return (
        <section className="container pb-md-5">
            <section className="container">
                <div>
                    <h2>{header || 'Heading here!'}</h2>
                    <p>
                        {content || 'Content here!'}
                    </p>
                </div>
            </section>
        </section>
    );
}

export default HeaderContent;