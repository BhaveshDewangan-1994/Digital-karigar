/**
 * ==============================================================================
 * DIGITAL KARIGAR - LOCAL SERVICES DIRECTORY JAVASCRIPT
 * Features:
 *  - Dynamic Bilingual Language Switching (हिन्दी / English) with LocalStorage
 *  - Two-Column Hero Doorstep Service Card Click Filtering
 *  - Navigation Active States & Scrollspy Highlights
 *  - Dynamic Service Directory with 9 Diverse Verified Karigars
 *  - Real-time Multi-criteria Filtering (Search keyword, Category chip, Zone, Sort)
 *  - Bilingual Hindi & English keyword matching ('नल', 'Plumber', 'Wiring', etc.)
 *  - 'Call Now' & 'WhatsApp' Direct Action Buttons
 *  - Quick Booking Form with Indian Phone Validation
 *  - LocalStorage Booking Persistence & Reference ID Generation
 *  - Interactive Confirmation Modal & "My Bookings" History Drawer
 *  - Responsive Mobile Navigation Drawer & Toast System
 * ==============================================================================
 */

// Strict Mode
'use strict';

/* --------------------------------------------------------------------------
   1. BILINGUAL DICTIONARY (HINDI & ENGLISH)
   -------------------------------------------------------------------------- */
const I18N_TRANSLATIONS = {
  hi: {
    // Educational Demo Project Disclaimers
    demo_notice_top: '⚠️ सूचना: यह वेबसाइट केवल अभ्यास और शैक्षणिक (Educational) उद्देश्य के लिए बनाई गई एक डेमो परियोजना है। यह कोई वास्तविक व्यावसायिक प्रतिष्ठान नहीं है, और यहां कोई वास्तविक सेवाएं या वित्तीय लेन-देन नहीं होते हैं।',
    demo_notice_footer: "अस्वीकरण (Disclaimer): 'डिजिटल कारीगर' (Digital Karigar) वेब डेवलपमेंट अभ्यास और शैक्षणिक उद्देश्य के लिए विकसित एक प्रोटोटाइप परियोजना है। यहां प्रदर्शित सभी फोन नंबर, ऑफ़र, समीक्षाएं और ब्रांडिंग केवल सांकेतिक (Illustrative) हैं तथा कानूनी रूप से बाध्यकारी नहीं हैं।",

    // Header & Navigation
    emergency_badge: '24x7 इमरजेंसी सेवा',
    my_bookings_btn: 'मेरी बुकिंग्स',
    nav_home: 'मुख्य पृष्ठ',
    nav_services: 'हमारी सेवाएँ',
    nav_how_it_works: 'यह काम कैसे करता है',
    nav_providers: 'हमारे कारीगर',
    nav_booking: 'संपर्क करें',
    nav_cta: 'कारीगर बुक करें',
    select_lang: 'भाषा चुनें (Language):',
    drawer_emergency_call: 'इमरजेंसी कॉल: +91 98765 43210',

    // New Two-Column Hero Section
    hero_doorstep_badge: 'त्वरित होम सर्विस',
    hero_doorstep_title: 'Home Service at Your Doorstep',
    hero_doorstep_sub: 'घर पर सेवाएँ उपलब्ध — कुशल व सत्यापित कारीगर बस एक क्लिक में आपके द्वार पर',
    doorstep_click_hint: 'किसी भी सेवा पर क्लिक करके कारीगर खोजें',
    hero_showcase_title: 'कार्यरत कारीगर (Karigars in Action)',
    hero_showcase_badge: '100% ऑन-फील्ड',
    hero_showcase_sub: 'उच्च गुणवत्ता, सुरक्षा किट और आधुनिक टूल्स के साथ वास्तविक काम',

    // New 'Our Promises' Section
    promises_pill: 'भरोसेमंद सेवा',
    promises_title: 'Our Promises (हमारा वादा)',
    promises_sub: 'हर भारतीय घर तक गुणवत्ता, सुरक्षा और ईमानदारी पहुंचाने की हमारी पक्की गारंटी',
    promise1_title: 'Transparent Pricing',
    promise1_desc: 'पारदर्शी दरें, काम शुरू करने से पहले फिक्स एस्टीमेट और शून्य छुपा शुल्क।',
    promise2_title: 'Expert Only',
    promise2_desc: '100% पृष्ठभूमि व पहचान सत्यापित (Background & Identity Verified), 5+ वर्ष के अनुभवी व प्रशिक्षित कारीगर।',
    promise3_title: 'Fully Equipped',
    promise3_desc: 'हर तरह की मरम्मत और काम के लिए आधुनिक टूल्स व उपकरणों से पूरी तरह लैस।',

    // New 'Our Special Offer' Section
    nav_offers: 'विशेष ऑफर',
    offers_pill: 'सीमित समय ऑफर',
    offers_title: 'Our Special Offer (हमारा विशेष ऑफर)',
    offers_sub: 'डिजिटल कारीगर के साथ हर बुकिंग पर पाएं सुनिश्चित बचत और वफादारी पुरस्कार',
    offer1_badge: 'नया ग्राहक',
    offer1_tier: 'First Order',
    offer1_discount: '20% Off',
    offer1_desc: 'अपनी पहली किसी भी घरेलू सेवा की बुकिंग पर पाएं 20% की सीधी छूट।',
    offer2_badge: 'लॉयल्टी रिवार्ड',
    offer2_tier: 'Fifth Order',
    offer2_discount: '50% Off',
    offer2_desc: '5वीं सेवा पर आधी कीमत! हमारे नियमित ग्राहकों के लिए विशेष 50% डिस्काउंट।',
    offer3_badge: 'मेगा माइलस्टोन',
    offer3_tier: '10th Order',
    offer3_discount: '100% Free',
    offer3_desc: '10वीं बुकिंग का विजिटिंग व सर्विस चार्ज बिल्कुल मुफ़्त! हमारी तरफ से उपहार।',
    coupon_code_lbl: 'कोड:',

    // New 'Customer Review' Section
    nav_reviews: 'ग्राहकों की राय',
    reviews_pill: 'ग्राहकों का अनुभव',
    reviews_title: 'Customer Review (ग्राहकों की राय)',
    reviews_sub: 'हजारों संतुष्ट परिवारों द्वारा प्रमाणित विश्वसनीय कारीगर और सुरक्षित सेवाएं',
    btn_many_more_reviews: 'Many More... (और भी समीक्षाएं देखें)',
    reviews_modal_title: 'सभी सत्यापित ग्राहकों की समीक्षाएं',
    reviews_modal_sub: 'डिजिटल कारीगर द्वारा 10,000+ संतुष्ट घरों का विश्वास',
    review_verified_badge: 'सत्यापित ग्राहक',
    review_service_availed: 'सर्विस ली:',

    // Search & Filter Controls
    search_placeholder: "सेवा या कीवर्ड खोजें (उदा. 'नल', 'Plumber', 'Wiring', 'AC', 'Leakage')...",
    zone_all: 'सभी क्षेत्र (All Zones / Areas)',
    btn_search: 'कारीगर खोजें',
    quick_filters_label: 'लोकप्रिय श्रेणियां (Quick Filters):',
    chip_all: 'All (सभी)',
    chip_plumber: 'Plumber (नल व पाइप)',
    chip_electrician: 'Electrician (बिजली)',
    chip_ac: 'AC Repair (एसी सर्विस)',
    chip_carpenter: 'Carpenter (बढ़ई)',
    chip_cleaning: 'Cleaning (सफाई)',
    chip_painter: 'Painter (रंगाई-पुताई)',

    // Directory Section
    dir_pill: 'प्रमाणित विशेषज्ञ',
    dir_title: 'हमारे लोकप्रिय कारीगर व सेवाएं (Service Directory)',
    dir_desc: 'सीधे कारीगर से संपर्क करें, फोन लगाएं या व्हाट्सएप पर तुरंत बातचीत शुरू करें।',
    dir_showing: 'दिखाए जा रहे हैं:',
    dir_karigars_unit: 'कारीगर',
    sort_recommended: 'अनुशंसित (Recommended)',
    sort_rating: 'उच्चतम रेटिंग (Highest Rated)',
    sort_exp: 'अधिकतम अनुभव (Most Experienced)',
    sort_price: 'न्यूनतम विजिट चार्ज (Price: Low to High)',
    empty_title: 'कोई कारीगर नहीं मिला (No Results Found)',
    empty_desc: "आपके द्वारा खोजे गए कीवर्ड या चयनित क्षेत्र के लिए फिलहाल कोई कारीगर उपलब्ध नहीं है। कृपया अलग कीवर्ड या 'सभी क्षेत्र' चुनकर पुनः प्रयास करें।",
    btn_reset_filters: 'सभी फ़िल्टर रीसेट करें',

    // How It Works
    how_pill: 'सरल और सुगम प्रक्रिया',
    how_title: 'यह काम कैसे करता है? (How It Works)',
    how_desc: 'केवल 3 आसान चरणों में घर बैठे किसी भी समस्या का तुरंत समाधान पाएं।',
    step1_tag: 'चरण 01',
    step1_title: '1. सेवा चुनें',
    step1_desc: 'अपनी जरूरत के अनुसार प्लंबर, इलेक्ट्रीशियन, कारपेंटर या एसी मैकेनिक चुनें और अपने इलाके के सत्यापित कारीगरों की प्रोफाइल व विजिटिंग चार्ज देखें।',
    step1_bullet1: 'पारदर्शी न्यूनतम शुल्क',
    step1_bullet2: 'वास्तविक ग्राहक रेटिंग',
    step2_popular: 'सबसे तेज़',
    step2_tag: 'चरण 02',
    step2_title: '2. सीधे कारीगर से जुड़ें',
    step2_desc: "बिना किसी मध्यस्थ या कमीशन के, कार्ड पर दिए गए 'Call Now' या 'WhatsApp' बटन से सीधे कारीगर से बात करें या ऑनलाइन बुकिंग फॉर्म भरें।",
    step2_bullet1: 'सीधी बात, त्वरित रिस्पॉन्स',
    step2_bullet2: 'समय व समस्या पर सीधी चर्चा',
    step3_tag: 'चरण 03',
    step3_title: '3. काम के बाद भुगतान करें',
    step3_desc: 'कारीगर आपके घर आकर समस्या की जांच करेगा व काम पूरा करेगा। काम की पूरी संतुष्टि के बाद ही UPI या नकद द्वारा उचित भुगतान करें।',
    step3_bullet1: 'शून्य अग्रिम शुल्क (₹0 Advance)',
    step3_bullet2: 'काम की संतुष्टि व भरोसा',

    // Why Choose Us
    why_pill: 'आपका विश्वसनीय साथी',
    why_title: 'डिजिटल कारीगर ही क्यों चुनें?',
    why_desc: 'हम स्थानीय कारीगरों को डिजिटल पहचान और आपको सुरक्षित, भरोसेमंद और किफायती सेवाएं उपलब्ध कराते हैं।',
    feat1_title: '100% पृष्ठभूमि व पहचान सत्यापित (Background & Identity Verified)',
    feat1_desc: 'हमारे नेटवर्क में शामिल हर कारीगर का पहचान सत्यापन और अनुभव जांचा जाता है।',
    feat2_title: 'कोई छुपा हुआ शुल्क नहीं (Fixed Visit Charge)',
    feat2_desc: 'विजिटिंग चार्ज पहले से तय होते हैं, काम शुरू करने से पहले एस्टीमेट दिया जाता है।',
    feat3_title: '7 दिन की री-सर्विस संतुष्टि वारंटी',
    feat3_desc: 'यदि काम में कोई खामी रह जाए, तो 7 दिनों के भीतर बिना किसी अतिरिक्त विजिट चार्ज के समाधान।',
    emergency_need_help: 'तुरंत सहायता चाहिए?',
    emergency_banner_title: 'क्या आपको तुरंत इमरजेंसी सर्विस की दरकार है?',
    emergency_banner_desc: 'पानी की पाइप फट गई हो या बिजली चली गई हो, हमारे इमरजेंसी एक्सपर्ट्स 30 मिनट में पहुंचेंगे।',
    whatsapp_send_msg: 'व्हाट्सएप पर मैसेज भेजें',

    // Quick Booking Form
    booking_pill: 'क्विक कॉलबैक सेवा',
    booking_headline: 'कारीगर कॉलबैक या सर्विस बुक करें',
    booking_sub: 'बस अपनी जानकारी और समस्या दर्ज करें। संबंधित क्षेत्र का निकटतम कारीगर आपको 15 मिनट के अंदर संपर्क करेगा।',
    perk1: 'लोकल स्टोरेज में सुरक्षित बुकिंग रिकॉर्ड',
    perk2: 'यूनिक बुकिंग आईडी और तुरंत पुष्टिकरण',
    perk3: 'शून्य अग्रिम भुगतान (Zero Advance)',
    helpline_box_title: 'फॉर्म भरने में परेशानी?',
    helpline_box_desc: 'सीधे हमारी ग्राहक हेल्पलाइन पर कॉल करके भी कारीगर बुक करा सकते हैं:',
    form_title: 'सर्विस रिक्वेस्ट फॉर्म',
    form_subtitle: 'कृपया आवश्यक विवरण दर्ज करें (* अनिवार्य फ़ील्ड)',
    selected_karigar_lbl: 'चयनित कारीगर:',
    label_name: 'आपका नाम (Customer Name)',
    label_phone: 'मोबाइल नंबर (Phone Number)',
    label_service: 'चुनी गई सेवा (Selected Service)',
    label_area: 'आपका क्षेत्र (Area / Zone)',
    label_date: 'पसंदीदा तारीख (Preferred Date)',
    label_time: 'पसंदीदा समय (Time Slot)',
    label_problem: 'समस्या का संक्षिप्त विवरण (Brief Problem Description)',
    issue_suggestions: 'सुझाव:',
    btn_submit_booking: 'बुकिंग दर्ज करें (Book & Get Callback)',
    submit_disclaimer: 'आपकी जानकारी 100% सुरक्षित है। कोई अग्रिम शुल्क नहीं।',
    error_name: 'कृपया अपना नाम दर्ज करें।',
    error_phone: 'कृपया मान्य 10 अंकों का भारतीय मोबाइल नंबर दर्ज करें।',
    error_service: 'कृपया सेवा का चयन करें।',
    error_area: 'कृपया अपना क्षेत्र चुनें।',
    error_problem: 'कृपया अपनी समस्या का संक्षेप में विवरण दें।',
    opt_select_service: '-- सेवा का चयन करें --',
    opt_select_area: '-- अपना इलाका / ज़ोन चुनें --',
    slot_asap: 'जितनी जल्दी हो सके (As Soon As Possible - 30 Mins)',
    slot_morning: 'सुबह (09:00 AM - 12:00 PM)',
    slot_afternoon: 'दोपहर (12:00 PM - 04:00 PM)',
    slot_evening: 'शाम (04:00 PM - 08:00 PM)',

    // Confirmation Modal
    modal_success_title: 'बुकिंग सफलतापूर्वक दर्ज की गई!',
    modal_greeting: 'नमस्ते',
    modal_greeting_post: 'जी, आपकी सेवा अनुरोध प्राप्त हो गया है।',
    modal_ref_id: 'बुकिंग रेफरेंस ID:',
    modal_service: 'चयनित सेवा:',
    modal_area: 'क्षेत्र (Zone):',
    modal_phone: 'मोबाइल नंबर:',
    modal_timeslot: 'समय स्लॉट:',
    modal_status: 'स्थिति (Status):',
    modal_status_confirmed: 'सत्यापित कारीगर असाइन हो रहा है',
    modal_help_note: 'हमारा निकटतम कारीगर अगले 15 मिनट में आपको कॉल करके समय व पते की पुष्टि करेगा।',
    modal_btn_whatsapp: '📱 WhatsApp पर बुकिंग कन्फर्म करें (Send to WhatsApp)',
    modal_btn_view: 'मेरी सभी बुकिंग्स देखें',
    modal_btn_done: 'ठीक है (Done)',

    // Drawer
    drawer_title: 'मेरी बुकिंग हिस्ट्री (My Bookings)',
    drawer_storage_note: 'यह डेटा आपके ब्राउज़र के LocalStorage में सुरक्षित रूप से सहेजा गया है।',
    drawer_empty: 'अभी तक कोई बुकिंग दर्ज नहीं है।',
    drawer_book_first: 'अभी पहली सेवा बुक करें',
    drawer_clear_all: 'सारा रिकॉर्ड साफ़ करें',

    // Footer
    footer_desc: 'डिजिटल कारीगर भारत के स्थानीय हुनरमंद कारीगरों और परिवारों के बीच एक मजबूत व पारदर्शी सेतु है। हम हर घर तक विश्वसनीय, समयबद्ध और सुरक्षित सेवाएं पहुंचाते हैं।',
    footer_services_title: 'लोकप्रिय सेवाएं (Services)',
    footer_zones_title: 'कवरेज क्षेत्र (Coverage Zones)',
    footer_helpline_title: '24/7 हेल्पलाइन सपोर्ट',
    footer_helpline_label: 'तत्काल सहायता नंबर:',
    footer_helpline_hours: '24 घंटे, सातों दिन खुला (365 Days)',
    footer_rights: '© 2026 Digital Karigar. सर्वाधिकार सुरक्षित (All rights reserved). Made with ❤️ for Indian Homes.',
    footer_privacy: 'गोपनीयता नीति (Privacy Policy)',
    footer_terms: 'नियम व शर्तें (Terms)',
    footer_partner: 'कारीगर के रूप में जुड़ें (Partner with Us)',

    // Mobile Bar
    mobile_bar_call: 'इमरजेंसी कॉल',
    mobile_bar_wa: 'व्हाट्सएप',
    mobile_bar_book: 'बुक करें'
  },

  en: {
    // Educational Demo Project Disclaimers
    demo_notice_top: '⚠️ DEMO PROJECT NOTICE: This website is created strictly for learning, portfolio, and educational demonstration purposes only. It is not an actual commercial business, and no real services or transactions are conducted.',
    demo_notice_footer: 'Disclaimer: Digital Karigar is a fictional prototype developed strictly for web development practice, portfolio, and educational purposes. All phone numbers, offers, reviews, and branding elements shown are illustrative and not legally binding.',

    // Header & Navigation
    emergency_badge: '24x7 Emergency Service',
    my_bookings_btn: 'My Bookings',
    nav_home: 'Home',
    nav_services: 'Services',
    nav_how_it_works: 'How It Works',
    nav_providers: 'Providers',
    nav_booking: 'Contact & Booking',
    nav_cta: 'Book a Karigar',
    select_lang: 'Select Language:',
    drawer_emergency_call: 'Emergency Call: +91 98765 43210',

    // New Two-Column Hero Section
    hero_doorstep_badge: 'Quick Doorstep Service',
    hero_doorstep_title: 'Home Service at Your Doorstep',
    hero_doorstep_sub: 'Doorstep Services Available — Verified and skilled technicians just a click away',
    doorstep_click_hint: 'Click any service to view verified experts',
    hero_showcase_title: 'Karigars in Action',
    hero_showcase_badge: '100% On-Field',
    hero_showcase_sub: 'Real on-field repairs with safety kits, modern tools & verified quality',

    // New 'Our Promises' Section
    promises_pill: 'Guaranteed Trust',
    promises_title: 'Our Promises',
    promises_sub: 'Our ironclad guarantee to deliver quality, safety, and honest pricing to every home',
    promise1_title: 'Transparent Pricing',
    promise1_desc: 'Upfront transparent pricing, clear estimates before work, and zero hidden charges.',
    promise2_title: 'Expert Only',
    promise2_desc: '100% Background & Skill Verified Karigars with 5+ years hands-on experience.',
    promise3_title: 'Fully Equipped',
    promise3_desc: 'Carrying state-of-the-art repair tools, diagnostic devices & genuine spare parts.',

    // New 'Our Special Offer' Section
    nav_offers: 'Special Offers',
    offers_pill: 'Limited Time Offer',
    offers_title: 'Our Special Offers',
    offers_sub: 'Guaranteed savings and milestone loyalty rewards on every Digital Karigar booking',
    offer1_badge: 'New User',
    offer1_tier: 'First Order',
    offer1_discount: '20% Off',
    offer1_desc: 'Enjoy a flat 20% discount on your very first doorstep service request.',
    offer2_badge: 'Loyalty Reward',
    offer2_tier: 'Fifth Order',
    offer2_discount: '50% Off',
    offer2_desc: 'Half price on your 5th booking! Special 50% discount for regular customers.',
    offer3_badge: 'Mega Milestone',
    offer3_tier: '10th Order',
    offer3_discount: '100% Free',
    offer3_desc: 'Visiting and standard service charge 100% free on your 10th milestone booking!',
    coupon_code_lbl: 'Code:',

    // New 'Customer Review' Section
    nav_reviews: 'Customer Reviews',
    reviews_pill: 'Customer Experience',
    reviews_title: 'Customer Reviews',
    reviews_sub: 'Trusted by thousands of satisfied families for dependable doorstep repairs',
    btn_many_more_reviews: 'Many More... (View All Reviews)',
    reviews_modal_title: 'All Verified Customer Reviews',
    reviews_modal_sub: 'Trusted across 10,000+ homes with verified 4.9★ service excellence',
    review_verified_badge: 'Verified Customer',
    review_service_availed: 'Service Availed:',

    // Search & Filter Controls
    search_placeholder: "Search by service or keyword (e.g. 'Plumber', 'Wiring', 'AC', 'Leakage')...",
    zone_all: 'All Zones / Areas',
    btn_search: 'Find Karigar',
    quick_filters_label: 'Quick Categories:',
    chip_all: 'All',
    chip_plumber: 'Plumber',
    chip_electrician: 'Electrician',
    chip_ac: 'AC Repair',
    chip_carpenter: 'Carpenter',
    chip_cleaning: 'Cleaning',
    chip_painter: 'Painter',

    // Directory Section
    dir_pill: 'Verified Experts',
    dir_title: 'Our Verified Karigars & Services',
    dir_desc: 'Connect directly with experts, make a quick call or start a WhatsApp chat instantly.',
    dir_showing: 'Showing:',
    dir_karigars_unit: 'Karigars',
    sort_recommended: 'Recommended',
    sort_rating: 'Highest Rated',
    sort_exp: 'Most Experienced',
    sort_price: 'Price: Low to High',
    empty_title: 'No Karigars Found',
    empty_desc: 'No verified experts currently match your keyword or selected zone. Please try a different search or select "All Zones".',
    btn_reset_filters: 'Reset All Filters',

    // How It Works
    how_pill: 'Simple & Transparent Process',
    how_title: 'How It Works',
    how_desc: 'Get any household repair solved at your doorstep in just 3 easy steps.',
    step1_tag: 'Step 01',
    step1_title: '1. Choose Service',
    step1_desc: 'Select your required service (Plumber, Electrician, Carpenter, AC Repair) and check verified profiles with transparent visiting charges.',
    step1_bullet1: 'Transparent minimum charges',
    step1_bullet2: 'Genuine customer ratings',
    step2_popular: 'Fastest',
    step2_tag: 'Step 02',
    step2_title: '2. Connect Directly',
    step2_desc: "Connect directly with the expert with zero commission via 'Call Now' or 'WhatsApp', or submit our quick online booking form.",
    step2_bullet1: 'Direct talk & quick response',
    step2_bullet2: 'Discuss problem & schedule directly',
    step3_tag: 'Step 03',
    step3_title: '3. Pay After Service',
    step3_desc: 'The expert arrives at your home, inspects and completes the job. Pay via UPI or Cash only when 100% satisfied.',
    step3_bullet1: 'Zero advance payment (₹0)',
    step3_bullet2: 'Work warranty & peace of mind',

    // Why Choose Us
    why_pill: 'Your Trusted Partner',
    why_title: 'Why Choose Digital Karigar?',
    why_desc: 'We empower skilled local craftsmen with a digital identity while giving homeowners safe, punctual, and affordable doorstep services.',
    feat1_title: '100% Background & Skill Verified Karigars',
    feat1_desc: 'Every karigar on our platform undergoes identity verification and skill evaluation.',
    feat2_title: 'No Hidden Charges (Fixed Visit Fee)',
    feat2_desc: 'Visiting charges are fixed upfront, with clear estimates before work begins.',
    feat3_title: '7-Day Re-service Satisfaction Guarantee',
    feat3_desc: 'If anything falls short, we resolve it within 7 days with zero additional visiting fee.',
    emergency_need_help: 'Need Immediate Help?',
    emergency_banner_title: 'Do you need urgent emergency repairs?',
    emergency_banner_desc: 'Burst pipe or sudden power outage? Our emergency specialists arrive within 30 minutes.',
    whatsapp_send_msg: 'Send WhatsApp Message',

    // Quick Booking Form
    booking_pill: 'Quick Callback Service',
    booking_headline: 'Book a Karigar or Request Callback',
    booking_sub: 'Submit your contact info and problem. The nearest verified expert will call you within 15 minutes.',
    perk1: 'Saved securely in your browser LocalStorage',
    perk2: 'Unique booking reference ID & instant confirmation',
    perk3: 'Zero advance payment required',
    helpline_box_title: 'Having trouble booking online?',
    helpline_box_desc: 'Call our customer helpline directly to book your verified expert:',
    form_title: 'Service Request Form',
    form_subtitle: 'Please fill in the required details (* mandatory fields)',
    selected_karigar_lbl: 'Selected Karigar:',
    label_name: 'Customer Name',
    label_phone: 'Phone Number',
    label_service: 'Selected Service',
    label_area: 'Your Area / Zone',
    label_date: 'Preferred Date',
    label_time: 'Preferred Time Slot',
    label_problem: 'Brief Problem Description',
    issue_suggestions: 'Suggestions:',
    btn_submit_booking: 'Confirm Booking (Get Callback)',
    submit_disclaimer: 'Your information is 100% safe. Zero advance payment.',
    error_name: 'Please enter your name.',
    error_phone: 'Please enter a valid 10-digit Indian mobile number.',
    error_service: 'Please select a service.',
    error_area: 'Please select your area/zone.',
    error_problem: 'Please describe your problem briefly.',
    opt_select_service: '-- Select a Service --',
    opt_select_area: '-- Select Area / Zone --',
    slot_asap: 'As Soon As Possible (Within 30 Mins)',
    slot_morning: 'Morning (09:00 AM - 12:00 PM)',
    slot_afternoon: 'Afternoon (12:00 PM - 04:00 PM)',
    slot_evening: 'Evening (04:00 PM - 08:00 PM)',

    // Confirmation Modal
    modal_success_title: 'Booking Confirmed Successfully!',
    modal_greeting: 'Namaste',
    modal_greeting_post: ', your service request has been received.',
    modal_ref_id: 'Booking Reference ID:',
    modal_service: 'Selected Service:',
    modal_area: 'Area (Zone):',
    modal_phone: 'Mobile Number:',
    modal_timeslot: 'Time Slot:',
    modal_status: 'Status:',
    modal_status_confirmed: 'Assigning nearest verified karigar',
    modal_help_note: 'Our nearest technician will call you within 15 minutes to confirm appointment and address.',
    modal_btn_whatsapp: '📱 Confirm Booking on WhatsApp (Send to WhatsApp)',
    modal_btn_view: 'View My Bookings',
    modal_btn_done: 'Done',

    // Drawer
    drawer_title: 'My Bookings History',
    drawer_storage_note: 'This data is safely stored in your browser LocalStorage.',
    drawer_empty: 'No bookings recorded yet.',
    drawer_book_first: 'Book Your First Service Now',
    drawer_clear_all: 'Clear All Bookings',

    // Footer
    footer_desc: 'Digital Karigar bridges the gap between skilled local craftsmen and Indian households, delivering trustworthy, punctual, and safe doorstep repairs.',
    footer_services_title: 'Popular Services',
    footer_zones_title: 'Coverage Zones',
    footer_helpline_title: '24/7 Helpline Support',
    footer_helpline_label: 'Immediate Support Line:',
    footer_helpline_hours: '24 Hours, 7 Days Open (365 Days)',
    footer_rights: '© 2026 Digital Karigar. All rights reserved. Made with ❤️ for Indian Homes.',
    footer_privacy: 'Privacy Policy',
    footer_terms: 'Terms of Service',
    footer_partner: 'Partner with Us',

    // Mobile Bar
    mobile_bar_call: 'Emergency Call',
    mobile_bar_wa: 'WhatsApp',
    mobile_bar_book: 'Book Now'
  }
};

/* --------------------------------------------------------------------------
   2. DATASET: LOCAL SERVICE EXPERTS (9 DIVERSE VERIFIED CARDS)
   -------------------------------------------------------------------------- */
const KARIGAR_DATA = [
  {
    id: 'dk-karigar-01',
    category: 'Plumber',
    categoryHindi: 'नल व प्लंबिंग',
    categoryIcon: 'fa-wrench',
    title: 'Master Plumber & Pipe Fitting Specialist',
    titleHindi: 'कुशल प्लंबर व वाटरप्रूफिंग विशेषज्ञ',
    expertName: 'Rajesh Kumar',
    expertNameHindi: 'राजेश कुमार',
    rating: 4.9,
    reviewsCount: 186,
    experienceHindi: '9+ वर्ष अनुभव',
    expYears: 9,
    visitingCharge: 199,
    area: 'Central Market',
    areaHindi: 'सेंट्रल मार्केट व आसपास',
    specialtiesHindi: ['नल लीकेज', 'पाइप फिटिंग', 'पानी की टंकी', 'सेंसर नल'],
    specialtiesEn: ['Tap Leakage', 'Pipe Fitting', 'Water Tank', 'Sensor Faucet'],
    phone: '+919876543210',
    whatsappNumber: '919876543210',
    avatar: 'https://images.unsplash.com/photo-1540569014015-19a7be504e3a?w=150&auto=format&fit=crop&q=80',
    availabilityHindi: 'उपलब्ध (Available Today)',
    availabilityEn: 'Available Today',
    isVerified: true
  },
  {
    id: 'dk-karigar-02',
    category: 'Electrician',
    categoryHindi: 'इलेक्ट्रीशियन',
    categoryIcon: 'fa-plug-circle-bolt',
    title: 'Certified Electrician & Fault Troubleshooter',
    titleHindi: 'प्रमाणित इलेक्ट्रीशियन व शॉर्ट-सर्किट एक्सपर्ट',
    expertName: 'Mukesh Sharma',
    expertNameHindi: 'मुकेश शर्मा',
    rating: 4.8,
    reviewsCount: 224,
    experienceHindi: '8+ वर्ष अनुभव',
    expYears: 8,
    visitingCharge: 149,
    area: 'North Zone',
    areaHindi: 'उत्तरी क्षेत्र (North Zone)',
    specialtiesHindi: ['शॉर्ट सर्किट', 'एमसीबी ट्रिप', 'फैन इंस्टॉलेशन', 'वायरिंग रिपेयर'],
    specialtiesEn: ['Short Circuit', 'MCB Trip', 'Fan Installation', 'Wiring Repair'],
    phone: '+919876543210',
    whatsappNumber: '919876543210',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    availabilityHindi: '30 मिनट में पहुंचें',
    availabilityEn: 'Arrives in 30 Mins',
    isVerified: true
  },
  {
    id: 'dk-karigar-03',
    category: 'AC Repair',
    categoryHindi: 'एसी रिपेयर व सर्विस',
    categoryIcon: 'fa-snowflake',
    title: 'HVAC & AC Senior Technician',
    titleHindi: 'वरिष्ठ एसी मैकेनिक व गैस चार्जिंग',
    expertName: 'Imran Ali',
    expertNameHindi: 'इमरान अली',
    rating: 4.9,
    reviewsCount: 312,
    experienceHindi: '11+ वर्ष अनुभव',
    expYears: 11,
    visitingCharge: 249,
    area: 'South Zone',
    areaHindi: 'दक्षिणी क्षेत्र (South Zone)',
    specialtiesHindi: ['कूलिंग समस्या', 'गैस लीकेज', 'जेट पंप सर्विस', 'स्प्लिट व विंडो एसी'],
    specialtiesEn: ['Cooling Issue', 'Gas Leakage', 'Jet Pump Service', 'Split & Window AC'],
    phone: '+919876543210',
    whatsappNumber: '919876543210',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    availabilityHindi: 'उपलब्ध (Available Today)',
    availabilityEn: 'Available Today',
    isVerified: true
  },
  {
    id: 'dk-karigar-04',
    category: 'Carpenter',
    categoryHindi: 'बढ़ई / कारपेंटर',
    categoryIcon: 'fa-hammer',
    title: 'Master Carpenter & Woodcraft Specialist',
    titleHindi: 'कुशल कारपेंटर व मॉड्यूलर फर्नीचर रिपेयर',
    expertName: 'Dilip Jangid',
    expertNameHindi: 'दिलीप जांगिड़',
    rating: 4.7,
    reviewsCount: 142,
    experienceHindi: '12+ वर्ष अनुभव',
    expYears: 12,
    visitingCharge: 199,
    area: 'East Zone',
    areaHindi: 'पूर्वी क्षेत्र (East Zone)',
    specialtiesHindi: ['दरवाजा/खिड़की अटकाव', 'लॉक व हैंडल रिपेयर', 'मॉड्यूलर किचन', 'वार्डरोब'],
    specialtiesEn: ['Door/Window Jam', 'Lock & Handle Repair', 'Modular Kitchen', 'Wardrobe'],
    phone: '+919876543210',
    whatsappNumber: '919876543210',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80',
    availabilityHindi: 'उपलब्ध (Available Today)',
    availabilityEn: 'Available Today',
    isVerified: true
  },
  {
    id: 'dk-karigar-05',
    category: 'Cleaning',
    categoryHindi: 'डीप क्लीनिंग',
    categoryIcon: 'fa-broom',
    title: 'Professional Home & Bathroom Deep Cleaning',
    titleHindi: 'घर व बाथरूम डीप क्लीनिंग विशेषज्ञ',
    expertName: 'Amit Verma & Team',
    expertNameHindi: 'अमित वर्मा व टीम',
    rating: 4.8,
    reviewsCount: 168,
    experienceHindi: '6+ वर्ष अनुभव',
    expYears: 6,
    visitingCharge: 299,
    area: 'West Zone',
    areaHindi: 'पश्चिमी क्षेत्र (West Zone)',
    specialtiesHindi: ['बाथरूम टाइल स्क्रबिंग', 'किचन चिमनी क्लीन', 'सोफा शैम्पू', 'फुल होम डीप क्लीन'],
    specialtiesEn: ['Bathroom Tile Scrubbing', 'Kitchen Chimney', 'Sofa Shampoo', 'Full Home Deep Clean'],
    phone: '+919876543210',
    whatsappNumber: '919876543210',
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80',
    availabilityHindi: 'उपलब्ध (Available Today)',
    availabilityEn: 'Available Today',
    isVerified: true
  },
  {
    id: 'dk-karigar-06',
    category: 'Painter',
    categoryHindi: 'पेंटर व पुट्टी',
    categoryIcon: 'fa-paint-roller',
    title: 'Wall Painter & Waterproofing Contractor',
    titleHindi: 'दीवार पेंटिंग, सीलन व वॉटरप्रूफिंग विशेषज्ञ',
    expertName: 'Sunil Rathore',
    expertNameHindi: 'सुनील राठौड़',
    rating: 4.7,
    reviewsCount: 119,
    experienceHindi: '10+ वर्ष अनुभव',
    expYears: 10,
    visitingCharge: 199,
    area: 'Civil Lines',
    areaHindi: 'सिविल लाइंस (Civil Lines)',
    specialtiesHindi: ['सीलन/डैम्प रिपेयर', 'वॉल पुट्टी', 'रॉयल लक्जरी पेंट', 'एक्सटीरियर पेंट'],
    specialtiesEn: ['Damp Repair', 'Wall Putty', 'Royale Luxury Paint', 'Exterior Paint'],
    phone: '+919876543210',
    whatsappNumber: '919876543210',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80',
    availabilityHindi: 'उपलब्ध (Available Today)',
    availabilityEn: 'Available Today',
    isVerified: true
  },
  {
    id: 'dk-karigar-07',
    category: 'Plumber',
    categoryHindi: 'नल व सैनिटरी',
    categoryIcon: 'fa-wrench',
    title: 'Emergency Drainage & Sanitary Plumber',
    titleHindi: 'इमरजेंसी नाली व सीवरेज ब्लॉकेज एक्सपर्ट',
    expertName: 'Vikram Yadav',
    expertNameHindi: 'विक्रम यादव',
    rating: 4.8,
    reviewsCount: 153,
    experienceHindi: '7+ वर्ष अनुभव',
    expYears: 7,
    visitingCharge: 199,
    area: 'North Zone',
    areaHindi: 'उत्तरी क्षेत्र (North Zone)',
    specialtiesHindi: ['ड्रेन अनक्लॉगिंग', 'गीजर पाइप फिटिंग', 'कमोड रिपेयर', 'वॉशबेसिन'],
    specialtiesEn: ['Drain Unclogging', 'Geyser Pipe Fitting', 'Commode Repair', 'Washbasin'],
    phone: '+919876543210',
    whatsappNumber: '919876543210',
    avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80',
    availabilityHindi: 'त्वरित रिस्पॉन्स',
    availabilityEn: 'Instant Response',
    isVerified: true
  },
  {
    id: 'dk-karigar-08',
    category: 'Electrician',
    categoryHindi: 'इलेक्ट्रीशियन व अप्लायंसेज',
    categoryIcon: 'fa-plug-circle-bolt',
    title: 'Heavy Appliance & Inverter Wiring Tech',
    titleHindi: 'इन्वर्टर, गीजर व हैवी लोड वायरिंग एक्सपर्ट',
    expertName: 'Sanjay Chauhan',
    expertNameHindi: 'संजय चौहान',
    rating: 4.9,
    reviewsCount: 240,
    experienceHindi: '14+ वर्ष अनुभव',
    expYears: 14,
    visitingCharge: 199,
    area: 'Central Market',
    areaHindi: 'सेंट्रल मार्केट व आसपास',
    specialtiesHindi: ['इन्वर्टर/बैटरी कनेक्शन', 'गीजर रिपेयर', 'चेंजओवर स्विच', 'अर्थिंग'],
    specialtiesEn: ['Inverter/Battery', 'Geyser Repair', 'Changeover Switch', 'Earthing'],
    phone: '+919876543210',
    whatsappNumber: '919876543210',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    availabilityHindi: 'उपलब्ध (Available Today)',
    availabilityEn: 'Available Today',
    isVerified: true
  },
  {
    id: 'dk-karigar-09',
    category: 'AC Repair',
    categoryHindi: 'एसी व रेफ्रिजरेटर',
    categoryIcon: 'fa-snowflake',
    title: 'Inverter AC & PCB Board Repair Pro',
    titleHindi: 'इन्वर्टर एसी पीसीबी व कॉपर पाइपिंग',
    expertName: 'Naveen Joshi',
    expertNameHindi: 'नवीन जोशी',
    rating: 4.8,
    reviewsCount: 177,
    experienceHindi: '9+ वर्ष अनुभव',
    expYears: 9,
    visitingCharge: 249,
    area: 'South Zone',
    areaHindi: 'दक्षिणी क्षेत्र (South Zone)',
    specialtiesHindi: ['पीसीबी रिपेयर', 'कंप्रेसर टेस्टिंग', 'कॉपर पाइपिंग', 'गैस रिफिल'],
    specialtiesEn: ['PCB Board Repair', 'Compressor Test', 'Copper Piping', 'Gas Refill'],
    phone: '+919876543210',
    whatsappNumber: '919876543210',
    avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&auto=format&fit=crop&q=80',
    availabilityHindi: 'उपलब्ध (Available Today)',
    availabilityEn: 'Available Today',
    isVerified: true
  }
];

/* --------------------------------------------------------------------------
   3. DOM ELEMENTS CACHE
   -------------------------------------------------------------------------- */

/* --------------------------------------------------------------------------
   2B. DATASET: VERIFIED CUSTOMER REVIEWS (12 AUTHENTIC REVIEWS)
   -------------------------------------------------------------------------- */
const CUSTOMER_REVIEWS = [
  {
    id: 'rev-01',
    name: 'Amitabh Saxena',
    nameHi: 'अमिताभ सक्सेना',
    rating: 5.0,
    service: 'AC Repair',
    serviceHi: 'एसी रिपेयर व सर्विस',
    area: 'Central Market',
    areaHi: 'सेंट्रल मार्केट',
    date: '2 days ago',
    dateHi: '2 दिन पहले',
    commentEn: 'Imran serviced our split AC and fixed the refrigerant leak within 40 minutes. Cooling feels brand new again. Highly recommended!',
    commentHi: 'इमरान जी ने हमारे स्प्लिट एसी की जेट सर्विस और गैस लीकेज 40 मिनट में ठीक कर दी। कूलिंग बिल्कुल नए जैसी हो गई है।'
  },
  {
    id: 'rev-02',
    name: 'Pooja Verma',
    nameHi: 'पूजा वर्मा',
    rating: 5.0,
    service: 'Plumber',
    serviceHi: 'नल व पाइप फिटिंग',
    area: 'North Zone',
    areaHi: 'उत्तरी क्षेत्र',
    date: '3 days ago',
    dateHi: '3 दिन पहले',
    commentEn: 'Had an annoying bathroom pipe leak. Rajesh fixed it cleanly using modern tools without any wall breakage. Very polite professional.',
    commentHi: 'बाथरूम में पानी का लीकेज कई दिनों से परेशान कर रहा था। राजेश जी ने आधुनिक टूल्स से बिना कोई तोड़-फोड़ किए तुरंत ठीक कर दिया।'
  },
  {
    id: 'rev-03',
    name: 'Vikram Malhotra',
    nameHi: 'विक्रम मल्होत्रा',
    rating: 5.0,
    service: 'Electrician',
    serviceHi: 'शॉर्ट-सर्किट व वायरिंग',
    area: 'South Zone',
    areaHi: 'दक्षिणी क्षेत्र',
    date: '4 days ago',
    dateHi: '4 दिन पहले',
    commentEn: 'MCB kept tripping late in the evening. Mukesh arrived in 25 mins and tracked down the short circuit. Lifesaver emergency service!',
    commentHi: 'रात में एमसीबी बार-बार ट्रिप हो रही थी। मुकेश जी 25 मिनट में पहुंचे और शॉर्ट-सर्किट ढूंढकर ठीक कर दिया। सुपर फास्ट सर्विस!'
  },
  {
    id: 'rev-04',
    name: 'Sangeeta Deshmukh',
    nameHi: 'संगीता देशमुख',
    rating: 4.9,
    service: 'Carpenter',
    serviceHi: 'बढ़ई व लकड़ी कार्य',
    area: 'Civil Lines',
    areaHi: 'सिविल लाइंस',
    date: '5 days ago',
    dateHi: '5 दिन पहले',
    commentEn: 'Our main door lock and wardrobe hinges were fixed neatly by Dinesh. Clean craftsmanship and completely transparent charges.',
    commentHi: 'हमारे मुख्य दरवाजे का लॉक और वार्डरोब के हिंज ढीले थे। दिनेश जी ने बहुत सफाई से फिटिंग की और उचित चार्ज लिया।'
  },
  {
    id: 'rev-05',
    name: 'Rohan Mehta',
    nameHi: 'रोहन मेहता',
    rating: 5.0,
    service: 'Cleaning',
    serviceHi: 'डीप होम क्लीनिंग',
    area: 'West End',
    areaHi: 'वेस्ट एंड',
    date: '1 week ago',
    dateHi: '1 सप्ताह पहले',
    commentEn: 'Booked deep cleaning for our 3BHK flat. The team used professional vacuum and sanitization equipment. Pristine results!',
    commentHi: 'पूरे 3BHK फ्लैट की डीप क्लीनिंग करवाई। टीम ने किचन और बाथरूम को आधुनिक मशीनों से एकदम चमकदार और कीटाणुरहित बना दिया।'
  },
  {
    id: 'rev-06',
    name: 'Anita Sharma',
    nameHi: 'अनिता शर्मा',
    rating: 4.9,
    service: 'Painter',
    serviceHi: 'वॉल पेंटिंग व टेक्सचर',
    area: 'Green Park',
    areaHi: 'ग्रीन पार्क',
    date: '1 week ago',
    dateHi: '1 सप्ताह पहले',
    commentEn: 'Got living room waterproofing and texture paint done. Exceptional wall finish with zero mess left on the floor.',
    commentHi: 'लिविंग रूम में वॉटरप्रूफिंग और रॉयल इमल्शन पेंट कराया। काम बहुत फिनिशिंग के साथ हुआ और फर्श पर एक भी दाग नहीं छूटा।'
  },
  {
    id: 'rev-07',
    name: 'Deepak Tiwari',
    nameHi: 'दीपक तिवारी',
    rating: 5.0,
    service: 'AC Repair',
    serviceHi: 'कमर्शियल एसी सर्विस',
    area: 'Central Market',
    areaHi: 'सेंट्रल मार्केट',
    date: '1 week ago',
    dateHi: '1 सप्ताह पहले',
    commentEn: 'Scheduled seasonal maintenance for 4 office ACs. Punctual, transparent billing, and got 20% off on my first booking!',
    commentHi: 'ऑफिस के 4 एसी का मेंटेनेंस कराया। समय पर आए, पारदर्शी बिल दिया और पहली बुकिंग पर 20% डिस्काउंट कूपन भी लागू हुआ!'
  },
  {
    id: 'rev-08',
    name: 'Kavita Joshi',
    nameHi: 'कविता जोशी',
    rating: 5.0,
    service: 'Plumber',
    serviceHi: 'सिंक ड्रेनेज ब्लॉकेज',
    area: 'North Zone',
    areaHi: 'उत्तरी क्षेत्र',
    date: '2 weeks ago',
    dateHi: '2 सप्ताह पहले',
    commentEn: 'Kitchen sink drain was clogged. The plumber arrived within 20 minutes and cleared the blockage effortlessly. Super clean work.',
    commentHi: 'किचन सिंक का ड्रेन जाम था। 20 मिनट के अंदर डिजिटल कारीगर के प्लंबर ने आकर पूरी पाइपलाइन साफ कर दी। बहुत साफ-सुथरा काम।'
  },
  {
    id: 'rev-09',
    name: 'Sunil Yadav',
    nameHi: 'सुनील यादव',
    rating: 4.9,
    service: 'Electrician',
    serviceHi: 'मॉड्यूलर फिटिंग व वायरिंग',
    area: 'South Zone',
    areaHi: 'दक्षिणी क्षेत्र',
    date: '2 weeks ago',
    dateHi: '2 सप्ताह पहले',
    commentEn: 'Installed heavy chandeliers, fans, and modular switch panels across our new apartment. Very skilled and polite technician.',
    commentHi: 'नए फ्लैट में झूमर, पंखे और मॉड्युलर स्विच बोर्ड की पूरी वायरिंग लगवाई। बहुत ही अनुभवी और विनम्र इलेक्ट्रीशियन मिले।'
  },
  {
    id: 'rev-10',
    name: 'Neha Gupta',
    nameHi: 'नेहा गुप्ता',
    rating: 5.0,
    service: 'Carpenter',
    serviceHi: 'सोफा रिपेयर व वुडवर्क',
    area: 'East Zone',
    areaHi: 'पूर्वी क्षेत्र',
    date: '3 weeks ago',
    dateHi: '3 सप्ताह पहले',
    commentEn: 'Custom sofa woodwork repair and cushioning done at home. Delivered superior quality at 30% lower than open market rates.',
    commentHi: 'सोफा रिपेयर और नए कुशन लगवाने थे। कारीगर ने घर आकर बहुत ही खूबसूरत काम किया। मार्केट से 30% सस्ता और टिकाऊ पड़ा।'
  },
  {
    id: 'rev-11',
    name: 'Harish Chandra',
    nameHi: 'हरीश चंद्र',
    rating: 5.0,
    service: 'Cleaning',
    serviceHi: 'वाटर टैंक क्लीनिंग',
    area: 'Old City',
    areaHi: 'पुरानी बस्ती',
    date: '3 weeks ago',
    dateHi: '3 सप्ताह पहले',
    commentEn: 'Booked underground and overhead water tank cleaning. Used high-pressure antibacterial jets. Completely satisfied.',
    commentHi: 'पानी की टंकी की सफाई करवाई। हाई-प्रेशर जेट और यूवी तकनीक से पूरा टैंक अंदर से एकदम नया जैसा साफ और सुरक्षित हो गया।'
  },
  {
    id: 'rev-12',
    name: 'Meenakshi Iyer',
    nameHi: 'मीनाक्षी अय्यर',
    rating: 5.0,
    service: 'Painter',
    serviceHi: 'फुल होम पेंटिंग',
    area: 'Central Market',
    areaHi: 'सेंट्रल मार्केट',
    date: '1 month ago',
    dateHi: '1 माह पहले',
    commentEn: 'Professional painting crew with genuine branded materials. From color consultation to final touch-up, strictly on schedule.',
    commentHi: 'डिजिटल कारीगर की पेंटिंग टीम बहुत पेशेवर है। कलर कंसल्टेशन से लेकर फाइनल कोट तक पूरा काम समय पर पूरा किया।'
  }
];

const DOM = {
  // Navigation & Header
  masterHeader: document.getElementById('masterHeader'),
  topUtilityStrip: document.getElementById('topUtilityStrip'),
  mainNavbar: document.getElementById('mainNavbar'),
  navMenu: document.getElementById('navMenu'),
  mobileMenuBtn: document.getElementById('mobileMenuBtn'),
  closeDrawerBtn: document.getElementById('closeDrawerBtn'),
  mobileDrawer: document.getElementById('mobileDrawer'),
  mobileOverlay: document.getElementById('mobileOverlay'),
  myBookingsBtn: document.getElementById('myBookingsBtn'),
  bookingCountBadge: document.getElementById('bookingCountBadge'),

  // Language Switchers
  langBtnHi: document.getElementById('langBtnHi'),
  langBtnEn: document.getElementById('langBtnEn'),
  allLangBtns: document.querySelectorAll('.lang-switch-btn'),

  // Hero Section Doorstep Services
  doorstepServiceCards: document.querySelectorAll('.doorstep-service-card'),

  // Filters & Search
  serviceSearchInput: document.getElementById('serviceSearchInput'),
  clearSearchBtn: document.getElementById('clearSearchBtn'),
  areaZoneSelect: document.getElementById('areaZoneSelect'),
  triggerSearchBtn: document.getElementById('triggerSearchBtn'),
  categoryChipsContainer: document.getElementById('categoryChipsContainer'),
  sortBySelect: document.getElementById('sortBySelect'),

  // Directory Grid
  servicesGridContainer: document.getElementById('servicesGridContainer'),
  currentShowingCount: document.getElementById('currentShowingCount'),
  emptyState: document.getElementById('emptyState'),
  resetFiltersBtn: document.getElementById('resetFiltersBtn'),

  // Booking Form
  quickBookingForm: document.getElementById('quickBookingForm'),
  submitBookingBtn: document.getElementById('submitBookingBtn'),
  bookingReferenceIdField: document.getElementById('bookingReferenceIdField'),
  selectedKarigarNameField: document.getElementById('selectedKarigarNameField'),
  customerName: document.getElementById('customerName'),
  customerPhone: document.getElementById('customerPhone'),
  bookingServiceSelect: document.getElementById('bookingServiceSelect'),
  bookingAreaSelect: document.getElementById('bookingAreaSelect'),
  bookingDate: document.getElementById('bookingDate'),
  bookingTimeSlot: document.getElementById('bookingTimeSlot'),
  problemDescription: document.getElementById('problemDescription'),
  selectedKarigarId: document.getElementById('selectedKarigarId'),
  preselectedKarigarAlert: document.getElementById('preselectedKarigarAlert'),
  preselectedName: document.getElementById('preselectedName'),
  preselectedMeta: document.getElementById('preselectedMeta'),
  clearSelectedKarigarBtn: document.getElementById('clearSelectedKarigarBtn'),
  issueTags: document.querySelectorAll('.issue-tag'),

  // Confirmation Modal
  confirmationModal: document.getElementById('confirmationModal'),
  whatsappConfirmBtn: document.getElementById('whatsappConfirmBtn'),
  modalCustomerName: document.getElementById('modalCustomerName'),
  modalBookingId: document.getElementById('modalBookingId'),
  modalService: document.getElementById('modalService'),
  modalArea: document.getElementById('modalArea'),
  modalPhone: document.getElementById('modalPhone'),
  modalTimeSlot: document.getElementById('modalTimeSlot'),
  closeConfirmationModalBtn: document.getElementById('closeConfirmationModalBtn'),
  viewBookingsFromModalBtn: document.getElementById('viewBookingsFromModalBtn'),

  // Bookings History Drawer
  bookingsDrawer: document.getElementById('bookingsDrawer'),
  bookingsDrawerOverlay: document.getElementById('bookingsDrawerOverlay'),
  closeBookingsDrawerBtn: document.getElementById('closeBookingsDrawerBtn'),
  bookingsListContainer: document.getElementById('bookingsListContainer'),
  drawerEmptyState: document.getElementById('drawerEmptyState'),
  drawerFooter: document.getElementById('drawerFooter'),
  clearAllBookingsBtn: document.getElementById('clearAllBookingsBtn'),
  bookNowFromDrawerBtn: document.getElementById('bookNowFromDrawerBtn'),

  // Customer Reviews Section & Modal
  customerReviewsGrid: document.getElementById('customerReviewsGrid'),
  openReviewsModalBtn: document.getElementById('openReviewsModalBtn'),
  reviewsModal: document.getElementById('reviewsModal'),
  modalReviewsGrid: document.getElementById('modalReviewsGrid'),
  closeReviewsModalBtn: document.getElementById('closeReviewsModalBtn'),
  bookFromReviewsModalBtn: document.getElementById('bookFromReviewsModalBtn'),

  // Toast
  toastNotification: document.getElementById('toastNotification'),
  toastMessage: document.getElementById('toastMessage')
};

/* --------------------------------------------------------------------------
   4. APP STATE
   -------------------------------------------------------------------------- */
const AppState = {
  currentLang: 'hi',
  activeCategory: 'all',
  searchQuery: '',
  selectedZone: 'all',
  sortBy: 'recommended',
  preselectedKarigar: null,
  toastTimeout: null
};

const LOCAL_STORAGE_KEY = 'digital_karigar_bookings_data_v1';
const LOCAL_STORAGE_LANG_KEY = 'digital_karigar_lang_pref';

/* --------------------------------------------------------------------------
   5. BILINGUAL LANGUAGE SWITCHING LOGIC
   -------------------------------------------------------------------------- */

function setLanguage(lang) {
  if (!I18N_TRANSLATIONS[lang]) return;
  AppState.currentLang = lang;

  // Persist choice to localStorage
  try {
    localStorage.setItem(LOCAL_STORAGE_LANG_KEY, lang);
  } catch (e) {
    console.warn('LocalStorage unavailable for language preference.');
  }

  // Update HTML lang attribute
  document.documentElement.lang = lang;

  // Update all elements with data-i18n attribute
  const dict = I18N_TRANSLATIONS[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });

  // Update input placeholders
  if (DOM.serviceSearchInput && dict.search_placeholder) {
    DOM.serviceSearchInput.placeholder = dict.search_placeholder;
  }

  // Update active state on language switcher buttons (desktop & mobile)
  DOM.allLangBtns.forEach(btn => {
    const isCurrent = btn.dataset.lang === lang;
    btn.classList.toggle('active', isCurrent);
  });

  // Re-render service cards to show translated titles/categories/charges
  renderServiceCards();

  // Re-render customer reviews in chosen language
  renderCustomerReviews();

  // Update dynamic WhatsApp links for current language
  updateGlobalWhatsAppLinks(AppState.activeCategory);

  // Show small notification toast
  showToast(lang === 'hi' ? 'भाषा बदलकर हिन्दी कर दी गई है।' : 'Language switched to English.');
}

// Bind language switcher buttons
DOM.allLangBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const chosenLang = btn.dataset.lang;
    if (chosenLang && chosenLang !== AppState.currentLang) {
      setLanguage(chosenLang);
    }
  });
});

/* --------------------------------------------------------------------------
   6. NAVIGATION ACTIVE STATE & SMOOTH SCROLLING
   -------------------------------------------------------------------------- */

function setActiveNavLink(navId) {
  document.querySelectorAll('#navMenu .nav-link').forEach(link => {
    const isTarget = link.dataset.nav === navId;
    link.classList.toggle('active', isTarget);
  });

  document.querySelectorAll('#mobileNavList .mobile-nav-link').forEach(link => {
    const isTarget = link.dataset.nav === navId;
    link.classList.toggle('active', isTarget);
  });
}

function setupNavLinks() {
  const allNavLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

  allNavLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      const targetHref = link.getAttribute('href');

      if (targetHref && targetHref.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(targetHref);

        if (targetElement) {
          const navId = link.dataset.nav;
          if (navId) {
            setActiveNavLink(navId);
          }

          toggleMobileMenu(false);

          const navbarHeight = DOM.mainNavbar ? DOM.mainNavbar.offsetHeight : 0;
          const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight - 10;

          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    });
  });
}

function setupScrollspy() {
  const sections = [
    { id: 'home', navId: 'home' },
    { id: 'servicesSection', navId: 'services' },
    { id: 'howItWorks', navId: 'how-it-works' },
    { id: 'specialOffers', navId: 'offers' },
    { id: 'customerReviewsSection', navId: 'reviews' },
    { id: 'bookingSection', navId: 'booking' }
  ];

  let scrollTicking = false;
  window.addEventListener('scroll', () => {
    if (!scrollTicking) {
      window.requestAnimationFrame(() => {
        const scrollPos = window.scrollY + 120;

        for (let i = sections.length - 1; i >= 0; i--) {
          const secEl = document.getElementById(sections[i].id);
          if (secEl) {
            const top = secEl.offsetTop;
            if (scrollPos >= top) {
              setActiveNavLink(sections[i].navId);
              break;
            }
          }
        }

        if (DOM.mainNavbar) {
          if (window.scrollY > 60) {
            DOM.mainNavbar.classList.add('scrolled');
          } else {
            DOM.mainNavbar.classList.remove('scrolled');
          }
        }
        scrollTicking = false;
      });
      scrollTicking = true;
    }
  }, { passive: true });
}

/* --------------------------------------------------------------------------
   7. DOORSTEP SERVICES CARDS INTERACTION (HERO LEFT BOX)
   -------------------------------------------------------------------------- */
function setupDoorstepCards() {
  const cards = document.querySelectorAll('.doorstep-service-card');
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const category = card.dataset.category;
      if (!category) return;

      // Update state
      AppState.activeCategory = category;
      updateGlobalWhatsAppLinks(category);

      // Update Quick Category Chips
      if (DOM.categoryChipsContainer) {
        DOM.categoryChipsContainer.querySelectorAll('.chip').forEach(c => {
          const isMatch = c.dataset.category === category;
          c.classList.toggle('active', isMatch);
          c.setAttribute('aria-checked', isMatch ? 'true' : 'false');
        });
      }

      // Re-render cards
      renderServiceCards();

      // Scroll to services directory section smoothly
      const directorySection = document.getElementById('servicesSection');
      if (directorySection) {
        const navHeight = DOM.mainNavbar ? DOM.mainNavbar.offsetHeight : 0;
        const targetPos = directorySection.getBoundingClientRect().top + window.pageYOffset - navHeight - 10;
        window.scrollTo({
          top: targetPos,
          behavior: 'smooth'
        });
      }

      showToast(AppState.currentLang === 'hi' 
        ? `${category} सेवा के सत्यापित कारीगर दिखाए जा रहे हैं` 
        : `Showing verified ${category} specialists`);
    });
  });
}

/* --------------------------------------------------------------------------
   8. HELPER FUNCTIONS
   -------------------------------------------------------------------------- */

function showToast(message, duration = 3200) {
  if (AppState.toastTimeout) {
    clearTimeout(AppState.toastTimeout);
  }
  DOM.toastMessage.textContent = message;
  DOM.toastNotification.classList.add('show');

  AppState.toastTimeout = setTimeout(() => {
    DOM.toastNotification.classList.remove('show');
  }, duration);
}

function getFormattedToday() {
  const today = new Date();
  const yyyy = today.getFullYear();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  return `${yyyy}-${mm}-${dd}`;
}

function getSavedBookings() {
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (err) {
    console.error('Error reading localStorage:', err);
    return [];
  }
}

function saveBookingsToStorage(bookings) {
  try {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(bookings));
    updateBookingCountBadge();
  } catch (err) {
    console.error('Error writing to localStorage:', err);
  }
}

function updateBookingCountBadge() {
  const list = getSavedBookings();
  const count = list.length;
  if (DOM.bookingCountBadge) {
    DOM.bookingCountBadge.textContent = count;
  }
}

/* --------------------------------------------------------------------------
   9. SERVICE DIRECTORY RENDERING & FILTERING
   -------------------------------------------------------------------------- */

function updateGlobalWhatsAppLinks(serviceName) {
  const isEn = AppState.currentLang === 'en';
  let cleanSvc = (serviceName && serviceName !== 'all') ? serviceName : '';
  if (cleanSvc.includes('(')) {
    cleanSvc = cleanSvc.split('(')[0].trim();
  }
  
  let message;
  if (cleanSvc) {
    message = isEn 
      ? `Namaste Digital Karigar! I would like to book ${cleanSvc} service at my doorstep.` 
      : `Namaste Digital Karigar! Mujhe ${cleanSvc} service book karni hai.`;
  } else {
    message = isEn 
      ? `Namaste Digital Karigar! I would like to inquire about your doorstep services.` 
      : `Namaste Digital Karigar! Mujhe doorstep service inquiry karni hai.`;
  }

  const encodedUrl = `https://wa.me/919876543210?text=${encodeURIComponent(message)}`;

  // 1. Mobile floating bar WhatsApp action
  const mobileWaBtn = document.querySelector('.floating-mobile-bar .whatsapp-action');
  if (mobileWaBtn) {
    mobileWaBtn.href = encodedUrl;
  }

  // 2. Emergency banner WhatsApp button
  const emergencyWaBtn = document.querySelector('.btn-whatsapp-large');
  if (emergencyWaBtn) {
    const emergencyMsg = cleanSvc 
      ? (isEn ? `Namaste Digital Karigar! I need urgent emergency ${cleanSvc} service right now.` : `Namaste Digital Karigar! Mujhe urgent emergency ${cleanSvc} service chahiye.`)
      : (isEn ? `Namaste Digital Karigar! I need urgent emergency service right now.` : `Namaste Digital Karigar! Mujhe urgent emergency service chahiye.`);
    emergencyWaBtn.href = `https://wa.me/919876543210?text=${encodeURIComponent(emergencyMsg)}`;
  }

  // 3. Footer WhatsApp social icon link
  const footerWaBtn = document.querySelector('.footer-social a[aria-label="WhatsApp"]');
  if (footerWaBtn) {
    footerWaBtn.href = encodedUrl;
  }
}

function generateWhatsAppLink(karigar) {
  const isEn = AppState.currentLang === 'en';
  const expertName = isEn ? karigar.expertName : (karigar.expertNameHindi || karigar.expertName);
  const svc = karigar.category;
  const message = isEn
    ? `Namaste Digital Karigar! I would like to book ${svc} service with ${expertName} (${karigar.area}). Please confirm availability.`
    : `Namaste Digital Karigar! Mujhe ${expertName} ji se ${svc} service book karni hai (${karigar.area}). Kripya availability batayein.`;
  
  return `https://wa.me/${karigar.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function renderServiceCards() {
  const isEn = AppState.currentLang === 'en';

  // Filter logic
  let filtered = KARIGAR_DATA.filter(item => {
    // 1. Category Filter
    if (AppState.activeCategory !== 'all' && item.category !== AppState.activeCategory) {
      return false;
    }

    // 2. Zone Filter
    if (AppState.selectedZone !== 'all' && item.area !== AppState.selectedZone) {
      return false;
    }

    // 3. Search Query Filter (Bilingual Matching)
    if (AppState.searchQuery.trim() !== '') {
      const q = AppState.searchQuery.toLowerCase().trim();
      const matchTitle = item.title.toLowerCase().includes(q) || item.titleHindi.toLowerCase().includes(q);
      const matchName = item.expertName.toLowerCase().includes(q) || (item.expertNameHindi && item.expertNameHindi.includes(q));
      const matchCat = item.category.toLowerCase().includes(q) || item.categoryHindi.toLowerCase().includes(q);
      const matchArea = item.area.toLowerCase().includes(q) || item.areaHindi.toLowerCase().includes(q);
      const matchSpecs = (item.specialtiesEn || []).some(s => s.toLowerCase().includes(q)) || 
                         (item.specialtiesHindi || []).some(s => s.includes(q));

      // Hindi common synonyms mapping
      let matchSynonyms = false;
      if ((q.includes('नल') || q.includes('पाइप') || q.includes('पानी')) && item.category === 'Plumber') matchSynonyms = true;
      if ((q.includes('बिजली') || q.includes('तार') || q.includes('स्विच') || q.includes('पंखा') || q.includes('बत्ती')) && item.category === 'Electrician') matchSynonyms = true;
      if ((q.includes('एसी') || q.includes('कूलिंग') || q.includes('ठंडा')) && item.category === 'AC Repair') matchSynonyms = true;
      if ((q.includes('बढ़ई') || q.includes('लकड़ी') || q.includes('दरवाजा') || q.includes('ताला')) && item.category === 'Carpenter') matchSynonyms = true;
      if ((q.includes('सफाई') || q.includes('झाड़ू') || q.includes('धुलाई') || q.includes('क्लीन')) && item.category === 'Cleaning') matchSynonyms = true;
      if ((q.includes('रंग') || q.includes('पुताई') || q.includes('पेंट')) && item.category === 'Painter') matchSynonyms = true;

      if (!matchTitle && !matchName && !matchCat && !matchArea && !matchSpecs && !matchSynonyms) {
        return false;
      }
    }

    return true;
  });

  // Sort logic
  if (AppState.sortBy === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  } else if (AppState.sortBy === 'experience') {
    filtered.sort((a, b) => b.expYears - a.expYears);
  } else if (AppState.sortBy === 'price-low') {
    filtered.sort((a, b) => a.visitingCharge - b.visitingCharge);
  }

  // Update counter
  DOM.currentShowingCount.textContent = filtered.length;

  // Check empty state
  if (filtered.length === 0) {
    DOM.servicesGridContainer.innerHTML = '';
    DOM.emptyState.style.display = 'block';
    return;
  }

  DOM.emptyState.style.display = 'none';

  // Render cards HTML
  const cardsHtml = filtered.map(item => {
    const cardTitle = isEn ? item.title : item.titleHindi;
    const expertName = isEn ? item.expertName : (item.expertNameHindi ? `${item.expertNameHindi} (${item.expertName})` : item.expertName);
    const categoryName = isEn ? item.category : item.categoryHindi;
    const availability = isEn ? item.availabilityEn : item.availabilityHindi;
    const experienceText = isEn ? `${item.expYears}+ Yrs Exp` : item.experienceHindi;
    const reviewsText = isEn ? `(${item.reviewsCount}+ reviews)` : `(${item.reviewsCount}+ समीक्षाएं)`;
    const visitingLabel = isEn ? 'Min. Visiting Fee:' : 'न्यूनतम विजिटिंग शुल्क:';
    const visitingDesc = isEn ? '(Visit + Inspection)' : '(विजिट + इंस्पेक्शन)';
    const callNowBtn = isEn ? 'Call Now' : 'कॉल करें';
    const bookThisBtn = isEn ? 'Book This Expert' : 'इस कारीगर को बुक करें';
    const specialtiesList = isEn ? (item.specialtiesEn || item.specialtiesHindi) : (item.specialtiesHindi || item.specialtiesEn);

    const specialtiesHtml = specialtiesList
      .map(spec => `<span class="specialty-pill">${spec}</span>`)
      .join('');

    const waLink = generateWhatsAppLink(item);

    return `
      <article class="service-card" data-id="${item.id}" data-category="${item.category}">
        <!-- Card Top Strip -->
        <div class="card-top-strip">
          <span class="category-badge">
            <i class="fa-solid ${item.categoryIcon}"></i> ${categoryName}
          </span>
          <span class="availability-tag">
            <span class="status-dot-pulse"></span>
            ${availability}
          </span>
        </div>

        <!-- Provider Info Header -->
        <div class="card-header-body">
          <div class="provider-avatar-wrap">
            <img src="${item.avatar}" alt="${item.expertName}" class="provider-avatar-img" width="60" height="60" loading="lazy" decoding="async" onerror="this.src='https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80'">
            <span class="verified-icon-badge" title="100% Verified Profile">
              <i class="fa-solid fa-circle-check"></i>
            </span>
          </div>

          <div class="provider-meta">
            <h3 class="service-title">${cardTitle}</h3>
            <span class="provider-name">
              <i class="fa-solid fa-user-tie"></i> ${expertName}
            </span>
          </div>
        </div>

        <!-- Rating & Experience Badges -->
        <div class="card-badges-row">
          <div class="rating-badge" title="${item.rating} out of 5 stars">
            <i class="fa-solid fa-star"></i>
            <span>${item.rating}</span>
            <span class="reviews-count">${reviewsText}</span>
          </div>

          <div class="exp-badge">
            <i class="fa-solid fa-briefcase"></i>
            <span>${experienceText}</span>
          </div>
        </div>

        <!-- Pricing & Zone Information -->
        <div class="card-details-box">
          <div class="details-row">
            <span class="visiting-fee-label">${visitingLabel}</span>
            <span class="visiting-fee-val">₹${item.visitingCharge}</span>
          </div>
          <div class="details-row">
            <span class="location-tag">
              <i class="fa-solid fa-location-dot"></i> ${item.area}
            </span>
            <span style="font-size:0.75rem; color:#64748b;">${visitingDesc}</span>
          </div>
        </div>

        <!-- Specialties list -->
        <div class="card-specialties">
          ${specialtiesHtml}
        </div>

        <!-- Action Buttons: Call Now & WhatsApp & Quick Book -->
        <div class="card-actions-wrapper">
          <!-- 1. Call Now Button -->
          <a href="tel:${item.phone}" class="btn btn-card-call" aria-label="Call ${item.expertName}">
            <i class="fa-solid fa-phone"></i>
            <span>${callNowBtn}</span>
          </a>

          <!-- 2. WhatsApp Button with prefilled inquiry message -->
          <a href="${waLink}" target="_blank" rel="noopener noreferrer" class="btn btn-card-whatsapp" aria-label="WhatsApp inquiry with ${item.expertName}">
            <i class="fa-brands fa-whatsapp"></i>
            <span>WhatsApp</span>
          </a>

          <!-- 3. Quick Booking Selection -->
          <button type="button" class="btn btn-card-quickbook" onclick="window.selectKarigarForBooking('${item.id}')">
            <i class="fa-solid fa-calendar-check"></i> ${bookThisBtn}
          </button>
        </div>
      </article>
    `;
  }).join('');

  DOM.servicesGridContainer.innerHTML = cardsHtml;
}

/* --------------------------------------------------------------------------
   10. SEARCH & FILTER EVENT LISTENERS
   -------------------------------------------------------------------------- */

if (DOM.categoryChipsContainer) {
  DOM.categoryChipsContainer.addEventListener('click', (e) => {
    const chip = e.target.closest('.chip');
    if (!chip) return;

    DOM.categoryChipsContainer.querySelectorAll('.chip').forEach(c => {
      c.classList.remove('active');
      c.setAttribute('aria-checked', 'false');
    });

    chip.classList.add('active');
    chip.setAttribute('aria-checked', 'true');

    AppState.activeCategory = chip.dataset.category || 'all';
    updateGlobalWhatsAppLinks(AppState.activeCategory);
    renderServiceCards();
  });
}

if (DOM.serviceSearchInput) {
  DOM.serviceSearchInput.addEventListener('input', (e) => {
    AppState.searchQuery = e.target.value;
    if (AppState.searchQuery.length > 0) {
      DOM.clearSearchBtn.classList.add('visible');
    } else {
      DOM.clearSearchBtn.classList.remove('visible');
    }
    renderServiceCards();
  });

  DOM.clearSearchBtn.addEventListener('click', () => {
    DOM.serviceSearchInput.value = '';
    AppState.searchQuery = '';
    DOM.clearSearchBtn.classList.remove('visible');
    DOM.serviceSearchInput.focus();
    renderServiceCards();
  });
}

if (DOM.areaZoneSelect) {
  DOM.areaZoneSelect.addEventListener('change', (e) => {
    AppState.selectedZone = e.target.value;
    renderServiceCards();
  });
}

if (DOM.triggerSearchBtn) {
  DOM.triggerSearchBtn.addEventListener('click', () => {
    renderServiceCards();
    const directorySection = document.getElementById('servicesSection');
    if (directorySection) {
      directorySection.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

if (DOM.sortBySelect) {
  DOM.sortBySelect.addEventListener('change', (e) => {
    AppState.sortBy = e.target.value;
    renderServiceCards();
  });
}

if (DOM.resetFiltersBtn) {
  DOM.resetFiltersBtn.addEventListener('click', () => {
    AppState.activeCategory = 'all';
    AppState.searchQuery = '';
    AppState.selectedZone = 'all';
    AppState.sortBy = 'recommended';

    DOM.serviceSearchInput.value = '';
    DOM.clearSearchBtn.classList.remove('visible');
    DOM.areaZoneSelect.value = 'all';
    DOM.sortBySelect.value = 'recommended';

    DOM.categoryChipsContainer.querySelectorAll('.chip').forEach(c => {
      const isAll = c.dataset.category === 'all';
      c.classList.toggle('active', isAll);
      c.setAttribute('aria-checked', isAll ? 'true' : 'false');
    });

    renderServiceCards();
    showToast(AppState.currentLang === 'hi' ? 'सभी फ़िल्टर रीसेट कर दिए गए हैं।' : 'All filters have been reset.');
  });
}

// Footer Quick Filter links
document.querySelectorAll('.footer-links a[data-category]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const cat = link.getAttribute('data-category');
    if (cat) {
      const targetChip = DOM.categoryChipsContainer.querySelector(`.chip[data-category="${cat}"]`);
      if (targetChip) {
        targetChip.click();
      }
      document.getElementById('servicesSection').scrollIntoView({ behavior: 'smooth' });
    }
  });
});

document.querySelectorAll('.footer-links a[data-zone]').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const zone = link.getAttribute('data-zone');
    if (zone && DOM.areaZoneSelect) {
      DOM.areaZoneSelect.value = zone;
      AppState.selectedZone = zone;
      renderServiceCards();
      document.getElementById('servicesSection').scrollIntoView({ behavior: 'smooth' });
    }
  });
});

/* --------------------------------------------------------------------------
   11. QUICK BOOKING / PRESELECTION FUNCTIONALITY
   -------------------------------------------------------------------------- */

window.selectKarigarForBooking = function (karigarId) {
  const karigar = KARIGAR_DATA.find(k => k.id === karigarId);
  if (!karigar) return;

  AppState.preselectedKarigar = karigar;
  updateGlobalWhatsAppLinks(karigar.category);

  const isEn = AppState.currentLang === 'en';
  const expertName = isEn ? karigar.expertName : (karigar.expertNameHindi || karigar.expertName);
  const cardTitle = isEn ? karigar.title : karigar.titleHindi;

  DOM.selectedKarigarId.value = karigar.id;
  DOM.preselectedName.textContent = `${expertName} (${cardTitle})`;
  DOM.preselectedMeta.textContent = isEn 
    ? `Category: ${karigar.category} | Zone: ${karigar.area} | Visit Charge: ₹${karigar.visitingCharge}`
    : `श्रेणी: ${karigar.category} | क्षेत्र: ${karigar.area} | विजिटिंग शुल्क: ₹${karigar.visitingCharge}`;
  DOM.preselectedKarigarAlert.style.display = 'flex';

  const categoryMatchMap = {
    'Plumber': 'Plumber (नल व पाइप)',
    'Electrician': 'Electrician (इलेक्ट्रीशियन)',
    'AC Repair': 'AC Repair (एसी रिपेयर)',
    'Carpenter': 'Carpenter (बढ़ई/कारपेंटर)',
    'Cleaning': 'Cleaning (सफाई)',
    'Painter': 'Painter (पेंटर)'
  };

  if (categoryMatchMap[karigar.category]) {
    DOM.bookingServiceSelect.value = categoryMatchMap[karigar.category];
  }

  DOM.bookingAreaSelect.value = karigar.area;

  const bookingSec = document.getElementById('bookingSection');
  if (bookingSec) {
    bookingSec.scrollIntoView({ behavior: 'smooth' });
    DOM.customerName.focus();
  }

  showToast(isEn ? `Selected ${expertName}. Please complete booking form.` : `कारीगर ${expertName} को चुना गया। कृपया फॉर्म भरें।`);
};

if (DOM.clearSelectedKarigarBtn) {
  DOM.clearSelectedKarigarBtn.addEventListener('click', () => {
    AppState.preselectedKarigar = null;
    DOM.selectedKarigarId.value = '';
    DOM.preselectedKarigarAlert.style.display = 'none';
    showToast(AppState.currentLang === 'hi' ? 'कारीगर का चयन हटा दिया गया।' : 'Karigar selection cleared.');
  });
}

if (DOM.issueTags) {
  DOM.issueTags.forEach(tag => {
    tag.addEventListener('click', () => {
      const text = tag.getAttribute('data-text');
      if (DOM.problemDescription.value.trim() === '') {
        DOM.problemDescription.value = text;
      } else {
        DOM.problemDescription.value += `, ${text}`;
      }
      DOM.problemDescription.focus();
    });
  });
}

/* --------------------------------------------------------------------------
   12. FORM VALIDATION & LOCALSTORAGE BOOKING
   -------------------------------------------------------------------------- */

function generateBookingReferenceId() {
  const randomNum = Math.floor(1000 + Math.random() * 9000);
  const year = new Date().getFullYear();
  return `DK-${year}-${randomNum}`;
}

function validateBookingForm() {
  let isValid = true;

  const nameVal = DOM.customerName.value.trim();
  const nameGroup = DOM.customerName.closest('.form-group');
  if (nameVal.length < 2) {
    nameGroup.classList.add('has-error');
    isValid = false;
  } else {
    nameGroup.classList.remove('has-error');
  }

  // Strict 10-digit Indian Mobile Validation: starts with 6-9, exactly 10 digits
  const rawPhone = DOM.customerPhone.value.trim().replace(/\D/g, '');
  const phoneGroup = DOM.customerPhone.closest('.form-group');
  const indianPhoneRegex = /^[6-9]\d{9}$/;
  if (!indianPhoneRegex.test(rawPhone) || rawPhone.length !== 10) {
    phoneGroup.classList.add('has-error');
    isValid = false;
  } else {
    phoneGroup.classList.remove('has-error');
  }

  const serviceVal = DOM.bookingServiceSelect.value;
  const serviceGroup = DOM.bookingServiceSelect.closest('.form-group');
  if (!serviceVal) {
    serviceGroup.classList.add('has-error');
    isValid = false;
  } else {
    serviceGroup.classList.remove('has-error');
  }

  const areaVal = DOM.bookingAreaSelect.value;
  const areaGroup = DOM.bookingAreaSelect.closest('.form-group');
  if (!areaVal) {
    areaGroup.classList.add('has-error');
    isValid = false;
  } else {
    areaGroup.classList.remove('has-error');
  }

  // Minimum Date Validation (Disallow Past Dates)
  const dateVal = DOM.bookingDate ? DOM.bookingDate.value : '';
  const todayStr = getFormattedToday();
  const dateGroup = DOM.bookingDate ? DOM.bookingDate.closest('.form-group') : null;
  if (!dateVal || dateVal < todayStr) {
    if (dateGroup) dateGroup.classList.add('has-error');
    isValid = false;
  } else if (dateGroup) {
    dateGroup.classList.remove('has-error');
  }

  const problemVal = DOM.problemDescription.value.trim();
  const problemGroup = DOM.problemDescription.closest('.form-group');
  if (problemVal.length < 5) {
    problemGroup.classList.add('has-error');
    isValid = false;
  } else {
    problemGroup.classList.remove('has-error');
  }

  return isValid;
}

if (DOM.quickBookingForm) {
  DOM.quickBookingForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (!validateBookingForm()) {
      showToast(AppState.currentLang === 'hi' ? 'कृपया सभी अनिवार्य फ़ील्ड सही तरीके से भरें।' : 'Please fill all mandatory fields properly.');
      return;
    }

    const bookingId = generateBookingReferenceId();
    const customerName = DOM.customerName.value.trim();
    const phone = DOM.customerPhone.value.trim();
    const service = DOM.bookingServiceSelect.value;
    const area = DOM.bookingAreaSelect.value;
    const date = DOM.bookingDate.value || getFormattedToday();
    const timeSlot = DOM.bookingTimeSlot.value;
    const description = DOM.problemDescription.value.trim();
    const assignedKarigar = AppState.preselectedKarigar 
      ? (AppState.currentLang === 'en' ? AppState.preselectedKarigar.expertName : (AppState.preselectedKarigar.expertNameHindi || AppState.preselectedKarigar.expertName))
      : (AppState.currentLang === 'en' ? 'Nearest Verified Expert (Auto Assigning)' : 'निकटतम प्रमाणित कारीगर (Auto Assigning)');

    // Populate hidden fields for email delivery
    if (DOM.bookingReferenceIdField) {
      DOM.bookingReferenceIdField.value = bookingId;
    }
    if (DOM.selectedKarigarNameField) {
      DOM.selectedKarigarNameField.value = assignedKarigar;
    }

    // Set temporary submitting state on button
    if (DOM.submitBookingBtn) {
      DOM.submitBookingBtn.disabled = true;
      DOM.submitBookingBtn.innerHTML = `
        <i class="fa-solid fa-spinner fa-spin"></i>
        <span>${AppState.currentLang === 'hi' ? 'कृपया प्रतीक्षा करें...' : 'Submitting...'}</span>
      `;
    }

    try {
      const formData = new FormData(DOM.quickBookingForm);
      const object = Object.fromEntries(formData);
      const web3FormsJson = JSON.stringify(object);

      // Web3Forms Dispatch (Email Alert)
      const web3FormsPromise = fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: web3FormsJson
      }).then(async (res) => {
        const data = await res.json().catch(() => ({}));
        if (!res.ok || data.success === false) {
          throw new Error(data.message || 'Web3Forms API rejected the submission.');
        }
        return data;
      });

      // Google Sheet Webhook Dispatch
      const googleSheetPayload = {
        customerName: customerName,
        customerPhone: phone,
        bookingService: service,
        bookingArea: area,
        bookingDate: date,
        bookingTimeSlot: timeSlot,
        problemDescription: description
      };

      const googleSheetPromise = fetch('https://script.google.com/macros/s/AKfycbwQdAK6zaGsoLsK00W6Sd5Rjdw9lTgFPFSyUsVNDQh_OqiDVMiQ2exCOFc1PMQAfSL3/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8'
        },
        body: JSON.stringify(googleSheetPayload)
      }).then(async (res) => {
        return res;
      });

      // Dual Dispatch: Execute simultaneously using Promise.allSettled
      const [web3Result, sheetResult] = await Promise.allSettled([
        web3FormsPromise,
        googleSheetPromise
      ]);

      const isSuccess = web3Result.status === 'fulfilled' || sheetResult.status === 'fulfilled';

      if (isSuccess) {
        if (web3Result.status === 'rejected') {
          console.warn('Web3Forms email dispatch notice:', web3Result.reason);
        }
        if (sheetResult.status === 'rejected') {
          console.warn('Google Sheet webhook notice:', sheetResult.reason);
        }

        // Construct booking record for localStorage
        const newBooking = {
          bookingId,
          customerName,
          phone,
          service,
          area,
          date,
          timeSlot,
          description,
          assignedKarigar,
          status: AppState.currentLang === 'en' ? 'Confirmed' : 'सत्यापित (Confirmed)',
          createdAt: new Date().toLocaleString(AppState.currentLang === 'hi' ? 'hi-IN' : 'en-IN')
        };

        const existingBookings = getSavedBookings();
        existingBookings.unshift(newBooking);
        saveBookingsToStorage(existingBookings);

        // Update confirmation modal
        DOM.modalCustomerName.textContent = customerName;
        DOM.modalBookingId.textContent = bookingId;
        DOM.modalService.textContent = service;
        DOM.modalArea.textContent = area;
        DOM.modalPhone.textContent = `+91 ${phone}`;
        DOM.modalTimeSlot.textContent = `${date} (${timeSlot})`;

        // Format dynamic WhatsApp confirmation URL
        const targetWhatsAppNumber = '918817716728';
        const formattedDateTime = `${date} (${timeSlot})`;
        const whatsappMsg = `नमस्ते Digital Karigar! मुझे एक सर्विस बुक करनी है:\n` +
          `👤 नाम: ${customerName}\n` +
          `📞 फ़ोन: ${phone}\n` +
          `🛠️ सर्विस: ${service}\n` +
          `📍 क्षेत्र: ${area}\n` +
          `📅 तारीख व समय: ${formattedDateTime}\n` +
          `📝 समस्या: ${description}\n` +
          `कृपया बुकिंग की पुष्टि करें।`;

        const encodedMessage = encodeURIComponent(whatsappMsg);
        if (DOM.whatsappConfirmBtn) {
          DOM.whatsappConfirmBtn.href = `https://wa.me/${targetWhatsAppNumber}?text=${encodedMessage}`;
        }

        // Show confirmation popup modal
        openConfirmationModal();

        // Clear form inputs & preselection
        DOM.quickBookingForm.reset();
        AppState.preselectedKarigar = null;
        if (DOM.selectedKarigarId) DOM.selectedKarigarId.value = '';
        if (DOM.bookingReferenceIdField) DOM.bookingReferenceIdField.value = '';
        if (DOM.selectedKarigarNameField) DOM.selectedKarigarNameField.value = '';
        if (DOM.preselectedKarigarAlert) DOM.preselectedKarigarAlert.style.display = 'none';

        if (DOM.bookingDate) {
          DOM.bookingDate.value = getFormattedToday();
        }

        // Show success toast confirming receipt
        showToast(
          AppState.currentLang === 'hi' 
            ? `बुकिंग ${bookingId} सफलतापूर्वक दर्ज व ईमेल/शीट में प्रेषित कर दी गई!` 
            : `Booking ${bookingId} confirmed & details synced successfully!`
        );
      } else {
        throw new Error('Both Web3Forms and Google Sheet webhook requests failed.');
      }
    } catch (err) {
      console.error('Booking submission error:', err);
      showToast(
        AppState.currentLang === 'hi'
          ? 'अनुरोध भेजने में समस्या हुई। कृपया पुनः प्रयास करें या सीधे कॉल करें।'
          : 'Failed to submit booking. Please try again or call us directly.'
      );
      alert(
        AppState.currentLang === 'hi'
          ? 'नेटवर्क या तकनीकी समस्या के कारण ऑनलाइन बुकिंग सबमिट नहीं हो सकी। कृपया अपना इंटरनेट कनेक्शन जांचें या तत्काल बुकिंग के लिए सीधे हमारी 24x7 हेल्पलाइन +91 98765 43210 पर कॉल करें।'
          : 'Could not complete your booking request due to a network or server issue. Please check your connection or contact our 24x7 helpline directly at +91 98765 43210.'
      );
    } finally {
      // Restore submit button text & enable state
      if (DOM.submitBookingBtn) {
        DOM.submitBookingBtn.disabled = false;
        const btnText = (I18N_TRANSLATIONS[AppState.currentLang] && I18N_TRANSLATIONS[AppState.currentLang].btn_submit_booking) 
          || (AppState.currentLang === 'en' ? 'Confirm Booking (Get Callback)' : 'बुकिंग दर्ज करें (Book & Get Callback)');
        DOM.submitBookingBtn.innerHTML = `
          <i class="fa-solid fa-calendar-check"></i>
          <span data-i18n="btn_submit_booking">${btnText}</span>
        `;
      }
    }
  });

  DOM.customerName.addEventListener('input', () => {
    DOM.customerName.closest('.form-group').classList.remove('has-error');
  });
  DOM.customerPhone.addEventListener('input', (e) => {
    // Restrict to digits only and max 10 characters
    e.target.value = e.target.value.replace(/\D/g, '').slice(0, 10);
    const phoneGroup = DOM.customerPhone.closest('.form-group');
    if (/^[6-9]\d{9}$/.test(e.target.value)) {
      phoneGroup.classList.remove('has-error');
    }
  });

  if (DOM.bookingDate) {
    DOM.bookingDate.addEventListener('change', () => {
      const todayStr = getFormattedToday();
      const dateGroup = DOM.bookingDate.closest('.form-group');
      if (DOM.bookingDate.value < todayStr) {
        DOM.bookingDate.value = todayStr;
        if (dateGroup) dateGroup.classList.remove('has-error');
        showToast(AppState.currentLang === 'hi' ? 'पिछली तारीख नहीं चुनी जा सकती। आज की तारीख सेट कर दी गई है।' : 'Past dates cannot be selected. Reset to today.');
      } else if (dateGroup) {
        dateGroup.classList.remove('has-error');
      }
    });
  }

  DOM.bookingServiceSelect.addEventListener('change', (e) => {
    DOM.bookingServiceSelect.closest('.form-group').classList.remove('has-error');
    updateGlobalWhatsAppLinks(e.target.value);
  });
  DOM.bookingAreaSelect.addEventListener('change', () => {
    DOM.bookingAreaSelect.closest('.form-group').classList.remove('has-error');
  });
  DOM.problemDescription.addEventListener('input', () => {
    DOM.problemDescription.closest('.form-group').classList.remove('has-error');
  });
}

/* --------------------------------------------------------------------------
   13. MODAL & DRAWER CONTROLS
   -------------------------------------------------------------------------- */

function openConfirmationModal() {
  DOM.confirmationModal.classList.add('open');
  DOM.confirmationModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeConfirmationModal() {
  DOM.confirmationModal.classList.remove('open');
  DOM.confirmationModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

if (DOM.closeConfirmationModalBtn) {
  DOM.closeConfirmationModalBtn.addEventListener('click', closeConfirmationModal);
}

if (DOM.confirmationModal) {
  DOM.confirmationModal.addEventListener('click', (e) => {
    if (e.target === DOM.confirmationModal) {
      closeConfirmationModal();
    }
  });
}

if (DOM.viewBookingsFromModalBtn) {
  DOM.viewBookingsFromModalBtn.addEventListener('click', () => {
    closeConfirmationModal();
    openBookingsDrawer();
  });
}

/* --------------------------------------------------------------------------
   14. MY BOOKINGS DRAWER & LOCALSTORAGE LISTING
   -------------------------------------------------------------------------- */

function renderBookingsHistory() {
  const bookings = getSavedBookings();
  const isEn = AppState.currentLang === 'en';

  if (bookings.length === 0) {
    DOM.bookingsListContainer.innerHTML = '';
    DOM.drawerEmptyState.style.display = 'block';
    DOM.drawerFooter.style.display = 'none';
    return;
  }

  DOM.drawerEmptyState.style.display = 'none';
  DOM.drawerFooter.style.display = 'block';

  const itemsHtml = bookings.map((item, index) => {
    return `
      <div class="booking-item-card">
        <div class="booking-item-header">
          <span class="item-ref-id">${item.bookingId}</span>
          <span class="item-status"><i class="fa-solid fa-check"></i> ${item.status}</span>
        </div>

        <div class="item-service">${item.service}</div>

        <div class="item-meta">
          <span><i class="fa-solid fa-user"></i> ${item.customerName} (${item.phone})</span>
          <span><i class="fa-solid fa-location-dot"></i> ${item.area}</span>
          <span><i class="fa-regular fa-clock"></i> ${item.date} | ${item.timeSlot}</span>
          <span><i class="fa-solid fa-id-badge"></i> ${isEn ? 'Karigar:' : 'कारीगर:'} ${item.assignedKarigar}</span>
        </div>

        <div class="item-desc">
          <strong>${isEn ? 'Problem:' : 'समस्या:'}</strong> ${item.description}
        </div>

        <div class="item-actions">
          <button type="button" class="btn-delete-booking" onclick="window.deleteBookingItem(${index})">
            <i class="fa-regular fa-trash-can"></i> ${isEn ? 'Cancel Booking' : 'हटाएं (Cancel)'}
          </button>
        </div>
      </div>
    `;
  }).join('');

  DOM.bookingsListContainer.innerHTML = itemsHtml;
}

window.deleteBookingItem = function (index) {
  const isEn = AppState.currentLang === 'en';
  if (!confirm(isEn ? 'Are you sure you want to cancel this booking?' : 'क्या आप वाकई इस बुकिंग को हटाना चाहते हैं?')) return;

  const bookings = getSavedBookings();
  bookings.splice(index, 1);
  saveBookingsToStorage(bookings);
  renderBookingsHistory();
  showToast(isEn ? 'Booking removed.' : 'बुकिंग हटा दी गई।');
};

function openBookingsDrawer() {
  renderBookingsHistory();
  DOM.bookingsDrawer.classList.add('open');
  DOM.bookingsDrawer.setAttribute('aria-hidden', 'false');
  DOM.bookingsDrawerOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeBookingsDrawer() {
  DOM.bookingsDrawer.classList.remove('open');
  DOM.bookingsDrawer.setAttribute('aria-hidden', 'true');
  DOM.bookingsDrawerOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

if (DOM.myBookingsBtn) {
  DOM.myBookingsBtn.addEventListener('click', openBookingsDrawer);
}

if (DOM.closeBookingsDrawerBtn) {
  DOM.closeBookingsDrawerBtn.addEventListener('click', closeBookingsDrawer);
}

if (DOM.bookingsDrawerOverlay) {
  DOM.bookingsDrawerOverlay.addEventListener('click', closeBookingsDrawer);
}

if (DOM.clearAllBookingsBtn) {
  DOM.clearAllBookingsBtn.addEventListener('click', () => {
    const isEn = AppState.currentLang === 'en';
    if (confirm(isEn ? 'Are you sure you want to clear all your bookings?' : 'क्या आप अपनी सभी बुकिंग्स का डेटा साफ़ करना चाहते हैं?')) {
      saveBookingsToStorage([]);
      renderBookingsHistory();
      showToast(isEn ? 'All bookings cleared.' : 'सभी बुकिंग्स हटा दी गईं।');
    }
  });
}

if (DOM.bookNowFromDrawerBtn) {
  DOM.bookNowFromDrawerBtn.addEventListener('click', () => {
    closeBookingsDrawer();
  });
}

/* --------------------------------------------------------------------------
   15. MOBILE MENU DRAWER
   -------------------------------------------------------------------------- */

function toggleMobileMenu(open) {
  if (open) {
    DOM.mobileDrawer.classList.add('open');
    DOM.mobileDrawer.setAttribute('aria-hidden', 'false');
    DOM.mobileOverlay.classList.add('active');
    DOM.mobileMenuBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  } else {
    DOM.mobileDrawer.classList.remove('open');
    DOM.mobileDrawer.setAttribute('aria-hidden', 'true');
    DOM.mobileOverlay.classList.remove('active');
    DOM.mobileMenuBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }
}

if (DOM.mobileMenuBtn) {
  DOM.mobileMenuBtn.addEventListener('click', () => {
    const isOpen = DOM.mobileDrawer.classList.contains('open');
    toggleMobileMenu(!isOpen);
  });
}

if (DOM.closeDrawerBtn) {
  DOM.closeDrawerBtn.addEventListener('click', () => toggleMobileMenu(false));
}

if (DOM.mobileOverlay) {
  DOM.mobileOverlay.addEventListener('click', () => toggleMobileMenu(false));
}

/* --------------------------------------------------------------------------
   15B. CUSTOMER REVIEWS & EXPANDABLE REVIEWS MODAL LOGIC
   -------------------------------------------------------------------------- */
function renderCustomerReviews() {
  const isEn = AppState.currentLang === 'en';

  const generateCardHtml = (review) => {
    const name = isEn ? review.name : review.nameHi;
    const service = isEn ? review.service : review.serviceHi;
    const area = isEn ? review.area : review.areaHi;
    const date = isEn ? review.date : review.dateHi;
    const comment = isEn ? review.commentEn : review.commentHi;
    const initial = review.name.charAt(0);

    const fullStars = Math.floor(review.rating);
    const hasHalf = review.rating % 1 !== 0;
    let starsHtml = '';
    for (let i = 0; i < fullStars; i++) {
      starsHtml += '<i class="fa-solid fa-star"></i>';
    }
    if (hasHalf) {
      starsHtml += '<i class="fa-solid fa-star-half-stroke"></i>';
    }
    const remaining = 5 - Math.ceil(review.rating);
    for (let i = 0; i < remaining; i++) {
      starsHtml += '<i class="fa-regular fa-star"></i>';
    }

    return `
      <article class="review-card" data-service="${review.service}">
        <div class="review-card-top">
          <div class="review-rating-stars" aria-label="Rating: ${review.rating} out of 5 stars">
            ${starsHtml}
          </div>
          <span class="review-service-pill">
            <i class="fa-solid fa-check-circle" style="color: var(--color-accent); font-size: 0.7rem; margin-right: 3px;"></i>
            ${service}
          </span>
        </div>
        <p class="review-comment">“${comment}”</p>
        <div class="review-author-wrap">
          <div class="review-avatar" aria-hidden="true">${initial}</div>
          <div class="review-author-info">
            <h4 class="review-author-name">
              ${name}
              <i class="fa-solid fa-circle-check review-verified-icon" title="${isEn ? 'Verified Customer' : 'सत्यापित ग्राहक'}"></i>
            </h4>
            <span class="review-author-meta">${area} • ${date}</span>
          </div>
        </div>
      </article>
    `;
  };

  // Render initial 4 cards in main page view
  if (DOM.customerReviewsGrid) {
    const initialCards = CUSTOMER_REVIEWS.slice(0, 4);
    DOM.customerReviewsGrid.innerHTML = initialCards.map(generateCardHtml).join('');
  }

  // Render all 12 cards in modal view
  if (DOM.modalReviewsGrid) {
    DOM.modalReviewsGrid.innerHTML = CUSTOMER_REVIEWS.map(generateCardHtml).join('');
  }
}

function openReviewsModal() {
  if (!DOM.reviewsModal) return;
  DOM.reviewsModal.classList.add('open');
  DOM.reviewsModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeReviewsModal() {
  if (!DOM.reviewsModal) return;
  DOM.reviewsModal.classList.remove('open');
  DOM.reviewsModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function setupReviewsModal() {
  if (DOM.openReviewsModalBtn) {
    DOM.openReviewsModalBtn.addEventListener('click', openReviewsModal);
  }

  if (DOM.closeReviewsModalBtn) {
    DOM.closeReviewsModalBtn.addEventListener('click', closeReviewsModal);
  }

  if (DOM.reviewsModal) {
    DOM.reviewsModal.addEventListener('click', (e) => {
      if (e.target === DOM.reviewsModal) {
        closeReviewsModal();
      }
    });
  }

  if (DOM.bookFromReviewsModalBtn) {
    DOM.bookFromReviewsModalBtn.addEventListener('click', (e) => {
      e.preventDefault();
      closeReviewsModal();
      const bookingSection = document.getElementById('bookingSection');
      if (bookingSection) {
        const navHeight = DOM.mainNavbar ? DOM.mainNavbar.offsetHeight : 0;
        const targetPos = bookingSection.getBoundingClientRect().top + window.pageYOffset - navHeight - 10;
        window.scrollTo({
          top: targetPos,
          behavior: 'smooth'
        });
      }
    });
  }

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && DOM.reviewsModal && DOM.reviewsModal.classList.contains('open')) {
      closeReviewsModal();
    }
  });
}

/* --------------------------------------------------------------------------
   16. INITIALIZATION ON DOM READY
   -------------------------------------------------------------------------- */
document.addEventListener('DOMContentLoaded', () => {
  // 1. Check saved language preference from localStorage
  let savedLang = 'hi';
  try {
    const stored = localStorage.getItem(LOCAL_STORAGE_LANG_KEY);
    if (stored === 'hi' || stored === 'en') {
      savedLang = stored;
    }
  } catch (e) {
    console.warn('LocalStorage language read error.');
  }

  // 2. Set initial language & render cards
  setLanguage(savedLang);

  // 3. Setup Navigation links and scrollspy
  setupNavLinks();
  setupScrollspy();

  // 4. Setup Doorstep Services Cards in Left Hero Box
  setupDoorstepCards();

  // 4B. Initial Render Customer Reviews & Modal Events
  renderCustomerReviews();
  setupReviewsModal();

  // 5. Set minimum date on booking calendar to today
  if (DOM.bookingDate) {
    const todayStr = getFormattedToday();
    DOM.bookingDate.setAttribute('min', todayStr);
    DOM.bookingDate.value = todayStr;
  }

  // 6. Update header booking count badge
  updateBookingCountBadge();

  // 6B. Initialize Dynamic WhatsApp Links
  updateGlobalWhatsAppLinks('');

  // 7. Emergency Call Click Event
  const emergencyCallLink = document.getElementById('emergencyCallLink');
  if (emergencyCallLink) {
    emergencyCallLink.addEventListener('click', () => {
      showToast(AppState.currentLang === 'hi' ? '24/7 आपातकालीन हेल्पलाइन पर कॉल किया जा रहा है...' : 'Dialing 24/7 Emergency Helpline...');
    });
  }

  console.log('Digital Karigar portal initialized successfully with two-column hero and promises section.');
});
