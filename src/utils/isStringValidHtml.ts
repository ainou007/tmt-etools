const isStringValidHtml = (html: string) => {
  const regex =
    /^<!doctype html>\s*<html\s+xmlns="http:\/\/www\.w3\.org\/1999\/xhtml"\s+xmlns:v="urn:schemas-microsoft-com:vml"\s+xmlns:o="urn:schemas-microsoft-com:office:office">\s*<head>[\s\S]*?<\/head>\s*<body>[\s\S]*?<\/body>\s*<\/html>\s*$/;

  if (regex.test(html)) {
    return true;
  }
  return false;
};

export default isStringValidHtml;
