import { Product, Certificate, TargetCity, YouTubeVideo, BlogPost, CustomerReview } from '../types';
const cncCoilWindingImg = '/images/cnc_coil_winding_machine_1785992183980.jpg';

const cnc350mmImg = '/images/cnc_350mm_winder_1786085787974.jpg';

const cncToroidalImg = '/images/cnc_toroidal_winder_1786085804018.jpg';

const cncMultiSpindleImg = '/images/cnc_multi_spindle_1786085817162.jpg';

const cncHeavyTransformerImg = '/images/cnc_heavy_transformer_1786085830077.jpg';

const smhLogoImg = '/images/smh_brand_logo_1785994135291.jpg';

const smhSolderingPotImg = '/images/smh_soldering_pot.jpg';

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
    name: '350 mm Automatic CNC Coil Winding Machine',
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
    id: '250mm-micro-wire-cnc-coil-winding-machine',
    name: '250 mm Automatic Micro-Wire CNC Coil Winding Machine',
    category: 'CNC Coil Winding Machine',
    model: 'SMH-CNC-CW-250',
    tagline: 'Ultra Precision High Speed Winder for Fine Electrical Coils & Bobbins',
    description: 'High-speed automated micro-wire CNC winding machine engineered for small transformer bobbins, solenoids, relays, and fine gauge electronic inductors. Features high-frequency spindle rotation with micro-step tension control for zero wire snap operation.',
    mainImage: cnc350mmImg,
    images: [
      cnc350mmImg,
      cncMultiSpindleImg
    ],
    features: [
      'Micro-step servo wire traverse guide for ultra-fine wire layering (down to 0.02 mm)',
      'Digital tension controller prevents wire stretch and insulation damage',
      '99 program memory with multi-step winding profiles (speed ramps, turns, pitch)',
      'Compact benchtop vibration-damped cabinet'
    ],
    applications: [
      'Electronic PCB Pulse Transformers',
      'High Frequency Switching Transformers',
      'Telecom Relays & Sensor Coils'
    ],
    specifications: [
      { parameter: 'Minimum Order Quantity', unit: 'Units', value: '1 Unit' },
      { parameter: 'Axis Control', unit: 'Axis', value: '2 Axis Micro-Step' },
      { parameter: 'Max Wire Diameter', unit: 'mm', value: '0.02 - 0.2 mm' },
      { parameter: 'Max Coil Outer Diameter (OD)', unit: 'mm', value: '250 mm' },
      { parameter: 'Machine Application', unit: 'Type', value: 'High Frequency & Relay Coils' },
      { parameter: 'Program Storage Capacity', unit: 'Programs', value: '99 Memory Programs' },
      { parameter: 'Display Type', unit: 'Interface', value: 'Digital Microcontroller HMI' },
      { parameter: 'Automation Grade', unit: 'Type', value: 'Fully Automatic' }
    ],
    highlights: [
      { label: 'Wire Range', value: '0.02 to 0.2 mm Fine Wire' },
      { label: 'Max OD', value: '250 mm Bobbin Size' },
      { label: 'Control', value: '99 Multi-Step Programs' }
    ],
    inStock: true,
    warranty: '1 Year Warranty + Onsite Installation',
    catalogPdfName: 'SMH_Micro_Wire_Coil_Winding_250mm.pdf'
  },
  // {
  //   id: '500mm-heavy-duty-automatic-transformer-cnc-coil-winding-machine',
  //   name: 'Sleeve cutting machine',
  //   category: 'Transformer Coil Winding Machine',
  //   model: 'SMH-CNC-CW-500',
  //   tagline: 'High Torque 2-Axis CNC Winding Machine for Heavy Power & Distribution Transformers',
  //   description: 'Sleeve cutting machine delivers fast, precise, and consistent cutting of sleeves, ensuring smooth edges, accurate dimensions, reduced material waste, and efficient production for various industrial applications.',
  //   mainImage: cncHeavyTransformerImg,
  //   images: [
  //     cncHeavyTransformerImg,
  //     cnc350mmImg
  //   ],
  //   features: [
  //     'Heavy torque geared spindle motor with vector frequency drive',
  //     'Pneumatic tailstock with dynamic balance tail-pin center',
  //     'Integrated insulation paper tape applicator',
  //     '7-inch Color Touch Screen HMI with graphical coil pattern builder'
  //   ],
  //   applications: [
  //     'Power Distribution Transformers (HV & LV Coils)',
  //     'Heavy Duty Industrial Magnet Coils',
  //     'Substation Inductors & Reactor Units'
  //   ],
  //   specifications: [
  //     { parameter: 'Minimum Order Quantity', unit: 'Units', value: '1 Unit' },
  //     { parameter: 'Axis Control', unit: 'Axis', value: '2 Axis Heavy Servo' },
  //     { parameter: 'Max Wire Diameter', unit: 'mm', value: '0.5 - 3.0 mm (Heavy Wire / Strip)' },
  //     { parameter: 'Max Coil Outer Diameter (OD)', unit: 'mm', value: '500 mm' },
  //     { parameter: 'Machine Application', unit: 'Type', value: 'Power Transformer HV/LV Coils' },
  //     { parameter: 'Program Storage Capacity', unit: 'Programs', value: '100 Memory Programs' },
  //     { parameter: 'Display Type', unit: 'Interface', value: '7-Inch Color Touch Screen HMI' },
  //     { parameter: 'Automation Grade', unit: 'Type', value: 'Fully Automatic' }
  //   ],
  //   highlights: [
  //     { label: 'Torque', value: 'High Torque Servo Drive' },
  //     { label: 'Max OD', value: '500 mm Power Coils' },
  //     { label: 'Capacity', value: 'Up to 3.0 mm Thick Wire' }
  //   ],
  //   inStock: true,
  //   isHotProduct: true,
  //   warranty: '1 Year Warranty + Free Engineer Onsite Setup',
  //   catalogPdfName: 'SMH_Heavy_Transformer_Winder_500mm.pdf'
  // },


  {
  id: 'sleeve-cutting-machine-sm-sl100',
  name: 'Sleeve Cutting Machine',
  category: 'Sleeve Cutting Machine',
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
    id: '200mm-automatic-cnc-coil-winding-machine',
    name: '200 mm Automatic CNC Coil Winding Machine',
    category: 'CNC Coil Winding Machine',
    model: 'SMH-CNC-CW-200',
    tagline: 'High Speed Compact 2-Axis CNC Coil Winder for Small Transformers & Chokes',
    description: '200 mm Automatic CNC Coil Winding Machine engineered for compact bobbin sizes, small relay coils, solenoid valves, and power adaptors. Features electronic pitch adjustment and synchronized wire traverse guide.',
    mainImage: cnc350mmImg,
    images: [
      cnc350mmImg,
      cncMultiSpindleImg
    ],
    features: [
      'Precision step motor wire guide for layer-by-layer uniform winding',
      'Microprocessor controller with digital LED turn counter',
      'Programmable winding speed, pitch, and deceleration ramps',
      'High efficiency low energy consumption design'
    ],
    applications: [
      'Small Power Adaptor Transformers',
      'Solenoid Valves & Relay Coils',
      'Chokes & EMI Filter Inductors'
    ],
    specifications: [
      { parameter: 'Minimum Order Quantity', unit: 'Units', value: '1 Unit' },
      { parameter: 'Axis Control', unit: 'Axis', value: '2 Axis Synchronized' },
      { parameter: 'Max Wire Diameter', unit: 'mm', value: '0.05 - 0.8 mm' },
      { parameter: 'Max Coil Outer Diameter (OD)', unit: 'mm', value: '200 mm' },
      { parameter: 'Machine Application', unit: 'Type', value: 'Small Transformer & Bobbin Coils' },
      { parameter: 'Program Storage Capacity', unit: 'Programs', value: '50 Memory Programs' },
      { parameter: 'Display Type', unit: 'Interface', value: 'Digital Microprocessor Panel' },
      { parameter: 'Automation Grade', unit: 'Type', value: 'Automatic' }
    ],
    highlights: [
      { label: 'Coil Diameter', value: '200 mm Max OD' },
      { label: 'Wire Range', value: '0.05 to 0.8 mm' },
      { label: 'Speed', value: 'Up to 3000 RPM' }
    ],
    inStock: true,
    warranty: '1 Year Warranty',
    catalogPdfName: 'SMH_CNC_Coil_Winding_200mm.pdf'
  },
  {
    id: '300mm-automatic-cnc-coil-winding-machine',
    name: '300 mm Automatic CNC Coil Winding Machine',
    category: 'CNC Coil Winding Machine',
    model: 'SMH-CNC-CW-300',
    tagline: 'Multi-Layer Precision 300mm CNC Coil Winder with Automatic Layer Stop',
    description: '300 mm Automatic CNC Coil Winding Machine designed for medium sized electrical transformer coils, motor field coils, and industrial inductors with high repeat accuracy and smooth tensioning.',
    mainImage: cnc350mmImg,
    images: [
      cnc350mmImg,
      cncHeavyTransformerImg
    ],
    features: [
      'Dual-axis synchronized motion for zero overlap winding',
      'Programmable layer pause for insulation paper insertion',
      'Heavy cast iron base with vibration damping mounts',
      'User-friendly memory recall for up to 99 coil recipes'
    ],
    applications: [
      'Medium Distribution Transformers',
      'Industrial Stator & Field Winding',
      'Inverter Transformers'
    ],
    specifications: [
      { parameter: 'Minimum Order Quantity', unit: 'Units', value: '1 Unit' },
      { parameter: 'Axis Control', unit: 'Axis', value: '2 Axis CNC' },
      { parameter: 'Max Wire Diameter', unit: 'mm', value: '0.1 - 1.2 mm' },
      { parameter: 'Max Coil Outer Diameter (OD)', unit: 'mm', value: '300 mm' },
      { parameter: 'Program Storage Capacity', unit: 'Programs', value: '99 Memory Programs' },
      { parameter: 'Display Type', unit: 'Interface', value: 'HMI Touch Screen' },
      { parameter: 'Automation Grade', unit: 'Type', value: 'Automatic' }
    ],
    highlights: [
      { label: 'Coil OD', value: '300 mm Diameter' },
      { label: 'Memory', value: '99 Program Recipes' },
      { label: 'Feature', value: 'Auto Layer Insulation Pause' }
    ],
    inStock: true,
    warranty: '1 Year Warranty',
    catalogPdfName: 'SMH_CNC_Coil_Winding_300mm.pdf'
  },
  {
    id: '150mm-high-speed-multi-spindle-cnc-coil-winding-machine',
    name: '150 mm High Speed Multi-Spindle CNC Coil Winding Machine',
    category: 'CNC Coil Winding Machine',
    model: 'SMH-CNC-CW-150',
    tagline: 'Ultra High Speed Multi-Spindle Winder for Mass Bobbin Production',
    description: '150 mm High Speed Multi-Spindle CNC Coil Winding Machine built for high-volume automated production of electronic components, bobbin coils, and ignition coils.',
    mainImage: cncMultiSpindleImg,
    images: [
      cncMultiSpindleImg,
      cnc350mmImg
    ],
    features: [
      'High rpm spindle drive up to 6000 RPM',
      'Precision tensioner array with tension meter gauges',
      'Automatic wire wrapping, clipping, and stripping options',
      'Multi-spindle synchronous winding for maximum hourly output'
    ],
    applications: [
      'Automotive Ignition Coils',
      'SMPS Transformers & Bobbins',
      'Telecom Filter Chokes'
    ],
    specifications: [
      { parameter: 'Minimum Order Quantity', unit: 'Units', value: '1 Unit' },
      { parameter: 'Axis Control', unit: 'Axis', value: '2 / 4 Axis Multi-Spindle' },
      { parameter: 'Max Wire Diameter', unit: 'mm', value: '0.02 - 0.4 mm' },
      { parameter: 'Max Coil Outer Diameter (OD)', unit: 'mm', value: '150 mm' },
      { parameter: 'Spindle Speed', unit: 'RPM', value: '0 - 6000 RPM' },
      { parameter: 'Automation Grade', unit: 'Type', value: 'Fully Automatic' }
    ],
    highlights: [
      { label: 'RPM', value: '6000 RPM High Speed' },
      { label: 'Coil OD', value: '150 mm Bobbin Size' },
      { label: 'Output', value: 'Mass Production Multi-Spindle' }
    ],
    inStock: true,
    warranty: '1 Year Warranty',
    catalogPdfName: 'SMH_High_Speed_Coil_Winder_150mm.pdf'
  },
  {
    id: 'semi-automatic-cnc-coil-winding-machine',
    name: 'Semi-Automatic CNC Coil Winding Machine',
    category: 'CNC Coil Winding Machine',
    model: 'SMH-CNC-CW-SEMI',
    tagline: 'Versatile Cost-Effective CNC Coil Winder with Foot Pedal Control',
    description: 'Semi-Automatic CNC Coil Winding Machine combining digital traverse control with manual loading for versatile custom transformer and coil repair workshops.',
    mainImage: cnc350mmImg,
    images: [
      cnc350mmImg,
      cncMultiSpindleImg
    ],
    features: [
      'Foot pedal speed acceleration and emergency brake',
      'Digital turns preset counter with automatic stop',
      'Reversible spindle direction for forward and reverse winding',
      'Sturdy steel construction with easy wire loading'
    ],
    applications: [
      'Motor Rewinding Workshops',
      'Custom Transformer Repair',
      'Maintenance & Prototyping Labs'
    ],
    specifications: [
      { parameter: 'Minimum Order Quantity', unit: 'Units', value: '1 Unit' },
      { parameter: 'Axis Control', unit: 'Axis', value: 'CNC Traverse + Manual Spindle' },
      { parameter: 'Max Wire Diameter', unit: 'mm', value: '0.1 - 2.5 mm' },
      { parameter: 'Max Coil Outer Diameter (OD)', unit: 'mm', value: '350 mm' },
      { parameter: 'Automation Grade', unit: 'Type', value: 'Semi-Automatic' }
    ],
    highlights: [
      { label: 'Operation', value: 'Foot Pedal + Digital Controller' },
      { label: 'Flexibility', value: 'Ideal for Rewinding & Repairs' },
      { label: 'Wire Gauge', value: '0.1 to 2.5 mm Heavy Wire' }
    ],
    inStock: true,
    warranty: '1 Year Warranty',
    catalogPdfName: 'SMH_Semi_Automatic_Coil_Winder.pdf'
  },
  {
    id: 'double-spindle-cnc-coil-winding-machine',
    name: 'Double Spindle CNC Coil Winding Machine',
    category: 'CNC Coil Winding Machine',
    model: 'SMH-CNC-CW-2SP',
    tagline: 'Dual Station Simultaneous CNC Winder Doubling Production Output',
    description: 'Double Spindle CNC Coil Winding Machine engineered with two synchronized winding spindles powered by a common precision CNC wire traverse guide, doubling output for bobbins and relays.',
    mainImage: cncMultiSpindleImg,
    images: [
      cncMultiSpindleImg,
      cnc350mmImg
    ],
    features: [
      'Twin synchronized spindles for parallel coil production',
      'Individual wire tensioners for each spindle',
      'CNC wire traverse pitch controller',
      'High accuracy turn count sensor'
    ],
    applications: [
      'Dual Relay Coils',
      'Dual Solenoids & Valves',
      'Commercial Transformer Bobbins'
    ],
    specifications: [
      { parameter: 'Minimum Order Quantity', unit: 'Units', value: '1 Unit' },
      { parameter: 'Spindles', unit: 'Qty', value: '2 Synchronized Spindles' },
      { parameter: 'Max Wire Diameter', unit: 'mm', value: '0.05 - 0.6 mm' },
      { parameter: 'Max Coil Outer Diameter (OD)', unit: 'mm', value: '180 mm' },
      { parameter: 'Automation Grade', unit: 'Type', value: 'Automatic Dual Station' }
    ],
    highlights: [
      { label: 'Spindles', value: 'Dual Spindle 2X Productivity' },
      { label: 'Coil OD', value: '180 mm Per Spindle' },
      { label: 'Control', value: 'Synchronized CNC Traverse' }
    ],
    inStock: true,
    warranty: '1 Year Warranty',
    catalogPdfName: 'SMH_Double_Spindle_Coil_Winder.pdf'
  },
  // {
  //   id: 'automatic-toroidal-core-cnc-coil-winding-machine',
  //   name: 'Soldering Machine',
  //   category: 'CNC Coil Winding Machine',
  //   model: 'SMH-CNC-TOR-150',
  //   tagline: '360° Synchronized Shuttle Rotation Machine for Ring & Toroidal Transformer Coils',
  //   description: 'Soldering machine provides fast, reliable, and precise soldering for electrical components, ensuring strong connections, consistent quality, reduced processing time, and efficient performance in industrial manufacturing applications.',
  //   mainImage: cncToroidalImg,
  //   images: [
  //     cncToroidalImg,
  //     cnc350mmImg
  //   ],
  //   features: [
  //     'Precision ring shuttle drive with quick swap magazine size',
  //     '360-degree digital indexing core rotation controller',
  //     'Photoelectric sensor turn counter for 100% turn accuracy',
  //     'Adjustable pitch angle control for uniform ring coverage'
  //   ],
  //   applications: [
  //     'Toroidal Power Transformers',
  //     'Current Transformers (CT Coils)',
  //     'EMI Filter Ring Chokes'
  //   ],
  //   specifications: [
  //     { parameter: 'Minimum Order Quantity', unit: 'Units', value: '1 Unit' },
  //     { parameter: 'Axis Control', unit: 'Axis', value: '3 Axis Toroidal Indexing' },
  //     { parameter: 'Max Wire Diameter', unit: 'mm', value: '0.15 - 1.2 mm' },
  //     { parameter: 'Max Coil Outer Diameter (OD)', unit: 'mm', value: '150 mm Finished Toroid' },
  //     { parameter: 'Machine Application', unit: 'Type', value: 'Toroidal Core & Ring Coils' },
  //     { parameter: 'Program Storage Capacity', unit: 'Programs', value: '50 Memory Programs' },
  //     { parameter: 'Display Type', unit: 'Interface', value: 'Digital Microcontroller' },
  //     { parameter: 'Automation Grade', unit: 'Type', value: 'Automatic' }
  //   ],
  //   highlights: [
  //     { label: 'Core Type', value: 'Toroidal & Ring Core Winding' },
  //     { label: 'Turns Accuracy', value: '100% Photoelectric Sensor' },
  //     { label: 'Rotation', value: '360° Precision Core Drive' }
  //   ],
  //   inStock: true,
  //   isHotProduct: true,
  //   warranty: '1 Year Warranty + Lifetime Support',
  //   catalogPdfName: 'SMH_Toroidal_Coil_Winder_Catalog.pdf'
  // },


  {
  id: 'automatic-angular-soldering-machine-sm-02aas',
  name: 'Soldering Machine',
  category: 'Soldering Machine',
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
    id: 'voice-coil-speaker-cnc-coil-winding-machine',
    name: 'Voice Coil & Speaker CNC Coil Winding Machine',
    category: 'CNC Coil Winding Machine',
    model: 'SMH-CNC-CW-SPK',
    tagline: 'Precision High Frequency Voice Coil & Speaker Bobbin Winding Machine',
    description: 'Voice Coil & Speaker CNC Coil Winding Machine specially designed for self-bonding copper and aluminum wire used in speaker voice coils, audio transducers, and buzzers with precise layer control.',
    mainImage: cncMultiSpindleImg,
    images: [
      cncMultiSpindleImg,
      cnc350mmImg
    ],
    features: [
      'Hot-air or solvent self-bonding wire unit integration',
      'Micro-step traverse positioning down to 0.001 mm pitch',
      'High speed spindle up to 8000 RPM for fast cycle times',
      'Non-contact optical tension monitoring'
    ],
    applications: [
      'Loudspeaker Voice Coils',
      'Headphone & Earphone Transducers',
      'Buzzer & Piezo Sounder Coils'
    ],
    specifications: [
      { parameter: 'Minimum Order Quantity', unit: 'Units', value: '1 Unit' },
      { parameter: 'Wire Type', unit: 'Material', value: 'Self-Bonding Wire (Copper/Aluminium)' },
      { parameter: 'Max Wire Diameter', unit: 'mm', value: '0.02 - 0.35 mm' },
      { parameter: 'Max Coil Outer Diameter (OD)', unit: 'mm', value: '100 mm' },
      { parameter: 'Spindle Speed', unit: 'RPM', value: '0 - 8000 RPM' },
      { parameter: 'Automation Grade', unit: 'Type', value: 'Automatic' }
    ],
    highlights: [
      { label: 'Application', value: 'Audio Speaker & Voice Coils' },
      { label: 'Bonding', value: 'Hot Air / Solvent Self-Bonding' },
      { label: 'Speed', value: '8000 RPM Precision Spindle' }
    ],
    inStock: true,
    warranty: '1 Year Warranty',
    catalogPdfName: 'SMH_Voice_Coil_Winder.pdf'
  },
  {
    id: '1000mm-automatic-transformer-coil-winding-machine',
    name: '1000 mm Automatic Transformer Coil Winding Machine',
    category: 'Transformer Coil Winding Machine',
    model: 'SMH-TR-CW-1000',
    tagline: 'Heavy Industrial 1000mm Capacity Transformer Winder for Power Utilities',
    description: 'Heavy Industrial 1000 mm Automatic Transformer Coil Winding Machine built for massive high-voltage transformer coils, distribution transformers, and heavy reactors with motorized tailstock and heavy copper strip winding support.',
    mainImage: cncHeavyTransformerImg,
    images: [
      cncHeavyTransformerImg,
      cnc350mmImg
    ],
    features: [
      'Heavy duty 10 HP geared spindle drive motor',
      'Motorized heavy tailstock with live center support',
      'Multi-ribbed heavy steel frame for high load stability',
      'Automated paper insulation layer feeder option'
    ],
    applications: [
      'High Voltage Power Transformers',
      'Substation Utility Transformers',
      'Heavy Duty Industrial Chokes'
    ],
    specifications: [
      { parameter: 'Minimum Order Quantity', unit: 'Units', value: '1 Unit' },
      { parameter: 'Max Coil Outer Diameter (OD)', unit: 'mm', value: '1000 mm' },
      { parameter: 'Max Wire / Strip Capacity', unit: 'mm', value: 'Up to 5.0 mm Wire / Copper Strip' },
      { parameter: 'Center Distance', unit: 'mm', value: '1200 mm' },
      { parameter: 'Spindle Motor', unit: 'HP', value: '10 HP Vector Drive' },
      { parameter: 'Automation Grade', unit: 'Type', value: 'Automatic Heavy Duty' }
    ],
    highlights: [
      { label: 'Capacity', value: '1000 mm Massive Coil OD' },
      { label: 'Strip Winding', value: 'Up to 5.0 mm Copper Strip' },
      { label: 'Motor', value: '10 HP Heavy Geared Drive' }
    ],
    inStock: true,
    warranty: '1 Year Warranty + Onsite Commissioning',
    catalogPdfName: 'SMH_Transformer_Winder_1000mm.pdf'
  },
  {
    id: '800mm-automatic-heavy-duty-transformer-winding-machine',
    name: '800 mm Automatic Transformer Coil Winding Machine',
    category: 'Transformer Coil Winding Machine',
    model: 'SMH-TR-CW-800',
    tagline: 'High Torque Synchronized 800mm Transformer Winder for Distribution Coils',
    description: '800 mm Automatic Transformer Coil Winding Machine engineered for high voltage and low voltage distribution transformer coils with precision wire layer control and heavy copper strip guide.',
    mainImage: cncHeavyTransformerImg,
    images: [
      cncHeavyTransformerImg,
      cnc350mmImg
    ],
    features: [
      'Heavy duty gear box with dynamic brake mechanism',
      'Digital LED turns counter with preset slowdown and auto-stop',
      'Pneumatic tailstock center support for high stability',
      'Heavy iron cast frame for vibration-free continuous operation'
    ],
    applications: [
      'Distribution Transformer HV & LV Winding',
      'Industrial Reactors & Inverter Inductors',
      'Heavy Electrical Coil Manufacturing'
    ],
    specifications: [
      { parameter: 'Minimum Order Quantity', unit: 'Units', value: '1 Unit' },
      { parameter: 'Max Coil Outer Diameter (OD)', unit: 'mm', value: '800 mm' },
      { parameter: 'Max Wire Gauge', unit: 'mm', value: '0.5 - 4.0 mm Wire / Copper Strip' },
      { parameter: 'Spindle Motor', unit: 'HP', value: '7.5 HP Variable Speed Drive' },
      { parameter: 'Automation Grade', unit: 'Type', value: 'Automatic' }
    ],
    highlights: [
      { label: 'Capacity', value: '800 mm Coil OD' },
      { label: 'Motor', value: '7.5 HP Geared Vector Drive' },
      { label: 'Control', value: 'Digital Turn Counter & Auto-Stop' }
    ],
    inStock: true,
    warranty: '1 Year Warranty',
    catalogPdfName: 'SMH_Transformer_Winder_800mm.pdf'
  },
//   {
//     id: 'industrial-digital-soldering-pot',
//     name: 'Coil and Code Tapping Machine',
//     category: 'Soldering Pot',
//     model: 'SMH-SP-100D',
//     tagline: 'PID Temperature Controlled Titanium Alloy Soldering Bath for Wire Tinning',
//     description: 'Coil and Core Tapping Machine ensures fast, precise, and consistent tapping operations, improving production efficiency, accuracy, connection quality, and reliability for transformer and electrical component manufacturing applications.',
//     // mainImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
//     // images: [
//     //   'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
//     //   'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80'
//     // ],
//    mainImage: smhSolderingPotImg,
// images: [
//   smhSolderingPotImg,
//   cnc350mmImg
// ],
//     features: [
//       'Microcomputer PID temperature control with dual LED display (Preset vs Actual)',
//       'Titanium alloy solder crucible offering exceptional heat resistance and long life',
//       'Rapid heating ceramic heating element array',
//       'Energy saving thermal insulation casing'
//     ],
//     applications: [
//       'Transformer Bobbin Wire Lead Tinning',
//       'Enamel Copper Wire Dip Stripping & Soldering',
//       'PCB Component Lead & Wire Harness Soldering'
//     ],
//     specifications: [
//       { parameter: 'Minimum Order Quantity', unit: 'Units', value: '1 Unit' },
//       { parameter: 'Temperature Range', unit: '°C', value: '100°C to 450°C (PID Controlled)' },
//       { parameter: 'Pot Material', unit: 'Type', value: 'Titanium Alloy Crucible' },
//       { parameter: 'Solder Capacity', unit: 'kg', value: '2.5 kg Lead-Free Solder' },
//       { parameter: 'Power Consumption', unit: 'Watts', value: '600W / 220V AC' }
//     ],
//     highlights: [
//       { label: 'Temp Range', value: '100°C - 450°C Digital PID' },
//       { label: 'Material', value: 'Titanium Alloy Pot' },
//       { label: 'Usage', value: 'Wire Lead Tinning & Dip Soldering' }
//     ],
//     inStock: true,
//     isHotProduct: true,
//     warranty: '1 Year Warranty',
//     catalogPdfName: 'SMH_Soldering_Pot_Digital.pdf'
//   },

{
  id: 'coil-and-core-tapping-machine-sm-6tm',
  name: 'Coil and Core Tapping Machine',
  category: 'Coil & Core Tapping Machine',
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
  // {
  //   id: 'automatic-pvc-heat-shrink-sleeve-cutting-machine',
  //   name: 'transformer coil winding machine',
  //   category: 'Sleeve Cutting Machine',
  //   model: 'SMH-SCM-100A',
  //   tagline: 'High Speed Precision Microcomputer Automatic Pipe & Sleeve Cutting Machine',
  //   description: 'Automatic PVC & Heat Shrink Sleeve Cutting Machine engineered for rapid, high-accuracy cutting of insulation sleeves, PVC tubing, heat shrink tubes, Teflon sleeves, and wire harnesses used in transformer winding, motor leads, and electrical bobbin assemblies. Features a digital microcomputer controller with stepper motor feeding, high-speed SKD-11 alloy cutting blade, and batch counter.',
  //   mainImage: cncMultiSpindleImg,
  //   images: [
  //     cncMultiSpindleImg,
  //     cnc350mmImg
  //   ],
  //   features: [
  //     'Digital microcomputer LED control panel for easy cut length & quantity setup',
  //     'High precision stepper motor feed mechanism ensuring ±0.1mm length accuracy',
  //     'Heavy duty SKD-11 high speed steel cutter blade for crisp burr-free cuts',
  //     'Automatic material shortage sensor and auto-stop alarm system',
  //     'High speed cut rate up to 120 cuts per minute for high-volume harness production'
  //   ],
  //   applications: [
  //     'Transformer Winding Wire Insulation Sleeve Cutting',
  //     'Heat Shrink Tubing & PVC Cable Sleeve Preparation',
  //     'Motor Lead Wire & Harness Assembly Lines',
  //     'Electrical Bobbin Pin Insulation Tubing'
  //   ],
  //   specifications: [
  //     { parameter: 'Minimum Order Quantity', unit: 'Units', value: '1 Unit' },
  //     { parameter: 'Cutting Length Range', unit: 'mm', value: '0.1 mm to 99,999 mm' },
  //     { parameter: 'Max Sleeve Outer Diameter', unit: 'mm', value: '1 mm to 25 mm' },
  //     { parameter: 'Cutting Speed', unit: 'Cuts/Min', value: '100 - 120 Cuts per minute' },
  //     { parameter: 'Cutting Accuracy', unit: 'mm', value: '± 0.1 mm Microcomputer Stepper' },
  //     { parameter: 'Blade Material', unit: 'Grade', value: 'SKD-11 High Speed Steel' },
  //     { parameter: 'Display Panel', unit: 'Type', value: 'Digital Microcomputer LED Panel' },
  //     { parameter: 'Automation Grade', unit: 'Type', value: 'Fully Automatic' }
  //   ],
  //   highlights: [
  //     { label: 'Cutting Speed', value: '120 Cuts / Min High Speed' },
  //     { label: 'Accuracy', value: '± 0.1 mm Precision Stepper' },
  //     { label: 'Blade', value: 'SKD-11 HSS Anti-Wear Blade' }
  //   ],
  //   inStock: true,
  //   isHotProduct: true,
  //   warranty: '1 Year Warranty + Free Spare Blade Set',
  //   catalogPdfName: 'SMH_Sleeve_Cutting_Machine_Catalog.pdf'
  // },

  {
  id: 'transformer-coil-winding-machine-with-tail-stock',
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
  {
    id: 'heavy-duty-round-dip-soldering-pot',
    name: 'Heavy Duty Round Dip Soldering Pot',
    category: 'Soldering Pot',
    model: 'SMH-SP-200R',
    tagline: 'High Thermal Capacity Industrial Round Solder Bath for Wire Lead Tinning',
    description: 'Heavy duty round soldering pot with high-density heating elements designed for heavy industrial enamel wire lead tinning, transformer harness preparation, and coil pin soldering.',
    mainImage: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80'
    ],
    features: [
      'Stainless steel & titanium plated crucible for anti-erosion durability',
      'Analog thermostat with continuous power output regulation',
      'Reinforced heating coils for fast melt down time',
      'Compact benchtop footprint with grounded safety plug'
    ],
    applications: [
      'Heavy Transformer Enamel Wire Dip Tinning',
      'Coil Lead Stripping & Soldering',
      'Industrial Cable Harness Pre-tinning'
    ],
    specifications: [
      { parameter: 'Minimum Order Quantity', unit: 'Units', value: '1 Unit' },
      { parameter: 'Temperature Range', unit: '°C', value: '150°C to 400°C' },
      { parameter: 'Pot Diameter', unit: 'mm', value: '100 mm Depth / 80 mm Diameter' },
      { parameter: 'Power Rating', unit: 'Watts', value: '800W / 220V' }
    ],
    highlights: [
      { label: 'Pot Size', value: '100 mm Deep Round Pot' },
      { label: 'Heating', value: '800W Heavy Duty Element' },
      { label: 'Application', value: 'Heavy Cable & Wire Lead Tinning' }
    ],
    inStock: true,
    warranty: '1 Year Warranty',
    catalogPdfName: 'SMH_Soldering_Pot_Round.pdf'
  },
  {
    id: 'heavy-duty-hand-coil-winder-with-mechanical-counter',
    name: 'Heavy Duty Hand Coil Winder with Mechanical Counter',
    category: 'Coil Winders',
    model: 'SMH-HW-100',
    tagline: 'Dual-Speed Gear Ratio Manual Hand Coil Winder for Workshop & Rewinding',
    description: 'Heavy duty manual hand coil winder featuring precision dual-speed gear ratio (1:1 and 1:8), mechanical 5-digit turn counter with zero reset, and robust cast iron frame. Perfect for motor rewinding, transformer coil repair, and educational labs.',
    mainImage: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80'
    ],
    features: [
      'Dual gear drive ratio (1:1 direct speed and 1:8 high speed ratio)',
      '5-Digit mechanical turn counter with instant lever reset',
      'Cast iron rigid frame with bench mounting bolt holes',
      'Smooth turning hand crank with wooden handle'
    ],
    applications: [
      'Electric Motor & Stator Rewinding Repair',
      'Custom Bobbin & Relay Coil Prototyping',
      'Educational Workshops & Vocational Labs'
    ],
    specifications: [
      { parameter: 'Minimum Order Quantity', unit: 'Units', value: '1 Unit' },
      { parameter: 'Gear Ratios', unit: 'Ratio', value: '1:1 and 1:8 Dual Gear' },
      { parameter: 'Counter Type', unit: 'Digits', value: '5-Digit Mechanical Counter' },
      { parameter: 'Max Coil Diameter', unit: 'mm', value: '150 mm' },
      { parameter: 'Frame Material', unit: 'Type', value: 'Heavy Cast Iron' }
    ],
    highlights: [
      { label: 'Gear Ratio', value: '1:1 and 1:8 Dual Speed' },
      { label: 'Counter', value: '5-Digit Mechanical Reset' },
      { label: 'Build', value: 'Heavy Cast Iron Body' }
    ],
    inStock: true,
    warranty: '1 Year Warranty',
    catalogPdfName: 'SMH_Hand_Coil_Winder.pdf'
  },
  {
    id: 'motorized-tabletop-coil-winder-machine',
    name: 'Motorized Tabletop Variable Speed Coil Winder Machine',
    category: 'Coil Winders',
    model: 'SMH-MW-200',
    tagline: 'Variable Speed Motorized Coil Winder with Foot Pedal Speed Control',
    description: 'Compact motorized tabletop coil winder with variable speed AC drive, foot pedal speed regulation, and electronic digital turns counter. Provides effortless winding for electrical bobbins, solenoids, and small transformers.',
    mainImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80'
    ],
    features: [
      'Smooth variable speed control via foot pedal switch',
      'Digital LED turns counter with preset auto-stop limit',
      'Forward and reverse spindle direction switch',
      'Compact benchtop mounting design with quiet drive belt'
    ],
    applications: [
      'Small Transformer Bobbin Winding',
      'Solenoid Coils & Choke Production',
      'Repair Workshop Rewinding'
    ],
    specifications: [
      { parameter: 'Minimum Order Quantity', unit: 'Units', value: '1 Unit' },
      { parameter: 'Motor Power', unit: 'HP', value: '0.25 HP Variable Speed Motor' },
      { parameter: 'Max Wire Range', unit: 'mm', value: '0.08 - 1.5 mm Wire' },
      { parameter: 'Max Coil Diameter', unit: 'mm', value: '200 mm' },
      { parameter: 'Control', unit: 'Type', value: 'Foot Pedal + Digital Counter' }
    ],
    highlights: [
      { label: 'Operation', value: 'Motorized + Foot Pedal' },
      { label: 'Turns Counter', value: 'Digital LED Auto-Stop' },
      { label: 'Capacity', value: '200 mm Max Coil OD' }
    ],
    inStock: true,
    warranty: '1 Year Warranty',
    catalogPdfName: 'SMH_Motorized_Coil_Winder.pdf'
  },
  {
    id: 'all-geared-lathe-machine',
    name: 'All Geared Heavy Duty Lathe Machine',
    category: 'Lathe Machines',
    model: 'SMH-AG-1000 / 2000 / 3000',
    tagline: 'High Precision Heavy Duty All Geared Lathe Machine for Industrial Turning',
    description: 'Engineered for high accuracy turning, facing, threading, and grooving across heavy industrial applications. Features hardened & ground bedways, induction hardened gears, dynamic balanced spindle, and flame hardened guideways.',
    mainImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80'
    ],
    features: [
      'Hardened and ground bedways for zero-vibration machining',
      'Induction hardened headstock gears made of alloy steel',
      'Wide bed casting with diagonal ribbing for rigid support',
      'Foot brake mechanism and instant spindle quick reverse',
      'Complete coolant pump assembly and chip tray included',
      'Automatic feed mechanism for longitudinal and cross direction'
    ],
    applications: [
      'Heavy Automobile Engineering Components',
      'Power Plant Shaft Machining',
      'Oil & Gas Pipe Threading',
      'General Job Work & Precision Machine Shops'
    ],
    specifications: [
      { parameter: 'Height of Center', unit: 'mm', value: '250 - 450' },
      { parameter: 'Swing Over Bed', unit: 'mm', value: '500 - 900' },
      { parameter: 'Distance Between Centers', unit: 'mm', value: '1000 - 4000' },
      { parameter: 'Bed Width', unit: 'mm', value: '380 - 550' },
      { parameter: 'Spindle Bore', unit: 'mm', value: '52 - 105' },
      { parameter: 'Spindle Speed Range', unit: 'RPM', value: '16 - 1200 (12 Steps)' },
      { parameter: 'Main Electric Motor', unit: 'HP', value: '5.5 - 15 HP' },
      { parameter: 'Approximate Net Weight', unit: 'Kg', value: '1850 - 4800' }
    ],
    highlights: [
      { label: 'Precision', value: 'Grade-1 ISO Standards' },
      { label: 'Bed Type', value: 'Induction Hardened V-Bed' },
      { label: 'Warranty', value: '1 Year Manufacturer Warranty' }
    ],
    inStock: true,
    warranty: '12 Months Comprehensive Warranty + Lifetime Technical Support',
    catalogPdfName: 'SMH_All_Geared_Lathe_Catalog_2026.pdf'
  },
  {
    id: 'radial-drilling-machine',
    name: 'Heavy Duty Radial Drilling Machine',
    category: 'Drilling Machines',
    model: 'SMH-RD-40 / RD-50 / RD-62',
    tagline: 'Versatile Heavy Duty Radial Drill for Heavy Plate Drilling & Tapping',
    description: 'Heavy duty radial drill designed for heavy engineering fabrication, plate drilling, counter-boring, and precision tapping. Features electro-hydraulic clamping, heavy arm sleeve design, and hardened gear train.',
    mainImage: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80'
    ],
    features: [
      'Electro-hydraulic column clamping system',
      'Micro-feed manual drilling control for high precision',
      'Hardened spindle taper EN-8 alloy steel construction',
      'Automatic feed release upon depth limit trip',
      'Heavy ribbed box base table with T-slots'
    ],
    applications: [
      'Structural Steel Fabrication',
      'Boiler Plate & Pressure Vessel Drilling',
      'Heavy Machine Tool Base Manufacturing'
    ],
    specifications: [
      { parameter: 'Drilling Capacity in Steel', unit: 'mm', value: '40 - 62' },
      { parameter: 'Spindle Travel', unit: 'mm', value: '280 - 350' },
      { parameter: 'Spindle Taper', unit: 'MT', value: 'MT-4 / MT-5' },
      { parameter: 'Max Distance Spindle to Base', unit: 'mm', value: '1250 - 1600' },
      { parameter: 'Spindle Speeds', unit: 'Steps', value: '8 - 12 Speeds' },
      { parameter: 'Main Motor Power', unit: 'HP', value: '3.0 - 7.5 HP' },
      { parameter: 'Net Weight', unit: 'Kg', value: '2200 - 4500' }
    ],
    highlights: [
      { label: 'Drilling Capacity', value: 'Up to 62mm in Steel' },
      { label: 'Clamping', value: 'Hydraulic / Mechanical' },
      { label: 'Spindle Speeds', value: '12 Speeds (40 to 1800 RPM)' }
    ],
    inStock: true,
    warranty: '12 Months Warranty',
    catalogPdfName: 'SMH_Radial_Drilling_Machine_Catalog.pdf'
  },
  {
    id: 'universal-milling-machine',
    name: 'Universal Heavy Duty Milling Machine',
    category: 'Milling Machines',
    model: 'SMH-UMM-2 / UMM-3 / VMM-4',
    tagline: 'High Precision Universal & Vertical Milling Machine for Toolrooms & Production',
    description: 'Designed for heavy metal removal, gear cutting, keyway slotting, and complex angular milling. Rigid alloy cast column with rectangular box guideways and power feed on all 3 axes.',
    mainImage: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80'
    ],
    features: [
      'Power feed and rapid traverse on X, Y, and Z axes',
      'Hardened gear box with oil bath lubrication',
      'Swivel table 45 degrees left and right for helical milling',
      'Optional 3-Axis Digital Read Out (DRO) available',
      'Heavy vertical milling head attachment included'
    ],
    applications: [
      'Die & Mold Making Toolrooms',
      'Industrial Gear Cutting & Spline Milling',
      'Defense & Aerospace Precision Parts'
    ],
    specifications: [
      { parameter: 'Table Size', unit: 'mm', value: '1350 x 320 / 1600 x 360' },
      { parameter: 'Longitudinal Travel (X)', unit: 'mm', value: '850 - 1100' },
      { parameter: 'Cross Travel (Y)', unit: 'mm', value: '300 - 380' },
      { parameter: 'Vertical Travel (Z)', unit: 'mm', value: '420 - 480' },
      { parameter: 'Spindle Taper', unit: 'ISO', value: 'ISO-40 / ISO-50' },
      { parameter: 'Main Motor', unit: 'HP', value: '5.5 - 10 HP' },
      { parameter: 'Net Weight', unit: 'Kg', value: '2400 - 3800' }
    ],
    highlights: [
      { label: 'Table Size', value: '1350x320mm / 1600x360mm' },
      { label: 'DRO Ready', value: '3-Axis Optical Encoder Ready' },
      { label: 'Feed System', value: 'Gear Driven Power Feed' }
    ],
    inStock: true,
    warranty: '1 Year Warranty',
    catalogPdfName: 'SMH_Universal_Milling_Machine_Catalog.pdf'
  },
  {
    id: 'hydraulic-power-press',
    name: 'Hydraulic C-Frame & Pillar Power Press',
    category: 'Power Presses',
    model: 'SMH-HP-10T to 200T',
    tagline: 'Heavy Duty Hydraulic Press for Deep Drawing, Blanking & Piercing',
    description: 'High performance C-frame and 4-pillar hydraulic presses built with rigid welded steel frame, high pressure hydraulic cylinder, variable stroke control, and safety light curtains.',
    mainImage: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80'
    ],
    features: [
      'Tough stress-relieved steel frame structure',
      'PLC controlled automatic hydraulic circuit',
      'Adjustable stroke length and pressure regulation',
      'Dual palm button actuation with emergency stop',
      'Photoelectric safety light curtain sensors'
    ],
    applications: [
      'Sheet Metal Blanking, Bending & Punching',
      'Auto Component Deep Drawing',
      'Utensil Manufacturing Industry'
    ],
    specifications: [
      { parameter: 'Capacity Range', unit: 'Tons', value: '10 Ton - 200 Ton' },
      { parameter: 'Max Working Pressure', unit: 'Bar', value: '210 Bar' },
      { parameter: 'Ram Stroke', unit: 'mm', value: '150 - 500' },
      { parameter: 'Daylight Clearance', unit: 'mm', value: '350 - 750' },
      { parameter: 'Bed Dimension', unit: 'mm', value: '500x500 to 1200x1000' },
      { parameter: 'Hydraulic Motor', unit: 'HP', value: '3 HP - 25 HP' }
    ],
    highlights: [
      { label: 'Capacity', value: '10T to 200T Custom Built' },
      { label: 'Control', value: 'PLC Electric Control Panel' },
      { label: 'Safety', value: 'Light Curtain & Emergency Trip' }
    ],
    inStock: true,
    warranty: '12 Months Warranty',
    catalogPdfName: 'SMH_Hydraulic_Power_Press_Catalog.pdf'
  },
  {
    id: 'hydraulic-surface-grinder',
    name: 'Hydraulic Precision Surface Grinding Machine',
    category: 'Grinding Machines',
    model: 'SMH-SG-4080 / SG-60120',
    tagline: 'High Precision Surface Grinder for Micro-Finish Machining',
    description: 'Engineered for sub-micron accuracy surface grinding of dies, molds, and precision plates. Features longitudinal hydraulic table movement, automatic cross feed, and anti-friction turcite lined slides.',
    mainImage: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80'
    ],
    features: [
      'Cartridge type spindle mounted on angular contact bearings',
      'Electro-magnetic chuck with variable power demagnetizer',
      'Hydraulic longitudinal movement with speed regulation',
      'Automatic lubrication system for slide ways'
    ],
    applications: [
      'Die & Punch Grinding',
      'Gauge & Fixture Manufacturing',
      'High Precision Flatness Metal Finishing'
    ],
    specifications: [
      { parameter: 'Grinding Surface Capacity', unit: 'mm', value: '400 x 800 / 600 x 1200' },
      { parameter: 'Max Table Travel', unit: 'mm', value: '850 - 1300' },
      { parameter: 'Spindle Speed', unit: 'RPM', value: '1440 / 2800 RPM' },
      { parameter: 'Wheel Size (D x W x B)', unit: 'mm', value: '350 x 40 x 127' },
      { parameter: 'Spindle Motor', unit: 'HP', value: '5 HP - 7.5 HP' },
      { parameter: 'Net Weight', unit: 'Kg', value: '2800 - 4500' }
    ],
    highlights: [
      { label: 'Accuracy', value: '0.002 mm Flatness' },
      { label: 'Chuck', value: 'Permanent / Electromagnetic' },
      { label: 'Spindle', value: 'Super Precision Cartridge Spindle' }
    ],
    inStock: true,
    warranty: '1 Year Warranty',
    catalogPdfName: 'SMH_Surface_Grinding_Machine_Catalog.pdf'
  },
  {
    id: 'shaping-machine-heavy',
    name: 'Heavy Duty Metal Shaping Machine',
    category: 'Shaping & Slotting',
    model: 'SMH-SH-18 / SH-24 / SH-32',
    tagline: 'Heavy Duty Mechanical Crank Type Metal Shaper',
    description: 'Designed for planing flat surfaces, cutting splines, internal keyways, and angular shaping in tough alloy metals. Rigid frame construction with automatic oil lubrication.',
    mainImage: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80'
    ],
    features: [
      'Heavy ribbed main body casting',
      'Tool head swivels 60 degrees left/right with micrometer scale',
      'Automatic cross feed to table in both directions',
      'Quick return ram motion mechanism'
    ],
    applications: [
      'Keyway Cutting & Spline Shaping',
      'Dovetail Machining & Die Blocks',
      'Heavy Fabrication Repair Shops'
    ],
    specifications: [
      { parameter: 'Max Length of Stroke', unit: 'Inches / mm', value: '18" (450mm) to 32" (800mm)' },
      { parameter: 'Table Working Surface', unit: 'mm', value: '450x300 to 750x450' },
      { parameter: 'Ram Speed Range', unit: 'Strokes/min', value: '12 - 110 (4 Speeds)' },
      { parameter: 'Main Drive Motor', unit: 'HP', value: '3.0 - 7.5 HP' }
    ],
    highlights: [
      { label: 'Stroke Length', value: '18 Inch / 24 Inch / 32 Inch' },
      { label: 'Feed System', value: 'Auto Cross Feed' },
      { label: 'Build', value: 'Heavy Duty Cast Iron Body' }
    ],
    inStock: true,
    warranty: '12 Months Warranty',
    catalogPdfName: 'SMH_Shaping_Machine_Catalog.pdf'
  },
  {
    id: 'cnc-lathe-turning-center',
    name: 'Industrial CNC Lathe & Turning Center',
    category: 'CNC Machines',
    model: 'SMH-CNC-200 / 300',
    tagline: 'High Speed Precision CNC Turning Center with Siemens / Fanuc Control',
    description: 'State-of-the-art CNC Turning Center for automated high volume production. Features linear motion guideways, 8-station hydraulic turret, high torque spindle motor, and automatic chip conveyor.',
    mainImage: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80'
    ],
    features: [
      'Siemens 828D / Fanuc 0i-TF CNC Controller',
      'High speed hydraulic chuck & tailstock',
      '30-degree slant bed rigid monoblock casting',
      '8 or 12 Station Servo / Hydraulic Turret'
    ],
    applications: [
      'Automotive Mass Component Production',
      'Aerospace Precision Shafts',
      'Medical Equipment Components'
    ],
    specifications: [
      { parameter: 'Max Turning Diameter', unit: 'mm', value: '320 - 450' },
      { parameter: 'Max Turning Length', unit: 'mm', value: '500 - 1000' },
      { parameter: 'Chuck Size', unit: 'Inch', value: '8" / 10" Hydraulic Chuck' },
      { parameter: 'Spindle Speed', unit: 'RPM', value: '50 - 4000 RPM' },
      { parameter: 'Spindle Motor', unit: 'kW', value: '7.5 / 11 kW Servo' }
    ],
    highlights: [
      { label: 'Control', value: 'Fanuc / Siemens CNC' },
      { label: 'Bed Type', value: 'Slant Bed Monoblock' },
      { label: 'Turret', value: '8 Station Hydraulic' }
    ],
    inStock: true,
    warranty: '12 Months CNC Warranty',
    catalogPdfName: 'SMH_CNC_Turning_Center_Catalog.pdf'
  },
  {
    id: 'bandsaw-machine-heavy',
    name: 'Horizontal Hydraulic Band Saw Machine',
    category: 'Sawing Machines',
    model: 'SMH-BS-250 / 350 / 500',
    tagline: 'Heavy Duty Fully Hydraulic Horizontal Band Saw for Pipe & Bar Cutting',
    description: 'Designed for fast, silent, and burr-free cutting of solid round bars, pipes, structural beams, and tough alloys. Features hydraulic arm lifting, hydraulic vise clamping, and bi-metal blade guide.',
    mainImage: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80'
    ],
    features: [
      'Infinitely variable hydraulic down feed speed control',
      'Carbide blade guide pads with roller bearings',
      'Automatic shut-off at completion of cut',
      'Built-in coolant system with chip clearing brush'
    ],
    applications: [
      'Steel Stockyards & Metal Distribution',
      'Structural Fabrication Workshops',
      'Forging & Casting Bar Cutting'
    ],
    specifications: [
      { parameter: 'Cutting Capacity Round', unit: 'mm', value: '250 / 350 / 500' },
      { parameter: 'Cutting Capacity Square', unit: 'mm', value: '250x250 to 500x500' },
      { parameter: 'Blade Size', unit: 'mm', value: '3880 x 27 x 0.9' },
      { parameter: 'Main Motor Power', unit: 'HP', value: '2.0 HP - 5.0 HP' }
    ],
    highlights: [
      { label: 'Operation', value: 'Semi & Fully Automatic' },
      { label: 'Blade', value: 'Bi-Metal M42 Grade' },
      { label: 'Efficiency', value: 'Burr-Free Fast Cutting' }
    ],
    inStock: true,
    warranty: '1 Year Warranty',
    catalogPdfName: 'SMH_Bandsaw_Machine_Catalog.pdf'
  }
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
export const HOT_PRODUCTS: Product[] = PRODUCTS.filter(p => p.isHotProduct);

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
