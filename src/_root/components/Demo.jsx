/* eslint-disable no-undef */
import { useState, useEffect } from "react";

import { copy, loader, tick, send } from "../../../public/assets";
import { useLazyGetSummaryQuery } from "../services/article";

const Demo = () => {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });
  const [allArticles, setAllArticles] = useState([]);
  const [copied, setCopied] = useState("");

  // RTK lazy query
  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

  // Load data from localStorage on mount
  useEffect(() => {
    const articlesFromLocalStorage = JSON.parse(
      localStorage.getItem("articles")
    );

    if (articlesFromLocalStorage) {
      setAllArticles(articlesFromLocalStorage);
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const existingArticle = allArticles.find(
      (item) => item.url === article.url
    );

    if (existingArticle) return setArticle(existingArticle);

    const { data } = await getSummary({ articleUrl: article.url });
    if (data?.summary) {
      const newArticle = { ...article, summary: data.summary };
      const updatedAllArticles = [newArticle, ...allArticles];

      // update state and local storage
      setArticle(newArticle);
      setAllArticles(updatedAllArticles);
      localStorage.setItem("articles", JSON.stringify(updatedAllArticles));
    }
  };

  // copy the url and toggle the icon for user feedback
  const handleCopy = (copyUrl) => {
    setCopied(copyUrl);
    navigator.clipboard.writeText(copyUrl);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      handleSubmit(e);
    }
  };

  return (
    <section className="flex min-h-lvh gap-[24px] flex-col items-center py-[270px]">
      {/* Search */}
      <form
        className="relative flex text-xl items-center justify-between border-2 border-pastel_green opacity-80 w-[800px] h-[80px] rounded-[32px] bg-custom-bg-1 max-lg:w-[650px]"
        onSubmit={handleSubmit}
      >
        <input
          type="url"
          placeholder="Paste website URL here (e.g. https://example.com)"
          value={article.url}
          onChange={(e) => setArticle({ ...article, url: e.target.value })}
          onKeyDown={handleKeyDown}
          required
          className="w-full h-full url_input peer font-goia_regular pl-7 focus:outline-none" // When you need to style an element based on the state of a sibling element, mark the sibling with the peer class, and use peer-* modifiers to style the target element
        />
        <button
          type="submit"
          className="h-full submit_btn peer-focus:border-gray-700 peer-focus:text-gray-70 rounded-r-[32px] hover:bg-pastel_green-hover ease-linear duration-200"
        >
          <p className="h-full w-[85px] flex justify-center items-center">
            <img
              src={send}
              alt="send_button"
              className="w-[40.13px] h-[40.13px]"
            />
          </p>
        </button>
      </form>

      {/* Browse History */}
      <div className="flex flex-col gap-[8px] overflow-y-auto w-[800px] max-lg:w-[650px]">
        {allArticles.reverse().map((item, index) => (
          <div
            key={`link-${index}`}
            onClick={() => setArticle(item)}
            className="max-w-[800px] flex justify-between items-center gap-[8px] rounded-[21px] h-[64px] bg-custom-bg opacity-80 hover:bg-pastel_green-hover"
          >
            <div className="rounded-l-[21px] copy_btn hover:bg-custom-bg-2 ease-in-out" onClick={() => handleCopy(item.url)}>
              <div className="flex items-center justify-center w-[75px] h-[64px] cursor-pointer">
                <img
                  src={copied === item.url ? tick : copy}
                  alt={copied === item.url ? "tick_icon" : "copy_icon"}
                  className="object-contain w-[24px] h-[24px]"
                />
              </div>
            </div>
            <p className="font-goia_regular text-[19.4px] text-white w-[715px] whitespace-nowrap overflow-hidden mr-6 cursor-default">
              {item.url}
            </p>
          </div>
        ))}
      </div>

      {/* Display Result */}
      {(isFetching || error || article.summary) && (
        <div className="flex items-center justify-center w-[800px] max-lg:w-[650px] bg-pastel_green opacity-80 rounded-[21px] py-[22px] px-[27px] font-goia_regular text-near_black">
          {isFetching ? (
            <img
              src={loader}
              alt="loader"
              className="object-contain w-20 h-20"
            />
          ) : error ? (
            <p className="font-bold text-center text-black">
              Well, that wasn&apos;t supposed to happen...
              <br />
              <span className="font-normal text-gray-700">
                {error?.data?.error}
              </span>
            </p>
          ) : (
            article.summary && (
              <div className="flex flex-col gap-3">
                <h2 className="text-xl font-bold">Article Summary</h2>
                <div className="summary_box">
                  <p className="font-normal text-[17.85px]">{article.summary}</p>
                </div>
              </div>
            )
          )}
        </div>
      )}
    </section>
  );
};

export default Demo;
