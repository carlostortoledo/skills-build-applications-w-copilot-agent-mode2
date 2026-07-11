const PORT = 8000;
const HOST = process.env.HOST || '0.0.0.0';

const getPublicApiUrl = () => {
  const codespaceName = process.env.CODESPACE_NAME;

  return codespaceName
    ? `https://${codespaceName}-8000.app.github.dev`
    : `http://localhost:${PORT}`;
};

export { PORT, HOST, getPublicApiUrl };