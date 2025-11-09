/**
 * Create a directory task_1 and copy these configuration files into this folder: package.json, tsconfig.json, webpack.config.js
 * 
 * firstName(string) and lastName(string). These two attributes should only be modifiable when a Teacher is first initilized
 * fullTimeEmployee(boolean) this attribute should always be defined
 * yearsOfExperience(number) this attribute is optional
 * location(string) this attribute should always be defined
 * Add the possibility to add any attribute to the object like contract(boolean) without specifying the name of the attribute
*/

/**
 * firstName and lastName: readonly modifier ensures they can only be set during initialization
 * location, contract and fullTimeEmployee: is always defined, thus require no "?" modifier
 * yearsOfExperience: is an optional property, thus needs the "?" modifier so it can be omitted
 * contract: Adds the possibility to add any attribute to the object. 
*/


interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [contract: string]: any;
}

const teacher: Teacher = {
    firstName: "mary",
    lastName: 'Mary', 
    fullTimeEmployee: false, // TODO - validation to switch true and false
    yearsOfExperience: 3,
    location: 'Kaduna',
    contract: true, // TODO - validation to switch true and false
}

console.log(teacher)