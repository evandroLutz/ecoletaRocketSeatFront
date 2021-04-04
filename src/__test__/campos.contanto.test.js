/* eslint-disable */
import { Builder, By } from 'selenium-webdriver';

describe('cadastro_ponto_coleta', () => {
  let driver;
  let vars;
  beforeEach(async function () {
    driver = await new Builder().forBrowser('chrome').build();
    vars = {};
  });
  afterEach(async function() {
    await driver.quit();
  });
  it('cadastro_ponto_coleta', async function() {
    await driver.get('http://localhost:3000/');
    await driver.manage().window().setRect(968, 1020);
    await driver
      .findElement(By.linkText('Cadastre um ponto de coleta'))
      .click();
    await driver.findElement(By.id('name')).click();
    await driver.findElement(By.id('name')).sendKeys('mercado rubem berta');
    await driver
      .findElement(By.id('email'))
      .sendKeys('mercadorubemberta@teste.com.br');
    await driver.findElement(By.id('whatsapp')).sendKeys('519999999999');
  });
});
