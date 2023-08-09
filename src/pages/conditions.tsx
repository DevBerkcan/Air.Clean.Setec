import Head from 'next/head'
import MainLayout from '@/layouts/MainLayout'

export default function Conditions() {

  return (
    <>
      <Head>
        <title>AGB - AirClean VS</title>
      </Head>

      <MainLayout>
        <div className="py-[90px]">

          <div className="px-6 lg:px-8">
            <div className="relative mx-auto max-w-[37.5rem] text-center pt-10 lg:pt-20 pb-2 lg:pb-8">
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">AGB</h1>
            </div>
          </div>

          <div className="relative px-6 lg:px-8">
            <div className="mx-auto max-w-[40rem] text-sm text-slate-600 leading-6">

              <h2 className="text-xl font-bold text-slate-800 mt-10 mb-4">ALLGEMEINES – GELTUNGSBEREICH</h2>
              <p className="my-4">Die Geschäftsbedingungen gelten für alle gegenwärtigen und zukünftigen Geschäftsbeziehungen mit Unternehmen im Sinne des § 14 des Bürgerlichen Gesetzbuches (BGB), juristische Personen des öffentlichen Rechts und öffentlich-rechtlichen Sonder-vermögen.</p>
              <p className="my-4">Abweichende oder ergänzende Allgemeine Geschäftsbedingungen werden, selbst bei Kenntnis, nur Bestandteil, wenn Ihrer Geltung ausdrücklich zugestimmt wird.</p>

              <h2 className="text-xl font-bold text-slate-800 mt-10 mb-4">ART UND UMFANG DER LEISTUNG</h2>
              <p className="my-4">Vereinbarungen zwischen dem Auftraggeber und dem Auftragnehmer sind verbindlich, wenn der Auftraggeber ein Ange-bot/einen Auftrag unterzeichnet, der diese Bedingungen enthält. Dasselbe gilt, wenn der Auftraggeber die schriftliche Auftragsbestätigung vor Beginn der Arbeiten erhalten hat.</p>
              <p className="my-4">Die Leistungen werden wie im Angebot/Auftrag vereinbart aus-geführt. Auftragsänderungen bzw. –Erweiterungen haben nur Gültigkeit, wenn sie nach Art und Umfang schriftlich, im Ausnahmefall mündlich, von den hierzu autorisierten Personen festgelegt werden.</p>

              <h2 className="text-xl font-bold text-slate-800 mt-10 mb-4">ABNAHME UND GEWÄHRLEISTUNG</h2>
              <p className="my-4">Die Werkleistungen des Auftragnehmers gelten bei wiederkehrenden Leistungen als auftragsgerecht erfüllt und abgenommen, wenn der Auftraggeber nicht unverzüglich – spätestens bei Ingebrauchnahme – schriftlich begründete Einwendungen erhebt. Zeit, Ort, Art und Umfang des Mangels muss dabei genau beschrieben werden.</p>
              <p className="my-4">Bei einmaligen Werkleistungen (z.B. Bauendreinigung) erfolgt die Abnahme – ggf. auch abschnittweise – spätestens 3 Tage nach schriftlicher Meldung der Fertigstellung durch den Auftragnehmer. Kommt der Auftraggeber der Aufforderung zur Abnahme nicht nach, gilt das Werk als abgenommen. Bei Nichtwahrnehmung eines Abnahmetermins durch den Auftragnehmer gilt das Werk als nicht abgenommen.</p>
              <p className="my-4">Werden vom Auftraggeber bei der vertraglich festgelegten Leistung berechtigterweise Mängel beanstandet, so ist der Auftragnehmer zur Nachbesserung verpflichtet. Für Mängel und Schäden, die darauf zurückzuführen sind, dass der Auftraggeber wichtige Informationen über Art und Beschaffenheit der zu reinigenden Flächen und Gegenstände nicht an den Auftragnehmer weitergegeben hat, wird keine Gewährleistung übernommen. Gleiches gilt, wenn der Auftraggeber keine ausreichenden Vorkehrungen für die Zugänglichkeit bzw. Erreichbarkeit der zu reinigenden Flächen trifft.</p>
              <p className="my-4">Wenn der Mangel nicht beseitigt werden kann oder für den Auftraggeber ein weiterer Nachbesserungsversuch nicht zumutbar ist, kann der Auftraggeber anstelle der Nachbesserung Herabsetzung der Vergütung (Minderung) verlangen oder den Vertrag kündigen. Bei einer nur geringfügigen Vertragswidrigkeit, insbesondere bei nur geringfügigen Mängeln, steht dem Auftraggeber das Kündigungsrecht nicht zu.</p>
              <p className="my-4">Schadenersatz kann nur bei Vorsatz und grober Fahrlässigkeit verlangt werden. Die Ersatzpflicht beschränkt sich auf den vertragstypisch vorhersehbaren Schaden. Bei einmaligen Leistungen ist der Schadenersatz auf die Höhe des vereinbarten Werklohns begrenzt, bei wiederkehrenden Leistungen auf zwei Monatsvergütungen.</p>
              <p className="my-4">Die Gewährleistungsfrist beträgt 12 Monate.</p>

              <h2 className="text-xl font-bold text-slate-800 mt-10 mb-4">AUFMASS</h2>
              <p className="my-4">Die der Abrechnung zugrundeliegenden Maße sind gemäß den Richtlinien für Vergabe und Abrechnung des Bundesinnungsverbandes des Gebäudereiniger-Handwerks zu ermitteln.</p>
              <p className="my-4">Falls der Auftraggeber der Ermittlung nicht unverzüglich wider-spricht, gelten die Maße als anerkannt.</p>
              <p className="my-4">Stellt eine Vertragspartei fest, dass die zugrunde gelegten Maße unrichtig sind, gelten die von Auftraggeber und Auftragnehmer gemeinsam neu festgestellten Maße nur für zukünftige Abrechnungen. Erstattungen oder Nachforderungen für die Vergangen-heit sind ausgeschlossen.</p>

              <h2 className="text-xl font-bold text-slate-800 mt-10 mb-4">PREISE</h2>
              <p className="my-4">Die im Angebot festgelegten Preise beziehen sich auf die zum Zeitpunkt der Abgabe des Angebotes geltenden tariflichen und gesetzlichen, insbesondere sozialversicherungs- und steuer-rechtlichen, Bestimmungen. Bei deren Änderungen ändern sich auch die Preise entsprechend. Die angegebenen Preise sind Nettopreise und verstehen sich zuzüglich der jeweiligen gesetzlichen Mehrwertsteuer.</p>

              <h2 className="text-xl font-bold text-slate-800 mt-10 mb-4">SICHERUNGSEINBEHALT</h2>
              <p className="my-4">Das Recht des Auftraggebers, Sicherheitsbeträge für die Fertigstellung der vertraglichen Leistungen oder evtl. Gewährleistungsansprüche einzubehalten, ist ausgeschlossen.</p>

              <h2 className="text-xl font-bold text-slate-800 mt-10 mb-4">HAFTUNG</h2>
              <p className="my-4">Für Schäden, die nachweislich auf Reinigungsmaßnahmen zu-rückzuführen sind, haftet der Auftragnehmer im Rahmen der von ihm abgeschlossenen Betriebshaftpflichtversicherung. Auf Wunsch des Auftraggebers ist ihm ein konkreter Versicherungs-nachweis auszuhändigen. Für Schäden, die dem Auftragnehmer nicht unverzüglich gemeldet werden, entfällt die Haftung.</p>
              <p className="my-4">Bei einer Verletzung von Leben, Körper oder Gesundheit gelten die gesetzlichen Bestimmungen.</p>

              <h2 className="text-xl font-bold text-slate-800 mt-10 mb-4">ZAHLUNGSBEDINGUNGEN</h2>
              <p className="my-4">Rechnungen sind netto ohne Abzug innerhalb von 10 Kalender-tagen nach Rechnungsdatum zahlbar. Nicht vereinbarte Skontoabzüge werden nicht anerkannt.</p>
              <p className="my-4">Bei Überschreitung des Zahlungszieles werden Verzugszinsen in Höhe von 8 % über dem jeweils gültigen Basiszinssatz gemäß § 247 BGB berechnet. Die Geltendmachung weiterer Verzugsschäden bleibt vorbehalten.</p>

              <h2 className="text-xl font-bold text-slate-800 mt-10 mb-4">GERICHTSSTAND</h2>
              <p className="my-4">Als Gerichtsstand gilt ausschließlich der Sitz des Auftragnehmers.</p>

              <h2 className="text-xl font-bold text-slate-800 mt-10 mb-4">DATENSPEICHERUNG</h2>
              <p className="my-4">Es wird darauf hingewiesen, dass geschäftsnotwendige Daten, soweit im Rahmen des Bundesdatenschutzgesetzes (§ 26 BDSG) zulässig, elektronisch gespeichert und verwaltet werden.</p>

              <h2 className="text-xl font-bold text-slate-800 mt-10 mb-4">DATENSCHUTZERKLÄRUNG</h2>
              <p className="my-4">Wir sind berechtigt, alle Daten, die Geschäftsbeziehungen mit dem Kunden betreffen, entsprechend den Datenschutzgesetzen zu verarbeiten. Ferner haben wir das Recht, in unserer Eigenwerbung auf die Betreuung des Kunden hinzuweisen.</p>

              <h2 className="text-xl font-bold text-slate-800 mt-10 mb-4">TEILUNWIRKSAMKEIT</h2>
              <p className="my-4">Bei Unwirksamkeit einzelner Teile bleibt die Geltung der übrigen Bestimmungen erhalten. An Stelle der unwirksamen Klausel soll eine Regelung treten, die dem angestrebten Zweck der ursprünglichen Bestimmung rechtlich und wirtschaftlich am nächsten kommt.</p>

            </div>
          </div>

        </div>
      </MainLayout>
    </>
  )
}