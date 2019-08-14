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

  var content1 = "هو الادخار الحر الذى يقوم به الفرد طوعاً واستجابة لإرادته ورغبته";
  var sulotion1 ="الادخار الاختياري";
  var op11 ="الانفاق";
  var op21 ="الادخار الاختياري";
  var op31 ="الادخار الإجباري";
  var op41 ="الاستثمار";

  var content2 = "هو ادخار يجبر عليه الأفراد نتيجة لمقتضيات قانونية أو لقرارات حكومية أو قرارات الشركات.";
  var sulotion2="الادخار الاجباري";
  var op12 ="الادخار الاجباري";
  var op22 ="الاستثمار";
  var op32 ="الانفاق";
  var op42 ="الادخار الاختياري";


  var q1 = new Question(content1, sulotion1, op11,  op21,  op31 , op41);
  var q2 = new Question(content2, sulotion2, op12 , op22,  op32 , op42);

  const questions = [q1 , q2];
