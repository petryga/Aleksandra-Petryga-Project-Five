const Image = ({ url, alt, author }) => {
    return (
        <div className="image-container flex column">
            <img src={url} alt={alt ? alt : 'travel picture'} />
            <p>Image by {author}</p>
        </div>
    )
}
export default Image;