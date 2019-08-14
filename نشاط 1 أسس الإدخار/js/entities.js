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

  var content1 = "ظاهرة اقتصادية أساسية في حياة الأفراد والمجتمعات وهو فائض الدخل عن الاستهلاك	";
  var sulotion1 ="الادخار";
  var op11 =" الدخل";
  var op21 ="الادخار";
  var op31 ="الانفاق";
  var op41 ="الاستهلاك";

  var content2 = "هو عبارة عن المال الذى يحصل عليه الفرد ويوزعه بين الاستهلاك والادخار";
  var sulotion2="الدخل";
  var op12 ="الاستثمار";
  var op22 ="رأس المال";
  var op32 ="الانفاق";
  var op42 ="الدخل";

  var content3 = "هو أن تضع المال في مشروعات يتوقع أن تكون مربحه";
  var sulotion3 ="الاستثمار";
  var op13 ="الادخار";
  var op23 ="الاستهلاك";
  var op33 ="الاستثمار";
  var op43 ="الانفاق";

  var content4 =  "هو استعمال السلع بصفة كلية أو جزئية لتلبية الحاجات الانسانية";
  var sulotion4 = "الاستهلاك";
  var op14 ="الاستهلاك";
  var op24 ="الادخار";
  var op34 ="الاستثمارالمباشر";
  var op44 ="الاستثمارغيرالمباشر";

  var q1 = new Question(content1, sulotion1, op11,  op21,  op31 , op41);
  var q2 = new Question(content2, sulotion2, op12 , op22,  op32 , op42);
  var q3 = new Question(content3, sulotion3, op13 , op23,  op33 , op43);
  var q4 = new Question(content4, sulotion4, op14,  op24,  op34 , op44);

  const questions = [q1 , q2 , q3 ,q4];

