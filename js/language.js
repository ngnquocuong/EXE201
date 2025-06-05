const languageData = {
    en: {
        // Navigation
        home: "Home",
        about: "About",
        ourGifts: "Our Gifts",
        contactUs: "Contact Us",

        // Banner
        ourBest: "Our Best",
        tealightHug: "Tealight Hug",
        tealightDesc: "A gentle gift set for late afternoon - helps you relax quickly without being complicated",
        floralTreat: "Floral Treat",
        floralDesc: "A sweet and feminine combo - perfect as a gift for girlfriends, birthdays, or self-care occasions",
        honeyRose: "Honey Rose",
        honeyDesc: "Premium mini tealight candles chillme organic soybean wax for home decor and gifts",
        readMore: "Read More",

        // About Section
        aboutUs: "About Us",
        aboutText: "Touch into gentleness - healing every moment. Mira You brings small gifts for the soul: scented candles, bath bombs, essential oils... All for when you want to slow down, breathe deeply and return to yourself.",
        aboutMission: "Our mission is to create moments of peace and self-care in your daily life. Each product is carefully selected and crafted to bring comfort and tranquility to your space.",

        // Shop Section
        ourShop: "Our Shop",
        shopDesc1: "Welcome to our cozy corner where every item is carefully selected to bring warmth and comfort to your space.",
        shopDesc2: "From aromatic candles to soulful accessories, discover pieces that transform your everyday moments into special occasions.",

        // Footer
        myAccount: "My Account",
        checkout: "Checkout",
        myOrders: "My Orders",
        myCreditSlips: "My Credit Slips",
        myAddresses: "My Addresses",
        myPersonalInfo: "My Personal Info",
        information: "Information",
        specials: "Specials",
        newProducts: "New Products",
        bestSellers: "Best Sellers",
        ourStores: "Our Stores",
        securePayment: "Secure Payment",
        subscribe: "Subscribe",
        enterEmail: "Enter your email"
    },
    vi: {
        // Navigation
        home: "Trang Chủ",
        about: "Về Chúng Tôi",
        ourGifts: "Sản Phẩm",
        contactUs: "Liên Hệ",

        // Banner
        ourBest: "Sản Phẩm Nổi Bật",
        tealightHug: "Tealight Hug",
        tealightDesc: "Một set quà nhẹ nhàng cho buổi chiều cuối ngày – giúp thư giãn nhanh chóng mà không cầu kỳ",
        floralTreat: "Floral Treat",
        floralDesc: "Một combo ngọt ngào và nữ tính – phù hợp làm quà tặng cho bạn gái, sinh nhật, hoặc những dịp tự thương chính mình",
        honeyRose: "Honey Rose",
        honeyDesc: "Nến thơm tealight mini cao cấp chillme sáp đậu nành organic decor trang trí nhà cửa và quà tặng",
        readMore: "Xem Thêm",

        // About Section
        aboutUs: "Về Chúng Tôi",
        aboutText: "Chạm vào dịu dàng – chữa lành từng khoảnh khắc. Mira You mang đến những món quà nhỏ cho tâm hồn: nến thơm, viên tắm, tinh dầu... Tất cả dành cho những lúc bạn muốn chậm lại, thở sâu và trở về với chính mình.",
        aboutMission: "Sứ mệnh của chúng tôi là tạo ra những khoảnh khắc bình yên và tự chăm sóc bản thân trong cuộc sống hàng ngày. Mỗi sản phẩm đều được chọn lọc và chế tác cẩn thận để mang lại sự thoải mái và thanh thản cho không gian của bạn.",

        // Shop Section
        ourShop: "Cửa Hàng",
        shopDesc1: "Chào mừng bạn đến với góc nhỏ ấm cúng, nơi mỗi món đồ đều được chọn lọc kỹ lưỡng để mang lại sự ấm áp và thoải mái cho không gian của bạn.",
        shopDesc2: "Từ nến thơm đến các phụ kiện tinh tế, khám phá những món đồ biến khoảnh khắc bình thường trở nên đặc biệt.",

        // Footer
        myAccount: "Tài Khoản",
        checkout: "Thanh Toán",
        myOrders: "Đơn Hàng",
        myCreditSlips: "Phiếu Tín Dụng",
        myAddresses: "Địa Chỉ",
        myPersonalInfo: "Thông Tin Cá Nhân",
        information: "Thông Tin",
        specials: "Ưu Đãi Đặc Biệt",
        newProducts: "Sản Phẩm Mới",
        bestSellers: "Bán Chạy Nhất",
        ourStores: "Cửa Hàng",
        securePayment: "Thanh Toán An Toàn",
        subscribe: "Đăng Ký",
        enterEmail: "Nhập email của bạn"
    }
};

let currentLang = 'en';

function toggleLanguage() {
    currentLang = currentLang === 'vi' ? 'en' : 'vi';
    updateContent();
    document.getElementById('langBtn').textContent = currentLang === 'vi' ? 'EN' : 'VI';
    
    // Update font family based on language
    if (currentLang === 'vi') {
        document.querySelectorAll('[data-lang]').forEach(element => {
            element.style.fontFamily = "'Times New Roman', serif";
        });
    } else {
        document.querySelectorAll('[data-lang]').forEach(element => {
            element.style.fontFamily = ""; // Reset to default font
        });
    }
}

function updateContent() {
    const lang = languageData[currentLang];
    
    // Update all text content
    document.querySelectorAll('[data-lang]').forEach(element => {
        const key = element.getAttribute('data-lang');
        if (lang[key]) {
            if (element.tagName.toLowerCase() === 'input') {
                element.placeholder = lang[key];
            } else {
                element.textContent = lang[key];
            }
        }
    });
}

// Initialize the page with default language
document.addEventListener('DOMContentLoaded', () => {
    updateContent();
    document.getElementById('langBtn').textContent = 'VI';
}); 