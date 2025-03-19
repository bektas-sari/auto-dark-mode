# Auto Dark Mode - Chrome Eklentisi 🌙

**Auto Dark Mode**, tarayıcınızda otomatik olarak koyu modu etkinleştiren ve kullanıcıların belirli siteleri hariç tutmasına olanak tanıyan bir Chrome eklentisidir. Bu eklenti, göz yorgunluğunu azaltır ve gece geç saatlerde daha rahat bir tarama deneyimi sunar.

---

## Özellikler ✨

- **Otomatik Koyu Mod**: Tüm web sitelerinde otomatik olarak koyu modu etkinleştirir.
- **Site Hariç Tutma**: Kullanıcılar, koyu modun uygulanmasını istemedikleri siteleri ekleyebilir.
- **Kolay Açma/Kapama**: Tek bir butonla koyu modu açıp kapatabilirsiniz.
- **Kullanıcı Dostu Arayüz**: Basit ve anlaşılır bir popup arayüzü sunar.

---

## Kurulum 🛠️

### 1. Depoyu İndirin
Bu projeyi bilgisayarınıza indirin veya klonlayın.
   ```bash
   git clone https://github.com/bektas-sari/auto-dark-mode.git
   ```

### 2. Chrome'a Yükleyin

1. Chrome tarayıcınızda `chrome://extensions/` adresine gidin.
2. Sağ üst köşedeki "Geliştirici modu" seçeneğini açın.
3. "Paketlenmemiş öğeyi yükle" butonuna tıklayın ve indirdiğiniz klasörü seçin.
4. Eklentiyi etkinleştirin: Eklenti, Chrome tarayıcınıza yüklenecek ve kullanıma hazır olacaktır.

---

## Kullanım 🖱️

### Koyu Modu Açma/Kapama

1. Tarayıcınızın sağ üst köşesindeki eklenti ikonuna tıklayın.
2. Açılan popup penceresinde "Toggle Dark Mode" butonuna tıklayarak koyu modu açın veya kapatın.

### Site Hariç Tutma

1. Popup penceresindeki "Excluded Sites" bölümüne, koyu modun uygulanmasını istemediğiniz sitenin URL'sini girin.
2. "Add Site" butonuna tıklayarak siteyi hariç tutulanlar listesine ekleyin.

---

## Proje Yapısı 📂

```
auto-dark-mode/
│── manifest.json
│── background.js
│── content.js
│── popup.html
│── popup.js
│── styles.css
│── icons/
│   ├── icon16.png
│   ├── icon48.png
│   ├── icon128.png
```

- **manifest.json**: Eklentinin temel yapılandırmasını içerir.
- **background.js**: Arka planda çalışan kodları içerir.
- **content.js**: Web sayfalarına enjekte edilir ve koyu modu uygular.
- **popup.html**: Eklentinin popup arayüzünün HTML yapısını içerir.
- **popup.js**: Popup penceresindeki butonların işlevselliğini sağlar.
- **styles.css**: Popup penceresi ve koyu mod için stil tanımlamalarını içerir.
- **icons/**: Eklenti ikonlarını içerir.

---

## Katkıda Bulunma 🤝

Bu proje açık kaynaklıdır ve katkılarınızı bekliyoruz! Katkıda bulunmak için:

1. Bu depoyu forklayın.
2. Yeni bir branch oluşturun (`git checkout -b yeni-ozellik`).
3. Değişikliklerinizi commit edin (`git commit -m 'Yeni özellik eklendi'`).
4. Branch'inizi pushlayın (`git push origin yeni-ozellik`).
5. Bir Pull Request oluşturun.

---

## Lisans 📜

Bu proje **MIT Lisansı** altında lisanslanmıştır. Daha fazla bilgi için `LICENSE` dosyasını inceleyebilirsiniz.

---

## İletişim 📧

Herhangi bir sorunuz veya öneriniz varsa, lütfen GitHub Issues sayfası üzerinden bana ulaşın.
Mail: bektas.sari@gmail.com

**Keyifli kullanımlar dilerim!**

