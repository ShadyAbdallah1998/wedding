const bingMapsUrl = "https://www.bing.com/maps?q=30.788652,30.995450";
const openStreetMapEmbedUrl =
  "https://www.openstreetmap.org/export/embed.html?bbox=30.97545%2C30.768652%2C31.01545%2C30.808652&layer=mapnik&marker=30.788652%2C30.99545";
const weddingDate = "9 July 2026";
const weddingTime = "9:30 PM - 11:30 PM";

export default function Home() {
  return (
    <div className="page">
      <header className="hero">
        <div className="hero__ornament hero__ornament--left" aria-hidden="true" />
        <div className="hero__ornament hero__ornament--right" aria-hidden="true" />
        <div className="hero__panel">
          <div className="hero__seal" aria-hidden="true">
            <span>S</span>
            <span className="seal__amp">&</span>
            <span>N</span>
          </div>
          <p className="eyebrow">Wedding Invitation</p>
          <h1 className="title">
            Shady Abdallah <span className="amp">&</span> Nourhan Momen
          </h1>
          <p className="subtitle">
            Together with their families, invite you to celebrate their marriage
            in an evening filled with joy, music, and warm memories.
          </p>
          <div className="hero__meta">
            <div className="meta-card">
              <p className="meta-label">Date</p>
              <p className="meta-value">{weddingDate}</p>
            </div>
            <div className="meta-card">
              <p className="meta-label">Time</p>
              <p className="meta-value">{weddingTime}</p>
            </div>
            <div className="meta-card">
              <p className="meta-label">Location</p>
              <p className="meta-value">Tanta, Egypt</p>
            </div>
          </div>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#location">
              View Location
            </a>
            <a
              className="btn btn--ghost"
              href={bingMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Open in Maps
            </a>
          </div>
        </div>
      </header>

      <main className="content">
        <section className="section">
          <div className="section__header">
            <p className="eyebrow">Celebration</p>
            <h2 className="section__title">An evening of love and joy</h2>
            <p className="section__subtitle">
              Join us for a night of heartfelt moments, elegant dinner, and a
              dance floor that stays glowing until the last song.
            </p>
          </div>
          <div className="details-grid">
            <div className="detail-card">
              <h3>Welcome Reception</h3>
              <p>
                Arrive early to enjoy a relaxed reception and greet the newlyweds
                before the celebration begins.
              </p>
            </div>
            <div className="detail-card">
              <h3>Dinner & Toasts</h3>
              <p>
                A curated dinner service with a few words of gratitude and love
                from family and friends.
              </p>
            </div>
            <div className="detail-card">
              <h3>Music & Dancing</h3>
              <p>
                Celebrate with music, laughter, and a dance floor that invites
                everyone to join.
              </p>
            </div>
          </div>
        </section>

        <section id="location" className="section location">
          <div className="section__header">
            <p className="eyebrow">Location</p>
            <h2 className="section__title">Wedding hall in Tanta</h2>
            <p className="section__subtitle">
              Stadium Road, near the Canal 6 building. Parking is available
              on-site.
            </p>
          </div>
          <div className="location__grid">
            <div className="location__map">
              <iframe
                title="Wedding hall location map"
                src={openStreetMapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="location__info">
              <h3>Wedding Hall</h3>
              <p className="address">
                Stadium Road, near Canal 6 building
                <br />
                Tanta, Egypt
              </p>
              <div className="info-list">
                <div className="info-item">
                  <span>Arrival</span>
                  <p>Doors open 30 minutes before the celebration begins.</p>
                </div>
                <div className="info-item">
                  <span>Parking</span>
                  <p>On-site parking is available for guests.</p>
                </div>
                <div className="info-item">
                  <span>Dress Code</span>
                  <p>Elegant attire to match the evening celebration.</p>
                </div>
              </div>
              <div className="location__actions">
                <a
                  className="btn btn--primary"
                  href={bingMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open in Bing Maps
                </a>
                <a
                  className="btn btn--ghost"
                  href="https://www.google.com/maps/search/?api=1&query=30.788652,30.995450"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        We cannot wait to celebrate this beautiful day with you.
      </footer>
    </div>
  );
}
