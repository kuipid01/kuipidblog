export const excerpt = (string, count) => {
 if (string.lenght> count){
     string= string.substring(0, count) + "....";
    console.log(string.lenght)
 }
 return string
};