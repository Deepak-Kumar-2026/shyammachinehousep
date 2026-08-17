import { Product, Certificate, TargetCity, YouTubeVideo, BlogPost, CustomerReview } from '../types';
// const cncCoilWindingImg = '/images/1cnc_coil_winding_machine_1785992183980.jpg';

const cnc350mmImg = '/images/1cnc_350mm_winder_1786085787974.jpg';
const cncToroidalImg = '/images/3cnc_toroidal_winder_1786085804018.jpg';
const cncMultiSpindleImg = '/images/5cnc_multi_spindle_1786085817162.jpg';
const cncHeavyTransformerImg = '/images/2cnc_heavy_transformer_1786085830077.jpg';
const smhSolderingPotImg = '/images/4smh_soldering_pot.jpg';




const productImg1 = '/images/productsimg/1.webp';
const productImg2 = '/images/productsimg/2.webp';
const productImg3 = '/images/productsimg/3.webp';
const productImg4 = '/images/productsimg/4.webp';
const productImg5 = '/images/productsimg/5.webp';
const productImg6 = '/images/productsimg/6.webp';
const productImg7 = '/images/productsimg/7.webp';
const productImg8 = '/images/productsimg/8.webp';
const productImg9 = '/images/productsimg/9.webp';
const productImg10 = '/images/productsimg/10.webp';
const productImg11 = '/images/productsimg/11.webp';
const productImg12 = '/images/productsimg/12.webp';
const productImg13 = '/images/productsimg/13.webp';
// const productImg14 = '/images/productsimg/14.webp';
const productImg15 = '/images/productsimg/15.webp';
const productImg16 = '/images/productsimg/16.webp';
const productImg17 = '/images/productsimg/17.webp';
const productImg18 = '/images/productsimg/18.webp';
const productImg19 = '/images/productsimg/19.webp';
const productImg20 = '/images/productsimg/20.webp';


const productImg21 = '/images/productsimg/21.webp';
const productImg22 = '/images/productsimg/22.webp';
const productImg23 = '/images/productsimg/23.webp';
const productImg24 = '/images/productsimg/24.webp';
const productImg25 = '/images/productsimg/25.webp';
const productImg26 = '/images/productsimg/26.webp';
const productImg27 = '/images/productsimg/27.webp';
const productImg28 = '/images/productsimg/28.webp';
const productImg29 = '/images/productsimg/29.webp';
const productImg30 = '/images/productsimg/30.webp';
const productImg31 = '/images/productsimg/31.webp';
const productImg32 = '/images/productsimg/32.webp';
const productImg33 = '/images/productsimg/33.webp';
const productImg34 = '/images/productsimg/34.webp';
const productImg35 = '/images/productsimg/35.webp';
const productImg36 = '/images/productsimg/36.webp';
const productImg37 = '/images/productsimg/37.webp';

const productImg38 = '/images/productsimg/38.webp';
const productImg39 = '/images/productsimg/39.webp';
const productImg40 = '/images/productsimg/40.webp';
const productImg41 = '/images/productsimg/41.webp';
const productImg42 = '/images/productsimg/42.webp';
const productImg43 = '/images/productsimg/43.webp';
const productImg44 = '/images/productsimg/44.webp';
const productImg45 = '/images/productsimg/45.webp';
const productImg46 = '/images/productsimg/46.webp';
const productImg47 = '/images/productsimg/47.webp';
const productImg48 = '/images/productsimg/48.webp';
const productImg49 = '/images/productsimg/49.webp';
const productImg50 = '/images/productsimg/50.webp';
const productImg51 = '/images/productsimg/51.webp';









const smhLogoImg = '/images/smh_brand_logo_1785994135291.jpg';
const gstCertificateImg = '/images/gstcertificate.png';
const udyamCertificateImg = '/images/udyamCertificate.png';

const udyamCertificatePdf = '/certificates/udyam-certificate.pdf';

const gstCertificatePdf = '/certificates/gst-certificate.pdf';

export const COMPANY_INFO = {
  name: 'SHYAM MACHINE HOUSE',
  legalName: 'SHYAM MACHINE HOUSE',
  directorName: 'Yash Sharma',
  gstin: '07AFHFS7121Q1ZE',
  logoUrl: smhLogoImg,
  phone: '+91 98997 46674',
  whatsappNumber: '919899746674',
  formattedWhatsapp: '+91 98997 46674',
  email: 'Shyammachinetools@gmail.com',
  website: 'https://www.shyammachine.com/',
  youtubeChannelUrl: 'https://www.youtube.com/@shyammachinehouse5758',
  youtubeHandle: '@shyammachinehouse5758',
  instagramUrl: 'https://www.instagram.com/shyammachinehouse',
  instagramHandle: '@shyammachinehouse',
  establishedYear: '1998',
  tagline: 'Leading Indian Manufacturer & Exporter of Precision Industrial Workshop Machinery',
  address: {
    street: 'First Floor, 1/4717, Gali No 4 & 5 Balbir Nagar Extn',
    locality: 'Near Durga Puri Chowk, Shahdara',
    city: 'New Delhi',
    state: 'Delhi',
    pincode: '110032',
    country: 'India',
    formatted: 'First Floor, 1/4717, Gali No 4 & 5 Balbir Nagar Extn, Near Durga Puri Chowk, Shahdara, New Delhi - 110032, Delhi, India'
  },
  coordinates: {
    lat: 28.6725,
    lng: 77.2885
  },
  googleMapsEmbedUrl: 'https://maps.google.com/maps?q=Shyam%20Machine%20House%201/4717%20Balbir%20Nagar%20Extn%20Near%20Durga%20Puri%20Chowk%20Shahdara%20New%20Delhi%20110032&t=&z=15&ie=UTF8&iwloc=&output=embed',
  workingHours: 'Monday - Saturday: 09:30 AM - 07:00 PM (IST)',
  stats: [
    { label: 'Years of Excellence', value: '25+' },
    { label: 'Machines Delivered', value: '12,500+' },
    { label: 'Global Destinations', value: 'Cities in India' },
    { label: 'Customer Satisfaction', value: '99.4%' }
  ]
};


export const PRODUCTS: Product[] = [
  {
    id: '350mm-automatic-cnc-coil-winding-machine',
    name: '350 mm Automatic CNC Coil Winding Machine', //yes
    category: 'Coil Winding Machine',
    model: 'SMH-CNC-CW-350',
    tagline: '2-Axis High-Precision Automatic Transformer & Electrical Coil Winding Machine',
    description: '350 mm Automatic CNC Coil Winding Machine is designed for high-precision and fully automated winding of electrical and transformer coils with uniform tension and accurate layering. It is equipped with an advanced CNC control system that allows easy programming, real-time monitoring, and consistent production results. Built with a heavy-duty mild steel structure and premium mechanical components, this machine ensures smooth, vibration-free operation and long service life. Widely used in transformer manufacturing, motor winding, and electrical industries, it improves productivity, minimizes manual intervention, and delivers reliable and repeatable coil winding performance.',
    mainImage: cnc350mmImg,
    images: [
      cnc350mmImg,
      // cncMultiSpindleImg
    ],
    features: [
      'Advanced 2-Axis CNC motion control with high precision stepper/servo synchronization',
      'HMI Touch Screen Display with intuitive user programming interface',
      '50 Program Storage capacity for fast pattern recall and zero downtime',
      'Automatic wire layering and uniform tensioning control system',
      'Heavy-duty mild steel vibration-free rigid machine frame structure',
      'Emergency stop, wire breakage detector, and auto-stop coil counter'
    ],
    applications: [
      'Power & Distribution Transformer Coil Winding',
      'Electrical Motor & Stator Winding',
      'Solenoid Coils & Choke Inductor Manufacturing',
      'Industrial Electrical Bobbin & Relay Coil Assembly'
    ],
    specifications: [
      { parameter: 'Minimum Order Quantity', unit: 'Units', value: '1 Unit' },
      { parameter: 'Axis Control', unit: 'Axis', value: '2 Axis Synchronized CNC' },
      { parameter: 'Max Wire Diameter', unit: 'mm', value: '0.3 - 1.5 mm' },
      { parameter: 'Max Coil Outer Diameter (OD)', unit: 'mm', value: '350 mm' },
      { parameter: 'Machine Application', unit: 'Type', value: 'Transformer Coil & Electrical Winding' },
      { parameter: 'Program Storage Capacity', unit: 'Programs', value: '50 Memory Programs' },
      { parameter: 'Display Type', unit: 'Interface', value: 'HMI Touch Screen Display' },
      { parameter: 'Automation Grade', unit: 'Type', value: 'Automatic' }
    ],
    highlights: [
      { label: 'Control', value: '2-Axis CNC + HMI Touch' },
      { label: 'Max OD', value: '350 mm Coil Diameter' },
      { label: 'Memory', value: '50 Programs Saved' }
    ],
    inStock: true,
    isHotProduct: true,
    warranty: '1 Year Warranty + Lifetime Technical Support',
    catalogPdfName: 'SMH_CNC_Coil_Winding_Machine_350mm_Catalog.pdf'
  },

  

  {
  id: 'sleeve-cutting-machine-sm-sl100',
  name: 'Sleeve Cutting Machine',
  category: 'Sleeve Cutting Machine', //yes
  model: 'SM-SL100',
  tagline: 'High-Precision Sleeve Cutting Machine with Adjustable Cutting Length and Width',
  description: 'Sleeve Cutting Machine is designed for fast and precise cutting of sleeves with adjustable cutting length and width. It provides consistent cutting accuracy, reliable operation, and efficient performance for industrial sleeve processing applications.',
  mainImage: cncHeavyTransformerImg,
  images: [
    cncHeavyTransformerImg
  ],
  features: [
    'Adjustable cutting width from 1 to 100 mm',
    'Adjustable cutting length from 0.1 to 999.99 mm',
    'Adjustable cutting speed for flexible production',
    'Precision cutting with 0.1 mm tolerance'
  ],
  applications: [
    'Electrical insulation sleeve cutting',
    'Transformer and coil manufacturing',
    'Industrial sleeve and tubing processing'
  ],
  specifications: [
    { parameter: 'Cutting Width', unit: 'mm', value: '1 - 100 mm' },
    { parameter: 'Cutting Length', unit: 'mm', value: '0.1 - 999.99 mm' },
    { parameter: 'Speed', unit: 'Type', value: 'Adjustable' },
    { parameter: 'Power Supply', unit: 'Voltage', value: 'AC220V 50Hz / AC110V 60Hz' },
    { parameter: 'Tolerance', unit: 'mm', value: '0.1 mm' },
    { parameter: 'Machine Weight', unit: 'kg', value: '23 kg' }
  ],
  highlights: [
    { label: 'Width', value: '1 - 100 mm' },
    { label: 'Length', value: '0.1 - 999.99 mm' },
    { label: 'Tolerance', value: '0.1 mm Precision' }
  ],
  inStock: true,
  isHotProduct: true,
  warranty: '1 Year Warranty + Technical Support',
  catalogPdfName: 'SMH_Sleeve_Cutting_Machine_SM-SL100.pdf'
},
  


 
  

  {
  id: 'automatic-angular-soldering-machine-sm-02aas',
  name: 'Soldering Machine',
  category: 'Soldering Machine', //yes
  model: 'SM-02AAS',
  tagline: 'Automatic Angular Soldering Machine for Precise Electrical Component Soldering',
  description: 'Automatic Angular Soldering Machine is designed for efficient loading, rosin application, soldering, cooling, and unloading operations. It provides consistent soldering performance with controlled feeding, temperature, and soldering processes for electrical and transformer component manufacturing.',
  mainImage: cncToroidalImg,
  images: [
    cncToroidalImg
  ],
  features: [
    'Automatic loading, soldering, cooling, and unloading',
    '360-degree adjustable soldering angle',
    'Conveyor belt feeding system',
    'Automatic flux circulation with storage tank and pump',
    'Thermostat and solid-state relay temperature control'
  ],
  applications: [
    'Transformer Component Soldering',
    'Electrical Component Manufacturing',
    'Coil and Winding Component Production'
  ],
  specifications: [
    { parameter: 'Equipment Size', unit: 'mm', value: 'L 900 × W 1600 × H 1700 mm' },
    { parameter: 'Motor Quantity', unit: 'Motors', value: '3 Sets / 2 Servo Motors + 1 Stepper Motor' },
    { parameter: 'Solder Angle', unit: 'Degrees', value: '360°' },
    { parameter: 'Feeding Method', unit: 'Type', value: 'Conveyor Belt / Hand-Held Swing / Optional' },
    { parameter: 'Blanking Method', unit: 'Type', value: 'Conveyor Belt' },
    { parameter: 'Flux Addition Method', unit: 'Type', value: 'Storage Tank + Pump + Automatic Circulation' },
    { parameter: 'Temperature Control Method', unit: 'Type', value: 'Thermostat + Solid State Relay' },
    { parameter: 'Tin Furnace Dimensions', unit: 'mm', value: 'L350 × W100 × H50 mm' },
    { parameter: 'Power Supply', unit: 'Voltage', value: '220V / 50Hz' },
    { parameter: 'Air Pressure', unit: 'MPa', value: '0.5 - 0.6 MPa' },
    { parameter: 'Total Power', unit: 'kW', value: '2.3 kW' },
    { parameter: 'Equipment Weight', unit: 'kg', value: '200 kg' }
  ],
  highlights: [
    { label: 'Solder Angle', value: '360° Adjustable' },
    { label: 'Power', value: '2.3 kW' },
    { label: 'Control', value: 'Thermostat + Solid State Relay' }
  ],
  inStock: true,
  isHotProduct: true,
  warranty: '1 Year Warranty + Technical Support',
  catalogPdfName: 'SMH_Automatic_Angular_Soldering_Machine_SM-02AAS.pdf'
},

  
 

{
  id: 'coil-and-core-tapping-machine-sm-6tm',
  name: 'Coil and Core Tapping Machine',
  category: 'Coil & Core Tapping Machine',//yes4
  model: 'SM-6TM',
  tagline: 'Automatic Coil and Core Tapping Machine for Fast and Precise Tapping Operations',
  description: 'Coil and Core Tapping Machine is designed for efficient and consistent tapping operations with manual loading, automatic tapping, and automatic unloading. It provides adjustable tapping parameters and reliable performance for transformer and electrical component manufacturing.',
  mainImage: smhSolderingPotImg,
  images: [
    smhSolderingPotImg
  ],
  features: [
    'Manual loading system',
    'Automatic tapping operation',
    'Automatic unloading system',
    'Adjustable number of turns from 1 to 9 turns',
    'Adjustable diaphragm axis distance from 25 mm to 85 mm'
  ],
  applications: [
    'Transformer Coil Tapping',
    'Transformer Core Tapping',
    'Electrical Component Manufacturing'
  ],
  specifications: [
    { parameter: 'Power Source', unit: 'Voltage', value: 'AC 220V 50Hz' },
    { parameter: 'Machine Weight', unit: 'kg', value: '45 kg' },
    { parameter: 'Working Speed', unit: 'Time', value: '1.2 sec/pc' },
    { parameter: 'Suitable Products', unit: 'Series', value: 'EEP-8 Series' },
    { parameter: 'Option', unit: 'Motor', value: 'AC Motor' },
    { parameter: 'Membrane Range', unit: 'mm', value: '34 mm - 77 mm Applicable' },
    { parameter: 'Number of Turns', unit: 'Turns', value: '1 - 9 Turns, Arbitrarily Set' },
    { parameter: 'Two-Axis Wheel Base', unit: 'mm', value: 'Diaphragm Axis Distance 25 - 85 mm Adjustable' }
  ],
  highlights: [
    { label: 'Operation', value: 'Auto Tapping & Unloading' },
    { label: 'Speed', value: '1.2 sec/pc' },
    { label: 'Turns', value: '1 - 9 Adjustable Turns' }
  ],
  inStock: true,
  isHotProduct: true,
  warranty: '1 Year Warranty',
  catalogPdfName: 'SMH_Coil_Core_Tapping_Machine_SM-6TM.pdf'
},
  
  {
  id: 'transformer-coil-winding-machine-with-tail-stock', //1
  name: 'Transformer Coil Winding Machine',
  category: 'Transformer Coil Winding Machine',
  model: 'Winding Machine with Tail Stock',
  tagline: 'Precision Servo Winding Machine with Tail Stock for Transformer and Electrical Coils',

  description: 'Transformer Coil Winding Machine with Tail Stock is designed for precise and efficient winding of transformer and electrical coils. It features servo motor driven winding, adjustable winding width, high-speed operation, and memory storage for consistent and repeatable coil production.',

  mainImage: cncMultiSpindleImg,

  images: [
    cncMultiSpindleImg
  ],

  features: [
    'Single-axis winding spindle for precise coil winding',
    'Servo motor driven spindle and wiring system',
    'Adjustable winding width up to 300 mm',
    'Maximum winding diameter up to 260 mm',
    '1000 memory groups for storing winding programs',
    'Tail stock support for stable and accurate winding'
  ],

  applications: [
    'Transformer Coil Winding',
    'Electrical Coil Manufacturing',
    'Motor and Inductor Coil Winding',
    'Industrial Wire and Bobbin Winding'
  ],

  specifications: [
    { parameter: 'Wire Size', unit: 'mm', value: '0.03 - 1.5 mm' },
    { parameter: 'Winding Width', unit: 'mm', value: '0 - 300 mm' },
    { parameter: 'Maximum Winding Diameter', unit: 'mm', value: '260 mm' },
    { parameter: 'Winding Spindle', unit: 'Type', value: 'Single Axis' },
    { parameter: 'Spindle Motor', unit: 'Type', value: 'Servo Motor' },
    { parameter: 'Wiring Motor', unit: 'Type', value: 'Servo Motor' },
    { parameter: 'Machine Speed', unit: 'RPM', value: '0 - 2000 RPM' },
    { parameter: 'Memory Groups', unit: 'Programs', value: '1000' },
    { parameter: 'Power Supply', unit: 'Voltage', value: 'AC220V / 50Hz' },
    { parameter: 'Machine Weight', unit: 'kg', value: '50 kg' }
  ],

  highlights: [
    { label: 'Winding Width', value: '0 - 300 mm' },
    { label: 'Max Diameter', value: '260 mm' },
    { label: 'Speed', value: '0 - 2000 RPM' }
  ],

  inStock: true,
  isHotProduct: true,
  warranty: '1 Year Warranty',
  catalogPdfName: 'SMH_Transformer_Coil_Winding_Machine_Catalog.pdf'
},

 






//ProductImage25....................................................................................................................................................


{
  id: 'angular-soldering-machine-sm-02as',
  name: 'Angular Soldering Machine',
  category: 'Soldering Machine',
  model: 'SM-02AS',
  tagline: 'Precision Angular Soldering Machine for Inverter & Choke Applications',
  description: 'Angular Soldering Machine is designed for efficient and precise soldering operations with manual loading, component turning, preheating, manual unloading, and automatic soldering. It features CNC traverse control, adjustable temperature up to 600°C, and stepper motor operation for reliable soldering performance.',

  mainImage: productImg1,

  images: [
    productImg1
    
  ],

  features: [
    'Manual loading system',
    'Turning to the other side',
    'Turning to the required angle',
    'Soldering operation',
    'Preheat function',
    'Manual unloading system',
    'Auto soldering operation',
    'CNC traverse control with stepping motor',
    'Adjustable temperature range from 0°C to 600°C'
  ],

  applications: [
    'Inverter Transformer Soldering',
    'Choke Component Soldering',
    'Transformer Manufacturing',
    'Electrical Component Manufacturing'
  ],

  specifications: [
    { parameter: 'Power Source', unit: 'Power', value: 'AC 220V / 2000W' },
    { parameter: 'Machine Dimension', unit: 'mm', value: '500(L) × 850(W) × 660(H) mm' },
    { parameter: 'Machine Weight', unit: 'kg', value: '60 kg' },
    { parameter: 'DIP Pot Dimension', unit: 'mm', value: '295(L) × 105(W) × 65(H) mm' },
    { parameter: 'Working Speed', unit: 'Time', value: '10-20 pcs / 12 sec' },
    { parameter: 'Pot Material', unit: 'Material', value: 'Titanium' },
    { parameter: 'Temperature', unit: '°C', value: '0-600°C' },
    { parameter: 'Suitable Products', unit: 'Products', value: 'Inverter, Choke' },
    { parameter: 'Traverse', unit: 'mm', value: 'Max 76 mm (Stepping Motor)' },
    { parameter: 'Controller', unit: 'Control', value: 'CNC' },
    { parameter: 'Motor', unit: 'Type', value: 'Stepper Motor' }
  ],

  highlights: [
    { label: 'Working Speed', value: '10-20 pcs / 12 sec' },
    { label: 'Temperature', value: '0-600°C' },
    { label: 'Control', value: 'CNC Traverse Control' }
  ],

  inStock: true,
  isHotProduct: true,
  warranty: '1 Year Warranty',
  catalogPdfName: 'SMH_Angular_Soldering_Machine_SM-02AS.pdf'
},

//2

{
  id: 'auto-rotate-hook-winding-machine-sm-01ar',
  name: 'Auto Rotate Hook Winding Machine',
  category: 'Auto Rotate Hook Winding Machine',
  model: 'SM-01AR',
  tagline: 'Automatic Hook Winding Machine for Fast and Precise Coil Winding Operations',
  description: 'Auto Rotate Hook Winding Machine is designed for efficient and precise hook winding operations. It provides adjustable winding speed, wire size, minimum inner diameter, hook size, and number of turns for reliable coil winding applications.',

  mainImage: productImg2,

  images: [
    productImg2
  ],

  features: [
    'Automatic rotate hook winding operation',
    'Adjustable winding speed',
    'Supports wire sizes from 0.5 to 2 mm',
    'Minimum inner diameter of 8 mm',
    'Single spindle winding system',
    'Adjustable hook size from 3 mm to 10 mm',
    'Adjustable number of turns from 15 to 70 turns'
  ],

  applications: [
    'Hook Coil Winding',
    'Electrical Coil Manufacturing',
    'Transformer & Inductor Coil Winding'
  ],

  specifications: [
    { parameter: 'Source Power', unit: 'Voltage', value: 'AC 220V / 50Hz' },
    { parameter: 'Winding Speed', unit: 'RPM', value: '700 / 1000 / 1200 RPM' },
    { parameter: 'Wire Size', unit: 'mm', value: '0.5-2 mm' },
    { parameter: 'Minimum ID', unit: 'mm', value: '8 mm' },
    { parameter: 'Spindles', unit: 'Spindle', value: '1' },
    { parameter: 'Hook Size', unit: 'mm', value: '3-10 mm' },
    { parameter: 'List of Turns', unit: 'Turns', value: '15-70 Turns' }
  ],

  highlights: [
    { label: 'Winding Speed', value: '700 / 1000 / 1200 RPM' },
    { label: 'Wire Size', value: '0.5-2 mm' },
    { label: 'Hook Size', value: '3-10 mm' }
  ],

  inStock: true,
  isHotProduct: true,
  warranty: '1 Year Warranty',
  catalogPdfName: 'SMH_Auto_Rotate_Hook_Winding_Machine_SM-01AR.pdf'
},

//3


{
  id: 'crimping-machine-sm-09cm',
  name: 'Crimping Machine',
  category: 'Crimping Machine',
  model: 'SM-09CM',
  tagline: 'Pneumatic Crimping Machine for Fast and Reliable Terminal Crimping',
  description: 'Crimping Machine designed for efficient terminal crimping operations with pneumatic air pressure. It provides reliable crimping performance for insulated terminals with compact dimensions and lightweight construction.',

  mainImage: productImg3,

  images: [
    productImg3
  ],

  features: [
    'Pneumatic operating system',
    'Output force of 1.3T air pressure',
    'Applicable air pressure range of 0.5-0.7 MPa',
    'Maximum operating pressure of 1.0 MPa',
    'Suitable for insulated terminals up to 16 mm²',
    'Compact and lightweight machine design'
  ],

  applications: [
    'Insulated Terminal Crimping',
    'Electrical Wire Terminal Crimping',
    'Electrical Component Assembly'
  ],

  specifications: [
    { parameter: 'Output Force', unit: 'T Air Pressure', value: '1.3T Air Pressure 0.5MPa' },
    { parameter: 'Applicable Air Pressure', unit: 'MPa', value: '0.5-0.7 MPa' },
    { parameter: 'Max. Operating Pressure', unit: 'MPa', value: '1.0 MPa' },
    { parameter: 'Max. Crimping Capacity', unit: 'mm²', value: 'Insulated Terminal 16mm²' },
    { parameter: 'External Dimension', unit: 'mm', value: '296mm × 142mm × 117mm' },
    { parameter: 'Weight', unit: 'kg', value: '2.5 kg' }
  ],

  highlights: [
    { label: 'Output Force', value: '1.3T Air Pressure' },
    { label: 'Crimping Capacity', value: 'Insulated Terminal 16mm²' },
    { label: 'Weight', value: '2.5 kg' }
  ],

  inStock: true,
  isHotProduct: true,
  warranty: '1 Year Warranty',
  catalogPdfName: 'SMH_Crimping_Machine_SM-09CM.pdf'
},


//4


{
  id: 'digital-lcr-meter-sm-2344',
  name: 'Digital LCR Meter',
  category: 'Digital LCR Meter',
  model: 'SM-2344',
  tagline: 'High-Precision Digital LCR Meter for Accurate Component Testing and Measurement',
  description: 'Digital LCR Meter is a general-purpose LCR digital bridge designed for accurate measurement of inductance, capacitance, resistance, impedance, dissipation factor and quality factor. It features multiple test frequencies, automatic and manual test ranges, series and parallel measurement modes, comparator sorting, and an easy-to-use digital display.',

  mainImage: productImg4,

  images: [
    productImg4
  ],

  features: [
    'Measures L, C, R, |Z|, D and Q parameters',
    'Four selectable test frequencies: 100Hz, 120Hz, 1kHz and 10kHz',
    'Accuracy of 0.25%',
    'Automatic and manual test range selection',
    'Series and parallel equivalent measurement modes',
    'Open/short calibration and sweep frequency calibration',
    '5-bin comparator sorting function',
    'Adjustable beep settings including P1, P2, P3, AUX, NG and OFF',
    'Automatic LCR parameter selection',
    '0.8-inch highlighted LED display'
  ],

  applications: [
    'Electronic Component Testing',
    'Inductor and Transformer Testing',
    'Capacitor Testing',
    'Resistor Testing',
    'Research and Development Laboratories',
    'Quality Inspection and Production Testing'
  ],

  specifications: [
    { parameter: 'Power Supply', unit: 'Voltage / Frequency', value: '198-252VAC / 48.5-52.5Hz' },
    { parameter: 'Maximum Power', unit: 'VA', value: '10VA' },
    { parameter: 'Parameters', unit: 'Measurement', value: 'L, C, R, |Z|, D, Q' },
    { parameter: 'Accuracy', unit: '%', value: '0.25%' },
    { parameter: 'Test Frequency', unit: 'Hz', value: '100Hz, 120Hz, 1kHz, 10kHz' },
    { parameter: 'Source Resistance', unit: 'Ω', value: '30Ω, 100Ω' },
    { parameter: 'Test Range', unit: 'Mode', value: 'Auto and Manual, 6 Range' },
    { parameter: 'Signal Level', unit: 'Vrms', value: '0.1Vrms, 0.3Vrms & 1Vrms' },
    { parameter: 'Test Speed', unit: 'Tests/sec', value: 'Slow: 3/s, Fast: 10/s' },
    { parameter: 'Equivalent Method', unit: 'Connection', value: 'Series and Parallel Connection' },
    { parameter: 'Calibration', unit: 'Mode', value: 'Open/Short Sweep Frequency' },
    { parameter: 'Comparator', unit: 'Sorting', value: '5-bin Sorting' },
    { parameter: 'Display', unit: 'Type', value: '0.8-inch Highlighted LED Display' },
    { parameter: 'Accessories', unit: 'Accessory', value: 'ATL501 Test Cable' }
  ],

  highlights: [
    { label: 'Accuracy', value: '0.25%' },
    { label: 'Test Frequency', value: '100Hz, 120Hz, 1kHz, 10kHz' },
    { label: 'Test Speed', value: 'Up to 10 Tests/sec' }
  ],

  inStock: true,
  isHotProduct: true,
  warranty: '1 Year Warranty',
  catalogPdfName: 'SMH_Digital_LCR_Meter_SM-2344.pdf'
},


//5


{
  id: 'dip-pot-lead-free-sm-101a',
  name: 'DIP POT (LEAD FREE)',
  category: 'DIP POT (LEAD FREE)',
  model: 'SM-101A',
  tagline: 'Lead-Free DIP Pot with Precision Temperature Control for Efficient Soldering',
  description: 'DIP POT (LEAD FREE) is designed for controlled dipping and soldering operations with a titanium inner bath, side-inserted heaters for easy maintenance, and a precision temperature controller. The machine is suitable for lead-free soldering applications requiring stable and high-temperature operation.',

  mainImage: productImg5,

  images: [
    productImg5
  ],

  features: [
    'Titanium inner bath with stand high temperature',
    'Side-inserted heaters for easy maintenance',
    'Precision temperature controller',
    'Lead-free soldering operation'
  ],

  applications: [
    'Lead-Free Soldering',
    'PCB Soldering',
    'Transformer Component Soldering',
    'Electrical Component Manufacturing'
  ],

  specifications: [
    { parameter: 'Power Source', unit: 'Power', value: 'AC 220V 1 Phase' },
    { parameter: 'Machine Weight', unit: 'kg', value: '6 kg' },
    { parameter: 'Pot Material', unit: 'Material', value: 'Titanium' },
    { parameter: 'Temperature', unit: '°C', value: 'Up to 600°C' },
    { parameter: 'Model Dimension', unit: 'mm', value: '155(L) × 95(W) × 20(H) mm' }
  ],

  highlights: [
    { label: 'Temperature', value: 'Up to 600°C' },
    { label: 'Pot Material', value: 'Titanium' },
    { label: 'Weight', value: '6 kg' }
  ],

  inStock: true,
  isHotProduct: true,
  warranty: '1 Year Warranty',
  catalogPdfName: 'SMH_DIP_Pot_Lead_Free_SM-101A.pdf'
},


//6

{
  id: 'dip-pot-lead-free-sm-101b',
  name: 'DIP POT (LEAD FREE)',
  category: 'DIP POT (LEAD FREE)',
  model: 'SM-101B',
  tagline: 'Lead-Free DIP Pot with Precision Temperature Control for Efficient Soldering',
  description: 'DIP POT (LEAD FREE) is designed for controlled dipping and soldering operations with a titanium inner bath, side-inserted heaters for easy maintenance, and precision temperature control. It is suitable for lead-free soldering applications requiring stable high-temperature operation.',

  mainImage: productImg6,

  images: [
    productImg6
  ],

  features: [
    'Titanium inner bath with stand high temperature',
    'Side-inserted heaters for easy maintenance',
    'Precision temperature controller',
    'Lead-free soldering operation'
  ],

  applications: [
    'Lead-Free Soldering',
    'PCB Soldering',
    'Transformer Component Soldering',
    'Electrical Component Manufacturing'
  ],

  specifications: [
    { parameter: 'Power Source', unit: 'Power', value: 'AC 220V 1 Phase' },
    { parameter: 'Machine Weight', unit: 'kg', value: '6 kg' },
    { parameter: 'Pot Material', unit: 'Material', value: 'Titanium' },
    { parameter: 'Temperature', unit: '°C', value: 'Up to 600°C' },
    { parameter: 'Model Dimension', unit: 'mm', value: '155(L) × 55(W) × 40(H) mm' }
  ],

  highlights: [
    { label: 'Temperature', value: 'Up to 600°C' },
    { label: 'Pot Material', value: 'Titanium' },
    { label: 'Dimension', value: '155 × 55 × 40 mm' }
  ],

  inStock: true,
  isHotProduct: true,
  warranty: '1 Year Warranty',
  catalogPdfName: 'SMH_DIP_Pot_Lead_Free_SM-101B.pdf'
},
 

//7

{
  id: 'dip-pot-lead-free-sm-101c',
  name: 'DIP POT (LEAD FREE)',
  category: 'DIP POT (LEAD FREE)',
  model: 'SM-101C',
  tagline: 'Compact Lead-Free DIP Pot with Precision Temperature Control',
  description: 'DIP POT (LEAD FREE) is designed for controlled dipping and soldering operations. It features a titanium pot material, high-temperature capability, side-inserted heaters for easy maintenance, and precision temperature control for reliable lead-free soldering applications.',

  mainImage: productImg7,

  images: [
    productImg7
  ],

  features: [
    'Titanium inner bath with stand high temperature',
    'Side-inserted heaters for easy maintenance',
    'Precision temperature controller',
    'Lead-free soldering operation'
  ],

  applications: [
    'Lead-Free Soldering',
    'PCB Soldering',
    'Transformer Component Soldering',
    'Electrical Component Manufacturing'
  ],

  specifications: [
    { parameter: 'Power Source', unit: 'Power', value: 'AC 220V 1 Phase' },
    { parameter: 'Machine Weight', unit: 'kg', value: '6 kg' },
    { parameter: 'Pot Material', unit: 'Material', value: 'Titanium' },
    { parameter: 'Temperature', unit: '°C', value: 'Up to 600°C' },
    { parameter: 'Model Dimension', unit: 'mm', value: '135(L) × 40(W) × 12(H) mm' }
  ],

  highlights: [
    { label: 'Temperature', value: 'Up to 600°C' },
    { label: 'Pot Material', value: 'Titanium' },
    { label: 'Dimension', value: '135 × 40 × 12 mm' }
  ],

  inStock: true,
  isHotProduct: true,
  warranty: '1 Year Warranty',
  catalogPdfName: 'SMH_DIP_Pot_Lead_Free_SM-101C.pdf'
},

//8

{
  id: 'dip-pot-lead-free-sm-101e',
  name: 'DIP POT (LEAD FREE)',
  category: 'DIP POT (LEAD FREE)',
  model: 'SM-101E',
  tagline: 'Lead-Free DIP Pot with Precision Temperature Control for Efficient Soldering',
  description: 'DIP POT (LEAD FREE) is designed for controlled dipping and soldering operations with a titanium inner bath, side-inserted heaters for easy maintenance, and precision temperature control for reliable lead-free soldering applications.',

  mainImage: productImg8,

  images: [
    productImg8
  ],

  features: [
    'Titanium inner bath with stand high temperature',
    'Side-inserted heaters for easy maintenance',
    'Precision temperature controller',
    'Lead-free soldering operation'
  ],

  applications: [
    'Lead-Free Soldering',
    'PCB Soldering',
    'Transformer Component Soldering',
    'Electrical Component Manufacturing'
  ],

  specifications: [
    { parameter: 'Power Source', unit: 'Power', value: 'AC 220V 1 Phase' },
    { parameter: 'Machine Weight', unit: 'kg', value: '6 kg' },
    { parameter: 'Pot Material', unit: 'Material', value: 'Titanium' },
    { parameter: 'Temperature', unit: '°C', value: 'Up to 600°C' },
    { parameter: 'Model Dimension', unit: 'mm', value: '155(L) × 110(W) × 35(H) mm' }
  ],

  highlights: [
    { label: 'Temperature', value: 'Up to 600°C' },
    { label: 'Pot Material', value: 'Titanium' },
    { label: 'Dimension', value: '155 × 110 × 35 mm' }
  ],

  inStock: true,
  isHotProduct: true,
  warranty: '1 Year Warranty',
  catalogPdfName: 'SMH_DIP_Pot_Lead_Free_SM-101E.pdf'
},

//9


{
  id: 'dip-pot-lead-free-sm-101h',
  name: 'DIP POT (LEAD FREE)',
  category: 'DIP POT (LEAD FREE)',
  model: 'SM-101H',
  tagline: 'Compact Lead-Free DIP Pot with Precision Temperature Control',
  description: 'DIP POT (LEAD FREE) is designed for controlled dipping and soldering operations with a titanium inner bath, side-inserted heaters for easy maintenance, and precision temperature control for reliable lead-free soldering applications.',

  mainImage: productImg9,

  images: [
    productImg9
  ],

  features: [
    'Titanium inner bath with stand high temperature',
    'Side-inserted heaters for easy maintenance',
    'Precision temperature controller',
    'Lead-free soldering operation'
  ],

  applications: [
    'Lead-Free Soldering',
    'PCB Soldering',
    'Transformer Component Soldering',
    'Electrical Component Manufacturing'
  ],

  specifications: [
    { parameter: 'Power Source', unit: 'Power', value: 'AC 220V 1 Phase' },
    { parameter: 'Machine Weight', unit: 'kg', value: '6 kg' },
    { parameter: 'Pot Material', unit: 'Material', value: 'Titanium' },
    { parameter: 'Temperature', unit: '°C', value: 'Up to 600°C' },
    { parameter: 'Model Dimension', unit: 'mm', value: '60(L) × 60(W) × 30(H) mm' }
  ],

  highlights: [
    { label: 'Temperature', value: 'Up to 600°C' },
    { label: 'Pot Material', value: 'Titanium' },
    { label: 'Dimension', value: '60 × 60 × 30 mm' }
  ],

  inStock: true,
  isHotProduct: true,
  warranty: '1 Year Warranty',
  catalogPdfName: 'SMH_DIP_Pot_Lead_Free_SM-101H.pdf'
},

//10

{
  id: 'double-spindle-winding-machine-sm-01ds',
  name: 'Double Spindle Winding Machine',
  category: 'Double Spindle Winding Machine',
  model: 'SM-01DS',
  tagline: 'High-Speed Double Spindle Winding Machine for Efficient Coil Production',
  description: 'Double Spindle Winding Machine is designed for efficient coil winding with dual spindle operation, programmable winding parameters, production counting, adjustable winding speed, and programmable acceleration and deceleration. It is suitable for continuous and precise electrical coil winding applications.',

  mainImage: productImg10,

  images: [
    productImg10
  ],

  features: [
    'Double spindle winding operation',
    '1000 program memory storage',
    'Turn set for each program up to 999 turns',
    'Production counting function',
    'Power-fail counting protection',
    'Automatic wire break detection',
    'Programmable acceleration and deceleration',
    'Programmable winding speed',
    'Programmable on-time and off-time',
    'Password protection for controller settings'
  ],

  applications: [
    'Electrical Coil Winding',
    'Transformer Coil Winding',
    'Inductor Coil Winding',
    'Electrical Component Manufacturing'
  ],

  specifications: [
    { parameter: 'Production Count', unit: 'Function', value: 'Provided' },
    { parameter: 'Power Fail Save', unit: 'Counter', value: 'Provided' },
    { parameter: 'Traverse Moving', unit: 'Control', value: 'Programmable' },
    { parameter: 'Spindle Motor', unit: 'Motor', value: '2 HP DC Motor' },
    { parameter: 'Winding Speed', unit: 'RPM', value: '180-1500 RPM' },
    { parameter: 'Voltage', unit: 'Power', value: '220V AC 50Hz' },
    { parameter: 'Wire Size', unit: 'SWG', value: '22 to 48 SWG' },
    { parameter: 'Memory', unit: 'Programs', value: '1000 Program Storage' },
    { parameter: 'Turn Set Each Program', unit: 'Turns', value: '999 Turns' },
    { parameter: 'Controller Security', unit: 'Protection', value: 'Password Option' },
    { parameter: 'Warranty', unit: 'Warranty', value: '1 Year From Date Of Invoice' }
  ],

  highlights: [
    { label: 'Spindle', value: 'Double Spindle' },
    { label: 'Memory', value: '1000 Programs' },
    { label: 'Wire Size', value: '22 to 48 SWG' }
  ],

  inStock: true,
  isHotProduct: true,
  warranty: '1 Year From Date Of Invoice',
  catalogPdfName: 'SMH_Double_Spindle_Winding_Machine_SM-01DS.pdf'
},


//11

{
  id: 'dip-pot-lead-free-sm-101k',
  name: 'DIP POT (LEAD FREE)',
  category: 'DIP POT (LEAD FREE)',
  model: 'SM-101K',
  tagline: 'Large-Size Lead-Free DIP Pot with Precision Temperature Control',
  description: 'DIP POT (LEAD FREE) is designed for controlled dipping and soldering operations with a titanium inner bath, side-inserted heaters for easy maintenance, and precision temperature control for reliable lead-free soldering applications.',

  mainImage: productImg11,

  images: [
    productImg11
  ],

  features: [
    'Titanium inner bath with stand high temperature',
    'Side-inserted heaters for easy maintenance',
    'Precision temperature controller',
    'Lead-free soldering operation'
  ],

  applications: [
    'Lead-Free Soldering',
    'PCB Soldering',
    'Transformer Component Soldering',
    'Electrical Component Manufacturing'
  ],

  specifications: [
    { parameter: 'Power Source', unit: 'Power', value: 'AC 220V 1 Phase' },
    { parameter: 'Machine Weight', unit: 'kg', value: '6 kg' },
    { parameter: 'Pot Material', unit: 'Material', value: 'Titanium' },
    { parameter: 'Temperature', unit: '°C', value: 'Up to 600°C' },
    { parameter: 'Model Dimension', unit: 'mm', value: '295(L) × 1000(W) × 35(H) mm' }
  ],

  highlights: [
    { label: 'Temperature', value: 'Up to 600°C' },
    { label: 'Pot Material', value: 'Titanium' },
    { label: 'Dimension', value: '295 × 1000 × 35 mm' }
  ],

  inStock: true,
  isHotProduct: true,
  warranty: '1 Year Warranty',
  catalogPdfName: 'SMH_DIP_Pot_Lead_Free_SM-101K.pdf'
},




//12

{
  id: 'double-spindle-winding-machine-sm-02d',
  name: 'Double Spindle Winding Machine',
  category: 'Double Spindle Winding Machine',
  model: 'SM-02D',
  tagline: 'High-Speed Double Spindle Winding Machine for Precise Electrical Coil Winding',
  description: 'Double Spindle Winding Machine is designed for efficient and precise winding operations with dual spindle operation. It provides programmable winding control, high-speed operation, and reliable performance for electrical coil and transformer winding applications.',

  mainImage: productImg12,

  images: [
    productImg12
  ],

  features: [
    'Double spindle winding operation',
    'Brushless DC spindle motor',
    'Stepper motor traverse system',
    '600W plus drive winding motor',
    'Machine speed up to 8000 RPM',
    '1000 memory groups for winding programs',
    'AC 220V / 50Hz power supply'
  ],

  applications: [
    'Transformer Coil Winding',
    'Electrical Coil Winding',
    'Inductor Coil Winding',
    'Electrical Component Manufacturing'
  ],

  specifications: [
    { parameter: 'Wire', unit: 'mm', value: '0.03-1.0 mm' },
    { parameter: 'Winding Width', unit: 'mm', value: '0-110 mm' },
    { parameter: 'Maximum Winding Diameter', unit: 'mm', value: '150 mm' },
    { parameter: 'Winding Spindle', unit: 'Type', value: 'Double Spindle' },
    { parameter: 'Spindle Motor', unit: 'Motor', value: 'Brushless DC' },
    { parameter: 'Wiring Motor', unit: 'Motor', value: '600W Plus Drive' },
    { parameter: 'Traverse', unit: 'Motor', value: 'Stepper Motor' },
    { parameter: 'Machine Speed', unit: 'RPM', value: '8000 RPM' },
    { parameter: 'Number of Memory Groups', unit: 'Groups', value: '1000' },
    { parameter: 'Voltage', unit: 'Power', value: 'AC 220V / 50Hz' },
    { parameter: 'Machine Weight', unit: 'kg', value: '35 kg' }
  ],

  highlights: [
    { label: 'Spindle', value: 'Double Spindle' },
    { label: 'Machine Speed', value: '8000 RPM' },
    { label: 'Memory', value: '1000 Groups' }
  ],

  inStock: true,
  isHotProduct: true,
  warranty: '1 Year Warranty',
  catalogPdfName: 'SMH_Double_Spindle_Winding_Machine_SM-02D.pdf'
},
 

//13


{
  id: 'ei-laminating-machine-sm-05ei',
  name: 'EI Laminating Machine',
  category: 'EI Laminating Machine',
  model: 'SM-05EI',
  tagline: 'Precision EI Laminating Machine for Fast and Consistent Transformer Core Assembly',
  description: 'EI Laminating Machine is designed for efficient and consistent lamination of EI transformer cores. The machine supports multiple EI core sizes and provides high-speed lamination operation for transformer manufacturing.',

  mainImage: productImg13,

  images: [
    productImg13
  ],

  features: [
    'Suitable for multiple EI core sizes',
    'Fast and consistent laminating operation',
    'Supports different EI specifications',
    'High-speed core lamination process',
    'Designed for transformer core manufacturing'
  ],

  applications: [
    'EI Transformer Core Lamination',
    'Transformer Manufacturing',
    'Electrical Core Assembly',
    'Power Transformer Components'
  ],

  specifications: [
    { parameter: 'EI Core Specification', unit: 'Size', value: 'E-19 to E-102' },
    { parameter: 'Core Size', unit: 'mm', value: 'Multiple EI Sizes Supported' },
    { parameter: 'Production Speed', unit: 'Pcs/Min', value: 'Up to 400 Pcs/Min' }
  ],

  highlights: [
    { label: 'Core Type', value: 'EI Laminations' },
    { label: 'Core Range', value: 'E-19 to E-102' },
    { label: 'Speed', value: 'Up to 400 Pcs/Min' }
  ],

  inStock: true,
  isHotProduct: true,
  warranty: '1 Year Warranty',
  catalogPdfName: 'SMH_EI_Laminating_Machine_SM-05EI.pdf'
},
 


//15


{
  id: 'manual-hook-winding-machine-sm-02mr',
  name: 'Manual Hook Winding Machine',
  category: 'Manual Hook Winding Machine',
  model: 'SM-02MR',
  tagline: 'Manual Hook Winding Machine for Precise and Flexible Coil Winding Operations',
  description: 'Manual Hook Winding Machine is designed for hook-based coil winding applications with manual operation and adjustable winding capabilities. It supports different wire sizes, core dimensions, coil weights, and hook winding requirements.',

  mainImage: productImg15,

  images: [
    productImg15
  ],

  features: [
    'Manual hook winding operation',
    'Suitable for different wire sizes',
    'Adjustable core and coil winding capabilities',
    'Supports multiple hook winding configurations',
    'Suitable for small and medium electrical coils'
  ],

  applications: [
    'Hook Coil Winding',
    'Electrical Coil Manufacturing',
    'Transformer Coil Winding',
    'Inductor Coil Winding'
  ],

  specifications: [
    { parameter: 'Head', unit: 'Type', value: 'Hook' },
    { parameter: 'Wire Diameter', unit: 'SWG', value: '23-15 SWG' },
    { parameter: 'Minimum Core Diameter', unit: 'mm', value: '10 mm' },
    { parameter: 'Minimum / Maximum Core OD', unit: 'mm', value: '20-50 mm' },
    { parameter: 'Maximum Core Height', unit: 'mm', value: '50 mm' },
    { parameter: 'Maximum Coil Weight', unit: 'kg', value: '1.5 kg' }
  ],

  highlights: [
    { label: 'Wire Diameter', value: '23-15 SWG' },
    { label: 'Core OD', value: '20-50 mm' },
    { label: 'Max Coil Weight', value: '1.5 kg' }
  ],

  inStock: true,
  isHotProduct: true,
  warranty: '1 Year Warranty',
  catalogPdfName: 'SMH_Manual_Hook_Winding_Machine_SM-02MR.pdf'
},


//16


{
  id: 'sleeve-inserting-machine-sm-01si',
  name: 'Sleeve Inserting Machine',
  category: 'Sleeve Inserting Machine',
  model: 'SM-01SI',
  tagline: 'Automatic Sleeve Inserting Machine for Efficient Transformer Bushing and Winding Production',
  description: 'Sleeve Inserting Machine is designed for automatic production of high-frequency transformers by inserting sleeves into transformer bushings and windings. It is easy to operate, saves labor, and improves production efficiency.',

  mainImage: productImg16,

  images: [
    productImg16
  ],

  features: [
    'Microcomputer control for easy operation',
    'Automatic sleeve insertion operation',
    'Adjustable casing size and length',
    'Suitable for production of most bushing transformers',
    'Easy-to-use CNC quick-set mode',
    'Suitable for copper wire production from 0.1 mm to 1.5 mm',
    'Multi-stranded wire and insulated wire can be used'
  ],

  applications: [
    'High-Frequency Transformer Manufacturing',
    'Transformer Bushing Production',
    'Transformer Winding Sleeve Insertion',
    'Electrical Component Manufacturing'
  ],

  specifications: [
    { parameter: 'Working Voltage', unit: 'V / Hz', value: '200V 50Hz / 220V 50Hz' },
    { parameter: 'Machine Weight', unit: 'kg', value: '8.5 kg' },
    { parameter: 'Air Pressure Requirement', unit: 'MPa', value: '0.5 MPa' },
    { parameter: 'Casing Specification', unit: 'Specification', value: '14L-30L' },
    { parameter: 'Copper Wire Range', unit: 'mm', value: '0.1-1.5 mm' }
  ],

  highlights: [
    { label: 'Wire Range', value: '0.1-1.5 mm' },
    { label: 'Air Pressure', value: '0.5 MPa' },
    { label: 'Machine Weight', value: '8.5 kg' }
  ],

  inStock: true,
  isHotProduct: true,
  warranty: '1 Year Warranty',
  catalogPdfName: 'SMH_Sleeve_Inserting_Machine_SM-01SI.pdf'
},

//17


{
  id: 'toroidal-wire-cutting-and-straightening-machine-sm-03wt',
  name: 'Toroidal Wire Cutting and Straightening Machine',
  category: 'Toroidal Wire Cutting and Straightening Machine',
  model: 'SM-03WT',
  tagline: 'Efficient Wire Cutting and Straightening Machine for Toroidal Coil Applications',
  description: 'Toroidal Wire Cutting and Straightening Machine is designed for cutting and straightening wire used in toroidal and electrical coil applications. It provides a compact machine design with a high-speed wire stripping and processing mechanism for efficient production.',

  mainImage: productImg17,

  images: [
    productImg17
  ],

  features: [
    'Wire cutting and straightening operation',
    'Suitable for wire diameter from 0.5 mm to 3.0 mm',
    'High-speed 2800 RPM operation',
    'Compact machine design',
    'AC 220V / 50Hz power supply'
  ],

  applications: [
    'Toroidal Coil Manufacturing',
    'Transformer Wire Processing',
    'Electrical Coil Wire Preparation',
    'Wire Cutting and Straightening'
  ],

  specifications: [
    { parameter: 'Applicable Wire Diameter', unit: 'mm', value: '0.5-3.0 mm' },
    { parameter: 'Machine Size', unit: 'mm', value: '300 × 180 × 230 mm' },
    { parameter: 'Machine Power', unit: 'W', value: '120 W' },
    { parameter: 'Speed of Paint Stripper', unit: 'RPM', value: '2800 RPM' },
    { parameter: 'Machine Power Supply', unit: 'Voltage / Frequency', value: 'AC 220V / 50Hz' },
    { parameter: 'Machine Weight', unit: 'kg', value: '9 kg' }
  ],

  highlights: [
    { label: 'Wire Diameter', value: '0.5-3.0 mm' },
    { label: 'Speed', value: '2800 RPM' },
    { label: 'Weight', value: '9 kg' }
  ],

  inStock: true,
  isHotProduct: true,
  warranty: '1 Year Warranty',
  catalogPdfName: 'SMH_Toroidal_Wire_Cutting_Straightening_Machine_SM-03WT.pdf'
},

//18


{
  id: 'transformer-tester-sm-5089',
  name: 'Transformer Tester',
  category: 'Transformer Tester',
  model: 'SM-5089',
  tagline: 'Advanced Transformer Tester for Accurate Electrical Parameter Testing and Quality Inspection',
  description: 'Transformer Tester is designed for comprehensive transformer and coil testing with multiple measurement functions, automatic parameter detection, test result storage, comparator sorting, and flexible test fixture support. It is suitable for transformer production testing, quality inspection, and electrical component analysis.',

  mainImage: productImg18,

  images: [
    productImg18
  ],

  features: [
    '7-inch TFT LCD display with 800×480 resolution',
    'Frequency range from 20Hz to 200kHz',
    'Signal level from 5mV to 3Vrms',
    'Built-in 1000-200kHz option power supply',
    'Up to 75 times/second test speed',
    'Diode forward and reverse characteristic detection',
    'Impedance testing with automatic frequency sweeping',
    'Transformer turns ratio and polarity testing',
    'LCR parameter measurement',
    'Transformer no-load current testing',
    'Transformer DC resistance testing',
    'Automatic test parameter selection',
    'Self-test and automatic calibration',
    'Test result storage and management',
    'Comparator sorting with 5-bin sorting',
    'USBHOST and RS232 communication interfaces'
  ],

  applications: [
    'Transformer Testing',
    'Transformer Production Testing',
    'Coil Testing',
    'Electrical Component Quality Inspection',
    'R&D and Laboratory Testing'
  ],

  specifications: [
    { parameter: 'Test Pin (PIN)', unit: 'Pins', value: '20' },
    { parameter: 'Test Frequency', unit: 'Hz', value: '20Hz-200kHz' },
    { parameter: 'Display', unit: 'Resolution', value: '800 × 480, 7-inch TFT LCD' },
    { parameter: 'Signal Level', unit: 'Vrms', value: '5mV-3Vrms' },
    { parameter: 'Test Speed', unit: 'Tests/sec', value: 'Up to 75 tests/sec' },
    { parameter: 'Measurement Parameters', unit: 'Testing', value: 'L, C, R, Q, D, Z, Turns Ratio, DC Resistance' },
    { parameter: 'Comparator', unit: 'Sorting', value: '5-Bin Comparator Sorting' },
    { parameter: 'Communication', unit: 'Interface', value: 'USBHOST / RS232' },
    { parameter: 'Data Storage', unit: 'Storage', value: 'Internal Test Result Storage' }
  ],

  highlights: [
    { label: 'Frequency', value: '20Hz-200kHz' },
    { label: 'Display', value: '7-inch TFT LCD' },
    { label: 'Test Speed', value: 'Up to 75 Tests/sec' }
  ],

  inStock: true,
  isHotProduct: true,
  warranty: '1 Year Warranty',
  catalogPdfName: 'SMH_Transformer_Tester_SM-5089.pdf'
},

{
  id: 'voice-coil-winding-machine-sm-08vc',
  name: 'Voice Coil Winding Machine',
  category: 'Voice Coil Winding Machine',
  model: 'SM-08VC',
  tagline: 'Precision Voice Coil Winding Machine for Accurate and Consistent Coil Production',
  description: 'Voice Coil Winding Machine is designed for precise and efficient winding of voice coils with adjustable winding width, maximum winding diameter, and controlled winding speed. It features a single spindle, brushless DC spindle motor, and stepper motor winding system for reliable coil production.',

  mainImage: productImg19,

  images: [
    productImg19
  ],

  features: [
    'Single spindle winding operation',
    'Brushless DC spindle motor',
    'Stepper motor winding system',
    'Adjustable winding width',
    'Up to 150 mm maximum winding diameter',
    '1000 memory groups',
    'Machine speed up to 5000 RPM'
  ],

  applications: [
    'Voice Coil Manufacturing',
    'Speaker Coil Winding',
    'Electrical Coil Manufacturing',
    'Audio Component Manufacturing'
  ],

  specifications: [
    { parameter: 'Wire Size', unit: 'mm', value: '0.03-0.3 mm' },
    { parameter: 'Winding Width', unit: 'mm', value: '0-110 mm' },
    { parameter: 'Maximum Winding Diameter', unit: 'mm', value: '150 mm' },
    { parameter: 'Winding Spindle', unit: 'Type', value: 'Single Axis' },
    { parameter: 'Spindle Motor', unit: 'Motor', value: '600W Brushless DC / 600W Plus Drive' },
    { parameter: 'Winding Motor', unit: 'Motor', value: 'Stepper Motor' },
    { parameter: 'Machine Speed', unit: 'RPM', value: '5000 RPM' },
    { parameter: 'Number of Memory Groups', unit: 'Groups', value: '1000' },
    { parameter: 'Voltage', unit: 'Power', value: 'AC 220V / 50Hz' },
    { parameter: 'Machine Weight', unit: 'kg', value: '72 kg' }
  ],

  highlights: [
    { label: 'Machine Speed', value: '5000 RPM' },
    { label: 'Max Winding Diameter', value: '150 mm' },
    { label: 'Memory', value: '1000 Groups' }
  ],

  inStock: true,
  isHotProduct: true,
  warranty: '1 Year Warranty',
  catalogPdfName: 'SMH_Voice_Coil_Winding_Machine_SM-08VC.pdf'
},



//20

{
  id: 'wire-enamel-removing-machine-sm-04er',
  name: 'Wire Enamel Removing Machine',
  category: 'Wire Enamel Removing Machine',
  model: 'SM-04ER',
  tagline: 'High-Speed Wire Enamel Removing Machine for Efficient Wire Preparation',
  description: 'Wire Enamel Removing Machine is designed for removing enamel coating from electrical wires with a high-speed paint stripping mechanism. It supports wire diameters from 0.5 mm to 3.0 mm and provides efficient wire preparation for electrical coil and transformer manufacturing.',

  mainImage: productImg20,

  images: [
    productImg20
    
  ],

  features: [
    'Enamel coating removal from electrical wire',
    'Suitable for wire diameter from 0.5 mm to 3.0 mm',
    'High-speed paint stripping operation',
    'Compact machine design',
    'AC 220V / 50Hz power supply'
  ],

  applications: [
    'Electrical Wire Enamel Removal',
    'Transformer Wire Preparation',
    'Coil Winding Wire Preparation',
    'Electrical Component Manufacturing'
  ],

  specifications: [
    { parameter: 'Applicable Wire Diameter', unit: 'mm', value: '0.5-3.0 mm' },
    { parameter: 'Machine Size', unit: 'mm', value: '300 × 180 × 230 mm' },
    { parameter: 'Machine Power', unit: 'W', value: '120 W' },
    { parameter: 'Speed of Paint Stripper', unit: 'RPM', value: '2800 RPM' },
    { parameter: 'Machine Power Supply', unit: 'Voltage / Frequency', value: 'AC 220V / 50Hz' },
    { parameter: 'Machine Weight', unit: 'kg', value: '9 kg' }
  ],

  highlights: [
    { label: 'Wire Diameter', value: '0.5-3.0 mm' },
    { label: 'Paint Stripper Speed', value: '2800 RPM' },
    { label: 'Machine Weight', value: '9 kg' }
  ],

  inStock: true,
  isHotProduct: true,
  warranty: '1 Year Warranty',
  catalogPdfName: 'SMH_Wire_Enamel_Removing_Machine_SM-04ER.pdf'
},



{
  id: 'bldc-motor-cnc-90',
  name: 'BLDC Motor CNC-90',
  category: 'BLDC Motor',
  model: 'SMH-BLDC-CNC-90',
  tagline: 'High-Precision Brushless DC Motor for CNC & Industrial Machinery',
  description: 'BLDC Motor CNC-90 is a high-performance brushless DC motor designed for CNC machines, industrial automation, and precision machinery applications. It provides smooth and reliable motor operation with efficient speed control, low maintenance, and reduced mechanical wear. Built with durable industrial-grade components, this motor is suitable for continuous-duty applications where consistent performance, precise motion, and long service life are required.',
  mainImage: productImg21,
  images: [
    productImg21,
  ],
  features: [
    'High-efficiency brushless DC motor technology for reliable industrial operation',
    'Precise speed control for CNC and automated machinery applications',
    'Brushless design provides low maintenance and reduced mechanical wear',
    'Compact and robust construction for continuous industrial operation',
    'Smooth and stable performance for precision-driven machinery',
    'Suitable for CNC machines, coil winding equipment, and industrial automation'
  ],
  applications: [
    'CNC Machine Tools & Precision Machinery',
    'Automatic Coil Winding Machines',
    'Industrial Automation & Motion Control',
    'Electrical Machinery & Manufacturing Equipment'
  ],
  specifications: [
    { parameter: 'Minimum Order Quantity', unit: 'Units', value: '1 Unit' },
    { parameter: 'Motor Type', unit: 'Type', value: 'Brushless DC Motor (BLDC)' },
    { parameter: 'Model', unit: 'Model', value: 'CNC-90' },
    { parameter: 'Application', unit: 'Type', value: 'CNC & Industrial Machinery' },
    { parameter: 'Motor Construction', unit: 'Type', value: 'Industrial Grade' },
    { parameter: 'Drive System', unit: 'Type', value: 'Brushless Electronic Commutation' },
    { parameter: 'Operation', unit: 'Type', value: 'Continuous Industrial Operation' },
    { parameter: 'Maintenance', unit: 'Type', value: 'Low Maintenance' }
  ],
  highlights: [
    { label: 'Motor Type', value: 'BLDC Motor' },
    { label: 'Model', value: 'CNC-90' },
    { label: 'Application', value: 'CNC & Industrial Machinery' }
  ],
  inStock: true,
  isHotProduct: true,
  warranty: '1 Year Warranty + Lifetime Technical Support',
  catalogPdfName: 'SMH_BLDC_Motor_CNC_90_Catalog.pdf'
},

//seprRATE IMG

//22
{
  id: 'break-coil-break-disc-sm-28',
  name: 'Break Coil & Break Disc SM-28',
  category: 'Brake Coil & Brake Disc',
  model: 'SMH-SM-28',
  tagline: 'Industrial Brake Coil & Brake Disc for Reliable Electromagnetic Braking Applications',
  description: 'Break Coil & Break Disc SM-28 is designed for reliable and efficient braking applications in industrial machinery and electrical equipment. The brake coil provides electromagnetic actuation for controlled braking, while the brake disc is designed to deliver stable friction and dependable stopping performance. Built with durable industrial-grade components, this system is suitable for continuous-duty machinery where quick, controlled, and repeatable braking is required. It is widely used in industrial machines, motors, lifting equipment, and automated machinery requiring reliable braking performance.',
  mainImage: productImg22,
  images: [
    productImg22
  ],
  features: [
    'Reliable electromagnetic brake coil operation for controlled machine stopping',
    'Durable brake disc designed for stable and consistent friction performance',
    'Industrial-grade construction suitable for continuous machinery operation',
    'Quick and controlled braking response for improved machine safety',
    'Low-maintenance design for dependable long-term industrial use',
    'Suitable for replacement and integration in compatible industrial braking systems'
  ],
  applications: [
    'Industrial Machinery & Machine Tools',
    'Electric Motor Braking Systems',
    'Lifting & Material Handling Equipment',
    'Automatic & Electrical Industrial Machinery'
  ],
  specifications: [
    { parameter: 'Minimum Order Quantity', unit: 'Units', value: '1 Unit' },
    { parameter: 'Product Type', unit: 'Type', value: 'Brake Coil & Brake Disc' },
    { parameter: 'Model', unit: 'Model', value: 'SM-28' },
    { parameter: 'Brake System', unit: 'Type', value: 'Electromagnetic Braking System' },
    { parameter: 'Application', unit: 'Type', value: 'Industrial Machinery & Motor Braking' },
    { parameter: 'Construction', unit: 'Type', value: 'Industrial Grade' },
    { parameter: 'Operation', unit: 'Type', value: 'Electromagnetic Actuation' },
    { parameter: 'Maintenance', unit: 'Type', value: 'Low Maintenance' }
  ],
  highlights: [
    { label: 'Product', value: 'Brake Coil & Brake Disc' },
    { label: 'Model', value: 'SM-28' },
    { label: 'Application', value: 'Industrial Braking System' }
  ],
  inStock: true,
  isHotProduct: true,
  warranty: '1 Year Warranty + Lifetime Technical Support',
  catalogPdfName: 'SMH_Break_Coil_Break_Disc_SM_28_Catalog.pdf'
},


//23

{
  id: 'bucket-37',
  name: 'Bucket-37',
  category: 'Industrial Bucket',
  model: 'SMH-BUCKET-37',
  tagline: 'Heavy-Duty Industrial Bucket for Reliable Material Handling Applications',
  description: 'Bucket-37 is a durable industrial-grade bucket designed for efficient material handling and heavy-duty industrial applications. Built with a robust construction, it provides reliable performance during demanding loading, carrying, and material handling operations. Its practical design ensures easy handling, long service life, and dependable operation in industrial and workshop environments.',
  mainImage: productImg23,
  images: [
    productImg23,
  ],
  features: [
    'Heavy-duty industrial construction for demanding material handling applications',
    'Robust design for reliable performance during continuous use',
    'Durable structure designed for long service life',
    'Suitable for handling and transferring industrial materials',
    'Easy-to-use design for efficient workshop and industrial operations',
    'Low-maintenance construction for dependable long-term use'
  ],
  applications: [
    'Industrial Material Handling',
    'Workshop & Manufacturing Applications',
    'Construction & Heavy-Duty Operations',
    'Industrial Storage & Material Transfer'
  ],
  specifications: [
    { parameter: 'Minimum Order Quantity', unit: 'Units', value: '1 Unit' },
    { parameter: 'Product Type', unit: 'Type', value: 'Industrial Bucket' },
    { parameter: 'Model', unit: 'Model', value: 'BUCKET-37' },
    { parameter: 'Application', unit: 'Type', value: 'Industrial Material Handling' },
    { parameter: 'Construction', unit: 'Type', value: 'Heavy-Duty Industrial Grade' },
    { parameter: 'Operation', unit: 'Type', value: 'Manual / Industrial Handling' },
    { parameter: 'Maintenance', unit: 'Type', value: 'Low Maintenance' },
    { parameter: 'Usage', unit: 'Type', value: 'Industrial & Workshop Applications' }
  ],
  highlights: [
    { label: 'Product', value: 'Industrial Bucket' },
    { label: 'Model', value: 'BUCKET-37' },
    { label: 'Application', value: 'Material Handling' }
  ],
  inStock: true,
  isHotProduct: true,
  warranty: '1 Year Warranty + Lifetime Technical Support',
  catalogPdfName: 'SMH_Bucket_37_Catalog.pdf'
},


//24

{
  id: 'ceramic-sm-12',
  name: 'Ceramic SM-12',
  category: 'Ceramic Component',
  model: 'SMH-SM-12',
  tagline: 'High-Quality Industrial Ceramic Component for Electrical & Machinery Applications',
  description: 'Ceramic SM-12 is a durable industrial ceramic component designed for reliable performance in electrical, heating, and industrial machinery applications. Manufactured using high-quality ceramic material, it provides excellent heat resistance, electrical insulation, and dependable performance under demanding operating conditions. Its robust construction makes it suitable for industrial equipment, electrical assemblies, heating systems, and other applications requiring durable and heat-resistant ceramic components.',
  mainImage: productImg24,
  images: [
    productImg24,
  ],
  features: [
    'High-quality ceramic construction for reliable industrial applications',
    'Excellent heat resistance for demanding operating conditions',
    'High electrical insulation properties for electrical applications',
    'Durable and wear-resistant construction for long service life',
    'Suitable for industrial heating and electrical equipment',
    'Low-maintenance component designed for dependable operation'
  ],
  applications: [
    'Industrial Electrical Equipment',
    'Heating & Soldering Equipment',
    'Electrical Insulation Applications',
    'Industrial Machinery & Manufacturing Equipment'
  ],
  specifications: [
    { parameter: 'Minimum Order Quantity', unit: 'Units', value: '1 Unit' },
    { parameter: 'Product Type', unit: 'Type', value: 'Industrial Ceramic Component' },
    { parameter: 'Model', unit: 'Model', value: 'SM-12' },
    { parameter: 'Material', unit: 'Type', value: 'Industrial Ceramic' },
    { parameter: 'Application', unit: 'Type', value: 'Electrical & Industrial Machinery' },
    { parameter: 'Heat Resistance', unit: 'Type', value: 'High Temperature Resistant' },
    { parameter: 'Insulation', unit: 'Type', value: 'High Electrical Insulation' },
    { parameter: 'Maintenance', unit: 'Type', value: 'Low Maintenance' }
  ],
  highlights: [
    { label: 'Product', value: 'Ceramic Component' },
    { label: 'Model', value: 'SM-12' },
    { label: 'Material', value: 'Industrial Ceramic' }
  ],
  inStock: true,
  isHotProduct: true,
  warranty: '1 Year Warranty + Lifetime Technical Support',
  catalogPdfName: 'SMH_Ceramic_SM_12_Catalog.pdf'
},

//25
{
  id: 'coil-tape-fixtures-sm-26',
  name: 'Coil Tape Fixtures SM-26 - Coil & Core Tap Fixture',
  category: 'Coil & Core Tap Fixture',
  model: 'SMH-SM-26',
  tagline: 'Heavy-Duty Coil & Core Tap Fixture for Precision Transformer Coil Assembly',
  description: 'Coil Tape Fixtures SM-26, also known as Coil & Core Tap Fixture, is designed for accurate and reliable positioning, fixing, and tapping operations during transformer coil and core assembly. The fixture provides stable support and precise alignment of components, helping improve assembly consistency and reduce manual handling. Built with durable industrial-grade construction, it is suitable for transformer manufacturing, electrical coil assembly, and other industrial applications requiring accurate coil and core positioning.',
  mainImage: productImg25,
  images: [
    productImg25,
  ],
  features: [
    'Precision fixture design for accurate coil and core positioning',
    'Heavy-duty industrial construction for reliable workshop operation',
    'Provides stable support during coil and core tapping operations',
    'Improves assembly accuracy and reduces manual handling',
    'Suitable for transformer coil and electrical component assembly',
    'Durable low-maintenance design for long-term industrial use'
  ],
  applications: [
    'Transformer Coil & Core Assembly',
    'Electrical Coil Manufacturing',
    'Transformer Manufacturing Workshops',
    'Industrial Electrical Component Assembly'
  ],
  specifications: [
    { parameter: 'Minimum Order Quantity', unit: 'Units', value: '1 Unit' },
    { parameter: 'Product Type', unit: 'Type', value: 'Coil & Core Tap Fixture' },
    { parameter: 'Model', unit: 'Model', value: 'SM-26' },
    { parameter: 'Application', unit: 'Type', value: 'Transformer Coil & Core Assembly' },
    { parameter: 'Fixture Type', unit: 'Type', value: 'Coil Tape & Core Tap Fixture' },
    { parameter: 'Construction', unit: 'Type', value: 'Heavy-Duty Industrial Grade' },
    { parameter: 'Operation', unit: 'Type', value: 'Manual Fixture Operation' },
    { parameter: 'Maintenance', unit: 'Type', value: 'Low Maintenance' }
  ],
  highlights: [
    { label: 'Product', value: 'Coil & Core Tap Fixture' },
    { label: 'Model', value: 'SM-26' },
    { label: 'Application', value: 'Transformer Coil & Core Assembly' }
  ],
  inStock: true,
  isHotProduct: true,
  warranty: '1 Year Warranty + Lifetime Technical Support',
  catalogPdfName: 'SMH_Coil_Tape_Fixtures_SM_26_Catalog.pdf'
},


//26

{
  id: 'display',
  name: 'Display',
  category: 'Industrial Display',
  model: 'SMH-DISPLAY',
  tagline: 'Industrial Display Unit for Clear & Reliable Machine Monitoring',
  description: 'Display is designed for clear and reliable monitoring of machine operating parameters in industrial environments. It provides an easy-to-read interface for viewing machine status, settings, measurements, and operating information. Built for industrial applications, it is suitable for CNC machines, automatic machinery, electrical equipment, and other production systems requiring convenient operator monitoring.',
  mainImage: productImg26,
  images: [
    productImg26,
  ],
  features: [
    'Clear and easy-to-read display for industrial machine monitoring',
    'User-friendly interface for convenient operator operation',
    'Suitable for displaying machine operating parameters and status',
    'Durable construction for demanding industrial environments',
    'Compact design suitable for machine control panels',
    'Reliable operation for continuous industrial applications'
  ],
  applications: [
    'CNC Machine Control Panels',
    'Industrial Automation Equipment',
    'Electrical & Electronic Machinery',
    'Machine Monitoring & Operator Control Systems'
  ],
  specifications: [
    { parameter: 'Minimum Order Quantity', unit: 'Units', value: '1 Unit' },
    { parameter: 'Product Type', unit: 'Type', value: 'Industrial Display' },
    { parameter: 'Model', unit: 'Model', value: 'SMH-DISPLAY' },
    { parameter: 'Application', unit: 'Type', value: 'Industrial Machine Monitoring' },
    { parameter: 'Display Type', unit: 'Type', value: 'Industrial Machine Display' },
    { parameter: 'Installation', unit: 'Type', value: 'Machine Control Panel' },
    { parameter: 'Construction', unit: 'Type', value: 'Industrial Grade' },
    { parameter: 'Maintenance', unit: 'Type', value: 'Low Maintenance' }
  ],
  highlights: [
    { label: 'Product', value: 'Industrial Display' },
    { label: 'Model', value: 'SMH-DISPLAY' },
    { label: 'Application', value: 'Machine Monitoring' }
  ],
  inStock: true,
  isHotProduct: true,
  warranty: '1 Year Warranty + Lifetime Technical Support',
  catalogPdfName: 'SMH_Display_Catalog.pdf'
},

//27
{
  id: 'felt-pully-timing-belt-sm-18',
  name: 'Felt, Pully & Timing Belt SM-18',
  category: 'Felt, Pulley & Timing Belt',
  model: 'SMH-SM-18',
  tagline: 'Industrial Felt, Pulley & Timing Belt Set for Reliable Machine Drive & Motion Control',
  description: 'Felt, Pulley & Timing Belt SM-18 is designed for reliable power transmission, motion control, and machine drive applications in industrial equipment. The combination of durable felt, precision pulley, and timing belt components provides smooth and consistent mechanical operation with accurate belt movement. Built for dependable industrial use, this assembly is suitable for CNC machines, coil winding equipment, automated machinery, and other mechanical systems requiring stable and efficient power transmission.',
  mainImage: productImg27,
  images: [
    productImg27,
  ],
  features: [
    'Durable pulley and timing belt components for reliable power transmission',
    'Precision belt movement for smooth and consistent machine operation',
    'Industrial-grade felt component designed for dependable machine performance',
    'Accurate timing and synchronized mechanical movement',
    'Robust construction suitable for continuous industrial operation',
    'Low-maintenance design for long-lasting machine performance'
  ],
  applications: [
    'CNC Machine Tools & Equipment',
    'Coil Winding & Electrical Machinery',
    'Industrial Automation & Motion Control',
    'Mechanical Drive & Power Transmission Systems'
  ],
  specifications: [
    { parameter: 'Minimum Order Quantity', unit: 'Units', value: '1 Set' },
    { parameter: 'Product Type', unit: 'Type', value: 'Felt, Pulley & Timing Belt' },
    { parameter: 'Model', unit: 'Model', value: 'SM-18' },
    { parameter: 'Application', unit: 'Type', value: 'Industrial Machine Drive & Motion Control' },
    { parameter: 'Drive Type', unit: 'Type', value: 'Timing Belt Drive' },
    { parameter: 'Construction', unit: 'Type', value: 'Industrial Grade' },
    { parameter: 'Operation', unit: 'Type', value: 'Mechanical Power Transmission' },
    { parameter: 'Maintenance', unit: 'Type', value: 'Low Maintenance' }
  ],
  highlights: [
    { label: 'Product', value: 'Felt, Pulley & Timing Belt' },
    { label: 'Model', value: 'SM-18' },
    { label: 'Application', value: 'Machine Drive & Motion Control' }
  ],
  inStock: true,
  isHotProduct: true,
  warranty: '1 Year Warranty + Lifetime Technical Support',
  catalogPdfName: 'SMH_Felt_Pulley_Timing_Belt_SM_18_Catalog.pdf'
},


//28

{
  id: 'foot-switch-sm-16',
  name: 'Foot Switch SM-16',
  category: 'Foot Switch',
  model: 'SMH-SM-16',
  tagline: 'Heavy-Duty Industrial Foot Switch for Convenient Machine Control & Operation',
  description: 'Foot Switch SM-16 is a durable industrial foot-operated switch designed for convenient and hands-free control of machinery and electrical equipment. It allows operators to start, stop, or control compatible machine functions using simple foot operation, improving workflow and operator convenience. Built with a robust industrial-grade housing, the switch is suitable for CNC machines, coil winding equipment, presses, soldering equipment, and other industrial machinery requiring reliable foot control.',
  mainImage: productImg28,
  images: [
    productImg28,
  ],
  features: [
    'Heavy-duty foot-operated design for convenient hands-free machine control',
    'Robust industrial construction for demanding workshop environments',
    'Easy foot operation helps improve operator productivity and workflow',
    'Reliable switching mechanism for consistent machine control',
    'Suitable for continuous-duty industrial machinery applications',
    'Compact and practical design for easy machine installation'
  ],
  applications: [
    'CNC Machine Tools & Equipment',
    'Coil Winding & Electrical Machinery',
    'Power Press & Industrial Machines',
    'Soldering & Workshop Equipment'
  ],
  specifications: [
    { parameter: 'Minimum Order Quantity', unit: 'Units', value: '1 Unit' },
    { parameter: 'Product Type', unit: 'Type', value: 'Industrial Foot Switch' },
    { parameter: 'Model', unit: 'Model', value: 'SM-16' },
    { parameter: 'Application', unit: 'Type', value: 'Industrial Machine Control' },
    { parameter: 'Operation', unit: 'Type', value: 'Foot Operated' },
    { parameter: 'Construction', unit: 'Type', value: 'Heavy-Duty Industrial Grade' },
    { parameter: 'Installation', unit: 'Type', value: 'Machine / Floor Mounted' },
    { parameter: 'Maintenance', unit: 'Type', value: 'Low Maintenance' }
  ],
  highlights: [
    { label: 'Product', value: 'Industrial Foot Switch' },
    { label: 'Model', value: 'SM-16' },
    { label: 'Operation', value: 'Foot Operated' }
  ],
  inStock: true,
  isHotProduct: true,
  warranty: '1 Year Warranty + Lifetime Technical Support',
  catalogPdfName: 'SMH_Foot_Switch_SM_16_Catalog.pdf'
},


//29
{
  id: 'heater-element-sm-32',
  name: 'Heater Element SM-32',
  category: 'Heater Element',
  model: 'SMH-SM-32',
  tagline: 'Industrial Heater Element for Reliable Heating & Temperature Control Applications',
  description: 'Heater Element SM-32 is a durable industrial heating component designed to provide reliable and consistent heat generation for machinery and industrial equipment. Built with high-quality heat-resistant materials, it delivers stable heating performance and is suitable for continuous-duty applications. The heater element is widely used in industrial heating equipment, soldering machines, electrical machinery, and other applications requiring controlled and dependable heat output.',
  mainImage: productImg29,
  images: [
    productImg29,
  ],
  features: [
    'High-quality heating element designed for reliable industrial heating',
    'Consistent heat generation for stable temperature control',
    'Heat-resistant construction suitable for demanding operating conditions',
    'Durable design for continuous industrial operation',
    'Suitable for replacement and integration in compatible machinery',
    'Low-maintenance construction for dependable long-term performance'
  ],
  applications: [
    'Industrial Heating Equipment',
    'Soldering & Electrical Machinery',
    'CNC & Manufacturing Equipment',
    'Industrial Temperature Control Systems'
  ],
  specifications: [
    { parameter: 'Minimum Order Quantity', unit: 'Units', value: '1 Unit' },
    { parameter: 'Product Type', unit: 'Type', value: 'Industrial Heater Element' },
    { parameter: 'Model', unit: 'Model', value: 'SM-32' },
    { parameter: 'Application', unit: 'Type', value: 'Industrial Heating & Machinery' },
    { parameter: 'Heating Type', unit: 'Type', value: 'Electrical Heating Element' },
    { parameter: 'Construction', unit: 'Type', value: 'Industrial Grade' },
    { parameter: 'Operation', unit: 'Type', value: 'Electric Heating' },
    { parameter: 'Maintenance', unit: 'Type', value: 'Low Maintenance' }
  ],
  highlights: [
    { label: 'Product', value: 'Industrial Heater Element' },
    { label: 'Model', value: 'SM-32' },
    { label: 'Application', value: 'Industrial Heating' }
  ],
  inStock: true,
  isHotProduct: true,
  warranty: '1 Year Warranty + Lifetime Technical Support',
  catalogPdfName: 'SMH_Heater_Element_SM_32_Catalog.pdf'
},

//30
{
  id: 'hook-roller-38',
  name: 'Hook Roller-38',
  category: 'Hook Roller',
  model: 'SMH-ROLLER-38',
  tagline: 'Industrial Hook Roller for Smooth & Reliable Material Handling Applications',
  description: 'Hook Roller-38 is a durable industrial roller component designed for smooth movement, guiding, and handling operations in industrial machinery and equipment. Built with robust construction, it provides reliable rolling performance, stable movement, and reduced friction during operation. The component is suitable for material handling systems, industrial machinery, lifting equipment, and other applications requiring dependable roller performance.',
  mainImage: productImg30,
  images: [
    productImg30,
  ],
  features: [
    'Heavy-duty roller construction for reliable industrial operation',
    'Smooth rolling performance with reduced friction',
    'Durable design suitable for continuous-duty applications',
    'Provides stable and controlled movement of compatible equipment',
    'Robust industrial-grade construction for long service life',
    'Low-maintenance design for dependable machine operation'
  ],
  applications: [
    'Industrial Material Handling Equipment',
    'Lifting & Handling Machinery',
    'Industrial Machine Components',
    'Mechanical Movement & Guiding Systems'
  ],
  specifications: [
    { parameter: 'Minimum Order Quantity', unit: 'Units', value: '1 Unit' },
    { parameter: 'Product Type', unit: 'Type', value: 'Industrial Hook Roller' },
    { parameter: 'Model', unit: 'Model', value: 'ROLLER-38' },
    { parameter: 'Application', unit: 'Type', value: 'Industrial Material Handling' },
    { parameter: 'Component Type', unit: 'Type', value: 'Hook Roller' },
    { parameter: 'Construction', unit: 'Type', value: 'Heavy-Duty Industrial Grade' },
    { parameter: 'Operation', unit: 'Type', value: 'Mechanical Rolling' },
    { parameter: 'Maintenance', unit: 'Type', value: 'Low Maintenance' }
  ],
  highlights: [
    { label: 'Product', value: 'Hook Roller' },
    { label: 'Model', value: 'ROLLER-38' },
    { label: 'Application', value: 'Material Handling' }
  ],
  inStock: true,
  isHotProduct: true,
  warranty: '1 Year Warranty + Lifetime Technical Support',
  catalogPdfName: 'SMH_Hook_Roller_38_Catalog.pdf'
},

//31



{
  id: 'hook-sm-26',
  name: 'Hook SM-26',
  category: 'Industrial Hook',
  model: 'SMH-SM-26',
  tagline: 'Heavy-Duty Industrial Hook for Reliable Lifting & Material Handling Applications',
  description: 'Hook SM-26 is a durable industrial-grade hook designed for reliable lifting, holding, and material handling applications. Its robust construction provides secure engagement and dependable performance in demanding industrial environments. Suitable for machinery, handling equipment, workshop applications, and compatible lifting systems where strong and reliable hook support is required.',
  mainImage: productImg31,
  images: [
    productImg31,
  ],
  features: [
    'Heavy-duty industrial construction for reliable lifting applications',
    'Robust hook design for secure holding and material handling',
    'Durable structure suitable for demanding industrial environments',
    'Designed for stable and dependable mechanical operation',
    'Suitable for industrial machinery and compatible handling systems',
    'Low-maintenance construction for long-term use'
  ],
  applications: [
    'Industrial Material Handling',
    'Lifting & Handling Equipment',
    'Workshop & Manufacturing Machinery',
    'Industrial Machine Components'
  ],
  specifications: [
    { parameter: 'Minimum Order Quantity', unit: 'Units', value: '1 Unit' },
    { parameter: 'Product Type', unit: 'Type', value: 'Industrial Hook' },
    { parameter: 'Model', unit: 'Model', value: 'SM-26' },
    { parameter: 'Application', unit: 'Type', value: 'Industrial Lifting & Material Handling' },
    { parameter: 'Construction', unit: 'Type', value: 'Heavy-Duty Industrial Grade' },
    { parameter: 'Operation', unit: 'Type', value: 'Mechanical / Manual Handling' },
    { parameter: 'Usage', unit: 'Type', value: 'Lifting & Holding Applications' },
    { parameter: 'Maintenance', unit: 'Type', value: 'Low Maintenance' }
  ],
  highlights: [
    { label: 'Product', value: 'Industrial Hook' },
    { label: 'Model', value: 'SM-26' },
    { label: 'Application', value: 'Lifting & Material Handling' }
  ],
  inStock: true,
  isHotProduct: true,
  warranty: '1 Year Warranty + Lifetime Technical Support',
  catalogPdfName: 'SMH_Hook_SM_26_Catalog.pdf'
},

//32

{
  id: 'loading-unloading-jigs-sm-33',
  name: 'Loading Unloading Jigs SM-33',
  category: 'Loading & Unloading Jigs',
  model: 'SMH-SM-33',
  tagline: 'Heavy-Duty Loading & Unloading Jigs for Accurate and Efficient Industrial Handling',
  description: 'Loading Unloading Jigs SM-33 are designed to provide secure positioning, easy handling, and accurate loading and unloading of components during industrial manufacturing and assembly operations. The jigs provide stable support and proper alignment, helping reduce manual effort and improve workflow efficiency. Built with robust industrial-grade construction, they are suitable for machinery, transformer manufacturing, electrical equipment, and other industrial applications requiring repeatable and reliable component handling.',
  mainImage: productImg32,
  images: [
    productImg32,
  ],
  features: [
    'Heavy-duty jig construction for reliable industrial handling operations',
    'Provides stable positioning and alignment during loading and unloading',
    'Reduces manual handling effort and improves operator efficiency',
    'Designed for repeatable and consistent component handling',
    'Robust industrial-grade construction for long service life',
    'Low-maintenance design suitable for continuous workshop operations'
  ],
  applications: [
    'Industrial Machinery Loading & Unloading',
    'Transformer & Electrical Equipment Manufacturing',
    'Component Assembly & Handling',
    'Industrial Production & Workshop Operations'
  ],
  specifications: [
    { parameter: 'Minimum Order Quantity', unit: 'Units', value: '1 Unit' },
    { parameter: 'Product Type', unit: 'Type', value: 'Loading & Unloading Jig' },
    { parameter: 'Model', unit: 'Model', value: 'SM-33' },
    { parameter: 'Application', unit: 'Type', value: 'Industrial Loading & Unloading' },
    { parameter: 'Jig Type', unit: 'Type', value: 'Industrial Handling Jig' },
    { parameter: 'Construction', unit: 'Type', value: 'Heavy-Duty Industrial Grade' },
    { parameter: 'Operation', unit: 'Type', value: 'Manual / Mechanical Handling' },
    { parameter: 'Maintenance', unit: 'Type', value: 'Low Maintenance' }
  ],
  highlights: [
    { label: 'Product', value: 'Loading & Unloading Jigs' },
    { label: 'Model', value: 'SM-33' },
    { label: 'Application', value: 'Industrial Component Handling' }
  ],
  inStock: true,
  isHotProduct: true,
  warranty: '1 Year Warranty + Lifetime Technical Support',
  catalogPdfName: 'SMH_Loading_Unloading_Jigs_SM_33_Catalog.pdf'
},


//33

{
  id: 'pin-starting-jigs-sm-34',
  name: 'Pin Starting Jigs SM-34',
  category: 'Pin Starting Jigs',
  model: 'SMH-SM-34',
  tagline: 'Precision Pin Starting Jigs for Accurate & Reliable Industrial Assembly',
  description: 'Pin Starting Jigs SM-34 are designed to provide accurate positioning, alignment, and starting support during pin fitting and assembly operations. The jig helps maintain consistent component positioning, reduces manual effort, and improves assembly accuracy. Built with robust industrial-grade construction, it is suitable for transformer manufacturing, electrical equipment, machine assembly, and other industrial applications requiring precise and repeatable pin positioning.',
  mainImage: productImg33,
  images: [
    productImg33,
  ],
  features: [
    'Precision jig design for accurate pin positioning and starting operations',
    'Provides stable component alignment during assembly',
    'Helps improve repeatability and overall assembly accuracy',
    'Reduces manual effort during pin fitting and positioning',
    'Robust industrial-grade construction for long service life',
    'Low-maintenance design suitable for continuous workshop operations'
  ],
  applications: [
    'Transformer & Electrical Equipment Assembly',
    'Industrial Machine Component Assembly',
    'Pin Fitting & Positioning Operations',
    'Manufacturing & Workshop Applications'
  ],
  specifications: [
    { parameter: 'Minimum Order Quantity', unit: 'Units', value: '1 Unit' },
    { parameter: 'Product Type', unit: 'Type', value: 'Pin Starting Jig' },
    { parameter: 'Model', unit: 'Model', value: 'SM-34' },
    { parameter: 'Application', unit: 'Type', value: 'Industrial Assembly & Pin Positioning' },
    { parameter: 'Jig Type', unit: 'Type', value: 'Pin Starting Jig' },
    { parameter: 'Construction', unit: 'Type', value: 'Heavy-Duty Industrial Grade' },
    { parameter: 'Operation', unit: 'Type', value: 'Manual Assembly Operation' },
    { parameter: 'Maintenance', unit: 'Type', value: 'Low Maintenance' }
  ],
  highlights: [
    { label: 'Product', value: 'Pin Starting Jigs' },
    { label: 'Model', value: 'SM-34' },
    { label: 'Application', value: 'Pin Positioning & Assembly' }
  ],
  inStock: true,
  isHotProduct: true,
  warranty: '1 Year Warranty + Lifetime Technical Support',
  catalogPdfName: 'SMH_Pin_Starting_Jigs_SM_34_Catalog.pdf'
},

//34

{
  id: 'pmdc-motor-sm-14',
  name: 'PMDC Motor SM-14',
  category: 'PMDC Motor',
  model: 'SMH-SM-14',
  tagline: 'Compact Permanent Magnet DC Motor for Reliable Industrial Machinery Applications',
  description: 'PMDC Motor SM-14 is a permanent magnet DC motor designed for reliable and efficient operation in industrial machinery and electrical equipment. Its compact construction and permanent magnet technology provide consistent motor performance, smooth operation, and convenient speed control. Suitable for automation equipment, machine tools, coil winding machinery, and other industrial applications requiring a dependable DC motor solution.',
  mainImage: productImg34,
  images: [
    productImg34,
  ],
  features: [
    'Permanent magnet DC motor design for efficient and reliable operation',
    'Compact and robust construction for industrial machinery applications',
    'Smooth motor operation with consistent performance',
    'Suitable for applications requiring controlled DC motor operation',
    'Low-maintenance design with durable industrial-grade components',
    'Easy integration into compatible machinery and automation systems'
  ],
  applications: [
    'Industrial Automation & Machinery',
    'CNC & Machine Tool Equipment',
    'Coil Winding & Electrical Machinery',
    'DC Drive & Motion Control Systems'
  ],
  specifications: [
    { parameter: 'Minimum Order Quantity', unit: 'Units', value: '1 Unit' },
    { parameter: 'Product Type', unit: 'Type', value: 'Permanent Magnet DC Motor' },
    { parameter: 'Model', unit: 'Model', value: 'SM-14' },
    { parameter: 'Motor Type', unit: 'Type', value: 'PMDC Motor' },
    { parameter: 'Application', unit: 'Type', value: 'Industrial Machinery & Automation' },
    { parameter: 'Motor Construction', unit: 'Type', value: 'Industrial Grade' },
    { parameter: 'Operation', unit: 'Type', value: 'DC Electric Motor' },
    { parameter: 'Maintenance', unit: 'Type', value: 'Low Maintenance' }
  ],
  highlights: [
    { label: 'Motor Type', value: 'PMDC Motor' },
    { label: 'Model', value: 'SM-14' },
    { label: 'Application', value: 'Industrial Machinery' }
  ],
  inStock: true,
  isHotProduct: true,
  warranty: '1 Year Warranty + Lifetime Technical Support',
  catalogPdfName: 'SMH_PMDC_Motor_SM_14_Catalog.pdf'
},

//35
{
  id: 'pu-belt-sm-13',
  name: 'PU Belt SM-13',
  category: 'PU Belt',
  model: 'SMH-SM-13',
  tagline: 'Durable PU Belt for Smooth & Reliable Industrial Power Transmission',
  description: 'PU Belt SM-13 is a durable polyurethane belt designed for smooth, reliable, and efficient power transmission in industrial machinery. Its flexible and wear-resistant construction provides stable movement, good traction, and dependable performance during continuous machine operation. Suitable for CNC machines, coil winding equipment, conveyor systems, and other industrial machinery requiring reliable belt drive performance.',
  mainImage: productImg35,
  images: [
    productImg35,
  ],
  features: [
    'High-quality polyurethane construction for reliable industrial operation',
    'Excellent flexibility and wear resistance for long service life',
    'Smooth and stable power transmission with reliable belt movement',
    'Good traction and grip for consistent machine performance',
    'Suitable for continuous-duty industrial machinery applications',
    'Low-maintenance design for dependable long-term operation'
  ],
  applications: [
    'CNC Machine Tools & Equipment',
    'Coil Winding & Electrical Machinery',
    'Industrial Conveyor & Drive Systems',
    'Automation & Mechanical Power Transmission'
  ],
  specifications: [
    { parameter: 'Minimum Order Quantity', unit: 'Units', value: '1 Unit' },
    { parameter: 'Product Type', unit: 'Type', value: 'PU Belt' },
    { parameter: 'Model', unit: 'Model', value: 'SM-13' },
    { parameter: 'Material', unit: 'Type', value: 'Polyurethane (PU)' },
    { parameter: 'Application', unit: 'Type', value: 'Industrial Power Transmission' },
    { parameter: 'Drive Type', unit: 'Type', value: 'Belt Drive' },
    { parameter: 'Construction', unit: 'Type', value: 'Industrial Grade' },
    { parameter: 'Maintenance', unit: 'Type', value: 'Low Maintenance' }
  ],
  highlights: [
    { label: 'Product', value: 'PU Belt' },
    { label: 'Model', value: 'SM-13' },
    { label: 'Material', value: 'Polyurethane (PU)' }
  ],
  inStock: true,
  isHotProduct: true,
  warranty: '1 Year Warranty + Lifetime Technical Support',
  catalogPdfName: 'SMH_PU_Belt_SM_13_Catalog.pdf'
},

{
  id: 'taping-attachment-for-winding-machine-sm-30',
  name: 'Taping Attachment for Winding Machine SM-30',
  category: 'Winding Machine Taping Attachment',
  model: 'SMH-SM-30',
  tagline: 'Precision Taping Attachment for Automatic & Efficient Coil Winding Applications',
  description: 'Taping Attachment for Winding Machine SM-30 is designed to provide efficient and consistent taping during coil winding operations. The attachment helps apply insulation tape evenly and accurately over electrical coils, improving winding quality and reducing manual intervention. Built with robust industrial-grade components, it is suitable for transformer coil winding machines, electrical coil manufacturing, and other automated winding applications requiring reliable tape application.',
  mainImage: productImg36,
  images: [
    productImg36,
  ],
  features: [
    'Designed for consistent and uniform tape application during coil winding',
    'Precision taping mechanism for accurate insulation tape placement',
    'Reduces manual taping effort and improves production efficiency',
    'Compatible with suitable winding machine configurations',
    'Robust industrial construction for continuous machine operation',
    'Easy-to-operate and low-maintenance attachment design'
  ],
  applications: [
    'Transformer Coil Winding Machines',
    'Electrical Coil & Motor Winding',
    'Insulation Tape Application',
    'Automatic & CNC Winding Machinery'
  ],
  specifications: [
    { parameter: 'Minimum Order Quantity', unit: 'Units', value: '1 Unit' },
    { parameter: 'Product Type', unit: 'Type', value: 'Winding Machine Taping Attachment' },
    { parameter: 'Model', unit: 'Model', value: 'SM-30' },
    { parameter: 'Application', unit: 'Type', value: 'Coil Winding & Insulation Taping' },
    { parameter: 'Attachment Type', unit: 'Type', value: 'Taping Attachment' },
    { parameter: 'Operation', unit: 'Type', value: 'Automatic / Machine Assisted' },
    { parameter: 'Construction', unit: 'Type', value: 'Industrial Grade' },
    { parameter: 'Maintenance', unit: 'Type', value: 'Low Maintenance' }
  ],
  highlights: [
    { label: 'Product', value: 'Winding Machine Taping Attachment' },
    { label: 'Model', value: 'SM-30' },
    { label: 'Application', value: 'Coil Winding & Insulation Taping' }
  ],
  inStock: true,
  isHotProduct: true,
  warranty: '1 Year Warranty + Lifetime Technical Support',
  catalogPdfName: 'SMH_Taping_Attachment_Winding_Machine_SM_30_Catalog.pdf'
},


{
  id: 'taping-machine-motor-sm-22',
  name: 'Taping Machine Motor SM-22',
  category: 'Taping Machine Motor',
  model: 'SMH-SM-22',
  tagline: 'Reliable Industrial Motor for Taping Machine & Coil Insulation Applications',
  description: 'Taping Machine Motor SM-22 is designed to provide reliable and smooth motor operation for industrial taping machines and coil insulation equipment. It delivers consistent mechanical performance for tape application processes and is suitable for continuous-duty industrial machinery. Built with durable components, this motor is ideal for taping machines, transformer coil manufacturing, electrical winding equipment, and other industrial applications requiring dependable motor-driven operation.',
  mainImage: productImg37,
  images: [
    productImg37,
  ],
  features: [
    'Reliable motor performance for industrial taping machine applications',
    'Smooth and consistent operation for accurate tape application',
    'Durable industrial-grade construction for continuous machine operation',
    'Suitable for coil insulation and electrical manufacturing equipment',
    'Compact design for convenient integration with compatible machinery',
    'Low-maintenance construction for dependable long-term performance'
  ],
  applications: [
    'Industrial Taping Machines',
    'Transformer Coil Insulation Equipment',
    'Electrical Coil & Winding Machinery',
    'Industrial Automation & Manufacturing Equipment'
  ],
  specifications: [
    { parameter: 'Minimum Order Quantity', unit: 'Units', value: '1 Unit' },
    { parameter: 'Product Type', unit: 'Type', value: 'Taping Machine Motor' },
    { parameter: 'Model', unit: 'Model', value: 'SM-22' },
    { parameter: 'Application', unit: 'Type', value: 'Industrial Taping & Coil Insulation' },
    { parameter: 'Motor Type', unit: 'Type', value: 'Industrial Electric Motor' },
    { parameter: 'Construction', unit: 'Type', value: 'Industrial Grade' },
    { parameter: 'Operation', unit: 'Type', value: 'Electric Motor Driven' },
    { parameter: 'Maintenance', unit: 'Type', value: 'Low Maintenance' }
  ],
  highlights: [
    { label: 'Product', value: 'Taping Machine Motor' },
    { label: 'Model', value: 'SM-22' },
    { label: 'Application', value: 'Taping & Coil Insulation' }
  ],
  inStock: true,
  isHotProduct: true,
  warranty: '1 Year Warranty + Lifetime Technical Support',
  catalogPdfName: 'SMH_Taping_Machine_Motor_SM_22_Catalog.pdf'
},



{
  id: 'stepper-motor-cnc-108',
  name: 'Stepper Motor CNC-108',
  category: 'Stepper Motor',
  model: 'SMH-CNC-108',
  tagline: 'High-Precision Stepper Motor for CNC & Industrial Motion Control Applications',
  description: 'Stepper Motor CNC-108 is a precision stepper motor designed for accurate positioning, controlled movement, and reliable operation in CNC machines and industrial automation equipment. It provides precise step-by-step motion with consistent torque and repeatable positioning, making it suitable for applications where accurate mechanical movement is essential. Built with durable industrial-grade construction, this motor is suitable for CNC machinery, coil winding machines, automation systems, and other precision motion-control applications.',
  mainImage: productImg38,
  images: [
    productImg38,
  ],
  features: [
    'High-precision stepper motor for accurate positioning and controlled movement',
    'Excellent repeatability for CNC and automated machinery applications',
    'Reliable step-by-step motion control for precision operations',
    'Robust industrial-grade construction for continuous machine operation',
    'Suitable for CNC, coil winding, and industrial automation equipment',
    'Low-maintenance motor design for dependable long-term performance'
  ],
  applications: [
    'CNC Machine Tools & Equipment',
    'Automatic Coil Winding Machines',
    'Industrial Automation & Motion Control',
    'Precision Positioning & Manufacturing Equipment'
  ],
  specifications: [
    { parameter: 'Minimum Order Quantity', unit: 'Units', value: '1 Unit' },
    { parameter: 'Product Type', unit: 'Type', value: 'Stepper Motor' },
    { parameter: 'Model', unit: 'Model', value: 'CNC-108' },
    { parameter: 'Motor Type', unit: 'Type', value: 'Stepper Motor' },
    { parameter: 'Application', unit: 'Type', value: 'CNC & Industrial Automation' },
    { parameter: 'Control Type', unit: 'Type', value: 'Step-by-Step Position Control' },
    { parameter: 'Construction', unit: 'Type', value: 'Industrial Grade' },
    { parameter: 'Maintenance', unit: 'Type', value: 'Low Maintenance' }
  ],
  highlights: [
    { label: 'Motor Type', value: 'Stepper Motor' },
    { label: 'Model', value: 'CNC-108' },
    { label: 'Application', value: 'CNC & Motion Control' }
  ],
  inStock: true,
  isHotProduct: true,
  warranty: '1 Year Warranty + Lifetime Technical Support',
  catalogPdfName: 'SMH_Stepper_Motor_CNC_108_Catalog.pdf'
},


{
  id: 'switches-sm-24',
  name: 'Switches SM-24',
  category: 'Industrial Switches',
  model: 'SMH-SM-24',
  tagline: 'Reliable Industrial Switches for Machine Control & Electrical Applications',
  description: 'Switches SM-24 are durable industrial-grade switches designed for reliable machine control and electrical switching applications. They provide convenient and consistent control of compatible industrial equipment and electrical systems. Built with robust construction, these switches are suitable for CNC machines, coil winding equipment, control panels, automation systems, and other industrial machinery requiring dependable switching performance.',
  mainImage: productImg39,
  images: [
    productImg39,
  ],
  features: [
    'Reliable switching performance for industrial machine control applications',
    'Robust industrial-grade construction for demanding operating environments',
    'Easy operation for convenient machine and electrical control',
    'Suitable for integration into industrial control panels and machinery',
    'Durable design for continuous-duty industrial applications',
    'Low-maintenance construction for dependable long-term operation'
  ],
  applications: [
    'CNC Machine Control Panels',
    'Industrial Automation Equipment',
    'Coil Winding & Electrical Machinery',
    'Electrical Control & Switching Systems'
  ],
  specifications: [
    { parameter: 'Minimum Order Quantity', unit: 'Units', value: '1 Unit' },
    { parameter: 'Product Type', unit: 'Type', value: 'Industrial Switches' },
    { parameter: 'Model', unit: 'Model', value: 'SM-24' },
    { parameter: 'Application', unit: 'Type', value: 'Industrial Machine & Electrical Control' },
    { parameter: 'Switch Type', unit: 'Type', value: 'Industrial Control Switch' },
    { parameter: 'Installation', unit: 'Type', value: 'Machine / Control Panel Mounted' },
    { parameter: 'Construction', unit: 'Type', value: 'Industrial Grade' },
    { parameter: 'Maintenance', unit: 'Type', value: 'Low Maintenance' }
  ],
  highlights: [
    { label: 'Product', value: 'Industrial Switches' },
    { label: 'Model', value: 'SM-24' },
    { label: 'Application', value: 'Machine & Electrical Control' }
  ],
  inStock: true,
  isHotProduct: true,
  warranty: '1 Year Warranty + Lifetime Technical Support',
  catalogPdfName: 'SMH_Switches_SM_24_Catalog.pdf'
},


{
  id: 'taping-machine-sensor-sm-20',
  name: 'Taping Machine Sensor SM-20',
  category: 'Taping Machine Sensor',
  model: 'SMH-SM-20',
  tagline: 'Reliable Industrial Sensor for Accurate Taping Machine Control & Detection',
  description: 'Taping Machine Sensor SM-20 is designed for reliable detection, monitoring, and control operations in industrial taping machines. It helps provide accurate sensing during tape application and machine operation, supporting consistent performance and improved automation. Built with durable industrial-grade construction, the sensor is suitable for transformer coil taping machines, electrical winding equipment, and other automated industrial machinery requiring dependable sensing and control.',
  mainImage: productImg40,
  images: [
    productImg40,
  ],
  features: [
    'Reliable sensing performance for industrial taping machine applications',
    'Accurate detection to support consistent tape application and machine operation',
    'Designed for integration with automated machine control systems',
    'Robust industrial-grade construction for demanding operating environments',
    'Compact design for convenient installation on compatible machinery',
    'Low-maintenance sensor solution for dependable long-term operation'
  ],
  applications: [
    'Industrial Taping Machines',
    'Transformer Coil Taping Equipment',
    'Electrical Coil & Winding Machinery',
    'Industrial Automation & Machine Control Systems'
  ],
  specifications: [
    { parameter: 'Minimum Order Quantity', unit: 'Units', value: '1 Unit' },
    { parameter: 'Product Type', unit: 'Type', value: 'Taping Machine Sensor' },
    { parameter: 'Model', unit: 'Model', value: 'SM-20' },
    { parameter: 'Application', unit: 'Type', value: 'Industrial Taping Machine' },
    { parameter: 'Sensor Type', unit: 'Type', value: 'Machine Detection Sensor' },
    { parameter: 'Installation', unit: 'Type', value: 'Machine Mounted' },
    { parameter: 'Construction', unit: 'Type', value: 'Industrial Grade' },
    { parameter: 'Maintenance', unit: 'Type', value: 'Low Maintenance' }
  ],
  highlights: [
    { label: 'Product', value: 'Taping Machine Sensor' },
    { label: 'Model', value: 'SM-20' },
    { label: 'Application', value: 'Taping Machine Control' }
  ],
  inStock: true,
  isHotProduct: true,
  warranty: '1 Year Warranty + Lifetime Technical Support',
  catalogPdfName: 'SMH_Taping_Machine_Sensor_SM_20_Catalog.pdf'
},

//41

{
  id: 'tapping-machine-controller-sm-19',
  name: 'Tapping Machine Controller SM-19',
  category: 'Tapping Machine Controller',
  model: 'SMH-SM-19',
  tagline: 'Reliable Industrial Controller for Precise Tapping Machine Operation & Control',
  description: 'Tapping Machine Controller SM-19 is designed to provide reliable control and monitoring of industrial tapping machine operations. It helps manage machine functions, operating sequences, and control parameters for consistent and efficient performance. Built with durable industrial-grade components, the controller is suitable for transformer manufacturing, electrical equipment, coil winding and tapping machines, and other automated industrial applications requiring dependable machine control.',
  mainImage: productImg41,
  images: [
    productImg41,
  ],
  features: [
    'Reliable control system for industrial tapping machine operation',
    'User-friendly control interface for convenient machine operation',
    'Supports consistent and repeatable machine operating sequences',
    'Designed for integration with compatible industrial machinery',
    'Robust industrial-grade construction for demanding environments',
    'Low-maintenance design for dependable long-term machine operation'
  ],
  applications: [
    'Transformer Tapping Machines',
    'Electrical Coil & Winding Machinery',
    'Industrial Automation & Machine Control',
    'Electrical Equipment Manufacturing'
  ],
  specifications: [
    { parameter: 'Minimum Order Quantity', unit: 'Units', value: '1 Unit' },
    { parameter: 'Product Type', unit: 'Type', value: 'Tapping Machine Controller' },
    { parameter: 'Model', unit: 'Model', value: 'SM-19' },
    { parameter: 'Application', unit: 'Type', value: 'Industrial Tapping Machine Control' },
    { parameter: 'Controller Type', unit: 'Type', value: 'Industrial Machine Controller' },
    { parameter: 'Control System', unit: 'Type', value: 'Electronic Machine Control' },
    { parameter: 'Installation', unit: 'Type', value: 'Machine / Control Panel Mounted' },
    { parameter: 'Maintenance', unit: 'Type', value: 'Low Maintenance' }
  ],
  highlights: [
    { label: 'Product', value: 'Tapping Machine Controller' },
    { label: 'Model', value: 'SM-19' },
    { label: 'Application', value: 'Tapping Machine Control' }
  ],
  inStock: true,
  isHotProduct: true,
  warranty: '1 Year Warranty + Lifetime Technical Support',
  catalogPdfName: 'SMH_Tapping_Machine_Controller_SM_19_Catalog.pdf'
},

{
  id: 'testing-jig-35',
  name: 'Testing Jig-35',
  category: 'Testing Jig',
  model: 'SMH-JIG-35',
  tagline: 'Precision Testing Jig for Reliable Industrial Component Testing & Inspection',
  description: 'Testing Jig-35 is designed to provide accurate positioning, secure holding, and repeatable testing of components during industrial inspection and quality-control operations. The jig helps maintain proper alignment during testing, reduces manual handling, and improves testing consistency. Built with durable industrial-grade construction, it is suitable for electrical equipment, transformer components, machine parts, and other industrial manufacturing applications requiring reliable testing and inspection.',
  mainImage: productImg42,
  images: [
    productImg42,
  ],
  features: [
    'Precision jig design for accurate component positioning during testing',
    'Provides secure and stable holding for repeatable inspection operations',
    'Helps improve testing accuracy and reduce manual handling',
    'Robust industrial-grade construction for demanding workshop environments',
    'Suitable for electrical and mechanical component testing applications',
    'Low-maintenance design for reliable long-term industrial use'
  ],
  applications: [
    'Electrical Component Testing',
    'Transformer & Coil Component Inspection',
    'Industrial Machine Part Testing',
    'Manufacturing Quality Control & Inspection'
  ],
  specifications: [
    { parameter: 'Minimum Order Quantity', unit: 'Units', value: '1 Unit' },
    { parameter: 'Product Type', unit: 'Type', value: 'Industrial Testing Jig' },
    { parameter: 'Model', unit: 'Model', value: 'JIG-35' },
    { parameter: 'Application', unit: 'Type', value: 'Industrial Testing & Inspection' },
    { parameter: 'Jig Type', unit: 'Type', value: 'Testing Jig' },
    { parameter: 'Construction', unit: 'Type', value: 'Heavy-Duty Industrial Grade' },
    { parameter: 'Operation', unit: 'Type', value: 'Manual Testing & Inspection' },
    { parameter: 'Maintenance', unit: 'Type', value: 'Low Maintenance' }
  ],
  highlights: [
    { label: 'Product', value: 'Testing Jig' },
    { label: 'Model', value: 'JIG-35' },
    { label: 'Application', value: 'Testing & Inspection' }
  ],
  inStock: true,
  isHotProduct: true,
  warranty: '1 Year Warranty + Lifetime Technical Support',
  catalogPdfName: 'SMH_Testing_Jig_35_Catalog.pdf'
},


{
  id: 'u-block-sensor',
  name: 'U Block Sensor',
  category: 'U Block Sensor',
  model: 'SMH-U-BLOCK-SENSOR',
  tagline: 'Reliable U Block Sensor for Accurate Industrial Machine Detection & Control',
  description: 'U Block Sensor is designed for reliable object detection, position sensing, and machine control applications in industrial equipment. Its compact design allows convenient installation on compatible machinery while providing consistent sensing performance during automated operations. Suitable for CNC machines, coil winding equipment, taping machines, and other industrial automation systems requiring accurate and dependable detection.',
  mainImage: productImg43,
  images: [
    productImg43,
  ],
  features: [
    'Reliable sensing performance for industrial machine applications',
    'Accurate object and position detection during automated operations',
    'Compact U block design for convenient machine installation',
    'Suitable for continuous-duty industrial automation applications',
    'Robust construction for demanding workshop environments',
    'Low-maintenance sensor solution for dependable long-term operation'
  ],
  applications: [
    'CNC Machine Tools & Equipment',
    'Coil Winding & Electrical Machinery',
    'Industrial Taping & Automation Machines',
    'Machine Position & Object Detection Systems'
  ],
  specifications: [
    { parameter: 'Minimum Order Quantity', unit: 'Units', value: '1 Unit' },
    { parameter: 'Product Type', unit: 'Type', value: 'U Block Sensor' },
    { parameter: 'Model', unit: 'Model', value: 'U-BLOCK-SENSOR' },
    { parameter: 'Application', unit: 'Type', value: 'Industrial Machine Detection' },
    { parameter: 'Sensor Type', unit: 'Type', value: 'U Block Detection Sensor' },
    { parameter: 'Installation', unit: 'Type', value: 'Machine Mounted' },
    { parameter: 'Construction', unit: 'Type', value: 'Industrial Grade' },
    { parameter: 'Maintenance', unit: 'Type', value: 'Low Maintenance' }
  ],
  highlights: [
    { label: 'Product', value: 'U Block Sensor' },
    { label: 'Type', value: 'Industrial Detection Sensor' },
    { label: 'Application', value: 'Machine Detection & Control' }
  ],
  inStock: true,
  isHotProduct: true,
  warranty: '1 Year Warranty + Lifetime Technical Support',
  catalogPdfName: 'SMH_U_Block_Sensor_Catalog.pdf'
},

{
  id: 'voice-coil-fixture-41',
  name: 'Voice Coil Fixture-41',
  category: 'Voice Coil Fixture',
  model: 'SMH-FIXTURE-41',
  tagline: 'Precision Voice Coil Fixture for Accurate Positioning & Industrial Assembly Applications',
  description: 'Voice Coil Fixture-41 is designed to provide accurate positioning, alignment, and secure holding of voice coil components during industrial assembly and manufacturing operations. The fixture helps maintain consistent component placement, improves assembly accuracy, and reduces manual handling. Built with durable industrial-grade construction, it is suitable for electrical components, coil assemblies, precision machinery, and other manufacturing applications requiring repeatable and reliable fixture performance.',
  mainImage: productImg44,
  images: [
    productImg44,
  ],
  features: [
    'Precision fixture design for accurate voice coil positioning and assembly',
    'Provides stable and secure component holding during manufacturing operations',
    'Helps improve assembly accuracy and repeatability',
    'Reduces manual handling and supports efficient production workflows',
    'Robust industrial-grade construction for long-term use',
    'Low-maintenance design suitable for continuous workshop operations'
  ],
  applications: [
    'Voice Coil & Electrical Component Assembly',
    'Industrial Coil Manufacturing',
    'Precision Machine Component Assembly',
    'Electrical & Automation Equipment Manufacturing'
  ],
  specifications: [
    { parameter: 'Minimum Order Quantity', unit: 'Units', value: '1 Unit' },
    { parameter: 'Product Type', unit: 'Type', value: 'Voice Coil Fixture' },
    { parameter: 'Model', unit: 'Model', value: 'FIXTURE-41' },
    { parameter: 'Application', unit: 'Type', value: 'Voice Coil & Industrial Assembly' },
    { parameter: 'Fixture Type', unit: 'Type', value: 'Precision Assembly Fixture' },
    { parameter: 'Construction', unit: 'Type', value: 'Heavy-Duty Industrial Grade' },
    { parameter: 'Operation', unit: 'Type', value: 'Manual Assembly Operation' },
    { parameter: 'Maintenance', unit: 'Type', value: 'Low Maintenance' }
  ],
  highlights: [
    { label: 'Product', value: 'Voice Coil Fixture' },
    { label: 'Model', value: 'FIXTURE-41' },
    { label: 'Application', value: 'Voice Coil Assembly' }
  ],
  inStock: true,
  isHotProduct: true,
  warranty: '1 Year Warranty + Lifetime Technical Support',
  catalogPdfName: 'SMH_Voice_Coil_Fixture_41_Catalog.pdf'
},


{
  id: 'voice-coil-fixture-41',
  name: 'Voice Coil Fixture-41',
  category: 'Voice Coil Fixture',
  model: 'SMH-FIXTURE-41',
  tagline: 'Precision Voice Coil Fixture for Accurate Positioning & Industrial Assembly Applications',
  description: 'Voice Coil Fixture-41 is designed to provide accurate positioning, alignment, and secure holding of voice coil components during industrial assembly and manufacturing operations. The fixture helps maintain consistent component placement, improves assembly accuracy, and reduces manual handling. Built with durable industrial-grade construction, it is suitable for electrical components, coil assemblies, precision machinery, and other manufacturing applications requiring repeatable and reliable fixture performance.',
  mainImage: productImg44,
  images: [
    productImg44,
  ],
  features: [
    'Precision fixture design for accurate voice coil positioning and assembly',
    'Provides stable and secure component holding during manufacturing operations',
    'Helps improve assembly accuracy and repeatability',
    'Reduces manual handling and supports efficient production workflows',
    'Robust industrial-grade construction for long-term use',
    'Low-maintenance design suitable for continuous workshop operations'
  ],
  applications: [
    'Voice Coil & Electrical Component Assembly',
    'Industrial Coil Manufacturing',
    'Precision Machine Component Assembly',
    'Electrical & Automation Equipment Manufacturing'
  ],
  specifications: [
    { parameter: 'Minimum Order Quantity', unit: 'Units', value: '1 Unit' },
    { parameter: 'Product Type', unit: 'Type', value: 'Voice Coil Fixture' },
    { parameter: 'Model', unit: 'Model', value: 'FIXTURE-41' },
    { parameter: 'Application', unit: 'Type', value: 'Voice Coil & Industrial Assembly' },
    { parameter: 'Fixture Type', unit: 'Type', value: 'Precision Assembly Fixture' },
    { parameter: 'Construction', unit: 'Type', value: 'Heavy-Duty Industrial Grade' },
    { parameter: 'Operation', unit: 'Type', value: 'Manual Assembly Operation' },
    { parameter: 'Maintenance', unit: 'Type', value: 'Low Maintenance' }
  ],
  highlights: [
    { label: 'Product', value: 'Voice Coil Fixture' },
    { label: 'Model', value: 'FIXTURE-41' },
    { label: 'Application', value: 'Voice Coil Assembly' }
  ],
  inStock: true,
  isHotProduct: true,
  warranty: '1 Year Warranty + Lifetime Technical Support',
  catalogPdfName: 'SMH_Voice_Coil_Fixture_41_Catalog.pdf'
},

{
  id: 'winding-fixtures-sm-31',
  name: 'Winding Fixtures SM-31',
  category: 'Winding Fixtures',
  model: 'SMH-SM-31',
  tagline: 'Precision Winding Fixtures for Accurate & Reliable Coil Winding Operations',
  description: 'Winding Fixtures SM-31 are designed to provide accurate positioning, secure holding, and stable support during coil winding operations. The fixtures help maintain proper alignment of winding components, improve repeatability, and reduce manual handling during production. Built with robust industrial-grade construction, they are suitable for transformer coil winding, electrical coil manufacturing, motor winding, and other industrial winding applications requiring precise and consistent fixture performance.',
  mainImage: productImg45,
  images: [
    productImg45,
  ],
  features: [
    'Precision fixture design for accurate coil positioning during winding operations',
    'Provides stable and secure component holding for consistent winding results',
    'Helps maintain proper alignment throughout the winding process',
    'Reduces manual handling and improves production efficiency',
    'Robust industrial-grade construction for continuous workshop operation',
    'Low-maintenance design for reliable long-term industrial use'
  ],
  applications: [
    'Transformer Coil Winding',
    'Electrical Coil & Motor Winding',
    'Automatic & CNC Winding Machines',
    'Industrial Coil Manufacturing & Assembly'
  ],
  specifications: [
    { parameter: 'Minimum Order Quantity', unit: 'Units', value: '1 Unit' },
    { parameter: 'Product Type', unit: 'Type', value: 'Winding Fixture' },
    { parameter: 'Model', unit: 'Model', value: 'SM-31' },
    { parameter: 'Application', unit: 'Type', value: 'Coil Winding & Assembly' },
    { parameter: 'Fixture Type', unit: 'Type', value: 'Industrial Winding Fixture' },
    { parameter: 'Construction', unit: 'Type', value: 'Heavy-Duty Industrial Grade' },
    { parameter: 'Operation', unit: 'Type', value: 'Manual / Machine Assisted' },
    { parameter: 'Maintenance', unit: 'Type', value: 'Low Maintenance' }
  ],
  highlights: [
    { label: 'Product', value: 'Winding Fixtures' },
    { label: 'Model', value: 'SM-31' },
    { label: 'Application', value: 'Coil Winding & Assembly' }
  ],
  inStock: true,
  isHotProduct: true,
  warranty: '1 Year Warranty + Lifetime Technical Support',
  catalogPdfName: 'SMH_Winding_Fixtures_SM_31_Catalog.pdf'
},

{
  id: 'winding-machine-bldc-control-sm-102',
  name: 'Winding Machine BLDC Control SM-102',
  category: 'Winding Machine BLDC Control',
  model: 'SMH-SM-102',
  tagline: 'Advanced BLDC Control Unit for Precise & Reliable Winding Machine Operation',
  description: 'Winding Machine BLDC Control SM-102 is designed for precise and reliable control of BLDC motors used in coil winding machines. It supports smooth motor operation, accurate speed control, and consistent winding performance during continuous production. Built with industrial-grade electronic components, this control unit is suitable for automatic and CNC winding machines used in transformer manufacturing, electrical coil production, motor winding, and industrial automation applications.',
  mainImage: productImg46,
  images: [
    productImg46,
  ],
  features: [
    'Dedicated BLDC motor control for automatic and CNC winding machines',
    'Precise speed control for consistent and uniform coil winding',
    'Smooth motor operation during continuous winding cycles',
    'Industrial-grade electronic construction for reliable performance',
    'Suitable for transformer, electrical coil, and motor winding equipment',
    'Compact and low-maintenance design for easy machine integration'
  ],
  applications: [
    'Automatic Coil Winding Machines',
    'CNC Transformer Coil Winding Machines',
    'Electrical Motor & Stator Winding Equipment',
    'Industrial BLDC Motor Control Systems'
  ],
  specifications: [
    { parameter: 'Minimum Order Quantity', unit: 'Units', value: '1 Unit' },
    { parameter: 'Product Type', unit: 'Type', value: 'Winding Machine BLDC Control' },
    { parameter: 'Model', unit: 'Model', value: 'SM-102' },
    { parameter: 'Application', unit: 'Type', value: 'Coil Winding Machine Control' },
    { parameter: 'Motor Compatibility', unit: 'Type', value: 'BLDC Motor' },
    { parameter: 'Control Type', unit: 'Type', value: 'Electronic BLDC Motor Control' },
    { parameter: 'Installation', unit: 'Type', value: 'Machine Control Panel' },
    { parameter: 'Maintenance', unit: 'Type', value: 'Low Maintenance' }
  ],
  highlights: [
    { label: 'Product', value: 'Winding Machine BLDC Control' },
    { label: 'Model', value: 'SM-102' },
    { label: 'Application', value: 'Coil Winding Machine Control' }
  ],
  inStock: true,
  isHotProduct: true,
  warranty: '1 Year Warranty + Lifetime Technical Support',
  catalogPdfName: 'SMH_Winding_Machine_BLDC_Control_SM_102_Catalog.pdf'
},



{
  id: 'winding-machine-dc-controller-sm-200a',
  name: 'Winding Machine DC Controller SM-200A',
  category: 'Winding Machine DC Controller',
  model: 'SMH-SM-200A',
  tagline: 'Industrial DC Controller for Precise & Reliable Winding Machine Operation',
  description: 'Winding Machine DC Controller SM-200A is designed to provide reliable and precise control of DC motors used in coil winding machines. It supports smooth motor operation, controlled speed adjustment, and consistent winding performance during continuous production. Built with industrial-grade electronic components, this controller is suitable for transformer coil winding, electrical coil manufacturing, motor winding, and other industrial machinery requiring dependable DC motor control.',
  mainImage: productImg47,
  images: [
    productImg47,
  ],
  features: [
    'Industrial DC motor controller designed for winding machine applications',
    'Precise speed control for consistent and uniform coil winding',
    'Smooth DC motor operation during continuous winding cycles',
    'Reliable electronic control system for stable machine performance',
    'Suitable for transformer, electrical coil, and motor winding equipment',
    'Robust and low-maintenance design for long-term industrial operation'
  ],
  applications: [
    'Automatic & CNC Coil Winding Machines',
    'Transformer Coil Winding Equipment',
    'Electrical Motor & Stator Winding Machines',
    'Industrial DC Motor Control Systems'
  ],
  specifications: [
    { parameter: 'Minimum Order Quantity', unit: 'Units', value: '1 Unit' },
    { parameter: 'Product Type', unit: 'Type', value: 'Winding Machine DC Controller' },
    { parameter: 'Model', unit: 'Model', value: 'SM-200A' },
    { parameter: 'Application', unit: 'Type', value: 'Coil Winding Machine Control' },
    { parameter: 'Motor Compatibility', unit: 'Type', value: 'DC Motor' },
    { parameter: 'Controller Type', unit: 'Type', value: 'DC Motor Controller' },
    { parameter: 'Installation', unit: 'Type', value: 'Machine Control Panel' },
    { parameter: 'Maintenance', unit: 'Type', value: 'Low Maintenance' }
  ],
  highlights: [
    { label: 'Product', value: 'Winding Machine DC Controller' },
    { label: 'Model', value: 'SM-200A' },
    { label: 'Application', value: 'Coil Winding Machine Control' }
  ],
  inStock: true,
  isHotProduct: true,
  warranty: '1 Year Warranty + Lifetime Technical Support',
  catalogPdfName: 'SMH_Winding_Machine_DC_Controller_SM_200A_Catalog.pdf'
},


{
  id: 'winding-machine-with-tail-stock',
  name: 'Winding Machine With Tail Stock',
  category: 'Winding Machine',
  model: 'SMH-WM-TAIL-STOCK',
  tagline: 'Heavy-Duty Winding Machine with Tail Stock for Precise & Stable Coil Winding',
  description: 'Winding Machine With Tail Stock is designed for stable, accurate, and efficient winding of electrical and industrial coils. The integrated tail stock provides additional support and stability for longer winding components, helping maintain proper alignment during operation. Built with a robust industrial-grade structure and reliable mechanical components, the machine is suitable for transformer coil winding, electrical coil manufacturing, motor winding, and other industrial winding applications.',
  mainImage: productImg48,
  images: [
    productImg48,
  ],
  features: [
    'Integrated tail stock provides additional support and stability during winding operations',
    'Rigid industrial machine structure for accurate and vibration-reduced winding',
    'Suitable for winding longer coils and cylindrical electrical components',
    'Reliable mechanical drive system for smooth and consistent winding operation',
    'Adjustable component support for improved alignment and winding accuracy',
    'Heavy-duty construction designed for continuous industrial production'
  ],
  applications: [
    'Transformer Coil Winding',
    'Electrical Coil & Motor Winding',
    'Industrial Component Winding',
    'Long Coil & Cylindrical Component Winding'
  ],
  specifications: [
    { parameter: 'Minimum Order Quantity', unit: 'Units', value: '1 Unit' },
    { parameter: 'Product Type', unit: 'Type', value: 'Industrial Winding Machine' },
    { parameter: 'Model', unit: 'Model', value: 'SMH-WM-TAIL-STOCK' },
    { parameter: 'Application', unit: 'Type', value: 'Electrical & Industrial Coil Winding' },
    { parameter: 'Support System', unit: 'Type', value: 'Tail Stock Support' },
    { parameter: 'Machine Construction', unit: 'Type', value: 'Heavy-Duty Industrial Grade' },
    { parameter: 'Operation', unit: 'Type', value: 'Motor Driven Winding' },
    { parameter: 'Maintenance', unit: 'Type', value: 'Low Maintenance' }
  ],
  highlights: [
    { label: 'Machine Type', value: 'Winding Machine' },
    { label: 'Support', value: 'Tail Stock' },
    { label: 'Application', value: 'Coil Winding' }
  ],
  inStock: true,
  isHotProduct: true,
  warranty: '1 Year Warranty + Lifetime Technical Support',
  catalogPdfName: 'SMH_Winding_Machine_With_Tail_Stock_Catalog.pdf'
},


{
  id: 'wire-enamel-remover-machine-roller-36',
  name: 'Wire Enamel Remover Machine Roller-36',
  category: 'Wire Enamel Remover Machine',
  model: 'SMH-ROLLER-36',
  tagline: 'Precision Wire Enamel Remover Machine for Fast & Reliable Electrical Wire Preparation',
  description: 'Wire Enamel Remover Machine Roller-36 is designed for efficient and consistent removal of enamel insulation from electrical wires before joining, soldering, or terminal connection. The roller-based mechanism provides controlled wire feeding and uniform enamel removal while helping maintain wire quality. Built with robust industrial-grade construction, the machine is suitable for transformer manufacturing, motor winding, electrical coil production, and other industrial wire preparation applications.',
  mainImage: productImg49,
  images: [
    productImg49,
  ],
  features: [
    'Roller-based wire feeding system for smooth and controlled operation',
    'Efficient removal of enamel insulation from electrical wires',
    'Consistent stripping performance for reliable electrical connections',
    'Adjustable and controlled operation for different wire preparation requirements',
    'Robust industrial-grade construction for continuous-duty applications',
    'Low-maintenance design for reliable long-term industrial operation'
  ],
  applications: [
    'Transformer Coil Manufacturing',
    'Electrical Motor & Stator Winding',
    'Enamelled Wire Preparation',
    'Electrical Coil & Winding Assembly'
  ],
  specifications: [
    { parameter: 'Minimum Order Quantity', unit: 'Units', value: '1 Unit' },
    { parameter: 'Product Type', unit: 'Type', value: 'Wire Enamel Remover Machine' },
    { parameter: 'Model', unit: 'Model', value: 'ROLLER-36' },
    { parameter: 'Application', unit: 'Type', value: 'Enamelled Wire Preparation' },
    { parameter: 'Removal System', unit: 'Type', value: 'Roller-Based Enamel Removal' },
    { parameter: 'Operation', unit: 'Type', value: 'Motor Driven' },
    { parameter: 'Construction', unit: 'Type', value: 'Heavy-Duty Industrial Grade' },
    { parameter: 'Maintenance', unit: 'Type', value: 'Low Maintenance' }
  ],
  highlights: [
    { label: 'Machine Type', value: 'Wire Enamel Remover Machine' },
    { label: 'Model', value: 'ROLLER-36' },
    { label: 'Application', value: 'Enamelled Wire Preparation' }
  ],
  inStock: true,
  isHotProduct: true,
  warranty: '1 Year Warranty + Lifetime Technical Support',
  catalogPdfName: 'SMH_Wire_Enamel_Remover_Machine_Roller_36_Catalog.pdf'
},


{
  id: 'wire-guide-with-margin-tape-attachment-sm-29',
  name: 'Wire Guide With Margin Tape Attachment SM-29',
  category: 'Wire Guide & Margin Tape Attachment',
  model: 'SMH-SM-29',
  tagline: 'Precision Wire Guide & Margin Tape Attachment for Accurate Coil Winding Applications',
  description: 'Wire Guide With Margin Tape Attachment SM-29 is designed to provide accurate wire guidance and controlled margin tape application during coil winding operations. The attachment helps maintain proper wire positioning while applying insulation or margin tape consistently along the winding surface. Built with durable industrial-grade components, it is suitable for transformer coil winding, electrical coil manufacturing, and automatic winding machines requiring precise wire guidance and reliable tape application.',
  mainImage: productImg50,
  images: [
    productImg50,
  ],
  features: [
    'Precision wire guide system for accurate and consistent wire positioning',
    'Integrated margin tape attachment for controlled insulation tape application',
    'Helps maintain uniform wire placement during coil winding operations',
    'Reduces manual intervention and improves winding production efficiency',
    'Robust industrial-grade construction for continuous machine operation',
    'Compact and low-maintenance attachment suitable for compatible winding machines'
  ],
  applications: [
    'Transformer Coil Winding Machines',
    'Electrical Coil & Motor Winding',
    'Automatic & CNC Winding Machinery',
    'Insulation & Margin Tape Application'
  ],
  specifications: [
    { parameter: 'Minimum Order Quantity', unit: 'Units', value: '1 Unit' },
    { parameter: 'Product Type', unit: 'Type', value: 'Wire Guide & Margin Tape Attachment' },
    { parameter: 'Model', unit: 'Model', value: 'SM-29' },
    { parameter: 'Application', unit: 'Type', value: 'Coil Winding & Tape Application' },
    { parameter: 'Guide Type', unit: 'Type', value: 'Wire Guide' },
    { parameter: 'Tape System', unit: 'Type', value: 'Margin Tape Attachment' },
    { parameter: 'Construction', unit: 'Type', value: 'Industrial Grade' },
    { parameter: 'Maintenance', unit: 'Type', value: 'Low Maintenance' }
  ],
  highlights: [
    { label: 'Product', value: 'Wire Guide & Margin Tape Attachment' },
    { label: 'Model', value: 'SM-29' },
    { label: 'Application', value: 'Coil Winding & Tape Application' }
  ],
  inStock: true,
  isHotProduct: true,
  warranty: '1 Year Warranty + Lifetime Technical Support',
  catalogPdfName: 'SMH_Wire_Guide_Margin_Tape_Attachment_SM_29_Catalog.pdf'
},

{
  id: 'wire-stand-sm-25',
  name: 'Wire Stand SM-25',
  category: 'Wire Stand',
  model: 'SMH-SM-25',
  tagline: 'Heavy-Duty Wire Stand for Stable & Organized Wire Handling During Coil Winding',
  description: 'Wire Stand SM-25 is designed to provide stable support and organized handling of wire during coil winding and electrical manufacturing operations. It helps maintain smooth wire feeding, reduces tangling, and keeps the wire properly positioned during machine operation. Built with durable industrial-grade construction, the stand is suitable for transformer coil winding, electrical wire processing, motor winding, and other industrial applications requiring reliable wire support.',
  mainImage: productImg51,
  images: [
    productImg51,
  ],
  features: [
    'Stable wire support for smooth and controlled wire feeding',
    'Helps prevent wire tangling and improves wire handling efficiency',
    'Heavy-duty industrial construction for continuous operation',
    'Suitable for different coil winding and electrical wire applications',
    'Provides organized wire positioning during machine operation',
    'Low-maintenance design for reliable long-term industrial use'
  ],
  applications: [
    'Transformer Coil Winding',
    'Electrical Coil & Motor Winding',
    'Wire Feeding & Handling Systems',
    'Industrial Wire Processing & Manufacturing'
  ],
  specifications: [
    { parameter: 'Minimum Order Quantity', unit: 'Units', value: '1 Unit' },
    { parameter: 'Product Type', unit: 'Type', value: 'Industrial Wire Stand' },
    { parameter: 'Model', unit: 'Model', value: 'SM-25' },
    { parameter: 'Application', unit: 'Type', value: 'Wire Handling & Coil Winding' },
    { parameter: 'Stand Type', unit: 'Type', value: 'Wire Support Stand' },
    { parameter: 'Construction', unit: 'Type', value: 'Heavy-Duty Industrial Grade' },
    { parameter: 'Operation', unit: 'Type', value: 'Manual Wire Support' },
    { parameter: 'Maintenance', unit: 'Type', value: 'Low Maintenance' }
  ],
  highlights: [
    { label: 'Product', value: 'Industrial Wire Stand' },
    { label: 'Model', value: 'SM-25' },
    { label: 'Application', value: 'Wire Handling & Coil Winding' }
  ],
  inStock: true,
  isHotProduct: true,
  warranty: '1 Year Warranty + Lifetime Technical Support',
  catalogPdfName: 'SMH_Wire_Stand_SM_25_Catalog.pdf'
},

];

export const CERTIFICATES: Certificate[] = [
  {
    id: 'gst-certificate',
    title: 'Government GST Registration Certificate (Form GST REG-06)',
    number: '07AFHFS7121Q1ZE',
    issuedBy: 'Goods and Services Tax Department, Govt. of India',
    validUntil: 'Permanent Active Registration (Issued 24/06/2024)',
    description: 'Official GST Registration Certificate for SHYAM MACHINE HOUSE (Partnership: Srishty Jain & Yash Sharma). Principal Place of Business: First Floor, 1/4717, Gali No 4 & 5 Balbir Nagar Extn, Near Durga Puri Chowk, Shahdara, New Delhi - 110032.',
    imageUrl: gstCertificateImg,
    category: 'GOVT GST',
    pdfUrl: gstCertificatePdf
  },

  {
    id: 'udyam-msme-certificate',
    title: 'Ministry of MSME Udyam Registration Certificate',
    number: 'UDYAM-DL-07-0015453',
    issuedBy: 'Ministry of Micro, Small & Medium Enterprises, Govt. of India',
    validUntil: 'Permanent Micro Enterprise Registration (Registered 21/02/2025)',
    description: 'Govt. of India MSME Certificate for SHYAM MACHINE HOUSE under NIC Codes 28170 (Manufacture of Office & Industrial Machinery) and 46593 (Wholesale of Electrical Machinery).',
    imageUrl: udyamCertificateImg,
    category: 'GOVT MSME',
    pdfUrl: udyamCertificatePdf
  }
];
// export const HOT_PRODUCTS: Product[] = PRODUCTS.filter(p => p.isHotProduct);

export const HOT_PRODUCTS: Product[] = PRODUCTS
  .filter(p => p.isHotProduct)
  .slice(0, 5);

export const TARGET_CITIES: TargetCity[] = [
  {
    id: 'delhi',
    name: 'DELHI',
    region: 'Delhi NCR',
    country: 'India',
    isInternational: false,
    title: 'Industrial Machinery Supplier in DELHI | Shyam Machine House New Delhi',
    description: 'Leading official manufacturer & supplier of All Geared Lathe Machines, CNC Coil Winders, Radial Drills, Milling Machines, Power Presses, and Soldering Pots in DELHI. Direct factory price, same-day site visits, GST 07AFHFS7121Q1ZE billing, and 100% on-site installation across Okhla, Mayapuri, Wazirpur, Bawana, Narela & Shahdara.',
    keywords: [
      'Industrial Machinery Supplier Delhi',
      'Lathe Machine Manufacturer Delhi',
      'CNC Coil Winding Machine Delhi',
      'Radial Drill Machine Price Delhi',
      'Power Press Supplier Delhi',
      'Soldering Pot Manufacturer Delhi',
      'Shyam Machine House Delhi',
      'Workshop Machinery Shahdara Delhi'
    ],
    industrialHubs: [
      'Okhla Industrial Area Ph-I & II',
      'Mayapuri Industrial Area Phase 1 & 2',
      'Wazirpur Industrial Area',
      'Bawana Industrial Area Sector 1-5',
      'Narela Industrial Estate',
      'Naraina Industrial Area Phase I & II',
      'Shahdara Balbir Nagar Industrial Hub'
    ],
    popularMachines: [
      '350 mm Automatic CNC Coil Winding Machine',
      '500 mm Heavy Duty Automatic Transformer CNC Coil Winding Machine',
      'Industrial Digital Temperature Controlled Soldering Pot',
      'All Geared Heavy Duty Lathe Machine',
      '50mm Heavy Duty Radial Drilling Machine'
    ],
    deliveryEstimate: 'Same Day / 24 Hours (Direct Factory Stockyard Dispatch)',
    seoBadges: [
      '#1 Ranked Delhi Machine Supplier',
      'Direct Factory Price Shahdara',
      '100% On-Site Installation Guarantee',
      'GST 07AFHFS7121Q1ZE Tax Invoice'
    ],
    metaGradients: 'from-orange-600 via-amber-600 to-red-700',
    heroHeadline: 'Prime Delhi Industrial Machinery Manufacturing Hub'
  },
  {
    id: 'noida',
    name: 'NOIDA',
    region: 'Uttar Pradesh / NCR',
    country: 'India',
    isInternational: false,
    title: 'Heavy Industrial Machinery Supplier in NOIDA | Sector 57, 58, 63, 80, 81 & Greater Noida',
    description: 'Official manufacturer supplier of CNC Coil Winders, Hydraulic Power Presses, All Geared Lathes, Surface Grinders, and Soldering Pots in NOIDA & Greater Noida EcoTech zones. Next-day direct transport, instant factory quotation, and expert technician commissioning.',
    keywords: [
      'Machine Tools Supplier Noida',
      'Lathe Machine Noida Sector 63',
      'Power Press Noida Sector 80',
      'CNC Coil Winder Noida',
      'Soldering Pot Supplier Noida',
      'Workshop Machinery Greater Noida EcoTech'
    ],
    industrialHubs: [
      'Noida Sector 57 & 58 Industrial Area',
      'Noida Sector 63 High-Tech Manufacturing Belt',
      'Noida Sector 80 & 81 Phase-II',
      'Greater Noida EcoTech I, II & III',
      'Surajpur Industrial Area'
    ],
    popularMachines: [
      '350 mm Automatic CNC Coil Winding Machine',
      'Heavy Duty Hydraulic Power Press (C-Frame)',
      'Industrial Digital Temperature Controlled Soldering Pot',
      'Universal Heavy Duty Milling Machine',
      'Automatic Hydraulic Band Saw Machine'
    ],
    deliveryEstimate: '1 Working Day (Direct Express Truck Delivery)',
    seoBadges: [
      '#1 Ranked Noida Industrial Supplier',
      'Express 24H Delivery Sector 63/80',
      'Instant GST Quotation',
      'Full Factory Warranty'
    ],
    metaGradients: 'from-blue-600 via-indigo-600 to-slate-900',
    heroHeadline: 'NOIDA & Greater Noida High-Precision Machinery Corridor'
  },
  {
    id: 'karnataka',
    name: 'KARNATAKA',
    region: 'South India',
    country: 'India',
    isInternational: false,
    title: 'Precision Industrial Machinery Supplier in KARNATAKA | Bangalore Peenya, Belagavi, Hubballi',
    description: 'Top industrial machine tool manufacturer & supplier for KARNATAKA. Supplying Peenya Industrial Estate, Bommasandra, Bidadi, Whitefield, Belagavi, Hubballi & Mysuru with CNC Coil Winders, Heavy Transformer Winders, Lathe Machines, Radial Drills, Milling Machines, and Soldering Baths.',
    keywords: [
      'Machine Tools Supplier Karnataka',
      'CNC Coil Winding Machine Bangalore',
      'Lathe Machine Manufacturer Peenya',
      'Soldering Pot Supplier Karnataka',
      'Radial Drill Machine Belagavi',
      'Power Press Supplier Hubballi'
    ],
    industrialHubs: [
      'Peenya Industrial Estate Phase I, II & III',
      'Bommasandra Industrial Area',
      'Bidadi Industrial Hub',
      'Whitefield & Hoskote Toolroom Belt',
      'Belagavi Auto Engineering Cluster',
      'Hubballi-Dharwad Industrial Corridor',
      'Mysuru Metagalli Industrial Estate'
    ],
    popularMachines: [
      '500 mm Heavy Duty Automatic Transformer CNC Coil Winding Machine',
      '250 mm Micro-Wire High Precision CNC Coil Winding Machine',
      'Industrial Digital Temperature Controlled Soldering Pot',
      'All Geared Heavy Duty Lathe Machine',
      'Precision Hydraulic Surface Grinding Machine'
    ],
    deliveryEstimate: '3-4 Working Days (Insured Direct Express Freight)',
    seoBadges: [
      '#1 Ranked Karnataka Tooling Supplier',
      'Peenya & Belagavi Fast Dispatch',
      '100% Calibrated Accuracy Grade-1',
      'Pan-Karnataka Technician Support'
    ],
    metaGradients: 'from-emerald-600 via-teal-700 to-cyan-900',
    heroHeadline: 'Karnataka Precision Engineering & Transformer Hub'
  },
  {
    id: 'tamil-nadu',
    name: 'TAMIL NADU',
    region: 'South India',
    country: 'India',
    isInternational: false,
    title: 'Industrial Machine Tools Supplier in TAMIL NADU | Chennai, Coimbatore, Hosur, Tiruchirappalli',
    description: 'Leading manufacturer & supplier of CNC Coil Winders, Transformer Coil Winding Machines, Heavy All Geared Lathes, Power Presses, Radial Drills, and Soldering Pots in TAMIL NADU. Direct supply to Sriperumbudur, Ambattur, Guindy, Coimbatore, Hosur, Trichy & Madurai with Grade-1 accuracy.',
    keywords: [
      'Machine Tools Supplier Tamil Nadu',
      'Lathe Machine Manufacturer Chennai',
      'CNC Coil Winder Supplier Coimbatore',
      'Power Press Supplier Hosur',
      'Radial Drill Sriperumbudur',
      'Soldering Pot Tamil Nadu'
    ],
    industrialHubs: [
      'Sriperumbudur Auto Ancillary Corridor',
      'Ambattur Industrial Estate',
      'Coimbatore Machinery & Motor Cluster',
      'Hosur SIPCOT Industrial Complex',
      'Guindy Industrial Estate',
      'Tiruchirappalli BHEL Vendor Zone',
      'Madurai Kappalur Industrial Estate'
    ],
    popularMachines: [
      '350 mm Automatic CNC Coil Winding Machine',
      '1000 mm Automatic Transformer Coil Winding Machine',
      'Heavy Duty Round Dip Soldering Pot',
      '50mm Heavy Duty Radial Drilling Machine',
      'Heavy Duty Hydraulic Power Press'
    ],
    deliveryEstimate: '4 Working Days (Direct Door-Step Transport)',
    seoBadges: [
      '#1 Ranked Tamil Nadu Supplier',
      'Coimbatore & Chennai Express Delivery',
      'GST Tax Invoice Verified',
      'CE Grade Machine Certification'
    ],
    metaGradients: 'from-amber-600 via-orange-600 to-red-800',
    heroHeadline: 'Tamil Nadu Electrical & Automotive Heavy Machinery Hub'
  },
  {
    id: 'maharashtra',
    name: 'MAHARASHTRA',
    region: 'West India',
    country: 'India',
    isInternational: false,
    title: 'Industrial Workshop Machinery Supplier in MAHARASHTRA | Mumbai, Pune, Chakan, Nashik, Aurangabad',
    description: 'Prime manufacturer & supplier of CNC Coil Winders, Transformer Coil Winding Machines, All Geared Lathes, Radial Drills, Milling Machines, Power Presses, and Soldering Pots in MAHARASHTRA. Serving Mumbai, Thane, Bhiwandi, Pune (Pimpri-Chinchwad, Chakan, Bhosari), Nashik, WALUJ Aurangabad, and Nagpur.',
    keywords: [
      'Machine Tools Supplier Maharashtra',
      'Lathe Machine Supplier Mumbai',
      'CNC Coil Winding Machine Pune',
      'Radial Drill Machine Chakan',
      'Power Press Supplier Nashik',
      'Soldering Pot Manufacturer Maharashtra',
      'Machine Tools Waluj Aurangabad'
    ],
    industrialHubs: [
      'Mumbai, Thane & Bhiwandi Industrial Belt',
      'Pimpri-Chinchwad & Chakan Auto Corridor',
      'Bhosari MIDC Pune',
      'Nashik Ambad & Satpur MIDC',
      'Aurangabad WALUJ & Shendra MIDC',
      'Nagpur Hingna Industrial Area',
      'Kolhapur Foundry & Engineering Hub'
    ],
    popularMachines: [
      '500 mm Heavy Duty Automatic Transformer CNC Coil Winding Machine',
      '350 mm Automatic CNC Coil Winding Machine',
      'Industrial Digital Temperature Controlled Soldering Pot',
      'All Geared Heavy Duty Lathe Machine',
      'Universal Heavy Duty Milling Machine'
    ],
    deliveryEstimate: '3-4 Working Days (Direct Express Highway Cargo)',
    seoBadges: [
      '#1 Ranked Maharashtra Machine Supplier',
      'Chakan & Mumbai Express Transit',
      'Grade-1 Quality Inspected',
      'On-Site Commissioning Guarantee'
    ],
    metaGradients: 'from-purple-700 via-indigo-800 to-slate-900',
    heroHeadline: 'Maharashtra Heavy Industrial & Transformer Machinery Corridor'
  },

  





  
];

export const YOUTUBE_VIDEOS: YouTubeVideo[] = [
  {
    id: 'yt-1',
    title: 'SHYAM MACHINE HOUSE - All Geared Heavy Duty Lathe Machine Live Cutting Test',
    youtubeId: 'L81M4G4d-1A',
    embedUrl: 'https://www.youtube.com/embed/L81M4G4d-1A',
    duration: '04:25',
    category: 'Lathe Machines',
    machineModel: 'SMH-AG-2000',
    views: '24.5K',
    description: 'Watch the Grade-1 induction hardened bedway All Geared Lathe Machine in high-speed steel turning operation at SHYAM MACHINE HOUSE factory floor in New Delhi.'
  },
  {
    id: 'yt-2',
    title: 'Heavy Radial Drilling Machine 62mm Capacity Live Tapping & Drilling Demo',
    youtubeId: 'b_M71v2lDSo',
    embedUrl: 'https://www.youtube.com/embed/b_M71v2lDSo',
    duration: '06:10',
    category: 'Drilling Machines',
    machineModel: 'SMH-RD-62',
    views: '18.2K',
    description: 'Demonstrating electro-hydraulic column clamping and 62mm heavy steel plate drilling on SHYAM MACHINE HOUSE RD-62 Radial Drilling Machine.'
  },
  {
    id: 'yt-3',
    title: 'Universal Milling Machine with 3-Axis DRO Setup & Gear Cutting Demo',
    youtubeId: '2b73u-P12eA',
    embedUrl: 'https://www.youtube.com/embed/2b73u-P12eA',
    duration: '05:40',
    category: 'Milling Machines',
    machineModel: 'SMH-UM-3',
    views: '15.8K',
    description: 'Detailed walkthrough of vertical and horizontal milling attachments, 3-axis digital readout, and precision gear cutting at SHYAM MACHINE HOUSE.'
  },
  {
    id: 'yt-4',
    title: '100 Ton Hydraulic C-Frame Power Press Metal Stamping & Sheet Forming',
    youtubeId: 'dQw4w9WgXcQ',
    embedUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    duration: '03:50',
    category: 'Power Presses',
    machineModel: 'SMH-PP-100',
    views: '12.1K',
    description: 'High pressure metal sheet stamping and deep drawing testing on SHYAM MACHINE HOUSE hydraulic C-frame power press.'
  },
  {
    id: 'yt-5',
    title: 'Precision Hydraulic Surface Grinder Machine Mirror Finish Demonstration',
    youtubeId: '8jP8CC2B4eA',
    embedUrl: 'https://www.youtube.com/embed/8jP8CC2B4eA',
    duration: '04:15',
    category: 'Grinding Machines',
    machineModel: 'SMH-SG-600',
    views: '9.4K',
    description: 'Achieving sub-micron tolerance and mirror finish surface grinding on hardened tool steel dies at SHYAM MACHINE HOUSE stockyard.'
  },
  {
    id: 'yt-6',
    title: 'Export Packaging & Dispatch to Dubai & Saudi Arabia - SHYAM MACHINE HOUSE',
    youtubeId: '1v_3eK8s7dQ',
    embedUrl: 'https://www.youtube.com/embed/1v_3eK8s7dQ',
    duration: '07:30',
    category: 'Factory Tour & Exports',
    machineModel: 'All Industrial Models',
    views: '31.0K',
    description: 'Behind the scenes at SHYAM MACHINE HOUSE New Delhi factory showing seaworthy wooden crate packaging and container loading for international shipment.'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-1',
    title: 'How to Choose the Right All-Geared Lathe Machine in 2026: Speeds, Swing & Bed Length',
    slug: 'choose-right-all-geared-lathe-machine-2026',
    date: 'August 01, 2026',
    readTime: '6 min read',
    author: 'Chief Engineering Team, SHYAM MACHINE HOUSE',
    category: 'Machinery Buying Guide',
    summary: 'Selecting an All-Geared Lathe Machine requires evaluating center height, swing over bed, spindle bore, and bed hardness. Discover how SHYAM MACHINE HOUSE Grade-1 lathes increase production efficiency by 35%.',
    content: `When upgrading or setting up an engineering machine shop in 2026, selecting the right **All Geared Heavy Duty Lathe Machine** is crucial for operational longevity and dimensional accuracy.

### 1. Bed Casting & Induction Hardening
A lathe machine's precision depends heavily on its bed structure. SHYAM MACHINE HOUSE lathe beds are manufactured from high-tensile 250 Grade cast iron with heavy diagonal cross-ribbing. The V-bedways undergo high-frequency induction hardening reaching 400-450 BHN, ensuring minimal wear even after years of continuous heavy turning.

### 2. Spindle Bore & Headstock Gear Train
For oil field pipe threading and long shaft turning, spindle bore size is key. SHYAM MACHINE HOUSE offers spindle bore diameters from 52mm up to 105mm. Headstock gears are machined from 20CrMnTi alloy steel, hardened and profile ground to guarantee smooth transmission and quiet operation up to 1200 RPM.

### 3. Metric & Inch Threading Versatility
Modern job shops require switching between Metric, Whitworth, Module, and Diametral threads. The quick-change feed gearbox on SHYAM MACHINE HOUSE lathes eliminates manual quadrant gear switching, saving hours of operator setup time.

### Key Takeaway for Workshop Owners
Investing in a Grade-1 ISO-certified All Geared Lathe from **SHYAM MACHINE HOUSE** ensures zero-vibration turning, low power consumption, and long-term resale value across pan-India and export markets.`,
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    tags: ['All Geared Lathe', 'Lathe Machine Guide', 'SHYAM MACHINE HOUSE', 'Workshop Tools', '2026 Guide']
  },
  {
    id: 'blog-2',
    title: 'Preventative Maintenance Checklist for Heavy Duty Radial Drilling Machines',
    slug: 'preventative-maintenance-radial-drilling-machines',
    date: 'July 24, 2026',
    readTime: '5 min read',
    author: 'After-Sales Service Dept, SHYAM MACHINE HOUSE',
    category: 'Maintenance & Service',
    summary: 'Extend the operational lifespan of your radial drill with daily column lubrication, hydraulic clamping checks, and spindle feed adjustments.',
    content: `Heavy Duty Radial Drilling Machines undergo intense torque when drilling large 40mm to 62mm holes in steel plates. Regular preventative maintenance prevents downtime and maintains drilling perpendicularity.

### Daily Maintenance Tasks
1. **Column & Sleeve Wipe Down**: Clean fine metal dust from the ground column surface and apply anti-rust sliding way oil.
2. **Oil Sight Glass Inspection**: Verify headstock and arm gearbox oil levels before turning on the spindle motor.

### Weekly & Monthly Inspections
- **Hydraulic Clamping Pressure**: Check pressure gauges on electro-hydraulic clamping models (like SMH-RD-50 and RD-62) to ensure firm grip during heavy feeds.
- **Spindle Taper Cleaning**: Inspect the MT-4/MT-5 spindle internal taper for metal chips that could cause drill bit runout.

### Service Support by SHYAM MACHINE HOUSE
SHYAM MACHINE HOUSE provides lifetime technical guidance and genuine spare parts dispatch within 24 hours across New Delhi, Mumbai, Dubai, and all 20 target market hubs.`,
    image: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80',
    tags: ['Radial Drill', 'Machine Maintenance', 'SHYAM MACHINE HOUSE', 'Industrial Safety']
  }
];

export const REVIEWS: CustomerReview[] = [
  {
    id: 'rev-1',
    customerName: 'Rajesh K. Sharma',
    company: 'Apex Precision Engineering Pvt Ltd',
    city: 'New Delhi',
    country: 'India',
    rating: 5,
    date: 'July 28, 2026',
    machineModel: 'All Geared Heavy Duty Lathe Machine (SMH-AG-2000)',
    reviewText: 'We purchased two All Geared Lathes from SHYAM MACHINE HOUSE for our auto components factory in GT Karnal Road. The bed hardness and spindle concentricity are excellent. Turning accuracy is within 0.01mm. Highly satisfied with their prompt Delhi service team!',
    verifiedPurchase: true
  },
  {
    id: 'rev-2',
    customerName: 'Tariq Al-Mansoor',
    company: 'Gulf Marine Repair & Fabrication LLC',
    city: 'Noida',
    country: 'India',
    rating: 5,
    date: 'July 15, 2026',
    machineModel: 'Heavy Duty Radial Drilling Machine (SMH-RD-62)',
    reviewText: 'Exported radial drill to Jebel Ali port through SHYAM MACHINE HOUSE. Excellent seaworthy wooden crate packaging and all electrical controls matched our 415V 50Hz requirement. The machine drills 60mm steel plates effortlessly.',
    verifiedPurchase: true
  },
  {
    id: 'rev-3',
    customerName: 'Suresh Patel',
    company: 'Maruti Toolings & Stamping Works',
    city: 'Faridabad',
    country: 'India',
    rating: 5,
    date: 'June 30, 2026',
    machineModel: '100 Ton Hydraulic C-Frame Power Press (SMH-PP-100)',
    reviewText: 'SHYAM MACHINE HOUSE delivered our 100 Ton Power Press within 3 days to our Faridabad unit. Build quality is rugged and hydraulic overload protection gives total safety to our dies.',
    verifiedPurchase: true
  },
  {
    id: 'rev-4',
    customerName: 'Vikram Singh',
    company: 'Shree Ram Engineering Works',
    city: 'Noida',
    country: 'India',
    rating: 5,
    date: 'June 18, 2026',
    machineModel: 'Universal Milling Machine (SMH-UM-3)',
    reviewText: 'The 3-axis Digital Readout (DRO) installed by SHYAM MACHINE HOUSE engineers makes gear cutting fast and error-free. Outstanding value for money compared to expensive imported mills.',
    verifiedPurchase: true
  },
  {
    id: 'rev-5',
    customerName: 'Amitabh Gupta',
    company: 'National Machine Tools Depot',
    city: 'Ahmedabad',
    country: 'India',
    rating: 5,
    date: 'May 22, 2026',
    machineModel: 'Precision Surface Grinder (SMH-SG-600)',
    reviewText: 'We have been buying lathe machines and surface grinders from SHYAM MACHINE HOUSE for over 12 years. Very transparent dealing, honest specs, and genuine Grade-1 machinery.',
    verifiedPurchase: true
  },
  {
    id: 'rev-6',
    customerName: 'shiva',
    company: 'Southern Cross Metalworks',
    city: 'Karnatka',
    country: 'India',
    rating: 5,
    date: 'May 04, 2026',
    machineModel: 'Heavy Duty Shaping Machine (SMH-SH-24)',
    reviewText: 'Outstanding experience ordering from SHYAM MACHINE HOUSE India. Communication via WhatsApp was super fast, and video pre-dispatch testing gave us total confidence.',
    verifiedPurchase: true
  }
];
