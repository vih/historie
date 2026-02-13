const fs=require("fs"),pkg=require("./package.json"),filename="assets/js/main.min.js",script=fs.readFileSync(filename),padStart=e=>("0"+e).slice(-2),dateObj=new Date,date=`${dateObj.getFullYear()}-${padStart(dateObj.getMonth()+1)}-${padStart(dateObj.getDate())}`,banner=`/*!
 * Minimal Mistakes Jekyll Theme ${pkg.version} by ${pkg.author}
 * Copyright ${dateObj.getFullYear()} Michael Rose - mademistakes.com | @mmistakes
 * Licensed under ${pkg.license}
 */
`;script.slice(0,3)!="/**"&&fs.writeFileSync(filename,banner+script)