console.log(""); //allignment perpose

let allData = new XMLHttpRequest();

allData.open("GET", "https://restcountries.com/v3.1/all", true);

allData.send();

allData.onload = () => {
  let data = JSON.parse(allData.response);

  //  1-Get all the countries from the Asia continent /region using the Filter function
  console.log(""); //allignment perpose

  console.log("Answer for Q.no 1=>there are 50 region in Asia continent");
  console.log(""); //allignment perpose

  let asiaRegion = data
    .filter((ele) => ele.region == "Asia")
    .map((ele) => ele.name.common);
  for (let i = 0; i < asiaRegion.length; i++) {
    console.log(`${i + 1} ${asiaRegion[i]}`);
  }
  //-------------------------------------------------------------------------------------------------------------------
  // 2. Get all the countries with a population of less than 2 lakhs using Filter function
  console.log(""); //allignment perpose

  console.log(
    "Answer for Q.no 2=> Population of the countries less than 2 lakhs are 62. "
  );
  console.log(""); //allignment perpose
  let asiaRegion1 = data.filter((ele) => ele.population < 200000);
  for (let i = 0; i < asiaRegion1.length; i++) {
    console.log(
      `${i + 1} ${asiaRegion1[i].name.common} =>${asiaRegion1[i].population}`
    );
  }

  //-------------------------------------------------------------------------------------------------------------------

  // 3. Print the following details name, capital, flag using forEach function
  console.log(""); //allignment perpose

  console.log(
    "Answer for Q.no 3=> details name, capital, flag using forEach function "
  );
  console.log(""); //allignment perpose

  data.forEach((ele, index) => {
    console.log(
      `${index + 1} ${ele.name.common}, capital=>${ele.capital} and flag : ${
        ele.flags.png
      }`
    );
  });

  //-------------------------------------------------------------------------------------------------------------------

  //4. Print the total population of countries using reduce function
  console.log(""); //allignment perpose

  let totalPopul = data.reduce((acc, val) => val.population + acc, 0);
  console.log(
    "Answer for Qno.4=> the total Population for rest countries => " +
      totalPopul
  );
  //-------------------------------------------------------------------------------------------------------------------

  //5. Print the country which uses US Dollars as currency.
  console.log(""); //allignment perpose

  console.log(
    "Answer for Qno.5=>the country which uses US Dollars as currency"
  );
  console.log(""); //allignment perpose

  let usd = data
    .filter((ele) => ele.currencies)
    .filter((ele) => ele.currencies.USD);
  for (let i = 0; i < usd.length; i++) {
    console.log(`${i + 1} ${usd[i].name.common}`);
  }
  //-------------------------------------------------------------------------------------------------------------------
};
