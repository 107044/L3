var $test = 1;
var cal = {
  add:function($a,$b){
    return $a + $b;
  },
  minus:function($a,$b){
    return $a - $b;
  },
  cross:function($a,$b){
      return $a * $b;
  },
  get_test:function(){
      return $test;
  }
};
module.exports = cal
// module.exports = function($a,$b){
//     return $a * $b
// }