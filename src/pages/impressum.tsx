import Head from 'next/head'
import MainLayout from '@/layouts/MainLayout'

export default function PrivacyPolicy() {

  return (
    <>
      <Head>
        <title>Impressum - AirClean VS</title>
      </Head>

      <MainLayout scrollEffect={false}>
        <div className="py-[90px]">

          <div className="px-6 lg:px-8">
            <div className="relative mx-auto max-w-[37.5rem] text-center pt-14 lg:pt-20 pb-2 lg:pb-8">
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">Impressum</h1>
              <p className="mt-4 text-base leading-7 text-slate-600">Zuletzt aktualisiert am 29. Juni 2023</p>
            </div>
          </div>

          <div className="relative px-6 lg:px-8">
            <div className="mx-auto max-w-[40rem] text-sm text-slate-600 leading-6">

              <h2 className="text-xl font-bold text-slate-800 mt-10 mb-4">Angaben gemäß § 5 TMG:</h2>

              <p className="my-2">AirClean VS</p>
              <p className="my-2">Am Martinszehnten 3</p>
              <p className="my-2">60437 Frankfurt am Main</p>
              <p className="my-2">Mobil: +49 1512 2851195</p>
              <p className="my-2">E-Mail: info@airclean-setec.de</p>
              <p className="my-2">Inhaltlich Verantwortlicher: Feriz Selmanaj (Kontaktdaten siehe oben)</p>

              <h2 className="text-xl font-bold text-slate-800 mt-10 mb-4">Haftungsausschluss (Disclaimer) Haftung für Inhalte</h2>

              <p className="my-4">Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>

              <p className="my-4">Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>

              <h2 className="text-xl font-bold text-slate-800 mt-10 mb-4">Haftung für Links</h2>

              <p className="my-4">Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.</p>

              <p className="my-4">Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>

              <h2 className="text-xl font-bold text-slate-800 mt-10 mb-4">Urheberrecht</h2>

              <p className="my-4">Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.</p>

              <p className="my-4">Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.</p>

            </div>
          </div>

        </div>
      </MainLayout>
    </>
  )
}