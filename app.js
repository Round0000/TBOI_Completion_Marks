const data_marks = {
  Heart: {
    boss: "Mom's Heart / It Lives",
    icon: "Heart",
  },
  Cross: {
    boss: "Isaac",
    icon: "Cathedral",
  },
  Polaroid: {
    boss: "???",
    icon: "Chest",
  },
  "Inverted Cross": {
    boss: "Satan",
    icon: "Sheol",
  },
  Negative: {
    boss: "The Lamb",
    icon: "DarkRoom",
  },
  Brimstone: {
    boss: "Mega Satan",
    icon: "Brimstone",
  },
  Star: {
    boss: "Boss Rush",
    icon: "BossRush",
  },
  Hush: {
    boss: "Hush",
    icon: "BlueWomb",
  },
  Greed: {
    boss: "Ultra Greed",
    icon: "Greed",
  },
  Greedier: {
    boss: "Ultra Greedier",
    icon: "Greed",
  },
  Delirium: {
    boss: "Delirium",
    icon: "Void",
  },
  "Tainted Delirium": {
    boss: "Delirium",
    icon: "Tainted_Void",
  },
  Knife: {
    boss: "Mother",
    icon: "Mother",
  },
  "The Beast": {
    boss: "The Beast",
    icon: "Beast",
  },
  All: {
    boss: "All Hard Mode Marks",
    icon: "All",
  },
};

const data_chars = [
  {
    name: "Isaac",
    icon: "Isaac",
    marks: [
      {
        mark: "Heart",
        item: "Lost Baby",
        icon: "Lost_Baby",
      },
      {
        mark: "Cross",
        item: "Isaac's Tears",
        icon: "Isaac-s_Tears",
      },
      { mark: "Polaroid", item: "The D20", icon: "The_D20" },
      {
        mark: "Inverted Cross",
        item: "Mom's Knife",
        icon: "Mom-s_Knife",
      },
      { mark: "Negative", item: "Missing Poster", icon: "Missing_Poster" },
      { mark: "Brimstone", item: "Cry Baby", icon: "Cry_Baby" },
      {
        mark: "Star",
        item: "Isaac's Head",
        icon: "Isaac-s_Head",
      },
      { mark: "Hush", item: "Fart Baby", icon: "Fart_Baby" },
      { mark: "Greed", item: "Lil' Chest", icon: "Lil-_Chest" },
      { mark: "Greedier", item: "D1", icon: "D1" },
      { mark: "Delirium", item: "D Infinity", icon: "D_Infinity" },
      { mark: "Knife", item: "Meat Cleaver", icon: "Meat_Cleaver" },
      { mark: "The Beast", item: "Options?", icon: "Options" },
      { mark: "All", item: "Buddy Baby", icon: "Buddy_Baby" },
    ],
  },
  {
    name: "Magdalene",
    icon: "Magdalene",
    marks: [
      {
        mark: "Heart",
        item: "Cute Baby",
        icon: "Cute_Baby",
      },
      {
        mark: "Cross",
        item: "A Cross",
        icon: "A_Cross",
      },
      { mark: "Polaroid", item: "Celtic Cross", icon: "Celtic_Cross" },
      {
        mark: "Inverted Cross",
        item: "Guardian Angel",
        icon: "Guardian_Angel",
      },
      { mark: "Negative", item: "Maggy's Faith", icon: "Maggy-s_Faith" },
      { mark: "Brimstone", item: "Red Baby", icon: "Red_Baby" },
      {
        mark: "Star",
        item: "Maggy's Bow",
        icon: "Maggy-s_Bow",
      },
      { mark: "Hush", item: "Purity", icon: "Purity" },
      { mark: "Greed", item: "Censer", icon: "Censer" },
      { mark: "Greedier", item: "Glyph of Balance", icon: "Glyph_of_Balance" },
      { mark: "Delirium", item: "Eucharist", icon: "Eucharist" },
      { mark: "Knife", item: "Yuck Heart", icon: "Yuck_Heart" },
      { mark: "The Beast", item: "Candy Heart", icon: "Candy_Heart" },
      { mark: "All", item: "Colorful Baby", icon: "Colorful_Baby" },
    ],
  },
  {
    name: "Cain",
    icon: "Cain",
    marks: [
      {
        mark: "Heart",
        item: "Glass Baby",
        icon: "Glass_Baby",
      },
      {
        mark: "Cross",
        item: "A Bag of Pennies",
        icon: "A_Bag_of_Pennies",
      },
      {
        mark: "Polaroid",
        item: "Cain's Eye",
        icon: "Cain-s_Eye",
      },
      {
        mark: "Inverted Cross",
        item: "A Bag of Bombs",
        icon: "A_Bag_of_Bombs",
      },
      {
        mark: "Negative",
        item: "Abel",
        icon: "Abel",
      },
      {
        mark: "Brimstone",
        item: "Green Baby",
        icon: "Green_Baby",
      },
      {
        mark: "Star",
        item: "Cain's Other Eye",
        icon: "Cain-s_Other_Eye",
      },
      {
        mark: "Hush",
        item: "D12",
        icon: "D12",
      },
      {
        mark: "Greed",
        item: "Evil Eye",
        icon: "Evil_Eye",
      },
      {
        mark: "Greedier",
        item: "Sack of Sacks",
        icon: "Sack_of_Sacks",
      },
      {
        mark: "Delirium",
        item: "Silver Dollar",
        icon: "Silver_Dollar",
      },
      {
        mark: "Knife",
        item: "Guppy's Eye",
        icon: "Guppy-s_Eye",
      },
      {
        mark: "The Beast",
        item: "A Pound of Flesh",
        icon: "A_Pound_of_Flesh",
      },
      {
        mark: "All",
        item: "Picky Baby",
        icon: "Picky_Baby",
      },
    ],
  },
  {
    name: "Judas",
    icon: "Judas",
    marks: [
      {
        mark: "Heart",
        item: "Shadow Baby",
        icon: "Shadow_Baby",
      },
      {
        mark: "Cross",
        item: "Guillotine",
        icon: "Guillotine",
      },
      {
        mark: "Polaroid",
        item: "The Left Hand",
        icon: "The_Left_Hand",
      },
      {
        mark: "Inverted Cross",
        item: "Judas' Tongue",
        icon: "Judas-_Tongue",
      },
      {
        mark: "Negative",
        item: "Curved Horn",
        icon: "Curved_Horn",
      },
      {
        mark: "Brimstone",
        item: "Brown Baby",
        icon: "Brown_Baby",
      },
      {
        mark: "Star",
        item: "Judas' Shadow",
        icon: "Judas-_Shadow",
      },
      {
        mark: "Hush",
        item: "Betrayal",
        icon: "Betrayal",
      },
      {
        mark: "Greed",
        item: "My Shadow",
        icon: "My_Shadow",
      },
      {
        mark: "Greedier",
        item: "Eye of Belial",
        icon: "Eye_of_Belial",
      },
      {
        mark: "Delirium",
        item: "Shade",
        icon: "Shade",
      },
      {
        mark: "Knife",
        item: "Akeldama",
        icon: "Akeldama",
      },
      {
        mark: "The Beast",
        item: "Redemption",
        icon: "Redemption",
      },
      {
        mark: "All",
        item: "Belial Baby",
        icon: "Belial_Baby",
      },
    ],
  },
  {
    name: "???",
    icon: "Blue_Baby",
    marks: [
      {
        mark: "Heart",
        item: "Dead Baby",
        icon: "Dead_Baby",
      },
      {
        mark: "Cross",
        item: "The D6",
        icon: "The_D6",
      },
      {
        mark: "Polaroid",
        item: "Fate",
        icon: "Fate",
      },
      {
        mark: "Inverted Cross",
        item: "Forget Me Now",
        icon: "Forget_Me_Now",
      },
      {
        mark: "Negative",
        item: "???'s Soul",
        icon: "Blue_Baby-s_Soul",
      },
      {
        mark: "Brimstone",
        item: "Blue Baby",
        icon: "Blue_Baby",
      },
      {
        mark: "Star",
        item: "???'s Only Friend",
        icon: "Blue_Baby-s_Only_Friend",
      },
      {
        mark: "Hush",
        item: "Fate's Reward",
        icon: "Fate-s_Reward",
      },
      {
        mark: "Greed",
        item: "Cracked Dice",
        icon: "Cracked_Dice",
      },
      {
        mark: "Greedier",
        item: "Meconium",
        icon: "Meconium",
      },
      {
        mark: "Delirium",
        item: "King Baby",
        icon: "King_Baby",
      },
      {
        mark: "Knife",
        item: "Eternal D6",
        icon: "Eternal_D6",
      },
      {
        mark: "The Beast",
        item: "Montezuma's Revenge",
        icon: "Montezuma-s_Revenge",
      },
      {
        mark: "All",
        item: "Hive Baby",
        icon: "Hive_Baby",
      },
    ],
  },
  {
    name: "Eve",
    icon: "Eve",
    marks: [
      {
        mark: "Heart",
        item: "Crow Baby",
        icon: "Crow_Baby",
      },
      {
        mark: "Cross",
        item: "Eve's Bird Foot",
        icon: "Eve-s_Bird_Foot",
      },
      {
        mark: "Polaroid",
        item: "Sacrificial Dagger",
        icon: "Sacrificial_Dagger",
      },
      {
        mark: "Inverted Cross",
        item: "The Razor",
        icon: "The_Razor",
      },
      {
        mark: "Negative",
        item: "Black Lipstick",
        icon: "Black_Lipstick",
      },
      {
        mark: "Brimstone",
        item: "Lil' Baby",
        icon: "Lil-_Baby",
      },
      {
        mark: "Star",
        item: "Eve's Mascara",
        icon: "Eve-s_Mascara",
      },
      {
        mark: "Hush",
        item: "Athame",
        icon: "Athame",
      },
      {
        mark: "Greed",
        item: "Black Feather",
        icon: "Black_Feather",
      },
      {
        mark: "Greedier",
        item: "Crow Heart",
        icon: "Crow_Heart",
      },
      {
        mark: "Delirium",
        item: "Dull Razor",
        icon: "Dull_Razor",
      },
      {
        mark: "Knife",
        item: "Bird Cage",
        icon: "Bird_Cage",
      },
      {
        mark: "The Beast",
        item: "Cracked Orb",
        icon: "Cracked_Orb",
      },
      {
        mark: "All",
        item: "Whore Baby",
        icon: "Whore_Baby",
      },
    ],
  },
  {
    name: "Samson",
    icon: "Samson",
    marks: [
      {
        mark: "Heart",
        item: "Fighting Baby",
        icon: "Fighting_Baby",
      },
      {
        mark: "Cross",
        item: "Bloody Lust",
        icon: "Bloody_Lust",
      },
      {
        mark: "Polaroid",
        item: "Blood Penny",
        icon: "Blood_Penny",
      },
      {
        mark: "Inverted Cross",
        item: "Blood Rights",
        icon: "Blood_Rights",
      },
      {
        mark: "Negative",
        item: "Samson's Lock",
        icon: "Samson-s_Lock",
      },
      {
        mark: "Brimstone",
        item: "Rage Baby",
        icon: "Rage_Baby",
      },
      {
        mark: "Star",
        item: "Samson's Chains",
        icon: "Samson-s_Chains",
      },
      {
        mark: "Hush",
        item: "Blind Rage",
        icon: "Blind_Rage",
      },
      {
        mark: "Greed",
        item: "Lusty Blood",
        icon: "Lusty_Blood",
      },
      {
        mark: "Greedier",
        item: "Stem Cell",
        icon: "Stem_Cell",
      },
      {
        mark: "Delirium",
        item: "Bloody Crown",
        icon: "Bloody_Crown",
      },
      {
        mark: "Knife",
        item: "Bloody Gust",
        icon: "Bloody_Gust",
      },
      {
        mark: "The Beast",
        item: "Empty Heart",
        icon: "Empty_Heart",
      },
      {
        mark: "All",
        item: "Revenge Baby",
        icon: "Revenge_Baby",
      },
    ],
  },
  {
    name: "Azazel",
    icon: "Azazel",
    marks: [
      {
        mark: "Heart",
        item: "Begotten Baby",
        icon: "Begotten_Baby",
      },
      {
        mark: "Cross",
        item: "Satanic Bible",
        icon: "Satanic_Bible",
      },
      {
        mark: "Polaroid",
        item: "Abaddon",
        icon: "Abaddon",
      },
      {
        mark: "Inverted Cross",
        item: "Daemon's Tail",
        icon: "Daemon-s_Tail",
      },
      {
        mark: "Negative",
        item: "Demon Baby",
        icon: "Demon_Baby",
      },
      {
        mark: "Brimstone",
        item: "Black Baby",
        icon: "Black_Baby",
      },
      {
        mark: "Star",
        item: "The Nail",
        icon: "The_Nail",
      },
      {
        mark: "Hush",
        item: "Maw of the Void",
        icon: "Maw_of_the_Void",
      },
      {
        mark: "Greed",
        item: "Lilith",
        icon: "Lilith",
      },
      {
        mark: "Greedier",
        item: "Bat Wing",
        icon: "Bat_Wing",
      },
      {
        mark: "Delirium",
        item: "Dark Prince's Crown",
        icon: "Dark_Prince-s_Crown",
      },
      {
        mark: "Knife",
        item: "Devil's Crown",
        icon: "Devil-s_Crown",
      },
      {
        mark: "The Beast",
        item: "Lil Abaddon",
        icon: "Lil_Abaddon",
      },
      {
        mark: "All",
        item: "Sucky Baby",
        icon: "Sucky_Baby",
      },
    ],
  },
  {
    name: "Lazarus",
    icon: "Lazarus",
    marks: [
      {
        mark: "Heart",
        item: "Wrapped Baby",
        icon: "Wrapped_Baby",
      },
      {
        mark: "Cross",
        item: "Lazarus' Rags",
        icon: "Lazarus-_Rags",
      },
      {
        mark: "Polaroid",
        item: "Store Credit",
        icon: "Store_Credit",
      },
      {
        mark: "Inverted Cross",
        item: "Broken Ankh",
        icon: "Broken_Ankh",
      },
      {
        mark: "Negative",
        item: "Pandora's Box",
        icon: "Pandora-s_Box",
      },
      {
        mark: "Brimstone",
        item: "Long Baby",
        icon: "Long_Baby",
      },
      {
        mark: "Star",
        item: "Missing No.",
        icon: "Missing_No.",
      },
      {
        mark: "Hush",
        item: "Empty Vessel",
        icon: "Empty_Vessel",
      },
      {
        mark: "Greed",
        item: "Key Bum",
        icon: "Key_Bum",
      },
      {
        mark: "Greedier",
        item: "Plan C",
        icon: "Plan_C",
      },
      {
        mark: "Delirium",
        item: "Compound Fracture",
        icon: "Compound_Fracture",
      },
      {
        mark: "Knife",
        item: "Tinytoma",
        icon: "Tinytoma",
      },
      {
        mark: "The Beast",
        item: "Astral Projection",
        icon: "Astral_Projection",
      },
      {
        mark: "All",
        item: "Dripping Baby",
        icon: "Dripping_Baby",
      },
    ],
  },
  {
    name: "Eden",
    icon: "Eden",
    marks: [
      {
        mark: "Heart",
        item: "Glitch Baby",
        icon: "Glitch_Baby",
      },
      {
        mark: "Cross",
        item: "Blank Card",
        icon: "Blank_Card",
      },
      {
        mark: "Polaroid",
        item: "Mysterious Paper",
        icon: "Mysterious_Paper",
      },
      {
        mark: "Inverted Cross",
        item: "Book of Secrets",
        icon: "Book_of_Secrets",
      },
      {
        mark: "Negative",
        item: "Mystery Sack",
        icon: "Mystery_Sack",
      },
      {
        mark: "Brimstone",
        item: "Yellow Baby",
        icon: "Yellow_Baby",
      },
      {
        mark: "Star",
        item: "Undefined",
        icon: "Undefined",
      },
      {
        mark: "Hush",
        item: "Eden's Blessing",
        icon: "Eden-s_Blessing",
      },
      {
        mark: "Greed",
        item: "GB Bug",
        icon: "GB_Bug",
      },
      {
        mark: "Greedier",
        item: "Metronome",
        icon: "Metronome",
      },
      {
        mark: "Delirium",
        item: "Eden's Soul",
        icon: "Eden-s_Soul",
      },
      {
        mark: "Knife",
        item: "'M",
        icon: "-M",
      },
      {
        mark: "The Beast",
        item: "Everything Jar",
        icon: "Everything_Jar",
      },
      {
        mark: "All",
        item: "Cracked Baby",
        icon: "Cracked_Baby",
      },
    ],
  },
  {
    name: "The Lost",
    icon: "The_Lost",
    marks: [
      {
        mark: "Heart",
        item: "-0- Baby",
        icon: "-0-_Baby",
      },
      {
        mark: "Cross",
        item: "Isaac's Heart",
        icon: "Isaac-s_Heart",
      },
      {
        mark: "Polaroid",
        item: "The Body",
        icon: "The_Body",
      },
      {
        mark: "Inverted Cross",
        item: "The Mind",
        icon: "The_Mind",
      },
      {
        mark: "Negative",
        item: "The Soul",
        icon: "The_Soul",
      },
      {
        mark: "Brimstone",
        item: "White Baby",
        icon: "White_Baby",
      },
      {
        mark: "Star",
        item: "The D100",
        icon: "The_D100",
      },
      {
        mark: "Hush",
        item: "Sworn Protector",
        icon: "Sworn_Protector",
      },
      {
        mark: "Greed",
        item: "Zodiac",
        icon: "Zodiac",
      },
      {
        mark: "Greedier",
        item: "Dad's Lost Coin",
        icon: "Dad-s_Lost_Coin",
      },
      {
        mark: "Delirium",
        item: "Holy Card",
        icon: "Holy_Card",
      },
      {
        mark: "Knife",
        item: "Lost Soul",
        icon: "Lost_Soul",
      },
      {
        mark: "The Beast",
        item: "Hungry Soul",
        icon: "Hungry_Soul",
      },
      {
        mark: "All",
        item: "Godhead",
        icon: "Godhead",
      },
    ],
  },
  {
    name: "Lilith",
    icon: "Lilith",
    marks: [
      {
        mark: "Heart",
        item: "Goat Head Baby",
        icon: "Goat_Head_Baby",
      },
      {
        mark: "Cross",
        item: "Rune Bag",
        icon: "Rune_Bag",
      },
      {
        mark: "Polaroid",
        item: "Cambion Conception",
        icon: "Cambion_Conception",
      },
      {
        mark: "Inverted Cross",
        item: "Serpent's Kiss",
        icon: "Serpent-s_Kiss",
      },
      {
        mark: "Negative",
        item: "Succubus",
        icon: "Succubus",
      },
      {
        mark: "Brimstone",
        item: "Big Baby",
        icon: "Big_Baby",
      },
      {
        mark: "Star",
        item: "Immaculate Conception",
        icon: "Immaculate_Conception",
      },
      {
        mark: "Hush",
        item: "Incubus",
        icon: "Incubus",
      },
      {
        mark: "Greed",
        item: "Box of Friends",
        icon: "Box_of_Friends",
      },
      {
        mark: "Greedier",
        item: "Duality",
        icon: "Duality",
      },
      {
        mark: "Delirium",
        item: "Euthanasia",
        icon: "Euthanasia",
      },
      {
        mark: "Knife",
        item: "Blood Puppy",
        icon: "Blood_Puppy",
      },
      {
        mark: "The Beast",
        item: "C Section",
        icon: "C_Section",
      },
      {
        mark: "All",
        item: "Dark Baby",
        icon: "Dark_Baby",
      },
    ],
  },
  {
    name: "Keeper",
    icon: "Keeper",
    marks: [
      {
        mark: "Heart",
        item: "Super Greed Baby",
        icon: "Super_Greed_Baby",
      },
      {
        mark: "Cross",
        item: "Keeper holds Wooden Nickel",
        icon: "Keeper_holds_Wooden_Nickel",
      },
      {
        mark: "Polaroid",
        item: "Deep Pockets",
        icon: "Deep_Pockets",
      },
      {
        mark: "Inverted Cross",
        item: "Keeper holds Store Key",
        icon: "Keeper_holds_Store_Key",
      },
      {
        mark: "Negative",
        item: "Karma",
        icon: "Karma",
      },
      {
        mark: "Brimstone",
        item: "Noose Baby",
        icon: "Noose_Baby",
      },
      {
        mark: "Star",
        item: "Sticky Nickels",
        icon: "Sticky_Nickels",
      },
      {
        mark: "Hush",
        item: "Keeper now holds... A Penny!",
        icon: "Keeper_now_holds_A_Penny",
      },
      {
        mark: "Greed",
        item: "Rib of Greed",
        icon: "Rib_of_Greed",
      },
      {
        mark: "Greedier",
        item: "Eye of Greed",
        icon: "Eye_of_Greed",
      },
      {
        mark: "Delirium",
        item: "Crooked Penny",
        icon: "Crooked_Penny",
      },
      {
        mark: "Knife",
        item: "Keeper's Sack",
        icon: "Keeper-s_Sack",
      },
      {
        mark: "The Beast",
        item: "Keeper's Box",
        icon: "Keeper-s_Box",
      },
      {
        mark: "All",
        item: "Sale Baby",
        icon: "Sale_Baby",
      },
    ],
  },
  {
    name: "Apollyon",
    icon: "Apollyon",
    marks: [
      {
        mark: "Heart",
        item: "Smelter",
        icon: "Smelter",
      },
      {
        mark: "Cross",
        item: "Locust of Wrath",
        icon: "Locust_of_Wrath",
      },
      {
        mark: "Polaroid",
        item: "Locust of Famine",
        icon: "Locust_of_Famine",
      },
      {
        mark: "Inverted Cross",
        item: "Locust of Pestilence",
        icon: "Locust_of_Pestilence",
      },
      {
        mark: "Negative",
        item: "Locust of Death",
        icon: "Locust_of_Death",
      },
      {
        mark: "Brimstone",
        item: "Mort Baby",
        icon: "Mort_Baby",
      },
      {
        mark: "Star",
        item: "Locust of Conquest",
        icon: "Locust_of_Conquest",
      },
      {
        mark: "Hush",
        item: "Hushy",
        icon: "Hushy",
      },
      {
        mark: "Greed",
        item: "Brown Nugget",
        icon: "Brown_Nugget",
      },
      {
        mark: "Greedier",
        item: "Black Rune",
        icon: "Black_Rune",
      },
      {
        mark: "Delirium",
        item: "Void",
        icon: "Void",
      },
      {
        mark: "Knife",
        item: "Lil Portal",
        icon: "Lil_Portal",
      },
      {
        mark: "The Beast",
        item: "Worm Friend",
        icon: "Worm_Friend",
      },
      {
        mark: "All",
        item: "Apollyon Baby",
        icon: "Apollyon_Baby",
      },
    ],
  },
  {
    name: "The Forgotten",
    icon: "The_Forgotten",
    marks: [
      {
        mark: "Heart",
        item: "Marrow",
        icon: "Marrow",
      },
      {
        mark: "Cross",
        item: "Slipped Rib",
        icon: "Slipped_Rib",
      },
      {
        mark: "Polaroid",
        item: "Jaw Bone",
        icon: "Jaw_Bone",
      },
      {
        mark: "Inverted Cross",
        item: "Pointy Rib",
        icon: "Pointy_Rib",
      },
      {
        mark: "Negative",
        item: "Brittle Bones",
        icon: "Brittle_Bones",
      },
      {
        mark: "Brimstone",
        item: "Bound Baby",
        icon: "Bound_Baby",
      },
      {
        mark: "Star",
        item: "Divorce Papers",
        icon: "Divorce_Papers",
      },
      {
        mark: "Hush",
        item: "Hallowed Ground",
        icon: "Hallowed_Ground",
      },
      {
        mark: "Greed",
        item: "Finger Bone",
        icon: "Finger_Bone",
      },
      {
        mark: "Greedier",
        item: "Dad's Ring",
        icon: "Dad-s_Ring",
      },
      {
        mark: "Delirium",
        item: "Book of the Dead",
        icon: "Book_of_the_Dead",
      },
      {
        mark: "Knife",
        item: "Bone Spurs",
        icon: "Bone_Spurs",
      },
      {
        mark: "The Beast",
        item: "Spirit Shackles",
        icon: "Spirit_Shackles",
      },
      {
        mark: "All",
        item: "Bone Baby",
        icon: "Bone_Baby",
      },
    ],
  },
  {
    name: "Bethany",
    icon: "Bethany",
    marks: [
      {
        mark: "Heart",
        item: "Wisp Baby",
        icon: "Wisp_Baby",
      },
      {
        mark: "Cross",
        item: "Book of Virtues",
        icon: "Book_of_Virtues",
      },
      {
        mark: "Polaroid",
        item: "Blessed Penny",
        icon: "Blessed_Penny",
      },
      {
        mark: "Inverted Cross",
        item: "Urn of Souls",
        icon: "Urn_of_Souls",
      },
      {
        mark: "Negative",
        item: "Alabaster Box",
        icon: "Alabaster_Box",
      },
      {
        mark: "Brimstone",
        item: "Glowing Baby",
        icon: "Glowing_Baby",
      },
      {
        mark: "Star",
        item: "Beth's Faith",
        icon: "Beth-s_Faith",
      },
      {
        mark: "Hush",
        item: "Divine Intervention",
        icon: "Divine_Intervention",
      },
      {
        mark: "Greed",
        item: "Soul Locket",
        icon: "Soul_Locket",
      },
      {
        mark: "Greedier",
        item: "Vade Retro",
        icon: "Vade_Retro",
      },
      {
        mark: "Delirium",
        item: "Star of Bethlehem",
        icon: "Star_of_Bethlehem",
      },
      {
        mark: "Knife",
        item: "Revelation",
        icon: "Revelation",
      },
      {
        mark: "The Beast",
        item: "Jar of Wisps",
        icon: "Jar_of_Wisps",
      },
      {
        mark: "All",
        item: "Hope Baby",
        icon: "Hope_Baby",
      },
    ],
  },
  {
    name: "Jacob and Esau",
    icon: "Jacob_and_Esau",
    marks: [
      {
        mark: "Heart",
        item: "Double Baby",
        icon: "Double_Baby",
      },
      {
        mark: "Cross",
        item: "The Stairway",
        icon: "The_Stairway",
      },
      {
        mark: "Polaroid",
        item: "Birthright",
        icon: "Birthright",
      },
      {
        mark: "Inverted Cross",
        item: "Red Stew",
        icon: "Red_Stew",
      },
      {
        mark: "Negative",
        item: "Damocles",
        icon: "Damocles",
      },
      {
        mark: "Brimstone",
        item: "Illusion Baby",
        icon: "Illusion_Baby",
      },
      {
        mark: "Star",
        item: "Rock Bottom",
        icon: "Rock_Bottom",
      },
      {
        mark: "Hush",
        item: "Vanishing Twin",
        icon: "Vanishing_Twin",
      },
      {
        mark: "Greed",
        item: "Inner Child",
        icon: "Inner_Child",
      },
      {
        mark: "Greedier",
        item: "Genesis",
        icon: "Genesis",
      },
      {
        mark: "Delirium",
        item: "Suplex!",
        icon: "Suplex",
      },
      {
        mark: "Knife",
        item: "Magic Skin",
        icon: "Magic_Skin",
      },
      {
        mark: "The Beast",
        item: "Friend Finder",
        icon: "Friend_Finder",
      },
      {
        mark: "All",
        item: "Solomon's Baby",
        icon: "Solomon-s_Baby",
      },
    ],
  },
];

//

//
//
//

console.clear();
function extractData() {

  const table_data = [];

  const table_rows = table.querySelectorAll("tr");

  let curr_char = [];
  let curr_data = [];

  table_rows.forEach((row) => {
    const items = row.querySelectorAll("td:nth-of-type(19)");
    curr_char.push(items);
  });

  for (i = 0; i < curr_char.length; i++) {
    curr_data.push(curr_char[i][0]);
  }

  let marks_data = [];

  for (i = 0; i < curr_data.length; i++) {
    // curr_data.push(curr_char[i][0]);
    if (curr_data[i]) {
      marks_data.push(curr_data[i].querySelector("img").alt);
    }
  }

  for (let i = 0; i < marks_data.length; i++) {
    data_chars[0].marks[i].item = marks_data[i];
    data_chars[0].marks[i].icon = marks_data[i]
      .replaceAll(" ", "_")
      .replaceAll("'", "-");
  }

  console.log(data_chars[0].marks);
}

//
//
//
// Display completion marks

const ui = document.querySelector("main");
const navList = document.querySelector("nav ul");

data_chars.forEach((char) => {
  const navChar = document.createElement("LI");
  navChar.innerHTML = `
    <a href="#char_${char.icon}">
    <img src="./img/chars/${char.icon}.png" alt="${char.name}">
    <span>${char.name}</span>
    </a>
  `;
  navList.append(navChar);

  const ul = document.createElement("UL");
  ul.classList.add("char");
  ul.id = "char_" + char.icon;

  const h2 = document.createElement("H2");
  h2.innerText = char.name;
  ul.append(h2);
  const marksList = document.createElement("UL");
  marksList.classList.add("marks");
  char.marks.forEach((el) => {
    const li = document.createElement("LI");
    li.innerHTML = `
    <img src="./img/marks/${data_marks[el.mark].icon}.png" alt="${el.mark}" />
    <span>${data_marks[el.mark].boss}</span>
    <img src="./img/items/${el.icon}.png" alt="" />
    <a target="_blank" href="https://bindingofisaacrebirth.fandom.com/wiki/Special:Search?query=${
      el.item
    }" <span>${el.item}</span>
  `;
    marksList.append(li);
  });
  ul.append(marksList);
  ui.append(ul);
});
