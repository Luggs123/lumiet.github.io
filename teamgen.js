/*
aaaaa
*/
function main() {
var pokemon = [ "Venusaur",
		"Charizard",
		"Blastoise",
		"Butterfree",
		"Beedrill",
		"Pidgeot",
		"Raticate",
		"Fearow",
		"Arbok",
		"Raichu",
		"Sandslash",
		"Nidoqueen",
		"Nidoking",
		"Clefable",
		"Ninetales",
		"Wigglytuff",
		"Vileplume",
		"Parasect",
		"Venomoth",
		"Dugtrio",
		"Persian",
		"Golduck",
		"Primeape",
		"Arcanine",
		"Poliwrath",
		"Alakazam",
		"Machamp",
		"Victreebell",
		"Tentacruel",
		"Golem",
		"Rapidash",
		"Slowbro",
		"Farfetch'd",
		"Dodrio",
		"Dewgong",
		"Muk",
		"Cloyster",
		"Gengar",
		"Hypno",
		"Kingler",
		"Electrode",
		"Exeggutor",
		"Marowak",
		"Hitmonlee",
		"Hitmonchan",
		"Weezing",
		"Kangaskhan",
		"Seaking",
		"Starmie",
		"Mr. Mime",
		"Jynx",
		"Pinsir",
		"Tauros",
		"Gyarados",
		"Lapras",
		"Ditto",
		"Vaporeon",
		"Jolteon",
		"Flareon",
		"Omastar",
		"Kabutops",
		"Aerodactyl",
		"Snorlax",
		"Dragonite",
		"Meganium",
		"Typhlosion",
		"Feraligatr",
		"Furret",
		"Noctowl",
		"Ledian",
		"Ariados",
		"Crobat",
		"Lanturn",
		"Xatu",
		"Ampharos",
		"Bellossom",
		"Azumarill",
		"Sudowoodo",
		"Politoed",
		"Jumpluff",
		"Sunflora",
		"Quagsire",
		"Espeon",
		"Umbreon",
		"Slowking",
		"Unown",
		"Wobbuffet",
		"Girafarig",
		"Forretress",
		"Dunsparce",
		"Steelix",
		"Granbull",
		"Qwilfish",
		"Scizor",
		"Shuckle",
		"Heracross",
		"Ursaring",
		"Magcargo",
		"Corsola",
		"Octillery",
		"Delibird",
		"Mantine",
		"Skarmory",
		"Houndoom",
		"Kingdra",
		"Donphan",
		"Stantler",
		"Smeargle",
		"Hitmontop",
		"Miltank",
		"Blissey",
		"Tyranitar",
		"Sceptile",
		"Blaziken",
		"Swampert",
		"Mightyena",
		"Linoone",
		"Beautifly",
		"Dustox",
		"Ludicolo",
		"Shiftry",
		"Swellow",
		"Pelipper",
		"Gardevoir",
		"Masquerain",
		"Breloom",
		"Slaking",
		"Ninjask",
		"Shedinja",
		"Exploud",
		"Hariyama",
		"Delcatty",
		"Sableye",
		"Mawile",
		"Aggron",
		"Medicham",
		"Manectric",
		"Plusle",
		"Minun",
		"Volbeat",
		"Illumise",
		"Swalot",
		"Sharpedo",
		"Wailord",
		"Camerupt",
		"Torkoal",
		"Grumpig",
		"Spinda",
		"Flygon",
		"Cacturne",
		"Altaria",
		"Zangoose",
		"Seviper",
		"Lunatone",
		"Solrock",
		"Whiscash",
		"Crawdaunt",
		"Claydol",
		"Cradily",
		"Armaldo",
		"Milotic",
		"Castform",
		"Kecleon",
		"Banette",
		"Tropius",
		"Chimecho",
		"Absol",
		"Glalie",
		"Walrein",
		"Huntail",
		"Gorebyss",
		"Relicanth",
		"Luvdisc",
		"Salamence",
		"Metagross",
		"Torterra",
		"Infernape",
		"Empoleon",
		"Staraptor",
		"Bibarel",
		"Kricketune",
		"Luxray",
		"Roserade",
		"Rampardos",
		"Bastiodon",
		"Wormadam (Plant Cloak)",
		"Mothim",
		"Vespiquen",
		"Pachirisu",
		"Floatzel",
		"Cherrim",
		"Gastrodon",
		"Ambipom",
		"Driftblim",
		"Lopunny",
		"Mismagius",
		"Honchkrow",
		"Purugly",
		"Skuntank",
		"Bronzong",
		"Chatot",
		"Spiritomb",
		"Garchomp",
		"Lucario",
		"Hippowdon",
		"Drapion",
		"Toxicroak",
		"Carnivine",
		"Lumineon",
		"Abomasnow",
		"Weavile",
		"Magnezone",
		"Lickilicky",
		"Rhyperior",
		"Tangrowth",
		"Electivire",
		"Magmortar",
		"Togekiss",
		"Yanmega",
		"Leafeon",
		"Glaceon",
		"Gliscor",
		"Mamoswine",
		"Porygon-Z",
		"Gallade",
		"Probopass",
		"Dusknoir",
		"Froslass",
		"Rotom",
		"Serperior",
		"Emboar",
		"Samurott",
		"Watchog",
		"Stoutland",
		"Liepard",
		"Simisage",
		"Simisear",
		"Simipour",
		"Musharna",
		"Unfezant",
		"Zebstrika",
		"Gigalith",
		"Swoobat",
		"Excadrill",
		"Audino",
		"Conkeldurr",
		"Seismitoad",
		"Throh",
		"Sawk",
		"Leavanny",
		"Scolipede",
		"Whimsicott",
		"Lilligant",
		"Basculin",
		"Krookodile",
		"Darmanitan",
		"Maractus",
		"Crustle",
		"Scrafty",
		"Sigilyph",
		"Cofagrigus",
		"Carracosta",
		"Archeops",
		"Garbodor",
		"Zoroark",
		"Cinccino",
		"Gothitelle",
		"Reuniclus",
		"Swanna",
		"Vanilluxe",
		"Sawsbuck",
		"Emolga",
		"Escavalier",
		"Amoonguss",
		"Jellicent",
		"Alomomola",
		"Galvantula",
		"Ferrothorn",
		"Klinklang",
		"Eelektross",
		"Beheeyem",
		"Chandelure",
		"Haxorus",
		"Beartic",
		"Cryogonal",
		"Accelegor",
		"Stunfisk",
		"Mienshao",
		"Druddigon",
		"Golurk",
		"Bisharp",
		"Braviary",
		"Mandibuzz",
		"Heatmor",
		"Durant",
		"Hydreigon",
		"Volcarona",
		"Chesnaught",
		"Delphox",
		"Greninja",
		"Diggersby",
		"Talonflame",
		"Vivillon",
		"Pyroar",
		"Florges",
		"Gogoat",
		"Pangoro",
		"Furfrou",
		"Meowstic",
		"Aegislash",
		"Aromatisse",
		"Slurpuff",
		"Malamar",
		"Barbaracle",
		"Dragalge",
		"Clawitzer",
		"Heliolisk",
		"Tyrantrum",
		"Aurorus",
		"Sylveon",
		"Hawlucha",
		"Dedenne",
		"Carbink",
		"Goodra",
		"Klefki",
		"Trevenant",
		"Gourgeist",
		"Avalugg",
		"Noivern",
		"Decidueye",
		"Incineroar",
		"Primarina",
		"Toucannon",
		"Gumshoos",
		"Vikavolt",
		"Crabominable",
		"Oricorio (Baile)",
		"Ribombee",
		"Lycanroc",
		"Wishiwashi",
		"Toxapex",
		"Mudsdale",
		"Araquanid",
		"Lurantis",
		"Shiinotic",
		"Salazzle",
		"Bewear",
		"Tsareena",
		"Comfey",
		"Oranguru",
		"Passimian",
		"Golisopod",
		"Palossand",
		"Pyukumuku",
		"Minior",
		"Komala",
		"Turtonator",
		"Togedemaru",
		"Mimikyu",
		"Bruxish",
		"Drampa",
		"Kommo-o",
		"Oricorio (Pom-Pom)",
		"Oricorio (Pa'u)",
		"Oricorio (Sensu)",
		"Wormadam (Sandy Cloak)",
		"Wormadam (Trash Cloak)"];
	
	var type1 = [ "grass",
		"fire",
		"water",
		"bug",
		"bug",
		"flying",
		"normal",
		"flying",
		"poison",
		"electric",
		"ground",
		"ground",
		"ground",
		"fairy",
		"fire",
		"fairy",
		"grass",
		"bug",
		"bug",
		"ground",
		"normal",
		"water",
		"fighting",
		"fire",
		"water",
		"psychic",
		"fighting",
		"grass",
		"water",
		"ground",
		"fire",
		"water",
		"flying",
		"flying",
		"water",
		"poison",
		"water",
		"ghost",
		"psychic",
		"water",
		"electric",
		"grass",
		"ground",
		"fighting",
		"fighting",
		"poison",
		"normal",
		"water",
		"water",
		"fairy",
		"ice",
		"bug",
		"normal",
		"flying",
		"ice",
		"normal",
		"water",
		"electric",
		"fire",
		"rock",
		"rock",
		"flying",
		"normal",
		"dragon",
		"grass",
		"fire",
		"water",
		"normal",
		"flying",
		"bug",
		"bug",
		"poison",
		"water",
		"flying",
		"electric",
		"grass",
		"fairy",
		"rock",
		"water",
		"flying",
		"grass",
		"water",
		"psychic",
		"dark",
		"water",
		"psychic",
		"psychic",
		"normal",
		"bug",
		"normal",
		"steel",
		"fairy",
		"poison",
		"bug",
		"bug",
		"bug",
		"normal",
		"fire",
		"water",
		"water",
		"ice",
		"water",
		"steel",
		"dark",
		"water",
		"ground",
		"normal",
		"normal",
		"fighting",
		"normal",
		"normal",
		"dark",
		"grass",
		"fire",
		"water",
		"dark",
		"normal",
		"bug",
		"bug",
		"grass",
		"dark",
		"flying",
		"flying",
		"psychic",
		"bug",
		"fighting",
		"normal",
		"bug",
		"bug",
		"normal",
		"fighting",
		"normal",
		"dark",
		"steel",
		"steel",
		"fighting",
		"electric",
		"electric",
		"electric",
		"bug",
		"bug",
		"poison",
		"dark",
		"water",
		"ground",
		"fire",
		"psychic",
		"psychic",
		"ground",
		"dark",
		"flying",
		"dark",
		"poison",
		"psychic",
		"psychic",
		"water",
		"dark",
		"ground",
		"grass",
		"bug",
		"water",
		"normal",
		"normal",
		"dark",
		"grass",
		"psychic",
		"dark",
		"ice",
		"water",
		"water",
		"water",
		"water",
		"water",
		"flying",
		"steel",
		"grass",
		"fire",
		"water",
		"flying",
		"water",
		"bug",
		"electric",
		"grass",
		"rock",
		"steel",
		"bug",
		"bug",
		"bug",
		"electric",
		"water",
		"grass",
		"water",
		"normal",
		"flying",
		"normal",
		"ghost",
		"dark",
		"normal",
		"dark",
		"psychic",
		"flying",
		"dark",
		"ground",
		"steel",
		"ground",
		"dark",
		"poison",
		"grass",
		"water",
		"grass",
		"dark",
		"electric",
		"normal",
		"ground",
		"grass",
		"electric",
		"fire",
		"flying",
		"bug",
		"grass",
		"ice",
		"ground",
		"ground",
		"normal",
		"fighting",
		"steel",
		"ghost",
		"ice",
		"electric",
		"grass",
		"fire",
		"water",
		"normal",
		"normal",
		"dark",
		"grass",
		"fire",
		"water",
		"psychic",
		"flying",
		"electric",
		"rock",
		"flying",
		"steel",
		"normal",
		"fighting",
		"water",
		"fighting",
		"fighting",
		"bug",
		"bug",
		"grass",
		"grass",
		"water",
		"dark",
		"fire",
		"grass",
		"bug",
		"dark",
		"flying",
		"ghost",
		"rock",
		"flying",
		"poison",
		"dark",
		"normal",
		"psychic",
		"psychic",
		"water",
		"ice",
		"grass",
		"electric",
		"bug",
		"grass",
		"water",
		"water",
		"bug",
		"grass",
		"steel",
		"electric",
		"psychic",
		"fire",
		"dragon",
		"ice",
		"ice",
		"bug",
		"ground",
		"fighting",
		"dragon",
		"ground",
		"dark",
		"flying",
		"dark",
		"fire",
		"bug",
		"dark",
		"bug",
		"grass",
		"fire",
		"water",
		"ground",
		"flying",
		"bug",
		"fire",
		"fairy",
		"grass",
		"dark",
		"normal",
		"psychic",
		"steel",
		"fairy",
		"fairy",
		"dark",
		"rock",
		"dragon",
		"water",
		"normal",
		"dragon",
		"ice",
		"fairy",
		"flying",
		"electric",
		"rock",
		"dragon",
		"steel",
		"grass",
		"grass",
		"ice",
		"flying",
		"grass",
		"fire",
		"water",
		"flying",
		"normal",
		"bug",
		"ice",
		"flying",
		"bug",
		"rock",
		"water",
		"water",
		"ground",
		"water",
		"grass",
		"grass",
		"fire",
		"fighting",
		"grass",
		"fairy",
		"psychic",
		"fighting",
		"water",
		"ghost",
		"water",
		"rock",
		"normal",
		"fire",
		"electric",
		"ghost",
		"water",
		"dragon",
		"dragon",
		"flying",
		"flying",
		"flying",
		"bug",
		"bug"];
	var type2 = [ "poison",
		"flying",
		"0",
		"flying",
		"poison",
		"normal",
		"0",
		"normal",
		"0",
		"0",
		"0",
		"poison",
		"poison",
		"0",
		"0",
		"0",
		"poison",
		"grass",
		"poison",
		"0",
		"0",
		"0",
		"0",
		"0",
		"fighting",
		"0",
		"0",
		"poison",
		"poison",
		"rock",
		"0",
		"psychic",
		"normal",
		"normal",
		"ice",
		"0",
		"ice",
		"poison",
		"0",
		"0",
		"0",
		"psychic",
		"0",
		"0",
		"0",
		"0",
		"0",
		"0",
		"psychic",
		"psychic",
		"psychic",
		"0",
		"0",
		"water",
		"water",
		"0",
		"0",
		"0",
		"0",
		"water",
		"water",
		"rock",
		"0",
		"flying",
		"0",
		"0",
		"0",
		"0",
		"normal",
		"flying",
		"poison",
		"flying",
		"electric",
		"psychic",
		"0",
		"0",
		"water",
		"0",
		"0",
		"grass",
		"0",
		"ground",
		"0",
		"0",
		"psychic",
		"0",
		"0",
		"psychic",
		"steel",
		"0",
		"ground",
		"0",
		"water",
		"steel",
		"rock",
		"fighting",
		"0",
		"rock",
		"rock",
		"0",
		"flying",
		"flying",
		"flying",
		"fire",
		"dragon",
		"0",
		"0",
		"0",
		"0",
		"0",
		"0",
		"rock",
		"0",
		"fighting",
		"ground",
		"0",
		"0",
		"flying",
		"poison",
		"water",
		"grass",
		"normal",
		"water",
		"fairy",
		"flying",
		"grass",
		"0",
		"flying",
		"ghost",
		"0",
		"0",
		"0",
		"ghost",
		"fairy",
		"rock",
		"psychic",
		"0",
		"0",
		"0",
		"0",
		"0",
		"0",
		"water",
		"0",
		"fire",
		"0",
		"0",
		"0",
		"dragon",
		"grass",
		"dragon",
		"0",
		"0",
		"rock",
		"rock",
		"ground",
		"water",
		"psychic",
		"rock",
		"rock",
		"0",
		"0",
		"0",
		"ghost",
		"flying",
		"0",
		"0",
		"0",
		"ice",
		"0",
		"0",
		"rock",
		"0",
		"dragon",
		"psychic",
		"ground",
		"fighting",
		"steel",
		"normal",
		"normal",
		"0",
		"0",
		"poison",
		"0",
		"rock",
		"grass",
		"flying",
		"flying",
		"0",
		"0",
		"0",
		"ground",
		"0",
		"ghost",
		"0",
		"0",
		"flying",
		"0",
		"poison",
		"steel",
		"normal",
		"ghost",
		"dragon",
		"fighting",
		"0",
		"poison",
		"fighting",
		"0",
		"0",
		"ice",
		"ice",
		"steel",
		"0",
		"rock",
		"0",
		"0",
		"0",
		"fairy",
		"flying",
		"0",
		"0",
		"flying",
		"ice",
		"0",
		"psychic",
		"rock",
		"0",
		"ghost",
		"0",
		"0",
		"fighting",
		"0",
		"0",
		"0",
		"0",
		"0",
		"0",
		"0",
		"0",
		"normal",
		"0",
		"0",
		"psychic",
		"ground",
		"0",
		"0",
		"ground",
		"0",
		"0",
		"grass",
		"poison",
		"fairy",
		"0",
		"0",
		"ground",
		"0",
		"0",
		"rock",
		"fighting",
		"psychic",
		"0",
		"water",
		"rock",
		"0",
		"0",
		"0",
		"0",
		"0",
		"flying",
		"0",
		"normal",
		"flying",
		"steel",
		"poison",
		"ghost",
		"0",
		"electric",
		"steel",
		"0",
		"0",
		"0",
		"ghost",
		"0",
		"0",
		"0",
		"0",
		"electric",
		"0",
		"0",
		"ghost",
		"steel",
		"normal",
		"flying",
		"0",
		"steel",
		"dragon",
		"fire",
		"fighting",
		"psychic",
		"dark",
		"normal",
		"fire",
		"flying",
		"0",
		"0",
		"0",
		"fighting",
		"0",
		"0",
		"ghost",
		"0",
		"0",
		"psychic",
		"water",
		"poison",
		"0",
		"electric",
		"rock",
		"rock",
		"0",
		"fighting",
		"fairy",
		"fairy",
		"0",
		"fairy",
		"ghost",
		"ghost",
		"0",
		"dragon",
		"ghost",
		"dark",
		"fairy",
		"normal",
		"0",
		"electric",
		"fighting",
		"fire",
		"fairy",
		"0",
		"0",
		"poison",
		"0",
		"bug",
		"0",	
		"fairy",
		"poison",	
		"0",	
		"0",	
		"0",	
		"normal",	
		"0",	
		"bug",	
		"ground",	
		"0",	
		"flying",	
		"0",	
		"dragon",	
		"steel",	
		"fairy",	
		"psychic",		
		"normal",	
		"fighting",	
		"electric", 
		"psychic",	
		"ghost",	
		"ground", 
		"steel"];
	
	
	var partyname = [ "","","","","","" ];
	var partytype1 = [ "","","","","","" ];
	var partytype2 = [ "","","","","","" ];
	var added=0;
	for (var i=0; i < 6;) {
		
	while (added<6) {
			var pokenumber = Int(Math.random()*100000) % 367;
		alert(pokenumber);
			for (var m = 0; m < 6; m++) {
				if ((type1[pokenumber] != partytype1[m]) && (type1[pokenumber] != partytype2[m]) && (type2[pokenumber] != partytype1[m]) && (type2[pokenumber] != partytype2[m])) {
					added++;
				}
			}
			if (added == 6) {
					partyname[i] = pokemon[pokenumber];
					partytype1[i] = type1[pokenumber];
					partytype2[i] = type2[pokenumber];					
				}
			}						
		
		if (partyname[i] != "") {
			i++; 
		}
		added = 0;
	}
	alert("test 3");
  var content = "Your team is: ";
  for (var i = 0; i < 6; i++) {
		if (i < 5) { content+= partyname[i] + ", "; }
		else { content+= "and " + partyname[i] + "."; }
	}
document.getElementById("main").innerHTML = content;
	return;
}
