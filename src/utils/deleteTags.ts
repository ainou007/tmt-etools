export const deleteTags = (codeHtml: string): string => {
  let code = codeHtml;

  // code = code.substring(code.search('<body>')); // Delete from the beginning to the body tag
  code = code.replace(/<!--(.*?)-->/gs, ''); // delete all comment if exists
  code = code.replace(/<%(.*?)%>/gs, ''); // delete <% %> if exists  <%%>
  code = code.replace(/<[^<>]*\/?\s*>/g, ''); // delete all tags
  code = code.replace(/\s+/g, ' ');

  return code;
};
