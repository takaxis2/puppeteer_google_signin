import puppeteer from "puppeteer";

const usrInfo = {
  firstName: "John",
  lastName: "Doe",
  year: "1999",
  month: "1",
  day: "1",
  gender: "1",
  userName: "akjndhbb245",
  passwd: "@#1q332ww2s",
  phoneNumber: "01012223443",
};

async function googleSign(usrInfo) {
  const browser = await puppeteer.launch({ headless: false });
  // const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("https://accounts.google.com/signup");

  //1번쨰 이름, 성
  await page.type('input[name="lastName"]', usrInfo.lastName);
  await page.type('input[name="firstName"]', usrInfo.firstName);
  await page.click("#collectNameNext > div > button");
  await page.waitForNetworkIdle({ waitUntil: "networkidle0" });

  //2번쨰 연,월,일 성별

  await page.waitForSelector("#year");
  await page.waitForSelector("#month");
  await page.waitForSelector("#day");
  await page.waitForSelector("#gender");

  await page.select("#month", usrInfo.month);
  await page.select("#gender", usrInfo.gender);
  await page.type('input[name="day"]', usrInfo.day, { delay: 300 });
  await page.type('input[name="year"]', usrInfo.year, { delay: 300 });

  await page.click("#birthdaygenderNext > div > button");
  await page.waitForNetworkIdle({ waitUntil: "networkidle0" });

  /*
    남 :1
    여 : 2
    공개 안함 : 3
    맞춤 : 4 쓰지않는걸로
  */

  //3번쨰 이메일 선택하기
  /*
  id="headingText" 로 판단
  
  //*[@id="headingText"]/span
    1번째 : 이메일 선택
        - #selectionc2, #selectionc3, #selectionc4(얘가 내 gmail주소 만들기)

    2번째 이메일 주소 생성  
        - 'input[name="Username"]'

    이메일이 중복일경우를 생각해야함
  */

  const lastOption = await page.$("#selectionc4");
  await page.waitForSelector("#headingText");
  if (lastOption != null) {
    await page.click("#selectionc4");
  }
  //   await page.click("#selectionc2");
  await page.type('input[name="Username"]', usrInfo.userName);
  await page.click("#next > div > button");
  await page.waitForNetworkIdle({ idleTime: 1000 });

  //4번째 비밀번호
  //문자, 숫자, 기호
  await page.waitForSelector('input[name="Passwd"]');
  await page.type('input[name="Passwd"]', usrInfo.passwd);
  await page.type('input[name="PasswdAgain"]', usrInfo.passwd);
  await page.click("#createpasswordNext > div > button");
  await page.waitForNavigation({ idleTime: 1000 });

  //5번째 보안문자 받기
  let phoneInput = await page.waitForSelector("#phoneNumberId");
  await phoneInput.type(usrInfo.phoneNumber);
  // await page.click(
  //   "#view_container > div > div > div.pwWryf.bxPAYd > div > div.zQJV3 > div > div > div > div > button"
  // );
  await page.click("div ::-p-text(다음)");

  await page.waitForNavigation({ idleTime: 1000 });

  //6번쨰 코드 입력
  const code = await page.waitForSelector("#code");
  code.type("123456");
  await page.click("#next > div > button");
  await page.waitForNavigation({ idleTime: 1000 });

  //7번쨰 복구이메일
  /*
    input[name="recovery"], #recoveryEmailId
    다음 : #recoveryNext > div > button 
    건너뛰기 : #view_container > div > div > div.pwWryf.bxPAYd > div > div.zQJV3.F8PBrb > div > div > div:nth-child(2) > div > div > button
  */
  await page.waitForSelector("#recoveryEmailId");
  await page.click(
    "#view_container > div > div > div.pwWryf.bxPAYd > div > div.zQJV3.F8PBrb > div > div > div:nth-child(2) > div > div > button"
  );
  await page.waitForNavigation({ idleTime: 1000 });

  //8번째 계정 정보 검토
  // 다음 : #next > div > button
  await page.waitForSelector("#next");
  await page.click("#next > div > button");
  await page.waitForNavigation({ idleTime: 1000 });

  //9번쨰 개인정보보호 약관
  /*
    google 서비스 약관에 동의함 : #selectioni14
    개인정보수집 : #selectioni16
    계정 만들기 버튼 : #yDmH0d > c-wiz > div.aDGQwe.UMxd3c > div.eKnrVb > div > div.Z6Ep7d.UMxd3c > div > div.F9NWFb > div > div > button
  */
  await page.waitForSelector("#selectioni14");
  await page.click("#selectioni14");
  await page.click("#selectioni16");
  await page.click(
    "#yDmH0d > c-wiz > div.aDGQwe.UMxd3c > div.eKnrVb > div > div.Z6Ep7d.UMxd3c > div > div.F9NWFb > div > div > button"
  );
  await page.waitForNavigation({ idleTime: 1000 });

  //데이터베이스에 계정정보를 저장

  // await page.close();
  // await browser.close();
}

async function step01() {}

googleSign(usrInfo);
