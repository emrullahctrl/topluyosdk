# Topluyo SDK

<p align="center">
  <strong>Modern, tip güvenli ve geliştirici dostu Topluyo SDK</strong>
</p>

<p align="center">
  Topluyo platformuyla, Topluyosdk sayesinde kolayca etkileşim kurun.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white" alt="TypeScript">
  <img src="https://img.shields.io/badge/Node.js-22+-339933?logo=node.js&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/License-MIT-green.svg" alt="MIT License">
</p>

---

## ✨ Özellikler

* **🔒 Tip Güvenliği** — Tamamen TypeScript ile geliştirilmiştir. Güçlü tip tanımları ve IntelliSense desteği sunar.
* **🧩 Modüler Mimari** — Topluyo'nun farklı API kaynaklarına ayrı modüller üzerinden erişebilirsiniz.
* **⚡ Hafif ve Modern** — Dahili `fetch` tabanlı `RestClient` ile gereksiz bağımlılıklardan uzak, hafif bir yapı sunar.
* **📦 Kolay Kullanım** — Karmaşık HTTP istekleriyle uğraşmadan Topluyo API'sini doğrudan SDK üzerinden kullanabilirsiniz.
* **🚀 JavaScript & TypeScript** — Hem JavaScript hem de TypeScript projelerinde kullanılabilir.

---

## 📦 Kurulum

npm ile projeye ekleyin:

```bash
npm install topluyosdk
```

Yarn:

```bash
yarn add topluyosdk
```

pnpm:

```bash
pnpm add topluyosdk
```

---

## 🚀 Başlangıç

Platformdan aldığınız API token'ını kullanarak bir `TopluyoSDK` örneği oluşturmanız yeterlidir:

```ts
import { TopluyoSDK } from "topluyosdk";

const topluyo = new TopluyoSDK("GEREKLİ_TOKEN");
```

SDK artık kullanıma hazırdır.

---

# 📚 Kullanım

## 👤 Kullanıcı Bilgilerini Alma

Giriş yapan kullanıcının bilgilerini almak için:

```ts
async function getUserInfo() {
  try {
    const response = await topluyo.user.getMyInfo();

    console.log("Giriş Yapan Kullanıcı:", response.data.name);
  } catch (error) {
    console.error("Hata:", error);
  }
}

getUserInfo();
```

---

## 📢 Kanal Gönderilerini Listeleme

Belirli bir kanaldaki gönderileri almak için:

```ts
async function fetchChannelPosts(channelId: number) {
  try {
    const response = await topluyo.post.listByChannelId(channelId);

    console.log("Kanal Gönderileri:", response.data);
  } catch (error) {
    console.error("Gönderiler alınamadı:", error);
  }
}

fetchChannelPosts(17);
```

---

## ✍️ Yeni Gönderi Oluşturma

Topluyo üzerinde yeni bir gönderi oluşturabilirsiniz:

```ts
async function createPost() {
  try {
    await topluyo.post.add(17, {
      text: "Merhaba! Topluyo SDK ile gönderi paylaşıyorum!"
    });

    console.log("Gönderi başarıyla oluşturuldu.");
  } catch (error) {
    console.error("Gönderi paylaşılamadı:", error);
  }
}

createPost();
```

---

# 🧩 Desteklenen Modüller

Topluyo SDK, platformun sunduğu API uç noktalarını modüler yapılar halinde sunar.

| Modül                  | Açıklama                                        |
| ---------------------- | ----------------------------------------------- |
| `topluyo.channel`      | Kanal oluşturma, yönetme ve kanal işlemleri     |
| `topluyo.crew`         | Crew işlemleri ve yönetimi                      |
| `topluyo.favorite`     | Favori işlemleri                                |
| `topluyo.friend`       | Arkadaşlık ve arkadaş işlemleri                 |
| `topluyo.group`        | Grup yönetimi ve grup işlemleri                 |
| `topluyo.market`       | Uygulama pazarı ve market işlemleri             |
| `topluyo.member`       | Üye işlemleri ve yönetimi                       |
| `topluyo.message`      | Mesajlaşma ve sohbet işlemleri                  |
| `topluyo.notification` | Bildirim işlemleri ve yönetimi                  |
| `topluyo.park`         | Park işlemleri                                  |
| `topluyo.pass`         | Pass işlemleri                                  |
| `topluyo.permission`   | Yetki ve izin yönetimi                          |
| `topluyo.post`         | Gönderi oluşturma, listeleme ve yönetme         |
| `topluyo.public`       | Genel ve herkese açık API işlemleri             |
| `topluyo.role`         | Rol oluşturma ve rol yönetimi                   |
| `topluyo.team`         | Takım işlemleri ve yönetimi                     |
| `topluyo.test`         | Test amaçlı API işlemleri                       |
| `topluyo.turbo`        | Turbo transferleri ve transfer geçmişi          |
| `topluyo.user`         | Kullanıcı profili, hesap ve kullanıcı işlemleri |

### ⚙️ Altyapı

SDK'nın API modüllerinin yanı sıra aşağıdaki temel bileşenleri de bulunur:

* `Client` — SDK istemcisinin temel yapısı
* `RestClient` — HTTP isteklerinin yönetimi
* `types` — SDK genelinde kullanılan TypeScript tipleri
* `index` — SDK'nın ana giriş noktası

> Yeni API modülleri eklendikçe bu liste de güncellenecektir.

---

# 🛠️ Geliştirme

Projeyi yerel ortamınızda çalıştırmak ve geliştirmek için önce depoyu klonlayın:

```bash
git clone https://github.com/emrullahctrl/topluyosdk
cd topluyosdk
```

Ardından bağımlılıkları yükleyin:

```bash
npm install
```

TypeScript kaynak kodlarını derleyin:

```bash
npm run build
```

Derleme sonucunda `dist` klasörü oluşturulur.

Geliştirme sırasında yaptığınız değişiklikleri test etmek için projenin test ve geliştirme scriptlerini kullanabilirsiniz.

---

# 🤝 Katkıda Bulunma

Topluyo SDK'nın geliştirilmesine katkıda bulunabilirsiniz.

Kod katkısı, hata bildirimi, yeni özellik önerileri ve dokümantasyon iyileştirmeleri memnuniyetle karşılanır.

Katkı göndermeden önce ilgili issue'ları kontrol etmeniz ve mevcut kod yapısına uygun şekilde ilerlemeniz önerilir.

---

# 📄 Lisans

Bu proje **MIT Lisansı** altında lisanslanmıştır.

Daha fazla bilgi için [`LICENSE`](LICENSE) dosyasına bakabilirsiniz.

---

<p align="center">
  <sub>Topluyo SDK ile Topluyo API'sini daha kolay kullanın.</sub>
</p>
