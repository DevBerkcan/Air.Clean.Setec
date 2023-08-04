import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function MainLayout({ scrollEffect, children }: any) {

  return (
    <main>

      {/* Header */}
      <Header scrollEffect={scrollEffect} />

      {/* Content */}
      <div>
        {children}
      </div>

      {/* Footer */}
      <Footer />

    </main>
  )
}