import  './RenderPostBlock.css'
import { useState } from 'react';
import getData from "../utils/getData";
import RenderCommentsBlock from "../RenderCommentsBlock/RenderCommentsBlock";



function RenderPostBlock({ article, comments, setComments }) {
    const [errorInput, setErrorInput] = useState('');

    async function buttonCommentsClickHandler () {
        const commentsUrl = `https://jsonplaceholder.typicode.com/comments?postId=${article.id}`
        const comment = await getData(commentsUrl);
        if (comment?.error) {
            setErrorInput('Виникла помилка. Спробуйте ще раз: Error ' + comment.error);
            return false
        }
        setErrorInput('');
        setComments(comment)
    }

  return (
      <div className="wrapper">
        <div className="post_block">
          <h1 className="post_block__title">{article.title}</h1>
          <p className="post_block__content">{article.body}</p>
          <button className="post_block__button" onClick={buttonCommentsClickHandler}>
              Коментарі
          </button>
            <p className="input_block__error">{errorInput}</p>
        </div>
        <div className="comments_block">
        { comments?
            /*console.log(comments)*/ < RenderCommentsBlock comment = {comments} /> :
            '' }
        </div>
      </div>
  );
}
export default RenderPostBlock;
