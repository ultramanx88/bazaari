export default function NotFound() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #eff6ff 0%, #f0fdf4 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem'
    }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🔍</div>
        <h1 style={{ 
          fontSize: '2.5rem', 
          fontWeight: 'bold', 
          color: '#111827', 
          marginBottom: '1rem' 
        }}>
          Page Not Found
        </h1>
        <p style={{ 
          color: '#6b7280', 
          marginBottom: '2rem', 
          maxWidth: '28rem' 
        }}>
          Sorry, we couldn't find the page you're looking for. It might have been moved or doesn't exist.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <a 
            href="/" 
            style={{
              backgroundColor: '#2563eb',
              color: 'white',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.5rem',
              fontWeight: '500',
              textDecoration: 'none'
            }}
          >
            Go Home
          </a>
          <a 
            href="/visa-services" 
            style={{
              border: '1px solid #2563eb',
              color: '#2563eb',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.5rem',
              fontWeight: '500',
              textDecoration: 'none'
            }}
          >
            Visa Services
          </a>
        </div>
      </div>
    </div>
  );
}