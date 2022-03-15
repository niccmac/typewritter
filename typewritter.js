const sentence = "hello there from lighthouse labs";

const letterTimeoutDelay = () => {
  return Math.ceil(Math.random() * 1000);
};



for (const char of sentence) {
  setTimeout(() => console.log(char), letterTimeoutDelay);
}