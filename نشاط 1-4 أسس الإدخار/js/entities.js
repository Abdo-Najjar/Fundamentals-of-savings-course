  "use strict"
  class Question{
    constructor(content , sulotion , op1 , op2 , op3 , op4){
      this.content = content;
      this.sulotion= sulotion;
      this.op1 = op1;
      this.op2 = op2;
      this.op3 = op3;
      this.op4 = op4;
    }
  }

  var content1 = "يعتبر مصروف الإيجار والأقساط ورواتب العمالة المنزلية أحد بنود ...................... التي يجب تقديرها عند إعداد ميزانية أسرتك";
  var sulotion1 ="المصروفات الثابتة الشهرية";
  var op11 ="المصروفات الثابتة الشهرية";
  var op21 ="المصروفات المتغيرة الشهرية";
  var op31 ="من المصروفات الكمالية";
  var op41 ="المصروفات الاستثمارية";

  var content2 = "تعتبر فواتير الكهرباء والمياه والاتصالات من ضمن .................. عند تحديد فئات ميزانية الاسرة";
  var sulotion2="النفقات المنزلية";
  var op12 ="النفقات الاجتماعية";
  var op22 ="نفقات المعيشة";
  var op32 ="النفقات المنزلية";
  var op42 ="المدخرات";

  var content3 = "تتمثل اولى خطوات إعداد ميزانية اسرتك حساب دخلك الشهري والتي قد تكون عبارة عن";
  var sulotion3 ="كل ما سبق";
  var op13 ="مرتبك أو مصروفك الشهري";
  var op23 ="أرباح الاستثمارات في حالة وجودها";
  var op33 ="ايرادات أخرى مثل تأجير عقار";
  var op43 ="كل ما سبق";

  

  var q1 = new Question(content1, sulotion1, op11,  op21,  op31 , op41);
  var q2 = new Question(content2, sulotion2, op12 , op22,  op32 , op42);
  var q3 = new Question(content3, sulotion3, op13 , op23, op43, op33 );


  const questions = [q1 , q2 , q3 ];

