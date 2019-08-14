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

  var content1 = "يقصد به استهلاك السلع والقضاء عليها بمجرد استخدامها مرة واحدة";
  var sulotion1 ="الاستهلاك الفوري";
  var op11 ="الاستهلاك التدريجي";
  var op21 ="الاستهلاك المؤقت";
  var op31 ="الاستهلاك الزمنى";
  var op41 ="الاستهلاك الفوري";

  var content2 = "أياً مما يلى يمثل العلاقة بين الادخار والاستهلاك";
  var sulotion2="كلما زاد الادخار نقص الاستهلاك";
  var op12 ="كلما زاد الادخار زاد الاستهلاك";
  var op22 ="كلما زاد الادخار نقص الاستهلاك";
  var op32 ="كلما نقص الادخار نقص الاستهلاك";
  var op42 ="لا توجد علاقة بين الادخار والاستهلاك";

  var content3 = "يعتبر الانفاق على الطعام والشراء والملبس والمأكل أحد أنواع";
  var sulotion3 ="الاستهلاك التلقائي";
  var op13 ="الاستهلاك التلقائي";
  var op23 ="الاستهلاك التابع";
  var op33 ="الاستهلاك الكمالي";
  var op43 ="الاستهلاك الترفيهي";

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

