// // //new js File
// var aSound,
//     eSound,
//     iSound,
var randNum,
aSoundRand,
eSoundRand,
iSoundRand,
oSoundRand,
uSoundRand,
bSoundRand,
dSoundRand,
gSoundRand,
jSoundRand,
lSoundRand,
nSoundRand,
qSoundRand,
sSoundRand,
vSoundRand,
xSoundRand,
zSoundRand,
cSoundRand,
fSoundRand,
hSoundRand,
kSoundRand,
mSoundRand,
pSoundRand,
rSoundRand,
tSoundRand,
wSoundRand,
ySoundRand,
allArrays = [],
superArray = [],
aKeyArraySound = [],
eKeyArraySound = [],
iKeyArraySound = [],
oKeyArraySound = [],
uKeyArraySound = [],
bKeyArraySound = [],
dKeyArraySound = [],
gKeyArraySound = [],
jKeyArraySound = [],
lKeyArraySound = [],
nKeyArraySound = [],
qKeyArraySound = [],
sKeyArraySound = [],
vKeyArraySound = [],
xKeyArraySound = [],
zKeyArraySound = [],
cKeyArraySound = [],
fKeyArraySound = [],
hKeyArraySound = [],
kKeyArraySound = [],
mKeyArraySound = [],
pKeyArraySound = [],
rKeyArraySound = [],
tKeyArraySound = [],
wKeyArraySound = [],
yKeyArraySound = [];

const letters = {
  13: 'enter',
  32: 'spacebar',
  // 48: '0',
  49: '1',
  50: '2',
  51: '3',
  52: '4',
  53: '5',
  54: '6',
  55: '7',
  56: '8',
  57: '9',
  65: 'a',
  66: 'b',
  67: 'c',
  68: 'd',
  69: 'e',
  70: 'f',
  71: 'g',
  72: 'h',
  73: 'i',
  74: 'j',
  75: 'k',
  76: 'l',
  77: 'm',
  78: 'n',
  79: 'o',
  80: 'p',
  81: 'q',
  82: 'r',
  83: 's',
  84: 't',
  85: 'u',
  86: 'v',
  87: 'w',
  88: 'x',
  89: 'y',
  90: 'z'
};

window.addEventListener('keydown', (e) => {
    if (e.keyCode === 32 && e.target === document.body) {
      e.preventDefault();
    }
  });

var displayText = 'Type anything, then press enter/return.';
var displayText2 = 'Dynamic Possibilities';
var displayText3 = 'Press 0 to stop';



// function setup() {
//   let cnv = createCanvas(windowWidth, windowHeight);
//   let c = color(175, 100, 220);
//   let blueValue = blue(c);
//   background(0, 1, blueValue);
//   cnv.textSize(70);
//   cnv.text("Press any key to play sound. Press 0 to stop.", 200, 400);
//   let allArrays = [];
//   for (p = 0; p <= 25; p++) {
//     let alphabet = "abcdefghigklmnopqrstuvwxyz";
//     allArrays[p] = String(alphabet[p]) + "KeyArraySound[]";
//     console.log(allArrays);
//     // same for reRandKeys
//   }
// }

// function setup() {
//   createCanvas(100, 100, WEBGL);
//   textFont(inconsolata);
//   textSize(width / 3);
//   textAlign(CENTER, CENTER);
// }

// function setup() {
//   createCanvas(710, 400);
//   noStroke();
//   background(51, 0, 0);
//
//   let inside = color(204, 102, 0);
//   let middle = color(204, 153, 0);
//   let outside = color(153, 51, 0);
//
//   // These statements are equivalent to the statements above.
//   // Programmers may use the format they prefer.
//   //let inside = color('#CC6600');
//   //let middle = color('#CC9900');
//   //let outside = color('#993300');
//
//   push();
//   translate(80, 80);
//   fill(outside);
//   rect(0, 0, 200, 200);
//   fill(middle);
//   rect(40, 60, 120, 120);
//   fill(inside);
//   rect(60, 90, 80, 80);
//   pop();
//
//   push();
//   translate(360, 80);
//   fill(inside);
//   rect(0, 0, 200, 200);
//   fill(outside);
//   rect(40, 60, 120, 120);
//   fill(middle);
//   rect(60, 90, 80, 80);
//   pop();
// }


function setup () {
  let cnv = createCanvas(windowWidth, windowHeight);
  noStroke();
  frameRate(25);
  fill(153, 51, 0);
  textStyle(BOLD);
  renderText();

  let inside = color(204, 102, 0);
  let middle = color(204, 153, 0);
  let outside = color(153, 51, 0);

  push();
  translate(80, 150);
  fill(outside);
  rect(0, 0, 25, 200);
  fill(middle);
  triangle(98, 75, 58, 90, 86, 75);
  fill(inside);
  rect(60, 98, 80, 80);
  pop();

  push();
  translate(120, 400);
  fill(outside);
  quad(200, 250, 18, 20, 69, 63, 30, 26);
  pop();

  push();
  translate(1200, 80);
  fill(inside);
  rect(0, 0, 200, 200);
  fill(outside);
  quad(200, 250, 86, 20, 69, 63, 30, 76);
  fill(middle);
  rect(60, 90, 80, 80);
  pop();

  push();
  translate(360, 800);
  fill(middle);
  triangle(30, 75, 58, 200, 86, 75);
  pop();
}

function renderText() {
  // let cnv = createCanvas(windowWidth, windowHeight);
  let c = color(102, 51, 0);
  // let blueValue = blue(c);
  // background(0, 1, blueValue);
  // cnv.textSize(700);
  background(51, 0, 0);
  textSize(35);
  text(displayText, 400, 500);
  fill(c);
  textStyle(BOLDITALIC);

  let inside = color(204, 102, 0);
  let middle = color(204, 153, 0);
  let outside = color(153, 51, 0);
  push();
  translate(1160, 800);
  fill(inside);
  rect(0, 0, 200, 20);
  fill(outside);
  quad(200, 250, 8, 20, 69, 63, 30, 76);
  fill(middle);
  rect(60, 90, 8, 80);
  pop();

  push();
  translate(120, 400);
  fill(outside);
  quad(200, 250, 18, 20, 69, 63, 30, 26);
  pop();

  push();
  translate(360, 800);
  fill(middle);
  triangle(30, 75, 58, 20, 86, 75);
  pop();

  push();
  translate(80, 950);
  fill(inside);
  triangle(3, 50, 5, 20, 86, 5);
  pop();
}

function draw() {
  ellipse(mouseX, mouseY, 10, 20);
  let c = color(102, 51, 0);
  // let blueValue = blue(c);
  // background(0, 1, blueValue);
  // cnv.textSize(700);
  // background(51, 0, 0);
  textStyle(BOLDITALIC);
  textSize(50);
  text(displayText2, 380, 200);
  textSize(30);
  text(displayText3, 400, 350);
  fill(c);

  //
  // text(displayText3, 800, 500);
  // textStyle(ITALIC);
}


function preload() {
  soundFormats('ogg');
  // for(i = 0; i <= 25; i++) {
  //   let alphabet = "abcdefghijklmnopqrstuvwxyz";
  //   allArrays[i] = String(alphabet[i]) + "KeyArraySound[]"
  // }
  // for(x = 0; x <= 25; x++) {
  //   let alphabet = "abcdefghijklmnopqrstuvwxyz";
  //   for(p = 0; p <= 2; p++) {
  //     allArrays[x][p] = loadSound('assests/audio/' + String(alphabet[x]) + '/' + String(p) + '.ogg');
  //   }
  // }

  for(p = 0; p <= 2; p++) {
    aKeyArraySound[p] = loadSound('assets/audio/a/' + String(p) + '.ogg');
    eKeyArraySound[p] = loadSound('assets/audio/e/' + String(p) + '.ogg');
    iKeyArraySound[p] = loadSound('assets/audio/i/' + String(p) + '.ogg');
    oKeyArraySound[p] = loadSound('assets/audio/o/' + String(p) + '.ogg');
    uKeyArraySound[p] = loadSound('assets/audio/u/' + String(p) + '.ogg');
    bKeyArraySound[p] = loadSound('assets/audio/b/' + String(p) + '.ogg');
    dKeyArraySound[p] = loadSound('assets/audio/d/' + String(p) + '.ogg');
    gKeyArraySound[p] = loadSound('assets/audio/g/' + String(p) + '.ogg');
    jKeyArraySound[p] = loadSound('assets/audio/j/' + String(p) + '.ogg');
    lKeyArraySound[p] = loadSound('assets/audio/l/' + String(p) + '.ogg');
    nKeyArraySound[p] = loadSound('assets/audio/n/' + String(p) + '.ogg');
    qKeyArraySound[p] = loadSound('assets/audio/q/' + String(p) + '.ogg');
    sKeyArraySound[p] = loadSound('assets/audio/s/' + String(p) + '.ogg');
    vKeyArraySound[p] = loadSound('assets/audio/v/' + String(p) + '.ogg');
    xKeyArraySound[p] = loadSound('assets/audio/x/' + String(p) + '.ogg');
    zKeyArraySound[p] = loadSound('assets/audio/z/' + String(p) + '.ogg');
    cKeyArraySound[p] = loadSound('assets/audio/c/' + String(p) + '.ogg');
    fKeyArraySound[p] = loadSound('assets/audio/f/' + String(p) + '.ogg');
    hKeyArraySound[p] = loadSound('assets/audio/h/' + String(p) + '.ogg');
    kKeyArraySound[p] = loadSound('assets/audio/k/' + String(p) + '.ogg');
    mKeyArraySound[p] = loadSound('assets/audio/m/' + String(p) + '.ogg');
    pKeyArraySound[p] = loadSound('assets/audio/p/' + String(p) + '.ogg');
    rKeyArraySound[p] = loadSound('assets/audio/r/' + String(p) + '.ogg');
    tKeyArraySound[p] = loadSound('assets/audio/t/' + String(p) + '.ogg');
    wKeyArraySound[p] = loadSound('assets/audio/w/' + String(p) + '.ogg');
    yKeyArraySound[p] = loadSound('assets/audio/y/' + String(p) + '.ogg');
    reRandAKey();
    reRandEKey();
    reRandIKey();
    reRandOKey();
    reRandUKey();
    reRandBKey();
    reRandDKey();
    reRandGKey();
    reRandJKey();
    reRandLKey();
    reRandNKey();
    reRandQKey();
    reRandSKey();
    reRandVKey();
    reRandXKey();
    reRandZKey();
    reRandCKey();
    reRandFKey();
    reRandHKey();
    reRandKKey();
    reRandMKey();
    reRandPKey();
    reRandRKey();
    reRandTKey();
    reRandWKey();
    reRandYKey();
    allArrays.push;
    // console.log(allArrays);
  }
  // console.log(aKeyArraySound);
  // console.log(eKeyArraySound);
  // console.log(iKeyArraySound);
  // console.log(oKeyArraySound);
  // console.log(uKeyArraySound);
  // console.log(bKeyArraySound);
  // console.log(dKeyArraySound);
  // console.log(gKeyArraySound);
  // console.log(jKeyArraySound);
  // console.log(lKeyArraySound);
  // console.log(nKeyArraySound);
  // console.log(qKeyArraySound);
  // console.log(sKeyArraySound);
  // console.log(vKeyArraySound);
  // console.log(xKeyArraySound);
  // console.log(zKeyArraySound);
  // console.log(cKeyArraySound);
  // console.log(fKeyArraySound);
  // console.log(hKeyArraySound);
  // console.log(kKeyArraySound);
  // console.log(mKeyArraySound);
  // console.log(pKeyArraySound);
  // console.log(rKeyArraySound);
  // console.log(tKeyArraySound);
  // console.log(wKeyArraySound);
  // console.log(yKeyArraySound);
}


function reRandAKey() {
  aSoundRand = Math.floor(Math.random() * aKeyArraySound.length);
  aKeyArraySound[aSoundRand].playMode('restart');
  aKeyArraySound[aSoundRand].setLoop(true);
}

function reRandEKey() {
  eSoundRand = Math.floor(Math.random() * eKeyArraySound.length);
  eKeyArraySound[eSoundRand].playMode('restart');
  eKeyArraySound[eSoundRand].setLoop(true);
}

function reRandIKey() {
  iSoundRand = Math.floor(Math.random() * iKeyArraySound.length);
  iKeyArraySound[iSoundRand].playMode('restart');
  iKeyArraySound[iSoundRand].setLoop(true);
}

function reRandOKey() {
  oSoundRand = Math.floor(Math.random() * oKeyArraySound.length);
  oKeyArraySound[oSoundRand].playMode('restart');
  oKeyArraySound[oSoundRand].setLoop(true);
}

function reRandUKey() {
  uSoundRand = Math.floor(Math.random() * uKeyArraySound.length);
  uKeyArraySound[uSoundRand].playMode('restart');
  uKeyArraySound[uSoundRand].setLoop(true);
}

function reRandBKey() {
  bSoundRand = Math.floor(Math.random() * bKeyArraySound.length);
  bKeyArraySound[bSoundRand].playMode('restart');
  bKeyArraySound[bSoundRand].setLoop(true);
}

function reRandDKey() {
  dSoundRand = Math.floor(Math.random() * dKeyArraySound.length);
  dKeyArraySound[dSoundRand].playMode('restart');
  dKeyArraySound[dSoundRand].setLoop(true);
}

function reRandGKey() {
  gSoundRand = Math.floor(Math.random() * gKeyArraySound.length);
  gKeyArraySound[gSoundRand].playMode('restart');
  gKeyArraySound[gSoundRand].setLoop(true);
}

function reRandJKey() {
  jSoundRand = Math.floor(Math.random() * jKeyArraySound.length);
  jKeyArraySound[jSoundRand].playMode('restart');
  jKeyArraySound[jSoundRand].setLoop(true);
}

function reRandLKey() {
  lSoundRand = Math.floor(Math.random() * lKeyArraySound.length);
  lKeyArraySound[lSoundRand].playMode('restart');
  lKeyArraySound[lSoundRand].setLoop(true);
}

function reRandNKey() {
  nSoundRand = Math.floor(Math.random() * nKeyArraySound.length);
  nKeyArraySound[nSoundRand].playMode('restart');
  nKeyArraySound[nSoundRand].setLoop(true);
}

function reRandQKey() {
  qSoundRand = Math.floor(Math.random() * qKeyArraySound.length);
  qKeyArraySound[qSoundRand].playMode('restart');
  qKeyArraySound[qSoundRand].setLoop(true);
}

function reRandSKey() {
  sSoundRand = Math.floor(Math.random() * sKeyArraySound.length);
  sKeyArraySound[sSoundRand].playMode('restart');
  sKeyArraySound[sSoundRand].setLoop(true);
}

function reRandVKey() {
  vSoundRand = Math.floor(Math.random() * vKeyArraySound.length);
  vKeyArraySound[vSoundRand].playMode('restart');
  vKeyArraySound[vSoundRand].setLoop(true);
}

function reRandXKey() {
  xSoundRand = Math.floor(Math.random() * xKeyArraySound.length);
  xKeyArraySound[xSoundRand].playMode('restart');
  xKeyArraySound[xSoundRand].setLoop(true);
}

function reRandZKey() {
  zSoundRand = Math.floor(Math.random() * zKeyArraySound.length);
  zKeyArraySound[zSoundRand].playMode('restart');
  zKeyArraySound[zSoundRand].setLoop(true);
}

function reRandCKey() {
  cSoundRand = Math.floor(Math.random() * cKeyArraySound.length);
  cKeyArraySound[cSoundRand].playMode('restart');
  cKeyArraySound[cSoundRand].setLoop(true);
}

function reRandFKey() {
  fSoundRand = Math.floor(Math.random() * fKeyArraySound.length);
  fKeyArraySound[fSoundRand].playMode('restart');
  fKeyArraySound[fSoundRand].setLoop(true);
}

function reRandHKey() {
  hSoundRand = Math.floor(Math.random() * hKeyArraySound.length);
  hKeyArraySound[hSoundRand].playMode('restart');
  hKeyArraySound[hSoundRand].setLoop(true);
}

function reRandKKey() {
  kSoundRand = Math.floor(Math.random() * kKeyArraySound.length);
  kKeyArraySound[kSoundRand].playMode('restart');
  kKeyArraySound[kSoundRand].setLoop(true);
}

function reRandMKey() {
  mSoundRand = Math.floor(Math.random() * mKeyArraySound.length);
  mKeyArraySound[mSoundRand].playMode('restart');
  mKeyArraySound[mSoundRand].setLoop(true);
}

function reRandPKey() {
  pSoundRand = Math.floor(Math.random() * pKeyArraySound.length);
  pKeyArraySound[pSoundRand].playMode('restart');
  pKeyArraySound[pSoundRand].setLoop(true);
}

function reRandRKey() {
  rSoundRand = Math.floor(Math.random() * rKeyArraySound.length);
  rKeyArraySound[rSoundRand].playMode('restart');
  rKeyArraySound[rSoundRand].setLoop(true);
}

function reRandTKey() {
  tSoundRand = Math.floor(Math.random() * tKeyArraySound.length);
  tKeyArraySound[tSoundRand].playMode('restart');
  tKeyArraySound[tSoundRand].setLoop(true);
}

function reRandWKey() {
  wSoundRand = Math.floor(Math.random() * wKeyArraySound.length);
  wKeyArraySound[wSoundRand].playMode('restart');
  wKeyArraySound[wSoundRand].setLoop(true);
}

function reRandYKey() {
  ySoundRand = Math.floor(Math.random() * yKeyArraySound.length);
  yKeyArraySound[ySoundRand].playMode('restart');
  yKeyArraySound[ySoundRand].setLoop(true);
}

function keyPressed() {
    if (keyCode != ENTER) {
        superArray.push(letters[keyCode]);
    }
    if (keyCode === ENTER) {
        for (i = 0; i <= superArray.length; i++) {
            if (superArray[i] == 'spacebar') {
                superArray[i] = " ";
            }
        }
        // var idx = superArray.indexOf('spacebar');
        // if (idx !== -1) {
        //     superArray[idx] = " ";
        // }
        // superArray.split(superArray.length);
        displayText = superArray.join('');
        renderText();
        // for(idx = 0; idx <= superArray.length; idx++) {
        //   console.log(superArray[idx]);
        //   for(idx2 = 0; idx2 <= allArrays.length; idx2++) {
        //     console.log(allArrays[idx2]);
        //     if (superArray[idx] == allArrays[idx2].charAt(0)) {
        //       allArrays[idx2].play();
        //     }
        //   }
        // }
        superArray = [];
    }
}

function keyTyped() {
  if (key === 'a') {
    reRandAKey();
    if (aKeyArraySound[aSoundRand].isLoaded()) {
      aKeyArraySound[aSoundRand].play();
      console.log(aSoundRand);
    } else {
      console.log("File not yet loaded");
    }
  } else if (key === 'e') {
    reRandEKey();
    if (eKeyArraySound[eSoundRand].isLoaded()) {
      eKeyArraySound[eSoundRand].play();
      console.log(eSoundRand);
    } else {
      console.log("File not yet loaded");
    }
  } else if (key === 'i') {
    reRandIKey();
    if (iKeyArraySound[iSoundRand].isLoaded()) {
      iKeyArraySound[iSoundRand].play();
      console.log(iSoundRand);
    } else {
      console.log("File not yet loaded");
    }
  } else if (key === 'o') {
    reRandOKey();
    if (oKeyArraySound[oSoundRand].isLoaded()) {
      oKeyArraySound[oSoundRand].play();
      console.log(oSoundRand);
    } else {
      console.log("File not yet loaded");
    }
  } else if (key === 'u') {
    reRandUKey();
    if (uKeyArraySound[uSoundRand].isLoaded()) {
      uKeyArraySound[uSoundRand].play();
      console.log(uSoundRand);
    } else {
      console.log("File not yet loaded");
    }
  } else if (key === 'b') {
    reRandBKey();
    if (bKeyArraySound[bSoundRand].isLoaded()) {
      bKeyArraySound[bSoundRand].play();
      console.log(bSoundRand);
    } else {
      console.log("File not yet loaded");
    }
  } else if (key === 'd') {
    reRandDKey();
    if (dKeyArraySound[dSoundRand].isLoaded()) {
      dKeyArraySound[dSoundRand].play();
      console.log(dSoundRand);
    } else {
      console.log("File not yet loaded");
    }
  } else if (key === 'g') {
    reRandGKey();
    if (gKeyArraySound[gSoundRand].isLoaded()) {
      gKeyArraySound[gSoundRand].play();
      console.log(gSoundRand);
    } else {
      console.log("File not yet loaded");
    }
  } else if (key === 'j') {
    reRandJKey();
    if (jKeyArraySound[jSoundRand].isLoaded()) {
      jKeyArraySound[jSoundRand].play();
      console.log(jSoundRand);
    } else {
      console.log("File not yet loaded");
    }
  } else if (key === 'l') {
    reRandLKey();
    if (lKeyArraySound[lSoundRand].isLoaded()) {
      lKeyArraySound[lSoundRand].play();
      console.log(lSoundRand);
    } else {
      console.log("File not yet loaded");
    }
  } else if (key === 'n') {
    reRandNKey();
    if (nKeyArraySound[nSoundRand].isLoaded()) {
      nKeyArraySound[nSoundRand].play();
      console.log(nSoundRand);
    } else {
      console.log("File not yet loaded");
    }
  } else if (key === 'q') {
    reRandQKey();
    if (qKeyArraySound[qSoundRand].isLoaded()) {
      qKeyArraySound[qSoundRand].play();
      console.log(qSoundRand);
    } else {
      console.log("File not yet loaded");
    }
  } else if (key === 's') {
    reRandSKey();
    if (sKeyArraySound[sSoundRand].isLoaded()) {
      sKeyArraySound[sSoundRand].play();
      console.log(sSoundRand);
    } else {
      console.log("File not yet loaded");
    }
  } else if (key === 'v') {
    reRandVKey();
    if (vKeyArraySound[vSoundRand].isLoaded()) {
      vKeyArraySound[vSoundRand].play();
      console.log(vSoundRand);
    } else {
      console.log("File not yet loaded");
    }
  } else if (key === 'x') {
    reRandXKey();
    if (xKeyArraySound[xSoundRand].isLoaded()) {
      xKeyArraySound[xSoundRand].play();
      console.log(xSoundRand);
    } else {
      console.log("File not yet loaded");
    }
  } else if (key === 'z') {
    reRandZKey();
    if (zKeyArraySound[zSoundRand].isLoaded()) {
      zKeyArraySound[zSoundRand].play();
      console.log(zSoundRand);
    } else {
      console.log("File not yet loaded");
    }
  } else if (key === 'c') {
    reRandCKey();
    if (cKeyArraySound[cSoundRand].isLoaded()) {
      cKeyArraySound[cSoundRand].play();
      console.log(cSoundRand);
    } else {
      console.log("File not yet loaded");
    }
  } else if (key === 'f') {
    reRandFKey();
    if (fKeyArraySound[fSoundRand].isLoaded()) {
      fKeyArraySound[fSoundRand].play();
      console.log(fSoundRand);
    } else {
      console.log("File not yet loaded");
    }
  } else if (key === 'h') {
    reRandHKey();
    if (hKeyArraySound[hSoundRand].isLoaded()) {
      hKeyArraySound[hSoundRand].play();
      console.log(hSoundRand);
    } else {
      console.log("File not yet loaded");
    }
  } else if (key === 'k') {
    reRandKKey();
    if (kKeyArraySound[kSoundRand].isLoaded()) {
      kKeyArraySound[kSoundRand].play();
      console.log(kSoundRand);
    } else {
      console.log("File not yet loaded");
    }
  } else if (key === 'm') {
    reRandMKey();
    if (mKeyArraySound[mSoundRand].isLoaded()) {
      mKeyArraySound[mSoundRand].play();
      console.log(mSoundRand);
    } else {
      console.log("File not yet loaded");
    }
  } else if (key === 'p') {
    reRandPKey();
    if (pKeyArraySound[pSoundRand].isLoaded()) {
      pKeyArraySound[pSoundRand].play();
      console.log(pSoundRand);
    } else {
      console.log("File not yet loaded");
    }
  } else if (key === 'r') {
    reRandRKey();
    if (rKeyArraySound[rSoundRand].isLoaded()) {
      rKeyArraySound[rSoundRand].play();
      console.log(rSoundRand);
    } else {
      console.log("File not yet loaded");
    }
  } else if (key === 't') {
    reRandTKey();
    if (tKeyArraySound[tSoundRand].isLoaded()) {
      tKeyArraySound[tSoundRand].play();
      console.log(tSoundRand);
    } else {
      console.log("File not yet loaded");
    }
  } else if (key === 'w') {
    reRandWKey();
    if (wKeyArraySound[wSoundRand].isLoaded()) {
      wKeyArraySound[wSoundRand].play();
      console.log(wSoundRand);
    } else {
      console.log("File not yet loaded");
    }
  } else if (key === 'y') {
    reRandYKey();
    if (yKeyArraySound[ySoundRand].isLoaded()) {
      yKeyArraySound[ySoundRand].play();
      console.log(ySoundRand);
    } else {
      console.log("File not yet loaded");
    }
  } else if (key === '0') {
    for (p = 0; p < aKeyArraySound.length; p++) {
      aKeyArraySound[p].stop();
      eKeyArraySound[p].stop();
      iKeyArraySound[p].stop();
      oKeyArraySound[p].stop();
      uKeyArraySound[p].stop();
      bKeyArraySound[p].stop();
      dKeyArraySound[p].stop();
      gKeyArraySound[p].stop();
      jKeyArraySound[p].stop();
      lKeyArraySound[p].stop();
      nKeyArraySound[p].stop();
      qKeyArraySound[p].stop();
      sKeyArraySound[p].stop();
      vKeyArraySound[p].stop();
      xKeyArraySound[p].stop();
      zKeyArraySound[p].stop();
      cKeyArraySound[p].stop();
      fKeyArraySound[p].stop();
      hKeyArraySound[p].stop();
      kKeyArraySound[p].stop();
      mKeyArraySound[p].stop();
      pKeyArraySound[p].stop();
      rKeyArraySound[p].stop();
      tKeyArraySound[p].stop();
      wKeyArraySound[p].stop();
      yKeyArraySound[p].stop();
    }
  }
}
