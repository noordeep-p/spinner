const spinner = function() {
  let spinArr = ['\r|   ','\r/   ','\r-   ','\r\\   ','\r|   ','\r|   ','\r/   ','\r-   ','\r\\   ','\r|   \n'];
  let time = 100;
  for (let i = 0; i < spinArr.length; i++) {
    time += 100;
    setTimeout(() =>
      process.stdout.write(spinArr[i]), time);
  }
};

spinner();