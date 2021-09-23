// There are 4 ways to declare/ instantiate objects

// 1. Object Literals.
// 2. Constructor Functions.
// 3. ECMAScript 6 Classes.
// 4. Object.create Method.


// 1. Object Literals.

const userDetails = {
	firstName : "Suma",
	lastName : "Himadri",
	yearOfBirth : 2000
};

console.log(userDetails); // { firstName: 'Suma', lastName: 'Himadri', yearOfBirth: 2000 }


// We can also add a method to an object literal
    const userDetails = {
      firstName : "Suma",
      lastName : "Himadri",
      yearOfBirth : 2000,

      getName : function(){
        return "User's Name : " + this.firstName + " " + this.lastName;
      }

    };

    console.log(userDetails.getName()); // User's Name : Suma Himadri

// 2. Constructor Functions.
      function User(firstName, lastName, yearOfBirth){
        this.firstName = firstName;
        this.lastName = lastName;
        this.yearOfBirth = yearOfBirth;

        this.getName = function(){
          return "User's Name : " + this.firstName + " " + this.lastName;
        }
      }


const userProfile = new User("Tarun", "Gouda", 2002);
console.log(userProfile); // User { firstName: 'Tarun', lastName: 'Gouda', yearOfBirth: 2002, getName: [Function] }
console.log(userProfile.getName()); //User's Name : Tarun Gouda

// 3. ECMAScript 6 Classes.

      class User {
        constructor(firstName, lastName, yearOfBirth){
          this.firstName = firstName;
          this.lastName = lastName;
          this.yearOfBirth = yearOfBirth;

          this.getName = function(){
            return "User's Name : " + this.firstName + " " + this.lastName;
          }
        }
      }

      const userProfile = new User("Tarun", "Gouda", 2002);
      console.log(userProfile); // User { firstName: 'Tarun', lastName: 'Gouda', yearOfBirth: 2002, getName: [Function] }
      console.log(userProfile.getName()); //User's Name : Tarun Gouda

// 4. Object.create Method.
      const userDetails = {
        firstName : "Suma",
        lastName : "Himadri",
        yearOfBirth : 2000,

        getName : function(){
          return "User's Name : " + this.firstName + " " + this.lastName;
        }

      };

      const userProfile1 = Object.create(userDetails);
      userProfile1.firstName = "Sheetal";
      userProfile1.lastName = "Agarwal";
      userProfile1.yearOfBirth = 1970;

      console.log(userProfile1); //{ firstName: 'Sheetal', lastName: 'Agarwal', yearOfBirth: 1970 }
      console.log(userProfile1.firstName); // Sheetal
      console.log(userProfile1.getName()); // User's Name : Sheetal Agarwal
