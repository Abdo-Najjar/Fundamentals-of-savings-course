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

  var content1 = "من الصفات المميزة للشخص البخيل والتي تميزه عن الشخص المدخر ما يلى";
  var sulotion1 ="أنه لا يستمتع بالحياة وليس لديه خطط لذلك";
  var op11 ="أنه لا يستمتع بالحياة وليس لديه خطط لذلك";
  var op21 ="أنه يعتبر المال وسيلة وليس هدف";
  var op31 ="أنه يستمتع بالحياة ولدية خطط لذلك";
  var op41 ="أنه يحظى باحترام الآخرين وحبهم";

  var content2 = "تظهر أهمية الاستثمار بالنسبة للفرد لما يلى";
  var sulotion2="كل ما سبق";
  var op12 ="يزيد ثروتك";
  var op22 ="يولد دخلاً إضافياً";
  var op32 ="كل ما سبق";
  var op42 ="يعوض تكلفة الزكاة";

  var content3 = "من ضمن المزايا التي تحققها الميزانية الشخصية للمدخر ما يلى";
  var sulotion3 ="كل ما سبق";
  var op13 ="أنها تعمل على تنظيم الانفاق وليس منعه";
  var op23 ="تحدد المبلغ المناسب للادخار";
  var op33 ="كل ما سبق";
  var op43 ="تعمل على توفير احتياجاتك حسب المتاح";

  var content4 =  "يتوقف الاستهلاك بالدرجة الأولى على مستوى";
  var sulotion4 = "الدخل";
  var op14 ="الاستثمار المباشر";
  var op24 ="التعليم";
  var op34 ="الدخل";
  var op44 ="الاستثمار غير المباشر";

  var q1 = new Question(content1, sulotion1, op11,  op21,  op31 , op41);
  var q2 = new Question(content2, sulotion2, op12 , op22,  op32 , op42);
  var q3 = new Question(content3, sulotion3, op13 , op23,  op33 , op43);
  var q4 = new Question(content4, sulotion4, op14,  op24,  op34 , op44);

  const questions = [q1 , q2 , q3 ,q4];

