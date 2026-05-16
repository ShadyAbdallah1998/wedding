"use client";

import type { MouseEvent } from "react";

const googleMapsLink = "https://maps.app.goo.gl/wvGKq1hzna1SsJ9w6";
const googleMapsEmbedUrl =
  "https://www.google.com/maps?q=30.8264078,30.9900287&z=16&output=embed";
const weddingDate = "9 يوليو 2026";
const weddingTime = "9:00 مساءً - 11:30 مساءً";

export default function Home() {
  const handleLocationClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const section = document.getElementById("location");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    const cleanUrl = `${window.location.pathname}${window.location.search}`;
    window.history.replaceState(null, "", cleanUrl);
  };

  return (
    <div className="page">
      <header className="hero">
        <div className="hero__ornament hero__ornament--left" aria-hidden="true" />
        <div className="hero__ornament hero__ornament--right" aria-hidden="true" />
        <div className="hero__panel">
          <div className="notice-card">
            <h3>رجاء بكل محبة 🚫🤍</h3>
            <p>
              يرجى <strong>عدم التصوير بالهواتف</strong>.
              <br />
              لدينا مصور خاص، ونسعد بالتقاط الصور معكم!
            </p>
          </div>
          <div className="hero__seal" aria-hidden="true">
            <span>ش</span>
            <span className="seal__amp">&</span>
            <span>ن</span>
          </div>
          <p className="eyebrow">دعوة زفاف</p>
          <h1 className="title">
            <span className="title__names">شادي عبدالله أحمد</span>
            <span className="amp">&</span>
            <span className="title__names">نورهان مؤمن الشيتي</span>
          </h1>
          <p className="subtitle">
            بكل محبة وفرح، تتشرف عائلتا شادي عبدالله ونورهان مؤمن
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
            <a
              className="btn btn--primary"
              href="#location"
              onClick={handleLocationClick}
            >
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
            <div className="detail-card card-rose">
              <h3>استقبال الضيوف</h3>
              <p>
                نتشرف باستقبالكم قبل بداية الحفل بوقت قصير للترحيب وتبادل التهاني.
              </p>
            </div>
            <div className="detail-card card-sage">
              <h3>تفاصيل الأمسية</h3>
              <p>
                أمسية راقية مليئة باللحظات الهادئة والكلمات الدافئة من الأحبة.
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
                {/* <div className="info-item">
                  <span>المواقف</span>
                  <p>تتوفر مواقف سيارات داخل القاعة للضيوف.</p>
                </div> */}
                {/* <div className="info-item">
                  <span>الزي</span>
                  <p>الرجاء اختيار زي أنيق يليق بالمناسبة.</p>
                </div> */}
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
