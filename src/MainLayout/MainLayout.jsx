import InputBlock from '../Input/Input';
import RenderPostBlock from '../RenderPostBlock/RenderPostBlock';
import { useState } from 'react';
import  './MainLayout.css'

function MainLayout() {
    const [article, setArticle] = useState(undefined);
    const [comments, setComments] = useState(undefined);

  return (
    <>
      <div
        className="input_block">
        <InputBlock setArticle={setArticle} setComments={setComments} />
      </div>
        {article ? (
          <RenderPostBlock article={article} comments={comments} setComments={setComments}   />
        ) : (
            <div className="wrapper">
          <div className="post_block">Вибиріть статтю для ознайомлення</div>
            </div>
        )}
        <div className="comments_block"></div>
    </>
  );
}

export default MainLayout;
