export class ErrorHandler extends Error{
    
    constructor(public message:string, public statusCode?:number){
        /**
         *  1. এটি স্বয়ংক্রিয়ভাবে ক্লাসের প্রপার্টি হিসেবে সেই প্যারামিটারগুলোকে ইনিশিয়ালাইজ করে।
         *  2. আপনি আলাদা করে this.message = message বা this.statusCode = statusCode লিখতে হয় না।
         */

        super(message);
        Error.captureStackTrace(this, this.constructor);
        /**
         *  this.constructor পাস করলে স্ট্যাক ট্রেসের শুরুতে এই কনস্ট্রাক্টর ফাংশনকে বাদ দেওয়া হয়। ja debuging a help kore
            jar fole result directly error er line dekhai: 
            CustomError: This is a custom error
            at Object.<anonymous> (/path/to/file.js:10:9)
            ...

            jodi Error.captureStackTrace(this, this.constructor); add na kora hoto...
            Error: This is a custom error
            at new CustomError (/path/to/file.js:3:22)
            at Object.<anonymous> (/path/to/file.js:10:9)
            ...
         */
    }
}