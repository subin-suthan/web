function cnt(str) {
  var vow = "aeiou";
  console.log(vow.split(""));
  var vc = 0;

  for (var i in [...str]) {
    if (vow.indexOf(str[i] !== -1)) {
      vc += 1;
    }
  }
  return vc;
}

str = "Betty bought some butter";
console.log(cnt(str));
