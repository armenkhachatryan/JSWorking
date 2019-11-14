// let bill = [124,48,268];
let user = {
    name: 'Armen',
    bill:[124,48,268,180,42],
    tip: [],
    rezult:[],
    meth: function calculator (){
            let percantage;
            for(let i = 0; i<this.bill.length;i++){
                if(this.bill[i]<50){
                    percantage = this.bill[i] *0.2;
                    this.tip.push(Math.round(percantage));
                    this.rezult.push(this.bill[i]+percantage)
                }
                else if(this.bill[i]>50 && this.bill[i]<200){
                    percantage = this.bill[i] *0.2;
                    this.tip.push(Math.round(percantage));
                    this.rezult.push(this.bill[i]+percantage);
                }
                else {
                    percantage = this.bill[i] *0.2;
                    this.tip.push(Math.round(percantage));
                    this.rezult.push(this.bill[i]+percantage  );
                }
    
            }
console.log(this.tip);
console.log(this.rezult);
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
            name: 'Gugush',
            bill:[77,375,119,45],
            tip: [],
            rezult:[],
            meth: function calculator (){
                    let percantage;
                    for(let i = 0; i<this.bill.length;i++){
                        if(this.bill[i]<100){
                            percantage = this.bill[i] *0.2;
                            this.tip.push(Math.round(percantage));
                            this.rezult.push(this.bill[i]+percantage)
                        }
                        else if(this.bill[i]>=100 && this.bill[i]<300){
                            percantage = this.bill[i] *0.1;
                            this.tip.push(Math.round(percantage));
                            this.rezult.push(this.bill[i]+percantage);
                        }
                        else {
                            percantage = this.bill[i] *0.25;
                            this.tip.push(Math.round(percantage));
                            this.rezult.push(this.bill[i]+percantage  );
                        }
            
                    }
        console.log(this.tip);
        console.log(this.rezult);
                }
            }
        user1.meth();
























