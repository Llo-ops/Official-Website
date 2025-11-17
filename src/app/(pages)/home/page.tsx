import '@/app/sass/main/style.scss';

import { 
  Code,
  Palette,
  FolderGit2
} from 'lucide-react';

export default function HomePage() {
  return(
    <>
      <section className="home-page-style">
        <section className="top-side">
          <h1 className="intro-header">Welcome to my Website Portfolio</h1>
          <h2 className="intro-description">
            I sketch and conceptualize stories brewed into a perfect balance of design, code, and bringing your imaginations to life.
            <br />
            <br />
            So sit back, relax, grab a coffee, and enjoy exploring as much as you like.
          </h2>
        </section>

        <section className="bottom-side">
          <h1 className="intro-title">WHAT I DO</h1>
          <div className="intro-card-frame">
            <div className="card-style">
              <div className="card-icon"><Code /></div>
              <div className="card-title">Code and Concepts</div>
              <div className="card-description">Code based projects based on sites with design concepts and playful ideas.</div>
            </div>

            <div className="card-style">
              <div className="card-icon"><Palette /></div>
              <div className="card-title">Creative Design</div>
              <div className="card-description">Theme based designs on everyday items, genre, and concepts based on various media.</div>
            </div>

            <div className="card-style">
              <div className="card-icon"><FolderGit2 /></div>
              <div className="card-title">Side Projects</div>
              <div className="card-description">Projects made across several mediums of design, code, and projects in general.</div>
            </div>
          </div>
        </section>
          <div className="cloud-frame">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
      </section>
    </>
  )
}