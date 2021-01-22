var cactus = ["cactus", "Cactus", "2013", "Oil on Canvas"];
var sky = ["sky", "Movement", "2013", "Oil on Canvas"];
var elephants = ["elephants", "The Elephants in the Room", "2013", "Oil on Canvas"];
var enjoydark = ["enjoydark", "Enjoy the Dark Side", "2014", "Acrylic on Canvas"];
var earlyshift = ["earlyshift","5am Early Shift", "2014", "Oil on Canvas"];
var to = ["to", "TO R&B", "2014", "Oil Pastel on Board"];
var orchid = ["orchid", "Orchids", "2015", "Watercolour on Paper"];
var nonocromatic = ["nonocromatic", "(Non)ochromatic", "2015", "Acrylic on Canvas"];
var selfportrait1 = ["selfportrait1", "Self Portrait #1", "2015", "Acrylic on Canvas"];
var nature = ["nature", "Modern Day Nature", "2015", "Acrylic on Canvas"];
var drake = ["drake", "Views", "2015", "Graphite on Paper"];
var voice = ["voice", "Voice Your Opinion", "2016", "Acrylic on Canvas"];
var grapes = ["grapes", "Grapes", "2016", "Acrylic on Canvas Board"];
var women = ["women", "Women in the Media", "2016", "Multimedia on Canvas Board"];
var michaelb = ["michaelb", "Michael B.", "2016", "Ink on Paper"];
var polarbear = ["polarbear", "Polar Bear", "2016", "Chalk Pastel on Board"];
var reconciliation = ["reconciliation", "Reconciliation", "2016", "Charcoal on Paper"];
var storm = ["storm", "The Storm Will Pass...", "2016", "Oil on Canvas"];
var untitled = ["untitled", "Untitled #1", "2016", "Charcoal on Paper (Commissioned)"];
var coke = ["coke", "Coke", "2016", "Oil on Canvas"];
var abstract3 = ["abstract3", "Abstract #3", "2016", "Adobe Illustrator"];
var abstract2 = ["abstract2", "Abstract #2", "2016", "Adobe Illustrator"];
var abstract1 = ["abstract1", "Abstract #1", "2016", "Adobe Illustrator"];
var selfportrait2 = ["selfportrait2", "Self Portrait #2", "2016", "Image Collage in Photoshop"];
var prayinghands = ["prayinghands", "Praying Hands", "2016", "Graphite on Paper (Tattoo Design)"];
var shoes = ["shoes", "I Own Too Many Shoes", "2017", "Ballpoint Pen on Paper"];
var parooster = ["parooster", "Parooster", "2017", "Image Collage in Photoshop"];
var selfportrait3 = ["selfportrait3", "Self Portrait #3", "2017", " Acrylic on Canvas Board"];
var nudes = ["nudes", "Live Model Practice", "2017", "Acrylic on Canvas Board"];
var balls = ["balls", "Balls", "2017", "Acrylic on Paper"];
var rgb = ["rgb", "RGB", "2017", "Acrylic on Canvas"];
var mood = ["mood", "Mood", "2017", "Acrylic on Canvas"];
var yuna = ["yuna", "Yuna", "2017", "Charcoal on Brown Paper"];
var kiosk = ["kiosk", "The Forbidden Kiosk", "2017", "Oil on Canvas Board"];
var grandparents = ["grandparents", "Grandparents", "2017", "Oil on Canvas"];
var untitled2 = ["untitled2", "Untitled #2", "2020", "Oil on Paper"];
var kobe = ["kobe", "Kobe", "2020", "Acrylic on Plastic (Laptop Case)"];

var art = [cactus, sky, elephants, enjoydark, earlyshift, to, orchid, nonocromatic, selfportrait1, nature, drake, voice, grapes, women, michaelb, polarbear, reconciliation, storm, untitled, coke, abstract3, abstract2, abstract1, selfportrait2, prayinghands, shoes, parooster, selfportrait3, nudes, rgb, balls, mood, yuna, kiosk, grandparents, untitled2, kobe];

window.onload = function() {
    var doc = document.getElementById("art");
    for(var i = art.length - 1; i >= 0; i--){
        doc.innerHTML +=
            '<div class="works"><img src="artwork/' + art[i][0] + '.jpg" alt="' + art[i][0] + '"><div class="caption"><p>' + art[i][1] + '<br>' + art[i][3] + '<br>' + art[i][2] + '</p></div></div>';
    }
}
