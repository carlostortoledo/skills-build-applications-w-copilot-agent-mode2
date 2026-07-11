const PORT = 8000;

const getPublicApiUrl = () => {
  const codespaceName = process.env.CODESPACE_NAME;

  return codespaceName
    ? `https://${codespaceName}-8000.app.github.dev`
    : `http://localhost:${PORT}`;
};

export { PORT, getPublicApiUrl };