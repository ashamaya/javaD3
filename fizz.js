function fizz(n){

    for(i=1;i<=n;i++){

        if(i%5==0 && i%3==0){
            console.log("fizzbuzz");
        }
        else if(i%3==0){
            console.log("fizz");
        }
        else if (i%5==0){
            console.log("buzz");
        }
        else{
            console.log(i);
        }
    }

}
fizz(15);

//factorial
function factorial(n){
    let num=1
    for(i=1;i<=n;i++){
        num=num*i;
    }
    console.log(num);
}
factorial(4);
