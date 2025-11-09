// src/scenicSpots.ts
export interface ScenicSpot {
  id: number;
  name: string;
  location: string;
  description: string;
  image_url: string;
  price: number
}

export const scenicSpots: ScenicSpot[] = [
  {
    id: 1,
    name: "Vịnh Hạ Long",
    location: "Quảng Ninh",
    description: "Di sản thiên nhiên thế giới với hàng nghìn hòn đảo đá vôi giữa biển xanh.",
    image_url: "https://cdn-i.vtcnews.vn/resize/UyS5Ytevv36FhnPmr8OlM2T_hkI7DxA20/upload/2023/12/17/vinh-ha-long-11435985.jpg",
    price: 300000

  },
  {
    id: 2,
    name: "Sa Pa",
    location: "Lào Cai",
    description: "Thị trấn sương mù nổi tiếng với ruộng bậc thang và bản làng dân tộc thiểu số.",
    image_url: "https://vietlandtravel.vn/upload/img/products/05032025/sapavietnam.jpg",
    price: 300000

  },
  {
    id: 3,
    name: "Đà Lạt",
    location: "Lâm Đồng",
    description: "Thành phố ngàn hoa với khí hậu ôn hòa và nhiều điểm check-in lãng mạn.",
    image_url: "https://vitracotour.com/wp-content/uploads/2024/02/du-lich-da-lat.jpg",
    price: 300000

  },
  {
    id: 4,
    name: "Phú Quốc",
    location: "Kiên Giang",
    description: "Đảo ngọc nổi tiếng với biển xanh, cát trắng, nắng vàng.",
    image_url: "https://www.vietnamairlines.com/~/media/SEO-images/2025%20SEO/Traffic%20TA/MB/how-big-is-phu-quoc/phu-quocs-574-square-kilometers-make-it-larger-than-singapore.jpg?la=en",
    price: 300000

  },
  {
    id: 5,
    name: "Ninh Bình",
    location: "Ninh Bình",
    description: "Vẻ đẹp sông núi Tràng An, Tam Cốc – Bích Động tựa chốn bồng lai.",
    image_url: "https://cdn.nhandan.vn/images/1ef398c4e2fb4bf07980a2ded785b3ef6da51f0c0ad991901283c66f347bc9e436d11bd4e469a514a1b929d4bbed5ae51763ad014dae3171441e95cc994a2f33/trang-an-5882.jpg",
    price: 300000

  },
  {
    id: 6,
    name: "Hội An",
    location: "Quảng Nam",
    description: "Phố cổ rực rỡ đèn lồng và kiến trúc pha trộn Á – Âu độc đáo.",
    image_url: "https://statics.vinwonders.com/hoi-an-o-dau-thumb_1697556724.jpg",
    price: 300000

  },
  {
    id: 7,
    name: "Huế",
    location: "Thừa Thiên Huế",
    description: "Kinh đô cổ với di sản cung đình và dòng sông Hương thơ mộng.",
    image_url: "https://toquoc.mediacdn.vn/280518851207290880/2023/12/4/hue-imperial-gate-1024x683-754-17016811818591749547652.png",
    price: 300000

  },
  {
    id: 8,
    name: "Đà Nẵng",
    location: "Đà Nẵng",
    description: "Thành phố đáng sống với bãi biển Mỹ Khê và Cầu Rồng nổi tiếng.",
    image_url: "https://vcdn1-dulich.vnecdn.net/2022/06/03/cauvang-1654247842-9403-1654247849.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=Swd6JjpStebEzT6WARcoOA",
    price: 300000

  },
  {
    id: 9,
    name: "Hà Nội",
    location: "Hà Nội",
    description: "Thủ đô nghìn năm văn hiến, nơi giao thoa giữa hiện đại và cổ kính.",
    image_url: "https://cellphones.com.vn/sforum/wp-content/uploads/2024/01/dia-diem-du-lich-o-ha-noi-1.jpg",
    price: 300000

  },
  {
    id: 10,
    name: "TP. Hồ Chí Minh",
    price: 300000,
    location: "TP.HCM",
    description: "Thành phố năng động, trung tâm kinh tế lớn nhất Việt Nam.",
    image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJmoLIgLp65gtc4hVnqdpbepLRHp7bNj0pmA&s",


  },
  {
    id: 11,
    name: "Mộc Châu",
    location: "Sơn La",
    description: "Vùng cao nguyên với đồi chè xanh mướt và mùa hoa cải trắng tinh khôi.",
    image_url: "https://media.vov.vn/sites/default/files/styles/large_watermark/public/2021-10/image_6487327_2_29-10-2021-15-10-25.jpeg",
    price: 300000

  },
  {
    id: 12,
    name: "Hà Giang",
    location: "Hà Giang",
    description: "Cao nguyên đá Đồng Văn hùng vĩ, điểm đến cho những ai yêu phượt.",
    image_url: "https://vcdn1-dulich.vnecdn.net/2022/03/31/mapilenghagiangvnexpress-16487-2310-5584-1648718524.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=kOOQrA2oCmdoblPaNEpo1A",
    price: 300000

  },
];
