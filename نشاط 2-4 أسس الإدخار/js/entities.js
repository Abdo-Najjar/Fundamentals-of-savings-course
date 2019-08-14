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

  var content1 = "هي عبارة عن مصروفات أكلت أموالك مقدماً";
  var sulotion1 ="القروض والديون";
  var op11 ="الانفاق";
  var op21 ="الادخار";
  var op31 ="القروض والديون";
  var op41 ="الاستثمار";

  var content2 = "هو قرض بغرض شراء السلع الاستهلاكية";
  var sulotion2="القرض الاستهلاكي";
  var op12 ="القرض الاستثماري";
  var op22 ="القرض العقاري";
  var op32 ="القرض الاستهلاكي";
  var op42 ="القرض الصناعي";

  var content3 = "هو الشخص الذى يتعهد بالسداد عن المقترض في حال عدم السداد";
  var sulotion3 ="الكفيل";
  var op13 ="المقترض";
  var op23 ="الكفيل";
  var op33 ="المقرض";
  var op43 ="المستثمر";

  var content4 =  "إذا كان عليك دين أو قرض وقمت بسداده فيعتبر ذلك  نوع من أنواع";
  var sulotion4 = "الانفاق";
  var op14 ="الاقتراض";
  var op24 ="الانفاق";
  var op34 ="الاستثمار";
  var op44 ="التوفير";

  var q1 = new Question(content1, sulotion1, op11,  op21,  op31 , op41);
  var q2 = new Question(content2, sulotion2, op12 , op22,  op32 , op42);
  var q3 = new Question(content3, sulotion3, op13 , op23,  op33 , op43);
  var q4 = new Question(content4, sulotion4, op14,  op24,  op34 , op44);

  const questions = [q1 , q2 , q3 ,q4];

