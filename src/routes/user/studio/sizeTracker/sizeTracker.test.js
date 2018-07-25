import React from 'react';
import ReactDOM from 'react-dom';
import SizeTracker from './sizeTracker';
import {shallow, mount} from 'enzyme';
import puppeteer from 'puppeteer';


// shallow rendering
it('somke test without crashing', ()=>{
  shallow(<SizeTracker />);
})

// full dom rendering
it('full-rendering test without crashing', ()=>{
  const wrapper = mount(<SizeTracker />);
  expect(wrapper.find('.size-tracker-image')).toHaveLength(2);
  expect(wrapper.find('.size-tracker-up-arrow')).toHaveLength(2);
  expect(wrapper.find('.size-tracker-down-arrow')).toHaveLength(2);
})

it('render in headless browser', async () => {
  let browser = await puppeteer.launch();
  let page = await browser.newPage();

  await page.goto('http://localhost:3000/user/studio');
  await page.click('.top-size-tracker.size-tracker-up-arrow-wrapper', {clickCount: 5});
  expect(await page.$('.top-size-tracker-value')).toBe('05');
}, 4000);


describe('H1 Text', () => {
  test('h1 loads correctly', async (done) => {
	let browser = await puppeteer.launch();
	let page = await browser.newPage();

	await page.goto('http://localhost:3000/user/studio');

	browser.close();
  done();
  }, 16000);
});
