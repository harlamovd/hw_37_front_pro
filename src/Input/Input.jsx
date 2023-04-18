import { useState } from 'react';
import getData from '../utils/getData.jsx';
import './Input.css';

function InputBlock({ setArticle, setComments}) {
  const [errorInput, setErrorInput] = useState('');
  const [articleNumber, setArticleNumber] = useState('');

  function onChangeHandler (e) {
    setArticleNumber(e.currentTarget.value);
  };

  async function getArticle () {
    const baseUrl = `https://jsonplaceholder.typicode.com/posts/${articleNumber}`;
    const article = await getData(baseUrl);
    if (article?.error) {
      setErrorInput('Виникла помилка. Спробуйте ще раз: Error ' + article.error);
      return false
    }
    setErrorInput('');
    return article
  };

  async function buttonClickHandler () {
    if (+articleNumber > 100 || +articleNumber <= 0) {
      if (articleNumber === '') return;
      setErrorInput('Помилка вводу. Введіть ціле число від 0 до 100');
      return;
    } else {
      const article = await getArticle();
      setArticle(article ? article : '');
      setComments('');
    }
  };

  return (
    <div>
      <label className="input_block__label">Знайдіть статтю за номером
        <input
          className="input_block__input"
          type="number"
          value={articleNumber}
          onChange={onChangeHandler}
        />
        <button className="input_block__button" onClick={buttonClickHandler}>
          Знайти
        </button>
      </label>
      <p className="input_block__error">{errorInput}</p>
    </div>
  );
}
export default InputBlock;
