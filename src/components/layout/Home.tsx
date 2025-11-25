import { Link } from 'react-router-dom'
import { useLang } from '../../context/LangContext'
import testimg from '../../assets/meddle.jpg'

type FeatArticleProps = {
  img: string; alt: string; h3: string; text: string;
}

function FeatureArticle({ img, alt, h3, text }: FeatArticleProps) {
  return (
    <article className="flex gap-6">
      <div className="flex-shrink-0 w-20 sm:w-32 lg:w-48" style={{ aspectRatio: "1/1" }}>
        <img src={img} alt={alt} loading="lazy"
          className="w-full h-full rounded-md object-cover"
        />
      </div>
      <div className="flex flex-col">
        <h3 className="text-[1.75rem] text-slate-700 font-medium">{h3}</h3>
        <span className="text-lg text-slate-600">{text}</span>
      </div>
    </article>
  )
}

function Home() {
  const { t } = useLang()

  return (
    <main>
      {/* hero */}
      <section className="h-screen flex items-center">
        <div className="flex flex-col items-center gap-6 text-center px-4 w-full">
          {/* ekstiny badge */}
          <p className="inline-flex items-center rounded-full bg-cyan-50 px-3 py-1 text-sm font-medium text-cyan-700">
            {t.page.home.heros.badge}
          </p>

          {/* main heading */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-3xl">
            {t.page.home.hero}
          </h1>

          {/* subheading */}
          <p className="text-lg text-slate-600 max-w-2xl">
            {t.page.home.subhero}
          </p>

          {/* buttons row */}
          <div className="flex flex-col sm:flex-row gap-3 mt-2">
            <Link
              to="/predict"
              className="inline-block px-6 py-2.5 bg-cyan-600 text-white rounded-full hover:bg-cyan-700 transition"
            >
              {t.page.home.heros.heroBtn}
            </Link>

            <Link
              to="/about"
              className="inline-block px-6 py-2.5 rounded-full border border-cyan-600 text-cyan-700 hover:bg-cyan-50 transition"
            >
              {t.page.home.heros.secondBtn}
            </Link>
          </div>

          {/* idk just for reassurance */}
          <p className="text-sm text-slate-500 mt-1">
            {t.page.home.heros.smallNote}
          </p>
        </div>
      </section>

      {/* features? */}
      <section className="flex flex-col items-center justify-center gap-10">
        <h2 className="text-4xl font-bold">{t.page.home.featHeadline}</h2>

        {/* articles section, ha */}
        <div className="flex flex-col gap-8">
          {/* article 1 */}
          <FeatureArticle
            img={testimg} alt="a drowmed ear" h3="Predict. Simple. Fast"
            text="">
          </FeatureArticle>
          {/* article 2 */}
          <FeatureArticle
            img={testimg} alt="a drowmed ear" h3="meddle"
            text="pink floyd">
          </FeatureArticle>
          {/* article 3 */}
          <FeatureArticle
            img={testimg} alt="a drowmed ear" h3="one of these days"
            text="im gonna cut you into little pieces">
          </FeatureArticle>
          {/* article 4 */}
          <FeatureArticle
            img={testimg} alt="a drowmed ear" h3="willowing across the sand"
            text="and everything is green and submarine">
          </FeatureArticle>
        </div>
      </section>
    </main>
  )
}

export default Home;
