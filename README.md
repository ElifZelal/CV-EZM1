# CV Web Sitesi - Elif Zelal Müdüroğlu

Modern, responsive ve interaktif bir CV web sitesi. React, TypeScript ve Vite kullanılarak geliştirilmiştir.

## 🚀 Özellikler

- ⚡️ **Hızlı**: Vite ile optimize edilmiş build sistemi
- 📱 **Responsive**: Tüm cihazlarda mükemmel görünüm
- 🎨 **Modern Tasarım**: Gradient renkler ve smooth animasyonlar
- 🔧 **TypeScript**: Tip güvenliği ile daha güvenli kod
- 🎯 **SEO Dostu**: Semantic HTML yapısı
- ♿️ **Erişilebilir**: ARIA etiketleri ve klavye navigasyonu

## 📋 Bölümler

- **Ana Sayfa (Hero)**: Tanıtım ve hızlı erişim butonları
- **Hakkımda**: Kişisel bilgiler ve istatistikler
- **Deneyim**: İş deneyimleri timeline formatında
- **Eğitim**: Eğitim geçmişi kart formatında
- **Beceriler**: Teknik beceriler progress bar'larla
- **Sertifikalar**: Sertifikalar grid formatında
- **İletişim**: İletişim bilgileri ve iletişim formu

## 🛠️ Teknolojiler

- **React 18**: UI kütüphanesi
- **TypeScript**: Tip güvenliği
- **Vite**: Build tool ve dev server
- **CSS3**: Modern styling ve animasyonlar

## 📦 Kurulum

1. Projeyi klonlayın:
```bash
git clone <repository-url>
cd CV-EZM
```

2. Bağımlılıkları yükleyin:
```bash
npm install
```

3. Development server'ı başlatın:
```bash
npm run dev
```

4. Tarayıcınızda `http://localhost:5173` adresini açın

## 🏗️ Build

Production build oluşturmak için:

```bash
npm run build
```

Build dosyaları `dist` klasörüne oluşturulacaktır.

## 📁 Proje Yapısı

```
CV-EZM/
├── src/
│   ├── components/      # React componentleri
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Experience.tsx
│   │   ├── Education.tsx
│   │   ├── Skills.tsx
│   │   ├── Certificates.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── data/           # Veri dosyaları
│   │   └── data.ts
│   ├── types/          # TypeScript type tanımları
│   │   └── index.ts
│   ├── App.tsx         # Ana component
│   ├── main.tsx        # Entry point
│   └── index.css       # Global stiller
├── public/             # Statik dosyalar (profil fotoğrafı buraya)
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 🎨 Özelleştirme

CV içeriğini özelleştirmek için `src/data/data.ts` dosyasını düzenleyin:

- Deneyimler: `experiences` array'i
- Eğitim: `educations` array'i
- Beceriler: `skillCategories` array'i
- İletişim: `contactInfo` objesi
- İstatistikler: `stats` array'i
- Sertifikalar: `certificates` array'i

Renkleri özelleştirmek için `src/index.css` dosyasındaki CSS değişkenlerini düzenleyin:

```css
:root {
  --primary-color: #6366f1;
  --secondary-color: #8b5cf6;
  /* ... */
}
```

## 📸 Profil Fotoğrafı

Profil fotoğrafınızı `public` klasörüne `profile-photo.jpg` veya `profile-photo.png` olarak ekleyin.

## 📝 Lisans

Bu proje kişisel kullanım için oluşturulmuştur.

## 👤 Yazar

**Elif Zelal Müdüroğlu**

- Email: elifzelalmuduroglu@gmail.com
- LinkedIn: [linkedin.com/in/elifzelalmuduroglu](https://linkedin.com/in/elifzelalmuduroglu)

---

⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!

