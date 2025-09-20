function Error({ statusCode }) {
  return (
    <div style={{ 
      minHeight: '100vh', 
      background: '#f3f4f6',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem'
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '1rem' }}>
          {statusCode ? `${statusCode} - Server Error` : 'Client Error'}
        </h1>
        <p style={{ marginBottom: '2rem' }}>
          {statusCode === 404 
            ? 'The page you are looking for does not exist.' 
            : 'Something went wrong.'}
        </p>
        <a 
          href="/" 
          style={{
            backgroundColor: '#2563eb',
            color: 'white',
            padding: '0.75rem 1.5rem',
            borderRadius: '0.5rem',
            textDecoration: 'none'
          }}
        >
          Go Home
        </a>
      </div>
    </div>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;