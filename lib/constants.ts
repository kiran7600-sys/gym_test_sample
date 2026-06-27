import type {
  NavLink,
  Stat,
  Equipment,
  MembershipPlan,
  DurationOption,
  Trainer,
  Testimonial,
  GalleryImage,
  FAQItem,
} from '@/types';

// ─── Navigation ───────────────────────────────────────────────────────────────

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Equipment', href: '#equipment' },
  { label: 'Membership', href: '#membership' },
  { label: 'Trainers', href: '#trainers' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
  { label: 'BMI Calculator', href: '/bmi-calculator', isExternal: true },
];

// ─── WhatsApp ─────────────────────────────────────────────────────────────────

export const WHATSAPP_NUMBER = '919876543210';
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  'Hi! I\'m interested in joining the gym. Could you share more details about membership plans?'
)}`;

// ─── Stats ────────────────────────────────────────────────────────────────────

export const STATS: Stat[] = [
  { label: 'Members', value: 2500, suffix: '+' },
  { label: 'Trainers', value: 30, suffix: '+' },
  { label: 'Experience', value: 10, suffix: ' Years' },
  { label: 'Hours', value: 24, suffix: '/7' },
];

// ─── Equipment ────────────────────────────────────────────────────────────────

export const EQUIPMENT_BRANDS: string[] = [
  'Technogym',
  'Atlantis',
  'Cybex',
  'Hammer Strength',
  'Life Fitness',
  'Precor',
  'Nautilus',
  'Pendulum',
];

export const EQUIPMENT_LIST: Equipment[] = [
  {
    id: 1,
    name: 'Treadmills',
    description:
      'Commercial-grade treadmills with cushioned decks, incline up to 15%, and speeds reaching 20 km/h. Built for endurance runners and HIIT enthusiasts.',
    muscles: 'Legs, Cardio',
    image: '/images/equipment/treadmill.jpg',
  },
  {
    id: 2,
    name: 'Dumbbells (5-100kg)',
    description:
      'Complete rubber hex dumbbell range from 5kg to 100kg. Premium knurled handles for secure grip during heavy lifts.',
    muscles: 'Full Body',
    image: '/images/equipment/dumbbells.jpg',
  },
  {
    id: 3,
    name: 'Squat Rack',
    description:
      'Heavy-duty power racks with safety bars, adjustable J-hooks, and pull-up stations. Rated for 500kg+ loads.',
    muscles: 'Quads, Glutes, Core',
    image: '/images/equipment/squat-rack.jpg',
  },
  {
    id: 4,
    name: 'Bench Press',
    description:
      'Olympic flat, incline, and decline benches with competition-standard width. Paired with calibrated barbells.',
    muscles: 'Chest, Shoulders, Triceps',
    image: '/images/equipment/bench-press.jpg',
  },
  {
    id: 5,
    name: 'Smith Machine',
    description:
      'Guided barbell system with counterbalanced weight for safe solo training. Linear bearings for smooth movement.',
    muscles: 'Full Body Compound',
    image: '/images/equipment/smith-machine.jpg',
  },
  {
    id: 6,
    name: 'Cable Machine',
    description:
      'Dual adjustable pulley systems with 100kg weight stacks per side. 360-degree rotation for unlimited exercise variety.',
    muscles: 'Full Body Isolation',
    image: '/images/equipment/cable-machine.jpg',
  },
  {
    id: 7,
    name: 'Leg Press (45°)',
    description:
      'Plate-loaded 45-degree leg press with 1000kg capacity. Extra-wide foot platform for varied stance positions.',
    muscles: 'Quads, Hamstrings, Glutes',
    image: '/images/equipment/leg-press.jpg',
  },
  {
    id: 8,
    name: 'Functional Trainer',
    description:
      'Dual cable columns with 1:1 and 2:1 pulley ratios. Perfect for sport-specific and rehabilitation training.',
    muscles: 'Full Body Functional',
    image: '/images/equipment/functional-trainer.jpg',
  },
  {
    id: 9,
    name: 'Rowing Machine',
    description:
      'Air and magnetic resistance rowers with performance monitors. Low-impact full-body conditioning.',
    muscles: 'Back, Arms, Core, Legs',
    image: '/images/equipment/rowing-machine.jpg',
  },
  {
    id: 10,
    name: 'Exercise Bikes',
    description:
      'Upright and recumbent cycles with electromagnetic resistance. Heart rate monitoring and preset programs.',
    muscles: 'Legs, Cardio',
    image: '/images/equipment/exercise-bikes.jpg',
  },
  {
    id: 11,
    name: 'Kettlebells',
    description:
      'Competition-spec kettlebells from 4kg to 48kg. Color-coded by weight with uniform handle diameter.',
    muscles: 'Full Body Power',
    image: '/images/equipment/kettlebells.jpg',
  },
  {
    id: 12,
    name: 'Assisted Chin & Dip',
    description:
      'Counterweight-assisted chin-up and dip station. Progressive resistance reduction for building upper body strength.',
    muscles: 'Back, Chest, Arms',
    image: '/images/equipment/chin-dip.jpg',
  },
];

// ─── Membership Plans ─────────────────────────────────────────────────────────

export const MEMBERSHIP_PLANS: MembershipPlan[] = [
  {
    id: 'basic',
    name: 'Basic',
    description: 'Essential gym access',
    features: ['Gym Floor Access', 'Locker Room', 'Cardio Area', 'Water Station'],
    prices: {
      '1M': 999,
      '3M': 2500,
      '6M': 4500,
      '12M': 7999,
    },
  },
  {
    id: 'standard',
    name: 'Standard',
    description: 'Most popular choice',
    features: [
      'Everything in Basic',
      'Group Fitness Classes',
      'Trainer Support',
      'Steam & Sauna',
      'Fitness Assessment',
    ],
    prices: {
      '1M': 1999,
      '3M': 5000,
      '6M': 9000,
      '12M': 14999,
    },
    isPopular: true,
  },
  {
    id: 'premium',
    name: 'Premium',
    description: 'Ultimate fitness experience',
    features: [
      'Everything in Standard',
      'Personal Trainer',
      'Custom Diet Plan',
      'Unlimited Classes',
      'Priority Booking',
      'Guest Passes (2/month)',
    ],
    prices: {
      '1M': 2999,
      '3M': 7500,
      '6M': 13000,
      '12M': 21999,
    },
  },
];

// ─── Duration Options ─────────────────────────────────────────────────────────

export const DURATION_OPTIONS: DurationOption[] = [
  { key: '1M', label: '1 Month' },
  { key: '3M', label: '3 Months' },
  { key: '6M', label: '6 Months' },
  { key: '12M', label: '12 Months' },
];

// ─── Trainers ─────────────────────────────────────────────────────────────────

export const TRAINERS: Trainer[] = [
  {
    id: 1,
    name: 'Arjun Sharma',
    specialization: 'Strength & Conditioning',
    experience: '8+ Years',
    bio: 'Former national-level powerlifter with certifications from NSCA and ACE. Specializes in hypertrophy and strength periodization.',
    image: '/images/trainers/arjun-sharma.jpg',
    socials: {
      instagram: 'https://instagram.com/arjunsharma',
      youtube: 'https://youtube.com/@arjunsharma',
    },
  },
  {
    id: 2,
    name: 'Priya Mehta',
    specialization: 'Yoga & Flexibility',
    experience: '6+ Years',
    bio: 'Certified Yoga Alliance RYT-500 instructor. Combines traditional Hatha yoga with modern mobility techniques.',
    image: '/images/trainers/priya-mehta.jpg',
    socials: {
      instagram: 'https://instagram.com/priyamehta',
      youtube: 'https://youtube.com/@priyamehta',
    },
  },
  {
    id: 3,
    name: 'Vikram Patel',
    specialization: 'CrossFit & HIIT',
    experience: '7+ Years',
    bio: 'CrossFit Level 2 certified coach and former army fitness instructor. Expert in functional fitness and metabolic conditioning.',
    image: '/images/trainers/vikram-patel.jpg',
    socials: {
      instagram: 'https://instagram.com/vikrampatel',
      youtube: 'https://youtube.com/@vikrampatel',
    },
  },
  {
    id: 4,
    name: 'Sneha Reddy',
    specialization: 'Cardio & Weight Loss',
    experience: '5+ Years',
    bio: 'Sports science graduate specializing in body transformation. Has helped 500+ members achieve their fitness goals.',
    image: '/images/trainers/sneha-reddy.jpg',
    socials: {
      instagram: 'https://instagram.com/snehareddy',
      youtube: 'https://youtube.com/@snehareddy',
    },
  },
];

// ─── Testimonials ─────────────────────────────────────────────────────────────

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Rahul Verma',
    location: 'Mumbai, Maharashtra',
    rating: 5,
    review:
      'Joining this gym was the best decision I made this year. The equipment is top-notch, the trainers genuinely care about your progress, and the atmosphere pushes you to give your best every single session. I\'ve lost 18kg in 6 months!',
    image: '/images/testimonials/rahul-verma.jpg',
  },
  {
    id: 2,
    name: 'Ananya Iyer',
    location: 'Bangalore, Karnataka',
    rating: 5,
    review:
      'As a woman, I was initially hesitant about joining a gym. But the dedicated women\'s section and the female trainers made me feel completely comfortable. The yoga classes with Priya are absolutely transformative. Highly recommend!',
    image: '/images/testimonials/ananya-iyer.jpg',
  },
  {
    id: 3,
    name: 'Karthik Nair',
    location: 'Chennai, Tamil Nadu',
    rating: 4,
    review:
      'The variety of equipment here is unmatched. From Technogym treadmills to Hammer Strength machines — everything is well-maintained. The 24/7 access is a game-changer for someone with my irregular work schedule.',
    image: '/images/testimonials/karthik-nair.jpg',
  },
  {
    id: 4,
    name: 'Deepika Singh',
    location: 'Delhi, NCR',
    rating: 5,
    review:
      'I started my fitness journey here 2 years ago barely able to do a push-up. Now I compete in local powerlifting meets! Arjun sir\'s strength program is incredible. The supportive community keeps me motivated every day.',
    image: '/images/testimonials/deepika-singh.jpg',
  },
  {
    id: 5,
    name: 'Mohammed Faizan',
    location: 'Hyderabad, Telangana',
    rating: 5,
    review:
      'The Premium membership is worth every rupee. My personal trainer customized a plan for my cricket training, the diet plan is perfectly tailored, and the steam room recovery after intense sessions is a blessing.',
    image: '/images/testimonials/mohammed-faizan.jpg',
  },
  {
    id: 6,
    name: 'Shruti Desai',
    location: 'Pune, Maharashtra',
    rating: 4,
    review:
      'I\'ve been to several gyms in Pune, but none compare to the cleanliness and professionalism here. The group fitness classes are energetic and fun. The staff remembers your name — that personal touch makes all the difference.',
    image: '/images/testimonials/shruti-desai.jpg',
  },
];

// ─── Gallery ──────────────────────────────────────────────────────────────────

export const GALLERY_CATEGORIES: string[] = [
  'All',
  'Gym Interior',
  'Cardio',
  'Weight Training',
  'Group Classes',
  'Events',
];

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 1,
    src: '/images/gallery/gym-interior-1.jpg',
    alt: 'Spacious gym floor with premium equipment',
    category: 'Gym Interior',
    gradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
  },
  {
    id: 2,
    src: '/images/gallery/gym-interior-2.jpg',
    alt: 'Modern reception and lounge area',
    category: 'Gym Interior',
    gradient: 'linear-gradient(135deg, #0d1b2a 0%, #1b2838 50%, #2d4059 100%)',
  },
  {
    id: 3,
    src: '/images/gallery/cardio-1.jpg',
    alt: 'Row of commercial treadmills',
    category: 'Cardio',
    gradient: 'linear-gradient(135deg, #2d1b69 0%, #11998e 100%)',
  },
  {
    id: 4,
    src: '/images/gallery/cardio-2.jpg',
    alt: 'Cycling studio with mood lighting',
    category: 'Cardio',
    gradient: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)',
  },
  {
    id: 5,
    src: '/images/gallery/weight-training-1.jpg',
    alt: 'Free weights and dumbbell rack',
    category: 'Weight Training',
    gradient: 'linear-gradient(135deg, #232526 0%, #414345 50%, #2c3e50 100%)',
  },
  {
    id: 6,
    src: '/images/gallery/weight-training-2.jpg',
    alt: 'Power rack and Olympic platform area',
    category: 'Weight Training',
    gradient: 'linear-gradient(135deg, #1f1c2c 0%, #928dab 100%)',
  },
  {
    id: 7,
    src: '/images/gallery/weight-training-3.jpg',
    alt: 'Members training with heavy deadlifts',
    category: 'Weight Training',
    gradient: 'linear-gradient(135deg, #141e30 0%, #243b55 100%)',
  },
  {
    id: 8,
    src: '/images/gallery/group-classes-1.jpg',
    alt: 'High-energy Zumba class in progress',
    category: 'Group Classes',
    gradient: 'linear-gradient(135deg, #4a0e0e 0%, #c94b4b 50%, #4b134f 100%)',
  },
  {
    id: 9,
    src: '/images/gallery/group-classes-2.jpg',
    alt: 'Morning yoga session in the studio',
    category: 'Group Classes',
    gradient: 'linear-gradient(135deg, #0b486b 0%, #f56217 100%)',
  },
  {
    id: 10,
    src: '/images/gallery/events-1.jpg',
    alt: 'Annual fitness championship event',
    category: 'Events',
    gradient: 'linear-gradient(135deg, #c33764 0%, #1d2671 100%)',
  },
  {
    id: 11,
    src: '/images/gallery/events-2.jpg',
    alt: 'Community workout day at the gym',
    category: 'Events',
    gradient: 'linear-gradient(135deg, #2b5876 0%, #4e4376 100%)',
  },
  {
    id: 12,
    src: '/images/gallery/events-3.jpg',
    alt: 'Member transformation celebration',
    category: 'Events',
    gradient: 'linear-gradient(135deg, #3a1c71 0%, #d76d77 50%, #ffaf7b 100%)',
  },
];

// ─── FAQ ──────────────────────────────────────────────────────────────────────

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: 1,
    question: 'What are your opening hours?',
    answer:
      'We are open Monday to Saturday from 5:00 AM to 11:00 PM, Sundays from 6:00 AM to 9:00 PM, and on public holidays from 7:00 AM to 5:00 PM. Our extended hours ensure you can always find time for your workout, no matter how busy your schedule.',
  },
  {
    id: 2,
    question: 'Do you offer personal training sessions?',
    answer:
      'Yes, we offer one-on-one personal training with our certified trainers. Each trainer holds nationally or internationally recognized certifications. Personal training is included in our Premium plan, or can be added to any other plan at an additional cost. Sessions are tailored to your specific fitness goals.',
  },
  {
    id: 3,
    question: 'How do I cancel my membership?',
    answer:
      'We operate with a simple 30-day notice cancellation policy and have no lock-in contracts. You can submit your cancellation request at the front desk or via email. Any prepaid amount for the remaining period will be refunded as per our refund policy. We believe in keeping our members because they love training here, not because of binding contracts.',
  },
  {
    id: 4,
    question: 'Is parking available at the gym?',
    answer:
      'Yes, we provide free dedicated parking for all our members. Our facility has ample car and two-wheeler parking space. The parking area is well-lit, covered, and under 24/7 CCTV surveillance for your vehicle\'s safety.',
  },
  {
    id: 5,
    question: 'Do you provide diet and nutrition plans?',
    answer:
      'Diet and nutrition plans are available with our Standard and Premium membership plans. Our in-house nutritionist will assess your dietary habits, fitness goals, and any dietary restrictions to create a personalized meal plan. Premium members receive monthly plan revisions and direct WhatsApp support with the nutritionist.',
  },
  {
    id: 6,
    question: 'Is this gym suitable for beginners?',
    answer:
      'Absolutely! We welcome members of all fitness levels. Every new member receives a complimentary orientation session where our trainers walk you through all equipment, demonstrate proper form, and help design a beginner-friendly workout routine. Our supportive community ensures you never feel out of place.',
  },
  {
    id: 7,
    question: 'Do you have a dedicated women\'s section?',
    answer:
      'Yes, we have a fully equipped dedicated women-only workout area with female trainers available throughout the day. This section includes its own cardio zone, strength training equipment, stretching area, and separate changing rooms. We prioritize creating a comfortable and empowering environment for all our female members.',
  },
  {
    id: 8,
    question: 'Do you offer BMI and fitness assessments?',
    answer:
      'Yes, every new member receives a complimentary BMI and body composition assessment on joining. This includes measurements of body fat percentage, muscle mass, metabolic rate, and more using our InBody analysis machine. Regular reassessments are available monthly for Standard and Premium members to track your progress accurately.',
  },
];

// ─── Opening Hours ────────────────────────────────────────────────────────────

export const OPENING_HOURS: { days: string; hours: string }[] = [
  { days: 'Monday - Saturday', hours: '5:00 AM - 11:00 PM' },
  { days: 'Sunday', hours: '6:00 AM - 9:00 PM' },
  { days: 'Public Holidays', hours: '7:00 AM - 5:00 PM' },
];

// ─── Social Links ─────────────────────────────────────────────────────────────

export const SOCIAL_LINKS: { platform: string; url: string }[] = [
  { platform: 'instagram', url: 'https://instagram.com/premiumgym' },
  { platform: 'facebook', url: 'https://facebook.com/premiumgym' },
  { platform: 'youtube', url: 'https://youtube.com/@premiumgym' },
  { platform: 'whatsapp', url: `https://wa.me/${WHATSAPP_NUMBER}` },
];

// ─── Form Options ─────────────────────────────────────────────────────────────

export const FITNESS_GOALS: string[] = [
  'Weight Loss',
  'Muscle Gain',
  'Strength Training',
  'Flexibility',
  'General Fitness',
  'Sports Performance',
  'Rehabilitation',
];

export const WORKOUT_TIMES: string[] = [
  'Early Morning (5-7 AM)',
  'Morning (7-10 AM)',
  'Afternoon (12-3 PM)',
  'Evening (5-8 PM)',
  'Night (8-11 PM)',
];
