const characters = {
    "Luke Skywalker": {
        name: "Luke Skywalker",
        image: "/images/people/luke.jpg",
        index: 0
    },
    "C-3PO": {
        name: "C-3PO",
        image:"/images/people/c3po.png",
        index: 1
    },
    "R2-D2": {
        name: "R2-D2",
        image:"/images/people/R2D2.png",
        index: 2
    },
    "Darth Vader": {
        name: "Darth Vader",
        image: "/images/people/darth.jpg",
        index: 3
    },
    "Leia Organa": {
        name: "Leia Organa",
        image:"/images/people/leia.jpg",
        index: 4
    },
    "Owen Lars": {
        name: "Owen Lars",
        image:"/images/people/owen.jpg",
        index: 5
    },
    "Beru Whitesun lars": {
        name: "Beru Whitesun lars",
        image:"/images/people/beru.jpg",
        index: 6
    },
    "R5-D4": {
        name: "R5-D4",
        image:"/images/people/r5d4.jpg",
        index: 7
    },
    "Biggs Darklighter": {
        name: "Biggs Darklighter",
        image:"/images/people/biggs.jpg",
        index: 8
    },
    "Obi-Wan Kenobi": {
        name: "Obi-Wan Kenobi",
        image:"/images/people/obiwan.jpg",
        index: 9
    },
    "Anakin Skywalker": {
        name: "Anakin Skywalker",
        image: "/images/people/anakin.png",
        index: 10
    },
    "Wilhuff Tarkin": {
        name: "Wilhuff Tarkin",
        image: "/images/people/wilhuff.jpg",
        index: 11
    },
    "Chewbacca": {
        name: "Chewbacca",
        image: "/images/people/chewbacca.png",
        index: 12
    },
    "Han Solo": {
        name: "Han Solo",
        image: "/images/people/han.jpg",
        index: 13
    },
    "Greedo": {
        name: "Greedo",
        image: "/images/people/greedo.jpg",
        index: 14
    },
    "Jabba Desilijic Tiure": {
        name: "Jabba Desilijic Tiure",
        image: "/images/people/jabba.jpg",
        index: 15
    },
    "Wedge Antilles": {
        name: "Wedge Antilles",
        image: "/images/people/wedges.png",
        index: 16
    },
    "Jek Tono Porkins": {
        name: "Jek Tono Porkins",
        image: "/images/people/jek.png",
        index: 17
    },
    "Yoda": {
        name: "Yoda",
        image: "/images/people/yoda.png",
        index: 18
    },
    "Palpatine": {
        name: "Palpatine",
        image: "/images/people/palpatine.jpg",
        index: 19
    },
    "Boba Fett": {
        name: "Boba Fett",
        image: "/images/people/boba.jpg",
        index: 20
    },
    "IG-88": {
        name: "IG-88",
        image: "/images/people/ig-88.jpg",
        index: 21
    },
    "Bossk": {
        name: "Bossk",
        image: "/images/people/bossk.jpg",
        index: 22
    },
    "Lando Calrissian": {
        name: "Lando Calrissian",
        image: "/images/people/lando.jpg",
        index: 23
    },
    "Lobot": {
        name: "Lobot",
        image: "/images/people/lobot.jpg",
        index: 24
    },
    "Ackbar": {
        name: "Ackbar",
        image: "/images/people/ackbar.jpg",
        index: 25
    },
    "Mon Mothma": {
        name: "Mon Mothma",
        image: "/images/people/mon.jpg",
        index: 26
    },
    "Arvel Crynyd": {
        name: "Arvel Crynyd",
        image: "/images/people/arvel.jpg",
        index: 27
    },
    "Wicket Systri Warrick": {
        name: "Wicket Systri Warrick",
        image: "/images/people/wicket.jpg",
        index: 28
    },
    "Nien Nunb": {
        name: "Nien Nunb",
        image: "/images/people/nien.jpg",
        index: 29
    },
    "Qui-Gon Jinn": {
        name: "Qui-Gon Jinn",
        image: "/images/people/qui-gon.jpg",
        index: 30
    },
    "Nute Gunray": {
        name: "Nute Gunray",
        image: "/images/people/nute.jpg",
        index: 31
    },
    "Finis Valorum": {
        name: "Finis Valorum",
        image: "/images/people/finis.jpg",
        index: 32
    },
    "Padmé Amidala": {
        name: "Padmé Amidala",
        image: "/images/people/padme.jpg",
        index: 33
    },
    "Jar Jar Binks": {
        name: "Jar Jar Binks",
        image: "/images/people/jarjar.jpg",
        index: 34
    },
    "Roos Tarpals": {
        name: "Roos Tarpals",
        image: "/images/people/roos.jpg",
        index: 35
    },
    "Rugor Nass": {
        name: "Rugor Nass",
        image: "/images/people/rugor.jpg",
        index: 36
    },
    "Ric Olié": {
        name: "Ric Olié",
        image: "/images/people/ric.jpg",
        index: 37
    },
    "Watto": {
        name: "Watto",
        image: "/images/people/watto.jpg",
        index: 38
    },
    "Sebulba": {
        name: "Sebulba",
        image: "/images/people/sebulba.jpg",
        index: 39
    },
    "Quarsh Panaka": {
        name: "Quarsh Panaka",
        image: "/images/people/quarsh.jpg",
        index: 40
    },
    "Shmi Skywalker": {
        name: "Shmi Skywalker",
        image: "/images/people/shimi.jpg",
        index: 41
    },
    "Darth Maul": {
        name: "Darth Maul",
        image: "/images/people/darthmaul.jpg",
        index: 42
    },
    "Bib Fortuna": {
        name: "Bib Fortuna",
        image: "/images/people/bibfortuna.jpg",
        index: 43
    },
    "Ayla Secura": {
        name: "Ayla Secura",
        image: "/images/people/ayla.jpg",
        index: 44
    },
    "Ratts Tyerel": {
        name: "Ratts Tyerel",
        image: "/images/people/ratts.jpg",
        index: 45
    },
    "Dud Bolt": {
        name: "Dud Bolt",
        image: "/images/people/dudbolt.jpg",
        index: 46
    },
    "Gasgano": {
        name: "Gasgano",
        image: "/images/people/gasgano.jpg",
        index: 47
    },
    "Ben Quadinaros": {
        name: "Ben Quadinaros",
        image: "/images/people/benquadinaros.jpg",
        index: 48
    },
    "Mace Windu": {
        name: "Mace Windu",
        image: "/images/people/macewindu.jpg",
        index: 47
    },
    "Ki-Adi-Mundi": {
        name: "Ki-Adi-Mundi",
        image: "/images/people/kiadi.jpg",
        index: 48
    },
    "Kit Fisto": {
        name: "Kit Fisto",
        image: "/images/people/kitfisto.jpg",
        index: 49
    },
    "Eeth Koth": {
        name: "Eeth Koth",
        image: "/images/people/eethkoth.jpg",
        index: 50
    },
    "Adi Gallia": {
        name: "Adi Gallia",
        image: "/images/people/adigallia.jpg",
        index: 51
    },
    "Saesee Tiin": {
        name: "Saesee Tiin",
        image: "/images/people/saesee.jpg",
        index: 52
    },
    "Yarael Poof": {
        name: "Yarael Poof",
        image: "/images/people/yarael.jpg",
        index: 53
    },
    "Plo Koon": {
        name: "Plo Koon",
        image: "/images/people/plokoon.jpg",
        index: 54
    },
    "Mas Amedda": {
        name: "Mas Amedda",
        image: "/images/people/masamedda.jpg",
        index: 55
    },
    "Gregar Typho": {
        name: "Gregar Typho",
        image: "/images/people/gregar.jpg",
        index: 56
    },
    "Cordé": {
        name: "Cordé",
        image: "/images/people/corde.jpg",
        index: 57
    },
    "Cliegg Lars": {
        name: "Cliegg Lars",
        image: "/images/people/cliegg.jpg",
        index: 58
    },
    "Poggle the Lesser": {
        name: "Poggle the Lesser",
        image: "/images/people/poggle.jpg",
        index: 59
    },
    "Luminara Unduli": {
        name: "Luminara Unduli",
        image: "/images/people/luminara.jpg",
        index: 60
    },
    "Barriss Offee": {
        name: "Barriss Offee",
        image: "/images/people/barriss.jpg",
        index: 61
    },
    "Dormé": {
        name: "Dormé",
        image: "/images/people/dorme.jpg",
        index: 62
    },
    "Dooku": {
        name: "Dooku",
        image: "/images/people/dooku.jpg",
        index: 63
    },
    "Bail Prestor Organa": {
        name: "Bail Prestor Organa",
        image: "/images/people/bailprestor.jpg",
        index: 64
    },
    "Jango Fett": {
        name: "Jango Fett",
        image: "/images/people/jangofett.jpg",
        index: 65
    },
    "Zam Wesell": {
        name: "Zam Wesell",
        image: "/images/people/zamwesell.jpg",
        index: 66
    },
    "Dexter Jettster": {
        name: "Dexter Jettster",
        image: "/images/people/dexter.jpg",
        index: 67
    },
    "Lama Su": {
        name: "Lama Su",
        image: "/images/people/lamasu.jpg",
        index: 68
    },
    "Taun We": {
        name: "Taun We",
        image: "/images/people/taunwe.jpg",
        index: 69
    },
    "Jocasta Nu": {
        name: "Jocasta Nu",
        image: "/images/people/jocasta.jpg",
        index: 70
    },
    "R4-P17": {
        name: "R4-P17",
        image: "/images/people/r4p17.jpg",
        index: 71
    },
    "Wat Tambor": {
        name: "Wat Tambor",
        image: "/images/people/wattambor.jpg",
        index: 72
    },
    "San Hill": {
        name: "San Hill",
        image: "/images/people/sanhill.jpg",
        index: 73
    },
    "Shaak Ti": {
        name: "Shaak Ti",
        image: "/images/people/shaakti.jpg",
        index: 74
    },
    "Grievous": {
        name: "Grievous",
        image: "/images/people/grievous.jpg",
        index: 75
    },
    "Tarfful": {
        name: "Tarfful",
        image: "/images/people/tarfful.jpg",
        index: 76
    },
    "Raymus Antilles": {
        name: "Raymus Antilles",
        image: "/images/people/raymus.jpg",
        index: 77
    },
    "Sly Moore": {
        name: "Sly Moore",
        image: "/images/people/sly.jpg",
        index: 78
    },
    "Tion Medon": {
        name: "Tion Medon",
        image: "/images/people/tionmedon.jpg",
        index: 79
    }
}

export default characters;