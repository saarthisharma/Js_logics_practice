// let age = 31
let normal_year_days = 365
let leap_year_days = 366
let total_L=0;
let total_N=0;
for(let year = 1990 ; year<2021;year++)
{
    if((year%4==0) && (year%100 !=0) || (year%400==0))
    {
        // console.log(`${year} is a leap year`)
        total_L = total_L+leap_year_days;
    }
    else
    {
        // console.log(`${year} is not a leap year`)
        total_N = total_N+normal_year_days;
    }
}
let total_days_lived = total_L+total_N;
console.log(total_days_lived)
