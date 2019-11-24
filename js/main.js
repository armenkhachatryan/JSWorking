// let bill = [124,48,268];
let user = {
    name: 'Armen',
    bill:[124,268,180,402],
    tip: [],
    rezultArmen:[],
    meth: function calculator (){
            let percantage;
            for(let i = 0; i<this.bill.length;i++){
                if(this.bill[i]<50){
                    percantage = this.bill[i] *0.2;
                    this.tip.push(Math.round(percantage));
                    this.rezultArmen.push(this.bill[i]+percantage)
                }
                else if(this.bill[i]>50 && this.bill[i]<200){
                    percantage = this.bill[i] *0.1;
                    this.tip.push(Math.round(percantage));
                    this.rezultArmen.push(this.bill[i]+percantage);
                }
                else {
                    percantage = this.bill[i] *0.25;
                    this.tip.push(Math.round(percantage));
                    this.rezultArmen.push(this.bill[i]+percantage  );
                }
    
            }
// console.log(this.tip);
console.log(this.rezultArmen);
        }
    }
user.meth();
/*let john = {
    firstname: 'Armen',
    lastName: 'Khachatryan',
    mass: 60,
    height: 175,
    calcBmi: function() {
        this.bmi = this.mass/(this.height*this.height)  
    }};
    john.calcBmi();
    let jane = {
        firstname: 'Nune',
        lastName: 'Xosrovyan',
        mass: 70,
        height: 175,
        calcBmi: function() {
            this.bmi = this.mass/(this.height*this.height)
        }};
        jane.calcBmi();
        if(john.bmi>jane.bmi){
            console.log(`${john.firstname} wins!`)
        } else if (jane.bmi>john.bmi){
            console.log(`${jane.firstname} wins!`)
        } else {
            console.log(`${jane.bmi} is equale to ${john.bmi}`)
        }
        console.log(jane.bmi)*/

        let user1 = {
            name: 'Gayush',
            bill:[124,268,180,402],
            tip: [],
            rezultGayush:[],
            meth: function calculator (){
                    let percantage;
                    for(let i = 0; i<this.bill.length;i++){
                        if(this.bill[i]<100){
                            percantage = this.bill[i] *0.2;
                            this.tip.push(Math.round(percantage));
                            this.rezultGayush.push(this.bill[i]+percantage)
                        }
                        else if(this.bill[i]>=100 && this.bill[i]<300){
                            percantage = this.bill[i] *0.1;
                            this.tip.push(Math.round(percantage));
                            this.rezultGayush.push(this.bill[i]+percantage);
                        }
                        else {
                            percantage = this.bill[i] *0.25;
                            this.tip.push(Math.round(percantage));
                            this.rezultGayush.push(this.bill[i]+percantage  );
                        }
            
                    }
        // console.log(this.tip);
        console.log(this.rezultGayush);
                }
            }
        user1.meth();
        function average(arr){
            let sum =0 ;
            for (let i=0; i<arr.length; i++ ){
             
                sum += arr[i] ;
            };
            let aver = sum/arr.length;
            console.log(sum);
            return(aver)
        }
        if (average(user.rezultArmen)>average(user1.rezultGayush)){
            console.log(`${user.name}s family spend more then ${user1.name}s!`)
        } else if (average(user.rezultArmen)=== average(user1.rezultGayush)){
            console.log(`${user1.name}s family spend equale with ${user.name}s!`)
        }else {
            console.log(`${user1.name}s family spend moren then ${user.name}s!`)
        }
        
























