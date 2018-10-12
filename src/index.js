import $ from 'jquery';
import WebFont from 'webfontloader';


WebFont.load({
  google: {
    families: [ 'Ubuntu' ]
  }
});

let header = `Eric Posas`;
let title = `Front End Web Developer`;
let aboutme = `
  I'm Eric Posas, an inquisitive web developer who is always learning more about his craft. I'm constantly reading up about new trends in the development community and keeping my skills up to date and competitive. I have a background in 2D animation and game development, but later developed an interest in programming and finally found my career in web development. I dabble in other languages and platforms, but ultimately I've stuck with front-end dev. I love learning and I continually push my own limits as far as productivity and adopting the most efficient development methods available.
  <br><br>
  I'm currently a remote contract developer, looking for an agency to partner with long-term.
  <br>
`;
let companies = [
  'TM Advertising',
  'Dieste, Inc.',
  'DJNR Interactive',
  'Targetbase'
];
let titles = [
  'Flash Developer',
  'Digital Developer',
  'Contract',
  'Consultant'
];
let year = [
  `2013 - 2015`,
  `2015 - 2017`,
  `2017 - 2018`,
  `2017 - 2018`
];
let company_descriptions = [
  `Started here as a Flash developer, developing interactive animated banner ads for web and video units for large outdoor displays. Client work included Discover Network, American Airlines, and Statoil.`,
  `Created custom html5/javascript animations and web banner units for Sizmek and DoubleClick Media campaigns. Utilized Greensock Animation Platform and Adobe Animate CC (formerly Flash) for most of the work done while employed under Dieste. Clients included AT&T, Miller, and Cricket Wireless.`,
  `Worked with DJNR after going the freelancer route. Worked heavily with character animation within an html5 canvas setting. Complex animations were achieved with Adobe Animate CC, allowing for timeline animations and code to be mixed with standard javascript and DOM element overlays.`,
  `Worked with Targetbase as a consultant and helped guide them through one of their first few banner campaigns. I quickly produced all banners for them through the year and kept their production on schedule. Clients included pharma brands Anoro, Breo, and Trelegy.`
];
let tech = [
  'Adobe Animate CC',
  'Adobe Suite (Photoshop/Illustrator)',
  'Javascript / HTML / CSS',
  'ES6',
  'jQuery',
  'GSAP (Greensock Animation)',
  'Git',
  'Command Line Tools (Mac Terminal)'
];

$('head').append(`<link href="style.css" rel="stylesheet">`);
$('body').append(`
  <h1>${header}</h1>
  <h2>${title}</h2>
  <p>${aboutme}</p>
  <h2>Agency Experience</h2>
  ${add_companies()}
  <h2>Tech</h2>
  ${add_tech()}
  <br>
  <h2>Contact</h2>
  <h4>Phone: 469 618 5223</h4>
  <h4>Email: web_dev@tutanota.com</h4>
`);

function add_companies(){
  var _companies = ``;
  companies.forEach((item,i)=>{
    _companies += `
      <h3 class="company">${companies[i]}</h3>
      <h5 class="year">${titles[i]}, ${year[i]}</h5>
      <p class="company-description">
        ${company_descriptions[i]}
      </p>
    `;
  });
  return _companies;
}

function add_tech(){
  var _tech = ``;
  tech.forEach((item,i)=>{
    _tech += `
      <h4 class="tech">${tech[i]}</h4>
    `
  });
  return _tech;
}

