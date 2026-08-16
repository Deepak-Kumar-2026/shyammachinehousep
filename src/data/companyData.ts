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
const productImg20 = '/images/productsimg/20.webp';
const productImg19 = '/images/productsimg/19.webp';


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
    { label: 'Global Destinations', value: '25+ Countries' },
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
  }





  
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
    city: 'Dubai',
    country: 'UAE',
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
    customerName: 'David H. Thompson',
    company: 'Southern Cross Metalworks',
    city: 'Melbourne',
    country: 'Australia',
    rating: 5,
    date: 'May 04, 2026',
    machineModel: 'Heavy Duty Shaping Machine (SMH-SH-24)',
    reviewText: 'Outstanding experience ordering from SHYAM MACHINE HOUSE India. Communication via WhatsApp was super fast, and video pre-dispatch testing gave us total confidence.',
    verifiedPurchase: true
  }
];
