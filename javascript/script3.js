var state = localStorage.getItem("vOneLocalStorage");  
var category = localStorage.getItem("label");

if (state == "Uttar Pradesh") {
    if (category == "Historical Places") {
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
