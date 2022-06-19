var state = localStorage.getItem("vOneLocalStorage");  
var category = localStorage.getItem("label");

if (state == "Uttar Pradesh") {
    if (category == "Historical Places") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "Agra";
        document.getElementById("content1").innerHTML = "Agra is one of the best places to visit in Uttar Pradesh. Famous across the world for housing the Taj Mahal, the city also takes pride in its other monuments like Agra Fort and Fatehpur Sikri, which are also UNESCO World Heritage Sites. Situated on the banks of Yamuna, you will be able to see Mughal architecture, art and culture in various parts of the city.";
        document.getElementById("img1").src = "https://cdn.theculturetrip.com/wp-content/uploads/2018/04/feature-image-2.jpg";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "Varanasi";
        document.getElementById("content2").innerHTML = "Varanasi is one of the holy places of the Hindu community. The oldest temple here is Kashi Vishwanath which you must visit. The main deity worshipped in this temple is Lord Shiva, and the temple has a gold plating of 800 kg on its tower. The other temples that you will find in the complex are Kaalbhairav, Virupaksh Gauri, Vishnu, Vinayaka and Avimukteshwara. Varanasi is also a significant destination for the Buddhists as the Gautam Buddha preached his first sermon in this city.";
        document.getElementById("img2").src = "https://lp-cms-production.imgix.net/2019-06/GettyImages-475540390_medium.jpg?fit=crop&q=40&sharp=10&vib=20&auto=format&ixlib=react-8.6.4";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "Sarnath";
        document.getElementById("content3").innerHTML = "Sarnath is an amazing place for the history buffs. You can see thousand year old Buddhist stupas and museums here. There are many excavated ancient sites in Sarnath. The architecture of the temples and monasteries here are worth appreciating. Some of the main attractions in this city include Dharma Stupa constructed by Emperor Ashoka,  Ashoka’s Pillar, to name a few.";
        document.getElementById("img3").src = "https://mytriphack.com/wp-content/uploads/2018/08/Sarnath-Stupa-and-ruins.jpg";
        
    } else if (category == "Food") {
       /*set heading of page*/
       document.getElementById("heading").innerHTML = category + " IN " + state;

       /*first paragraph and its img*/
       document.getElementById("one").innerHTML = "";
       document.getElementById("content1").innerHTML = "";
       document.getElementById("img1").src = "";

       /*second paragraph and its img*/
       document.getElementById("two").innerHTML = "";
       document.getElementById("content2").innerHTML = "";
       document.getElementById("img2").src = "";

       /*third paragraph and its img*/
       document.getElementById("three").innerHTML = "";
       document.getElementById("content3").innerHTML = "";
       document.getElementById("img3").src = "";

    } else if (category == "Agriculture") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";


    } else if (category == "Textile and Fabric") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";

    } else if (category == "Culture") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "Urban Culture";
        document.getElementById("content1").innerHTML = "Thousands gather at Allahabad (Prayagraj) to take part in the annual Magh Mela festival on the banks of the Ganges which is organised on a larger scale every 12th year, when it is called the Kumbha Mela, where over 10 million Hindu pilgrims congregate – one of the largest gathering of human beings in the world. Badaun is a religiously significant city whose historical monuments and tombs attract thousand of tourists annually.";
        document.getElementById("img1").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Taj_Mahal%2C_Agra%2C_India_edit3.jpg/300px-Taj_Mahal%2C_Agra%2C_India_edit3.jpg";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "Dance";
        document.getElementById("content2").innerHTML = "Music personalities including Naushad Ali, Talat Mehmood, Begum Akhtar , Anup Jalota, Shubha Mudgal, Bismillah Khan, Ravi Shankar, Kishan Maharaj, Vikash Maharaj, Hari Prasad Chaurasia, Gopal Shankar Misra, Siddheshwari Devi, Girija Devi and Sir Cliff Richard were originally from Uttar Pradesh.";
        document.getElementById("img2").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Kathak_3511900193_986f6440f6_b_retouched.jpg/300px-Kathak_3511900193_986f6440f6_b_retouched.jpg";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "Festival";
        document.getElementById("content3").innerHTML = "Hindu festivals include Diwali, Holi and Dussehra, which are also observed by Jains. Ten days of Ramlila takes place during the period of navratri and on the 10th day an effigy of Raavan is burnt. Durga puja is also observed in many parts of the state during navratri. Eid e milad un nabi, Eid, Bakreed and the birthday of Ali ibn Abitalib are recognised official Muslim religious festivals. Mahavir Jayanti is celebrated by Jains, Buddha Jayanti by Buddhists, Guru Nanak Jayanti by Sikhs and Christmas by the Christians.[4] Other festivals include Ram navami, Chhath puja, Krishna-Janmashtami, Mahashivratri, etc.";
        document.getElementById("img3").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Kumbh_Mela2001.JPG/240px-Kumbh_Mela2001.JPG";

    } else {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "Taj Mahal";
        document.getElementById("content1").innerHTML = "Construction of the mausoleum was essentially completed in 1643, but work continued on other phases of the project for another 10 years. The Taj Mahal complex is believed to have been completed in its entirety in 1653 at a cost estimated at the time to be around ₹32 million, which in 2020 would be approximately ₹70 billion (about US $1 billion). The construction project employed some 20,000 artisans under the guidance of a board of architects led by the court architect to the emperor, Ustad Ahmad Lahauri. Various types of symbolism have been employed in the Taj to reflect natural beauty and divinity.";
        document.getElementById("img1").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Taj_Mahal_in_March_2004.jpg/219px-Taj_Mahal_in_March_2004.jpg";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "J K Temple";
        document.getElementById("content2").innerHTML = "JK Temple (Juggilal Kamlapat temple) is a Hindu temple in the Indian city of Kanpur, Uttar Pradesh, India.[2][3][4] It is considered to be a unique blend of ancient and modern architecture. The mandapa of the temple has been constructed with high roof for adequate ventilation of light and air. The temple was constructed by JK Trust and major maintenance expenses of the temple also comes from the trust fund. The temple is also popularly known as Radhakrishna Temple.";
        document.getElementById("img2").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/JKTemple.JPG/240px-JKTemple.JPG";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "Madan Mohan Temple";
        document.getElementById("content3").innerHTML = "The temple is dedicated to the Krishna. It is believed that one night, King Gopal Singh was instructed by Krishna in his dream to bring his Madan Mohan idol from Vrindavan to Rajasthan before the attack of Mughal emperor Aurangzeb on Vrindavan temples. As instructed, the king of Karauli brought the original idol of Madan Mohan with him overnight and got this temple constructed Karauli.";
        document.getElementById("img3").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/MadanMohanmandir.jpg/153px-MadanMohanmandir.jpg";

    }
} else if (state == "Maharashtra") {
    if (category == "Historical Places") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

       /*first paragraph and its img*/
        document.getElementById("one").innerHTML = " Ajanta and Ellora Caves";
        document.getElementById("content1").innerHTML = "Ajanta and Ellora caves are considered to be one of the most significant historical places in Maharashtra owing to the magnificent paintings of Ajanta and well-carved sculptures of Ellora. The rock-cut caves containing carvings are the finest example of Indian paintings and sculpture. They are a must-visit historical place in Maharashtra.";
        document.getElementById("img1").src = "https://www.holidify.com/images/tooltipImages/AJANTA-AND-ELLORA-CAVES.jpg";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "Gateway of India, Mumbai";
        document.getElementById("content2").innerHTML = "The Gateway of India is, without doubt, one of the most popular historical places in Maharashtra. Sitting proudly on the Apollo Bunder, it overlooks the Arabian Sea. It is one of the defining monuments of the city of Mumbai and was built in the year 1924. The construction was undertaken by the famous architect George Wittet, to commemorate the visit of King George V and Queen Mary to Mumbai. The imposing structure of the monument is a beautiful confluence of Indian, Arabic and Western architecture and has become a popular tourist hub in the city.";
        document.getElementById("img2").src = "https://www.holidify.com/images/cmsuploads/compressed/1030_20190404091854.jpg";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "Aga Khan Palace, Pune";
        document.getElementById("content3").innerHTML = "The mighty edifice of Aga Khan Palace is situated in Pune and was built by Sultan Muhammed Shah Aga Khan III in the year 1892. It is one of the most important historical places in Maharashtra and has been instrumental in many defining moments of India's independence. Aga Khan Palace is well known both for its architectural excellence as well as its historical significance. Spread over a vast land of 19 acres, the palace is now the headquarters of the Gandhi National Memorial society. Here, making khadi is still one of the prime activities.";
        document.getElementById("img3").src = "https://www.holidify.com/images/attr_square/3297.jpg";

    } else if (category == "Food") {
       /*set heading of page*/
       document.getElementById("heading").innerHTML = category + " IN " + state;

       /*first paragraph and its img*/
       document.getElementById("one").innerHTML = "";
       document.getElementById("content1").innerHTML = "";
       document.getElementById("img1").src = "";

       /*second paragraph and its img*/
       document.getElementById("two").innerHTML = "";
       document.getElementById("content2").innerHTML = "";
       document.getElementById("img2").src = "";

       /*third paragraph and its img*/
       document.getElementById("three").innerHTML = "";
       document.getElementById("content3").innerHTML = "";
       document.getElementById("img3").src = "";

    } else if (category == "Agriculture") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";


    } else if (category == "Textile and Fabric") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";

    } else if (category == "Culture") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "Overview";
        document.getElementById("content1").innerHTML = "Around 80% of Maharashtrians are Hindu, and there are significant Muslim, Christian and Buddhist minorities.[4] The Maharashtrian culture consists of people from all a vast majority of religions. Due to it being huge areawise, many sub-regional cultures also exist in Maharashtra. The sub region of Vidarbha, was earlier a part of Central Provinces and Berar, hence it has that influence upon its culture.[5] There are many temples in Maharashtra, some of which are thousands of years old. These temples are constructed in a fusion of architectural styles borrowed from North and South India. The temples also blend themes from Hindu, Buddhist and Jain cultures. The temple of Lord Vitthal at Pandharpur is the most important temple for the Varkari sect. Other important religious places are the Ashtavinayaka temples of Lord Ganesha, Bhimashankar which is one of the Jyotirling (12 important Lord Shiva temples).";
        document.getElementById("img1").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Emperor_of_Maratha_India.jpg/330px-Emperor_of_Maratha_India.jpg";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "Religion";
        document.getElementById("content2").innerHTML = "According to the 2011 census, Hinduism was the principal religion in the state at 79.83% of the total population, while Muslims constituted 11.54% of the total population. Maharashtra has the India's largest Buddhist and Jain populations. Buddhism accounted for 6% in Maharashtra's total population, with 6.53 million followers, which is 77% of all Buddhists in India. Jains, Christians and Sikhs constituted 1.2%, 1.0%, 0.2% of the population respectively";
        document.getElementById("img2").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Khandoba_in_a_household_shrine.JPG/330px-Khandoba_in_a_household_shrine.JPG";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "Attire";
        document.getElementById("content3").innerHTML = "Traditional male attire in Maharashtra includes the dhoti, also known as Dhotar, and pheta, while a choli and nine-yard saree locally known as Nauwari saree or Lugda is for women.[19][20] Traditional attire is becoming rarer with trousers and shirts for males and five yard saree or salawar khameej for females as the popular replacements. The traditional attire is increasingly worn by Maharashtrians only during special occasions and festivals.[21] Marathi women also wear gajra or veni made by flowers on their Maharashtra also has rich Jewellery.Jewellery such as tanmani, bormal, ranihar, kolhapuri saaj, thushi wore on neck; bajuband on area of hand above elbow;painjan wore on ankles; kudi, bugdi, kudka, vel, Bali on ears; Marathi nath on nose; jodave on leg fingers.";
        document.getElementById("img3").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Marathi_Women.jpg/330px-Marathi_Women.jpg";

    } else {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "Mumbai";
        document.getElementById("content1").innerHTML = "Mumbai, the city of dreams. Mumbai, the city that never sleeps. Mumbai, the old world charm and fast pace of the modern life. There is so much that one can say in the praise of the one city in India that everyone wants to visit at least once in their life. That maybe because of the grandeur of this city or because of the history it has seen. Nonetheless, this city has a lot in store for everyone who visits. The USP of places to visit in Mumbai is that they are all iconic and all you need is a picture to recognize them, that is the charm of this city. Some places here are pieces of history, some are spiritual hotspots, and others are mesmerizing places to relax, chill or munch on the famous streets of Mumbai, like the ever famous Chowpatty Beach.";
        document.getElementById("img1").src = "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0b/4e/55/e6/chhatrapati-shivaji-terminus.jpg?w=600&h=600&s=1";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "Lonaval";
        document.getElementById("content2").innerHTML = "Lonavala is a hill station surrounded by green valleys in western India near Mumbai. The Karla Caves and the Bhaja Caves are ancient Buddhist shrines carved out of the rock. They feature massive pillars and intricate relief sculptures. South of the Bhaja Caves sits the imposing Lohagad Fort, with its 4 gates. West of here is Bhushi Dam, where water overflows onto a set of steps during rainy season. ";
        document.getElementById("img2").src = "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/07/58/37/67/lohgarh-fort.jpg?w=600&h=600&s=1";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "Nashik";
        document.getElementById("content3").innerHTML = "Nashik is an ancient holy city in Maharashtra, a state in western India. It’s known for its links to the “Ramayana” epic poem. On the Godavari River is Panchavati, a temple complex. Nearby, Lord Rama was thought to have bathed at Ram Kund water tank, today attended by Hindu devotees. Shri Kalaram Sansthan Mandir is an ancient shrine to Rama, while Rama and Sita are said to have worshipped at Sita Gufaa caves. ";
        document.getElementById("img3").src = "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/22/31/ba/the-climb-to-the-fort.jpg?w=600&h=600&s=1";

    }
} else if (state == "Bihar") {
    if (category == "Historical Places") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "Nalanda";
        document.getElementById("content1").innerHTML = "The most popular Mahavihara of the ancient times, a significant Buddhist seat of academic excellence and a modest pilgrim center, all wrapped in a wisp of spirituality, Nalanda continues to be an equally enriching historical place in Bihar in the present. It offers vibrant substance of spirituality, history, culture, architecture, and tourism.";
        document.getElementById("img1").src = "https://www.holidify.com/images/tooltipImages/NALANDA.jpg;

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "Vaishali, Bihar - World famous historical place in Bihar";
        document.getElementById("content2").innerHTML = "Located in the interiors of Bihar, Vaishali is a small district which is also a revered Hindu, Buddhist and Jain worshipping site. It is the city where Lord Mahavir was born. Considered as the first republic of the world, Vaishali is believed to have been named after King Vishal, from the time of Mahabharat and is a famous historical place in Bihar. It is also the city where Buddha delivered his last sermon. Surrounded by groves of mango and banana and extensive rice field, it is now a part of Trihut division of Bihar. The village is an important religious and historical place in Bihar and is flocked by tourists year in and year out";
        document.getElementById("img2").src = "https://www.holidify.com/images/tooltipImages/VAISHALI.jpg";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = ". Bodh Gaya";
        document.getElementById("content3").innerHTML = "One of the most important pilgrimage sites for Buddhists, Bodhgaya is a village in the state of Bihar. It was here under the Bodhi tree that Gautama Buddha attained enlightenment. The historical place in Bihar is bustling with pilgrims all through the year who come to pay their homage in the monasteries, shrines and temples. It also attracts tourists from India and abroad owing to its magnificent Buddha statue, the Mahabodhi Temple and the Bodhi tree.";
        document.getElementById("img3").src = "https://www.holidify.com/images/tooltipImages/BODH.jpg";

    } else if (category == "Food") {
       /*set heading of page*/
       document.getElementById("heading").innerHTML = category + " IN " + state;

       /*first paragraph and its img*/
       document.getElementById("one").innerHTML = "";
       document.getElementById("content1").innerHTML = "";
       document.getElementById("img1").src = "";

       /*second paragraph and its img*/
       document.getElementById("two").innerHTML = "";
       document.getElementById("content2").innerHTML = "";
       document.getElementById("img2").src = "";

       /*third paragraph and its img*/
       document.getElementById("three").innerHTML = "";
       document.getElementById("content3").innerHTML = "";
       document.getElementById("img3").src = "";

    } else if (category == "Agriculture") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";


    } else if (category == "Textile and Fabric") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";

    } else if (category == "Culture") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "Culture";
        document.getElementById("content1").innerHTML = "Bihar has a rich cultural heritage. The predominant themes are from the myths and legends of Hinduism. The Hindu deities, Lord Rama and His consort, Seeta, and Lord Shiva and His consort, Parvati, form the main theme of folk paintings. Bihar, a land of many Buddhist Monasteries is also known as 'The Land of Buddha'.";
        document.getElementById("img1").src = "http://www.bihar.com/images/english/photo/photo_culture.jpg";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "Durga Pooja";
        document.getElementById("content2").innerHTML = "After Chhath puja, Durga puja is the second major festival of Bihar. Here, it is celebrated for ten days. People perform fasts during festival and married women perform 'saanjh' which means sandhya aarti and khoecha is given to goddess by women because it is a tradition in Bihar that when a daughter comes to her father's house 'khoecha' is given to her by her mother and it is believed that goddess Durga comes to her maayka from her sasural every year. Whole cities and villages are decorated with beautiful lights and beautiful pandals are created for this grand festival. Here people performs puja for ten days and strictly performs the fast and during these ten days pure vegetarian dishes are cooked in households. ";
        document.getElementById("img2").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Durga_Puja_DS.jpg/300px-Durga_Puja_DS.jpg";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "Chhath Mahaparv";
        document.getElementById("content3").innerHTML = "Chhath, also called Dala Chhath, Surya vrat, is an ancient and major Vedic festival celebrated in Bihar. It is celebrated twice a year: once in the summers, called the Chaiti Chhath, and once around a week after Deepawali, called the Karthik Chhath. The Karthik Chhath is more popular because winters are the usual festive season in northern India, and fasting without water for around 42 hours or more, as required for worshipers during Chhath Puja, is easier to do in the Indian winters.";
        document.getElementById("img3").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Chhath_puja_photo.jpg/300px-Chhath_puja_photo.jpg";

    } else {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "Gaya";
        document.getElementById("content1").innerHTML = "Amongst the most famous places in Bihar is Gaya, which is a Hindu pilgrimage hub and a transit point for Buddhist pilgrimage centre of Bodhgaya. It is believed that it was here under the tree that Buddha attained enlightenment. Gaya is a busy city situated on the bank of River Phalgu and it is replete with many temples and historic sites dating back to different eras that stand as the evidence to the successful rule of Maurya and Gupta dynasty here. The glory of Gaya was extended so much so that even Hiuen Tsang could not resist mentioning it in his travelogues.";
        document.getElementById("img1").src = "https://www.tourmyindia.com/blog//wp-content/uploads/2015/08/gaya-bihar.jpg";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "Naland";
        document.getElementById("content2").innerHTML = "Probably the oldest university in India, Nalanda is an important site to visit in Bihar. A perfect reminisce to the time of flourishing Gupta and Pala period, Nalanda is an acclaimed tourist attraction in Bihar. It is believed that the last and most famous Jain Tirthankara, Mahavira spent 14 monsoon seasons here. Even, Buddha is said to have delivered lectures near the mango grove in Nalanda. The fame of this education centre was to an extent that Hieun Tsang, the famous Chinese traveller visited here and stayed for atleast two years here. Even, I-tsing another famous Chinese voyager stayed at Nalanda for about 10 years, AND such was the glory of this place. Today most parts of Nalanda lie in ruins but the place is surely worth exploring!";
        document.getElementById("img2").src = "https://www.tourmyindia.com/blog//wp-content/uploads/2015/08/nalanda-bihar.jpg";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "Munger";
        document.getElementById("content3").innerHTML = "Dubbed as the seat of Bihar School of Yoga, Munger is yet another place that is popular amongst the tourists in Bihar. The history of Munger dates back to Aryans, who called Munger the ‘Midland’ for their settlement. For yoga buffs, Munger is not an unknown name, thus we can expect a large foreign crowd thronging this place. The present day Munger is a twin city, which comprises of Munger and Jamalpur. Reckoned to be one of the oldest cities of Bihar, Munger was once the capital of Mir Kasim before it fell into the hands of British. The place has several historic relics that further add to the charm here.";
        document.getElementById("img3").src = "https://www.tourmyindia.com/blog//wp-content/uploads/2015/08/munger-temple.jpg";

    }
} else if (state == "West Bengal") {
    if (category == "Historical Places") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = " Kolkata";
        document.getElementById("content1").innerHTML = "Kolkata is the capital of West Bengal and also referred as the culture capital of the country. The city will offer you numerous tourist attractions which will still give you historical vibes. You can see British architecture in many of the buildings in this city. Some of the famous historical tourist attractions in Kolkata are Victoria Memorial, Fort William, Howrah Bridge, Belur Math, Marble Palace, Tagore’s House, Indian Museum, Birla Planetarium, Princep Ghat, Writers Building, Town Hall, Nizam Palace, etc. Many of the attractions will charge you an entry fee but at very minimal price.";
        document.getElementById("img1").src = "https://www.revv.co.in/blogs/wp-content/uploads/2020/07/kolkata-1024x683.jpg";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "Bishnupur";
        document.getElementById("content2").innerHTML = "Bishnupur is also known for having historical importance in the state. The Terracotta temples here will take you to the days of yesteryears. The historical places that you must explore in Bishnupur include Rasmancha, Jorbangla Temple, Madanmohan Temple, Dalmadal Kamal Canon, and Radhe Govind Temple.";
        document.getElementById("img2").src = "https://www.revv.co.in/blogs/wp-content/uploads/2020/07/Bishnupur.jpg";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "Kalimpong";
        document.getElementById("content3").innerHTML = "A beautiful hill station in North Bengal that remains surrounded by green mountains, which get blanketed by snow during the winters. The hill station is small and you can cover the attractions in a just a day. However, do not forget visiting Morgan House in Kalimpong, an old British bungalow. The bungalow exhibits authentic British architecture and one of the oldest buildings in the town. It has now been turned into a tourist lodge and taken care of by the West Bengal Tourist Development Corporation.";
        document.getElementById("img3").src = "https://www.revv.co.in/blogs/wp-content/uploads/2020/07/Kalimpong-1-1024x683.jpg";

    } else if (category == "Food") {
       /*set heading of page*/
       document.getElementById("heading").innerHTML = category + " IN " + state;

       /*first paragraph and its img*/
       document.getElementById("one").innerHTML = "";
       document.getElementById("content1").innerHTML = "";
       document.getElementById("img1").src = "";

       /*second paragraph and its img*/
       document.getElementById("two").innerHTML = "";
       document.getElementById("content2").innerHTML = "";
       document.getElementById("img2").src = "";

       /*third paragraph and its img*/
       document.getElementById("three").innerHTML = "";
       document.getElementById("content3").innerHTML = "";
       document.getElementById("img3").src = "";

    } else if (category == "Agriculture") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";


    } else if (category == "Textile and Fabric") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";

    } else if (category == "Culture") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "Festival";
        document.getElementById("content1").innerHTML = "West Bengal is famous for its culture and festivals are an inevitable part of this culture. Some festivals are celebrated statewide, while others are local in nature. There are also various other village fairs and seasonal tribal festivals. Durga Puja is the biggest and most important festival of West Bengal, and it features colourful pandals, decorative idols of Hindu goddess Durga and her family, lighting decoration and immersion processions. Other major festivals are Kali Puja, Diwali, Holi, Saraswati Puja, Jagaddhatri Puja, Rath Jatra, Kojagori Lakshmi Puja, Vishwakarma Puja, Poush Parbon, Poila Boishakh, Christmas. Kolkata Book Fair, Kolkata International Film Festival and Dover Lane Music Festival are major annual cultural events of Kolkata, whereas Poush Mela, Ganga Sagar Mela, Jhapan are some of the major annual fairs of the state. The diverse ethnic populace of Darjeeling Himalayan hill region celebrates several local festivals such as Losar, Dusshera or Fulpati, Tihar, Ram Navami, Maghe Sankranti, Chotrul Duchen, Buddha Jayanti, Tendong Lho Rumfaat, Eid al-Fitr etc.";
        document.getElementById("img1").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Victoria.jpg/330px-Victoria.jpg";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "Attire";
        document.getElementById("content2").innerHTML = "Though Bengali women traditionally wear the special Benarasi sari and salwar kameez, Western attire has gained acceptance among younger and professional women.[18] Western-style dress has greater acceptance among men, although the traditional costumes like dhoti, panjabi, kurta, sherwani, pyjama and lungi are seen during weddings and major festivals. Like any other metropolis, Kolkata also has an eclectic mix of western wears with a tinge of ethnic wears. People are found dressed in jeans along with kurtas, or sari along with an overcoat.";
        document.getElementById("img2").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/394_baul-singers-sml.jpg/330px-394_baul-singers-sml.jpg";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "Music";
        document.getElementById("content3").innerHTML = "The Baul tradition is a unique heritage of Bengali folk music, which has also been influenced by regional music traditions.[13] Other folk music forms include Kabigaan, Gombhira, Bhawaiya, kirtans, and Gajan festival music. Folk music in West Bengal is often accompanied by the ektara, a one-stringed instrument. West Bengal also has a heritage in North Indian classical music. The state is recognised for its appreciation of rabindrasangeet (songs written by Rabindranath Tagore) and Indian classical music. Nazrul Geeti is another classical music of Bengal, which is written and composed by poet Kazi Nazrul Islam. He was person in Bengal music who created the first Bengali ghazals.";
        document.getElementById("img3").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Chaou.jpg/180px-Chaou.jpg";

    } else {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "Kolkata";
        document.getElementById("content1").innerHTML = "Kolkata is India’s second-largest city and the face of West Bengal. It is an interminably progressing celebration of human existence. This dynamic 350-year-old city situated on India’s Eastern Coast is the capital of West Bengal. It flourishes as the aesthetic, social, and intellectual capital of India. Also known as the ‘City of Joy’, Kolkata is overflowing with liveliness. One can expect to be charmed by the cheap cost of things, the hand-pulled-rickshaws, wandering avenues, and a countless assortment of desserts. ";
        document.getElementById("img1").src = "https://img.traveltriangle.com/blog/wp-content/uploads/2020/01/Kolkata_13th-jan-400x229.jpg";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "Darjeeling ";
        document.getElementById("content2").innerHTML = " If one wants to witness the stunning snow pinnacles of Kanchenjunga, the wonderful tea cultivations, the sweet-smelling orchids, the greenery of the pines, and the adorable Himalayan toy train making its way through the dazzling mountains, head to the city of Darjeeling. This hill station is a gem known for its old-world charm combined with modernity. For a well-needed break from the blistering and moist summers of India, this city is one of the best tourist places in West Bengal.";
        document.getElementById("img2").src = "https://img.traveltriangle.com/blog/wp-content/uploads/2020/01/Darjeeling_13th-jan-400x229.jpeg";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "The Sundarbans – Land Of Mangroves";
        document.getElementById("content3").innerHTML = "This UNESCO World Heritage Site is the biggest mangrove eco-arrangement in the world. Home to one of India’s most notorious untamed life species, the Royal Bengal Tiger, it is also the world’s biggest estuarine woods befuddled by many streams and tributaries, converged by a system of tidal conduits and a maze of little mangrove islands. This interconnectedness makes The Sundarbans one of the most appealing and charming spots on earth. At present this extraordinary land is home to 250 tigers and an assortment of birds, reptiles, and various invertebrates including crocodiles. This natural heaven is situated about 110 km from Kolkata.";
        document.getElementById("img3").src = "https://img.traveltriangle.com/blog/wp-content/uploads/2020/01/The-Sundarbans_13th-jan-400x229.jpg";

    }
} else if (state == "Madhya Pradesh") {
    if (category == "Historical Places") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "Khajuraho";
        document.getElementById("content1").innerHTML = "Khajuraho is known around the world for its stunning temples adorned by erotic and sensuous carvings. A small historical place in Madhya Pradesh located in the Bundelkhand region in Madhya Pradesh, Khajuraho is a brilliant example of Indian architecture and its culture back in the medieval period. The architecture of these Hindu and Jain temples depict the innocent form of love, the carvings on the walls display passion in the most erotic yet aesthetic ways.";
        document.getElementById("img1").src = "https://www.holidify.com/images/tooltipImages/KHAJURAHO.jpg";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "Sanchi Stupa, Bhopal";
        document.getElementById("content2").innerHTML = "56 kms north-west of Bhopal city lies the historical architecture Sanchi Stupa, a UNESCO world heritage site since 1989. It's home to the relics of Buddha and his followers. Built by the Mauryan emperor Ashoka in the 3rd century BCE; it is a remarkable specimen of Buddhist art and architecture. Sanchi's uniqueness lies in the fact that Buddha isn't represented by figures but through symbols.";
        document.getElementById("img2").src = "https://www.holidify.com/images/cmsuploads/compressed/sanchistupa_20180219185128.jpg";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = " Gwalior Fort, Gwalior";
        document.getElementById("content3").innerHTML = "eferred to as 'the pearl amongst fortresses in India' by Mughal emperor Babur, the Gwalior Fort is one of the most impenetrable fortresses located in the entire northern and southern India and is a place you definitely must visit. Situated on the top of a vast rocky mountain near Gwalior in Madhya Pradesh in central India, this imposing structure dominates the entire city of Gwalior. ";
        document.getElementById("img3").src = "https://www.holidify.com/images/cmsuploads/square/attr_1616_20190226140417jpg";

    } else if (category == "Food") {
       /*set heading of page*/
       document.getElementById("heading").innerHTML = category + " IN " + state;

       /*first paragraph and its img*/
       document.getElementById("one").innerHTML = "";
       document.getElementById("content1").innerHTML = "";
       document.getElementById("img1").src = "";

       /*second paragraph and its img*/
       document.getElementById("two").innerHTML = "";
       document.getElementById("content2").innerHTML = "";
       document.getElementById("img2").src = "";

       /*third paragraph and its img*/
       document.getElementById("three").innerHTML = "";
       document.getElementById("content3").innerHTML = "";
       document.getElementById("img3").src = "";

    } else if (category == "Agriculture") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";


    } else if (category == "Textile and Fabric") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";

    } else if (category == "Culture") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "Culture";
        document.getElementById("content1").innerHTML = "Three sites in Madhya Pradesh have been declared World Heritage Sites by UNESCO: the Khajuraho Group of Monuments (1986) including Devi Jagadambi temple, Khajuraho, Buddhist Monuments at Sanchi (1989) and the Rock Shelters of Bhimbetka (2003). Other architecturally significant or scenic sites include Ajaigarh, Amarkantak, Asirgarh, Bandhavgarh, Bawangaja, Bhopal, Vidisha, Chanderi, Chitrakuta, Dhar, Gwalior, Indore, Nemavar, Jabalpur, Burhanpur, Maheshwar, Mandleshwar, Mandu, Omkareshwar, Orchha, Pachmarhi, Shivpuri, Sonagiri, Mandla and Ujjain.";
        document.getElementById("img1").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Temples_kundalpur.JPG/413px-Temples_kundalpur.JPG";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "Religion";
        document.getElementById("content2").innerHTML = "According to the census of 2011, 90.9% of residents followed Hinduism, while minorities are Muslim (6.6%), Jain (0.8%), Buddhists (0.3%), Christians (0.3%), and Sikhs (0.2%). Madhya Pradesh is home to several pilgrimage sites including Amarkantak at the source of the Narmada and the Ghats of Omkareshwar, also on the Narmada. Temples can be found throughout the state. Buddhism and Jainism were once prominent religions in the state, especially in the central plateau near Raisen and Bhopal. Malwa is still home to a significant Jain minority. Jains are particularly concentrated in the urban centres of the Malwa region.";
        document.getElementById("img2").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Flute_player_in_Orccha.jpg/424px-Flute_player_in_Orccha.jpg";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "Language";
        document.getElementById("content3").innerHTML = "The official language of the state is Hindi, which is spoken by over two-thirds of the population and is used for all government business.[5] In urban areas Standard Hindi is the main language, while Urdu is spoken by Muslims. In rural areas, however, most speak varieties counted as dialects of Hindi in the census, although most are quite distinct. In the west are Malvi and Nimadi in the Malwa and Nimar regions, which are more closely related to the Rajasthani languages. In Bundelkhand in the north and Baghelkhand in the east are spoken Bundeli and Bagheli which are eastern varieties of the Hindi languages, similar to Awadhi or Chhattisgarhi. In the southeast is spoken Chhattisgarhi and Powari is the language of the far south, both Eastern Hindi languages. Most speakers of these languages consider them to be dialects of Hindi and so report their language as 'Hindi' on the census.";
        document.getElementById("img3").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Young_Baiga_women%2C_India.jpg/455px-Young_Baiga_women%2C_India.jpg";

    } else {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "Rajwada";
        document.getElementById("content1").innerHTML = "Showcasing the architectural grandeur and royal splendour of Maratha empire, Rajwada is one of the most important tourist places in Madhya Pradesh. Built by the Holkars, Rajwada boasts of a seven-storied structure with a garden and a palace to mesmerise you with its regal ambience.";
        document.getElementById("img1").src = "https://images.thrillophilia.com/image/upload/s--DUvnbSKO--/c_fill,g_center,h_450,q_auto,w_753/dpr_1.5,f_auto,fl_strip_profile/v1/images/photos/000/132/335/original/1536670464_shutterstock_567029827_%281%29.jpg.jpg";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "Sarafa Bazaar";
        document.getElementById("content2").innerHTML = "Contributing to the fame of Indore’s street food culture, Sarafa Bazar is one of the best places for foodies in Madhya Pradesh. Offering a number of delicacies like dahi wadas, kachori chaat, petha paan, buttermilk, shikanji and many more, Sarafa Bazaar is a place in Indore where you will not be able to stop yourself from gorging on lip-smacking food.";
        document.getElementById("img2").src = "https://images.thrillophilia.com/image/upload/s--Cc1TDS9---/c_fill,g_center,h_450,q_auto,w_753/dpr_1.5,f_auto,fl_strip_profile/v1/images/photos/000/132/334/original/1536670439_1530682763_sweets-at-sarafa-bazar.jpg.jpg.jpg";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "Patalpani Falls";
        document.getElementById("content3").innerHTML = "Gear up for a serene respite with a visit to Patalpani Falls when you are vacationing in Madhya Pradesh. As per the legend associated with the falls, the depth of the waterfall is unknown and it is believed that it goes as deep as the underworld. The place is also a popular trekking spot near Indore for adventure lovers and presents a magnificent sight to behold, especially in the rainy season. If you are looking for famous places in Madhya Pradesh to enjoy a peaceful picnic with your loved ones, Patalpani Falls is the place to be.";
        document.getElementById("img3").src = "https://images.thrillophilia.com/image/upload/s--nedNXA-T--/c_fill,g_center,h_450,q_auto,w_753/dpr_1.5,f_auto,fl_strip_profile/v1/images/photos/000/132/333/original/1536670373_LRM_EXPORT_20180727_190820_2.jpg.jpg";

    }
} else if (state == "Tamil Nadu") {
    if (category == "Historical Places") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

       /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "Kanchipuram";
        document.getElementById("content1").innerHTML = "On the banks of Vegavathi river lies this beautiful city of Kanchi which has been ruled by all the major dynasties of Tamil Nadu in past. It was also center of education and religious center of education for Jainism and Buddhism. It is also one of the seven Pilgrimage site in Hinduism. It is also famous for its Silk-weaving industry. Here, visitors can buy silk at cheap rates.";
        document.getElementById("img1").src = "https://blog.weekendthrill.com/wp-content/uploads/2018/04/042718_0455_Top10Histor1.png";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "Mahabalipuram";
        document.getElementById("content2").innerHTML = "This small town in Tamil Nadu is famous for its stone carvings. These structures were made using typical South Indian architecture and are the oldest of their type. Mostly, the structures are made out of granite rocks. This site has 400 ancient monuments and temples of different types. The architecture varies according to the time they were built in and it’s interesting to study.";
        document.getElementById("img2").src = "https://blog.weekendthrill.com/wp-content/uploads/2018/04/042718_0455_Top10Histor2.png";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "Chidambaram";
        document.getElementById("content3").innerHTML = "It is located in Cuddalore district of Tamil Nadu. This antique town has been ruled by various kings in the past. This town is specially famous for its Thillai Nataraja temple and Chariot festival held twice a year.The place has many mythological beliefs related to Lord Shiva. It is believed that the Lord performed his Tandava dance here when he was enraged by a group of sages as they got distracted by him and his partner Mohini. The Thillai Nataraja temple is a famous tourist spot here";
        document.getElementById("img3").src = "https://blog.weekendthrill.com/wp-content/uploads/2018/04/042718_0455_Top10Histor3.png";

    } else if (category == "Food") {
       /*set heading of page*/
       document.getElementById("heading").innerHTML = category + " IN " + state;

       /*first paragraph and its img*/
       document.getElementById("one").innerHTML = "";
       document.getElementById("content1").innerHTML = "";
       document.getElementById("img1").src = "";

       /*second paragraph and its img*/
       document.getElementById("two").innerHTML = "";
       document.getElementById("content2").innerHTML = "";
       document.getElementById("img2").src = "";

       /*third paragraph and its img*/
       document.getElementById("three").innerHTML = "";
       document.getElementById("content3").innerHTML = "";
       document.getElementById("img3").src = "";

    } else if (category == "Agriculture") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";


    } else if (category == "Textile and Fabric") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";

    } else if (category == "Culture") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "Culture";
        document.getElementById("content1").innerHTML = "Tamil Nadu is known for its rich tradition of literature, art, music and dance which continue to flourish today. Tamil Nadu is a land most known for its monumental ancient Hindu temples and classical form of dance Bharata Natyam.[183] Unique cultural features like Bharatanatyam[184] (dance), Tanjore painting,[185] and Tamil architecture were developed and continue to be practised in Tamil Nadu.";
        document.getElementById("img1").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/Man_Riding_an_Elephant_in_a_Pongal_Festival_Parade_in_Namakkal%2C_Tamil_Nadu.jpg/300px-Man_Riding_an_Elephant_in_a_Pongal_Festival_Parade_in_Namakkal%2C_Tamil_Nadu.jpg";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "Festival";
        document.getElementById("content2").innerHTML = "Pongal, also called Tamizhar Thirunaal (festival of Tamils) or Makara Sankranti elsewhere in India, a four-day harvest festival is one of the most widely celebrated festivals throughout Tamil Nadu.[199] The Tamil language saying Thai Pirandhal Vazhi Pirakkum – literally meaning, the birth of the month of Thai will pave way for new opportunities – is often quoted with reference to this festival. The first day, Bhogi Pongal is celebrated by throwing away and destroying old clothes and materials by setting them on fire to mark the end of the old and emergence of the new. The second day, Surya Pongal is the main day which falls on the first day of the tenth Tamil month of Thai (14 January or 15 January in the western calendar). On the third day, Maattu Pongal is meant to offer thanks to the cattle, as they provide milk and are used to plough the lands. Jallikattu, a bull-taming contest, marks the main event of this day. Alanganallur is famous for its Jallikattu";
        document.getElementById("img2").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/A_bull_being_tamed_in_Jallikattu_held_in_palamedu.jpg/300px-A_bull_being_tamed_in_Jallikattu_held_in_palamedu.jpg";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "Music";
        document.getElementById("content3").innerHTML = "In terms of modern cine-music, Ilaiyaraaja was a prominent composer of film music in Tamil cinema during the late 1970s and 1980s. His work highlighted Tamil folk lyricism and introduced broader Western musical sensibilities to the south Indian musical mainstream. Tamil Nadu is also the home of the double Oscar winner A. R. Rahman[207][208][209] who has composed film music in Tamil, Telugu, Hindi, English and Chinese films. He was once referred to by Time magazine as The Mozart of Madras";
        document.getElementById("img3").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/MS_Subbulakshmi_2005_stamp_of_India.jpg/300px-MS_Subbulakshmi_2005_stamp_of_India.jpg";

    } else {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "Ooty";
        document.getElementById("content1").innerHTML = "Often referred to as Queen of hill stations, Ooty is one of the best hill stations in India and among the top places to visit in Tamilnadu. Ooty is situated at a distance of 265 km from Bangalore.       At an altitude of 7,440 feet, Ooty was a popular summer retreat for the British during colonial days. The rolling hills, lush green vegetation, and misty landscapes attract a large number of tourists to this hill station. Ooty Lake, Botanical Garden, Wenlock Downs, and Rose Garden are among the must include places in Ooty tour packages. The toy train, known as Nilgiri Mountain Railway that runs from Mettupalayam to Ooty is a UNESCO World Heritage Site and a must be experienced.";
        document.getElementById("img1").src = "https://www.trawell.in/admin/images/thumbs/134280655Ooty_Main_New_thumb.jpg";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "Madurai";
        document.getElementById("content2").innerHTML = "Situated on the banks of the River Vaigai, Madurai is the third-largest city in Tamilnadu and one of the most famous places of pilgrimage in India. The city is situated about 209 km from Coimbatore and 464 km from Chennai.";
        document.getElementById("img2").src = "https://www.trawell.in/admin/images/thumbs/705432807Madurai_Main_thumb.jpg";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = " Kodaikanal";
        document.getElementById("content3").innerHTML = "Often referred to as the Princess of Hill stations, Kodaikanal or Kodai is one of the top tourist destinations in Tamilnadu tour packages and among the best hill stations in South India. It is located at a distance of about 469 km from Bangalore & 528 km from Chennai. At an altitude of about 7000 feet (2133 m) amidst the rolling slopes of the Palani Hills, Kodai has several scenic places that are enjoyed by its visitors as part of Kodaikanal tour packages. Kodaikanal is not extensively commercialized like Ooty and it offers a pleasant experience to tourists with relatively less crowd. Kodai Lake, Bryant Park, Coaker's Walk, Bear Shola Falls, Silver Cascade, and Pillar Rocks are the top tourist places in Kodaikanal.";
        document.getElementById("img3").src = "https://www.trawell.in/admin/images/thumbs/852687354Kodaikanal_Main_thumb.jpg";

    }
} else if (state == "Rajasthan") {
    if (category == "Historical Places") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

       /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "Bada Bagh";
        document.getElementById("content1").innerHTML = "Bada Bagh, precisely called ‘Big Garden’ is located some 6kms off from the Jaisalmer city. First recognized by Maharawal Jai Singh in the 16th century and later operated by his son Lunakaran, Bada Bagh houses incredible cenotaphs (Chhatris) of Rajput kings of 6 centuries. Three spots, which are a dam, a garden and a tank, are the most prominent attractions of this historical site";
        document.getElementById("img1").src = "https://blog.weekendthrill.com/wp-content/uploads/2018/04/042718_0459_10Historica1.jpg";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "Kuldhara Village";
        document.getElementById("content2").innerHTML = "Amidst the deserts and sand dunes, Rajasthan houses a cursed heritage of Kuldhara village, which was cursed and abandoned by Paliwal Brahmins long ago. Though inhabited, the village appears to be a planned, well-settled place with temples, houses and streets of ancient architectural style. Locals tell that anyone who tries to stay in the village would suffer death.";
        document.getElementById("img2").src = "https://blog.weekendthrill.com/wp-content/uploads/2018/04/042718_0459_10Historica2.jpg";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "Jaswant Thada";
        document.getElementById("content3").innerHTML = "The Jaswant Thana is a cenotaph located in Jodhpur, in the Indian state of Rajasthan. It was built by Maharaja Sardar Singh of Jodhpur State in 1899 in memory of his father, Maharaja Jaswant Singh II, and serves as the cremation ground for the royal family of Marwar.The mausoleum is built out of intricately carved sheets of marble. These sheets are extremely thin and polished so that they emit a warm glow when illuminated by the sun.";
        document.getElementById("img3").src = "https://blog.weekendthrill.com/wp-content/uploads/2018/04/042718_0459_10Historica3.jpg";

    } else if (category == "Food") {
       /*set heading of page*/
       document.getElementById("heading").innerHTML = category + " IN " + state;

       /*first paragraph and its img*/
       document.getElementById("one").innerHTML = "";
       document.getElementById("content1").innerHTML = "";
       document.getElementById("img1").src = "";

       /*second paragraph and its img*/
       document.getElementById("two").innerHTML = "";
       document.getElementById("content2").innerHTML = "";
       document.getElementById("img2").src = "";

       /*third paragraph and its img*/
       document.getElementById("three").innerHTML = "";
       document.getElementById("content3").innerHTML = "";
       document.getElementById("img3").src = "";

    } else if (category == "Agriculture") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";


    } else if (category == "Textile and Fabric") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";

    } else if (category == "Culture") {
        /*set heading of page*/
       document.getElementById("heading").innerHTML = category + " IN " + state;

       /*first paragraph and its img*/
       document.getElementById("one").innerHTML = "Music";
       document.getElementById("content1").innerHTML = "The Ghoomar dance from Jodhpur and the Kalbeliya dance of Jaisalmer have gained international recognition. Folk music is a vital part of Rajasthani culture. Bhopa, Chang, Teratali, Ghindar, Kachchigghori, Tejaji, parth dance are examples of traditional Rajasthani culture. Folk songs are commonly ballads which relate heroic deeds and love stories; and religious or devotional songs known as bhajans and banis (often accompanied by musical instruments like dholak, sitar, sarangi etc.) are also sung.";
       document.getElementById("img1").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/D%C3%A9sert-du-Thar.jpg/330px-D%C3%A9sert-du-Thar.jpg";

       /*second paragraph and its img*/
       document.getElementById("two").innerHTML = "Arts and Crafts";
       document.getElementById("content2").innerHTML = "Rajasthan is famous for textiles, semi-precious stones, and handicrafts, as well as for its traditional and colorful art. Rajasthani furniture is known for its intricate carvings and bright colours. Block prints, tie and dye prints, Bagaru prints, Sanganer prints and Zari embroidery are major export products from Rajasthan.[citation needed] The blue pottery of Jaipur is particularly noted. The Anokhi Museum of Hand Printing celebrates traditional woodblock printing on cloth.";
       document.getElementById("img2").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/A_carpet_seller_in_Jaipur.jpg/330px-A_carpet_seller_in_Jaipur.jpg";

       /*third paragraph and its img*/
       document.getElementById("three").innerHTML = "Festival";
       document.getElementById("content3").innerHTML = "The main religious festivals are Deepawali, Holi, Gangaur, Teej, Gogaji, Makar Sankranti, and Janmashtami as the main religion is Hinduism. Rajasthan's desert festival in Jaisalmer is celebrated once a year during winter. People of the desert dance and sing ballads of valour, romance and tragedy. There are fairs with snake charmers, puppeteers, acrobats and folk performers. Camels play a prominent role in this festival.";
       document.getElementById("img3").src = "https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20200630151052/kalbeliya-4088755_960_720.jpg";

    } else {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "Jaipur";
        document.getElementById("content1").innerHTML = "Also called the Pink City, Jaipur is the capital of the royal state of Rajasthan. Along with Delhi and Agra, Jaipur forms the Golden Triangle and hails as one of the most famous tourist circuits in the country.";
        document.getElementById("img1").src = "https://www.holidify.com/images/bgImages/JAIPUR.jpg";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "Udaipur";
        document.getElementById("content2").innerHTML = "Udaipur, also known as the City of Lakes, is one of the most visited tourist places in Rajasthan. Located around stunning water lakes and enveloped by the Aravalli Hills in all directions, Udaipur is known for its azure lakes, magnificent palaces, vibrant culture and delectable food. ";
        document.getElementById("img2").src = "https://www.holidify.com/images/bgImages/UDAIPUR.jpg";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "Jodhpur";
        document.getElementById("content3").innerHTML = "Jodhpur is the second-largest city in Rajasthan and the former capital of the Marwar region. It is popularly called the Blue City as it looks completely blue from an aerial view because of its blue walls and houses. Jodhpur is primarily famous for its temples, lakes and snacks";
        document.getElementById("img3").src = "https://www.holidify.com/images/bgImages/JODHPUR.jpg";

    }
} else if (state == "Karnataka") {
    if (category == "Historical Places") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

       /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "Hampi-City Of Ruins";
        document.getElementById("content1").innerHTML = "Also called as the ‘City of Ruins’, Hampi is one of the most famous historical places in Karnataka under UNESCO. The city is known for its ancient temples and monuments that date back to a thousand years. It has been an important seat in the history of Karnataka and has around 500 ancient temples; archaeological monuments; treasury building; bastions. What makes this place a famous backpacker’s delight is its hippie vibe along with vibrant street markets abound with handcrafts and souvenirs. ";
        document.getElementById("img1").src = "https://assets.traveltriangle.com/blog/wp-content/uploads/2019/09/Hampi.jpg";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = " Mysore – City Of Palaces";
        document.getElementById("content2").innerHTML = "Mysore has been one of the most iconic places in the history of Karnataka as it used to be the home for the Wodeyar rulers for seven centuries. It is visited by more than 2.5 million tourists every year. That’s not all. Mysore has myriad attractions for you to explore like Lalitha Mahal, Jagmohan Palace, Brindavan Gardens, and Mysore Zoo. You could also go shopping in the city and buy famous souvenirs like Khadi cotton, incense sticks, sandalwood products, etc. Do not forget to try the world-famous Mysore Pak on your visit.";
        document.getElementById("img2").src = "https://img.traveltriangle.com/blog/wp-content/uploads/2019/09/Mysore.jpeg";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "Bijapur – Biggest Domes In India";
        document.getElementById("content3").innerHTML = "Home to the world-famous Gol Gumbaz or Gol Gummata, Bijapur is a must-visit historical place in North Karnataka. It is the mausoleum of Mohammed Adil Shah with a big circular domethat imparts this city its name. Gol Gumbaz is a single mammoth structure and is one of the biggest domes in India. The city houses numerous prominent historical monuments of Karnataka. Shivagiri, Jama Masjid and Bara Kaman are some of the prominent landmarks to explore in Bijapur.";
        document.getElementById("img3").src = "https://assets.traveltriangle.com/blog/wp-content/uploads/2016/07/Bijapur-in-Karnataka.jpg";


    } else if (category == "Food") {
       /*set heading of page*/
       document.getElementById("heading").innerHTML = category + " IN " + state;

       /*first paragraph and its img*/
       document.getElementById("one").innerHTML = "";
       document.getElementById("content1").innerHTML = "";
       document.getElementById("img1").src = "";

       /*second paragraph and its img*/
       document.getElementById("two").innerHTML = "";
       document.getElementById("content2").innerHTML = "";
       document.getElementById("img2").src = "";

       /*third paragraph and its img*/
       document.getElementById("three").innerHTML = "";
       document.getElementById("content3").innerHTML = "";
       document.getElementById("img3").src = "";

    } else if (category == "Agriculture") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";


    } else if (category == "Textile and Fabric") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";

    } else if (category == "Culture") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "Art";
        document.getElementById("content1").innerHTML = "The southern state of Karnataka, in India, has a distinct art and culture informed by a long history of diverse linguistic and religious ethnicity. Apart from Kannadigas, Karnataka is home to Tuluvas, who also consider themselves as Kannadigas. Minor populations of Tibetan Buddhists and Siddhi tribes plus a few other ethnic groups also live in. The traditional folk arts are major theatrical forms of coastal Karnataka. Contemporary theatre culture in Karnataka is one of the most vibrant in India with organizations like Ninasam, Ranga Shankara and Rang on foundations laid down by the Gubbi Veeranna Nataka Company. ";
        document.getElementById("img1").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/FullPagadeYakshagana.jpg/300px-FullPagadeYakshagana.jpg";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "Music";
        document.getElementById("content2").innerHTML = "The Hindustani musicians of Karnataka have won several awards like the Kalidas Sanman, Padma Vibhusan and Padma Bhusan. Hence, Karnataka has achieved a prominent place in Hindusthani Music. Basavaraj Rajguru, Puttaraj Gawai, Sawai Gandharva are some famous performers to name a few. ";
        document.getElementById("img2").src = "https://www.holidify.com/images/cmsuploads/compressed/Mysore_Painting_20180919110458.jpg";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "Dance";
        document.getElementById("content3").innerHTML = "Considered a difficult art form, Yakshagana lacks a written script and depends entirely on the artist's ability to be spontaneous, to improvise, to be a good orator and have a sound knowledge of the plot and character. The unique art form of Yakshagana has various elements like dance (Nrithya), makeup (Bannagarike or Mukhavarnike), background singing and direction (Bhagvathike), two forms of drums (Chande Maddale) and conversation (Arthagarike). The art form is 500 years old, and the entire portrayal takes place in refined Kannada, without even a word of any other language. It is an important tradition and also a prevalent art form.";
        document.getElementById("img3").src = "https://www.holidify.com/images/cmsuploads/articles/276.jpg";

    } else {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "Coorg";
        document.getElementById("content1").innerHTML = "Located amidst imposing mountains in Karnataka with a perpetually misty landscape, Coorg is a popular coffee producing hill station. It is popular for its beautiful green hills and the streams cutting right through them. ";
        document.getElementById("img1").src = "https://www.holidify.com/images/bgImages/COORG.jpg";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "Badami";
        document.getElementById("content2").innerHTML = "Located in a valley of rugged red sandstone, surrounding the Agastya Lake, Badami (formerly known as Vatapi) is an archaeological delight owing to its beautifully crafted sandstone cave temples, fortresses and carvings. Located in the Bagalkot district in Karnataka.";
        document.getElementById("img2").src = "https://www.holidify.com/images/bgImages/BADAMI.jpg";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "Mysore";
        document.getElementById("content3").innerHTML = "Famously known as The City of Palaces, it wouldn’t be wrong to say that Mysore, currently Mysuru, is one of the most important places in the country regarding ancient reigns. It is replete with the history of its dazzling royal heritage, intricate architecture";
        document.getElementById("img3").src = "https://www.holidify.com/images/bgImages/MYSORE.jpg";

    }
} else if (state == "Gujarat") {
    if (category == "Historical Places") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

       /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "Rani ki vav";
        document.getElementById("content1").innerHTML = "Also known as Queen’s Stepwell, the Rani ki vav is a UNESCO World Heritage Site that was constructed in the 11th century as a memorial to King Bhimdev I (of the Solanki dynasty) by his wife, Queen Udayamati. With a length of 64 metres and depth of 27 metres, complete with pillared multi-storey pavilions and sculptured panels, this historical site is an engineering marvel to behold. The steps of the stepwell are richly carved with the images of various gods and goddesses, mostly dedicated to Lord Vishnu and his forms. The carvings on the side walls also have depictions of apsaras (celestial women).";
        document.getElementById("img1").src = "https://img.theculturetrip.com/768x/smart/wp-content/uploads/2018/04/rani-ki-vav-1.jpg";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "Laxmi Vilas Palace";
        document.getElementById("content2").innerHTML = "Spread across 500 acres, the Laxmi Vilas Palace serves as an official residence of the royal family of Vadodara, the Gaekwads. Constructed over 12 years, this palace is four times the size of the spectacular Buckingham Palace, which makes it the largest private dwelling in the world. Combining Hindu, Mughal and Gothic architectural styles, the palace features a banquet and a museum showcasing paintings and artefacts from across the world. After exploring the interiors, you can take a stroll through the lush manicured gardens and even engage in a game of golf at the 10-hole golf course within the compound.";
        document.getElementById("img2").src = "https://img.theculturetrip.com/768x/smart/wp-content/uploads/2017/09/laxmi-vilas-palace.jpg";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "Mahabat Maqbara";
        document.getElementById("content3").innerHTML = "Revered and majestic, Mahabat Maqbara, otherwise known as Mausoleum of Bahaduddinbhai Hasainbhai, is the most visited historical site in Junagarh, largely because of its splendid architecture, which is a fusion of Gothic and Indo-Islamic influences. Established in the late 19th century, it features winding staircases surrounding the four minarets, elaborate stone carvings, silver-embellished portals, intricately designed arches, and an onion-shaped dome.";
        document.getElementById("img3").src = "https://img.theculturetrip.com/768x/smart/wp-content/uploads/2018/04/mahabat-maqbara.jpg";


    } else if (category == "Food") {
       /*set heading of page*/
       document.getElementById("heading").innerHTML = category + " IN " + state;

       /*first paragraph and its img*/
       document.getElementById("one").innerHTML = "";
       document.getElementById("content1").innerHTML = "";
       document.getElementById("img1").src = "";

       /*second paragraph and its img*/
       document.getElementById("two").innerHTML = "";
       document.getElementById("content2").innerHTML = "";
       document.getElementById("img2").src = "";

       /*third paragraph and its img*/
       document.getElementById("three").innerHTML = "";
       document.getElementById("content3").innerHTML = "";
       document.getElementById("img3").src = "";

    } else if (category == "Agriculture") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";


    } else if (category == "Textile and Fabric") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";

    } else if (category == "Culture") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "Dance";
        document.getElementById("content1").innerHTML = "Gujarat is a flourishing state with cultural diversity. It is vibrant with its true colors of rich heritage and cultural traditions. Dating back to history with the Harappan civilization, the state becomes a confluence of many religions – Hinduism, Islam, Jainism and Buddhism.";
        document.getElementById("img1").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Codice_Casanatense_Gujarati_Farmers.jpg/320px-Codice_Casanatense_Gujarati_Farmers.jpg";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "Maratha Empier";
        document.getElementById("content2").innerHTML = "When the cracks had started to develop in the edifice of the Mughal Empire in the mid-17th century, the Marathas were consolidating their power in the west, Chatrapati Shivaji, the great Maratha ruler, attacked Surat in southern Gujarat twice first in 1664 and again in 1672.[93] These attacks marked the entry of the Marathas into Gujarat. However, before the Maratha had made inroads into Gujarat, the Europeans had made their presence felt, led by the Portuguese, and followed by the Dutch and the English.";
        document.getElementById("img2").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Peshwa_Baji_Rao_I_riding_horse.jpg/255px-Peshwa_Baji_Rao_I_riding_horse.jpg";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "Overview";
        document.getElementById("content3").innerHTML = "Gujarat (Gujarati: ગુજરાત, Sindhi: گوجارات) is a state within the Republic of India. Gandhinagar is the capital of Gujarat. This city is named after Mahatma Gandhi. Its area is 75,686 mi² (196,077 km²), excluding the Kori Creek of the Rann of Kachchh: which is disputed by Pakistan , but it includes the Kutch District, in terms of area it is bigger than Syria but smaller than Senegal.";
        document.getElementById("img3").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Sun_Temple_Modhera1.jpg/375px-Sun_Temple_Modhera1.jpg";

    } else {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "Kutch";
        document.getElementById("content1").innerHTML = "Virtually an island that resembles the shape of a tortoise, Kutch is an erstwhile princely state of India holding onto its grandeur nature from the past. Kutch is probably one of the most beautiful, yet surreal places in India with the vast expanses of the white salt desert. ";
        document.getElementById("img1").src = "https://www.holidify.com/images/bgImages/KUTCH.jpg";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "Ahemdabad";
        document.getElementById("content2").innerHTML = "A rapidly growing metropolis, an industrial hub, an educational hotspot, and a city with a magnificent past – Ahmedabad is one of the most important cities in Gujarat. Located on the banks of the Sabarmati River, Ahmedabad is the former capital of Gujarat, and its delicious food.";
        document.getElementById("img2").src = "https://www.holidify.com/images/bgImages/AHMEDABAD.jpg";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "Somnath";
        document.getElementById("content3").innerHTML = "Somnath, literally meaning 'lord of the moon' is a pilgrim center and is home to one of the 12 Jyotirlingas. It is a town which derives much of its identity from the mythology, religion, and legends that surround it.";
        document.getElementById("img3").src = "https://www.holidify.com/images/bgImages/SOMNATH.jpg";

    }
} else if (state == "Andhra Pradesh") {
    if (category == "Historical Places") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

         /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "Kurnool";
        document.getElementById("content1").innerHTML = "A place of much historical value with beautiful surrounding areas, Kurnool, is a small town in Andhra Pradesh where much of history left its imprints.";
        document.getElementById("img1").src = "https://www.holidify.com/images/tooltipImages/KURNOOL.jpg";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "Vijayawada";
        document.getElementById("content2").innerHTML = "With scrumptious fruits, sensational sweets and scenic marvels, Vijayawada literally translates to 'The Place of Victory'.";
        document.getElementById("img2").src = "https://www.holidify.com/images/bgImages/VIJAYAWADA.jpg";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "Amaravathi";
        document.getElementById("content3").innerHTML = "Amaravathi is a small town located on the banks of the River Krishna in the Guntur district of Andhra Pradesh. It serves as quiet a familiar name for the Buddhists in India and is a prime hub for pilgrimage and sightseeing for tourists. Thus, Amaravathi is also called the Abode of God.";
        document.getElementById("img3").src = "https://www.holidify.com/images/tooltipImages/AMARAVATHI.jpg";

    } else if (category == "Food") {
       /*set heading of page*/
       document.getElementById("heading").innerHTML = category + " IN " + state;

       /*first paragraph and its img*/
       document.getElementById("one").innerHTML = "";
       document.getElementById("content1").innerHTML = "";
       document.getElementById("img1").src = "";

       /*second paragraph and its img*/
       document.getElementById("two").innerHTML = "";
       document.getElementById("content2").innerHTML = "";
       document.getElementById("img2").src = "";

       /*third paragraph and its img*/
       document.getElementById("three").innerHTML = "";
       document.getElementById("content3").innerHTML = "";
       document.getElementById("img3").src = "";

    } else if (category == "Agriculture") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";


    } else if (category == "Textile and Fabric") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";

    } else if (category == "Culture") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "Culture";
        document.getElementById("content1").innerHTML = "The culture of Andhra Pradesh is an integral part Gadwal, Venkatagiri, Pedana,Bandarulanka, Uppada and Mangalairi, the exclusive metal ware, brass, stone and wood carving from Budithi in Srikaklulam District and Veenas from Bobbili and colourful toys from Etikoppaka and Kondapalli highlight the immense talent of the";
        document.getElementById("img1").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Lepakshi...jpg/330px-Lepakshi...jpg";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "Religion";
        document.getElementById("content2").innerHTML = "Andhra Pradesh is home to Hindu saints of all castes. An important figure is Saint Yogi Potuluri Veerabrahmam, who was a Viswa Brahmin who even had Brahmin, Shudra Harijan and Muslim disciples.[1] Fisherman Raghu was also a Shudra.[2] Several important Hindu modern-day saints are from Andhra Pradesh. These include Nimbarka who founded Dvaitadvaita, Mother Meera who advocated the Indian Independence and Aurobindo Mission, Sri Sathya Sai Baba and Swami Sundara";
        document.getElementById("img2").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Hanuman_and_Ravana_in_Tholu_Bommalata%2C_the_shadow_puppet_tradition_of_Andhra_Pradesh%2C_India.JPG/300px-Hanuman_and_Ravana_in_Tholu_Bommalata%2C_the_shadow_puppet_tradition_of_Andhra_Pradesh%2C_India.JPG";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "Overview";
        document.getElementById("content3").innerHTML = "Other elements that have long defined Telugu culture include Bapu's paintings, Nanduri Subbarao's Yenki Paatalu (Songs on/by a washerwoman called Yenki), the mischievous Budugu (a character by Mullapudi), Annamayya's songs, Aavakaaya (a variant of mango pickle in which the kernel of the mango is retained), Gongura (a chutney from the Roselle plant), Atla Taddi (a seasonal festival predominantly for teenage girls), the banks of the river Godavari, and Dudu basavanna (the ceremonial ox decorated for door-to-door exhibition during the harvest festival Sankranti).";
        document.getElementById("img3").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Kondapalli_toys_at_a_house_in_Vijayawada.jpg/300px-Kondapalli_toys_at_a_house_in_Vijayawada.jpg";

    } else {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "Araku Valley";
        document.getElementById("content1").innerHTML = "Araku Valley is a comparatively unexplored hill station mostly visited by locals as a weekend getaway and is situated some 120 kilometres away from Vishakhapatnam. If you're a tourist looking for exclusivity and tranquillity, Vistadome train leaves Vishakhapatnam at 6.50 AM";
        document.getElementById("img1").src = "https://www.holidify.com/res/images/patt.png";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "Visakhapatnam";
        document.getElementById("content2").innerHTML = "Visakhapatnam, also commonly known as Vizag, is one of the oldest port cities in the country. Situated in the heart of Andhra Pradesh, Visakhapatnam is known for its picturesque beaches and serene landscape, as well as a rich cultural past.";
        document.getElementById("img2").src = "https://www.holidify.com/images/bgImages/VISAKHAPATNAM.jpg";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "Amravati";
        document.getElementById("content3").innerHTML = "Known as the Capital of Andhra Pradesh, Amaravathi is a planned city on the banks of the River Krishna. Amaravathi is renowned for being a site of a Buddhist Stupa that is a semi-hemispherical structure containing Buddhist relics and often called the Abode of God. ";
        document.getElementById("img3").src = "https://www.holidify.com/images/bgImages/AMARAVATHI.jpg";

    }
} else if (state == "Orissa") {
    if (category == "Historical Places") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "Sun Temple, Konark";
        document.getElementById("content1").innerHTML = "Sun Temple, Konark is one of the famous monuments in Odisha. Built in the shape of a giant chariot, the temple is dedicated to Sun God. While you are here, you can also visit the archeological museum located inside the temple complex. The temple is believed to be more than 2,000 years old. However, it is well-maintained and you can still admire the architecture and sculptures. There is an entry fee to be paid to enter the temple.";
        document.getElementById("img1").src = "https://images.newindianexpress.com/uploads/user/imagelibrary/2020/1/25/w1200X800/Konark_Sun_temple.jpg";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "Sri Jagannath Puri Temple, Puri";
        document.getElementById("content2").innerHTML = "Puri is majorly known for Sri Jagannath Puri Temple. It was King Indradyumna who built the famous temple in the 11th century. It is one of the historical places in Odisha which is frequented by millions of devotees as well as tourists all round the year. While you are in the temple, you can also see the beautiful and unique Oriya architecture. You can also try visiting the temple during Ratha Yatra.";
        document.getElementById("img2").src = "https://www.revv.co.in/blogs/wp-content/uploads/2020/07/Sri-Jagannath-Puri-Temple-Puri.jpg";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "Dhauli, Bhubaneswar";
        document.getElementById("content3").innerHTML = "If you have interest in history, you surely know the importance of Dhauli and its past. Dhauli is the place where Kalinga War took place in the 3rd century BC between Kalinga kingdom and the Mauryan Empire led by Great Ashoka. It was one of the most intense wars in the history of the country. The war also changed Mauryan King Ashoka, after which he took Buddhism. You will also be able to see several edicts of King Ashoka in this city. ";
        document.getElementById("img3").src = "https://www.revv.co.in/blogs/wp-content/uploads/2020/07/Dhauli-Bhubaneswar.jpg";


    } else if (category == "Food") {
       /*set heading of page*/
       document.getElementById("heading").innerHTML = category + " IN " + state;

       /*first paragraph and its img*/
       document.getElementById("one").innerHTML = "";
       document.getElementById("content1").innerHTML = "";
       document.getElementById("img1").src = "";

       /*second paragraph and its img*/
       document.getElementById("two").innerHTML = "";
       document.getElementById("content2").innerHTML = "";
       document.getElementById("img2").src = "";

       /*third paragraph and its img*/
       document.getElementById("three").innerHTML = "";
       document.getElementById("content3").innerHTML = "";
       document.getElementById("img3").src = "";

    } else if (category == "Agriculture") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";


    } else if (category == "Textile and Fabric") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";

    } else if (category == "Culture") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "Culture";
        document.getElementById("content1").innerHTML = "Odisha (formerly Orissa) is one of the 28 states of India, located in the eastern coast. It is surrounded by the states of West Bengal to the north-east, Jharkhand to the north, Chhattisgarh to the west and north-west, Andhra Pradesh to the south and south-west. Odia (formerly known as Oriya) is the official and most widely spoken language, spoken by 33.2 million according to the 2001 Census.[1] The modern state of Odisha was established on 1 April 1936, as a province in British India, and consisted predominantly of Odia-speaking regions.[2] April 1 is celebrated as Odisha Day.";
        document.getElementById("img1").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Westindischer_Maler_um_1550_001.jpg/330px-Westindischer_Maler_um_1550_001.jpg";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "Music";
        document.getElementById("content2").innerHTML = "Odissi music is the traditional classical music of the state of Odisha. Born as a seva in the Jagannatha temple of Puri, it was developed by great composers such as Jayadeva, Upendra Bhanja, Dinakrusna Dasa, Banamali Dasa Kabisurjya Baladeba Ratha, Gopalakrusna Pattanayaka and others. Odissi music has a history of over 2000 years, several native shastras or treatises, unique ragas and talas and a distinctive style of rendition.";
        document.getElementById("img2").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Singhari_Shyamasundar_Kar.jpg/330px-Singhari_Shyamasundar_Kar.jpg";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "Dance";
        document.getElementById("content3").innerHTML = "Odissi dance and music are classical forms. Odissi has a tradition of 2,000 years, and finds mention in the Natyashastra of Bharatamuni, possibly written circa 200 BCE. However, the dance form nearly became extinct during the British period, only to be revived after India's independence by a few proponents, such as Guru Deba Prasad Das, Guru Pankaj Charan Das, Guru Raghunath Dutta and Kelucharan Mohapatra. Odissi classical dance is about the divine love of Krishna and his consort Radha, mostly drawn from compositions by the notable Odia poet Jayadeva, who lived in the 12th century CE.";
        document.getElementById("img3").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Hiranyakasipu_in_Prahallada_Nataka.jpg/344px-Hiranyakasipu_in_Prahallada_Nataka.jpg";

    } else {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "Puri";
        document.getElementById("content1").innerHTML = "Puri in Odisha is one of the four must-visit pilgrimage sites for Hindus because of Jagannath Temple that forms the part of Char Dham in India. Puri is a beach city located on the coast of Bay of Bengal which is one of the favourites among people of West Bengal for a short trip.";
        document.getElementById("img1").src = "https://www.holidify.com/images/bgImages/PURI.jpg";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "Konark";
        document.getElementById("content2").innerHTML = "Konark, in the state of Orissa is renowned world over for the Sun Temple which is also a UNESCO World Heritage Site, the Annual dance festival and its beautiful sandy beaches.";
        document.getElementById("img2").src = "https://www.holidify.com/images/bgImages/KONARK.jpg";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "Cuttack";
        document.getElementById("content3").innerHTML = "Referred to as the cultural capital of Odisha, Cuttack is a commercial city with plenty of impressive tourist attractions.";
        document.getElementById("img3").src = "https://www.holidify.com/images/bgImages/CUTTACK.jpg";

    }
} else if (state == "Telangana") {
    if (category == "Historical Places") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = ". Golconda Fort";
        document.getElementById("content1").innerHTML = "Situated in the Western part of the beautiful city of Hyderabad at a distance of approximately 9 km from Hussain Sagar Lake, the Golconda fort is spread over an area of three square kilometres which is 4.8 kilometres in length. This mighty fort falls in the list of the most humongous fortresses of India. One interesting phenomenon observed at the Golconda Fort is that if a person standing at a certain point near the dome entrance claps his hands, it can be heard at the hilltop pavilion which lies at a distance of about one kilometre.";
        document.getElementById("img1").src = "https://www.holidify.com/images/cmsuploads/square/attr_1565_20180806200940.jpg";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "Warangal Fort, Warangal";
        document.getElementById("content2").innerHTML = "A prominent landmark of the Telangana state and an apt example of architectural excellence and historical richness, the Warangal fort is famous historical place in Telangana. The city is also known as Oru Kallu, which means 'a single stone'. Locals believe the city was built on a single rock in the medieval era. Sprawlingly spread across a stretch of 19 km between Warangal Hanamkonda, this 12th-century fort is a prominent historical attraction in Telangana. Every year thousands of enthusiastic tourists flock in to witness this historical places in Telangana.";
        document.getElementById("img2").src = "https://www.holidify.com/images/cmsuploads/square/attr_3943.jpg";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "Charminar, Hyderabad";
        document.getElementById("content3").innerHTML = "An identifying feature of the city of Hyderabad, Charminar is the most prominent landmark located right in the heart of the city. This historical place in Telangana was erected by Quli Qutub Shah to signify the founding of Hyderabad. As is evident from the structure, it was so named as it consists of four minarets. Although it lies right in the centre of the city with traffic and crowds milling all about it, Charminar certainly manages to hold the gaze. It is also famous for the market that sprawls around it and is called 'Laad' or 'Chudi' Bazaar.";
        document.getElementById("img3").src = "https://www.holidify.com/images/cmsuploads/square/attr_wiki_108_20190227115314.jpg";


    } else if (category == "Food") {
       /*set heading of page*/
       document.getElementById("heading").innerHTML = category + " IN " + state;

       /*first paragraph and its img*/
       document.getElementById("one").innerHTML = "";
       document.getElementById("content1").innerHTML = "";
       document.getElementById("img1").src = "";

       /*second paragraph and its img*/
       document.getElementById("two").innerHTML = "";
       document.getElementById("content2").innerHTML = "";
       document.getElementById("img2").src = "";

       /*third paragraph and its img*/
       document.getElementById("three").innerHTML = "";
       document.getElementById("content3").innerHTML = "";
       document.getElementById("img3").src = "";

    } else if (category == "Agriculture") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";


    } else if (category == "Textile and Fabric") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";

    } else if (category == "Culture") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "Religion";
        document.getElementById("content1").innerHTML = "The major religions of the people are Hinduism and Islam,[10] though Buddhism was the dominant religion up to the 6th century. Hinduism was revived during the time of the Chalukyas and the Kakatiyas in the 12th century. The Vijayanagar rule saw the glorious days of Hinduism when the famed emperors, Krishnadeva Raya in particular, built new temples and beautified the old ones. Siva, Vishnu, Hanuman and Ganapati have been the popular Hindu Gods. The Vugra Narasimha Swami Temple at Yadagirigutta and Thousand Pillar Temple at Warangal are among the oldest shrines in the state attracting people from different parts of the country for hundreds of years.";
        document.getElementById("img1").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Bammera-village_potana-2007dec3.JPG/420px-Bammera-village_potana-2007dec3.JPG";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "Festival";
        document.getElementById("content2").innerHTML = "Festivals are celebrated with much fervor and people used to go to temples on these days to offer special prayers. Some of the Festivals are Bathukamma, Dasara, Bonalu, Eid ul fitr, Bakrid, Ugadi, Makara Sankranti, Guru Purnima , Sri Rama Navami, Hanuman Jayanti, Holi, Peerla Panduga, Rakhi Pournami, Vinayaka Chaviti , Nagula Panchami, Krishnashtami, Deepavali, Mukkoti Ekadasi, Karthika Purnima and Ratha Saptami.";
        document.getElementById("img2").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Bathukamma.jpg/300px-Bathukamma.jpg";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "Painting";
        document.getElementById("content3").innerHTML = "Nirmal paintings are a popular form of painting done in Nirmal in Adilabad District. The paintings have golden hues.[20][21] The region is well known for its Golconda and Hyderabad painting styles which are branches of Deccani painting.[22] Developed during the 16th century, the Golconda style is a native style blending foreign techniques and bears some similarity to the Vijayanagara paintings of neighbouring Mysore. A significant use of luminous gold and white colours is generally found in the Golconda style.[23] The Hyderabad style originated in the 17th century under the Nizams. Highly influenced by Mughal painting, this style makes use of bright colours and mostly depicts regional landscape, culture, costumes and jewellery.";
        document.getElementById("img3").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Mallanna_Patnam.jpg/372px-Mallanna_Patnam.jpg";

    } else {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "Hyderabad";
        document.getElementById("content1").innerHTML = "A city of contrasts, Hyderabad exudes an old-world charm of its own with the Old City (Charminar side), Hitech City (Cyberabad) and the other areas lying between the old and the new. The capital and the largest city of Telanaga, Hyderabad is home to stately mosques and noisy bazaars lined";
        document.getElementById("img1").src = "https://www.holidify.com/res/images/patt.png";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "Papikondalu";
        document.getElementById("content2").innerHTML = "Papikondalu mountain range runs along the River Godavari (Western Godavari) and is located in Rajahmundry, Andhra Pradesh. Papikondalu is a sheer fest to the eyes in terms of its scenic beauty. As the hills become closer and closer to the visitor, the width of the mighty Godavari becomes narrower.";
        document.getElementById("img2").src = "https://www.holidify.com/images/bgImages/PAPI-KONDALU.jpg";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "Warangal";
        document.getElementById("content3").innerHTML = "Warangal takes you back to the era of kings and queens with its beautiful historical sites and an impressive natural beauty with Parkhal Lake being worth checking out.";
        document.getElementById("img3").src = "https://www.holidify.com/res/images/patt.png";

    }
} else if (state == "Kerala") {
    if (category == "Historical Places") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "Mattancherry Palace, Kochi";
        document.getElementById("content1").innerHTML = "Popularly known as the Dutch Palace, the Mattancherry Palace is a Portuguese palace in Mattancherry, Kochi. The Mattancherry Palace was originally built by the Portuguese who later gifted it to the King of Cochin in 1555. It is now a museum displaying paraphernalia belonging to the rajas of Kochi. Visit this destination to learn about the fascinating history of Kerala through the medium of irreplaceable artefacts and embellishments.";
        document.getElementById("img1").src = "https://www.holidify.com/images/cmsuploads/compressed/attr_1101_20190412091253.jpg";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "Bekal Fort, Bekal";
        document.getElementById("content2").innerHTML = "Built almost 300 years ago, Bekal Fort is considered one of the largest and most preserved forts in Kerala. It is surrounded by a beautiful beach offering an enchanting view of the Arabian Sea from its high observation tower where once the cannons were placed. The fort was featured in the popular A R Rahman song ' Tu hi re'.";
        document.getElementById("img2").src = "https://www.holidify.com/images/cmsuploads/square/attr_1320.jpg";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "Edakkal Caves, Wayanad";
        document.getElementById("content3").innerHTML = "Famous for its exquisite rock and wall carvings, the pre-historic Edakkal Caves are two naturally occurring alcoves located in the Wayanad district of Kerala. The Edakkal caves are of historical and archaeological significance as it has carvings that date back to the Neolithic era, the late Stone Age. The stonework in the interior of the cave is estimated to be as old as 5000 BC to 1000 BC.";
        document.getElementById("img3").src = "https://www.holidify.com/images/cmsuploads/compressed/shutterstock_796295632_20200116122849_20200116122911.png";


    } else if (category == "Food") {
       /*set heading of page*/
       document.getElementById("heading").innerHTML = category + " IN " + state;

       /*first paragraph and its img*/
       document.getElementById("one").innerHTML = "";
       document.getElementById("content1").innerHTML = "";
       document.getElementById("img1").src = "";

       /*second paragraph and its img*/
       document.getElementById("two").innerHTML = "";
       document.getElementById("content2").innerHTML = "";
       document.getElementById("img2").src = "";

       /*third paragraph and its img*/
       document.getElementById("three").innerHTML = "";
       document.getElementById("content3").innerHTML = "";
       document.getElementById("img3").src = "";

    } else if (category == "Agriculture") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";


    } else if (category == "Textile and Fabric") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";

    } else if (category == "Culture") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "Culture";
        document.getElementById("content1").innerHTML = "Kerala traces its non-prehistoric cultural genesis to its membership (around the AD 3rd century) in a vaguely defined historical region known as Thamizhagom — a land defined by a common Tamil culture and encompassing the Chera, Chola, and Pandya kingdoms. At that time, the music, dance, language (first Dravida Bhasha — Dravidian language[6] — then Tamil), and Sangam (a vast corpus of Tamil literature composed between 1,500–2,000 years ago) found in Kerala were all similar to that found in the rest of Thamizhagom (today's Tamil Nadu). ";
        document.getElementById("img1").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Nileshwar_22.jpg/330px-Nileshwar_22.jpg";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "Folklore";
        document.getElementById("content2").innerHTML = "The folklore of Kerala includes elements from the traditional lifestyle of the people of Kerala. The traditional beliefs, customs, rituals etc. are reflected in the folkart and songs of Kerala. Kerala has a rich tradition of Folklore.[52] Folklore in this region is a spontaneous expression of human behavior and thoughts. Generally speaking, Folklore could be defined as the lore of the common people who had been marginalized during the reign of feudal Kings. The Keralites have their culture and lore which were mostly part of agricultural. Sowing, planting of nharu (seedling), clearing out the weeds, harvests etc. are the different stages of agriculture which have their typical rituals.";
        document.getElementById("img2").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Thirayattam%28Pookkutty_Thira%29.JPG/330px-Thirayattam%28Pookkutty_Thira%29.JPG";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "Overview";
        document.getElementById("content3").innerHTML = "The elephants are an integral part of the culture and daily life in Kerala. These Indian elephants are given a prestigious place in the state's culture. They are often christened names by which they're known across the entire state. Elephants in Kerala are often referred to as the 'sons of the sahya' and are indispensable for temple festivals. The elephant is the state animal of Kerala and is featured on the emblem of the Government of Kerala.";
        document.getElementById("img3").src = "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Thrippunithura-Elephant-end-of-pooram-2_crop.jpg/330px-Thrippunithura-Elephant-end-of-pooram-2_crop.jpg";

    } else {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "Munnar";
        document.getElementById("content1").innerHTML = "Popular among honeymooners, Munnar is a hill station in Kerala, located in the Idukki district. Lying in the Western Ghats at 1600 metres, it is one of the most sought after and visited travel destinations globally, especially popular amongst honeymooners. Munnar is famous for its tea estates.";
        document.getElementById("img1").src = "https://www.holidify.com/res/images/patt.png";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "Alleppy";
        document.getElementById("content2").innerHTML = "Officially called Alappuzha, Alleppey is the picture-perfect place known for its beautiful backwaters and the houseboats offering overnight stays. The coastline of Alleppey offers some of the best beaches in Kerala with water sports during the dry season.";
        document.getElementById("img2").src = "https://www.holidify.com/images/bgImages/ALLEPPEY.jpg";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "Kochi";
        document.getElementById("content3").innerHTML = "Situated on the southwest coast of India, Kochi or Cochin is a commercial port city with a trading history that dates back to at least 600 years. Called the Queen of the Arabian Sea, the city is Kerala's financial, commercial, and industrial capital.";
        document.getElementById("img3").src = "https://www.holidify.com/images/bgImages/KOCHI.jpg";

    }
} else if (state == "Jharkhand") {
    if (category == "Historical Places") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

       /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "Jagannath Temple, Ranchi";
        document.getElementById("content1").innerHTML = "The Jagannath temple is situated at the hilltop and has a rich mythological history. It is one of the most famous historic landmarks of Ranchi. The temple origins can be traced back to 1691. The temple is known to resemble the famous Jagannath temple in Puri. The most interesting fact related to the temple is that the idols are made of wood, unlike other temple’s idols which are made of clay and stone. The temple gathers a huge audience during the festival of Ratha Yatra when the idols are taken out of the temple.";
        document.getElementById("img1").src = "https://i0.wp.com/news.jugaadin.com/wp-content/uploads/2020/09/image-385.png?resize=263%2C198";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "Panch Gagh Falls, Ranchi";
        document.getElementById("content2").innerHTML = "Panch Gagh Falls is the most fascinating tourist attraction in Jharkhand. The place has five waterfalls flowing down through tall and steep hills. It is located near the scenic village of Khunti. The place provides a calm and soothing environment which makes it a good place for a picnic.";
        document.getElementById("img2").src = "https://i0.wp.com/news.jugaadin.com/wp-content/uploads/2020/09/image-386.png?w=348&ssl=1";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "Rajrappa Waterfall, Ramgarh";
        document.getElementById("content3").innerHTML = "Rajrappa Waterfalls in Ramgarh District in Jharkhand is basically a pilgrimage center. The main attraction of the place is Chhinnamasta temple, dedicated to the headless deity Chinnamasta that stands on the body of Rati and Kamdev in the lotus bed.";
        document.getElementById("img3").src = "https://i0.wp.com/news.jugaadin.com/wp-content/uploads/2020/09/image-387.png?resize=297%2C224";


    } else if (category == "Food") {
       /*set heading of page*/
       document.getElementById("heading").innerHTML = category + " IN " + state;

       /*first paragraph and its img*/
       document.getElementById("one").innerHTML = "";
       document.getElementById("content1").innerHTML = "";
       document.getElementById("img1").src = "";

       /*second paragraph and its img*/
       document.getElementById("two").innerHTML = "";
       document.getElementById("content2").innerHTML = "";
       document.getElementById("img2").src = "";

       /*third paragraph and its img*/
       document.getElementById("three").innerHTML = "";
       document.getElementById("content3").innerHTML = "";
       document.getElementById("img3").src = "";

    } else if (category == "Agriculture") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";


    } else if (category == "Textile and Fabric") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";

    } else if (category == "Culture") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "Culture";
        document.getElementById("content1").innerHTML = "Jharkhand culture is rich and diverse and as a result unique in its very own way. Jharkhand culture treats guests as God and serves them and takes care of them as if they are a part and parcel of the family itself. Archaeologists have unearthed pre-Harappa pottery, pre-historic cave paintings and rock-art from various parts of Jharkhand. That hint at ancient, cultured civilizations inhabiting these parts. The intricate woodwork, the pitkar paintings, tribal ornaments, stone carvings, dolls and figurines, masks and baskets, all are pointing towards the cultural wealth of Jharkhand existed even before the Harappa age. ";
        document.getElementById("img1").src = "https://www.traveljharkhand.com/jharkhand-tourism/jharkhand-overview/images/jharkhand-culture.jpg";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";

    } else {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";

    }
} else if (state == "Assam") {
    if (category == "Historical Places") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = " Hajo Powa Mecca, Hajo";
        document.getElementById("content1").innerHTML = "The word 'Powa' means 1/4th and hence, Powa Mecca figuratively refers to having some of the sanctity of Mecca. The tomb of Pir Giasuddin Auliya, a pioneer of Islam is located here. The Powa Mecca is located near the Madhava temple. It was constructed by Mir Lutufullah-i-Shiraji in 1657, during the rule of the Mughal Emperor Shahjahan. It is also believed that the foundation of the Mosque here was laid with the soil that was brought from Mecca.";
        document.getElementById("img1").src = "https://www.holidify.com/images/attr_square/1972.jpg";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = " Rang Ghar, Sibsagar";
        document.getElementById("content2").innerHTML = "Often referred to as the 'Colosseum of the East', Rang Ghar is one of the oldest surviving amphitheatres of Asia. It is located near Rangpur Palace at a distance of 3 km from Sibsagar town. The name translates to 'House of Entertainment' and dates back to 1746 A.D. when the Ahoms used to rule present-day Assam. This monument is an important historical place in Assam reflecting the architectural precision and grandeur of that time.";
        document.getElementById("img2").src = "https://www.holidify.com/images/cmsuploads/square/attr_3537.jpg";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "Talatal Ghar, Sibsagar";
        document.getElementById("content3").innerHTML = "The Talatal Ghar or the Rangpur Palace is situated in the northern region of Assam and is one of the most impressive of Tai Ahom architecture. Not only does it stand as a worthy testament to the vibrant Assamese culture and its rich history, but it is also the largest of all Ahom monuments in the entire world. This historical place in Assam is known for its architecture. Boasting of a typical Mughal architecture style, the upper ground floor of the Talatal Ghar is popularly known as Kareng Ghar and was used by as a live-in palace by the royalty of Assam.";
        document.getElementById("img3").src = "https://www.holidify.com/images/cmsuploads/square/attr_3540.jpg";


    } else if (category == "Food") {
       /*set heading of page*/
       document.getElementById("heading").innerHTML = category + " IN " + state;

       /*first paragraph and its img*/
       document.getElementById("one").innerHTML = "";
       document.getElementById("content1").innerHTML = "";
       document.getElementById("img1").src = "";

       /*second paragraph and its img*/
       document.getElementById("two").innerHTML = "";
       document.getElementById("content2").innerHTML = "";
       document.getElementById("img2").src = "";

       /*third paragraph and its img*/
       document.getElementById("three").innerHTML = "";
       document.getElementById("content3").innerHTML = "";
       document.getElementById("img3").src = "";

    } else if (category == "Agriculture") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";


    } else if (category == "Textile and Fabric") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";

    } else if (category == "Culture") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";

    } else {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";

    }
} else if (state == "Punjab") {
    if (category == "Historical Places") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

         /*first paragraph and its img*/
        document.getElementById("one").innerHTML = " Golden Temple - Most famous historical place in Punjab";
        document.getElementById("content1").innerHTML = "One of the most spiritual places in India, Golden Temple, also known as Sri Harmandir Sahib, is the holiest shrines in Sikhism and is alive with religious fervour and sacredness. Its divinity is a thing that can only be experienced and not described. In spite of the thousands of people milling about in the premises of the temple, the only voice you will hear around you is silence interspersed with chants of the Sikh prayers.";
        document.getElementById("img1").src = "https://www.holidify.com/images/compressed/1250.jpg";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "Jallianwala Bagh";
        document.getElementById("content2").innerHTML = "allianwala Bagh was a great historical place in Punjab during the Indian struggle for Independence. It is a public garden in Amritsar which houses a memorial of national importance that was established by the government of India in 1951 to commemorate the massacre of peaceful celebrators by the British forces on April 13, 1919.";
        document.getElementById("img2").src = "https://www.holidify.com/images/compressed/1254.jpg";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "Wagah Border - Patriotic Historical place in Punjab";
        document.getElementById("content3").innerHTML = "Wagah Border is a road border between India and Pakistan. It is a famous tourist spot nowadays because of the famous beating retreat ceremony that is held every day before sunset. Almost 5,000 people visit the border to be a part of this ceremony. The flag ceremony is conducted by the Indian Border Security Force and Pakistan Rangers.";
        document.getElementById("img3").src = "https://www.holidify.com/images/compressed/1259.jpg";

    } else if (category == "Food") {
       /*set heading of page*/
       document.getElementById("heading").innerHTML = category + " IN " + state;

       /*first paragraph and its img*/
       document.getElementById("one").innerHTML = "";
       document.getElementById("content1").innerHTML = "";
       document.getElementById("img1").src = "";

       /*second paragraph and its img*/
       document.getElementById("two").innerHTML = "";
       document.getElementById("content2").innerHTML = "";
       document.getElementById("img2").src = "";

       /*third paragraph and its img*/
       document.getElementById("three").innerHTML = "";
       document.getElementById("content3").innerHTML = "";
       document.getElementById("img3").src = "";

    } else if (category == "Agriculture") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";


    } else if (category == "Textile and Fabric") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";

    } else if (category == "Culture") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";

    } else {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";

    }
} else if (state == "Chhattisgarh") {
    if (category == "Historical Places") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

       /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "Bastar Palace";
        document.getElementById("content1").innerHTML = "Bastar Palace is an archaic palace which was constructed when the Kings of Bastar moved their capital to Jagdalpur. The palace has intriguing wall cravings on the walls that adds to its beauty. It is in every sense an architectural marvel that speaks boldly of the bravery of the rulers who ruled there. There is a monument built inside the grounds of the palace. It was made by the government and puts forth portraits and artefacts of the rulers from the past. When here, you must definitely take a ride on the horse carriage. ";
        document.getElementById("img1").src = "https://images.thrillophilia.com/image/upload/s--avzS94ch--/c_fill,g_center,h_460,q_auto,w_768/dpr_1.0,f_auto,fl_strip_profile/v1/images/photos/000/111/326/original/1493709198_Bastar_2BPalace_2Bin_2BJagdalpur.jpg.jpg";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "Kanker Palace";
        document.getElementById("content2").innerHTML = "Kanker Palace is another significant historical place in Chhattisgarh that was initially constructed in the 20th century. Originally known as the Radhanivas Bagicha, the palace was later on re built in the year 1937. This magnificently elegant palace showcases the influence of colonial architecture. Since the palace is located amidst the picturesque landscape with lush gardens enveloping it, the entire view is breath-taking. You can enjoy a couple of activities here such as jeep safaris, boat safaris and others.";
        document.getElementById("img2").src = "https://images.thrillophilia.com/image/upload/s--nAKfWJoJ--/c_fill,g_center,h_460,q_auto,w_768/dpr_1.0,f_auto,fl_strip_profile/v1/images/photos/000/111/327/original/1493710297_1.jpg.jpg";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "Bhoramdeo Temple";
        document.getElementById("content3").innerHTML = "If you are a history lover, Bhoramdeo Temple is one place that you simply cannot afford to miss. It will give you a feeling of being a part of that historical era. Built between the 7th to the 11th centuries, the Bhoramdeo Temple is referred to as Khajuraho of Chhattisgarh by many. Nestled amidst the magnificent setting of mighty Maikal mountains, the top of the temple offers spectacular views. This is also believed to be one of the most beautifully decorated temples. You can find several erotic and religious sculptures inside the temple.";
        document.getElementById("img3").src = "https://images.thrillophilia.com/image/upload/s--zaJbmmRo--/c_fill,g_center,h_460,q_auto,w_768/dpr_1.0,f_auto,fl_strip_profile/v1/images/photos/000/111/328/original/1493710525_Bhoramdeo_Temple_2C_Kawardha.jpg.jpg";


    } else if (category == "Food") {
       /*set heading of page*/
       document.getElementById("heading").innerHTML = category + " IN " + state;

       /*first paragraph and its img*/
       document.getElementById("one").innerHTML = "";
       document.getElementById("content1").innerHTML = "";
       document.getElementById("img1").src = "";

       /*second paragraph and its img*/
       document.getElementById("two").innerHTML = "";
       document.getElementById("content2").innerHTML = "";
       document.getElementById("img2").src = "";

       /*third paragraph and its img*/
       document.getElementById("three").innerHTML = "";
       document.getElementById("content3").innerHTML = "";
       document.getElementById("img3").src = "";

    } else if (category == "Agriculture") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";


    } else if (category == "Textile and Fabric") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";

    } else if (category == "Culture") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";

    } else {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";

    }
} else if (state == "Haryana") {
    if (category == "Historical Places") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "Farrukh Nagar Fort";
        document.getElementById("content1").innerHTML = "Built in the year 1732 by the Mughal emperor Faujdar Khan, the Farrukhnagar fort is the quintessential Mughal structure, adorned by various designs dating back to the said era. Featuring an octagonal shape, the fort is also home to one of the most distinguished bastions in the country. ";
        document.getElementById("img1").src = "https://res.cloudinary.com/thrillophilia/image/upload/c_fill,dpr_1.0,f_auto,fl_progressive.strip_profile,g_center,h_460,q_auto,w_768/v1/filestore/tiioymckvvbplth9op6qhq6bhul9_14417392523.JPG";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "Sheikh Chillis Tomb";
        document.getElementById("content2").innerHTML = "Established in Circa 17th Century AD, this elegant structure is the eternal resting place of the venerable Sufi saint Abdur Abdur-Rahim. He was popularly known as Sheikh Chilli or Chili and Dara Shikoh, the eldest son of the Mughal Emperor Shahjahan, was a devotee and disciple of this erudite scholar. Moreover, Sheikh Chilli's Tomb is constructed in beige sandstone, has a white marble lofty pear-shaped dome and delicate Parisian overtones that are imbued in this charming edifice.";
        document.getElementById("img2").src = "https://res.cloudinary.com/thrillophilia/image/upload/c_fill,dpr_1.0,f_auto,fl_progressive.strip_profile,g_center,h_460,q_auto,w_768/v1/filestore/vay65ahbas6rmp22pe981m3031wk_1585048452_shutterstock_1295846953.jpg";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "Srikrishna Museum";
        document.getElementById("content3").innerHTML = "The museum was founded in 1987 and inaugurated by Sri R. Venkataraman, the then president of India. In February 2012, President Ms Pratibha Patil opened two new blocks that house the Gita Gallery and Multimedia Mahabharata. The museum is dedicated to the Hindu deity Lord Vishnu’s Krishna avatar, where his several incarnations as described in the Mahabharata and Bhagavata Purana are depicted through paintings, sculptures, manuscripts, antique relics and other objects.";
        document.getElementById("img3").src = "https://res.cloudinary.com/thrillophilia/image/upload/c_fill,dpr_1.0,f_auto,fl_progressive.strip_profile,g_center,h_460,q_auto,w_768/v1/filestore/uprsb4uzsmqzxfwogbx60yb95uhc_1600321520_Sri_Krishna_Sangrahalay__Kuruksh.jpg";


    } else if (category == "Food") {
       /*set heading of page*/
       document.getElementById("heading").innerHTML = category + " IN " + state;

       /*first paragraph and its img*/
       document.getElementById("one").innerHTML = "";
       document.getElementById("content1").innerHTML = "";
       document.getElementById("img1").src = "";

       /*second paragraph and its img*/
       document.getElementById("two").innerHTML = "";
       document.getElementById("content2").innerHTML = "";
       document.getElementById("img2").src = "";

       /*third paragraph and its img*/
       document.getElementById("three").innerHTML = "";
       document.getElementById("content3").innerHTML = "";
       document.getElementById("img3").src = "";

    } else if (category == "Agriculture") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";


    } else if (category == "Textile and Fabric") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";

    } else if (category == "Culture") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";

    } else {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";

    }
} else if (state == "Jammu and Kashmir") {
    if (category == "Historical Places") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "Hari Parbat Fort-Srinagar";
        document.getElementById("content1").innerHTML = "It is one of the popular monuments in Srinagar where not a single tourist wants to miss their visit. The fort is visible from everywhere in Srinagar city. This structure is famous for its breathtaking surroundings enclosed by dense forests, erotic gardens and luxuriant plains. Hari Parbat is also a pilgrimage site for Sarika Devi devotes and that’s why it is mostly visited by tourists every year.";
        document.getElementById("img1").src = "https://media.easemytrip.com/media/Blog/India/637050275782369986/637050275782369986Noy3Gu.jpg";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "Leh Palace-Ladakh";
        document.getElementById("content2").innerHTML = "The Leh Palace is prevalent as ‘Lhachen Palkhar’ and it is the impeccable example of medieval Tibetan architecture. One can enjoy the outstanding panoramic views of Ladakh Mountains and Stok Kangri along with its serene surroundings. At present, the place is in a dilapidated condition but you can still enjoy the artifacts stored in the museum of this majestic building. The whole castle is built of stones, sand, wood, and mud.";
        document.getElementById("img2").src = "https://media.easemytrip.com/media/Blog/India/637050275782369986/6370502757823699869hUcBa.jpg";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "Mubarak Mandi Palace-Jammu";
        document.getElementById("content3").innerHTML = "It is one of the most attractive tourist destinations which were once a royal residence of Dogra King. It is one of the noteworthy heritage places in Jammu that indicates the 160 years old history. The architecture of this Palace is a perfect amalgamation of Rajasthani architecture, Mughal styles and European Baroque. Its complex consists of multiple buildings and palaces like Royal Courts, Gol Ghar Complex, Rani Charak Palace, Hawa Mahal, Pink Palace, Sheesh Mahal, etc. ";
        document.getElementById("img3").src = "https://media.easemytrip.com/media/Blog/India/637050275782369986/637050275782369986qbHNRz.jpg";


    } else if (category == "Food") {
       /*set heading of page*/
       document.getElementById("heading").innerHTML = category + " IN " + state;

       /*first paragraph and its img*/
       document.getElementById("one").innerHTML = "";
       document.getElementById("content1").innerHTML = "";
       document.getElementById("img1").src = "";

       /*second paragraph and its img*/
       document.getElementById("two").innerHTML = "";
       document.getElementById("content2").innerHTML = "";
       document.getElementById("img2").src = "";

       /*third paragraph and its img*/
       document.getElementById("three").innerHTML = "";
       document.getElementById("content3").innerHTML = "";
       document.getElementById("img3").src = "";

    } else if (category == "Agriculture") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";


    } else if (category == "Textile and Fabric") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";

    } else if (category == "Culture") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";

    } else {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";

    }
} else if (state == "Uttarakhand") {
    if (category == "Historical Places") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

      /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "Narendra Nagar, Tehri Garhwal District";
        document.getElementById("content1").innerHTML = "Once, the part of Tehri Riyasat, Narendra Nagar is a historical town of Garhwal region. Ruled for a very long time by Shah Rulers, Narendra Nagar has many evidences to prove the majesty of the Garhwal Kingdom. Maharaja Narendra Shah shifted his capital to this beautiful town in 1919 and constructed several buildings that are still in use as hospital and secretariat. The royal palace of Narendra Shah, which also the home to an incredible spa destination: Ananda- Inn the Himalayas is the highlight of this town.";
        document.getElementById("img1").src = "https://www.tourmyindia.com/blog//wp-content/uploads/2015/07/narendra-nagar-tehri.jpg";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "Chaukhutia, Almora District";
        document.getElementById("content2").innerHTML = "Famous as Rangilo Gewar, Chaukhutia is a sleepy town in Kumaon region. Rising to fame during the Katyuri rule, Chaukhutia is an appreciable place to witness the rich history of Uttarakhand. The town preserves the remnants of the Katyuri dynasty in the form of fort and temples. The legend has it that Pandavas from the epic Mahabharata also stopped here for a short period while they were in exile. It is believed that Pandukholi caves found in Chaukhutia have been built and adorned by Pandavas and are truly a site to visit.";
        document.getElementById("img2").src = "https://www.tourmyindia.com/blog//wp-content/uploads/2015/07/chaukhutia-tourist-attractions.jpg";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "Lohaghat, Champawat District";
        document.getElementById("content3").innerHTML = "Situated on the bank of Lohawati River in Champawat district of Uttarakhand, Lohaghat is reckoned to be important destination in the state. An ancient town, Lohaghat is known for its temples that are more than a century old. This historic city is a witness to several historical events in the bygone era and each event is believed to have been marked by the construction of one temple each time. Places like Abbot Mount, Mayawati Ashram, Jhuma Devi and Advaita Ashram are major attractions here. ";
        document.getElementById("img3").src = "https://www.tourmyindia.com/blog//wp-content/uploads/2015/07/lohaghat-jhuma-devi-temple.jpg";


    } else if (category == "Food") {
       /*set heading of page*/
       document.getElementById("heading").innerHTML = category + " IN " + state;

       /*first paragraph and its img*/
       document.getElementById("one").innerHTML = "";
       document.getElementById("content1").innerHTML = "";
       document.getElementById("img1").src = "";

       /*second paragraph and its img*/
       document.getElementById("two").innerHTML = "";
       document.getElementById("content2").innerHTML = "";
       document.getElementById("img2").src = "";

       /*third paragraph and its img*/
       document.getElementById("three").innerHTML = "";
       document.getElementById("content3").innerHTML = "";
       document.getElementById("img3").src = "";

    } else if (category == "Agriculture") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";


    } else if (category == "Textile and Fabric") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";

    } else if (category == "Culture") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";

    } else {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";

    }
} else if (state == "Himachal Pradesh") {
    if (category == "Historical Places") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = " Hadimba Temple, Manali";
        document.getElementById("content1").innerHTML = "Hadimba Temple, Manali, one of the best places to visit in Himachal, is placed on a rock, which according to Hindu mythology is image of Goddess Hidimba. The temple is dedicated to Hidimba, wife of Bhima. The temple looks very different from other Hindu temple as the doors are made of wood and the roof is cone-shaped. The temple is surrounded by cedar forest. The temple is not only famous for its historical significance but also for its scenic surroundings.";
        document.getElementById("img1").src = "https://www.revv.co.in/blogs/wp-content/uploads/2020/07/Hadimba-Temple-Manali-1.jpg";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "Kangra Fort";
        document.getElementById("content2").innerHTML = "Kangra Fort is one of the historical places in Himachal Pradesh, which dates back to the period of Hindu epic Mahabharata. This fort was ruled by Trigarta Kingdom. This is the oldest fort in the country and the largest fort in the Himalayas. This fort was highly protected by the Kings to keep the treasures safe.";
        document.getElementById("img2").src = "https://cdn.s3waas.gov.in/s348aedb8880cab8c45637abc7493ecddd/uploads/bfi_thumb/2018040490-olw8is597ukq4uz3cixs8zkquectpe2df7sbj8ebnu.jpg";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "Jaitak Fort, Nahan";
        document.getElementById("content3").innerHTML = "Located on the top of Jaitak Hills, the Jaitak Fort was constructed in 1810, by Ranjor Singh Thapa, a Gurkha leader. This fort was built with materials that were recovered from the Nahan fort after it was destroyed.  The fort is located at proximity of 25 km from Nahan.";
        document.getElementById("img3").src = "https://www.gosahin.com/go/p/j/1583577740_jaitak-fort1.jpg";

    } else if (category == "Food") {
       /*set heading of page*/
       document.getElementById("heading").innerHTML = category + " IN " + state;

       /*first paragraph and its img*/
       document.getElementById("one").innerHTML = "";
       document.getElementById("content1").innerHTML = "";
       document.getElementById("img1").src = "";

       /*second paragraph and its img*/
       document.getElementById("two").innerHTML = "";
       document.getElementById("content2").innerHTML = "";
       document.getElementById("img2").src = "";

       /*third paragraph and its img*/
       document.getElementById("three").innerHTML = "";
       document.getElementById("content3").innerHTML = "";
       document.getElementById("img3").src = "";

    } else if (category == "Agriculture") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";


    } else if (category == "Textile and Fabric") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";

    } else if (category == "Culture") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";

    } else {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";

    }
} else if (state == "Tripura") {
    if (category == "Historical Places") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "Agartala";
        document.getElementById("content1").innerHTML = "Agartala is the capital of Tripura, is one of the largest cities in that state and one of the most popular places to visit in Tripura. The place is famous for its terrains which are full of green pastures, hills and beautiful valleys. The main attraction of this place is Ujjayanta Palace. You would require to plan at least two days if you wish to cover Agartala in detail. Ujjayanta Palace is a royal house built by Maharaja Radha Kishore Manikya in 1899.";
        document.getElementById("img1").src = "https://img.traveltriangle.com/blog/wp-content/uploads/2020/01/Agartala-400x229.jpg";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "Melaghar";
        document.getElementById("content2").innerHTML = "Melaghar is also a town located 50 km from Agartala. The place is famous for Neermahal which is situated in the middle of Rudrasagar Lake. The place has got very peaceful vibes. It is also famous for Durga Puja Festival. The entire town looked blessed when it is lit with beautiful lights during this festival. There are various puja pandals played across the roads and everybody seems to enjoy it. Another festival, which is dearly celebrated in Melaghar is Ratha Yatra which is held every year in July.";
        document.getElementById("img2").src = "https://img.traveltriangle.com/blog/wp-content/uploads/2019/12/Melaghar-Tripura-400x229.jpg";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = " Kailashahar";
        document.getElementById("content3").innerHTML = "Kailashahar is another town in the state of Tripura and is located very near to Bangladesh borders which makes it one of the best places to visit in Tripura. The town was the capital of Tripura in ancient times and have roots associated with Unakoti. The main festival of Kailashahar is Durga puja and the city is decorated with fancy lights and Goddess Durga pandals. ";
        document.getElementById("img3").src = "https://img.traveltriangle.com/blog/wp-content/uploads/2019/12/Kailashahar-Tripura-400x229.jpg";


    } else if (category == "Food") {
       /*set heading of page*/
       document.getElementById("heading").innerHTML = category + " IN " + state;

       /*first paragraph and its img*/
       document.getElementById("one").innerHTML = "";
       document.getElementById("content1").innerHTML = "";
       document.getElementById("img1").src = "";

       /*second paragraph and its img*/
       document.getElementById("two").innerHTML = "";
       document.getElementById("content2").innerHTML = "";
       document.getElementById("img2").src = "";

       /*third paragraph and its img*/
       document.getElementById("three").innerHTML = "";
       document.getElementById("content3").innerHTML = "";
       document.getElementById("img3").src = "";

    } else if (category == "Agriculture") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";


    } else if (category == "Textile and Fabric") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";

    } else if (category == "Culture") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";

    } else {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";

    }
} else if (state == "Meghalaya") {
    if (category == "Historical Places") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "Megalithic Bridge on the Um-Nyankanah";
        document.getElementById("content1").innerHTML = "This megalithic bridge is built over the Um-Nyankanah River, supported by huge stone pillars. According to local legends, the Jaintia Kings gave orders to build this bridge during the  medieval period. They constructed several of these megalithic bridges built over 100s years to promote trade between their ruling cities and provide means of communication and movement of their armies. For history buffs and heritage lovers, this stone bridge is one of the must-visit historical monuments of Meghalaya. The bridge is under Archaeological Survey of India’s (ASI) protection.";
        document.getElementById("img1").src = "https://ihplb.b-cdn.net/wp-content/uploads/2021/01/Megalithic-Bridge-on-the-Um-Nyankanah-1.jpg";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "Narthiang Monoliths";
        document.getElementById("content2").innerHTML = "Nartiang Monoliths in Meghalaya’s Jaintia Hills are considered among some of the tallest in the world. These were built to honor the erstwhile Jaintia Kings and consist of Menhirs or Moo Shynrang and Dolmens or Moo Kynthai.As per the local legends, the tallest of these monoliths, known locally as Moo Long Syiem stands 26 feet.";
        document.getElementById("img2").src = "https://ihplb.b-cdn.net/wp-content/uploads/2021/01/Narthiang-Monoliths.jpg";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "Kiang Nongbah Monument";
        document.getElementById("content3").innerHTML = "A memorial to Jaintia King U Kiang Nangbah’s valor, Kiang Nongbah Monument, was constructed on the banks of the Myntdu River. It is located in Madlah Kmal Blai in Jowai’s Syntu Ksiar Valley. This historical monument is worth a visit for its significance in the history of India’s Independence struggle.";
        document.getElementById("img3").src = "https://ihplb.b-cdn.net/wp-content/uploads/2021/01/Kiang-Nongbah-Monument.jpg";


    } else if (category == "Food") {
       /*set heading of page*/
       document.getElementById("heading").innerHTML = category + " IN " + state;

       /*first paragraph and its img*/
       document.getElementById("one").innerHTML = "";
       document.getElementById("content1").innerHTML = "";
       document.getElementById("img1").src = "";

       /*second paragraph and its img*/
       document.getElementById("two").innerHTML = "";
       document.getElementById("content2").innerHTML = "";
       document.getElementById("img2").src = "";

       /*third paragraph and its img*/
       document.getElementById("three").innerHTML = "";
       document.getElementById("content3").innerHTML = "";
       document.getElementById("img3").src = "";

    } else if (category == "Agriculture") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";


    } else if (category == "Textile and Fabric") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";

    } else if (category == "Culture") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";

    } else {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";

    }
} else if (state == "Manipur") {
    if (category == "Historical Places") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "Senapati – For A Cultural Insight";
        document.getElementById("content1").innerHTML = "Blessed with nature’s bounty, Senapati is a simple yet intriguing hideout and one of the best tourist places in Manipur. Almost 80 percent of the area here is covered in verdant forests, and the rest of it is inhabited by villagers. The hamlet makes for an ideal escape for someone longing for a cultural insight to Manipur. You could be spending the day exploring the woodland and in the evening spend time with locals, who knows may as well cook something special for you.";
        document.getElementById("img1").src = "https://img.traveltriangle.com/blog/wp-content/uploads/2018/02/senapati-400x221.jpg";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "Khongjom – Remembering The Brave Legends";
        document.getElementById("content2").innerHTML = "A place that pays a tribute to the military, Khongjom is one of the best Manipur destinations. Right here, the revered major general, Paona Brajabashi with his troops fought with British during their reign. The was is known as Anglo-Manipur War. Today there is a memorial built in remembrance of the brave fighters, which holds historical importance. The place is perfect for an Indian patriot, or anyone with interest in military and the history of wars.";
        document.getElementById("img2").src = "https://img.traveltriangle.com/blog/wp-content/uploads/2019/01/Khongjom-400x261.jpg";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = " Ukhrul – Where Tranquility Prevails";
        document.getElementById("content3").innerHTML = "Known for its scenic splendour, Ukhrul is among the best places to see in Manipur. The natural beauty is such that you could meditate for hours and find peace of mind. When planning to spend time here, just have plenty of time in your hands as you might consider an extended stay. Trekking and tea garden visit are among the most common activities in Ukhrul. It is one of the most stunning places to visit in Manipur. ";
        document.getElementById("img3").src = "https://img.traveltriangle.com/blog/wp-content/uploads/2019/01/Ukhrul-%E2%80%93-Where-Tranquility-Prevails-400x261.jpg";


    } else if (category == "Food") {
       /*set heading of page*/
       document.getElementById("heading").innerHTML = category + " IN " + state;

       /*first paragraph and its img*/
       document.getElementById("one").innerHTML = "";
       document.getElementById("content1").innerHTML = "";
       document.getElementById("img1").src = "";

       /*second paragraph and its img*/
       document.getElementById("two").innerHTML = "";
       document.getElementById("content2").innerHTML = "";
       document.getElementById("img2").src = "";

       /*third paragraph and its img*/
       document.getElementById("three").innerHTML = "";
       document.getElementById("content3").innerHTML = "";
       document.getElementById("img3").src = "";

    } else if (category == "Agriculture") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";


    } else if (category == "Textile and Fabric") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";

    } else if (category == "Culture") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";

    } else {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";

    }
} else if (state == "Nagaland") {
    if (category == "Historical Places") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

         /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "Kohima – Untouched Nature";
        document.getElementById("content1").innerHTML = "The capital of Nagaland deserves to be on the must-visit list of everyone. Kohima, originally Kewhira, is pure bliss for anyone who loves being amidst untouched nature. It is located at a height of 1500 meters above sea level. It is surrounded by breath-taking mountains and forests. One can also indulge in adventures like trekking, hiking, and camping in this region. This place is home to the Angami tribe.";
        document.getElementById("img1").src = "https://img.traveltriangle.com/blog/wp-content/uploads/2020/01/Kohima_16th-Jan-400x228.jpg";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "Wokha – Exotic Flora And Fauna";
        document.getElementById("content2").innerHTML = "As you reach Wokha, the hills and green landscape, constant in the state, turn livelier and prettier. You will find scores of plants bursting with multicolored flowers, juicy and fresh fruits and freely flowing rivers enchanting with their beauty. The tribe that resides here is the Lotha tribe.";
        document.getElementById("img2").src = "https://img.traveltriangle.com/blog/wp-content/uploads/2020/01/Wokha_16th-Jan-400x229.jpg";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = " Kiphire";
        document.getElementById("content3").innerHTML = "If you are seeking adventurous time in the lap of nature, Kiphire is your place. It is home to the highest peak in Nagaland- Saramati. Spend 3 days trekking in this awe-inspiring mountain range passing through a beautiful Rhododendron forest. There are several other popular adventures offering attractions in and around Kiphire like Cavers’ delight, Sukhayap or Lover’s Paradise, and Wawade.";
        document.getElementById("img3").src = "https://img.traveltriangle.com/blog/wp-content/uploads/2020/01/Kiphire_16th-Jan-400x229.jpg";


    } else if (category == "Food") {
       /*set heading of page*/
       document.getElementById("heading").innerHTML = category + " IN " + state;

       /*first paragraph and its img*/
       document.getElementById("one").innerHTML = "";
       document.getElementById("content1").innerHTML = "";
       document.getElementById("img1").src = "";

       /*second paragraph and its img*/
       document.getElementById("two").innerHTML = "";
       document.getElementById("content2").innerHTML = "";
       document.getElementById("img2").src = "";

       /*third paragraph and its img*/
       document.getElementById("three").innerHTML = "";
       document.getElementById("content3").innerHTML = "";
       document.getElementById("img3").src = "";

    } else if (category == "Agriculture") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";


    } else if (category == "Textile and Fabric") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";

    } else if (category == "Culture") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";

    } else {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";

    }
} else if (state == "Goa") {
    if (category == "Historical Places") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

       /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "Basilica of Bom Jesus - Most famous historical place in Goa";
        document.getElementById("content1").innerHTML = "This historical place in Goa is a UNESCO World Heritage Site. The Basilica of Bom Jesus houses the tomb and remains of St. Francis Xavier. Even after 400 years, the remains are in a good condition and are taken out once every decade. Up until half a century ago, Goa was the capital of Portuguese rule in India and this is part of their heritage.";
        document.getElementById("img1").src = "https://www.holidify.com/images/compressed/3198.jpg";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "Se Cathedral";
        document.getElementById("content2").innerHTML = "One of the largest churches in the whole of Asia, Se Cathedral took nearly 80 years to get constructed. It was established to remember the victory of the Portuguese over the Muslim rulers in the city.";
        document.getElementById("img2").src = "https://www.holidify.com/images/compressed/4372.jpg";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "Fort Aguada";
        document.getElementById("content3").innerHTML = "Fort Aguada and its lighthouse is a 17th century Portuguese Fort which stands till date on Sinquerim Beach, Goa. It was built in 1612 to provide protection from Dutch and Marathas. It is the most priced and crucial historical place in Goa. It was also used as a prison for Salazar's political opponents. Built on river Mandovi, it covers the entire peninsula at the southwestern tip of Bardez."";
        document.getElementById("img3").src = "https://www.holidify.com/images/compressed/4369.jpg";


    } else if (category == "Food") {
       /*set heading of page*/
       document.getElementById("heading").innerHTML = category + " IN " + state;

       /*first paragraph and its img*/
       document.getElementById("one").innerHTML = "";
       document.getElementById("content1").innerHTML = "";
       document.getElementById("img1").src = "";

       /*second paragraph and its img*/
       document.getElementById("two").innerHTML = "";
       document.getElementById("content2").innerHTML = "";
       document.getElementById("img2").src = "";

       /*third paragraph and its img*/
       document.getElementById("three").innerHTML = "";
       document.getElementById("content3").innerHTML = "";
       document.getElementById("img3").src = "";

    } else if (category == "Agriculture") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";


    } else if (category == "Textile and Fabric") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";

    } else if (category == "Culture") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";

    } else {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";

    }
} else if (state == "Arunachal Pradesh") {
    if (category == "Historical Places") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "Bomdila";
        document.getElementById("content1").innerHTML = "Bomdila is a remarkable tourist attraction in Arunachal Pradesh. This place is located 8000 feet and is a perfect place where you can ensnare the snow-clad peaks of the mighty Himalayas. Apart from being natures bounty, as it is bestowed with tantalizing meadows, Bomdila houses numerous places like the Buddhist monasteries, Hindu temples, wildlife sanctuaries etc. Whilst being in Bomdila, you can also experience the thrill of trekking in the";
        document.getElementById("img1").src = "https://dynamic.tourtravelworld.com/blog_images/bomdila-20170703051150.jpg";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "Pasighat";
        document.getElementById("content2").innerHTML = "The tranquility floats in the air; theres a mind-calming serenity that will make you succumb to nature. We feel this line is apt to define the spectacular site of Pasighat. With the backdrop of misty and snow-capped Himalayan peaks, Pasighat is a haven for those that adore nature. The river Brahmaputra flows through the region. At Pasighat, people witness the amalgamation of peace and adventure, which means that it is a place where you can relish the sports like river rafting, trekking, and angling etc.";
        document.getElementById("img2").src = "https://dynamic.tourtravelworld.com/blog_images/pasighat-20170703050601.jpg";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "Itanagar";
        document.getElementById("content3").innerHTML = "Missing out the name of the capital city of Arunachal Pradesh isnt right. The city of Itanagar is a marvelous place to visit in Arunachal Pradesh. Beckoned by the murky Himalayas, there are numerous attractions in Itanagar that make it stand amid the prime places of interest in Arunachal Pradesh. You can visit Ita Fort that is constructed using the special bricks. Itanagar Wildlife Sanctuary is another place that is a great choice for spending a day among the friends with a tail.";
        document.getElementById("img3").src = "https://dynamic.tourtravelworld.com/blog_images/itanagar-20170703050552.jpg";


    } else if (category == "Food") {
       /*set heading of page*/
       document.getElementById("heading").innerHTML = category + " IN " + state;

       /*first paragraph and its img*/
       document.getElementById("one").innerHTML = "";
       document.getElementById("content1").innerHTML = "";
       document.getElementById("img1").src = "";

       /*second paragraph and its img*/
       document.getElementById("two").innerHTML = "";
       document.getElementById("content2").innerHTML = "";
       document.getElementById("img2").src = "";

       /*third paragraph and its img*/
       document.getElementById("three").innerHTML = "";
       document.getElementById("content3").innerHTML = "";
       document.getElementById("img3").src = "";

    } else if (category == "Agriculture") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";


    } else if (category == "Textile and Fabric") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";

    } else if (category == "Culture") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";

    } else {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";

    }
} else if (state == "Mizoram") {
    if (category == "Historical Places") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "Aizawl";
        document.getElementById("content1").innerHTML = "Have you ever dreamt of a paradise on earth? Then, that dream is going to turn into reality at Aizawl. This is one of the oldest cities of Mizoram and attracts a lot of tourists because of the picturesque views it offers. The tranquil setup of this quaint town can leave your mind, body, and soul totally relaxed. This town has plenty of Mizoram tourist places for visitors. ";
        document.getElementById("img1").src = "https://img.traveltriangle.com/blog/wp-content/uploads/2019/12/Aizawl-400x229.jpg";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = " Mamit – Haven For Wildlife Enthusiasts";
        document.getElementById("content2").innerHTML = "Mamit is one of the top tourist attractions in Mizoram. There are a lot of attractions in this place and most of the wildlife enthusiasts love to go to Mamit. The Dampa Wildlife Sanctuary is one of the best attractions to visit here and you can spot peacock, Malabar pied hornbill, crested serpent eagle, and emerald-dove. If you love to be in the wild, this is the best place to visit. You can spot some of the rarest species like rhesus macaque and leaf monkeys too.";
        document.getElementById("img2").src = "https://img.traveltriangle.com/blog/wp-content/uploads/2019/12/Mamit-400x229.jpg";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "Reiek – Bask In The Sunlight";
        document.getElementById("content3").innerHTML = "Experience the lovely village life basking in the sun amidst the lush green fields of Reiek. For an offbeat experience in Mizoram, one must visit this village to enjoy to the fullest. If you are a traveler and want to feel every single second of your life then, this is the place you must live at for a few weeks. A walk in this village would leave you rejuvenated totally.";
        document.getElementById("img3").src = "https://img.traveltriangle.com/blog/wp-content/uploads/2019/12/Reiek-400x229.jpg";


    } else if (category == "Food") {
       /*set heading of page*/
       document.getElementById("heading").innerHTML = category + " IN " + state;

       /*first paragraph and its img*/
       document.getElementById("one").innerHTML = "";
       document.getElementById("content1").innerHTML = "";
       document.getElementById("img1").src = "";

       /*second paragraph and its img*/
       document.getElementById("two").innerHTML = "";
       document.getElementById("content2").innerHTML = "";
       document.getElementById("img2").src = "";

       /*third paragraph and its img*/
       document.getElementById("three").innerHTML = "";
       document.getElementById("content3").innerHTML = "";
       document.getElementById("img3").src = "";

    } else if (category == "Agriculture") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";


    } else if (category == "Textile and Fabric") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";

    } else if (category == "Culture") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";

    } else {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";

    }
} else if (state == "Sikkim") {
    if (category == "Historical Places") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

         /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "Pemayangtse Monastery";
        document.getElementById("content1").innerHTML = "Located around 140 kilometres west from Gangtok, Sikkim, the monastery was founded in 1705 by Lama Lhatsun Chempo, and is one of the oldest monasteries in Sikkim. Pemayangtse Monastery was built for “pure monks” (ta-tshang) meaning “monks of pure Tibetan lineage”, celibate and without any physical abnormality. This practice is still retained. Only the monks of Pemayangtse Monastery are entitled to the title “ta-tshang”.";
        document.getElementById("img1").src = "https://www.transindiatravels.com/wp-content/uploads/pemayangtse-monastery-2.jpg";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = " Rumtek Monastery";
        document.getElementById("content2").innerHTML = "Rumtek Monastery was built in the 16th century around the same time as the other 2 monasteries established by the 9th Karmapa Wangchuk Dorje and was the main seat of the karma Kagyu lineage for some time and was eventually abandoned to ruins. When the 16th Karmapa arrived in Sikkim in 1959, he decided to rebuild the monastery as the site was considered highly auspicious.";
        document.getElementById("img2").src = "https://www.transindiatravels.com/wp-content/uploads/rumtek-monastery-1.jpg";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "Khecheopalri Lake";
        document.getElementById("content3").innerHTML = "Located at an average elevation of 1,700 meters above sea level, Khecheopalri Lake is a sacred place for both Buddhists and Hindus and is situated in the Khecheopalri village in the west Sikkim district. The name of the lake ‘Khecheopalri’ was originally known as ‘Kha-chot-palri’ which means the heaven of Lord Padmasambhava. An interesting feature of the lake is that leaves are not allowed to float on the lake, which is ensured by the birds which industriously pick them up as soon as they drop into the lake surface.";
        document.getElementById("img3").src = "https://www.transindiatravels.com/wp-content/uploads/khecheopalri-lake-2.jpg";

    } else if (category == "Food") {
       /*set heading of page*/
       document.getElementById("heading").innerHTML = category + " IN " + state;

       /*first paragraph and its img*/
       document.getElementById("one").innerHTML = "";
       document.getElementById("content1").innerHTML = "";
       document.getElementById("img1").src = "";

       /*second paragraph and its img*/
       document.getElementById("two").innerHTML = "";
       document.getElementById("content2").innerHTML = "";
       document.getElementById("img2").src = "";

       /*third paragraph and its img*/
       document.getElementById("three").innerHTML = "";
       document.getElementById("content3").innerHTML = "";
       document.getElementById("img3").src = "";

    } else if (category == "Agriculture") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";


    } else if (category == "Textile and Fabric") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";

    } else if (category == "Culture") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";

    } else {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";

    }
} else if (state == "Delhi") {
    if (category == "Historical Places") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

       /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "Red Fort";
        document.getElementById("content1").innerHTML = "The Red Fort was the official seat of Mughal rule and authority from 1648 onwards, when the 5th Mughal emperor, Shah Jahan, decided to move the capital of the empire from Agra to Delhi. Constructed using red sandstone, it remains one of the architectural marvels of the Mughal era. In 2007, it became a UNESCO World Heritage Site. Today, this monument is home to a number of museums that have an assortment of precious artifacts on display. Every year, the Indian Prime Minister unfurls the national flag here on the Independence Day.";
        document.getElementById("img1").src = "https://www.holidify.com/images/compressed/41.jpg";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = " Humayun's Tomb";
        document.getElementById("content2").innerHTML = "Apart from being known for its stunning architecture, this is the first garden-tomb on the Indian subcontinent. It is a UNESCO World Heritage Site declared in 1993 and has undergone widespread restoration work since then. The tomb was built by Humayun's son Akbar during 1569-70 and is also the first structure to have made the use of red sandstone at a massive scale.";
        document.getElementById("img2").src = "https://www.holidify.com/images/compressed/4328.jpg";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "Qutub Minar and Complex";
        document.getElementById("content3").innerHTML = "Qutub Minar is the tallest individual tower in the world and the second tallest monument of Delhi. A UNESCO World Heritage Site, it is located in Mehrauli and its construction was started in 1192 by Qutb Ud-Din-Aibak, founder of Delhi Sultanate. Later, the tower was built by various rulers over the centuries. The sight of this glorious monument takes you back to the rich history of India.";
        document.getElementById("img3").src = "https://www.holidify.com/images/compressed/36.jpg";

    } else if (category == "Food") {
       /*set heading of page*/
       document.getElementById("heading").innerHTML = category + " IN " + state;

       /*first paragraph and its img*/
       document.getElementById("one").innerHTML = "";
       document.getElementById("content1").innerHTML = "";
       document.getElementById("img1").src = "";

       /*second paragraph and its img*/
       document.getElementById("two").innerHTML = "";
       document.getElementById("content2").innerHTML = "";
       document.getElementById("img2").src = "";

       /*third paragraph and its img*/
       document.getElementById("three").innerHTML = "";
       document.getElementById("content3").innerHTML = "";
       document.getElementById("img3").src = "";

    } else if (category == "Agriculture") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";


    } else if (category == "Textile and Fabric") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";

    } else if (category == "Culture") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";

    } else {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";

    }
} else if (state == "Puducherry") {
    if (category == "Historical Places") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "Shri Aurobindo Ghosh Ashram – Beautiful Ashram";
        document.getElementById("content1").innerHTML = "Pondicherry was the residence of Sri Aurobindo (Indian freedom fighter), was founded in 1926. It is one of the well known and wealthy ashrams of India. The ashram has one of the prime destinations for tourists and spiritual seekers. If you’re looking for peace and serenity in Pondicherry, this place should definitely be on your list.";
        document.getElementById("img1").src = "https://assets.traveltriangle.com/blog/wp-content/uploads/2015/06/Shri-Aurobindo-Ghosh-Ashram-Pondicherry-400x265.jpg";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "Auroville – Peaceful Living";
        document.getElementById("content2").innerHTML = "The name means ‘the city of Dawn’, founded in 1968. It is a Universal town where men and women of any country can live together to progress harmony and realize human unity. It’s one of the best tourist places near Pondicherry within 100 kms that exudes utmost tranquility and peace. Auroville is an amazing destination for all solace seekers and to make the most of your trip, you must stop by this peaceful spot.";
        document.getElementById("img2").src = "https://assets.traveltriangle.com/blog/wp-content/uploads/2015/06/Auroville-Pondicherry-400x300.jpg";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "Gingee Fort – Relive History";
        document.getElementById("content3").innerHTML = "Gingee fort is one of the best places to visit in Pondicherry. The Fort is declared as a National Monument in 1921. Apart from being a unique architectural feat it is one of the few forts in the State. History geeks and architecture lovers must not miss out this place during their holiday in Pondicherry.";
        document.getElementById("img3").src = "https://assets.traveltriangle.com/blog/wp-content/uploads/2015/06/Gingee-Fort-Pondicherry-400x300.jpg";

    } else if (category == "Food") {
       /*set heading of page*/
       document.getElementById("heading").innerHTML = category + " IN " + state;

       /*first paragraph and its img*/
       document.getElementById("one").innerHTML = "";
       document.getElementById("content1").innerHTML = "";
       document.getElementById("img1").src = "";

       /*second paragraph and its img*/
       document.getElementById("two").innerHTML = "";
       document.getElementById("content2").innerHTML = "";
       document.getElementById("img2").src = "";

       /*third paragraph and its img*/
       document.getElementById("three").innerHTML = "";
       document.getElementById("content3").innerHTML = "";
       document.getElementById("img3").src = "";

    } else if (category == "Agriculture") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";


    } else if (category == "Textile and Fabric") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";

    } else if (category == "Culture") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";

    } else {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";

    }
} else if (state == "Chandigarh") {
    if (category == "Historical Places") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

         /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "Burail Fort, Chandigarh";
        document.getElementById("content1").innerHTML = "Located in the heart of the city, Burail Fort is a Mughal legacy. It was the citadel of a Mughal general till 1712 but due to his oppressive behavior towards the people, he was killed by the members of the Khalsa Army under the orders of their commander, Banda Singh Bahadur.";
        document.getElementById("img1").src = "https://www.fabhotels.com/blog/wp-content/uploads/2019/04/Burail-Fort.jpg";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "Manimajra Fort, Chandigarh";
        document.getElementById("content2").innerHTML = "With a history of over 360 years, Manimajra Fort is one of the must-visit forts in Chandigarh. It might not make it to the list of the most splendid forts in terms of structure or scale but it gained popularity among tourists and history buffs after having been featured in the Oscar-nominated Hollywood movie, Zero Dark Thirty.";
        document.getElementById("img2").src = "https://www.fabhotels.com/blog/wp-content/uploads/2019/04/Manimajra-Old-Fort.jpg";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "Pinjore Gardens, Chandigarh";
        document.getElementById("content3").innerHTML = "Modeled on the Shalimar Bagh in Srinagar, Pinjore Gardens near Chandigarh was built in the 17th century to serve as a summer retreat of the Mughal Emperor, Aurangzeb. It was built by his foster brother, Nawab Fidai Khan Koka aka Muzaffar Hussain. Later, it was renovated and expanded by Maharaja Yadavindra of the Patiala dynasty. Hence, it is also called Yadavindra Gardens.";
        document.getElementById("img3").src = "https://www.fabhotels.com/blog/wp-content/uploads/2019/05/Pinjore-Gardens.jpg";


    } else if (category == "Food") {
       /*set heading of page*/
       document.getElementById("heading").innerHTML = category + " IN " + state;

       /*first paragraph and its img*/
       document.getElementById("one").innerHTML = "";
       document.getElementById("content1").innerHTML = "";
       document.getElementById("img1").src = "";

       /*second paragraph and its img*/
       document.getElementById("two").innerHTML = "";
       document.getElementById("content2").innerHTML = "";
       document.getElementById("img2").src = "";

       /*third paragraph and its img*/
       document.getElementById("three").innerHTML = "";
       document.getElementById("content3").innerHTML = "";
       document.getElementById("img3").src = "";

    } else if (category == "Agriculture") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";


    } else if (category == "Textile and Fabric") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";

    } else if (category == "Culture") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";

    } else {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";

    }
} else if (state == "Andaman and Nicobar Island") {
    if (category == "Historical Places") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = " Port Blair";
        document.getElementById("content1").innerHTML = "The capital of Andaman and Nicobar Islands, Port Blair is poignant reminder of the many sacrifices of freedom fighters. The Cellular jail here is perhaps one of the most infamous remnants of India’s struggle for independence. The main motive of the establishment of this prison was solitary confinement of the prisoners. The wings were built in a manner that the face of each cell only saw the back of the cell opposite to it.";
        document.getElementById("img1").src = "https://www.transindiatravels.com/wp-content/uploads/cellular-jail-2-1.jpg";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "Havelock Islands";
        document.getElementById("content2").innerHTML = "Havelock islands is home to Radhanagar beach, one of the most popular beaches in India and also awarded the best beach in Asia by TIME magazine in 2004. The beach is situated around a distance of 12 kilometers from the Havelock islands and is a must visit site. The waters are sparkling blue and devoid of any wave action. There are a huge number of activities that one can do like scuba diving, snorkeling, boating, fishing etc. The beach is especially popular for couples as it is almost vacant and the serene environment adds to the romance.";
        document.getElementById("img2").src = "https://www.transindiatravels.com/wp-content/uploads/radhanagar-beach-3.jpg";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "Ross Island";
        document.getElementById("content3").innerHTML = "Ross islands are famous for the ruins of Penal colony that precedes the cellular jail or the Kaala paani. The jail was formerly used to incarcerate political prisoners and we can still see the ruins of the gallows at this island. The jail had many notable political prisoners from India’s struggle to independence. The island also has ruins of British’s opulent colonial past in the form a bakery, bungalows etc. ";
        document.getElementById("img3").src = "https://www.transindiatravels.com/wp-content/uploads/viper-island-1.jpg";

    } else if (category == "Food") {
       /*set heading of page*/
       document.getElementById("heading").innerHTML = category + " IN " + state;

       /*first paragraph and its img*/
       document.getElementById("one").innerHTML = "";
       document.getElementById("content1").innerHTML = "";
       document.getElementById("img1").src = "";

       /*second paragraph and its img*/
       document.getElementById("two").innerHTML = "";
       document.getElementById("content2").innerHTML = "";
       document.getElementById("img2").src = "";

       /*third paragraph and its img*/
       document.getElementById("three").innerHTML = "";
       document.getElementById("content3").innerHTML = "";
       document.getElementById("img3").src = "";

    } else if (category == "Agriculture") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";


    } else if (category == "Textile and Fabric") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";

    } else if (category == "Culture") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";

    } else {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";

    }
} else if (state == "Dadra and Nagar Haveli") {
    if (category == "Historical Places") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

       /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "Swaminarayan Temple";
        document.getElementById("content1").innerHTML = "Another reason why tourists visit this place is this old-world architecture. It is a huge temple, which is beautifully built and maintained. If you are looking for peace of mind, then you are sure to find it here. You can also look at the amazing cravings done here that elevates the beauty of the architecture of the temple. Another thing about this temple is that it is located at the banks of Daman Ganga River, which is another spot for you to explore.";
        document.getElementById("img1").src = "https://www.businessupturn.com/wp-content/uploads/2020/08/swaminarayan-temple.jpg";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "Vanganga Lake";
        document.getElementById("content2").innerHTML = "Another Lake in Dadra and Nagar Haveli is Vangana Lake. It is surrounded by acres of lush greenery, where you can sit and relax. It is a beautiful lake in the island garden complex and you can enjoy boating in paddle-boats here. You can also feed ducks and fishes and also turtles present in the lake. The place is picture-perfect. So, if you are looking forward to exploring a place where you can relax and distress yourself, then this is the perfect spot.";
        document.getElementById("img2").src = "https://www.businessupturn.com/wp-content/uploads/2020/08/vanganga-lake-garden.jpg";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "Nakshatra Garden";
        document.getElementById("content3").innerHTML = "If you are in Silvassa, then another spot near the Daman Ganga river is Nakshatra Garden. If you are interested in plants, then this is surely an informative location for you. This garden makes 27 Nakshatra and 12 rashis. It is famously known to be an Astro-themed park. It also has a play area for kids, little ponds, a number of species of ducks, plants, and a lot more.";
        document.getElementById("img3").src = "https://www.businessupturn.com/wp-content/uploads/2020/08/nakshatra-garden.jpg";

    } else if (category == "Food") {
       /*set heading of page*/
       document.getElementById("heading").innerHTML = category + " IN " + state;

       /*first paragraph and its img*/
       document.getElementById("one").innerHTML = "";
       document.getElementById("content1").innerHTML = "";
       document.getElementById("img1").src = "";

       /*second paragraph and its img*/
       document.getElementById("two").innerHTML = "";
       document.getElementById("content2").innerHTML = "";
       document.getElementById("img2").src = "";

       /*third paragraph and its img*/
       document.getElementById("three").innerHTML = "";
       document.getElementById("content3").innerHTML = "";
       document.getElementById("img3").src = "";

    } else if (category == "Agriculture") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";


    } else if (category == "Textile and Fabric") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";

    } else if (category == "Culture") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";

    } else {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";

    }
} else if (state == "Daman and Diu") {
    if (category == "Historical Places") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

       /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "Moti Daman Fort – Dig Into The History";
        document.getElementById("content1").innerHTML = "Constructed by the Portuguese, towards the end of sixteenth century, the Moti Daman Fort is one of the most popular monuments in Daman. Even though the fort has worn out, and needs restoration, it is still one of the best places to visit in Daman which boasts of Colonial style architecture featuring huge walls, 10 bastions, 2 gateways, and an Iberian church.";
        document.getElementById("img1").src = "https://img.traveltriangle.com/blog/wp-content/uploads/2018/01/Moti-Daman-Fort-400x257.jpg";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = " Church Of Our Lady Of Sea – Pray For Your Loved Ones";
        document.getElementById("content2").innerHTML = "Considered as one of the most sacred worship places in Daman, the Church of Our Lady of Sea, is also one of the best places to visit in Daman. Built inside the St Jerome Fort, this holy place is known for its exquisite architecture, and a colossal statue of St Jerome. Other than visiting the church, tourists can also spend some time near the Daman Ganga river to revel in the serenity of nature.";
        document.getElementById("img2").src = "https://img.traveltriangle.com/blog/wp-content/uploads/2018/01/Church-Of-Lady-of-Sea-Daman.jpg";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = " Jain Temple – Pay A Visit";
        document.getElementById("content3").innerHTML = "The city of Daman is studded with numerous temples spread throughout the city, with Jain temple being one of the most popular among them. Include a visit to this temple in your Daman sightseeing tour to peep into the cultural, and religious beliefs of the sect. This temple is also known for its unique architecture which features 18th-century murals that depict the life of Lord Mahavira, the founder of Jainism.";
        document.getElementById("img3").src = "https://img.traveltriangle.com/blog/wp-content/uploads/2018/01/Jain-Temple-In-Daman-400x286.jpg";

    } else if (category == "Food") {

    } else if (category == "Food") {
       /*set heading of page*/
       document.getElementById("heading").innerHTML = category + " IN " + state;

       /*first paragraph and its img*/
       document.getElementById("one").innerHTML = "";
       document.getElementById("content1").innerHTML = "";
       document.getElementById("img1").src = "";

       /*second paragraph and its img*/
       document.getElementById("two").innerHTML = "";
       document.getElementById("content2").innerHTML = "";
       document.getElementById("img2").src = "";

       /*third paragraph and its img*/
       document.getElementById("three").innerHTML = "";
       document.getElementById("content3").innerHTML = "";
       document.getElementById("img3").src = "";

    } else if (category == "Agriculture") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";


    } else if (category == "Textile and Fabric") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";

    } else if (category == "Culture") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";

    } else {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";

    }
} else {
    if (category == "Historical Places") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

         /*first paragraph and its img*/
        document.getElementById("one").innerHTML = " Kadmat";
        document.getElementById("content1").innerHTML = "Also known as cardamom island, the Kadmat Island is located on a coral reef and is known for its shallow shores that are rich with marine life. The huge lagoon located towards the west of the island makes it a popular tourist destination.";
        document.getElementById("img1").src = "https://www.transindiatravels.com/wp-content/uploads/kadmat.jpg";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "Kalpeni Island";
        document.getElementById("content2").innerHTML = "Uninhabited and secluded, Kalpeni is known for its amazing beaches. One can sunbathe or swim in the waters or enjoy Watersports like snorkeling and scuba diving here. The waters are shallow with white sandy shores and are perfect destination for a visit with friends.";
        document.getElementById("img2").src = "https://www.transindiatravels.com/wp-content/uploads/kalpeni-island.jpg";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "Agatti Island";
        document.getElementById("content3").innerHTML = "With a majority of Muslim population, the Island is said to have been visited by Arabian traveler Ibn Batuta. The island unlike the others isn’t easily accessible as one would need to obtain a special permit from the Administration and is granted only with visitors who have a confirmed place to stay.";
        document.getElementById("img3").src = "https://www.transindiatravels.com/wp-content/uploads/agatti-island.jpg";

    } else if (category == "Food") {
       /*set heading of page*/
       document.getElementById("heading").innerHTML = category + " IN " + state;

       /*first paragraph and its img*/
       document.getElementById("one").innerHTML = "";
       document.getElementById("content1").innerHTML = "";
       document.getElementById("img1").src = "";

       /*second paragraph and its img*/
       document.getElementById("two").innerHTML = "";
       document.getElementById("content2").innerHTML = "";
       document.getElementById("img2").src = "";

       /*third paragraph and its img*/
       document.getElementById("three").innerHTML = "";
       document.getElementById("content3").innerHTML = "";
       document.getElementById("img3").src = "";

    } else if (category == "Agriculture") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";


    } else if (category == "Textile and Fabric") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";

    } else if (category == "Culture") {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";

    } else {
        /*set heading of page*/
        document.getElementById("heading").innerHTML = category + " IN " + state;

        /*first paragraph and its img*/
        document.getElementById("one").innerHTML = "";
        document.getElementById("content1").innerHTML = "";
        document.getElementById("img1").src = "";

        /*second paragraph and its img*/
        document.getElementById("two").innerHTML = "";
        document.getElementById("content2").innerHTML = "";
        document.getElementById("img2").src = "";

        /*third paragraph and its img*/
        document.getElementById("three").innerHTML = "";
        document.getElementById("content3").innerHTML = "";
        document.getElementById("img3").src = "";

    }
}
