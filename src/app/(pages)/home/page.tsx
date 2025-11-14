import '@/app/sass/main/style.scss';

export default function HomePage() {
  return(
    <>
      <div className="home-page-layout">
        <section className="top-portion">
          <div className="text-top-portion">
            <h1>Welcome to my Website Portfolio</h1>
            <p>
              I design and conceptualize stories brewed into a perfect balance of design,
              <br />
              code, and bringing your imaginations to life.
              <br />
              <br />
              So sit back, relax, grab a coffee, and enjoy exploring as much as you can.
            </p>
          </div>

          <div className="intro-frame">
            <div className="intro-title">
              <p>WHAT I DO</p>
            </div>
            <div className="intro-cards">
              <span>1</span>
              <span>2</span>
              <span>3</span>
            </div>
          </div>
        </section>

        <section className="bottom-portion">
          <div className="socials">
            <span>1</span>
            <span>2</span>
            <span>3</span>
          </div>
          <button className="contact-quick-selection">
            <p>CONTACT ME</p>
          </button>
        </section>
      </div>
    </>
  )
}