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

  var content1 = "من ضمن الشروط الواجب توافرها عند اعداد ميزانية اسرتك حتى تكون واقعية ما يلى";
  var sulotion1 ="كل ما سبق";
  var op11 ="لابد أن يكون فيها تحديد محاسبي علمي";
  var op21 ="أن تكون مرنة وقابلة للتعديل";
  var op31 ="كل ما سبق";
  var op41 ="ان تراعى المستقبل واحتياجاته";

  var content2 = "من الأسس المالية العامة التي يجب مراعاتها عند وضع ميزانية الأسرة ما يلى";
  var sulotion2="مراعاة الأسعار السائدة للسلع والخدمات والظروف";
  var op12 ="أن تحقق أهداف الأسرة";
  var op22 ="مراعاة الأسعار السائدة للسلع والخدمات والظروف";
  var op32 ="أن تشبع حاجات افراد الأسرة";
  var op42 ="عدم الاهتمام بأسعار السلع والخدمات ولا الظروف";

  var content3 = "من ضمن الأسس العامة لوضع ميزانية الأسرة ما يلي";
  var sulotion3 ="كل ما سبق";
  var op13 ="مراعاة تحقيق أهداف الأسرة والأفراد";
  var op23 ="مراعاة ألا يطغى بند على الأخر";
  var op33 ="كل ما سبق";
  var op43 ="اشباع الحاجات الأهم ثم الأقل أهمية";

  var content4 =  "تعتبر مصروفات العلاج والملابس أحد بنود ...................... التي يجب تقديرها عند إعداد ميزانية أسرتك";
  var sulotion4 = "المصروفات المتغيرة";
  var op14 ="المصروفات المتغيرة";
  var op24 ="المصروفات الاستثمارية";
  var op34 ="المصروفات الثابتة";
  var op44 ="المصروفات الكمالية";

  var q1 = new Question(content1, sulotion1, op11,  op21,  op31 , op41);
  var q2 = new Question(content2, sulotion2, op12 , op22,  op32 , op42);
  var q3 = new Question(content3, sulotion3, op13 , op23,  op33 , op43);
  var q4 = new Question(content4, sulotion4, op14,  op24,  op34 , op44);

  const questions = [q1 , q2 , q3 ,q4];

