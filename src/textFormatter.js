export const getHtmlContent = (content) => ({ __html: content });

export const getHighlightedContent = (content, strToHighlight) => {
  const regex = new RegExp(strToHighlight, "gi");
  const highlightedMarkup = content.replace(
    regex,
    (match) =>
      `<mark style="background-color: #FFCD00; color: #FFF">${match}</mark>`
  );

  return getHtmlContent(highlightedMarkup);
};
