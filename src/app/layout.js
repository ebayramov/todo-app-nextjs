import { Container } from "react-bootstrap";
import Link from "next/link";
import 'bootstrap/dist/css/bootstrap.min.css'
import "./style.css"

export const metadata = {
  title: "Next ToDo"
}

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav className="navbar navbar-expand-sm bg-body-tertiary">
            <Container>
              <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                  <Link className="nav-link active" href="/">All posts</Link>
                  <Link className="nav-link" href="/todo/create">Add new post</Link>
                </div>
              </div>
            </Container>
          </nav>
        </header>
        <main>
          <Container>
            {children}
          </Container>
        </main>
        <footer></footer>
      </body>
    </html>
  )
}