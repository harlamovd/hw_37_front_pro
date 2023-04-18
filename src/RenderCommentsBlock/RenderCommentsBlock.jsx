import  './RenderCommentsBlock.css'
function RenderCommentsBlock( { comment }) {
    const commentsList = comment.map(element =>
        <div
            className="comments_block__wrapper"
            key={element.id}>
            <h3 className="comments_block__title"> {element.name} </h3>
            <p className="comments_block__content"> {element.body} </p>
            <p className="comments_block__mail"> {element.email} </p>
        </div>
    );
    return commentsList;
}
export default RenderCommentsBlock