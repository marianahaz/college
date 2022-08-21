$(document).ready(function () {
  // >> ARTIST PAGE created by Mariana

  /* Pictures credits:
      Epik High - Photo from MTV (https://www.mtv.com/news/3173560/epik-high-is-here-tablo-interview/)
      Jão - Photo by Hudson Rennan on globo.com (https://gq.globo.com/GQ-Vozes/noticia/2021/05/jao-e-meu-album-com-mais-nuances-ate-agora.html)
      Rina Sawayama - Photo from Twitter (https://twitter.com/rinasawayama/status/1111230769601630208?lang=en)
      Hyukoh - Photo by Han Dasom on Elle Singapore (https://elle.com.sg/2021/05/19/korean-indie-artists-and-bands-you-should-add-to-your-playlist/ )
      Lexie Liu - Photo by Bryan Luna on High Snobiety (https://www.highsnobiety.com/p/lexie-liu-interview/)
      Florence and the Machine - Photo from The Globe and Mail (https://www.theglobeandmail.com/resizer/ykF0aX2vDPIlfKFPFxiNJaCUoSo=/900x0/filters:quality(80):format(webp)/cloudfront-us-east-1.images.arcpublishing.com/tgam/HMVV36ISC5BX5EN2N5PFWAXWII)
      Norah Jones - Photo (https://s2.glbimg.com/DOWhnp-pUU-jNwbJCc1hkrzV6Dc=/620x877/smart/e.glbimg.com/og/ed/f/original/2016/10/24/sipaphotostwo702930_unimedia_glow_images.jpg)
      Bruno Mars - Photo from InStyle (https://www.instyle.com/celebrity/bruno-mars-selvarey-rum-launch-las-vegas-dates)
      Legião Urbana - Photo (https://s2.glbimg.com/_qRXyj1HguqdG7L4QjJCi3Cn1Tc=/0x0:1066x1640/924x0/smart/filters:strip_icc()/s.glbimg.com/jo/g1/f/original/2013/02/21/21859.jpg)
      Pitty - Photo from Tumblr (https://64.media.tumblr.com/09a49fd4f14b63c806d106bc9bede92f/tumblr_n9wshdMqmm1tap22go1_1280.jpg)
      Chen Li - Photo (https://is3-ssl.mzstatic.com/image/thumb/Features115/v4/2a/83/6a/2a836a6e-1a08-3c4b-ac1b-2c670be7131e/mzl.dykkpeog.jpg/1478x646vf-60.jpg)
      Zhou Shen - Photo (https://is3-ssl.mzstatic.com/image/thumb/Music125/v4/d0/f6/f2/d0f6f22d-1a6d-945f-0d0c-47dc5111a483/cover.jpg/500x500bb.webp)
      John Mayer - Photo (https://is4-ssl.mzstatic.com/image/thumb/Music115/v4/b0/81/99/b081991e-22da-957d-226d-688dc35f7843/886449323081.jpg/320x320bb.webp)
      Queen - Photo (https://is2-ssl.mzstatic.com/image/thumb/Features115/v4/92/51/6a/92516a08-4257-36f8-a195-671a667bf86c/mza_8897456724926114550.png/380x380cc.webp)
      Adele - Photo (https://is5-ssl.mzstatic.com/image/thumb/Video126/v4/33/8a/b0/338ab08f-a0a3-cd9c-e741-272c0101bb0b/8864497324630101.jpg/680x382mv.webp)
      Shadmehr Aghili - Photo (https://assets.rjassets.com/static/photo_news/images/2012/03/21/Moein-Andy-Shadmehr-Aghili-In-Dubai/photos/7d798a60.jpg)
      Hojat Ashrafzadeh - Photo (https://mrjavan.com/wp-content/uploads/2021/07/Hojat-Ashrafzadeh.jpg)
      Googosh - Photo (https://farhang.org/images/press/2018-0326-Googoosh-01.jpg)
      Chris de Burgh - Photo (https://www.topaccords.com/storage/photos-artistes/chris-de-burgh%2B1%2B00aa3a86e8fd136029f0a437ff17945d.jpg)
      Dido - Photo (https://i.pinimg.com/originals/f3/ce/87/f3ce87b08e440b6288e1ea5be4e316d2.jpg)

      All album pictures taken from Last.fm (https://www.last.fm/home)
      All description texts taken from Wikipedia and Last.fm
  */

  var artists = [
      {
          name: "Epik High",
          id: "epikhigh",
          image: "./images/artists/Epik_High.png",
          imagebg: "./images/background/Epik_High.png",
          country: "South Korea",
          genre: [
              "rap",
              "alternative"
          ],
          description: "Epik High (에픽하이) is an alternative hip hop group from Seoul, South Korea, composed of three members: Tablo, Mithra Jin and DJ Tukutz. All members of Epik High can sing, write lyrics, compose and arrange music. Their songs has been known to be \"lyrical pieces of literature\" and \"urban poetry\", lyric orientated, soulful and often witty while addressing serious social issues such as identity, discrimination, community, unity and change as a whole. Together for nearly 20 years, the group has achieved mainstream success inside and outside their home country.",
          discography: [
              {album: "Map of the Human Soul", year: 2003, image: "./images/album/Epik High/Map of the Human Soul (2003).jpg", spotifyId: "0HOb3ypZrAVbuGYLiMhC7z"},
              {album: "High Society", year: 2004, image: "./images/album/Epik High/High Society (2004).jpg", spotifyId: "57qISGcX0mPbwdCQ7KSOgq"},
              {album: "Swan Songs", year: 2005, image: "./images/album/Epik High/Swan Songs (2005).jpg", spotifyId: "2r893IZjz94r7mmqxNz4A6"},
              {album: "Remapping the Human Soul", year: 2007, image: "./images/album/Epik High/Remapping the Human Soul (2007).jpg", spotifyId: "0dcpWdZ9nKIbxgZma4NhMa"},
              {album: "Pieces, Part One", year: 2008, image: "./images/album/Epik High/Pieces, Part One (2008).jpg", spotifyId: "1xepnoe8Uet49Nh0nv20lO"},
              {album: "[e]", year: 2009, image: "./images/album/Epik High/[e] (2009).jpg", spotifyId: "7zKJf0cYxuBoGsyz99nGuC"},
              {album: "99", year: 2012, image: "./images/album/Epik High/99 (2012).jpg", spotifyId: "1e2r6700uHv9zThv6bAIDE"},
              {album: "Shoebox", year: 2014, image: "./images/album/Epik High/Shoebox (2014).jpg", spotifyId: "3jdV0dbTuNfdRwEimoJ28a"},
              {album: "WE'VE DONE SOMETHING WONDERFUL", year: 2017, image: "./images/album/Epik High/WE'VE DONE SOMETHING WONDERFUL (2017).jpg", spotifyId: "7tvK9KQebPOhD9baTlIrVu"},
              {album: "sleepless in __________", year: 2019, image: "./images/album/Epik High/sleepless in __________ (2019).jpg", spotifyId: "7o6XSnYarIzPrpzvVivrcl"},
              {album: "Epik High Is Here Part 1", year: 2021, image: "./images/album/Epik High/Epik High Is Here Part 1 (2021).jpg", spotifyId: "5MH95tw9aZo7ayqkfsRzMu"},
              {album: "Epik High Is Here Part 2", year: 2022, image: "./images/album/Epik High/Epik High Is Here Part 2 (2022).jpg", spotifyId: "1a7B3Nn52Uvi9nhqnHacfh"}
          ]
      },
      {
          name: "Jão",
          id: "jao",
          image: "./images/artists/Jao.png",
          imagebg: "./images/background/Jao.png",
          country: "Brazil",
          genre: [
              "pop"
          ],
          description: "João Vitor Romania Balbino (born November 3, 1994), better known as Jão, is a Brazilian singer and songwriter. Jão has been proudly vocal about clichés of today's youth, such as drinking, not-so-fun parties and problematic relationships. Moving to the big city was his first step towards his dream of being a well-known singer/songwriter. First discovered on the internet because of his unusual voice and style, Jão has become one of the most promising voices on Brazilian current pop music scene. His most recent release, \"Pirata\", topped the charts of his home country and started off his successful current national tour of the same name.",
          discography: [
              {album: "Lobos", year: 2018, image: "./images/album/Jao/Lobos (2018).jpg", spotifyId: "67a6pDoMKQYOKGMnmUQZbq"},
              {album: "Pirata", year: 2021, image: "./images/album/Jao/Pirata (2021).jpg", spotifyId: "2LeCiUHBSmUMyrclDEEBly"},
              {album: "Anti-Herói", year: 2019, image: "./images/album/Jao/Anti-heroi (2019) .jpg", spotifyId: "3l3LZovnHa1TmtR1V2fxkP"}
          ]
      },
      {
          name: "Rina Sawayama",
          id: "rinasawayama",
          image: "./images/artists/Rina_Sawayama.png",
          imagebg: "./images/background/Rina_Sawayama.png",
          country: "United Kingdom",
          genre: [
              "pop",
              "rock"
          ],
          description: "Rina Sawayama (born 16 August 1990 in Niigata, Japan) is a Japanese-British London-based singer, songwriter, producer and model. Born and raised in Japan until moving to the UK at the age of 5, Rina would go on to study politics at Cambridge University. At university, she decided to pursue both modeling and her love for singing. Known for her powerful and soulful voice, Rina has been dabbling in multiple genres and experimenting with her singles ever since the release of her debut EP \"RINA\" in 2017, earning the support of thousands of fans around the world.",
          discography: [
              {album: "RINA", year: 2017, image: "./images/album/Rina Sawayama/RINA (2017).jpg", spotifyId: "0rYXZCRBEsRBc4ZyRo8Y6w"},
              {album: "SAWAYAMA", year: 2020, image: "./images/album/Rina Sawayama/SAWAYAMA (2020).jpg", spotifyId: "3stadz88XVpHcXnVYMHc4J"},
              {album: "Cyber Stockholm Syndrome", year: 2018, image: "./images/album/Rina Sawayama/Cyber Stockholm Syndrome (2017).jpg", spotifyId: "0o11wK2Wt4izhShZgi1JMY"}
          ]
      },
      {
          name: "hyukoh",
          id: "hyukoh",
          image: "./images/artists/hyukoh.png",
          imagebg: "./images/background/hyukoh.png",
          country: "South Korea",
          genre: [
              "indie",
              "alternative"
          ],
          description: "hyukoh (혁오) is a South Korean indie band from Seoul, South Korea. The band was formed in May 2014 and consists of leader, singer, and guitarist Oh Hyuk, bassist Im Dong-geon, guitarist Lim Hyun-jae, and drummer Lee In-woo. Starting from the underground music scene in the neighborhood of Hongdae, they formed a large fanbase from performing in sold-out small venues during the release of their debut EP \"20\". In a few months, hyukoh was already charting high in South Korea's most important music services and it didn't take long for international success to come.",
          discography: [
              {album: "20", year: 2014, image: "./images/album/Hyukoh/20 (2014).jpg", spotifyId: "6bzkEKKOMT3I3jaIrUtEaO"},
              {album: "Panda Bear", year: 2015, image: "./images/album/Hyukoh/Panda Bear (2015).jpg", spotifyId: "1TSacrvxmHkHyS6M8chHzs"},
              {album: "22", year: 2016, image: "./images/album/Hyukoh/22 (2015).jpg", spotifyId: "5JMSzU0FPsOut85jmhHbfw"},
              {album: "23", year: 2017, image: "./images/album/Hyukoh/23 (2017).jpg", spotifyId: "2VDNZYzubQxFNOR3qD1K9B"},
              {album: "24: How to find true love and happiness", year: 2018, image: "./images/album/Hyukoh/24 (2018).jpg", spotifyId: "5PBv1FrNgnUw7mb3k4OmMo"},
              {album: "through love", year: 2020, image: "./images/album/Hyukoh/through love (2020).jpg", spotifyId: "4EatQJRcz4Hd39rrmLMTtK"}
          ]
      },
      {
          name: "Lexie Liu",
          id: "lexieliu",
          image: "./images/artists/Lexie_Liu.png",
          imagebg: "./images/background/Lexie_Liu.png",
          country: "China",
          genre: [
              "rap",
              "pop",
              "alternative"
          ],
          description: "Lexie Liu or Liu Boxin (刘柏辛), born December 21, 1998, is a Chinese singer and songwriter. Rising to prominence after participating in music reality shows in China and South Korea, Lexie Liu is one of the most promising young artists of her generation. Switching seamlessly between her native Mandarin and English, Liu crosses genres and cultures with effortlessness, ethereality, and freshness; her style is very distinctive while creating a bilingual dynamic with extremely dream-like vocals. Her most recent release, GONE GOLD, enjoyed critical and mainstream success both in China and internationally.",
          discography: [
              {album: "2030", year: 2018, image: "./images/album/Lexie Liu/2030 (2019).jpg", spotifyId: "3EDheqSnBlJIST8dU7baWF"},
              {album: "META EGO", year: 2019, image: "./images/album/Lexie Liu/META EGO (2019).jpg", spotifyId: "1ON6zUsWnFa7nlo5YbDkoD"},
              {album: "GONE GOLD", year: 2021, image: "./images/album/Lexie Liu/GONE GOLD (2021).jpg", spotifyId: "5fDCqCkR3tcZAELkjOPNFO"}
          ]
      },
      {
          name: "Florence and the Machine",
          id: "florence",
          image: "./images/artists/Florence_and_the_Machine.png",
          imagebg: "./images/background/Florence_and_the_Machine.png",
          country: "United Kingdom",
          genre: [
              "indie",
              "rock"
          ],
          description: "Florence + the Machine is a London, UK, art pop band led by singer-songwriter Florence Welch and formed in 2007. The band consists of: Florence Welch (vocals), Robert Ackroyd (guitar), Isabella Summers (aka Isa Machine - keyboards), Tom Monger (harp), Mark Saunders (bass, percussion), Christopher Lloyd Hayden (drums, backing vocals), Rusty Bradshaw (keyboard, backing vocals) and Sam White (backing vocals). Musically, Florence + The Machine's sound is sometimes referred to as soul-inspired indie rock.",
          discography: [
              {album: "Lungs", year: 2009, image: "./images/album/Florence and the Machine/Lungs.jpeg", spotifyId: "1rLLyY5p6HXNl2lKzINWp5"},
              {album: "Ceremonials", year: 2010, image: "./images/album/Florence and the Machine/Ceremonials .jpeg", spotifyId: "3JODIzr9NLL7CMojdUR70g"},
              {album: "How Big, How Blue, How Beautiful", year: 2015, image: "./images/album/Florence and the Machine/How Big, How Blue, How Beautiful .jpeg", spotifyId: "2jn2n5OkuHliOLKCqHnjXV"},
              {album: "High as Hope", year: 2018, image: "./images/album/Florence and the Machine/High as Hope .jpeg", spotifyId: "0pKZJj9GzcKPCS8r4IaksA"}
          ]
      },
      {
          name: "Norah Jones",
          id: "norahjones",
          image: "./images/artists/Norah_Jones.png",
          imagebg: "./images/background/Norah_Jones.png",
          country: "United States",
          genre: [
              "jazz"
          ],
          description: "Norah Jones, born on March 30th 1979 in New York City, is one of the most popular contemporary jazz and jazz-influenced singers of our time. She was a member of Wax Poetic before her debut album Come Away with Me. She can still be heard singing with them on two tracks of their release, NuBlu Sessions. The daughter of Beatles-influencing sitar virtuoso Ravi Shankar, Jones doesn't closely follow any particular genre, rather she brings her unique jazzy flavor to songs with roots in country, folk, Americana, and modern light jazz, pop and rock.",
          discography: [
              {album: "Come Away with Me", year: 2002, image: "./images/album/Norah Jones/Come Away with Me .jpeg", spotifyId: "1JvoMzqg04nC29gam4Qaiq"},
              {album: "Feels Like Home", year: 2004, image: "./images/album/Norah Jones/Feels Like Home .jpeg", spotifyId: "7GaAXgbFSpcJOiLlFGYyOL"},
              {album: "Not Too Late", year: 2007, image: "./images/album/Norah Jones/Not Too Late .jpeg", spotifyId: "6hpBCxDD4f45hI0UMvOggI"},
              {album: "The Fall", year: 2009, image: "./images/album/Norah Jones/The Fall .jpeg", spotifyId: "1IHJMohRwJgooDzBFjpQiy"},
              {album: "Little Broken Hearts", year: 2012, image: "./images/album/Norah Jones/Little Broken Hearts .jpeg", spotifyId: "3N9ECfsk4OUDKhmhPT3OPX"},
              {album: "Day Breaks", year: 2016, image: "./images/album/Norah Jones/Day Breaks .jpeg", spotifyId: "7ampUMuhfCx0briKjYNKRQ"},
              {album: "Pick Me Up Off the Floor", year: 2020, image: "./images/album/Norah Jones/Pick Me Up Off the Floor .jpeg", spotifyId: "3pi6NXntLETosIkAuaZEhW"}
          ]
      },
      {
          name: "Bruno Mars",
          id: "brunomars",
          image: "./images/artists/Bruno_Mars.png",
          imagebg: "./images/background/Bruno_Mars.png",
          country: "United States",
          genre: [
              "pop"
          ],
          description: "Peter Gene Hernandez (born October 8, 1985), known professionally as Bruno Mars, is an American singer, songwriter, record producer, musician, and dancer. He is known for his stage performances, retro showmanship, and for performing in a wide range of musical styles, including pop, R&B, funk, soul, reggae, disco, and rock. Mars is accompanied by his band, the Hooligans, who play a variety of instruments, such as electric guitar, bass, piano, keyboards, drums, and horns, and also serve as backup singers and dancers.",
          discography: [
              {album: "Doo-Wops & Hooligans", year: 2010, image: "./images/album/Bruno Mars/Doo-Wops & Hooligans .jpeg", spotifyId: "6J84szYCnMfzEcvIcfWMFL"},
              {album: "Unorthodox Jukebox", year: 2012, image: "./images/album/Bruno Mars/Unorthodox Jukebox .jpeg", spotifyId: "58ufpQsJ1DS5kq4hhzQDiI"},
              {album: "24K Magic", year: 2016, image: "./images/album/Bruno Mars/(2012) 24K Magic .jpeg", spotifyId: "4PgleR09JVnm3zY1fW3XBA"}
          ]
      },
      {
          name: "Legião Urbana",
          id: "legiaourbana",
          image: "./images/artists/Legiao_Urbana.png",
          imagebg: "./images/background/Legiao_Urbana.png",
          country: "Brazil",
          genre: [
              "rock"
          ],
          description: "Legião Urbana was a Brazilian rock band from Brasília, Distrito Federal, Brazil. Fronted by lead singer and lyricist Renato Russo, Legião Urbana was founded in 1983 and existed until 1996, when Renato passed away due to complications caused by AIDS. Besides being the lead vocalist, Renato was an occasional guitar, bass and keyboards player. He also wrote most of the band's songs. In 13 years of career, they recorded 13 albums, one for each year. Legião Urbana is probably one of the most famous Brazilian rock bands, especially known for Renato's poetic lyrics, which range from love and spiritualism to politics, family, sex and drugs.",
          discography: [
              {album: "Legião Urbana", year: 1985, image: "./images/album/Legiao Urbana/Legiao Urbana .jpeg", spotifyId: "3wN9mC8YEdxn4VzdQINF1k"},
              {album: "Dois", year: 1986, image: "./images/album/Legiao Urbana/Dois (1986) Que Pais E Este .jpeg", spotifyId: "5d6gRjFshFVzeNcEiX7HGX"},
              // {album: "Que País É Este", year: 1987, image: "./images/album/Legião Urbana/", spotifyId: "null"},
              {album: "As Quatro Estações", year: 1989, image: "./images/album/Legiao Urbana/As Quatro Estacoes (1989) V .jpeg", spotifyId: "5dtcavvE7Hy2bmWb2XpiUe"},
              // {album: "V", year: 1991, image: "./images/album/Legião Urbana/", spotifyId: "null"},
              {album: "O Descobrimento Do Brasil", year: 1993, image: "./images/album/Legiao Urbana/O Descobrimento Do Brasil .jpg", spotifyId: "1vx6Vefn21ZLVTdlymgqSg"},
              {album: "A Tempestade", year: 1996, image: "./images/album/Legiao Urbana/A Tempestade .jpeg", spotifyId: "4ZTXPFch1XDnUyikjooIWM"},
              {album: "Uma Outra Estação", year: 1997, image: "./images/album/Legiao Urbana/Uma Outra Estacao .jpeg", spotifyId: "2bIlp20pdqJfiKK4sJ5u5p"}
          ]
      },
      {
          name: "Pitty",
          id: "pitty",
          image: "./images/artists/Pitty.png",
          imagebg: "./images/background/Pitty.png",
          country: "Brazil",
          genre: [
              "rock"
          ],
          description: "Priscilla Novaes Leone, better known by her stage name Pitty, is a Brazilian singer, songwriter, producer, writer, entrepreneur, presenter and multi-instrumentalist. In 1996, she moved back to Salvador and played in various garage bands. She was vocalist of the hardcore band Inkoma, and released several albums with the band. When Inkoma broke up, she was invited by producer Rafael Ramos to record her first solo album, Admirável Chip Novo, which was released in 2003. Her biggest hits are \"Admirável Chip Novo\", \"Equalize\", \"Máscara\", \"Memórias\", \"Na sua Estante\" and \"Pulsos\".",
          discography: [
              {album: "Admirável Chip Novo", year: 2003, image: "./images/album/Pitty/Admiravel Chip Novo .jpeg", spotifyId: "6t9HEcqxPe5dsIlHyYwATK"},
              {album: "Anacrônico", year: 2005, image: "./images/album/Pitty/Anacronico.jpeg", spotifyId: "589UgNCDMopQpf8m86njik"},
              {album: "Chiaroscuro", year: 2009, image: "./images/album/Pitty/Chiaroscuro.jpeg", spotifyId: "2eqKyLfs5LoKhnLnCF5Qa8"},
              {album: "Setevidas", year: 2014, image: "./images/album/Pitty/Setevidas .jpeg", spotifyId: "2BPf9YYUztYPtShJehkUIA"},
              {album: "Matriz", year: 2019, image: "./images/album/Pitty/Matriz .jpeg", spotifyId: "6SzAMGol9sxx8D6KP3ds1K"}
          ]
      },
      {
          name: "Chen Li",
          id: "chenli",
          image: "./images/artists/Chen_Li.png",
          imagebg: "./images/background/Chen_Li.png",
          country: "China",
          genre: [
              "indie",
              "folk",
              "pop"
          ],
          description: "Chen Li is a Chinese folk singer, independent musician, singer-songwriter, and former lead singer of the band Visionaries. Born in Guiyang, Guizhou, graduated from Shanghai University of International Business and Economics. In 2014, he released his first EP album \"Vientiane\" in cooperation with the Band of Visionaries. \"Wonderful Neng Li Ge\" was shortlisted for the \"2014 Abiru Music Awards\" Folk Single of the Year. In 2016, she won the \"2015 Abiru Music Award\" for the most popular musician (folk); she also released her first single \"Fantasy\" and her new album \"Little Dreams\". On January 5, 2018, the single \"Researching Mountains\" was released.",
          discography: [
              {album: "Ru Ye (如也)", year: 2015, image: "./images/album/Chen li/Ru Ye.jpeg", spotifyId: "6VuJTAk38GsC5bHlGSoIqp"},
              {album: "Xiao Meng Da Ban (小梦大半)", year: 2016, image: "./images/album/Chen li/Xiao Meng Da Ban.jpeg", spotifyId: "7jXDJuL3KJ9N28rVjmuUrl"},
              {album: "Zai Peng Lai (在蓬莱)", year: 2017, image: "./images/album/Chen li/Zai Peng Lai.png", spotifyId: "2o4ww2N4JDsNQxvAfGPFSy"},
              {album: "Hui You (洄游)", year: 2019, image: "./images/album/Chen li/Hui You.png", spotifyId: "2OsekCixwmaVMtA0gRuUqm"},
              {album: "Long Vacation (悠长假期)", year: 2021, image: "./images/album/Chen li/Long Vacation.jpeg", spotifyId: "0WO0NYyImRe6yCa6QOnkZB"}
          ]
      },
      {
          name: "Zhou Shen",
          id: "zhoushen",
          image: "./images/artists/Zhou_Shen.png",
          imagebg: "./images/background/Zhou_Shen.png",
          country: "China",
          genre: [
              "pop"
          ],
          description: "Zhou Shen, also known as Charlie Zhou, is a Chinese singer. He is best known for his song \"Big Fish\", which won 8 awards. In November 2017, he created his first album \"Deep Deep\". He has performed in many TV dramas and Chinese animation films such as \"Big Fish and Begonia\", \"The Great Protector\", \"Yesterday's Crystal Sky\". In March 2018, he sang a Chinese promotional song for the 2018 Oscar Best Film \"The Shape of Water\". In 2020, Zhou Shen won the first place by imitating a variety of voices in \"Singer 2020\", including the voices of little girls and men, singing the song \"Da La Beng\".",
          discography: [
              {album: "深的深", year: 2017, image: "./images/album/Zhou shen/Charlie's Debut Album .png", spotifyId: "6rXktEEIKU4LrdseMPzwaP"},
              {album: "Aftertaste", year: 2015, image: "./images/album/Zhou shen/Aftertaste.png", spotifyId: "68IXn5kmUI2up2nxSW91uD"}
              // {album: "Shen & Isabelle Shanghai Live Concert", year: 2019, image: "", spotifyId: "null"},
              // {album: "TME live \"Good Night, See You Tomorrow\"", year: 2020, image: "", spotifyId: "null"}
          ]
      },
      {
          name: "John Mayer",
          id: "johnmayer",
          image: "./images/artists/John_Mayer.png",
          imagebg: "./images/background/John_Mayer.png",
          country: "United States",
          genre: [
              "pop",
              "blues",
              "rock"
          ],
          description: "John Clayton Maye (born October 16, 1977) is an American guitarist and singer-songwriter. From Connecticut, he went to the Berklee College of Music, before moving to Atlanta, Georgia, in 1998. His first two albums, Room for Squares and Heavier Things, were successful and were made multi-platinum by the RIAA. In 2003, he won a Grammy Award for his song \"Your Body Is a Wonderland\". In 2005 he started a band called The John Mayer Trio with bassist Pino Palladino and drummer Steve Jordan. In 2008 a live cover he did of Michael Jackson's Beat It with Fall Out Boy was released. His sixth album, Paradise Valley, was released in August 2013.",
          discography: [
              {album: "Sob Rock", year: 2021, image: "./images/album/John Mayer/Sob Rock .jpeg", spotifyId: "2JmfwvRDitJlTUoLCkp61z"},
              {album: "The Search for Everything", year: 2017, image: "./images/album/John Mayer/The Search for Everything .jpeg", spotifyId: "0jZFu2tihRJ65iYAo0oOtP"},
              {album: "Paradise Valley", year: 2013, image: "./images/album/John Mayer/Paradise Valley .jpeg", spotifyId: "712VoD72K500yLhhgqCyVe"},
              {album: "Born and Raised", year: 2012, image: "./images/album/John Mayer/Born and Raised .jpeg", spotifyId: "6S0BIiWtnqU0PtumXMpin0"},
              {album: "Battle Studies", year: 2009, image: "./images/album/John Mayer/Battle Studies .jpeg", spotifyId: "1V5vQRMWTNGmqwxY8jMVou"}
          ]
      },
      {
          name: "Queen",
          id: "queen",
          image: "./images/artists/Queen.png",
          imagebg: "./images/background/Queen.png",
          country: "United Kingdom",
          genre: [
              "rock"
          ],
          description: "Queen are a British rock band formed in London in 1970. They are one of the most commercially successful bands in history, selling over 300 million records worldwide. The original lineup consisted of Freddie Mercury, Brian May, Roger Taylor, and John Deacon (bass guitar). Freddie Mercury died of an AIDS-related bronchopneumonia on November 24, 1991, aged 45. In 1997 John Deacon retired to spend more time with his family. The other two former members toured with Paul Rodgers from 2005 to 2009. In December 2018 it was announced Queen & Lambert will bring its Rhapsody Tour to The Forum in 2019. Three of their biggest hits were \"Bohemian Rhapsody\”, \"We Will Rock You\", and \"We Are the Champions\".",
          discography: [
              {album: "A Night at the Opera", year: 1975, image: "./images/album/Queen/A Night at the Opera .png", spotifyId: "7HVoV2lgVsmuiHsjbbUJB4"},
              {album: "News Of The World", year: 1977, image: "./images/album/Queen/News Of The World .png", spotifyId: "3TKTjR4E3LAMfRsPeRsNhT"},
              {album: "The Game", year: 1980, image: "./images/album/Queen/The Game .png", spotifyId: "1h0j80HhdzIMsUGUFiVkqa"},
              {album: "A Day At The Races", year: 1976, image: "./images/album/Queen/A Day At The Races .png", spotifyId: "0lmQ6rAGcChLjGXM52Qu3i"},
              {album: "Sheer Heart Attack", year: 1974, image: "./images/album/Queen/Sheer Heart Attack .png", spotifyId: "6RJyYMIrOtx3VnNIoq31kj"}
          ]
      },
      {
          name: "Adele",
          id: "adele",
          image: "./images/artists/Adele.png",
          imagebg: "./images/background/Adele.png",
          country: "United Kingdom",
          genre: [
              "pop",
              "soul"
          ],
          description: "Adele's first single released was \"Hometown Glory\". The single was released on Jamie T's label Pacemaker Recordings on October 22, 2007. She has since signed with independent music label XL Recordings. In January 2008, the second single \"Chasing Pavements\" was released. In 2011, Adele released her second album, 21, which reached number one in over 26 countries. It became the best-selling album of the 21st century. Her third album, 25, was released on November 20, 2015, and reached number one worldwide. The music video for the lead single \"Hello\" also reached number one in multiple countries, breaking the record for the shortest YouTube video to reach 1 billion views. Adele returned to music in October 2021 with the announcement of her fourth album \"30\" and single \"Easy on Me\".",
          discography: [
              {album: "19", year: 2008, image: "./images/album/Adele/19.png", spotifyId: "3uftDqGs13LsE1s8nn5XSe"},
              {album: "21", year: 2011, image: "./images/album/Adele/21.png", spotifyId: "5duyQokC4FMcWPYTV9Gpf9"},
              {album: "25", year: 2015, image: "./images/album/Adele/25.png", spotifyId: "6TVfiWmo8KtflUAmkK9gGF"},
              {album: "30", year: 2021, image: "./images/album/Adele/30.png", spotifyId: "21jF5jlMtzo94wbxmJ18aa"}
          ]
      },
      {
          name: "Shadmehr Aghili",
          id: "shadmehr",
          image: "./images/artists/Shadmehr_Aghili.png",
          imagebg: "./images/background/Shadmehr_Aghili.png",
          country: "Iran",
          genre: [
              "pop"
          ],
          description: "Shadmehr aghili (Persian: شادمهر عقیلی; born 27 January 1973) is an Iranian pop singer, musician, composer, music arranger, producer and song-writer, and formerly an actor. He revitalized music culture post-revolution in Iran, Aghili was born in Tehran, Iran and later emigrated to Canada first, but currently resides in Los Angeles.Shadmehr Aghili is a versatile artist, violinist and musician.Beside of his prominent use of piano, guitar and violin, he also plays santur, mandolin, trumpet, harmonica, keyboard, banjo, and kotoin some recordings.  And in 2012, in a collaboration with singer Ebi, he released the anti-war Royay e Ma (Globally released A Dream) in support of World Vision USA and World Vision Canada.",
          discography: [
              {album: "Tasvir", year: 2018, image: "./images/album/Shadmehr aghili/Tasvir.jpg", spotifyId: "0FDWV1q9W02RenxF2sdH9F"},
              {album: "Tarafdaar", year: 2012, image: "./images/album/Shadmehr aghili/Tarafdaar.jpeg", spotifyId: "2tLGkf1whuUxIifsvqTR1p"},
              {album: "Daste Man Nist", year: 2021, image: "./images/album/Shadmehr aghili/Daste Man Nist.jpeg", spotifyId: "2o1eGErubRsZpTHrmwGd2M"},
              {album: "Vaghti Ke Bad Misham", year: 2019, image: "./images/album/Shadmehr aghili/Vaghti  Ke Bad Misham.jpeg", spotifyId: "6q6C1L9YFWe2aaC3byjD44"},
              {album: "Khaabe Khosh", year: 2020, image: "./images/album/Shadmehr aghili/Khaabe Khosh.jpeg", spotifyId: "7Dblgkg9m7bCoMKb1wkDQD"}
          ]
      },
      {
          name: "Hojat Ashrafzadeh",
          id: "hojat",
          image: "./images/artists/Hojat_Ashrafzadeh.png",
          imagebg: "./images/background/Hojat_Ashrafzadeh.png",
          country: "Iran",
          genre: [
              "pop",
              "classic"
          ],
          description: "Hojat Ashrafzadeh was born : December 3, 1979 in  Neyshabur, Iran. He is an Iranian Pop, Classic singer and composer. In 2003, he was taken from the guidance of Professor Shajarian and learned the vocal techniques and analytical sequence of Iranian song in 2006 from Professor Lotfi. Some of his famous albums are: Moon and Fish, Mah O Mahi, Az Yadha Rafte: EP, Khatoon. He got the Barbad Award for Best Mixed Genre Music Album of the Year.",
          discography: [
              // {album: "Asheghe Toam", year: 2019, image: "./images/album/Hojat Ashrafzadeh/", spotifyId: "null"},
              {album: "Zibaye Mani", year: 2021, image: "./images/album/Hojat Ashrafzadeh/Zibaye Mani.jpeg", spotifyId: "4EixusAowXZDMw1y0Scf2X"},
              {album: "Refigh", year: 2018, image: "./images/album/Hojat Ashrafzadeh/Refigh.jpeg", spotifyId: "7jjjg7rkIekkECjDompKhH"},
              {album: "Vatanam", year: 2017, image: "./images/album/Hojat Ashrafzadeh/Vatanam.jpeg", spotifyId: "7jjjg7rkIekkECjDompKhH"}
          ]
      },
      {
          name: "Googosh",
          id: "googosh",
          image: "./images/artists/Googoosh.png",
          imagebg: "./images/background/Googoosh.png",
          country: "Iran",
          genre: [
              "pop",
          ],
          description: "Faegheh Atashin (Persian: فائقه آتشین; born 5 May 1950), known professionally as Googoosh (Persian: گوگوش, Persian pronunciation: [guːˈguːʃ]), is an Iranian singer and actress, and one of Iran's most popular and enduring entertainers, whose career spans over 60 years. Googoosh has enjoyed significant popularity since the beginning of her career, ultimately becoming a cultural icon inside Iran and abroad. She is mainly known for her contributions to Iranian pop music, but she also starred in a variety of Persian movies from the 1950s to the 1970s.",
          discography: [
              {album: "Ejaz", year: 2012, image: "./images/album/Googoosh/Ejaz.jpeg", spotifyId: "7DOC16JO78hnd7C1PGFzUA"},
              {album: "Kooh", year: 1972, image: "./images/album/Googoosh/Kooh.jpeg", spotifyId: "0c45SCFJgYxKS9t2Ylly6C"},
              {album: "Do mahi", year: 1974, image: "./images/album/Googoosh/Do mahi.jpeg", spotifyId: "5JRt5HiJGjONoM06OAQrJs"},
              {album: "Nagoo Bedroud", year: 2010, image: "./images/album/Googoosh/Hajm-e Sabz .jpeg", spotifyId: "4M1qkwVb9Sy1X2euA45f5X"}
              // {album: "Behesht", year: 2011, image: "./images/album/Googoosh/", spotifyId: "null"}
          ]
      },
      {
          name: "Chris de Burgh",
          id: "chrisdeburgh",
          image: "./images/artists/Chris_de_Burgh.png",
          imagebg: "./images/background/Chris_de_Burgh.png",
          country: "United Kingdom",
          genre: [
              "pop"
          ],
          description: "Christopher John Davison (born 15 October 1948), known professionally as Chris de Burgh, is a British-Irish singer-songwriter and instrumentalist. He started out as an art rock performer but subsequently started writing more pop-oriented material. He has had several top 40 hits in the UK and two in the US, but he is more popular in other countries, particularly Norway and Brazil.His 1986 love song \"The Lady in Red\" reached number one in several countries. De Burgh has sold over 45 million albums worldwide",
          discography: [
              {album: "Lady In Red", year: 2013, image: "./images/album/Chris De Burgh/Lady In Red.jpeg", spotifyId: "2H00HC9wcm2SdBE8HQD6PT"},
              {album: "Power Of Ten", year: 1992, image: "./images/album/Chris De Burgh/Power Of Ten.jpeg", spotifyId: "1ya2t6O7tGGfBmeS5lcqGC"},
              {album: "The Road Of Freedom", year: 2004, image: "./images/album/Chris De Burgh/The Road Of Freedom.jpeg", spotifyId: "0VQcAWyM1sYRA7vCqB1N9h"},
              {album: "Beautiful Dreams", year: 1995, image: "./images/album/Chris De Burgh/Beautiful  Dreams.jpeg", spotifyId: "4S4sLVmD5SAAn4r7iiUdpX"},
              {album: "In To The Light", year: 1986, image: "./images/album/Chris De Burgh/In To The Light.jpeg", spotifyId: "5Yi08NDFoVAnvHoXqpp9O5"}
          ]
      },
      {
          name: "Dido",
          id: "dido",
          image: "./images/artists/Dido.png",
          imagebg: "./images/background/Dido.png",
          country: "United Kingdom",
          genre: [
              "pop",
              "folk"
          ],
          description: "Florian Cloud de Bounevialle O'Malley Armstrong (born 25 December 1971), known professionally as Dido, is an English singer and songwriter. She attained international success with her debut album No Angel (1999). Hit singles from the album include \"Here with Me\" and \"Thank You\". It sold over 21 million copies worldwide,and won her several awards, including two Brit Awards: Best British Female and Best British Album, and the MTV Europe Music Award for Best New Act. Her next album, Life for Rent (2003), continued her success with the hit singles \"White Flag\" and \"Life for Rent\". Dido's first two albums are among the best-selling albums in UK chart history, and both are in the top 10 best-selling albums of the 2000s in the UK.",
          discography: [
              {album: "Life For Rent", year: 2003, image: "./images/album/Dido/Life For Rent.jpeg", spotifyId: "7HlZFlk0jJq3Bb03AOyMTE"},
              {album: "No Angel", year: 1999, image: "./images/album/Dido/NoAngle.jpeg", spotifyId: "7ydMeYrv8bFFRkkHepoJM4"},
              {album: "Still On My Mind", year: 2019, image: "./images/album/Dido/Still On My Mind.jpeg", spotifyId: "5AR3jURU3vmoJiGzpjY4Xn"}
          ]
      }
  ]

  var countries = [
    {
      name: "Brazil",
      flag: "./images/flag/brazil.png",
    },
    {
      name: "China",
      flag: "./images/flag/china.png",
    },
    {
      name: "Iran",
      flag: "./images/flag/iran.png",
    },
    {
      name: "South Korea",
      flag: "./images/flag/southkorea.png",
    },
    {
      name: "United States",
      flag: "./images/flag/usa.png",
    },
    {
      name: "United Kingdom",
      flag: "./images/flag/uk.png",
    },
  ];

  var listOfArtists = $("#listOfArtists");

  function createCard(artist, index) {
    // Create the div that holds all information
    var artistBox = document.createElement("div");
    artistBox.classList.add("artist-box");
    artistBox.classList.add(artist.id);
    var boxName = document.createElement("p");
    boxName.classList.add("box-artist-name");

    artistBox.append(boxName);

    // Create box in the HTML
    listOfArtists.append(artistBox);

    // Add id with the name of the artist and delete the class
    $("." + artist.id).attr("id", artist.id);
    artistBox.classList.remove(artist.id);
    artistId = "#" + artist.id;

    // Add name
    $(artistId).find(".box-artist-name").text(artist.name);

    // Add background picture
    var image = 'url("' + artist.image;
    $(artistId).css("background-image", image);
  }

  // Create card for each artist in the array
  artists.forEach((elem, index) => createCard(elem, index));

  // Hide message if nothing is found in the search
  $(".search-text").hide();
  $("#nothing-found").hide();

  // Close the large box if there's a filter or search event
  function closeLargeBox() {
    if ($("#largeBox").css("display") != "none") {
      $("#largeBox").hide(300);
      $("#largeBox").removeClass();
    }
    lastClick = "";
  }

  // Implement filters
  function filterArtists(genre, country) {
    var filteredCountry = [];
    var filteredGenre = [];
    var resultEmpty = true;

    if (country != "all") {
      artists.forEach(function (elem) {
        if (country == elem.country.toLowerCase()) {
          filteredCountry.push(elem.id);
        }
      });
    } else {
      artists.forEach((elem) => filteredCountry.push(elem.id));
    }

    if (genre != "all") {
      artists.forEach(function (elem) {
        elem.genre.forEach(function (thisGenre) {
          if (genre == thisGenre) {
            filteredGenre.push(elem.id);
          }
        });
      });
    } else {
      artists.forEach((elem) => filteredGenre.push(elem.id));
    }

    $(".artist-box").each(function () {
      if (
        filteredGenre.includes(this.id) &&
        filteredCountry.includes(this.id)
      ) {
        if ($(this).css("display") == "none") {
          $(this).show(300);
        }
        resultEmpty = false;
      } else {
        $(this).hide(300);
      }
    });

    if (resultEmpty) {
      $("#nothing-found").show();
    } else {
      $("#nothing-found").hide();
    }

    $(".search-text").hide();
    $("#looking-for").text("");
  }

  $("#genre, #country").on("change", function () {
    closeLargeBox();
    var genre = $("#genre").find(":selected").val();
    var country = $("#country").find(":selected").val();
    filterArtists(genre, country);
  });

  // Implement search function
  $("#search").keypress(function () {
    foundArtist = 0;
    isSearched = false;

    // Activate search when user presses enter
    if (event.which == "13") {
      closeLargeBox();
      $("#genre, #country").prop("selectedIndex", 0);
      $(".artist-box").hide();
      var foundArtist = 0;
      var userText = $(this).val();
      var searchText = $(this).val().toLowerCase();
      // Treat text in case of Jão due to the accent
      if (searchText == "jao") {
        searchText = "jão";
      }
      if (searchText == "legiao") {
        searchText = "legião";
      }
      if (searchText == "legiao urbana") {
        searchText = "legião";
      }
      artists.forEach(function (elem) {
        var searchName = elem.name.toLowerCase();
        if (searchName.includes(searchText)) {
          $("#" + elem.id).show(500);
          foundArtist = 1;
        }
      });

      $(".search-text").show();
      $("#looking-for").text(userText);
      $(this).val("");
      isSearched = true;

      if (foundArtist == 0) {
        $("#nothing-found").show();
      } else {
        $("#nothing-found").hide();
      }
    }
  });

  // Print sorted albums
  function printAlbums(artist, order) {
    // Make sure it is empty before populating it
    $("#albums").text("");

    var author = "";
    artists.forEach(function (elem) {
      if (elem.id == artist) {
        author = elem;
      }
    });

    order.forEach(function (item) {
      author.discography.forEach(function (album) {
        if (item == album.album || item == album.year) {
          let albumBox = document.createElement("div");
          albumBox.classList.add(album.spotifyId, "album-box");
          let albumName = document.createElement("h5");
          let albumCover = document.createElement("img");
          let albumYear = document.createElement("h6");

          albumName.textContent = album.album;
          albumYear.textContent = album.year;
          albumCover.src = album.image;

          albumBox.append(albumCover, albumYear, albumName);

          $("#albums").append(albumBox);
        }
      });
    });

    // Add the spotify playlist when album clicked
    $(".album-box").click(function () {
      var spotifyURL = "https://open.spotify.com/embed/album/" + this.classList[0] + "?utm_source=generator";
      $("#albumPlaylist").show(300);
      $("#albumPlaylist").find("iframe").attr("src", spotifyURL);
    });
  }

  // Do the sorting
  function sorting(sort, artist) {
    var albumsArtist = "";
    artists.forEach(function (elem) {
      if (artist == elem.id) {
        albumsArtist = elem.discography;
      }
    });

    newOrder = [];
    $("#nameSort, #yearSort").removeClass("selectedSort");
    $("#" + sort).addClass("selectedSort");

    if (sort == "nameSort") {
      // name sorting
      albumsArtist.forEach(function (elem) {
        newOrder.push(elem.album);
      });
      newOrder.sort();
    } else {
      // year sorting
      albumsArtist.forEach(function (elem) {
        newOrder.push(elem.year);
      });
      newOrder.sort((a, b) => b - a);
    }

    $("#albumPlaylist").hide();

    printAlbums(artist, newOrder);
  }

  // Track last click to show small box when user clicks another artist
  let lastClick = null;

  $("#largeBox").hide();

  // Open large box and populate it with the information from the object
  $(".artist-box").click(function () {
    $(this).hide();
    $("#largeBox").hide();
    $("#largeBox").show(300);
    let currentArtist = this.id;
    $("#largeBox").addClass(currentArtist);
    let currentArtistInfo = [];

    artists.forEach(function (elem) {
      if (currentArtist == elem.id) {
        currentArtistInfo = elem;
      }
    });

    var largeBox = $("#largeBox");

    $("#nameSort, #yearSort").click(function () {
      var sortType = this.id;
      sorting(sortType, currentArtist);
    });

    largeBox.find("h2").text(currentArtistInfo.name);
    largeBox.find("p").text(currentArtistInfo.description);
    countries.forEach(function (elem) {
      if (elem.name == currentArtistInfo.country) {
        $("#imgCountry").attr("src", elem.flag);
      }
    });

    $("#artistGenres").text("");
    currentArtistInfo.genre.forEach(function (elem) {
      var addGenre = $("<span></span>").text(elem);
      $("#artistGenres").append(addGenre);
    });

    var largeBoxBg = "url(" + currentArtistInfo.imagebg + " )";
    $("#artistInfo").css("background-image", largeBoxBg);

    sorting("nameSort", currentArtist);
    checkIfScrollable();

    // Scroll to box
    // Scrolling code by Steve on StackOverflow (https://stackoverflow.com/questions/6677035/scroll-to-an-element-with-jquery)
    $([document.documentElement, document.body]).animate(
      {
        scrollTop: $("#largeBox").offset().top,
      },
      200
    );

    // Show artist box if it had display none
    $(".artist-box").each(function () {
      if (lastClick) {
        if ($("#" + lastClick).css("display") == "none") {
          $("#" + lastClick).show(300);
          $("#largeBox").removeClass(lastClick);
        }
      }
    });

    lastClick = this.id;
  });

  // Close large box, remove the class with the identifier, and show artist box again.
  $(".close-large-box").click(function () {
    let closedArtist = $(this).parent()[0].classList[0];
    $(".artist-box").each(function () {
      if (closedArtist) {
        if ($("#" + closedArtist).css("display") == "none") {
          $("#" + closedArtist).show(300);
        }
      }
    });
    closeLargeBox();
  });

  function checkIfScrollable() {
    // Checking width code by bobince on StackOverflow (https://stackoverflow.com/questions/2647761/detecting-presence-of-a-scroll-bar-in-a-div-using-jquery)
    var albumWidth = $("#albums").get(0).scrollWidth;
    var userWidth = $("#albums").get(0).clientWidth;

    if (albumWidth > userWidth) {
      $("#scrolling").css("opacity", 0.8);
    } else {
      $("#scrolling").css("opacity", 0);
    }
  }

  $(".scrollRight").click(function () {
    // Scrolling code by mrtsherman on StackOverflow (https://stackoverflow.com/questions/8905832/jquery-scrollright)
    var leftPos = $("#albums").scrollLeft();
    $("#albums").animate({ scrollLeft: leftPos + 200 }, 500);
  });

  $(".scrollLeft").click(function () {
    // Scrolling code by mrtsherman on StackOverflow (https://stackoverflow.com/questions/8905832/jquery-scrollright)
    var rightPos = $("#albums").scrollLeft();
    $("#albums").animate({ scrollLeft: rightPos - 200 }, 500);
  });

  // End of Artist Page


  // >> MOBILE MENU created by Tian

  const btnHamburger = document.querySelector("#btnHamburger");
  const body = document.querySelector("body");
  const header = document.querySelector(".header");
  const overlay = document.querySelector(".overlay");
  const fadeElems = document.querySelectorAll(".has-fade");

  btnHamburger.addEventListener("click", function () {
    if (header.classList.contains("open")) {
      // Close Hamburger Menu
      body.classList.remove("noscroll");
      header.classList.remove("open");
      fadeElems.forEach(function (element) {
        element.classList.remove("fade-in");
        element.classList.add("fade-out");
      });
    } else {
      // Open Hamburger Menu
      body.classList.add("noscroll");
      header.classList.add("open");
      fadeElems.forEach(function (element) {
        element.classList.remove("fade-out");
        element.classList.add("fade-in");
      });
    }
  });

  // End of Mobile Menu

});

// FORM VALIDATION created by Mina

function validateProfile(event) {
  let valid = true;
  let firstName = profileform.firstName.value;
  let lastName = profileform.lastName.value;
  let message = profileform.message.value;
  let title = profileform.title.value;
  let phone = profileform.phone.value;
  let email = profileform.email.value;

  if (!firstName) {
    let fNameErrorElement = document.querySelector("#fNameError");
    fNameErrorElement.classList.add("alert_active");
    valid = false;
  }

  if (!lastName) {
    let lastNameErrorElement = document.querySelector("#lNameError");
    lastNameErrorElement.classList.add("alert_active");
    valid = false;
  }
  if (!message) {
    let messageErrorElement = document.querySelector("#messageError");
    messageErrorElement.classList.add("alert_active");
    valid = false;
  }

  if (!title) {
    let titleErrorElement = document.querySelector("#titleError");
    titleErrorElement.classList.add("alert_active");
    valid = false;
  }
  
  // Email and phone validation by Mariana
  if (!email) {
    let emailErrorElement = document.querySelector("#emailError");
    emailErrorElement.classList.add("alert_active");
    valid = false; 
  } else {
    var hasAt = email.includes('@');
    var hasDot = email.includes('.');
    var indexAt = email.indexOf('@');
    var indexDot = email.indexOf('.');
    if (hasAt && indexAt != 0 && hasDot && (indexAt + 1 < indexDot) && (email.length > indexDot + 1)) {
      true;
    } else {
      let emailErrorElement = document.querySelector("#emailError");
      emailErrorElement.classList.add("alert_active");
      valid = false; 
    }
  }

  if (!phone || phone.length != 10 || isNaN(phone)) {
    let phoneErrorElement = document.querySelector("#phoneError");
    phoneErrorElement.classList.add("alert_active");
    valid = false;
  } 

  if (!valid) {
    event.preventDefault();
  }
  
  return valid;
}

document.querySelector("#fName").addEventListener("change", function () {
  let fNameErrorElement = document.querySelector("#fNameError");
  fNameErrorElement.classList.remove("alert_active");
});

document.querySelector("#lName").addEventListener("change", function () {
  let lNameErrorElement = document.querySelector("#lNameError");
  lNameErrorElement.classList.remove("alert_active");
});

document.querySelector("#message").addEventListener("change", function () {
  let messageErrorElement = document.querySelector("#messageError");
  messageErrorElement.classList.remove("alert_active");
});

document.querySelector("#title").addEventListener("change", function () {
  let titleErrorElement = document.querySelector("#titleError");
  titleErrorElement.classList.remove("alert_active");
});

document.querySelector("#phone").addEventListener("change", function () {
  let phoneErrorElement = document.querySelector("#phoneError");
  phoneErrorElement.classList.remove("alert_active");
});

document.querySelector("#email").addEventListener("change", function () {
  let emailErrorElement = document.querySelector("#emailError");
  emailErrorElement.classList.remove("alert_active");
});

document.profileform.addEventListener("submit", validateProfile);
