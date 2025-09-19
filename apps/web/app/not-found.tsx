import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className="hero is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1 className="title is-1">404</h1>
          <h2 className="subtitle">Page Not Found</h2>
          <p className="mb-4">Could not find the requested resource</p>
          <Link href="/" className="button is-primary">
            Return Home
          </Link>
        </div>
      </div>
    </div>
  )
}