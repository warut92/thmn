//ฟังก์ชันแปลงตัวโน้ตไทยเป็น rtttl
let splitedNote = ""
function convert() {
  thmtextarea = document.getElementById('thm');

  data = thmtextarea.value;
  // console.log(data);
  i = data.split(":");
  nameWithBeat = i[0];
  beat = nameWithBeat.split("(");
  // console.log('BEAT', beat)
  name = beat[0]
  splitedBeat = beat[1]
  //หากไม่ได้กำหนดไว้ จะตั้งค่าปริยายไว้ 100
  if (splitedBeat === undefined) {
    splitedBeat = "100 "
  }
  splitedBeat = splitedBeat.slice(0, -1)
  // console.log('SPLITEDBEAT', splitedBeat)

  pureNote = i[1];

  //split เพื่อการเลือกเล่นเสียงเฉพาะที่
  splitedNote = pureNote.split(">");
  note = splitedNote[1];
  if (splitedNote[1] === undefined) {
    note = pureNote
  }
  //การแปลงโน้ต
  note = note.replace(/\s/g, '');

  note = note.replace(/\n/g, '');

  note = note.replace(/\//g, '');

  //ลบ string ที่อยู่ในวงเล็บ คือเราจะไม่แปลงอะไรในวงเล็บ ก็เลยต้องลบทิ้งเสีย
  note = note.replace(/ *\([^)]*\) */g, "");
  //โน้ตไทยต่อไปนี้จะใช้ทางเพียงออ
  //กลุ่ม ท
  note = note.replace(/ทํb-------/g, '1a#6,');
  note = note.replace(/ทํb-----/g, '2a#.6,');
  note = note.replace(/ทํb---/g, '2a#6,');
  note = note.replace(/ทํb--/g, '4a#.6,');
  note = note.replace(/ทํb-/g, '4a#6,');
  note = note.replace(/ทํb/g, '8a#6,');

  note = note.replace(/ทb-------/g, '1a#5,');
  note = note.replace(/ทb-----/g, '2a#.5,');
  note = note.replace(/ทb---/g, '2a#5,');
  note = note.replace(/ทb--/g, '4a#.5,');
  note = note.replace(/ทb-/g, '4a#5,');
  note = note.replace(/ทb/g, '8a#5,');

  note = note.replace(/ทฺb-------/g, '1a#4,');
  note = note.replace(/ทฺb-----/g, '2a#.4,');
  note = note.replace(/ทฺb---/g, '2a#4,');
  note = note.replace(/ทฺb--/g, '4a#.4,');
  note = note.replace(/ทฺb-/g, '4a#4,');
  note = note.replace(/ทฺb/g, '8a#4,');

  note = note.replace(/ทฺ-------/g, '1b4,');
  note = note.replace(/ทฺ-----/g, '2b.4,');
  note = note.replace(/ทฺ---/g, '2b4,');
  note = note.replace(/ทฺ--/g, '4b.4,');
  note = note.replace(/ทฺ-/g, '4b4,');
  note = note.replace(/ทฺ/g, '8b4,');

  note = note.replace(/ทํ-------/g, '1b6,');
  note = note.replace(/ทํ-----/g, '2b.6,');
  note = note.replace(/ทํ---/g, '2b6,');
  note = note.replace(/ทํ--/g, '4b.6,');
  note = note.replace(/ทํ-/g, '4b6,');
  note = note.replace(/ทํ/g, '8b6,');

  note = note.replace(/ท-------/g, '1b5,');
  note = note.replace(/ท-----/g, '2b.5,');
  note = note.replace(/ท---/g, '2b5,');
  note = note.replace(/ท--/g, '4b.5,');
  note = note.replace(/ท-/g, '4b5,');
  note = note.replace(/ท/g, '8b5,');
  //กลุ่ม ล
  note = note.replace(/ลฺ#-------/g, '1a#4,');
  note = note.replace(/ลฺ#-----/g, '2a#.4,');
  note = note.replace(/ลฺ#---/g, '2a#4,');
  note = note.replace(/ลฺ#--/g, '4a#.4,');
  note = note.replace(/ลฺ#-/g, '4a#4,');
  note = note.replace(/ลฺ#/g, '8a#4,');

  note = note.replace(/ลํ#-------/g, '1a#6,');
  note = note.replace(/ลํ#-----/g, '2a#.6,');
  note = note.replace(/ลํ#---/g, '2a#6,');
  note = note.replace(/ลํ#--/g, '4a#.6,');
  note = note.replace(/ลํ#-/g, '4a#6,');
  note = note.replace(/ลํ#/g, '8a#6,');

  note = note.replace(/ล#-------/g, '1a#5,');
  note = note.replace(/ล#-----/g, '2a#.5,');
  note = note.replace(/ล#---/g, '2a#5,');
  note = note.replace(/ล#--/g, '4a#.5,');
  note = note.replace(/ล#-/g, '4a#5,');
  note = note.replace(/ล#/g, '8a#5,');

  note = note.replace(/ลฺb-------/g, '1g#4,');
  note = note.replace(/ลฺb-----/g, '2g#.4,');
  note = note.replace(/ลฺb---/g, '2g4#,');
  note = note.replace(/ลฺb--/g, '4g#.4,');
  note = note.replace(/ลฺb-/g, '4g#4,');
  note = note.replace(/ลฺb/g, '8g#4,');

  note = note.replace(/ลํb-------/g, '1g#6,');
  note = note.replace(/ลํb-----/g, '2g#.6,');
  note = note.replace(/ลํb---/g, '2g#6,');
  note = note.replace(/ลํb--/g, '4g#.6,');
  note = note.replace(/ลํb-/g, '4g#6,');
  note = note.replace(/ลํb/g, '8g#6,');

  note = note.replace(/ลb-------/g, '1g#5,');
  note = note.replace(/ลb-----/g, '2g#.5,');
  note = note.replace(/ลb---/g, '2g#5,');
  note = note.replace(/ลb--/g, '4g#.5,');
  note = note.replace(/ลb-/g, '4g#5,');
  note = note.replace(/ลb/g, '8g#5,');

  note = note.replace(/ลฺ-------/g, '1a4,');
  note = note.replace(/ลฺ-----/g, '2a.4,');
  note = note.replace(/ลฺ---/g, '2a4,');
  note = note.replace(/ลฺ--/g, '4a.4,');
  note = note.replace(/ลฺ-/g, '4a4,');
  note = note.replace(/ลฺ/g, '8a4,');

  note = note.replace(/ลํ-------/g, '1a6,');
  note = note.replace(/ลํ-----/g, '2a.6,');
  note = note.replace(/ลํ---/g, '2a6,');
  note = note.replace(/ลํ--/g, '4a.6,');
  note = note.replace(/ลํ-/g, '4a6,');
  note = note.replace(/ลํ/g, '8a6,');

  note = note.replace(/ล-------/g, '1a5,');
  note = note.replace(/ล-----/g, '2a.5,');
  note = note.replace(/ล---/g, '2a5,');
  note = note.replace(/ล--/g, '4a.5,');
  note = note.replace(/ล-/g, '4a5,');
  note = note.replace(/ล/g, '8a5,');
  //กลุ่ม ซ
  note = note.replace(/ซฺ#-------/g, '1g#4,');
  note = note.replace(/ซฺ#-----/g, '2g#.4,');
  note = note.replace(/ซฺ#---/g, '2g4#,');
  note = note.replace(/ซฺ#--/g, '4g#.4,');
  note = note.replace(/ซฺ#-/g, '4g#4,');
  note = note.replace(/ซฺ#/g, '8g#4,');

  note = note.replace(/ซํ#-------/g, '1g#6,');
  note = note.replace(/ซํ#-----/g, '2g#.6,');
  note = note.replace(/ซํ#---/g, '2g#6,');
  note = note.replace(/ซํ#--/g, '4g#.6,');
  note = note.replace(/ซํ#-/g, '4g#6,');
  note = note.replace(/ซํ#/g, '8g#6,');

  note = note.replace(/ซ#-------/g, '1g#5,');
  note = note.replace(/ซ#-----/g, '2g#.5,');
  note = note.replace(/ซ#---/g, '2g#5,');
  note = note.replace(/ซ#--/g, '4g#.5,');
  note = note.replace(/ซ#-/g, '4g#5,');
  note = note.replace(/ซ#/g, '8g#5,');

  note = note.replace(/ซํb-----/g, '2f#.6,');
  note = note.replace(/ซํb---/g, '2f#6,');
  note = note.replace(/ซํb--/g, '4f#.6,');
  note = note.replace(/ซํb-/g, '4f#6,');
  note = note.replace(/ซํb/g, '8f#6,');

  note = note.replace(/ซฺb-------/g, '1f#4,');
  note = note.replace(/ซฺb-----/g, '2f#.6,');
  note = note.replace(/ซฺb---/g, '2f#4,');
  note = note.replace(/ซฺb--/g, '4f#.6,');
  note = note.replace(/ซฺb-/g, '4f#4,');
  note = note.replace(/ซฺb/g, '8f#4,');

  note = note.replace(/ซb-------/g, '1f#5,');
  note = note.replace(/ซb-----/g, '2f#.5,');
  note = note.replace(/ซb---/g, '2f#5,');
  note = note.replace(/ซb--/g, '4f#.5,');
  note = note.replace(/ซb-/g, '4f#5,');
  note = note.replace(/ซb/g, '8f#5,');

  note = note.replace(/ซฺ-------/g, '1g4,');
  note = note.replace(/ซฺ-----/g, '2g.4,');
  note = note.replace(/ซฺ---/g, '2g4,');
  note = note.replace(/ซฺ--/g, '4g.4,');
  note = note.replace(/ซฺ-/g, '4g4,');
  note = note.replace(/ซฺ/g, '8g4,');

  note = note.replace(/ซํ-------/g, '1g6,');
  note = note.replace(/ซํ-----/g, '2g.6,');
  note = note.replace(/ซํ---/g, '2g6,');
  note = note.replace(/ซํ--/g, '4g.6,');
  note = note.replace(/ซํ-/g, '4g6,');
  note = note.replace(/ซํ/g, '8g6,');

  note = note.replace(/ซ-------/g, '1g5,');
  note = note.replace(/ซ-----/g, '2g.5,');
  note = note.replace(/ซ---/g, '2g5,');
  note = note.replace(/ซ--/g, '4g.5,');
  note = note.replace(/ซ-/g, '4g5,');
  note = note.replace(/ซ/g, '8g5,');
  //กลุ่ม ฟ
  note = note.replace(/ฟํ#-----/g, '2f#.6,');
  note = note.replace(/ฟํ#---/g, '2f#6,');
  note = note.replace(/ฟํ#--/g, '4f#.6,');
  note = note.replace(/ฟํ#-/g, '4f#6,');
  note = note.replace(/ฟํ#/g, '8f#6,');

  note = note.replace(/ฟฺ#-------/g, '1f#4,');
  note = note.replace(/ฟฺ#-----/g, '2f#.6,');
  note = note.replace(/ฟฺ#---/g, '2f#4,');
  note = note.replace(/ฟฺ#--/g, '4f#.6,');
  note = note.replace(/ฟฺ#-/g, '4f#4,');
  note = note.replace(/ฟฺ#/g, '8f#4,');

  note = note.replace(/ฟ#-------/g, '1f#5,');
  note = note.replace(/ฟ#-----/g, '2f#.5,');
  note = note.replace(/ฟ#---/g, '2f#5,');
  note = note.replace(/ฟ#--/g, '4f#.5,');
  note = note.replace(/ฟ#-/g, '4f#5,');
  note = note.replace(/ฟ#/g, '8f#5,');

  note = note.replace(/ฟฺ-------/g, '1f4,');
  note = note.replace(/ฟฺ-----/g, '2f.6,');
  note = note.replace(/ฟฺ---/g, '2f4,');
  note = note.replace(/ฟฺ--/g, '4f.6,');
  note = note.replace(/ฟฺ-/g, '4f4,');
  note = note.replace(/ฟฺ/g, '8f4,');

  note = note.replace(/ฟํ-------/g, '1f6,');
  note = note.replace(/ฟํ-----/g, '2f.6,');
  note = note.replace(/ฟํ---/g, '2f6,');
  note = note.replace(/ฟํ--/g, '4f.6,');
  note = note.replace(/ฟํ-/g, '4f6,');
  note = note.replace(/ฟํ/g, '8f6,');

  note = note.replace(/ฟ-------/g, '1f5,');
  note = note.replace(/ฟ-----/g, '2f.5,');
  note = note.replace(/ฟ---/g, '2f5,');
  note = note.replace(/ฟ--/g, '4f.5,');
  note = note.replace(/ฟ-/g, '4f5,');
  note = note.replace(/ฟ/g, '8f5,');
  //กลุ่ม ม
  note = note.replace(/มฺb-------/g, '1d#4,');
  note = note.replace(/มฺb-----/g, '2d#.4,');
  note = note.replace(/มฺb---/g, '2d#4,');
  note = note.replace(/มฺb--/g, '4d#.4,');
  note = note.replace(/มฺb-/g, '4d#4,');
  note = note.replace(/มฺb/g, '8d#4,');

  note = note.replace(/มํb-------/g, '1d#6,');
  note = note.replace(/มํb-----/g, '2d#.6,');
  note = note.replace(/มํb---/g, '2d#6,');
  note = note.replace(/มํb--/g, '4d#.6,');
  note = note.replace(/มํb-/g, '4d#6,');
  note = note.replace(/มํb/g, '8d#6,');

  note = note.replace(/มb-------/g, '1d#5,');
  note = note.replace(/มb-----/g, '2d#.5,');
  note = note.replace(/มb---/g, '2d#5,');
  note = note.replace(/มb--/g, '4d#.5,');
  note = note.replace(/มb-/g, '4d#5,');
  note = note.replace(/มb/g, '8d#5,');

  note = note.replace(/มฺ-------/g, '1e4,');
  note = note.replace(/มฺ-----/g, '2e.6,');
  note = note.replace(/มฺ---/g, '2e4,');
  note = note.replace(/มฺ--/g, '4e.6,');
  note = note.replace(/มฺ-/g, '4e4,');
  note = note.replace(/มฺ/g, '8e4,');

  note = note.replace(/มํ-------/g, '1e6,');
  note = note.replace(/มํ-----/g, '2e.6,');
  note = note.replace(/มํ---/g, '2e6,');
  note = note.replace(/มํ--/g, '4e.6,');
  note = note.replace(/มํ-/g, '4e6,');
  note = note.replace(/มํ/g, '8e6,');

  note = note.replace(/ม-------/g, '1e5,'); //8
  note = note.replace(/ม-----/g, '2e.5,'); //6
  note = note.replace(/ม---/g, '2e5,'); //4
  note = note.replace(/ม--/g, '4e.5,'); //3
  note = note.replace(/ม-/g, '4e5,'); //2
  note = note.replace(/ม/g, '8e5,'); //1
  //กลุ่ม ร
  note = note.replace(/รฺ#-------/g, '1d#4,');
  note = note.replace(/รฺ#-----/g, '2d#.4,');
  note = note.replace(/ร#ฺ---/g, '2d#4,');
  note = note.replace(/รฺ#--/g, '4d#.4,');
  note = note.replace(/รฺ#-/g, '4d#4,');
  note = note.replace(/รฺ#/g, '8d#4,');

  note = note.replace(/รํ#-------/g, '1d#6,');
  note = note.replace(/รํ#-----/g, '2d#.6,');
  note = note.replace(/รํ#---/g, '2d#6,');
  note = note.replace(/รํ#--/g, '4d#.6,');
  note = note.replace(/รํ#-/g, '4d#6,');
  note = note.replace(/รํ#/g, '8d#6,');

  note = note.replace(/ร#-------/g, '1d#5,');
  note = note.replace(/ร#-----/g, '2d#.5,');
  note = note.replace(/ร#---/g, '2d#5,');
  note = note.replace(/ร#--/g, '4d#.5,');
  note = note.replace(/ร#-/g, '4d#5,');
  note = note.replace(/ร#/g, '8d#5,');

  note = note.replace(/รฺb-------/g, '1c#4,');
  note = note.replace(/รฺb-----/g, '2c#.4,');
  note = note.replace(/รฺb---/g, '2c#4,');
  note = note.replace(/รฺb--/g, '4c#.4,');
  note = note.replace(/รฺb-/g, '4c#4,');
  note = note.replace(/รฺb/g, '8c#4,');

  note = note.replace(/รํb-------/g, '1c#6,');
  note = note.replace(/รํb-----/g, '2c#.6,');
  note = note.replace(/รํb---/g, '2c#6,');
  note = note.replace(/รํb--/g, '4c#.6,');
  note = note.replace(/รํb-/g, '4c#6,');
  note = note.replace(/รํb/g, '8c#6,');

  note = note.replace(/รb-------/g, '1c#5,');
  note = note.replace(/รb-----/g, '2c#.5,');
  note = note.replace(/รb---/g, '2c#5,');
  note = note.replace(/รb--/g, '4c#.5,');
  note = note.replace(/รb-/g, '4c#5,');
  note = note.replace(/รb/g, '8c#5,');

  note = note.replace(/รฺ-------/g, '1d4,');
  note = note.replace(/รฺ-----/g, '2d.4,');
  note = note.replace(/รฺ---/g, '2d4,');
  note = note.replace(/รฺ--/g, '4d.4,');
  note = note.replace(/รฺ-/g, '4d4,');
  note = note.replace(/รฺ/g, '8d4,');

  note = note.replace(/รํ-------/g, '1d6,');
  note = note.replace(/รํ-----/g, '2d.6,');
  note = note.replace(/รํ---/g, '2d6,');
  note = note.replace(/รํ--/g, '4d.6,');
  note = note.replace(/รํ-/g, '4d6,');
  note = note.replace(/รํ/g, '8d6,');

  note = note.replace(/ร-------/g, '1d5,');
  note = note.replace(/ร-----/g, '2d.5,');
  note = note.replace(/ร---/g, '2d5,');
  note = note.replace(/ร--/g, '4d.5,');
  note = note.replace(/ร-/g, '4d5,');
  note = note.replace(/ร/g, '8d5,');
  //กลุ่ม ด
  note = note.replace(/ดฺ#-------/g, '1c#4,');
  note = note.replace(/ดฺ#-----/g, '2c#.4,');
  note = note.replace(/ดฺ#---/g, '2c#4,');
  note = note.replace(/ดฺ#--/g, '4c#.4,');
  note = note.replace(/ดฺ#-/g, '4c#4,');
  note = note.replace(/ดฺ#/g, '8c#4,');

  note = note.replace(/ดํ#-------/g, '1c#6,');
  note = note.replace(/ดํ#-----/g, '2c#.6,');
  note = note.replace(/ด#ํ---/g, '2c#6,');
  note = note.replace(/ดํ#--/g, '4c#.6,');
  note = note.replace(/ดํ#-/g, '4c#6,');
  note = note.replace(/ดํ#/g, '8c#6,');

  note = note.replace(/ด#-------/g, '1c#5,');
  note = note.replace(/ด#-----/g, '2c#.5,');
  note = note.replace(/ด#---/g, '2c#5,');
  note = note.replace(/ด#--/g, '4c#.5,');
  note = note.replace(/ด#-/g, '4c#5,');
  note = note.replace(/ด#/g, '8c#5,');

  note = note.replace(/ดฺ-------/g, '1c4,');
  note = note.replace(/ดฺ-----/g, '2c.4,');
  note = note.replace(/ดฺ---/g, '2c4,');
  note = note.replace(/ดฺ--/g, '4c.4,');
  note = note.replace(/ดฺ-/g, '4c4,');
  note = note.replace(/ดฺ/g, '8c4,');

  note = note.replace(/ดํ-------/g, '1c6,');
  note = note.replace(/ดํ-----/g, '2c.6,');
  note = note.replace(/ดํ---/g, '2c6,');
  note = note.replace(/ดํ--/g, '4c.6,');
  note = note.replace(/ดํ-/g, '4c6,');
  note = note.replace(/ดํ/g, '8c6,');

  note = note.replace(/ด-------/g, '1c5,');
  note = note.replace(/ด-----/g, '2c.5,');
  note = note.replace(/ด---/g, '2c5,');
  note = note.replace(/ด--/g, '4c.5,');
  note = note.replace(/ด-/g, '4c5,');
  note = note.replace(/ด/g, '8c5,');
  //กลุ่มเสียงเงียบ
  note = note.replace(/--------/g, '1p5,');
  note = note.replace(/------/g, '2p.5,');
  note = note.replace(/----/g, '2p5,');
  note = note.replace(/---/g, '4p.5,');
  note = note.replace(/--/g, '4p5,');
  note = note.replace(/-/g, '8p5,');
  //กลุ่มเสียงเงียบ
  note = note.replace(/xxxxxxxx/g, '1p5,');
  note = note.replace(/xxxxxx/g, '2p.5,');
  note = note.replace(/xxxx/g, '2p5,');
  note = note.replace(/xxx/g, '4p.5,');
  note = note.replace(/xx/g, '4p5,');
  note = note.replace(/x/g, '8p5,');

  //กลุ่มเสียงเงียบ
  note = note.replace(/--------/g, '1p5,');
  note = note.replace(/------/g, '2p.5,');
  note = note.replace(/----/g, '2p5,');
  note = note.replace(/---/g, '4p.5,');
  note = note.replace(/--/g, '4p5,');
  note = note.replace(/-/g, '8p5,');

  //กลุ่มเสียงเงียบ
  note = note.replace(/--------/g, '1p5,');
  note = note.replace(/------/g, '2p.5,');
  note = note.replace(/----/g, '2p5,');
  note = note.replace(/---/g, '4p.5,');
  note = note.replace(/--/g, '4p5,');
  note = note.replace(/-/g, '8p5,');
  //โน้ตสบัด แปลงจากรูปแบบของ RTTTL
  note = note.replace(/''8/g, "32")
  note = note.replace(/'8/g, "16")

  // ลบ string สุดท้าย
  var n = note.slice(0, -1);

  //ดึงค่า splitedBeat นำมาใส่
  var output = name + ":d=8,o=5,b=" + splitedBeat + ":" + n;
  document.getElementById('rtttl').value = output;
 // to do ...
//   function positionOnNote() {
//     splitedNote //โน้ตที่จะนำมาเล่น มาเป็นอาร์เรย์ 0, 1
//     // console.log('SPLITEDNOTE', splitedNote)
//     //ตรวจสอบความยาวของข้อมูลอาร์เรย์โน้ต
//     let indexOfNote = ""
//     //ถ้าความยาวของอาร์เรย์เท่า่กับ 1 ให้ใช้ indexOfNote ลำดับที่ 0 ถ้าไม่ก็ใช้ 1 (สร้างตรงนี้เพื่อจะไปเลือกอาร์เรย์ของ splitedNote)
//     if (splitedNote.length === 1) {
//       indexOfNote = 0
//     } else {
//       indexOfNote = 1
//     }
//     let noteForPlay = splitedNote[indexOfNote] // เอาเฉพาะ 1
//     noteForPlay = noteForPlay.split("") // นำมาทำให้โน้ตแต่ละตัวเป็นอาร์เรย์ทุกตัว
//     // console.log('NOTEFORPLAY', noteForPlay)
//     //สัญญลักษณ์ที่ต้องการค้นหา
//     let slash = "/"
//     //หาเฉพาะข้อมูลอาร์เรย์ของสัญลักษณ์
//     let filterSigns = noteForPlay.filter(sign => sign == slash)
//     // console.log('FILTERSIGNS', filterSigns)
//     //หา index ของ filterSigns
//     let indexsOfSign = [];
//     noteForPlay.filter(function(elem, index, array) {
//       if(elem === slash) {
//         //นำ index ของสัญลักษณ์นำมาร่วมกันหมดเป็นอาร์เรย์
//         indexsOfSign.push(index);
//         // console.log('INDEXSOFSIGN.PUSH(INDEX)', indexsOfSign)
//         }
//       })
//       return indexsOfSign;
//   }
// positionOnNote()
}
//ฟังก์ชันสลับการแสดงผลตัวหนังสือของฟังก์ชันแปลงตัวเลขเป็นตัวโน้ตไทยและกลับกัน
function changeText() {
  console.log(document.getElementById("btn1").innerText);
  if (document.getElementById("btn1").innerText === "1234") {
    document.getElementById("btn1").innerText = "ดรมฟ";
    alphabet();
  } else {
    document.getElementById("btn1").innerText = "1234";
    numberal();
  }
}

//ฟังก์ชันแปลงตัวเลขเป็นตัวโน้ตไทย
function alphabet() {
  var thmtext = document.getElementById('thm').value;
  i = thmtext.split(':')
  note = i[1]

  note = note.replace(/1/g, 'ด');
  note = note.replace(/2/g, 'ร');
  note = note.replace(/3/g, 'ม');
  note = note.replace(/4/g, 'ฟ');
  note = note.replace(/5/g, 'ซ');
  note = note.replace(/6/g, 'ล');
  note = note.replace(/7/g, 'ท');
  note = note.replace(/8/g, 'ดํ');
  note = note.replace(/9/g, 'รํ');
  note = note.replace(/\*/g, 'ํ');
  note = note.replace(/\+/g, 'ํ');
  note = note.replace(/\./g, 'ฺ');

  document.getElementById('thm').value = i[0] + ":" + note;
}


//ฟังก์ชันแปลงตัวโน้ตไทยเป็นตัวเลข
function numberal() {
  var thmtext = document.getElementById('thm').value;
  i = thmtext.split(':')
  note = i[1]
  //regex ไม่แปลงสตริงใด ๆ ในเครื่องหมาย ()
  // note = note.replace(/ *\([^)]*\) */g, /(\w*)/);

  note = note.replace(/ด/g, '1');
  note = note.replace(/ร/g, '2');
  note = note.replace(/ม/g, '3');
  note = note.replace(/ฟ/g, '4');
  note = note.replace(/ซ/g, '5');
  note = note.replace(/ล/g, '6');
  note = note.replace(/ท/g, '7');
  note = note.replace(/ํ/g, '*');
  note = note.replace(/ฺ/g, '.');

  document.getElementById('thm').value = i[0] + ":" + note;
}

function changeMelody() {
  var x = document.getElementById("melody").value;
  document.getElementById("thm").value = x;
  //focus textarea
  let thmNote = document.getElementById('thm')
  thmNote.focus()
}

//ฟังก์ชันอ่านไฟล์โน้ต
//Read file https://www.w3docs.com/learn-javascript/file-and-filereader.html
function readFile(input) {
  let file = input.files[0];
  let fileReader = new FileReader();
  fileReader.readAsText(file);
  fileReader.onload = function() {
    document.getElementById("thm").value = fileReader.result;
  };
  fileReader.onerror = function() {
    alert(fileReader.error);
  };
}
//Save file https://stackoverflow.com/a/30740104
function saveTextAsFile() {
  var textToWrite = document.getElementById("thm").value;
  var textFileAsBlob = new Blob([textToWrite], {
    type: "text/plain"
  });
  var splitedText = textToWrite.split(":");
  nameAndBPM = splitedText[0];
  onlyName = nameAndBPM.split("(")
  var fileNameToSaveAs = onlyName[0] + ".txt";

  var downloadLink = document.createElement("a");
  downloadLink.download = fileNameToSaveAs;
  downloadLink.innerHTML = "Download File";
  if (window.webkitURL != null) {
    // Chrome allows the link to be clicked
    // without actually adding it to the DOM.
    downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
  } else {
    // Firefox requires the link to be added to the DOM
    // before it can be clicked.
    downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
    downloadLink.onclick = destroyClickedElement;
    downloadLink.style.display = "none";
    document.body.appendChild(downloadLink);
  }
  downloadLink.click();
}
// var button = document.getElementById("save");
// button.addEventListener("onclick", saveTextAsFile);
