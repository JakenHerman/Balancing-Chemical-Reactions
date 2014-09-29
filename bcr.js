/***********************************************************
Add reactants, and watch the products form. If the ratio isn't correct, there will be leftover atoms! 
***********************************************************/
var i,j;
var atomColorArray = [color(199, 64, 64),color(13, 153, 0),color(92, 143, 219),color(138, 40, 138),color(115, 50, 0)];

var Reaction = function(index) {
    switch(index) {
        case 0:
            this.elements = ["Mg","O"];
            this.r1 = ["Mg",1,0];
            this.r2 = ["O₂",0,2];
            this.p1 = ["MgO",1,1];
            this.p2 = [null];
            
            //These variables keep track of how many reactants/products have been added/formed.
            this.r1count = 0;
            this.r2count = 0;
            this.p1count = 0;
            this.p2count = 0;
            
            //For drawing the molecules in the proper shape
            this.r1Coords = [[0,0]];
            this.r2Coords = [[0,0],
                             [-8,-10]];
            this.p1Coords = [[0,0],
                             [10,5]];
            
            //Arrays containing info about objects being animate

            this.atomArray = [];
            for (j = 0; j < this.elements.length; j++) {
                this.atomArray[j] = [];
            }
           this.moleculeArray = [];
            return true;

        case 1:
            this.elements = ["Na","Cl","H","0"];
            this.r1 = ["HCl",0,1,1,0];
            this.r2 = ["NaOH",1,0,1,1];
            this.p1 = ["NaCl",1,1,0,0];
            this.p2 = ["H₂O",0,0,2,1];
            
            //These variables keep track of how many reactants/products have been added/formed.
            this.r1count = 0;
            this.r2count = 0;
            this.p1count = 0;
            this.p2count = 0;
            
            //For drawing the molecules in the proper shape
            this.r1Coords = [[0,0],
                             [10,-10]];
            this.r2Coords = [[-10,-5],
                             [9,-10],
                             [0,-5]];
            this.p1Coords = [[0,0],
                             [10,4]];
            this.p2Coords = [[9,-7],
                             [-9,-7],
                             [0,0]];
                             
            //Arrays containing info about objects being animated
            this.atomArray = [];
            for (j = 0; j < this.elements.length; j++) {
                this.atomArray[j] = [];
            }
            this.moleculeArray = [];

            return true;
            
        case 2:
            this.elements = ["C","H","O"];
            this.r1 = ["C₂H₆O",2,6,1];
            this.r2 = ["O₂",0,0,2];
            this.p1 = ["CO₂",1,0,2];
            this.p2 = ["H₂O",0,2,1];
            
            //These variables keep track of how many reactants/products have been added/formed.
            this.r1count = 0;
            this.r2count = 0;
            this.p1count = 0;
            this.p2count = 0;

            //For drawing the molecules in the proper shape
            this.r1Coords = [[0,0],
                             [-10,-10],
                             [0,8],
                             [8,0],
                             [5,5],
                             [-18,-10],
                             [-15,-15],
                             [-10,-22],
                             [-10,-18]];
            this.r2Coords = [[-10,-5],
                             [0,-5]];
            this.p1Coords = [[0,0],
                             [-11,0],
                             [11,0]];
            this.p2Coords = [[9,-7],
                             [-9,-7],
                             [0,0]];
                             
            //Arrays containing info about objects being animated
            
            this.atomArray = [];
            for (j = 0; j < this.elements.length; j++) {
                this.atomArray[j] = [];
            }
            this.moleculeArray = [];
            return true;
           
        default:
            return false;
    }
};
Reaction.prototype.write = function() {
    fill(255, 255, 255);
    stroke(0, 0, 0);
    rect(15,10,370,55,5);
    fill(0, 0, 0);
    if (this.r2 && (this.p2[0]) === null ) {
        textAlign(CENTER,CENTER);
        textSize(20);
        text((this.r1count ? this.r1count +" " : "___ ") + this.r1[0],75,40);
        text("+",125,40);
        text((this.r2count ? this.r2count +" " : "___ ") + this.r2[0],175,40);
        text((this.p1count ? this.p1count +" " : "___ ") + this.p1[0],325,40);
        textSize(12);
        textAlign(LEFT,CENTER);
        strokeWeight(1.5);
        beginShape();
        vertex(230,40);
        vertex(265,40);
        vertex(255,36);
        vertex(255,44);
        vertex(265,40);
        endShape();
    }
    else if (this.r2 && (this.p2) ) {
        textAlign(CENTER,CENTER);
        textSize(16);
        text((this.r1count ? this.r1count +" " : "__ ") + this.r1[0],55,40);
        text("+",103,40);
        text((this.r2count ? this.r2count +" " : "__ ") + this.r2[0],146,40);
        text((this.p1count ? this.p1count +" " : "__ ") + this.p1[0],264,40);
        text("+",307,40);
        text((this.p2count ? this.p2count +" " : "__ ") + this.p2[0],347,40);
        textSize(12);
        textAlign(LEFT,CENTER);
        beginShape();
        vertex(190,40);
        vertex(225,40);
        vertex(215,36);
        vertex(215,44);
        vertex(225,40);
        endShape();
    }
    strokeWeight(1);
};
var reactionList = [];
for (i = 0;Reaction(i);i++) {
    reactionList[i] = new Reaction(i);
}
var thisReaction;
var setReaction = function(index) {
    thisReaction = reactionList[index];
};
setReaction(0);

var Menu = function() {
    this.open = false;
    this.height = 0;
    this.tabBounds = {x:150,y:380,w:100,h:20};
};
Menu.prototype.draw = function() {
     var openclose;
     if(this.open === true) {
         openclose = "Close";
         if (this.height < 300) {
             this.height += 20;
         }
     }
     else if(this.open === false) {
         openclose = "Open";
         if (this.height > 0) {
             this.height -= 20;
         }
     }
         translate(0,-this.height);
         strokeWeight(2);
         stroke(0, 0, 0);
         fill(97, 97, 97,240);
         beginShape();
         vertex(0,705);
         vertex(0,401);
         vertex(150,401);
         vertex(158,381);
         vertex(160,380);
         vertex(240,380);
         vertex(242,381);
         vertex(250,401);
         vertex(400,401);
         vertex(400,705);
         endShape();

         strokeWeight(1);
         fill(255, 255, 255);
         text(openclose + " Menu",168,390);
         
         for (i = 0;i < reactionList.length;i++) {
             translate(195*(i%2),37*floor(i/2));
             fill(255, 255, 255);
             if (reactionList[i] === thisReaction) {
                 strokeWeight(3);
                 stroke(118, 217, 52);
             }
             rect(8,415,189,30,7);
             stroke(0, 0, 0);
             strokeWeight(1);
             fill(0, 0, 0);
             textAlign(CENTER,CENTER);
             textSize(10);
             text("__" + reactionList[i].r1[0] + " + " + "__" + reactionList[i].r2[0] + "  →  __" + reactionList[i].p1[0] + (reactionList[i].p2[0] === null ? "" : " + __" + reactionList[i].p2[0]),103,431);
             textSize(12);
             textAlign(LEFT,CENTER);
             translate(-195*(i%2),-37*floor(i/2));
         }
         image(getImage("avatars/leaf-green"),350,650,50,50);
         
         this.tabBounds.y = 380 - this.height;
         resetMatrix();
};
var menu = new Menu();

var Beaker = function(contents,x,y,rotDirection) {
    this.pouring = false;
    this.angle = 0;
    this.contents = contents;
    this.x = x;
    this.y = y;
    this.rotDirection = rotDirection;
};
Beaker.prototype.draw = function() {
    translate(this.x,this.y);
    
     if (this.pouring){
        this.angle+=10;
        rotate(this.angle*this.rotDirection);
        if (this.angle >= 80) {
            this.angle = 80;
            this.pouring = false;
        }
    }
    else if (this.angle > 0) {
        this.angle-=10;
        rotate(this.angle*this.rotDirection);
    }
    
    stroke(0, 0, 0);
    fill(222, 222, 222);
    beginShape();
    vertex(-32,-41);
    vertex(-30,-40);
    vertex(-30,40);
    vertex(-29,41);
    vertex(-29,42);
    vertex(-28,43);
    vertex(-27,44);
    vertex(-26,44);
    vertex(-25,45);
    vertex(25,45);
    vertex(26,44);
    vertex(27,44);
    vertex(28,43);
    vertex(29,42);
    vertex(29,41);
    vertex(30,40);
    vertex(30,-40);
    vertex(32,-41);
    vertex(-32,-41);
    endShape();
    
    fill(0, 0, 0);
    textAlign(CENTER,CENTER);
    textSize(20);
    text(this.contents,0,0);
    textSize(12);
    textAlign(LEFT,CENTER);
    
    resetMatrix();
};

var Atom = function(x,y,vx,vy,type) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.type = type;
};
Atom.prototype.draw = function() {
    noStroke();
    fill(atomColorArray[this.type]);
    ellipse(this.x,this.y,15,15);
    fill(255, 255, 255);
    textAlign(CENTER,CENTER);
    textSize(10);
    text(thisReaction.elements[this.type],this.x,this.y);
    textSize(12);
    textAlign(LEFT,CENTER);
};

var Molecule = function(x,y,vx,vy,type) {
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
    this.type = type;
    this.atoms = [];
};

var AdderButton = function(beaker,x,y) {
    this.beaker = beaker;
    this.down = false;
    this.x = x;
    this.y = y;
    this.w = 50;
    this.h = 30;
};
AdderButton.prototype.draw = function() {
    stroke(0, 0, 0);
    strokeWeight(1.5);
    fill(173, 105, 56);
    if (this.down === true) {
        fill(224, 177, 119);
    }
    rect(this.x,this.y,this.w,this.h,5);
    strokeWeight(1);
    fill(255, 255, 255);
    text("Add!",this.x + 13,this.y + 15);
};
AdderButton.prototype.clicked = function() {
    this.beaker.pouring = true;
};

var ReactionManager = function(reaction) {
    this.reaction = reaction;
    this.rectbounds = {x:130,y:180,w:140,h:140};
};
ReactionManager.prototype.draw = function() {
    stroke(0, 0, 0);
    strokeWeight(1.5);
    fill(255, 255, 255);
    rect(this.rectbounds.x,this.rectbounds.y,this.rectbounds.w,this.rectbounds.h,10);
    strokeWeight(1);
};
ReactionManager.prototype.increment = function(thingToIncrement) {
    var molecule = new Molecule();
    if (thingToIncrement === 0) {
        this.reaction.r1count++;
        molecule.x = 80;
        molecule.y = 120;
        molecule.vx = 6;
        molecule.vy = 5;
        molecule.type = "r1";
        for(i = 1; i <= this.reaction.r1.length;i++){
            for(j=0;j<this.reaction.r1[i];j++){
                molecule.atoms.push(new Atom(0,0,6,5,i-1));
            }
        }
        thisReaction.moleculeArray.push(molecule);
    }
    else if (thingToIncrement === 1) {
        this.reaction.r2count++;
        molecule.x = 320;
        molecule.y = 120;
        molecule.vx = -6;
        molecule.vy = 5;
        molecule.type = "r2";
        for(i = 1; i <= this.reaction.r2.length;i++){
            for(j=0;j<this.reaction.r2[i];j++){
                molecule.atoms.push(new Atom(0,0,-6,5,i-1));
            }
        }
        thisReaction.moleculeArray.push(molecule);
    }
    else if (thingToIncrement === -1) {
        this.reaction.r1count = 0;
        this.reaction.r2count = 0;
        this.reaction.p1count = 0;
        this.reaction.p2count = 0;
    }
};

var n = 0;
var resetButton = false;
ReactionManager.prototype.formProducts = function() {
    resetButton = false;
    var p1Formable = true;
    var p2Formable = true;
    var atomCount = 0;
    for (i=0;i<this.reaction.elements.length;i++) {
        atomCount += this.reaction.atomArray[i].length;
        if (this.reaction.atomArray[i].length < this.reaction.p1[i+1]) {
            p1Formable = false;
        }
    }
    for (i=0;i<this.reaction.elements.length;i++) {
        //atomCount += this.reaction.atomArray[i].length;
        if (this.reaction.atomArray[i].length < this.reaction.p2[i+1]) {
            p2Formable = false;
        }
    }
    
    if(p1Formable) {
        n++;
        if (n>20) {
            var p1 = new Molecule(70,250,0,2,"p1");
            for (i=1;i<this.reaction.p1.length;i++) {
                for (j = 0; j < this.reaction.p1[i]; j++){
                    p1.atoms.push(this.reaction.atomArray[i-1].pop());
                }
            }
            
            this.reaction.moleculeArray.push(p1);
            this.reaction.p1count++;
            n=0;
        }
    }
    
    
    else if(p2Formable && this.reaction.p2[0] !== null) {
        n++;
        if (n>20) {
            var p2 = new Molecule(330,250,0,2,"p2");
            for (i=1;i<this.reaction.p1.length;i++) {
                for (j = 0; j < this.reaction.p2[i]; j++){
                    p2.atoms.push(this.reaction.atomArray[i-1].pop());
                }
            }
            
            this.reaction.moleculeArray.push(p2);
            this.reaction.p2count++;
            n=0;
        }
    }
    
    else if (atomCount) {
        noStroke();
        fill(255, 255, 255);
        beginShape();
        vertex(190,80);
        vertex(283,122);
        vertex(172,137);
        endShape();
        stroke(0, 0, 0);
        bezier(190,80,300,76,296,70,283,122);
        bezier(190,80,166,82,177,135,172,137);
        bezier(283,122,262,149,177,129,172,137);
        fill(0, 0, 0);
        textAlign(CENTER,CENTER);
        text("There are atoms",233,90);
        text("left, so the reaction",230,106);
        text(" isn't balanced!",227,122);
        textAlign(LEFT,CENTER);
        image(getImage("avatars/mr-pants"),123,124,50,50);
        thisReaction.balancedMessage = true;
    }
    else if (thisReaction.balancedMessage) {
        translate(400,0);
        noStroke();
        fill(255, 255, 255);
        beginShape();
        vertex(-190,80);
        vertex(-283,122);
        vertex(-172,137);
        endShape();
        beginShape();
        vertex(-257,166);
        vertex(-172,143);
        vertex(-180,154);
        endShape();
        stroke(0, 0, 0);
        bezier(-190,80,-300,76,-296,70,-283,122);
        bezier(-190,80,-166,82,-177,135,-172,137);
        bezier(-283,122,-262,149,-177,129,-172,137);
        
        bezier(-257,166,-262,133,-177,150,-172,144);
        bezier(-257,161,-264,179,-189,174,-181,154);
        bezier(-172,145,-172,141,-182,155,-180,154);
        
        fill(0, 0, 0);
        textAlign(CENTER,CENTER);
        text("All of the atoms",-233,90);
        text("reacted. It's ",-230,106);
        text("balanced! Yeah!",-226,122);
        text("Reset?",-221,158);
        textAlign(LEFT,CENTER);
        image(getImage("avatars/mr-pink"),-167,124,50,50);
        resetMatrix();
        
        resetButton = true;
    }
};
var reactionManager = new ReactionManager(thisReaction);

var updateMolecules = function(){
    for (i=0;i<thisReaction.moleculeArray.length;i++) {
        var molecule = thisReaction.moleculeArray[i];
        if (molecule.y === reactionManager.rectbounds.y){
            //break the molecule
            for(j=0;j<molecule.atoms.length;j++) {
                var atom = molecule.atoms.pop();
                var r = random(20,120);
                var type = atom.type;
                atom.vx *= cos(r);
                atom.vy *= sin(r);
                thisReaction.atomArray[type].push(atom);
            }
            molecule = [];
        }
        else if (molecule.y > 350) {
            molecule = [];
        }
        else {
            molecule.x += molecule.vx;
            molecule.y += molecule.vy;
            for(j=0;j<molecule.atoms.length;j++) {
                switch (molecule.type) {
                    case "r1" :
                        molecule.atoms[j].x = molecule.x + thisReaction.r1Coords[j][0];
                        molecule.atoms[j].y = molecule.y + thisReaction.r1Coords[j][1];
                        break;
                    case "r2" :
                        molecule.atoms[j].x = molecule.x + thisReaction.r2Coords[j][0];
                        molecule.atoms[j].y = molecule.y + thisReaction.r2Coords[j][1];
                        break;
                    case "p1" :
                        molecule.atoms[j].x += (molecule.x + thisReaction.p1Coords[j][0] - molecule.atoms[j].x)/6;
                        molecule.atoms[j].y += (molecule.y + thisReaction.p1Coords[j][1] - molecule.atoms[j].y)/6;
                        break;
                    case "p2" :
                        molecule.atoms[j].x += (molecule.x + thisReaction.p2Coords[j][0] - molecule.atoms[j].x)/6;
                        molecule.atoms[j].y += (molecule.y + thisReaction.p2Coords[j][1] - molecule.atoms[j].y)/6;
                        break;
                    default:
                        molecule.atoms[j].x = molecule.x;
                        molecule.atoms[j].y = molecule.y;
                }   
            }
        }
    }
};
var updateAtoms = function() {
    for (i=0;i<thisReaction.atomArray.length;i++) {
        for (j=0;j<thisReaction.atomArray[i].length;j++) {
            if (thisReaction.atomArray[i][j].x < (reactionManager.rectbounds.x + 7) && thisReaction.atomArray[i][j].vx < 0) {
                thisReaction.atomArray[i][j].vx *= -1;
            }
            else if (thisReaction.atomArray[i][j].x > (reactionManager.rectbounds.x + reactionManager.rectbounds.w  - 7) && thisReaction.atomArray[i][j].vx > 0) {
                thisReaction.atomArray[i][j].vx *= -1;
            }
            if (thisReaction.atomArray[i][j].y < (reactionManager.rectbounds.y + 10) && thisReaction.atomArray[i][j].vy < 0) {
                thisReaction.atomArray[i][j].vy *= -1;
            }
            else if (thisReaction.atomArray[i][j].y > (reactionManager.rectbounds.y + reactionManager.rectbounds.h  - 10) && thisReaction.atomArray[i][j].vy > 0) {
                thisReaction.atomArray[i][j].vy *= -1;
            }
            thisReaction.atomArray[i][j].x += thisReaction.atomArray[i][j].vx;
            thisReaction.atomArray[i][j].y += thisReaction.atomArray[i][j].vy;
        }
    }
};
var drawAtoms = function() {
    for (i=0;i<thisReaction.atomArray.length;i++) {
        for (j=0;j<thisReaction.atomArray[i].length;j++) {
            thisReaction.atomArray[i][j].draw();       
        }
    }
    for (i=0;i<thisReaction.moleculeArray.length;i++) {
        for (j=0;j<thisReaction.moleculeArray[i].atoms.length;j++) {
            thisReaction.moleculeArray[i].atoms[j].draw();
        }
    }
};
var LeftBeaker = new Beaker(thisReaction.r1[0],70,150,1);
var LeftAdderButton = new AdderButton(LeftBeaker,44,205);
var RightBeaker = new Beaker(thisReaction.r2[0],330,150,-1);
var RightAdderButton = new AdderButton(RightBeaker,305,205);
var BottomLeftBeaker = new Beaker(thisReaction.p1[0],70,340,1);
var BottomRightBeaker = new Beaker(thisReaction.p2[0],330,340,1);
var mouseHeld = false;
var handleMouse = function() {
    if (mouseIsPressed & mouseHeld === false) {
        var x = mouseX;
        var y = mouseY;
        
        if(x > menu.tabBounds.x && x < menu.tabBounds.x + menu.tabBounds.w && y > menu.tabBounds.y && y < menu.tabBounds.y + menu.tabBounds.h){
            menu.open = !menu.open;
        }
        for (i = 0;i<reactionList.length;i++) {
            if (x > 8 + 195*(i%2) && x < 197 + 195*(i%2) && y > 415 - menu.height + 37*floor(i/2) && y < 445 - menu.height + 37*floor(i/2)) {
                setReaction(i);
                reactionManager.reaction = thisReaction;
                LeftBeaker.contents = thisReaction.r1[0];
                RightBeaker.contents = thisReaction.r2[0];
                BottomLeftBeaker.contents = thisReaction.p1[0];
                BottomRightBeaker.contents = thisReaction.p2[0];
            }
        }
        if (menu.open === false) {
            if (x > LeftAdderButton.x && x < (LeftAdderButton.x + LeftAdderButton.w) && y > LeftAdderButton.y && y < (LeftAdderButton.y + LeftAdderButton.h) ) {
                    LeftAdderButton.clicked();
                    LeftAdderButton.down = true;
                    reactionManager.increment(0);
            }
            else if (x > RightAdderButton.x && x < (RightAdderButton.x + RightAdderButton.w) && y > RightAdderButton.y && y < (RightAdderButton.y + RightAdderButton.h) ) {
                RightAdderButton.clicked();
                RightAdderButton.down = true;
                reactionManager.increment(1);
            }
            else if (x > 140 && x < 220 && y > 143 && y < 171  && resetButton) {
                reactionManager.increment(-1);
                resetButton = false;
                thisReaction.balancedMessage =  false;
            }
        }
        mouseHeld = true;
    }
    else if (!mouseIsPressed) {
        LeftAdderButton.down = false;
        RightAdderButton.down = false;
        mouseHeld = false;
    }
};

var draw = function() {
    background(250, 234, 185);
    handleMouse();
    thisReaction.write();
    fill(0, 0, 0);
    reactionManager.formProducts();
    reactionManager.draw();
    updateMolecules();
    updateAtoms();
    drawAtoms();
    LeftBeaker.draw();
    RightBeaker.draw();
    BottomLeftBeaker.draw();
    if (thisReaction.p2[0] !== null) {
        BottomRightBeaker.draw();
    }
    LeftAdderButton.draw();
    RightAdderButton.draw();
    menu.draw();
};
