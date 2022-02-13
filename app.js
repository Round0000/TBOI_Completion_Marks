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
    ],
  },
];

//

const ui = document.querySelector("main");

data_chars.forEach((char) => {
  const ul = document.createElement("UL");
  ul.classList.add("char");
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
    <a href="https://bindingofisaacrebirth.fandom.com/wiki/Special:Search?query=${el.item}" <span>${el.item}</span>
  `;
    marksList.append(li);
  });
  ul.append(marksList);
  ui.append(ul);
});
