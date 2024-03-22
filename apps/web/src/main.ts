import { greet } from "@modules/util/greet";
import { table } from "@modules/util/tables/user"; // NOTE: there is no user.table import
import { should } from "@modules/util/nodenext.js";


greet('Hello, world');
console.log('User table: ', table);
console.log('Should: ', should);
