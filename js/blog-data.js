/**
 * AVÉRA CINEMA — Curated Cinema Insights & Engineering Blog Articles
 * In-depth technical guides on acoustics, spatial audio, optics, calibration, and automation.
 */

const AV_BLOG_POSTS = [
  {
    id: "dolby-atmos-room-layout-guide",
    title: "The Definitive Guide to Dolby Atmos Speaker Placement: 5.1.2 vs 7.2.4 vs 9.4.6",
    category: "Spatial Audio",
    categorySlug: "audio",
    badge: "Audio Engineering",
    author: {
      name: "Karthik Subramanian",
      role: "CEDIA ESC-T Audio Director",
      avatar: "images/products/jbl-speaker.webp"
    },
    date: "February 24, 2026",
    readTime: "8 min read",
    image: "images/gallery/theatre-03.webp",
    summary: "Understand speaker elevation angles, bed channel separation, and multi-subwoofer phase alignment for reference 3D spatial immersion.",
    content: `
      <p class="lead fw-medium text-dark-primary mb-4">
        Dolby Atmos represents the most significant breakthrough in home cinema acoustics since the debut of 5.1 discrete digital surround sound. By abandoning traditional channel-based tracks in favor of dynamic 3D object-oriented metadata, Atmos lets sound designers place sounds exactly where they belong in physical space.
      </p>

      <h2 class="h4 text-dark-primary fw-semibold mt-5 mb-3">1. The Bed Layer vs. The Height Layer</h2>
      <p class="text-secondary mb-4">
        In any Dolby Atmos configuration, sound is split into two primary planes: the listener-level bed layer (ear height) and the overhead height layer. In a 7.2.4 system, the first number ('7') designates the bed channels: Left, Center, Right, Left Surround, Right Surround, Left Rear Back, and Right Rear Back. The second number ('2') signifies two discrete subwoofers. The final number ('4') denotes four discrete ceiling speakers.
      </p>

      <div class="p-4 my-4 rounded bg-card border border-beige">
        <h3 class="h6 text-gold text-uppercase letter-spacing fw-bold mb-2"><i class="bi bi-info-circle me-2"></i>CEDIA Recommendation Rule:</h3>
        <p class="small text-secondary mb-0">
          Listener-level ear height should be strictly respected within ±15 degrees. When front Left/Center/Right speakers are mounted too high above the screen, overhead height effects lose their vertical separation and blur together into a confusing acoustic haze.
        </p>
      </div>

      <h2 class="h4 text-dark-primary fw-semibold mt-5 mb-3">2. Optimal Elevation Angles for In-Ceiling Height Drivers</h2>
      <p class="text-secondary mb-3">
        When installing four in-ceiling height speakers (the reference layout for medium to large rooms), Dolby recommends positioning them at specific angular coordinates relative to the primary listening position:
      </p>
      <ul class="text-secondary mb-4 ps-3">
        <li class="mb-2"><strong>Top Front Left & Right:</strong> 45° to 55° elevation angle forward of the listening seat.</li>
        <li class="mb-2"><strong>Top Rear Left & Right:</strong> 125° to 135° elevation angle rearward of the listening seat.</li>
        <li class="mb-2"><strong>Lateral Alignment:</strong> In-line with the Left and Right front mains (typically 0.5 to 0.7 times the room width).</li>
      </ul>

      <h2 class="h4 text-dark-primary fw-semibold mt-5 mb-3">3. Subwoofer Placement & Low-Frequency Management</h2>
      <p class="text-secondary mb-4">
        Low frequencies below 80Hz have wavelengths spanning from 14 feet to over 50 feet. These giant waves bounce between parallel walls, creating standing waves with deep nulls (where bass completely vanishes) and booming peaks. Placing one subwoofer in the corner almost always results in bloated, uneven response. By employing dual or quad subwoofers situated at opposing mid-wall points or opposing corners, boundary room modes cancel each other out, creating punchy, tight bass in every seat.
      </p>

      <blockquote class="p-4 my-4 rounded border-start border-4 border-gold bg-card">
        <p class="fst-italic text-dark-primary mb-1">
          "A properly calibrated 7.2.4 Dolby Atmos room provides seamless continuous panning. You should never be able to point to a speaker enclosure—sound should emanate organically from thin air."
        </p>
        <footer class="blockquote-footer text-gold small mt-2">Karthik Subramanian, AVÉRA Cinema</footer>
      </blockquote>
    `,
    tags: ["Dolby Atmos", "Speaker Placement", "Spatial Audio", "CEDIA Guidelines", "Dirac Live"]
  },
  {
    id: "laser-vs-lamp-projectors-2026",
    title: "Laser vs. Lamp Projectors: Why Solid-State Optics Are Transforming Luxury Private Cinemas",
    category: "Optics & Projection",
    categorySlug: "projection",
    badge: "Display Technology",
    author: {
      name: "Devika Raman",
      role: "ISF Level-III Video Calibrator",
      avatar: "images/products/sony-projector.webp"
    },
    date: "February 18, 2026",
    readTime: "7 min read",
    image: "images/services/projector-setup.webp",
    summary: "Why laser diode engines beat legacy high-pressure mercury lamps in color stability, contrast, instant-on playback, and long-term operating costs.",
    content: `
      <p class="lead fw-medium text-dark-primary mb-4">
        For decades, high-end home cinema projection relied on ultra-high-pressure (UHP) mercury vapor lamps. While lamps could generate decent lumen output, they suffered from rapid brightness degradation, sluggish warm-up times, and hot thermal signatures requiring noisy cooling fans. Today, solid-state laser projection has rendered UHP lamps obsolete.
      </p>

      <h2 class="h4 text-dark-primary fw-semibold mt-5 mb-3">1. Longevity & Spectral Color Consistency</h2>
      <p class="text-secondary mb-4">
        A standard UHP lamp loses up to 25% to 30% of its initial brightness within the first 500 hours of use, shifting the white point toward green or yellow and necessitating frequent recalibrations. In contrast, modern blue Z-Phosphor and RGB triple-laser engines deliver 20,000 to 30,000 hours of linear, stable performance. Over 10 years of heavy daily use, the laser light output degrades by less than 15%.
      </p>

      <h2 class="h4 text-dark-primary fw-semibold mt-5 mb-3">2. Dynamic Contrast and Absolute Black Levels</h2>
      <p class="text-secondary mb-4">
        Because lamp projectors rely on mechanical irises that physically open and close to throttle light during dark scenes, they are limited by physical transit speeds. Laser diodes can modulate their output electronically at microscopic speeds, dropping laser output to 0.000 lux in milliseconds during total black scene transitions. This yields virtually infinite dynamic on/off contrast.
      </p>

      <div class="table-responsive my-4">
        <table class="table table-bordered border-beige bg-card">
          <thead class="bg-secondary-theme">
            <tr>
              <th class="py-2 text-dark-primary">Metric</th>
              <th class="py-2 text-dark-primary">Legacy UHP Lamp</th>
              <th class="py-2 text-gold">Solid-State Laser Engine</th>
            </tr>
          </thead>
          <tbody class="text-secondary small">
            <tr>
              <td>Lifespan to 50% Luminance</td>
              <td>2,000 – 4,000 Hours</td>
              <td>20,000 – 30,000 Hours</td>
            </tr>
            <tr>
              <td>Startup Time to Full Brightness</td>
              <td>60 – 90 Seconds</td>
              <td>Under 10 Seconds</td>
            </tr>
            <tr>
              <td>Color Gamut Coverage</td>
              <td>~80% DCI-P3</td>
              <td>95% – 100% DCI-P3 / Rec.2020</td>
            </tr>
            <tr>
              <td>Operating Acoustic Noise</td>
              <td>30 – 36 dB (Loud Fans)</td>
              <td>22 – 26 dB (Whisper-Quiet)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 class="h4 text-dark-primary fw-semibold mt-5 mb-3">3. Recommendation for 2026 Installations</h2>
      <p class="text-secondary mb-4">
        Whether specifying Sony’s native 4K SXRD laser projectors or commercial Barco/Christie laser powerhouses, investing in a laser light engine ensures that the Hollywood color timing calibrated on Day 1 remains visually identical on Day 2,000.
      </p>
    `,
    tags: ["Laser Projector", "Sony SXRD", "HDR10", "ISF Calibration", "Optics"]
  },
  {
    id: "room-acoustics-decoupling-guide",
    title: "Acoustic Decoupling & Room-in-Room Isolation: Stopping Sound Bleed Without Sacrificing Bass",
    category: "Acoustics",
    categorySlug: "acoustics",
    badge: "Architectural Science",
    author: {
      name: "Rajesh Varma",
      role: "Principal Acoustic Architect",
      avatar: "images/services/acoustic-treatment.webp"
    },
    date: "February 10, 2026",
    readTime: "10 min read",
    image: "images/services/acoustic-treatment.webp",
    summary: "How resilient sound clips, damped green-glue drywall sandwiches, and whisper-quiet HVAC silencers isolate 115dB cinema peaks from sleeping quarters.",
    content: `
      <p class="lead fw-medium text-dark-primary mb-4">
        The hallmark of an elite private screening room is the ability to enjoy an explosion at reference 105dB volume at midnight without disturbing a family member sleeping in the master suite directly upstairs. Achieving this requires mastering acoustic mass, decoupling, damping, and mechanical air sealing.
      </p>

      <h2 class="h4 text-dark-primary fw-semibold mt-5 mb-3">1. The Myth of Egg Crates & Foam Panels</h2>
      <p class="text-secondary mb-4">
        One of the most persistent misconceptions in residential AV is that acoustic foam glued to walls soundproofs a room. Acoustic foam only absorbs high-frequency flutter echoes inside the space; it possesses virtually zero mass and does absolutely nothing to stop deep bass frequencies from vibrating through studs, drywall, and timber floorboards into adjacent rooms.
      </p>

      <h2 class="h4 text-dark-primary fw-semibold mt-5 mb-3">2. The Four Pillars of Sound Isolation</h2>
      <ul class="text-secondary mb-4 ps-3">
        <li class="mb-3">
          <strong>1. Mechanical Decoupling:</strong> Isolating the cinema walls from the home’s primary structural framing using resilient sound isolation clips and heavy hat channels. If structural framing does not physically touch, sound vibrations cannot bridge across.
        </li>
        <li class="mb-3">
          <strong>2. High Surface Mass:</strong> Utilizing double layers of 5/8-inch (16mm) fire-rated Type-X gypsum drywall. Heavy walls resist the physical momentum of sound pressure waves.
        </li>
        <li class="mb-3">
          <strong>3. Viscoelastic Damping:</strong> Applying viscoelastic damping compounds (Green Glue) between the two drywall layers. As acoustic energy tries to shear the wall, the compound converts vibrational energy into microscopic friction heat.
        </li>
        <li class="mb-3">
          <strong>4. Airtight Acoustic Sealing:</strong> Sound travels through air gaps like water through a leak. A 1% unsealed gap in an acoustic wall can degrade the overall Sound Transmission Class (STC) by over 50%. Every perimeter seam, electrical outlet box, and door jamb must be acoustically sealed.
        </li>
      </ul>

      <h2 class="h4 text-dark-primary fw-semibold mt-5 mb-3">3. HVAC Baffling: The Silent Air Paradox</h2>
      <p class="text-secondary mb-4">
        A cinema room that is hermetically sealed quickly becomes hot and stuffy due to the heat generated by projectors, amplifiers, and human bodies. Standard metal ductwork acts as an acoustic megaphone, carrying sound directly through air conditioning vents. AVÉRA Cinema engineers serpentine S-shaped acoustic baffle silencer boxes lined with dense fiberglass, allowing fresh cooled air to enter silently while trapping sound waves before they escape.
      </p>
    `,
    tags: ["Soundproofing", "Acoustic Decoupling", "STC Rating", "Green Glue", "HVAC Silencers"]
  },
  {
    id: "screen-gain-alr-fabric-selection",
    title: "Mastering Screen Gain: Micro-Perforated Fabrics vs. Ambient Light Rejecting (ALR) Surfaces",
    category: "Optics & Projection",
    categorySlug: "projection",
    badge: "Screen Science",
    author: {
      name: "Devika Raman",
      role: "ISF Level-III Video Calibrator",
      avatar: "images/products/sony-projector.webp"
    },
    date: "January 28, 2026",
    readTime: "6 min read",
    image: "images/gallery/theatre-04.webp",
    summary: "How to select the right optical surface for your room lux levels, viewing angles, and speaker-behind-screen acoustic requirements.",
    content: `
      <p class="lead fw-medium text-dark-primary mb-4">
        A high-performance laser projector paired with the wrong screen surface is like putting economy tires on an Italian sports car. The screen is the literal surface where light photons interact with your eyes, and selecting the correct gain, texture, and optical filter determines color saturation, black floor, and viewing angles.
      </p>

      <h2 class="h4 text-dark-primary fw-semibold mt-5 mb-3">1. Understanding Screen Gain</h2>
      <p class="text-secondary mb-4">
        Screen gain is a measurement of light reflectivity compared to a standard magnesium oxide block (defined as 1.0 gain). A 1.0 gain matte white screen distributes light equally in all directions with a wide 180-degree viewing cone. A higher gain screen (1.3 to 1.5) focuses light forward into a narrower cone, increasing perceived brightness for viewers sitting centrally but diminishing brightness for viewers sitting off to the sides.
      </p>

      <h2 class="h4 text-dark-primary fw-semibold mt-5 mb-3">2. When to Use Acoustically Transparent (AT) Woven Screens</h2>
      <p class="text-secondary mb-4">
        In true commercial and luxury screening environments, the front three speakers (Left, Center, Right) are positioned directly behind the screen surface. This anchors dialog and sound effects squarely to on-screen actors. Micro-perforated vinyl screens feature thousands of microscopic holes per square foot, while nano-woven screens interweave acoustically porous fibers. Woven screens introduce virtually zero moiré distortion and minimal high-frequency attenuation (<1.2dB), eliminating the need for aggressive treble compensation.
      </p>

      <h2 class="h4 text-dark-primary fw-semibold mt-5 mb-3">3. When to Choose Ambient Light Rejecting (ALR)</h2>
      <p class="text-secondary mb-4">
        If your entertainment room has windows, skylights, or light-colored walls that cannot be blacked out during sports games or daytime family gatherings, an ALR screen is essential. ALR fabrics utilize microscopic lenticular layers that absorb overhead and lateral ambient light while reflecting laser projector beams directly toward the audience, preserving deep black levels and HDR punch even with lights turned on.
      </p>
    `,
    tags: ["Screen Gain", "ALR Screen", "Acoustically Transparent", "Home Cinema", "ISF Standards"]
  },
  {
    id: "dirac-live-vs-audyssey-calibration",
    title: "Dirac Live vs. Audyssey MultEQ XT32: Digital Room Correction Explained",
    category: "Calibration",
    categorySlug: "calibration",
    badge: "Digital Signal Processing",
    author: {
      name: "Karthik Subramanian",
      role: "CEDIA ESC-T Audio Director",
      avatar: "images/products/jbl-speaker.webp"
    },
    date: "January 14, 2026",
    readTime: "9 min read",
    image: "images/products/denon-flagship.webp",
    summary: "A deep technical comparison of impulse response time-domain correction versus standard frequency amplitude parametric equalization.",
    content: `
      <p class="lead fw-medium text-dark-primary mb-4">
        Digital Room Correction (DRC) has evolved from simple automatic volume levelers into sophisticated mathematical DSP algorithms capable of reshaping how acoustic sound waves interact with room boundaries. Two systems dominate high-end AV receivers today: Dirac Live and Audyssey MultEQ XT32.
      </p>

      <h2 class="h4 text-dark-primary fw-semibold mt-5 mb-3">1. Frequency Domain vs. Time Domain Correction</h2>
      <p class="text-secondary mb-4">
        Most legacy calibration tools (including basic Audyssey) focus primarily on the frequency domain—measuring how loud each frequency is and boosting or cutting volume with parametric equalizer bands. However, human ears are extraordinarily sensitive to arrival timing (transient impulse response). When sound reflects off side walls, it arrives milliseconds after the direct sound, smearing acoustic details and muddying vocal clarity.
      </p>
      <p class="text-secondary mb-4">
        Dirac Live corrects both frequency amplitude AND impulse response simultaneously using mixed-phase filters. By correcting the time domain, percussion strikes stop ringing, musical instruments snap into precise focus, and movie dialogue sounds remarkably crisp and natural.
      </p>

      <h2 class="h4 text-dark-primary fw-semibold mt-5 mb-3">2. Dirac Live Bass Control (DLBC)</h2>
      <p class="text-secondary mb-4">
        The ultimate advantage of modern Dirac Live is Dirac Live Bass Control (DLBC). DLBC does not simply EQ subwoofers in isolation; it analyzes all subwoofers and main speakers simultaneously across all measurement seats. It automatically calculates optimal crossover filters, phase delays, and all-pass filters so that subwoofers and speakers blend together seamlessly with zero cancellation dips.
      </p>

      <div class="p-4 my-4 rounded bg-card border border-beige">
        <h3 class="h6 text-gold fw-bold mb-2">Our Verdict for Luxury Theatres:</h3>
        <p class="small text-secondary mb-0">
          Audyssey MultEQ-X is a robust, reliable tool for standard living room setups. But for reference private screening rooms and dedicated listening suites, Dirac Live Full Bandwidth with Bass Control delivers an audible leap forward in transient clarity, soundstage depth, and low-frequency tightness.
        </p>
      </div>
    `,
    tags: ["Dirac Live", "Audyssey", "Digital Room Correction", "Acoustics", "Calibration"]
  },
  {
    id: "smart-home-cinema-automation",
    title: "Seamless Cinema Automation: Designing 'One-Touch Movie Night' with Control4 & Crestron",
    category: "Smart Automation",
    categorySlug: "automation",
    badge: "Smart Automation",
    author: {
      name: "Arjun Mehta",
      role: "Systems Automation Lead",
      avatar: "images/gallery/theatre-06.webp"
    },
    date: "January 05, 2026",
    readTime: "6 min read",
    image: "images/gallery/theatre-06.webp",
    summary: "How to eliminate remote control clutter and orchestrate lighting, motorized blinds, HVAC, and audio gear into single intuitive macros.",
    content: `
      <p class="lead fw-medium text-dark-primary mb-4">
        Nothing breaks the spell of a luxury cinema faster than hunting through sofa cushions for three different plastic remotes, fiddling with input source menus, or having to get up mid-movie to adjust a blinding light fixture. Automation should disappear into the architecture, anticipating your desires effortlessly.
      </p>

      <h2 class="h4 text-dark-primary fw-semibold mt-5 mb-3">1. Anatomy of the Perfect 'Movie Night' Scene</h2>
      <p class="text-secondary mb-4">
        When designed by a certified CEDIA systems integrator, pressing a single backlit button on an ergonomic handheld remote initiates a synchronized symphony of commands executed in background parallel:
      </p>
      <ul class="text-secondary mb-4 ps-3">
        <li class="mb-2"><strong>Projector & Processor Power:</strong> Wakes the laser light engine and turns on discrete power amplifiers in staggered sequence to prevent breaker tripping.</li>
        <li class="mb-2"><strong>Motorized Screen & Masking:</strong> Lowers the tab-tensioned screen from its ceiling pocket and sets side aspect ratio masking to 2.39:1 cinemascope.</li>
        <li class="mb-2"><strong>Architectural Lighting:</strong> Dims ceiling downlights to zero, leaves floor step lights at 10% amber warmth, and turns starlight ceiling constellations on.</li>
        <li class="mb-2"><strong>Climate & Acoustics:</strong> Sets silent thermostat preset to 21°C and drops AC fan blowers to whisper mode (<20dB noise floor).</li>
      </ul>

      <h2 class="h4 text-dark-primary fw-semibold mt-5 mb-3">2. Intelligent Pause & Intermission States</h2>
      <p class="text-secondary mb-4">
        True intelligence is situational awareness. When the homeowner presses 'Pause' to grab drinks or answer the door, our systems don't leave you fumbling in pitch darkness. The automation controller automatically fades soft path lights and bar sconces up to 25% brightness over 3 seconds. Pressing 'Play' gently fades them back to pitch black as the film resumes.
      </p>
    `,
    tags: ["Control4", "Crestron", "Smart Lighting", "Home Cinema", "Automation"]
  }
];

// Helper functions for lookup
function getAllBlogPosts() {
  return AV_BLOG_POSTS;
}

function findBlogPostById(id) {
  if (!id) return null;
  const cleanId = String(id).trim().toLowerCase().replace(/^#/, '');
  return AV_BLOG_POSTS.find(b => b.id.toLowerCase() === cleanId) || null;
}

function getBlogPostsByCategory(categorySlug) {
  if (!categorySlug || categorySlug === 'all') return AV_BLOG_POSTS;
  return AV_BLOG_POSTS.filter(b => b.categorySlug.toLowerCase() === categorySlug.toLowerCase());
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { AV_BLOG_POSTS, getAllBlogPosts, findBlogPostById, getBlogPostsByCategory };
}
