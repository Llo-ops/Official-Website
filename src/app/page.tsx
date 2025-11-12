import '@/app/sass/main/style.scss';

export default function Home() {
  return (
    <>
      <section>
        <div className='home-console-startup-edge'>
          <div className="console-base">

            {/* Text Area */}
            <div className="screen-home-frame">
              <div className="home-text-group">
                <h1>I’m Gerome Geisler Tejida</h1>
                <br />
                <p>An amateur web developer based in the Philippines. Welcome to my personal website.
                  <br />
                  <br />
                  Sit back and Relax. Grab a Coffee while you’re at it.
                </p>
              </div>
            </div>

            {/*Button Area*/}
            <div className="btn-area-home-frame">
              <div className="vent">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="btn-group-home">
                <div className="btnbase">
                  <button></button>
                </div>
              </div>
              <div className="vent">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>    
          </div>
        </div>
      </section>
    </>
  )
}
