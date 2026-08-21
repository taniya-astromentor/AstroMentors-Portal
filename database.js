/**
 * AstroMentors Tarot Database — Bilingual (English / Hindi)
 * Structure: cardID: { image, en:{title,audioPath}, hi:{title,audioPath} }
 */
const tarotDatabase = {
  astromentor: {
    image: "images/astromentor/intro.webp",
    en: { title: "The Cloud Deck", audioPath: "audio/astromentor/intro.mp3" },
    hi: { title: "क्लाउड डेक", audioPath: "audio/Hindi/astromentor/intro.mp3" },
  },
  // major arcana
  "the-fool": {
    image: "images/major_arcana/the_fool.webp",
    en: { title: "The Fool", audioPath: "audio/major_arcana/0_the_fool.mp3" },
    hi: { title: "मूर्ख", audioPath: "audio/Hindi/major_arcana/0_मूर्ख.mp3" },
  },
  "the-magician": {
    image: "images/major_arcana/the_magician.webp",
    en: {
      title: "The Magician",
      audioPath: "audio/major_arcana/1_the_magician.mp3",
    },
    hi: {
      title: "जादूगर",
      audioPath: "audio/Hindi/major_arcana/1_जादूगर.mp3",
    },
  },
  "high-priestess": {
    image: "images/major_arcana/the_high_priestess.webp",
    en: {
      title: "The High Priestess",
      audioPath: "audio/major_arcana/2_the_high_priestess.mp3",
    },
    hi: {
      title: "उच्च पुरोहिता",
      audioPath: "audio/Hindi/major_arcana/2_उच्च-पुरोहिता.mp3",
    },
  },
  "the-empress": {
    image: "images/major_arcana/the_empress.webp",
    en: {
      title: "The Empress",
      audioPath: "audio/major_arcana/3_the_empress.mp3",
    },
    hi: {
      title: "साम्राज्ञी",
      audioPath: "audio/Hindi/major_arcana/3_साम्राज्ञी.mp3",
    },
  },
  "the-emperor": {
    image: "images/major_arcana/the_emperor.webp",
    en: {
      title: "The Emperor",
      audioPath: "audio/major_arcana/4_the_emperor.mp3",
    },
    hi: {
      title: "सम्राट",
      audioPath: "audio/Hindi/major_arcana/4_सम्राट.mp3",
    },
  },
  "the-hierophant": {
    image: "images/major_arcana/the_hierophant.webp",
    en: {
      title: "The Hierophant",
      audioPath: "audio/major_arcana/5_the_hierophant.mp3",
    },
    hi: {
      title: "मुक्तिदाता",
      audioPath: "audio/Hindi/major_arcana/5_मुक्तिदाता.mp3",
    },
  },
  "the-lovers": {
    image: "images/major_arcana/the_lovers.webp",
    en: {
      title: "The Lovers",
      audioPath: "audio/major_arcana/6_the_lovers.mp3",
    },
    hi: {
      title: "प्रेमी",
      audioPath: "audio/Hindi/major_arcana/6_प्रेमी.mp3",
    },
  },
  "the-chariot": {
    image: "images/major_arcana/the_chariot.webp",
    en: {
      title: "The Chariot",
      audioPath: "audio/major_arcana/7_the_chariot.mp3",
    },
    hi: { title: "रथ", audioPath: "audio/Hindi/major_arcana/7_रथ.mp3" },
  },
  strength: {
    image: "images/major_arcana/strength.webp",
    en: { title: "Strength", audioPath: "audio/major_arcana/8_strength.mp3" },
    hi: { title: "शक्ति", audioPath: "audio/Hindi/major_arcana/8_शक्ति.mp3" },
  },
  "the-hermit": {
    image: "images/major_arcana/the_hermit.webp",
    en: {
      title: "The Hermit",
      audioPath: "audio/major_arcana/9_the_hermit.mp3",
    },
    hi: {
      title: "संन्यासी",
      audioPath: "audio/Hindi/major_arcana/9_संन्यासी.mp3",
    },
  },
  "wheel-of-fortune": {
    image: "images/major_arcana/wheel_of_fortune.webp",
    en: {
      title: "Wheel of Fortune",
      audioPath: "audio/major_arcana/10_wheel_of_fortune.mp3",
    },
    hi: {
      title: "भाग्य चक्र",
      audioPath: "audio/Hindi/major_arcana/10_भाग्य-चक्र.mp3",
    },
  },
  justice: {
    image: "images/major_arcana/justice.webp",
    en: { title: "Justice", audioPath: "audio/major_arcana/11_justice.mp3" },
    hi: { title: "न्याय", audioPath: "audio/Hindi/major_arcana/11_न्याय.mp3" },
  },
  "the-hangedman": {
    image: "images/major_arcana/the_hanged_man.webp",
    en: {
      title: "The Hanged Man",
      audioPath: "audio/major_arcana/12_the_hanged_man.mp3",
    },
    hi: {
      title: "लटका हुआ व्यक्ति",
      audioPath: "audio/Hindi/major_arcana/12_लटकता-हुआ-व्यक्ति.mp3",
    },
  },
  death: {
    image: "images/major_arcana/death.webp",
    en: { title: "Death", audioPath: "audio/major_arcana/13_Death.mp3" },
    hi: {
      title: "मृत्यु",
      audioPath: "audio/Hindi/major_arcana/13_मृत्यु.mp3",
    },
  },
  temperance: {
    image: "images/major_arcana/temperance.webp",
    en: {
      title: "Temperance",
      audioPath: "audio/major_arcana/14_temperance.mp3",
    },
    hi: { title: "संयम", audioPath: "audio/Hindi/major_arcana/14_संयम.mp3" },
  },
  "the-devil": {
    image: "images/major_arcana/the_devil.webp",
    en: {
      title: "The Devil",
      audioPath: "audio/major_arcana/15_the_devil.mp3",
    },
    hi: { title: "शैतान", audioPath: "audio/Hindi/major_arcana/15_शैतान.mp3" },
  },
  "the-tower": {
    image: "images/major_arcana/the_tower.webp",
    en: {
      title: "The Tower",
      audioPath: "audio/major_arcana/16_the_tower.mp3",
    },
    hi: { title: "मीनार", audioPath: "audio/Hindi/major_arcana/16_मीनार.mp3" },
  },
  "the-star": {
    image: "images/major_arcana/the_star.webp",
    en: { title: "The Star", audioPath: "audio/major_arcana/17_the_star.mp3" },
    hi: { title: "तारा", audioPath: "audio/Hindi/major_arcana/17_तारा.mp3" },
  },
  "the-moon": {
    image: "images/major_arcana/the_moon.webp",
    en: { title: "The Moon", audioPath: "audio/major_arcana/18_the_moon.mp3" },
    hi: {
      title: "चंद्रमा",
      audioPath: "audio/Hindi/major_arcana/18_चंद्रमा.mp3",
    },
  },
  "the-sun": {
    image: "images/major_arcana/the_sun.webp",
    en: { title: "The Sun", audioPath: "audio/major_arcana/19_the_sun.mp3" },
    hi: { title: "सूर्य", audioPath: "audio/Hindi/major_arcana/19_सूर्य.mp3" },
  },
  judgement: {
    image: "images/major_arcana/judgement.webp",
    en: {
      title: "Judgement",
      audioPath: "audio/major_arcana/20_judgement.mp3",
    },
    hi: {
      title: "न्यायनिर्णय",
      audioPath: "audio/Hindi/major_arcana/20_न्यायनिर्णय.mp3",
    },
  },
  "the-world": {
    image: "images/major_arcana/the_world.webp",
    en: {
      title: "The World",
      audioPath: "audio/major_arcana/21_the_world.mp3",
    },
    hi: { title: "जगत", audioPath: "audio/Hindi/major_arcana/21_जगत.mp3" },
  },

  // suit of pentacles
  "ace-of-pentacles": {
    image: "images/suit_of_pentacles/ace_of_pentacles.webp",
    en: {
      title: "Ace of Pentacles",
      audioPath: "audio/suit_of_pentacles/1_ace_of_pentacles.mp3",
    },
    hi: {
      title: "पेंटाकल्स का इक्का",
      audioPath: "audio/Hindi/suit_of_pentacles/1_पेंटाकल्स-का-इक्का.mp3",
    },
  },
  "two-of-pentacles": {
    image: "images/suit_of_pentacles/two_of_pentacles.webp",
    en: {
      title: "Two of Pentacles",
      audioPath: "audio/suit_of_pentacles/2_two_of_pentacles.mp3",
    },
    hi: {
      title: "पेंटाकल्स का दो",
      audioPath: "audio/Hindi/suit_of_pentacles/2_पेंटाकल्स-का-दो.mp3",
    },
  },
  "three-of-pentacles": {
    image: "images/suit_of_pentacles/three_of_pentacles.webp",
    en: {
      title: "Three of Pentacles",
      audioPath: "audio/suit_of_pentacles/3_three_of_pentacles.mp3",
    },
    hi: {
      title: "पेंटाकल्स का तीन",
      audioPath: "audio/Hindi/suit_of_pentacles/3_पेंटाकल्स-का-तीन.mp3",
    },
  },
  "four-of-pentacles": {
    image: "images/suit_of_pentacles/four_of_pentacles.webp",
    en: {
      title: "Four of Pentacles",
      audioPath: "audio/suit_of_pentacles/4_four_of_pentacles.mp3",
    },
    hi: {
      title: "पेंटाकल्स का चार",
      audioPath: "audio/Hindi/suit_of_pentacles/4_पेंटाकल्स-का-चार.mp3",
    },
  },
  "five-of-pentacles": {
    image: "images/suit_of_pentacles/five_of_pentacles.webp",
    en: {
      title: "Five of Pentacles",
      audioPath: "audio/suit_of_pentacles/5_five_of_pentacles.mp3",
    },
    hi: {
      title: "पेंटाकल्स का पांच",
      audioPath: "audio/Hindi/suit_of_pentacles/5_पेंटाकल्स-का-पांच.mp3",
    },
  },
  "six-of-pentacles": {
    image: "images/suit_of_pentacles/six_of_pentacles.webp",
    en: {
      title: "Six of Pentacles",
      audioPath: "audio/suit_of_pentacles/6_six_of_pentacles.mp3",
    },
    hi: {
      title: "पेंटाकल्स का छह",
      audioPath: "audio/Hindi/suit_of_pentacles/6_पेंटाकल्स-का-छह.mp3",
    },
  },
  "seven-of-pentacles": {
    image: "images/suit_of_pentacles/seven_of_pentacles.webp",
    en: {
      title: "Seven of Pentacles",
      audioPath: "audio/suit_of_pentacles/7_seven_of_pentacles.mp3",
    },
    hi: {
      title: "पेंटाकल्स का सात",
      audioPath: "audio/Hindi/suit_of_pentacles/7_पेंटाकल्स-का-सात.mp3",
    },
  },
  "eight-of-pentacles": {
    image: "images/suit_of_pentacles/eight_of_pentacles.webp",
    en: {
      title: "Eight of Pentacles",
      audioPath: "audio/suit_of_pentacles/8_eight_of_pentacles.mp3",
    },
    hi: {
      title: "पेंटाकल्स का आठ",
      audioPath: "audio/Hindi/suit_of_pentacles/8_पेंटाकल्स-का-आठ.mp3",
    },
  },
  "nine-of-pentacles": {
    image: "images/suit_of_pentacles/nine_of_pentacles.webp",
    en: {
      title: "Nine of Pentacles",
      audioPath: "audio/suit_of_pentacles/9_nine_of_pentacles.mp3",
    },
    hi: {
      title: "पेंटाकल्स का नौ",
      audioPath: "audio/Hindi/suit_of_pentacles/9_पेंटाकल्स-का-नौ.mp3",
    },
  },
  "ten-of-pentacles": {
    image: "images/suit_of_pentacles/ten_of_pentacles.webp",
    en: {
      title: "Ten of Pentacles",
      audioPath: "audio/suit_of_pentacles/10_ten_of_pentacles.mp3",
    },
    hi: {
      title: "पेंटाकल्स का दस",
      audioPath: "audio/Hindi/suit_of_pentacles/10_पेंटाकल्स-का-दस.mp3",
    },
  },
  "page-of-pentacles": {
    image: "images/suit_of_pentacles/page_of_pentacles.webp",
    en: {
      title: "Page of Pentacles",
      audioPath: "audio/suit_of_pentacles/11_page_of_pentacles.mp3",
    },
    hi: {
      title: "पेंटाकल्स का राजकुमार",
      audioPath: "audio/Hindi/suit_of_pentacles/11_पेंटाकल्स-का-राजकुमार.mp3",
    },
  },
  "knight-of-pentacles": {
    image: "images/suit_of_pentacles/knight_of_pentacles.webp",
    en: {
      title: "Knight of Pentacles",
      audioPath: "audio/suit_of_pentacles/12_knight_of_pentacles.mp3",
    },
    hi: {
      title: "पेंटाकल्स का शूरवीर",
      audioPath: "audio/Hindi/suit_of_pentacles/12_पेंटाकल्स-का-शूरवीर.mp3",
    },
  },
  "queen-of-pentacles": {
    image: "images/suit_of_pentacles/queen_of_pentacles.webp",
    en: {
      title: "Queen of Pentacles",
      audioPath: "audio/suit_of_pentacles/13_queen_of_pentacles.mp3",
    },
    hi: {
      title: "पेंटाकल्स की रानी",
      audioPath: "audio/Hindi/suit_of_pentacles/13_पेंटाकल्स-की-रानी.mp3",
    },
  },
  "king-of-pentacles": {
    image: "images/suit_of_pentacles/king_of_pentacles.webp",
    en: {
      title: "King of Pentacles",
      audioPath: "audio/suit_of_pentacles/14_king_of_pentacles.mp3",
    },
    hi: {
      title: "पेंटाकल्स का राजा",
      audioPath: "audio/Hindi/suit_of_pentacles/14_पेंटाकल्स-का-राजा.mp3",
    },
  },

  // suit of cups
  "ace-of-cups": {
    image: "images/suit_of_cups/ace_of_cups.webp",
    en: {
      title: "Ace of Cups",
      audioPath: "audio/suit_of_cups/1_ace_of_cups.mp3",
    },
    hi: {
      title: "कप्स का इक्का",
      audioPath: "audio/Hindi/suit_of_cups/1_कप्स-का-इक्का.mp3",
    },
  },
  "two-of-cups": {
    image: "images/suit_of_cups/two_of_cups.webp",
    en: {
      title: "Two of Cups",
      audioPath: "audio/suit_of_cups/2_two_of_cups.mp3",
    },
    hi: {
      title: "कप्स का दो",
      audioPath: "audio/Hindi/suit_of_cups/2_कप्स-का-दो.mp3",
    },
  },
  "three-of-cups": {
    image: "images/suit_of_cups/three_of_cups.webp",
    en: {
      title: "Three of Cups",
      audioPath: "audio/suit_of_cups/3_three_of_cups.mp3",
    },
    hi: {
      title: "कप्स का तीन",
      audioPath: "audio/Hindi/suit_of_cups/3_कप्स-का-तीन.mp3",
    },
  },
  "four-of-cups": {
    image: "images/suit_of_cups/four_of_cups.webp",
    en: {
      title: "Four of Cups",
      audioPath: "audio/suit_of_cups/4_four_of_cups.mp3",
    },
    hi: {
      title: "कप्स का चार",
      audioPath: "audio/Hindi/suit_of_cups/4_कप्स-का-चार.mp3",
    },
  },
  "five-of-cups": {
    image: "images/suit_of_cups/five_of_cups.webp",
    en: {
      title: "Five of Cups",
      audioPath: "audio/suit_of_cups/5_five_of_cups.mp3",
    },
    hi: {
      title: "कप्स का पांच",
      audioPath: "audio/Hindi/suit_of_cups/5_कप्स-का-पांच.mp3",
    },
  },
  "six-of-cups": {
    image: "images/suit_of_cups/six_of_cups.webp",
    en: {
      title: "Six of Cups",
      audioPath: "audio/suit_of_cups/6_six_of_cups.mp3",
    },
    hi: {
      title: "कप्स का छह",
      audioPath: "audio/Hindi/suit_of_cups/6_कप्स-का-छह.mp3",
    },
  },
  "seven-of-cups": {
    image: "images/suit_of_cups/seven_of_cups.webp",
    en: {
      title: "Seven of Cups",
      audioPath: "audio/suit_of_cups/7_seven_of_cups.mp3",
    },
    hi: {
      title: "कप्स का सात",
      audioPath: "audio/Hindi/suit_of_cups/7_कप्स-का-सात.mp3",
    },
  },
  "eight-of-cups": {
    image: "images/suit_of_cups/eight_of_cups.webp",
    en: {
      title: "Eight of Cups",
      audioPath: "audio/suit_of_cups/8_eight_of_cups.mp3",
    },
    hi: {
      title: "कप्स का आठ",
      audioPath: "audio/Hindi/suit_of_cups/8_कप्स-का-आठ.mp3",
    },
  },
  "nine-of-cups": {
    image: "images/suit_of_cups/nine_of_cups.webp",
    en: {
      title: "Nine of Cups",
      audioPath: "audio/suit_of_cups/9_nine_of_cups.mp3",
    },
    hi: {
      title: "कप्स का नौ",
      audioPath: "audio/Hindi/suit_of_cups/9_कप्स-का-नौ.mp3",
    },
  },
  "ten-of-cups": {
    image: "images/suit_of_cups/ten_of_cups.webp",
    en: {
      title: "Ten of Cups",
      audioPath: "audio/suit_of_cups/10_ten_of_cups.mp3",
    },
    hi: {
      title: "कप्स का दस",
      audioPath: "audio/Hindi/suit_of_cups/10_कप्स-का-दस.mp3",
    },
  },
  "page-of-cups": {
    image: "images/suit_of_cups/page_of_cups.webp",
    en: {
      title: "Page of Cups",
      audioPath: "audio/suit_of_cups/11_page_of_cups.mp3",
    },
    hi: {
      title: "कप्स का राजकुमार",
      audioPath: "audio/Hindi/suit_of_cups/11_कप्स-का-राजकुमार.mp3",
    },
  },
  "knight-of-cups": {
    image: "images/suit_of_cups/knight_of_cups.webp",
    en: {
      title: "Knight of Cups",
      audioPath: "audio/suit_of_cups/12_knight_of_cups.mp3",
    },
    hi: {
      title: "कप्स का शूरवीर",
      audioPath: "audio/Hindi/suit_of_cups/12_कप्स-का-शूरवीर.mp3",
    },
  },
  "queen-of-cups": {
    image: "images/suit_of_cups/queen_of_cups.webp",
    en: {
      title: "Queen of Cups",
      audioPath: "audio/suit_of_cups/13_queen_of_cups.mp3",
    },
    hi: {
      title: "कप्स की रानी",
      audioPath: "audio/Hindi/suit_of_cups/13_कप्स-की-रानी.mp3",
    },
  },
  "king-of-cups": {
    image: "images/suit_of_cups/king_of_cups.webp",
    en: {
      title: "King of Cups",
      audioPath: "audio/suit_of_cups/14_king_of_cups.mp3",
    },
    hi: {
      title: "कप्स का राजा",
      audioPath: "audio/Hindi/suit_of_cups/14_कप्स-का-राजा.mp3",
    },
  },

  // suit of wands
  "ace-of-wands": {
    image: "images/suit_of_wands/ace_of_wands.webp",
    en: {
      title: "Ace of Wands",
      audioPath: "audio/suit_of_wands/1_ace_of_wands.mp3",
    },
    hi: {
      title: "वांड्स का इक्का",
      audioPath: "audio/Hindi/suit_of_wands/1_वौन्ड्स-का-इक्का.mp3",
    },
  },
  "two-of-wands": {
    image: "images/suit_of_wands/two_of_wands.webp",
    en: {
      title: "Two of Wands",
      audioPath: "audio/suit_of_wands/2_two_of_wands.mp3",
    },
    hi: {
      title: "वांड्स का दो",
      audioPath: "audio/Hindi/suit_of_wands/2_वौन्ड्स-का-दो.mp3",
    },
  },
  "three-of-wands": {
    image: "images/suit_of_wands/three_of_wands.webp",
    en: {
      title: "Three of Wands",
      audioPath: "audio/suit_of_wands/3_three_of_wands.mp3",
    },
    hi: {
      title: "वांड्स का तीन",
      audioPath: "audio/Hindi/suit_of_wands/3_वौन्ड्स-का-तीन.mp3",
    },
  },
  "four-of-wands": {
    image: "images/suit_of_wands/four_of_wands.webp",
    en: {
      title: "Four of Wands",
      audioPath: "audio/suit_of_wands/4_four_of_wands.mp3",
    },
    hi: {
      title: "वांड्स का चार",
      audioPath: "audio/Hindi/suit_of_wands/4_वौन्ड्स-का-चार.mp3",
    },
  },
  "five-of-wands": {
    image: "images/suit_of_wands/five_of_wands.webp",
    en: {
      title: "Five of Wands",
      audioPath: "audio/suit_of_wands/5_five_of_wands.mp3",
    },
    hi: {
      title: "वांड्स का पांच",
      audioPath: "audio/Hindi/suit_of_wands/5_वौन्ड्स-का-पांच.mp3",
    },
  },
  "six-of-wands": {
    image: "images/suit_of_wands/six_of_wands.webp",
    en: {
      title: "Six of Wands",
      audioPath: "audio/suit_of_wands/6_six_of_wands.mp3",
    },
    hi: {
      title: "वांड्स का छह",
      audioPath: "audio/Hindi/suit_of_wands/6_वौन्ड्स-का-छह.mp3",
    },
  },
  "seven-of-wands": {
    image: "images/suit_of_wands/seven_of_wands.webp",
    en: {
      title: "Seven of Wands",
      audioPath: "audio/suit_of_wands/7_seven_of_wands.mp3",
    },
    hi: {
      title: "वांड्स का सात",
      audioPath: "audio/Hindi/suit_of_wands/7_वौन्ड्स-का-सात.mp3",
    },
  },
  "eight-of-wands": {
    image: "images/suit_of_wands/eight_of_wands.webp",
    en: {
      title: "Eight of Wands",
      audioPath: "audio/suit_of_wands/8_eight_of_wands.mp3",
    },
    hi: {
      title: "वांड्स का आठ",
      audioPath: "audio/Hindi/suit_of_wands/8_वौन्ड्स-का-आठ.mp3",
    },
  },
  "nine-of-wands": {
    image: "images/suit_of_wands/nine_of_wands.webp",
    en: {
      title: "Nine of Wands",
      audioPath: "audio/suit_of_wands/9_nine_of_wands.mp3",
    },
    hi: {
      title: "वांड्स का नौ",
      audioPath: "audio/Hindi/suit_of_wands/9_वौन्ड्स-का-नौ.mp3",
    },
  },
  "ten-of-wands": {
    image: "images/suit_of_wands/ten_of_wands.webp",
    en: {
      title: "Ten of Wands",
      audioPath: "audio/suit_of_wands/10_ten_of_wands.mp3",
    },
    hi: {
      title: "वांड्स का दस",
      audioPath: "audio/Hindi/suit_of_wands/10_वौन्ड्स-का-दस.mp3",
    },
  },
  "page-of-wands": {
    image: "images/suit_of_wands/page_of_wands.webp",
    en: {
      title: "Page of Wands",
      audioPath: "audio/suit_of_wands/11_page_of_wands.mp3",
    },
    hi: {
      title: "वांड्स का राजकुमार",
      audioPath: "audio/Hindi/suit_of_wands/11_वौन्ड्स-का-राजकुमार.mp3",
    },
  },
  "knight-of-wands": {
    image: "images/suit_of_wands/knight_of_wands.webp",
    en: {
      title: "Knight of Wands",
      audioPath: "audio/suit_of_wands/12_knight_of_wands.mp3",
    },
    hi: {
      title: "वांड्स का शूरवीर",
      audioPath: "audio/Hindi/suit_of_wands/12_वौन्ड्स-का-शूरवीर.mp3",
    },
  },
  "queen-of-wands": {
    image: "images/suit_of_wands/queen_of_wands.webp",
    en: {
      title: "Queen of Wands",
      audioPath: "audio/suit_of_wands/13_queen_of_wands.mp3",
    },
    hi: {
      title: "वांड्स की रानी",
      audioPath: "audio/Hindi/suit_of_wands/13_वौन्ड्स-की-रानी.mp3",
    },
  },
  "king-of-wands": {
    image: "images/suit_of_wands/king_of_wands.webp",
    en: {
      title: "King of Wands",
      audioPath: "audio/suit_of_wands/14_king_of_wands.mp3",
    },
    hi: {
      title: "वांड्स का राजा",
      audioPath: "audio/Hindi/suit_of_wands/14_वौन्ड्स-का-राजा.mp3",
    },
  },

  // suit of swords
  "ace-of-swords": {
    image: "images/suit_of_swords/ace_of_swords.webp",
    en: {
      title: "Ace of Swords",
      audioPath: "audio/suit_of_swords/1_ace_of_swords.mp3",
    },
    hi: {
      title: "स्वॉर्ड्स का इक्का",
      audioPath: "audio/Hindi/suit_of_swords/1_स्वॉर्ड्स-का-इक्का.mp3",
    },
  },
  "two-of-swords": {
    image: "images/suit_of_swords/two_of_swords.webp",
    en: {
      title: "Two of Swords",
      audioPath: "audio/suit_of_swords/2_two_of_swords.mp3",
    },
    hi: {
      title: "स्वॉर्ड्स का दो",
      audioPath: "audio/Hindi/suit_of_swords/2_स्वॉर्ड्स-का-दो.mp3",
    },
  },
  "three-of-swords": {
    image: "images/suit_of_swords/three_of_swords.webp",
    en: {
      title: "Three of Swords",
      audioPath: "audio/suit_of_swords/3_three_of_swords.mp3",
    },
    hi: {
      title: "स्वॉर्ड्स का तीन",
      audioPath: "audio/Hindi/suit_of_swords/3_स्वॉर्ड्स-का-तीन.mp3",
    },
  },
  "four-of-swords": {
    image: "images/suit_of_swords/four_of_swords.webp",
    en: {
      title: "Four of Swords",
      audioPath: "audio/suit_of_swords/4_four_of_swords.mp3",
    },
    hi: {
      title: "स्वॉर्ड्स का चार",
      audioPath: "audio/Hindi/suit_of_swords/4_स्वॉर्ड्स-का-चार.mp3",
    },
  },
  "five-of-swords": {
    image: "images/suit_of_swords/five_of_swords.webp",
    en: {
      title: "Five of Swords",
      audioPath: "audio/suit_of_swords/5_five_of_swords.mp3",
    },
    hi: {
      title: "स्वॉर्ड्स का पांच",
      audioPath: "audio/Hindi/suit_of_swords/5_स्वॉर्ड्स-का-पांच.mp3",
    },
  },
  "six-of-swords": {
    image: "images/suit_of_swords/six_of_swords.webp",
    en: {
      title: "Six of Swords",
      audioPath: "audio/suit_of_swords/6_six_of_swords.mp3",
    },
    hi: {
      title: "स्वॉर्ड्स का छह",
      audioPath: "audio/Hindi/suit_of_swords/6_स्वॉर्ड्स-का-छह.mp3",
    },
  },
  "seven-of-swords": {
    image: "images/suit_of_swords/seven_of_swords.webp",
    en: {
      title: "Seven of Swords",
      audioPath: "audio/suit_of_swords/7_seven_of_swords.mp3",
    },
    hi: {
      title: "स्वॉर्ड्स का सात",
      audioPath: "audio/Hindi/suit_of_swords/7_स्वॉर्ड्स-का-सात.mp3",
    },
  },
  "eight-of-swords": {
    image: "images/suit_of_swords/eight_of_swords.webp",
    en: {
      title: "Eight of Swords",
      audioPath: "audio/suit_of_swords/8_eight_of_swords.mp3",
    },
    hi: {
      title: "स्वॉर्ड्स का आठ",
      audioPath: "audio/Hindi/suit_of_swords/8_स्वॉर्ड्स-का-आठ.mp3",
    },
  },
  "nine-of-swords": {
    image: "images/suit_of_swords/nine_of_swords.webp",
    en: {
      title: "Nine of Swords",
      audioPath: "audio/suit_of_swords/9_nine_of_swords.mp3",
    },
    hi: {
      title: "स्वॉर्ड्स का नौ",
      audioPath: "audio/Hindi/suit_of_swords/9_स्वॉर्ड्स-का-नौ.mp3",
    },
  },
  "ten-of-swords": {
    image: "images/suit_of_swords/ten_of_swords.webp",
    en: {
      title: "Ten of Swords",
      audioPath: "audio/suit_of_swords/10_ten_of_swords.mp3",
    },
    hi: {
      title: "स्वॉर्ड्स का दस",
      audioPath: "audio/Hindi/suit_of_swords/10_स्वॉर्ड्स-का-दस.mp3",
    },
  },
  "page-of-swords": {
    image: "images/suit_of_swords/page_of_swords.webp",
    en: {
      title: "Page of Swords",
      audioPath: "audio/suit_of_swords/11_page_of_swords.mp3",
    },
    hi: {
      title: "स्वॉर्ड्स का राजकुमार",
      audioPath: "audio/Hindi/suit_of_swords/11_स्वॉर्ड्स-का-राजकुमार.mp3",
    },
  },
  "knight-of-swords": {
    image: "images/suit_of_swords/knight_of_swords.webp",
    en: {
      title: "Knight of Swords",
      audioPath: "audio/suit_of_swords/12_knight_of_swords.mp3",
    },
    hi: {
      title: "स्वॉर्ड्स का शूरवीर",
      audioPath: "audio/Hindi/suit_of_swords/12_स्वॉर्ड्स-का-शूरवीर.mp3",
    },
  },
  "queen-of-swords": {
    image: "images/suit_of_swords/queen_of_swords.webp",
    en: {
      title: "Queen of Swords",
      audioPath: "audio/suit_of_swords/13_queen_of_swords.mp3",
    },
    hi: {
      title: "स्वॉर्ड्स की रानी",
      audioPath: "audio/Hindi/suit_of_swords/13_स्वॉर्ड्स-की-रानी.mp3",
    },
  },
  "king-of-swords": {
    image: "images/suit_of_swords/king_of_swords.webp",
    en: {
      title: "King of Swords",
      audioPath: "audio/suit_of_swords/14_king_of_swords.mp3",
    },
    hi: {
      title: "स्वॉर्ड्स का राजा",
      audioPath: "audio/Hindi/suit_of_swords/14_स्वॉर्ड्स-का-राजा.mp3",
    },
  },
};
