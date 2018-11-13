enum pets{
    cat=1,
    dog
   
   }
  
   
   interface petoptions{
       pet1: string;
       pet2: string;
   
   }

    var pet1 : string='cat';
    var pet2 : string='dog';
   class animal{
    
   public name: string ;

    constructor(thename: string){
    this.name = thename;
    }
 old(age:string){

console.log("its a " +pet1+"his name is" +this.name+ "  he is " +age+ "year old");

        }
    }
    let myanimal = new animal("Dave");
    myanimal.old("six");


   
   function getapet( petoptions:any){
  
   return  "its a " +pet1+"his name is" +this.name+ "  he is " +age+ "year old";
   }

   getapet({
   pet1: pets.cat,
   pet2: pets.dog

   });
