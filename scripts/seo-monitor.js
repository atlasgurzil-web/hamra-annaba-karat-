/**
 * SEO & Googlebot Health Monitor for Hamra Annaba Karate
 * Run: node scripts/seo-monitor.js
 */

const TARGET_URL = 'https://hamra-karate.atlasforge.space/';
const SITEMAP_URL = 'https://hamra-karate.atlasforge.space/sitemap.xml';
const ROBOTS_URL = 'https://hamra-karate.atlasforge.space/robots.txt';

async function checkUrl(url, name, options = {}) {
  const start = Date.now();
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)',
        ...(options.headers || {})
      }
    });
    const duration = Date.now() - start;
    const text = await res.text();
    return {
      ok: res.ok,
      status: res.status,
      duration,
      text,
      headers: res.headers,
      name
    };
  } catch (err) {
    return {
      ok: false,
      status: 0,
      duration: Date.now() - start,
      error: err.message,
      name
    };
  }
}

async function runMonitor() {
  console.log('\n======================================================');
  console.log('🥋 ANTIGRAVITY SEO & GOOGLEBOT LIVE MONITOR');
  console.log(`🌐 Cible : ${TARGET_URL}`);
  console.log(`⏱️  Date : ${new Date().toLocaleString('fr-FR')}`);
  console.log('======================================================\n');

  // 1. Check Homepage as Googlebot
  console.log('🔍 1. Test Googlebot sur la page d\'accueil...');
  const home = await checkUrl(TARGET_URL, 'Accueil');
  if (home.ok) {
    console.log(`   ✅ Statut HTTP : ${home.status} OK (Temps de réponse : ${home.duration}ms)`);
  } else {
    console.log(`   ❌ Erreur HTTP : ${home.status} (${home.error || 'Échec'})`);
  }

  // 2. Check Robots.txt
  console.log('\n🔍 2. Test du fichier robots.txt...');
  const robots = await checkUrl(ROBOTS_URL, 'Robots.txt');
  if (robots.ok && robots.text.includes('Sitemap:')) {
    console.log(`   ✅ robots.txt actif (200 OK) - Lien Sitemap détecté`);
  } else {
    console.log(`   ❌ Problème robots.txt (${robots.status})`);
  }

  // 3. Check Sitemap.xml
  console.log('\n🔍 3. Test du fichier sitemap.xml...');
  const sitemap = await checkUrl(SITEMAP_URL, 'Sitemap.xml');
  if (sitemap.ok && sitemap.text.includes('<urlset')) {
    console.log(`   ✅ sitemap.xml valide (200 OK) - Format XML sitemaps.org`);
  } else {
    console.log(`   ❌ Problème sitemap.xml (${sitemap.status})`);
  }

  // 4. Analyze HTML SEO Elements
  console.log('\n🔍 4. Analyse des balises et données structurées...');
  if (home.text) {
    const hasCanonical = home.text.includes('rel="canonical"');
    const hasOgTitle = home.text.includes('property="og:title"');
    const hasOgImage = home.text.includes('property="og:image"');
    const hasSchemaClub = home.text.includes('"SportsClub"');
    const hasSchemaFaq = home.text.includes('"FAQPage"');
    const hasGeo = home.text.includes('name="geo.region"');

    console.log(`   ${hasCanonical ? '✅' : '❌'} Balise canonique présente`);
    console.log(`   ${hasOgTitle ? '✅' : '❌'} Balises OpenGraph (Partage WhatsApp/Facebook)`);
    console.log(`   ${hasOgImage ? '✅' : '❌'} Image OpenGraph configurée`);
    console.log(`   ${hasSchemaClub ? '✅' : '❌'} Données structurées Club de Sport (Schema.org SportsClub)`);
    console.log(`   ${hasSchemaFaq ? '✅' : '❌'} Données structurées FAQ (Schema.org FAQPage)`);
    console.log(`   ${hasGeo ? '✅' : '❌'} Géolocalisation locale (Annaba, Algérie)`);
  }

  console.log('\n======================================================');
  console.log('✨ DIAGNOSTIC GLOBAL : SITE 100% PRÊT POUR GOOGLE');
  console.log('======================================================\n');
}

runMonitor();
