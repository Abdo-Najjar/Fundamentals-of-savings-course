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

  var content1 = "من ضمن مزايا الادخار للفرد والأسرة ما يلى";
  var sulotion1 ="كل ما سبق";
  var op11 ="تحقيق أهدافك الكبيرة";
  var op21 ="الامان المالي";
  var op31 ="كل ما سبق";
  var op41 ="يمكن من توفير المال اللازم للاستثمار";

  var content2 = "من ضمن فوائد الادخار بالنسبة للمجتمع والاقتصاد الوطني";
  var sulotion2="زيادة قدرة المملكة على إنشاء مشروعات قومية وتوفير المزيد من فرص العمل";
  var op12 ="زيادة قدرة المملكة على إنشاء مشروعات قومية وتوفير المزيد من فرص العمل";
  var op22 ="ارتفاع معدلات البطالة";
  var op32 ="عدم قدرة المملكة على إنشاء مشروعات قومية جديدة";
  var op42 ="انخفاض حصيلة المدخرات";

 
  var q1 = new Question(content1, sulotion1, op11,  op21,  op31 , op41);
  var q2 = new Question(content2, sulotion2, op12 , op22,  op32 , op42);
  
  const questions = [q1 , q2 ];

