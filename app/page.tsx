const googleMapsLink = "https://maps.app.goo.gl/wvGKq1hzna1SsJ9w6";
const googleMapsEmbedUrl =
  "https://www.google.com/maps?q=30.788652,30.995450&output=embed";
const weddingDate = "9 يوليو 2026";
const weddingTime = "9:00 مساءً - 11:30 مساءً";

export default function Home() {
  return (
    <div className="page">
      <header className="hero">
        <div className="hero__ornament hero__ornament--left" aria-hidden="true" />
        <div className="hero__ornament hero__ornament--right" aria-hidden="true" />
        <div className="hero__panel">
          <div className="hero__seal" aria-hidden="true">
            <span>ش</span>
            <span className="seal__amp">&</span>
            <span>ن</span>
          </div>
          <p className="eyebrow">دعوة زفاف</p>
          <h1 className="title">
            شادي عبدالله <span className="amp">&</span> نورهان مومن
          </h1>
          <p className="subtitle">
            بكل محبة وفرح، تتشرف عائلتا شادي عبد الله ونورهان مومن
            بدعوتكم لمشاركتهم ليلة العمر وبدء فصل جديد من حياتهما.
          </p>
          <div className="hero__meta">
            <div className="meta-card">
              <p className="meta-label">التاريخ</p>
              <p className="meta-value">{weddingDate}</p>
            </div>
            <div className="meta-card">
              <p className="meta-label">الوقت</p>
              <p className="meta-value">{weddingTime}</p>
            </div>
            <div className="meta-card">
              <p className="meta-label">المكان</p>
              <p className="meta-value">طنطا، مصر</p>
            </div>
          </div>
          <div className="hero__actions">
            <a className="btn btn--primary" href="#location">
              عرض الموقع
            </a>
            <a
              className="btn btn--ghost"
              href={googleMapsLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              فتح في خرائط Google
            </a>
          </div>
        </div>
      </header>

      <main className="content">
        <section className="section">
          <div className="section__header">
            <p className="eyebrow">الاحتفال</p>
            <h2 className="section__title">ليلة مليئة بالحب والفرح</h2>
            <p className="section__subtitle">
              ننتظركم لمشاركتنا لحظات دافئة مليئة بالبهجة والذكريات الجميلة.
            </p>
          </div>
          <div className="details-grid">
            <div className="detail-card">
              <h3>استقبال الضيوف</h3>
              <p>
                نتشرف باستقبالكم قبل بداية الحفل بوقت قصير للترحيب وتبادل التهاني.
              </p>
            </div>
            <div className="detail-card">
              <h3>تفاصيل الأمسية</h3>
              <p>
                أمسية راقية مليئة باللحظات الهادئة والكلمات الدافئة من الأحبة.
              </p>
            </div>
            <div className="detail-card">
              <h3>تصوير وذكريات</h3>
              <p>
                ركن مخصص لالتقاط الصور والاحتفاظ بذكريات جميلة مع العائلة والأصدقاء.
              </p>
            </div>
          </div>
        </section>

        <section id="location" className="section location">
          <div className="section__header">
            <p className="eyebrow">الموقع</p>
            <h2 className="section__title">قاعة الزفاف في طنطا</h2>
            <p className="section__subtitle">
              طريق الاستاد، بجوار مبنى القناة 6. يتوفر موقف سيارات للضيوف.
            </p>
          </div>
          <div className="location__grid">
            <div className="location__map">
              <iframe
                title="موقع قاعة الزفاف"
                src={googleMapsEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="location__info">
              <h3>قاعة الزفاف</h3>
              <p className="address">
                طريق الاستاد، بجوار مبنى القناة 6
                <br />
                طنطا، مصر
              </p>
              <div className="info-list">
                <div className="info-item">
                  <span>الوصول</span>
                  <p>يفتح الاستقبال قبل بداية الحفل بثلاثين دقيقة.</p>
                </div>
                <div className="info-item">
                  <span>المواقف</span>
                  <p>تتوفر مواقف سيارات داخل القاعة للضيوف.</p>
                </div>
                <div className="info-item">
                  <span>الزي</span>
                  <p>الرجاء اختيار زي أنيق يليق بالمناسبة.</p>
                </div>
              </div>
              <div className="location__actions">
                <a
                  className="btn btn--primary"
                  href={googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  فتح في خرائط Google
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        نتطلع لرؤيتكم ومشاركتكم هذه الليلة المميزة.
      </footer>
    </div>
  );
}
