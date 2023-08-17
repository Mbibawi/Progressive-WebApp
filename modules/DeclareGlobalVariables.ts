//TYPES
type typeBtnLabel = {
    AR: string,
    FR: string,
    EN?: string
}
type typeButton = {
    btnID: string, //the id is used to exclude a button from being displayed in certain scenarios: like the Go Back button in some cases
    label: typeBtnLabel, //contains the text (in different languages) that is displayed in the html element created to show the button
    rootID?: string, //not used yet
    parentBtn?: Button, //a button that when clicked our button (which is its child) is displayed
    children?: Button[], //a list of child buttons that are displayed in the left side bar when the button is clicked
    inlineBtns?: Button[], //a list of button that are shown in the main area above the text (the buttons in the children[] list of buttons are shown in the left side-bar)
    prayers?: string[], //the sequence of prayers that will be dispolayed when the button is clicked. Each "prayer" is a string representing an id (the id corresponds to the title of one of tables in the Word document from which the text was extracted). A function loops the prayersArray (see below) and looks for an array of string[][] which 1st element is = to the "prayer". If it finds it, the text is retrieved and shown in html elements 
    prayersArray?: string[][] | string[][][], //an array that contains the array where the text of the button's prayers will be looked for when the button is clicked. It is an array of arrays. Each element is an array containing the text and is structred like ['prayer id', 'prayer text in a given language', 'prayer text in another language', etc.]
    titlesArray?:string[][], //an array that contains the prayers which id ends with 'Title'
    retrieved?:boolean, //not used any more but kept in case
    languages?: string[], //the list of languages in which the prayers that will be shown by the button are available (for example, the button showing the gospel will not have the coptic language in its languages[] because the text extracted from the ppt slides was only available in Arabic, French and English)
    onClick?: Function, //a function that is called when the html element created for the button is clicked
    afterShowPrayers?: Function, //a function that will be called after the prayers of the button are processed and appended as html children of containerDiv
    value?: string, //not used
    cssClass?: string, //the CSS class that will be added to the html element created to display the button
    showPrayers?: boolean; //Tells whether to show the button's prayers when it is clicked. We need it in some scenarios where the button.onClick() function calls showPrayers(), and we don't hence need showChildButtonsOrPrayers() to call it again
    pursue?:boolean //this is a boolean that will tell the showchildButtonsOrPrayers() whether to continue after calling the onClick() property of the button
};
//CONSTANTS
const calendarDay: number = 24 * 60 * 60 * 1000; //this is a day in milliseconds
const containerDiv: HTMLDivElement = document.getElementById('TargetDiv') as HTMLDivElement;
const leftSideBar: HTMLElement = document.getElementById('leftSideBar');
const rightSideBar: HTMLElement = document.getElementById('rightSideBar');
const contentDiv: HTMLElement = document.getElementById('content');
const sideBarBtn = document.getElementById('opensidebar') as HTMLButtonElement;
const toggleDevBtn = document.getElementById('toggleDev') as HTMLButtonElement;
const inlineBtnsDiv: HTMLElement = document.getElementById('inlineBtnsContainer');
const ResurrectionDates: string[] = ["2023-04-16", "2024-05-05", "2025-04-29", "2026-04-12", "2027-05-02", "2028-04-23", "2029-04-8", "2030-04-28"]; // these are  the dates of the Ressurection feast caclulated from the end of the Jewish Pessah Feast as got from Google

const btnClass = 'sideBarBtn';
const inlineBtnClass = 'inlineBtn';
const Readings = {
    BibleIntroFR: '',
    BibleIntroAR: 'قفوا بخوف أمام الله لنسمع الإنجيل المقدس، فصل من بشارة الإنجيل لمعلمنا مار ــــــــــ البشير، والتلميذ الطاهر، بركاته على جميعنا',
    GospelEndFR: '',
    GospelEndAR:'',
    GospelVespers: "RGIV", //Stands for Readings Gospel Incense Vespers
    GospelDawn: "RGID", //Stands for Redings Gospel Incense Dawn
    GospelMass: "RGM", //Readings Gospel Mass
    GospelNight:"RGN", //Stands for Readings Gospel Night
    Psalm: "Psalm",
    StPaul: "RSP", //Stands for Readings St Paul
    StPaulIntroFR: '',
    StPaulIntroAR: '',
    StPaulEndFR: '',
    StPaulEndAR:'نعمة الله الآب فلتكن مع جميعكم يا آبائي وإخوتي آمين',
    Katholikon: "RK", //Stands for Readings Katholikon
    KatholikonIntroFR:'',
    KatholikonIntroAR:'',
    KatholikonEndFR:'',
    KatholikonEndAR:'لا تحبو العالم ولا الأشياء التي في العالم لأن العالم يمضي وشهوته معه أما من يصنع مشيئة الله فيثبت إلى الأبد',
    Praxis: "RP", //Stands for Readings Praxis
    PraxisIntroFR:'',
    PraxisIntroAR:'الإبركسيس فصل من أعمال آبائنا الرسل الأطهار، الحوارين، المشمولين بنعمة الروح القدس، بركتهم المقدسة فلتكن معكم يا آبائي واخوتي آمين',
    PraxisEndFR:'',
    PraxisEndAR:'لم تزل كلمة الرب تنمو وتعتز وتكثر في هذا البيعة وكل بيعة يا آبائي وإخوتي آمين',
    Synaxarium: "RS", //Stands for Readings Synaxarium
    SynaxariumIntroFR:'',
    SynaxariumIntroAR:'',
    SynaxariumEndFR:'',
    SynaxariumEndAR: '',
    PropheciesDawn: "RPD", //Stands for Readings Prophecies Dawn 
};
const ReadingsArrays = {
    PraxisArray: [],
    KatholikonArray: [],
    StPaulArray: [],
    SynaxariumArray: [],
    GospelMassArray: [],
    GospelVespersArray: [],
    GospelDawnArray: [],
    GospelNightArray: [],
    PropheciesDawnArray: [],
};   
const Seasons = {
    StMaryFast: 'StMFast', //stands for Saint Mary Feast
    NativityFast: 'NF', //stands for Nativity Fast
    Nativity: 'Nat',
    GreatLent: 'GL', // Stand for Great Lent
    PentecostalDays: 'Pntl', //Stands for Pentecostal Days
    JonahFast: 'Jonah', //Stands for Jonah Feast
    ApostlesFast: 'Apost', //Stands for Apostles Feast
    Nayrouz: 'Nay', //Stands for Nayrouz
    CrossFeast: 'Cross', //Stands for Cross Feast
    Resurrection: 'Res', //Stands For Resurrection
    NoSeason: 'NoSpecificSeason',
};
const copticFeasts = {
    Nayrouz: '0101',
    StJohnBaptist: '0201',
    Cross: '1701',
    BeguiningNativityLent: '1603',
    NativityBaramoun: '2804',
    Nativity: '2904',
    Circumcision: '0605',
    BaptismBaramoun: '1005',
    Baptism: '1105',
    KanaGalil: '1305',
    EntryToTemple: '0806',
    EntryToEgypt: '2409',
    Annociation: '2907',
    Epiphany: '1312',
    StMaryFastVespers: '3010',
    StMaryFast: '0112',
    StMaryFeast: '1612',
    EndOfGreatLentFriday: Seasons.GreatLent + ' 49',
    LazarusSaturday: Seasons.GreatLent + '50',
    PalmSunday: Seasons.GreatLent + '8thSunday',
    Resurrection: Seasons.GreatLent + '56',
    Pentecoste: Seasons.Resurrection + '39',
    Ascension: Seasons.PentecostalDays + '7thSunday',
    Apostles: '0511',
};
const copticFasts = [
    Seasons.GreatLent,
    Seasons.NativityFast,
    Seasons.ApostlesFast,
    Seasons.StMaryFast,
    Seasons.JonahFast,
];
const allLanguages: string[] = ['AR', 'FR', 'COP', 'CA', 'EN'];
const userLanguages: string[] = ['AR', 'FR', 'COP'];  
const prayersLanguages: string[] = ['COP', 'FR', 'CA', 'AR'];
const readingsLanguages: string[] = ['AR', 'FR', 'EN'];

//VARS
let PrayersArray: string[][] | string[][][] = [];
let lastClickedButton: Button;
let copticDate: string, copticMonth: string, copticDay: string, copticReadingsDate: string, Season: string, weekDay: number;
var todayDate: Date;
let isFast: boolean;
let actors = ['Priest', 'Diacon', 'Assembly', 'Comment', 'CommentText'];
let showActors = new Map();
actors.map(actor => showActors.set(actor, true));
let lordFeasts = [
    copticFeasts.Nativity, copticFeasts.Baptism, Seasons.Resurrection, copticFeasts.Ascension, copticFeasts.Epiphany, copticFeasts.Circumcision, copticFeasts.EntryToEgypt, copticFeasts.EntryToTemple
]



