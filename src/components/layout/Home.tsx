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
        <h3 className="text-3xl font-semibold">{h3}</h3>
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
      <section className="h-screen flex items-center justify-center">
        <div className="flex flex-col items-center gap-6">
          <span className="text-4xl font-bold"><h1>{t.page.home.hero}</h1></span>
          <span className="text-lg text-slate-600">{t.page.home.subhero}</span>
          <a
            href="/predict"
            className="inline-block px-4 py-2.5 bg-cyan-600 text-white rounded-full hover:bg-cyan-700 transition"
            role="button"
          >
            {t.page.home.heroBtn}
          </a>
        </div>
      </section>

      {/* features? */}
      <section className="flex flex-col items-center justify-center gap-10">
        <h2 className="text-4xl font-bold">{t.page.home.featHeadline}</h2>

        {/* articles section, ha */}
        <div className="flex flex-col gap-8">
          {/* article 1 */}
          <FeatureArticle
            img={testimg} alt="a drowmed ear" h3="Tarkus" text="emerson lake and palmer">
          </FeatureArticle>
          {/* article 2 */}
          <FeatureArticle
            img={testimg} alt="a drowmed ear" h3="meddle" text="pink floyd">
          </FeatureArticle>
          {/* article 3 */}
          <FeatureArticle
            img={testimg} alt="a drowmed ear" h3="one of these days" text="im gonna cut you into little pieces">
          </FeatureArticle>
          {/* article 4 */}
          <FeatureArticle
            img={testimg} alt="a drowmed ear" h3="willowing across the sand" text="and everything is green and submarine">
          </FeatureArticle>
        </div>
      </section>
    </main>
  )
}

export default Home;
