/**
 * AVÉRA CINEMA — Curated Services Catalog
 * Detailed technical specifications, room deliverables, engineering processes, and FAQs
 * for all 15 official installation and design services.
 */

const AV_SERVICES = [
  {
    id: "home-theatre-installation",
    aliases: ["home-theatre", "theatre-installation", "custom-theatre", "complete-home-cinema-package", "cinema-package", "turnkey-package", "luxury-cinema-package"],
    name: "Home Theatre Installation",
    category: "Turnkey Cinema",
    categorySlug: "turnkey",
    badge: "Turnkey Luxury Solution",
    image: "images/gallery/theatre-01.webp",
    gallery: [
      "images/gallery/theatre-01.webp",
      "images/gallery/theatre-02.webp",
      "images/hero/hero-home-theatre.webp"
    ],
    tagline: "End-to-end bespoke private cinema installation engineered to CEDIA and THX reference standards.",
    shortDesc: "Comprehensive turnkey home theatre installations combining 4K laser projection, immersive multi-channel audio, acoustically tuned walls, and whisper-quiet climate control.",
    fullDesc: [
      "AVÉRA Cinema's flagship Home Theatre Installation service provides a seamless, white-glove pathway from an empty room to a certified reference private screening sanctuary. We harmonise interior architecture, structural sound isolation, and cutting-edge audio-video engineering into a cohesive cinematic masterpiece.",
      "Every project begins with a 3D laser scan and acoustic room resonance calculation. Our CEDIA-certified installation engineers construct decoupled framing, route high-current shielded power feeds, install zero-bezel acoustic wall fabrics, and configure native 4K laser projection matched to micro-perforated acoustic screens.",
      "The result is an extraordinary private retreat that transcends commercial cinemas, delivering master-tape sound clarity, velvet-black contrast, and intuitive one-touch control from any smartphone, tablet, or custom touch panel."
    ],
    priceTier: "Custom Quotation Based on Room Dimensions",
    completionTime: "2 to 4 Weeks",
    warranty: "5-Year White-Glove Installation Warranty",
    deliverables: [
      "Complete 3D photorealistic CAD room renderings and sightline analysis",
      "Full acoustic room isolation (box-in-a-box construction)",
      "Native 4K SXRD / D-ILA Laser Projector with anamorphic lens support",
      "Acoustically transparent micro-perforated projection screen (110\" - 200\")",
      "Dolby Atmos 7.2.4 or 9.4.6 spatial audio speaker array with concealed drivers",
      "Rack-mounted multi-channel amplification with active thermal ventilation",
      "Dirac Live 3D multi-point room calibration and bass management",
      "One-touch automation for motorized seating, lighting scenes, and projector blinds"
    ],
    features: [
      {
        icon: "bi-display",
        title: "Reference Cinema Optics",
        desc: "Color-graded native 4K laser optics delivering up to 3,000 ANSI lumens and infinite contrast across widescreen cinemascope formats."
      },
      {
        icon: "bi-speaker",
        title: "360° Spatial Sound Field",
        desc: "Precision-angled height and bed speakers calibrated for pinpoint object-based sound tracking according to Dolby Atmos guidelines."
      },
      {
        icon: "bi-shield-check",
        title: "CEDIA Certified Engineering",
        desc: "Every phase complies with CEDIA CEB-22 audio design and CEB-23 video projection industry standards."
      },
      {
        icon: "bi-sliders",
        title: "Dirac Live Spatial Tuning",
        desc: "Digital room correction correcting frequency response and impulse delay for every seat in the cinema room."
      }
    ],
    processSteps: [
      {
        phase: "Phase 01",
        title: "Acoustic Survey & 3D Architectural Scan",
        desc: "On-site laser measurement of room geometry, ambient light analysis, and structural RT60 reverberation assessment."
      },
      {
        phase: "Phase 02",
        title: "Structural Isolation & Cable Routing",
        desc: "Installation of resilient sound-decoupling channels, silent HVAC baffles, and heavy-gauge OFC oxygen-free speaker cabling."
      },
      {
        phase: "Phase 03",
        title: "Equipment Integration & Screen Mounting",
        desc: "Precision rigging of native 4K laser projector, motorized or fixed screen, and hidden architectural speaker back-boxes."
      },
      {
        phase: "Phase 04",
        title: "Laboratory Calibration & Handover",
        desc: "ISF Level-III color calibration, multi-subwoofer phase alignment, Dirac Live filter generation, and client walkthrough."
      }
    ],
    specs: [
      { label: "Recommended Room Size", value: "200 sq.ft to 1,200+ sq.ft" },
      { label: "Audio Channels", value: "7.2.4, 9.4.6, or 11.4.8 Dolby Atmos / DTS:X Pro" },
      { label: "Display Capabilities", value: "4K HDR10+ / Dolby Vision 120Hz" },
      { label: "Acoustic Decoupling", value: "STC 65+ Sound Transmission Class Isolation" },
      { label: "Control System", value: "Control4, Crestron, or Savant One-Touch Integration" }
    ],
    faqs: [
      {
        q: "How long does a complete home cinema installation typically take?",
        a: "A turnkey home theatre project typically spans 2 to 4 weeks depending on the level of architectural acoustic construction and custom cabinetry required. Equipment wiring and calibration are completed during the final week."
      },
      {
        q: "Can you convert an existing bedroom, basement, or living area into a cinema?",
        a: "Yes. Over 70% of our installations are retrofits in existing homes. We utilize specialized low-profile acoustic decoupling treatments and architectural in-wall speakers to preserve maximum room volume."
      },
      {
        q: "What warranty and post-installation support do you offer?",
        a: "All AVÉRA Cinema turnkey installations include our 5-Year Craftsmanship Guarantee, manufacturer warranties on all hardware (up to 5 years), and complimentary bi-annual calibration checkups."
      }
    ],
    relatedServices: ["surround-sound-installation", "acoustic-treatment", "cinema-room-design", "projector-installation"]
  },
  {
    id: "surround-sound-installation",
    aliases: ["surround-sound", "5-1-surround", "7-1-surround"],
    name: "Surround Sound Installation",
    category: "Multi-Channel Audio",
    categorySlug: "audio",
    badge: "",
    image: "images/services/surround-sound.webp",
    gallery: [
      "images/services/surround-sound.webp",
      "images/products/jbl-speaker.webp",
      "images/products/denon-flagship.webp"
    ],
    tagline: "Pinpoint speaker placement, driver angling, and mathematical delay calibration for enveloping 360° immersion.",
    shortDesc: "Expert installation and calibration of 5.1, 7.1, and multi-channel audio setups engineered to eliminate dead spots and bring movies and concerts to life.",
    fullDesc: [
      "True surround sound is not just about mounting speakers in corners—it is an exact science of angles, delay timings, reflection management, and acoustic phase coherency. AVÉRA Cinema designs surround sound arrays that envelop the audience in seamless three-dimensional audio.",
      "We calculate speaker positions relative to the primary listening position (sweet spot), ensuring that ambient sound effects, panning vehicles, and orchestral scores move through the listening environment with effortless continuity.",
      "Whether utilizing elegant floorstanding towers, architectural zero-bezel in-wall speakers, or discrete on-wall monitors, our installations guarantee zero visible wires, robust acoustic isolation, and authoritative dynamic impact."
    ],
    priceTier: "Custom Packages Available",
    completionTime: "1 to 2 Days",
    warranty: "3-Year Installation Warranty",
    deliverables: [
      "Laser-guided speaker position calculation matching ITU-R BS.775 recommendations",
      "Concealed in-wall, in-ceiling, or surface-mounted heavy gauge OFC cabling",
      "High-power AV receiver or multi-channel power amplifier configuration",
      "Subwoofer crossover integration and low-frequency boundary loading tuning",
      "Digital delay and channel level matching with precision SPL meter"
    ],
    features: [
      {
        icon: "bi-speaker-fill",
        title: "Laser-Aligned Dispersal",
        desc: "Each tweeter and mid-range cone is angled specifically toward primary and secondary listening seats."
      },
      {
        icon: "bi-soundwave",
        title: "Seamless Subwoofer Blending",
        desc: "Mathematical integration between main speakers and subwoofers to eliminate frequency suckouts at the 80Hz crossover."
      },
      {
        icon: "bi-tools",
        title: "Clean Invisible Cabling",
        desc: "Zero exposed conduits or unsightly wires; all wiring is routed behind baseboards, crown molding, or through stud bays."
      },
      {
        icon: "bi-music-note-beamed",
        title: "Hi-Res Audio Compatibility",
        desc: "Optimized for lossless multi-channel PCM, Dolby TrueHD, DTS-HD Master Audio, and Apple Music Spatial Audio."
      }
    ],
    processSteps: [
      {
        phase: "Phase 01",
        title: "Room Acoustic Assessment",
        desc: "Evaluation of room dimensions, wall boundaries, and optimal listening chair locations."
      },
      {
        phase: "Phase 02",
        title: "Concealed Infrastructure Routing",
        desc: "Installation of plenum-rated high-purity copper speaker cables and terminal wall plates."
      },
      {
        phase: "Phase 03",
        title: "Transducer Mounting & Rigging",
        desc: "Secure mounting with anti-vibration damping gaskets to prevent wall resonance during high volume peaks."
      },
      {
        phase: "Phase 04",
        title: "SPL Level Matching & Listening Test",
        desc: "Pink noise generator calibration to achieve reference 85dB SPL listening level with 20dB headroom."
      }
    ],
    specs: [
      { label: "Configuration Options", value: "5.1, 7.1, 7.2 Traditional & Expanded Surround" },
      { label: "Cabling Standard", value: "12 AWG 99.99% Oxygen-Free Copper (CL3 In-Wall Rated)" },
      { label: "Frequency Target", value: "20 Hz – 24,000 Hz Flat Room Response" },
      { label: "Compatible Brands", value: "JBL Synthesis, Bowers & Wilkins, KEF, Klipsch, Bose" }
    ],
    faqs: [
      {
        q: "What is the difference between 5.1 and 7.1 surround sound?",
        a: "A 5.1 system utilizes three front channels (Left, Center, Right) and two surround speakers beside the seating. A 7.1 system adds two rear back surround speakers behind the seating, creating a vastly superior sense of depth and rear-to-front motion tracking."
      },
      {
        q: "Will my walls rattle when playing action movies at high volumes?",
        a: "No. We install acoustic damping pads and rigid MDF backboxes behind all architectural in-wall speakers, ensuring energy transfers into the room as acoustic sound waves rather than structural drywall vibrations."
      }
    ],
    relatedServices: ["dolby-atmos-setup", "av-receiver-setup", "speaker-installation", "audio-calibration"]
  },
  {
    id: "dolby-atmos-setup",
    aliases: ["dolby-atmos", "atmos-setup", "spatial-audio"],
    name: "Dolby Atmos Setup",
    category: "Multi-Channel Audio",
    categorySlug: "audio",
    badge: "Spatial Audio Engineering",
    image: "images/gallery/theatre-03.webp",
    gallery: [
      "images/gallery/theatre-03.webp",
      "images/products/bose-inceiling.webp",
      "images/services/surround-sound.webp"
    ],
    tagline: "True three-dimensional object-based overhead spatial sound that makes audio move around you with pinpoint realism.",
    shortDesc: "Certified Dolby Atmos and DTS:X height channel engineering with in-ceiling architectural drivers, upward-firing modules, and discrete multi-channel processing.",
    fullDesc: [
      "Dolby Atmos frees sound from traditional static channels, allowing sound designers to place and move individual audio objects anywhere in three-dimensional room space—including directly overhead. AVÉRA Cinema is an authorized Dolby Atmos certified installer.",
      "We design Atmos overhead systems utilizing discrete architectural in-ceiling drivers with wide-dispersion wave-guides, precisely calculated at 45-degree elevation angles from the primary listener's ear height.",
      "From gentle tropical rain falling on the leaves above you to the thunderous vertical pass of a fighter jet, our Atmos setups unlock unprecedented spatial dimensionality and emotional engagement."
    ],
    priceTier: "Custom Quotation",
    completionTime: "1 to 3 Days",
    warranty: "5-Year Installation Warranty",
    deliverables: [
      "CEDIA-compliant 3D Atmos elevation angle calculations (45° to 55° azimuth)",
      "Installation of wide-dispersion discrete in-ceiling height speakers",
      "Acoustic backbox enclosure integration for maximum overhead bass dynamics",
      "Dolby Atmos certified AV receiver / pre-processor setup with Dirac Live Bass Control",
      "Channel pink noise test, phase delay alignment, and Dolby Demonstration Suite handover"
    ],
    features: [
      {
        icon: "bi-cloud-arrow-down",
        title: "Discrete Overhead Height Channels",
        desc: "2, 4, or 6 discrete ceiling transducers creating a dome of realistic vertical sound."
      },
      {
        icon: "bi-soundwave",
        title: "Object-Based Audio Rendering",
        desc: "Real-time rendering of up to 128 simultaneous audio objects with absolute spatial accuracy."
      },
      {
        icon: "bi-badge-hd",
        title: "Lossless Audio Bitstreams",
        desc: "Full support for Dolby TrueHD Atmos bitstreams delivered via HDMI 2.1 eARC from 4K Blu-ray and high-end streaming."
      },
      {
        icon: "bi-cpu",
        title: "Dirac Live Spatial Bass Tuning",
        desc: "Eliminates low-frequency ceiling reflections and preserves punchy transient impacts."
      }
    ],
    processSteps: [
      {
        phase: "Phase 01",
        title: "Ceiling Joist & Stud Inspection",
        desc: "Laser mapping of ceiling joists, ductwork, and structural beams to ensure ideal speaker coordinates."
      },
      {
        phase: "Phase 02",
        title: "Precision Acoustic Enclosures",
        desc: "Cutting drywall openings with zero dust escape and installing rigid sealed back-boxes."
      },
      {
        phase: "Phase 03",
        title: "Driver Installation & Wiring",
        desc: "Connecting high-strand OFC cable to pivoted coaxial drivers aimed toward ear-height sweet spot."
      },
      {
        phase: "Phase 04",
        title: "Dolby Test Tone Calibration",
        desc: "Multi-seat microphone measurement verifying phase coherence between bed speakers and overhead channels."
      }
    ],
    specs: [
      { label: "Channel Layouts", value: "5.1.2, 5.1.4, 7.2.4, 9.4.6, 11.4.8" },
      { label: "Dispersion Angle", value: "110° to 120° Ultra-Wide Conical Dispersion" },
      { label: "Supported Formats", value: "Dolby Atmos, Dolby Atmos for Gaming, DTS:X, Auro-3D" },
      { label: "Speaker Types", value: "Flush Magnetic Grille Architectural In-Ceiling" }
    ],
    faqs: [
      {
        q: "Can I install Dolby Atmos if I cannot cut into my ceiling?",
        a: "Yes. While dedicated in-ceiling speakers offer the highest fidelity, we also engineer upward-firing Dolby Atmos elevation modules that reflect acoustic waves off flat, reflective ceilings with remarkable precision."
      },
      {
        q: "How many height speakers do I need for Dolby Atmos?",
        a: "A minimum of two height speakers (e.g. 5.1.2) introduces vertical sound. However, four height speakers (e.g. 7.1.4) is the recognized reference standard, allowing sound to smoothly pan from front-to-back overhead."
      }
    ],
    relatedServices: ["surround-sound-installation", "speaker-installation", "av-receiver-setup", "audio-calibration"]
  },
  {
    id: "projector-installation",
    aliases: ["projector", "laser-projector", "projector-mounting"],
    name: "Projector Installation",
    category: "Projection & Display",
    categorySlug: "display",
    badge: "ISF Level-III Calibrated",
    image: "images/services/projector-setup.webp",
    gallery: [
      "images/services/projector-setup.webp",
      "images/products/sony-projector.webp",
      "images/gallery/theatre-02.webp"
    ],
    tagline: "Precision ceiling rigging, anamorphic lens alignment, and ISF Level-III color calibration for native 4K laser projection.",
    shortDesc: "High-precision mounting and optical alignment of native 4K, SXRD, and Ultra-Short-Throw laser projectors delivering luminous, cinema-grade imagery.",
    fullDesc: [
      "A luxury private cinema projector requires far more than resting a unit on a shelf. True cinematic brilliance depends on precise optical throw ratio calculations, zero keystone digital degradation, thermal exhaust clearance, and colorimeter-calibrated color balances.",
      "AVÉRA Cinema installs ceiling-recessed motorized lifts, rigid vibration-damped ceiling brackets, and bespoke cabinetry for Ultra-Short-Throw (UST) laser systems. We ensure the lens center aligns squarely with the optical center of your screen.",
      "Following physical installation, our ISF Level-III certified video engineers adjust grayscale tracking, gamma curvature, dynamic tone mapping, and laser output to deliver Hollywood-mastered picture quality in any room."
    ],
    priceTier: "Custom Quotation",
    completionTime: "1 Day",
    warranty: "3-Year Installation Warranty",
    deliverables: [
      "Laser-guided throw distance and vertical/horizontal lens shift calculation",
      "Heavy-duty vibration-free structural ceiling mounting or motorized lift integration",
      "High-speed 48Gbps Fiber-Optic HDMI 2.1 cable routing",
      "ISF Level-III colorimeter grayscale and CMS color gamut calibration",
      "Dynamic HDR10, HDR10+, and Dolby Vision playback profiling"
    ],
    features: [
      {
        icon: "bi-aspect-ratio",
        title: "Optical Lens Shift Alignment",
        desc: "100% optical alignment without digital keystone correction, preserving native 8.3-million-pixel resolution."
      },
      {
        icon: "bi-lightning-charge",
        title: "Fiber-Optic HDMI 2.1 Routing",
        desc: "Certified 48Gbps active optical cabling supporting uncompressed 4K 120Hz and 8K 60Hz without signal attenuation."
      },
      {
        icon: "bi-eye",
        title: "ISF Calibration Certification",
        desc: "Precision tuning with spectral radiometers to achieve D65 white point and Delta E < 1.0 color accuracy."
      },
      {
        icon: "bi-gear",
        title: "Motorized Concealed Lifts",
        desc: "Optional ceiling-recessed lifts that hide the projector completely when not in use."
      }
    ],
    processSteps: [
      {
        phase: "Phase 01",
        title: "Optical Throw & Ambient Light Study",
        desc: "Calculating throw ratio, seating sightlines, and room lux levels for ideal screen surface pairing."
      },
      {
        phase: "Phase 02",
        title: "Structural Ceiling Mounting",
        desc: "Anchoring heavy-duty steel plate into ceiling joists to eliminate micro-vibrations from bass frequencies."
      },
      {
        phase: "Phase 03",
        title: "48Gbps Cable Connection & Power",
        desc: "Running active optical HDMI and isolated surge-protected power feeds to the projector location."
      },
      {
        phase: "Phase 04",
        title: "Laser Focus & Grayscale Calibration",
        desc: "Sub-pixel convergence alignment, focus fine-tuning, and calibrated picture mode programming."
      }
    ],
    specs: [
      { label: "Resolution", value: "Native 4K (3,840 x 2,160) & True 8K Enhancement" },
      { label: "Light Source Support", value: "Z-Phosphor Laser, RGB Triple Laser, Hybrid LED" },
      { label: "Mounting Options", value: "Ceiling Flush, Drop Pole, Motorized Scissor Lift, In-Cabinet" },
      { label: "Partner Brands", value: "Sony SXRD, Epson Pro Cinema, BenQ CinePrime, JVC D-ILA" }
    ],
    faqs: [
      {
        q: "Why is optical lens shift better than digital keystone correction?",
        a: "Digital keystone compresses and artificially rescales pixels, causing noticeable blurriness and jagged edges. Optical lens shift moves the physical glass elements inside the lens, keeping every pixel razor-sharp and unadulterated."
      },
      {
        q: "Do laser projectors need replacement bulbs?",
        a: "No. Modern solid-state laser projectors offer 20,000 to 30,000 hours of maintenance-free operation—equivalent to watching a 2-hour movie every single day for over 27 years without changing a lamp."
      }
    ],
    relatedServices: ["projector-screen-installation", "cinema-room-design", "tv-display-installation", "cable-management"]
  },
  {
    id: "projector-screen-installation",
    aliases: ["projector-screen", "screen-installation", "alr-screen"],
    name: "Projector Screen Installation",
    category: "Projection & Display",
    categorySlug: "display",
    badge: "Optical Surface Mastery",
    image: "images/gallery/theatre-04.webp",
    gallery: [
      "images/gallery/theatre-04.webp",
      "images/services/projector-setup.webp",
      "images/gallery/theatre-01.webp"
    ],
    tagline: "Acoustically transparent micro-perforated fabrics, motorized drop-down screens, and Ambient Light Rejecting (ALR) optical surfaces.",
    shortDesc: "Specialist installation of fixed velvet-frame, motorized tab-tensioned, and acoustically transparent screens customized to room ambient light and sound dynamics.",
    fullDesc: [
      "The projection screen is 50% of the visual equation. Projecting onto a painted wall or an inferior surface scatters light, crushes dynamic contrast, and introduces hot-spot glare. AVÉRA Cinema matches optical screen science directly to your projector and room conditions.",
      "For dedicated dark cinema rooms, we install acoustically transparent woven or micro-perforated screens that allow center-channel dialogue and front stage sound to emanate directly from behind the movie characters' lips.",
      "For multi-purpose media rooms with daylight windows, we install specialized Ambient Light Rejecting (ALR) lenticular optical surfaces that absorb stray ambient light from the ceiling and walls while reflecting pure laser brightness directly to your eyes."
    ],
    priceTier: "Custom Quotation",
    completionTime: "1 Day",
    warranty: "5-Year Surface Flatness Guarantee",
    deliverables: [
      "Screen size calculation based on THX 40-degree and 36-degree cinema viewing angles",
      "Heavy-gauge aircraft-grade aluminum frame assembly with light-absorbing velvet border",
      "Laser-level mounting with zero ripple tensioning system",
      "Acoustically transparent fabric certification (sound attenuation < 1.5dB)",
      "Motorized low-voltage trigger integration connecting projector power to screen lowering"
    ],
    features: [
      {
        icon: "bi-aspect-ratio-fill",
        title: "Cinemascope 2.35:1 & 16:9 Formats",
        desc: "Custom aspect ratios available with optional motorized masking systems for letterbox-free viewing."
      },
      {
        icon: "bi-sun",
        title: "Ambient Light Rejection (ALR)",
        desc: "Microscopic optical ridges filter out up to 90% of ambient light, enabling daytime viewing."
      },
      {
        icon: "bi-soundwave",
        title: "Acoustically Transparent Woven Fabric",
        desc: "Allows speakers to sit directly behind the screen without high-frequency attenuation or moiré patterns."
      },
      {
        icon: "bi-arrows-expand",
        title: "Tab-Tensioned Flatness Guarantee",
        desc: "Motorized screens feature dual-sided lateral tab-tensioning cables to ensure a completely ripple-free glass-flat surface."
      }
    ],
    processSteps: [
      {
        phase: "Phase 01",
        title: "Room Sightline & Height Calculation",
        desc: "Ensuring the bottom edge of the screen is at the optimal 1/3 eye-height level for neck-strain-free viewing."
      },
      {
        phase: "Phase 02",
        title: "Precision Velvet Frame Assembly",
        desc: "Hand-assembling mitered corner joints and stretching the optical fabric with uniform perimeter springs."
      },
      {
        phase: "Phase 03",
        title: "Wall Anchoring & Leveling",
        desc: "Affixing heavy-duty Z-clips with industrial wall anchors checked with cross-line lasers."
      },
      {
        phase: "Phase 04",
        title: "Trigger Synchronization",
        desc: "Programming 12V DC triggers or RF remote modules so the screen deploys automatically on power-on."
      }
    ],
    specs: [
      { label: "Available Sizes", value: "100\" to 250\" Diagonal" },
      { label: "Gain Options", value: "0.8 (Dark Room High Contrast) to 1.3 (High Gain ALR)" },
      { label: "Screen Types", value: "Fixed Frame, Motorized In-Ceiling, Motorized Floor-Rising" },
      { label: "Fabric Technology", value: "Nano-Weave Acoustic, Micro-Perforated, Obsidian ALR" }
    ],
    faqs: [
      {
        q: "What is an acoustically transparent screen and why is it recommended?",
        a: "In commercial cinemas, speakers are hidden directly behind the screen so voices and sounds come right from the visual action. An acoustically transparent screen has microscopic perforations that let sound pass through cleanly without degrading picture resolution."
      },
      {
        q: "Can I watch movies on an ALR screen with the lights on?",
        a: "Yes! Ambient Light Rejecting screens feature multi-layer optical microscopic filters that reject light coming from above and sides while reflecting projector light straight forward, maintaining deep blacks even with room lights illuminated."
      }
    ],
    relatedServices: ["projector-installation", "cinema-room-design", "acoustic-treatment", "home-theatre-installation"]
  },
  {
    id: "acoustic-treatment",
    aliases: ["acoustic-panels", "room-acoustics", "soundproofing"],
    name: "Acoustic Treatment & Soundproofing",
    category: "Acoustic Engineering",
    categorySlug: "acoustics",
    badge: "CEDIA Acoustic Science",
    image: "images/services/acoustic-treatment.webp",
    gallery: [
      "images/services/acoustic-treatment.webp",
      "images/gallery/theatre-05.webp",
      "images/hero/hero-home-theatre.webp"
    ],
    tagline: "Architectural sound isolation, bass trap resonance neutralization, and custom fabric-wrapped acoustic absorption.",
    shortDesc: "Scientific room acoustics optimization controlling reverberation time (RT60), standing waves, flutter echoes, and boundary bass bloat with architectural elegance.",
    fullDesc: [
      "Even the world's most expensive speakers cannot overcome the physics of a poorly treated room. Bare walls, hard floors, and glass surfaces create sonic reflections, muddy dialogue, and booming bass resonances that destroy fidelity. AVÉRA Cinema tames room acoustics with laboratory precision.",
      "We begin by testing room acoustics with impulse response sweeps, analyzing primary reflections, flutter echo, and Room Modes (standing waves between 20Hz and 200Hz). We then design a customized balance of absorption, diffusion, and bass trapping.",
      "Our treatments integrate seamlessly into luxury interiors through acoustically transparent architectural fabrics, slatted natural timber diffusers, stretched fabric wall systems, and hidden corner bass traps that preserve interior aesthetics."
    ],
    priceTier: "Custom Quotation",
    completionTime: "3 to 5 Days",
    warranty: "Lifetime Structural Acoustic Integrity",
    deliverables: [
      "Comprehensive room impulse testing and RT60 reverberation analysis",
      "First-reflection point absorption panels to clarify vocal dialogue",
      "Custom quadratic residue sound diffusers to preserve natural acoustic spaciousness",
      "Corner membrane bass traps targeting room resonance modes",
      "Architectural stretched fabric wall tracking with custom designer fabrics"
    ],
    features: [
      {
        icon: "bi-soundwave",
        title: "RT60 Reverberation Optimization",
        desc: "Brings room reverberation down to the golden CEDIA standard of 0.25 to 0.35 seconds for crisp speech intelligibility."
      },
      {
        icon: "bi-grid-3x3",
        title: "2D & 3D Quadratic Diffusers",
        desc: "Scatters specular sound reflections uniformly without deadening high-frequency musical energy."
      },
      {
        icon: "bi-shield-shaded",
        title: "Decoupled Sound Isolation",
        desc: "Resilient clips and acoustic sealants prevent sound from leaking into adjacent bedrooms and living areas."
      },
      {
        icon: "bi-palette",
        title: "Architectural Fabric Finishes",
        desc: "Over 200 luxury fabric colors and textures from Guilford of Maine and European textile houses."
      }
    ],
    processSteps: [
      {
        phase: "Phase 01",
        title: "Acoustic Sweep & Waterfall Analysis",
        desc: "Generating 3D waterfall decay plots to identify resonance peaks and bass flutter."
      },
      {
        phase: "Phase 02",
        title: "Mirror Reflection Point Mapping",
        desc: "Laser mapping first reflection points between all speakers and listening seats."
      },
      {
        phase: "Phase 03",
        title: "Panel Fabrication & Mounting",
        desc: "Installing high-density 96kg/m³ mineral wool cores wrapped in fire-rated acoustically transparent fabric."
      },
      {
        phase: "Phase 04",
        title: "Post-Treatment Verification",
        desc: "Re-measuring impulse decay to verify flat frequency response and zero bass overhang."
      }
    ],
    specs: [
      { label: "Core Density", value: "96 kg/m³ High-Density Acoustic Basotect / Mineral Fiber" },
      { label: "Fire Safety Rating", value: "Class A / ASTM E84 Flame Spread Certified" },
      { label: "Absorption NRC", value: "NRC 0.95 – 1.05 Across Vocal & Mid-Range Frequencies" },
      { label: "Bass Trapping Range", value: "Tuned Diaphragmatic Traps Effective Down to 35 Hz" }
    ],
    faqs: [
      {
        q: "Will acoustic panels make my cinema room sound lifeless and dead?",
        a: "Never with our designs. Over-absorbing a room with cheap foam kills the high frequencies while leaving bass booming. We use a precise ratio of absorption and mathematical diffusion to keep the room lively, warm, and natural."
      },
      {
        q: "What is the difference between soundproofing and acoustic treatment?",
        a: "Soundproofing stops sound from escaping the room or entering from outside (requiring mass, decoupling, and airtight construction). Acoustic treatment controls how sound bounces inside the room so it sounds clear, balanced, and immersive."
      }
    ],
    relatedServices: ["home-theatre-installation", "cinema-room-design", "surround-sound-installation", "audio-calibration"]
  },
  {
    id: "speaker-installation",
    aliases: ["speakers", "inwall-speakers", "architectural-speakers"],
    name: "Speaker Installation & Craftsmanship",
    category: "Multi-Channel Audio",
    categorySlug: "audio",
    badge: "Architectural Invisibility",
    image: "images/products/jbl-speaker.webp",
    gallery: [
      "images/products/jbl-speaker.webp",
      "images/products/bose-inceiling.webp",
      "images/services/surround-sound.webp"
    ],
    tagline: "Flush-mount zero-bezel in-wall speakers, audiophile floorstanding towers, and sealed backbox integration.",
    shortDesc: "Precision physical mounting of architectural in-wall, in-ceiling, on-wall, and standalone audiophile speakers with vibration isolation and paintable grilles.",
    fullDesc: [
      "Speaker mounting requires meticulous structural craftsmanship. Improperly secured drivers produce rattle and sympathetic resonance, while wrong cavity depths rob woofers of their acoustic bass extension. AVÉRA Cinema engineers pristine speaker installations.",
      "We build sealed structural MDF and polyurethane back-boxes inside wall cavities, isolating the rear acoustic wave and decoupling the speaker from drywall studs with high-density silicone gaskets.",
      "Our technicians route heavy-gauge audiophile speaker cables, terminate connections with gold-plated locking banana plugs, and paint magnetic grilles to match your exact wall colors for flawless architectural integration."
    ],
    priceTier: "Custom Packages Available",
    completionTime: "1 to 2 Days",
    warranty: "5-Year Installation Warranty",
    deliverables: [
      "Structural cavity reinforcement with acoustic insulation and sealed backboxes",
      "Laser-leveled speaker cutouts with zero dust drywall extraction",
      "Anti-vibration silicone gasket mounting eliminating drywall buzz",
      "Paintable micro-perforated magnetic grilles matched to interior paint code",
      "Full frequency sweep testing from 20Hz to 20,000Hz to verify zero resonance"
    ],
    features: [
      {
        icon: "bi-box",
        title: "Sealed Back-Box Isolation",
        desc: "Guarantees predictable bass response and prevents sound transmission into adjoining bedrooms."
      },
      {
        icon: "bi-brush",
        title: "Color-Matched Invisible Grilles",
        desc: "Grilles are custom painted in our workshop using high-pressure sprayers so holes remain completely unblocked."
      },
      {
        icon: "bi-shield-check",
        title: "Anti-Rattle Certification",
        desc: "Every wall section is subjected to a 100-watt sine-wave sweep to ensure not a single screw or drywall joint rattles."
      },
      {
        icon: "bi-broadcast-pin",
        title: "Directional Tweeter Aiming",
        desc: "Pivoting beryllium and silk-dome tweeters are aimed precisely at the primary sweet spot for razor-sharp imaging."
      }
    ],
    processSteps: [
      {
        phase: "Phase 01",
        title: "Cavity Stud & Wire Scoping",
        desc: "Digital stud scanning and cavity inspection using endoscope cameras to ensure zero electrical interference."
      },
      {
        phase: "Phase 02",
        title: "Backbox Insertion & Damping",
        desc: "Installing rigid acoustic backbox enclosures filled with acoustic polyfill."
      },
      {
        phase: "Phase 03",
        title: "Driver Terminations & Mounting",
        desc: "Torque-controlled dog-leg clamping ensuring airtight pressure against the wall surface."
      },
      {
        phase: "Phase 04",
        title: "Sine Sweep & Phase Confirmation",
        desc: "Polarity testing using digital phase detectors confirming all drivers are firing in positive absolute phase."
      }
    ],
    specs: [
      { label: "Speaker Formats", value: "In-Wall, In-Ceiling, On-Wall, Floorstanding, Bookshelf" },
      { label: "Cavity Requirements", value: "Standard 2x4 or 2x6 Stud Bay (min. 3.5\" depth)" },
      { label: "Grille Style", value: "Zero-Bezel Micro-Perforated Magnetic Steel" },
      { label: "Cable Standards", value: "12 AWG / 14 AWG OFC Oxygen-Free High-Strand Copper" }
    ],
    faqs: [
      {
        q: "Do architectural in-wall speakers sound as good as floorstanding speakers?",
        a: "When installed inside rigid, acoustically engineered sealed backboxes, reference architectural speakers (from brands like JBL Synthesis and Bowers & Wilkins) match or even outperform traditional box speakers by eliminating cabinet diffraction."
      },
      {
        q: "Can the speaker grilles be painted to match my designer wall paint?",
        a: "Yes. Our team uses specialized diluted pneumatic sprayers to apply multiple ultra-fine coats of your exact paint code, ensuring 100% of the acoustic micro-perforations remain open and clear."
      }
    ],
    relatedServices: ["surround-sound-installation", "dolby-atmos-setup", "av-receiver-setup", "cable-management"]
  },
  {
    id: "av-receiver-setup",
    aliases: ["receiver", "amplifier", "av-processor"],
    name: "AV Receiver & Amplifier Setup",
    category: "Multi-Channel Audio",
    categorySlug: "audio",
    badge: "High-Current Processing",
    image: "images/products/denon-flagship.webp",
    gallery: [
      "images/products/denon-flagship.webp",
      "images/products/marantz.webp",
      "images/products/yamaha-receiver.webp"
    ],
    tagline: "Dedicated 19-inch equipment racks, Dirac Live / Audyssey calibration, and HDMI 2.1 eARC multi-zone distribution.",
    shortDesc: "Expert configuration of flagship AV receivers, discrete power amplifiers, multi-zone matrix switchers, and Dirac Live digital room correction.",
    fullDesc: [
      "The AV receiver or processor is the command center and beating heart of your cinema. It decodes ultra-high-bitrate audio streams, switches uncompressed 4K/8K video signals, manages crossover points, and powers multi-channel speaker loads.",
      "AVÉRA Cinema organizes all electronics inside dedicated 19-inch heavy-duty steel equipment racks. We install thermostat-controlled silent cooling fans, isolated power conditioners to eliminate ground hums, and precision-labeled cable bundles.",
      "We configure input mappings, HDMI eARC handshakes, high-resolution audio streaming (AirPlay 2, Roon, TIDAL), and run comprehensive Dirac Live or Audyssey room correction to extract the absolute best performance from your system."
    ],
    priceTier: "Custom Quotation",
    completionTime: "1 Day",
    warranty: "3-Year Installation Warranty",
    deliverables: [
      "Custom 19\" AV equipment rack assembly with thermal management",
      "Isolated clean-power surge protection and ground-loop isolation",
      "HDMI 2.1 48Gbps 8K/60Hz and 4K/120Hz eARC switching setup",
      "Dirac Live 3D multi-point room correction target curve generation",
      "Multi-zone audio streaming integration across whole-home zones"
    ],
    features: [
      {
        icon: "bi-cpu-fill",
        title: "Multi-Channel Processing",
        desc: "Support for up to 16 discrete channels with independent subwoofer processing and delay tuning."
      },
      {
        icon: "bi-fan",
        title: "Thermostat Active Cooling",
        desc: "Smart ultra-quiet fan controllers that vent hot air automatically to preserve amplifier lifespan."
      },
      {
        icon: "bi-lightning",
        title: "Isolated Power Conditioning",
        desc: "Linear filtering removes AC line noise, RF interference, and protects sensitive DACs from power spikes."
      },
      {
        icon: "bi-diagram-3",
        title: "Organized Labeled Patching",
        desc: "Every HDMI, speaker line, and network cable is numbered and labeled for effortless future servicing."
      }
    ],
    processSteps: [
      {
        phase: "Phase 01",
        title: "Rack Mechanical Assembly",
        desc: "Configuring heavy-duty rack shelves, blanks, and thermostat fan controllers."
      },
      {
        phase: "Phase 02",
        title: "Clean Power & Signal Isolation",
        desc: "Separating AC power cords from low-voltage audio cables to avoid induction hum."
      },
      {
        phase: "Phase 03",
        title: "HDMI 2.1 Handshake Configuration",
        desc: "Setting HDCP 2.3 handshakes, color sub-sampling, and dynamic EDID management."
      },
      {
        phase: "Phase 04",
        title: "Digital Room Target Tuning",
        desc: "Uploading custom Harman/Dirac acoustic target curves for punchy bass and smooth treble."
      }
    ],
    specs: [
      { label: "Supported Channels", value: "Up to 16 Discrete Channels (e.g. 9.4.6 Atmos)" },
      { label: "Video Standards", value: "HDMI 2.1, 48 Gbps, HDCP 2.3, 8K/60Hz, 4K/120Hz, VRR, ALLM" },
      { label: "Correction Engines", value: "Dirac Live Full, Audyssey MultEQ XT32, YPAO R.S.C." },
      { label: "Partner Brands", value: "Denon, Marantz, Yamaha, Anthem, Trinnov, StormAudio" }
    ],
    faqs: [
      {
        q: "Why do I need a dedicated equipment rack instead of placing gear on furniture?",
        a: "High-power AV receivers generate significant heat. Trapping them in enclosed furniture causes thermal throttling, distortion, and premature capacitor failure. A ventilated 19-inch rack keeps equipment running cool and reliable for decades."
      },
      {
        q: "What is Dirac Live and why is it superior to standard auto-setup microphones?",
        a: "Standard auto-setup microphones only adjust basic EQ volume. Dirac Live is an advanced Swedish acoustic algorithm that corrects both frequency response AND impulse response (time-domain arrival), eliminating blurred transients and room resonance."
      }
    ],
    relatedServices: ["audio-calibration", "surround-sound-installation", "cable-management", "smart-home-integration"]
  },
  {
    id: "tv-display-installation",
    aliases: ["tv-installation", "oled-mounting", "wall-mount-tv"],
    name: "TV & Display Installation",
    category: "Projection & Display",
    categorySlug: "display",
    badge: "Ultra-Flush Architectural Mounting",
    image: "images/products/sony-bravia-98.webp",
    gallery: [
      "images/products/sony-bravia-98.webp",
      "images/products/sony-projector.webp",
      "images/gallery/theatre-02.webp"
    ],
    tagline: "Heavy-duty ultra-flush wall mounting for 65\" to 98\"+ OLED and Mini-LED displays with concealed wiring.",
    shortDesc: "Flawless zero-gap wall mounting, motorized articulating brackets, in-wall cable management, and ISF picture calibration for large-format OLED and Mini-LED screens.",
    fullDesc: [
      "Modern large-format displays (up to 98 inches and beyond) weigh over 70 kg and require specialized structural wall bracing, laser leveling, and precision thermal ventilation. AVÉRA Cinema mounts screens with museum-grade precision.",
      "We install ultra-slim zero-gap wall brackets, recessed power boxes, and in-wall conduits so that the television appears to float seamlessly against the wall like a framed piece of fine art with zero exposed wires.",
      "Following installation, we configure eARC audio pass-through to your sound system and calibrate picture profiles (Cinema, Filmmaker Mode, Dolby Vision Dark) to ensure master-reference color accuracy."
    ],
    priceTier: "Custom Packages Available",
    completionTime: "Half-Day to 1 Day",
    warranty: "Lifetime Structural Mounting Guarantee",
    deliverables: [
      "Reinforced structural stud anchoring supporting displays up to 120 kg",
      "Recessed in-wall power and signal outlet box installation (zero gap to wall)",
      "Concealed 48Gbps HDMI 2.1 routing with optical audio backup",
      "Laser leveling with micro-adjustments for pitch, yaw, and height",
      "Filmmaker Mode & Dolby Vision video calibration"
    ],
    features: [
      {
        icon: "bi-tv",
        title: "Zero-Gap Ultra-Slim Mounting",
        desc: "Sits flush against drywall or stonework with less than 15mm clearance."
      },
      {
        icon: "bi-arrow-left-right",
        title: "Heavy-Duty Articulating Arms",
        desc: "Optional motorized or manual dual-arm brackets that swivel effortlessly for multi-angle viewing."
      },
      {
        icon: "bi-shield-check",
        title: "Drywall & Masonry Anchoring",
        desc: "Heavy-duty steel toggle anchors and masonry expansion bolts tested for 4x rated screen weight."
      },
      {
        icon: "bi-eye-fill",
        title: "ISF Filmmaker Mode Profiling",
        desc: "Disables aggressive soap-opera motion smoothing and adjusts color temperature to 6500K cinematic standard."
      }
    ],
    processSteps: [
      {
        phase: "Phase 01",
        title: "Sightline & Wall Stud Scanning",
        desc: "Scanning for timber/steel studs and calculating exact eye-level center height from your couch."
      },
      {
        phase: "Phase 02",
        title: "Recessed Box Installation",
        desc: "Cutting drywall to install a recessed TV box so power plugs and HDMI connectors sit inside the wall."
      },
      {
        phase: "Phase 03",
        title: "Heavy-Duty Bracket Rigging",
        desc: "Torque-screwing the wall plate into multiple structural studs with laser crosshair confirmation."
      },
      {
        phase: "Phase 04",
        title: "Display Mounting & Calibration",
        desc: "Two-technician safety lift, secure latch locking, and calibrated video input verification."
      }
    ],
    specs: [
      { label: "Supported Screen Sizes", value: "55\", 65\", 75\", 85\", 98\", 115\" Large-Format" },
      { label: "Panel Types", value: "OLED, QD-OLED, Mini-LED, Micro-LED, QLED" },
      { label: "Weight Capacity", value: "Engineered for displays up to 125 kg (275 lbs)" },
      { label: "Mounting Styles", value: "Ultra-Flush Fixed, Tilting, Motorized Articulating, Ceiling Drop" }
    ],
    faqs: [
      {
        q: "How high should my TV be mounted on the wall?",
        a: "The center of the screen should ideally align with seated eye level—typically between 40 and 45 inches from the floor to the screen center. This eliminates neck fatigue during extended movie viewing."
      },
      {
        q: "Can you mount a 98-inch TV onto a drywall partition?",
        a: "Yes, but it requires spanning the bracket across multiple timber or steel studs and utilizing commercial-grade structural toggle anchors. In cases of weak partition walls, we install internal plywood backing plates."
      }
    ],
    relatedServices: ["projector-installation", "cable-management", "smart-home-integration", "surround-sound-installation"]
  },
  {
    id: "smart-home-integration",
    aliases: ["smart-home", "home-automation", "control4", "crestron"],
    name: "Smart Home Integration",
    category: "Smart Integration",
    categorySlug: "automation",
    badge: "One-Touch Cinema Orchestration",
    image: "images/gallery/theatre-06.webp",
    gallery: [
      "images/gallery/theatre-06.webp",
      "images/hero/hero-home-theatre.webp",
      "images/gallery/theatre-01.webp"
    ],
    tagline: "One-touch movie night: synchronized dimming, motorized blackout shades, and multi-system automation.",
    shortDesc: "Centralized control of lighting, audio, video, climate, and motorized shades using Control4, Crestron, Lutron, and Apple HomeKit.",
    fullDesc: [
      "True luxury is simplicity. In a cinema room equipped with projectors, receivers, multiple streaming sources, motorized curtains, and tiered lighting, having five separate remotes turns movie night into a frustrating chore. AVÉRA Cinema unifies everything into one touch.",
      "Pressing 'Movie Night' on a custom handheld wand, wall keypad, or iPad automatically powers up the laser projector, lowers the motorized screen, selects your media player, sets the audio volume to reference level, closes the blackout shades, and dims architectural cove lights over a graceful 6-second ramp.",
      "We integrate industry-leading automation ecosystems including Control4, Crestron Home, Savant, and Lutron RadioRA 3, creating intuitive interfaces that anyone in your family can operate with confidence."
    ],
    priceTier: "Custom Quotation",
    completionTime: "2 to 4 Days",
    warranty: "3-Year Automation Programming Warranty",
    deliverables: [
      "Centralized smart controller and network gateway installation",
      "Lutron or Control4 motorized blackout shade integration",
      "Architectural scene-based lighting dimming programming",
      "Ergonomic custom touchscreen handheld remote control",
      "Smartphone and tablet mobile app configuration for iOS & Android"
    ],
    features: [
      {
        icon: "bi-phone",
        title: "Single Interface Simplicity",
        desc: "Eliminate remote clutter with one sleek touchscreen remote or custom engraved wall keypad."
      },
      {
        icon: "bi-lightbulb",
        title: "Cinematic Lighting Scenes",
        desc: "Automated 'Pause' scene turns floor lights up to 15% for snack runs, dimming back to black on 'Play'."
      },
      {
        icon: "bi-thermometer-half",
        title: "Whisper Climate Synchronization",
        desc: "Pre-cools the cinema 20 minutes prior to movie time, then drops fans to silent low-speed during playback."
      },
      {
        icon: "bi-wifi",
        title: "Enterprise Grade Wi-Fi & LAN",
        desc: "Zero buffering with gigabit wired backhauls and roaming Wi-Fi 6/7 access points."
      }
    ],
    processSteps: [
      {
        phase: "Phase 01",
        title: "Automation Architecture Planning",
        desc: "Defining scenes, lighting loads, motorized curtain specs, and network topology."
      },
      {
        phase: "Phase 02",
        title: "Hardware Integration & IP Addressing",
        desc: "Assigning static IP reservations and connecting RS-232, IP, and IR control interfaces."
      },
      {
        phase: "Phase 03",
        title: "Custom Scenario Programming",
        desc: "Scripting customized logic: 'Intermission', 'Movie Night', 'Gaming Mode', 'All Off'."
      },
      {
        phase: "Phase 04",
        title: "Client Training & Personalization",
        desc: "Personalizing favorite channels and fine-tuning lighting fade rates with the homeowner."
      }
    ],
    specs: [
      { label: "Supported Ecosystems", value: "Control4, Crestron Home, Savant, Lutron, Apple Home" },
      { label: "Lighting Protocols", value: "DALI, 0-10V, Phase Dimming, Zigbee 3.0, Z-Wave" },
      { label: "Network Standard", value: "Gigabit Ethernet with VLAN Isolation for AV Traffic" },
      { label: "Remotes Supported", value: "Control4 Halo, Crestron TSR-310, Custom iPads" }
    ],
    faqs: [
      {
        q: "What happens if our home internet goes down? Will the cinema still work?",
        a: "Yes! Our Control4 and Crestron automation systems run locally on a dedicated hardware processor in your equipment rack. Local remote controls and physical wall keypads continue working flawlessly without any internet connection."
      },
      {
        q: "Can we control the cinema lights and audio from an iPhone or Apple Watch?",
        a: "Absolutely. We configure native iOS and Android apps that give you full control of volume, lighting, climate, and media selection from anywhere inside or outside the house."
      }
    ],
    relatedServices: ["home-theatre-installation", "cinema-room-design", "av-receiver-setup", "cable-management"]
  },
  {
    id: "cinema-room-design",
    aliases: ["room-design", "3d-cinema-design", "theatre-architecture"],
    name: "Cinema Room Design & 3D Modeling",
    category: "Turnkey Cinema",
    categorySlug: "turnkey",
    badge: "Architectural 3D Concept",
    image: "images/gallery/theatre-02.webp",
    gallery: [
      "images/gallery/theatre-02.webp",
      "images/gallery/theatre-06.webp",
      "images/gallery/theatre-04.webp"
    ],
    tagline: "Photorealistic 3D rendering, sightline riser engineering, and acoustic interior architecture.",
    shortDesc: "End-to-end architectural conceptualization, 3D CAD visualization, tiered seating riser calculations, and custom material palettes for private home cinemas.",
    fullDesc: [
      "A world-class private cinema begins long before the first cable is pulled or speaker mounted. It begins in the imagination, shaped by acoustic science and architectural precision. AVÉRA Cinema provides comprehensive 3D cinema room design services.",
      "We generate photorealistic 3D renderings depicting lighting schemes, acoustic wall slat finishes, motorized leather recliners, and starlight ceiling layouts, allowing you to walk through your future cinema virtually.",
      "Our engineering blueprints detail riser heights to ensure unhindered sightlines from every row, calculate speaker elevation angles, and coordinate silent HVAC airflow duct paths with your interior designers and general contractors."
    ],
    priceTier: "Custom Design Fee (Credited toward installation)",
    completionTime: "1 to 2 Weeks",
    warranty: "Full Architectural CAD Documentation",
    deliverables: [
      "3D photorealistic architectural renders of the completed cinema",
      "Tiered riser height calculations for unobstructed front-screen viewing",
      "Complete electrical schematic, conduit layout, and heat-load schedules",
      "Acoustic material specification sheet with color/texture samples",
      "HVAC acoustic baffle blueprint for whisper-quiet room ventilation"
    ],
    features: [
      {
        icon: "bi-badge-3d",
        title: "Photorealistic 3D Renders",
        desc: "Visualize exact fabrics, wood veneers, seating leather, and lighting before physical construction begins."
      },
      {
        icon: "bi-rulers",
        title: "Sightline Riser Geometry",
        desc: "Ensures second and third-row guests enjoy 100% unobstructed views over front-row headrests."
      },
      {
        icon: "bi-lightning-charge",
        title: "Electrical & Conduit Schematics",
        desc: "Complete documentation for electricians showing dedicated 20A cinema power circuits and conduit routing."
      },
      {
        icon: "bi-stars",
        title: "Custom Fiber-Optic Starlight Ceilings",
        desc: "Design layouts for shooting stars, constellations, and twinkling acoustic starlight panels."
      }
    ],
    processSteps: [
      {
        phase: "Phase 01",
        title: "Design Discovery Consultation",
        desc: "Understanding your aesthetic vision, seating capacity desires, and movie viewing habits."
      },
      {
        phase: "Phase 02",
        title: "Acoustic & Sightline Modeling",
        desc: "Calculating speaker coordinates, screen size relative to seating distance, and riser elevation."
      },
      {
        phase: "Phase 03",
        title: "3D Photorealistic Rendering",
        desc: "Rendering multiple high-resolution views with realistic lighting textures and fabric choices."
      },
      {
        phase: "Phase 04",
        title: "Architectural Construction Package",
        desc: "Delivering detailed dimensioned CAD drawings ready for interior contractors and joiners."
      }
    ],
    specs: [
      { label: "Deliverable Formats", value: "High-Res 4K Renders, DWG/CAD Blueprints, PDF Schedules" },
      { label: "Standards Adherence", value: "CEDIA CEB-22 (Audio), CEB-23 (Video), SMPTE 2095" },
      { label: "Seating Capacity", value: "4 to 24+ Custom Cinema Recliners / Chaises" },
      { label: "Design Revisions", value: "Up to 3 Iterative Revisions Included" }
    ],
    faqs: [
      {
        q: "Can you coordinate directly with my architect and interior designer?",
        a: "Yes! In fact, most of our luxury cinema projects involve close collaboration with the client's existing architectural firm. We provide the technical AV and acoustic blueprints, which their team integrates into the master construction plan."
      },
      {
        q: "How high should the second-row seating riser be?",
        a: "Riser heights typically range from 10 to 14 inches (25 to 35 cm) depending on screen mounting height and recliner dimensions. We calculate the exact vertical sightline angle so the front screen is never blocked by heads in front."
      }
    ],
    relatedServices: ["home-theatre-installation", "acoustic-treatment", "media-room-setup", "smart-home-integration"]
  },
  {
    id: "home-audio-installation",
    aliases: ["whole-home-audio", "multiroom-audio", "architectural-audio"],
    name: "Home Audio & Multi-Room Distribution",
    category: "Multi-Channel Audio",
    categorySlug: "audio",
    badge: "Whole-Home Lossless Sound",
    image: "images/hero/hero-audio-system.webp",
    gallery: [
      "images/hero/hero-audio-system.webp",
      "images/products/bose-soundbar.webp",
      "images/products/marantz.webp"
    ],
    tagline: "Architectural in-ceiling speakers, outdoor weatherproof audio, and whole-house synchronized streaming.",
    shortDesc: "High-fidelity whole-home multi-zone audio streaming synchronized across living rooms, bedrooms, terraces, and gardens with intuitive mobile app control.",
    fullDesc: [
      "Music elevates the ambiance of a home. AVÉRA Cinema designs multi-room audio ecosystems that allow you to fill every room with rich, warm sound—or stream different playlists simultaneously in individual living zones.",
      "We install zero-bezel architectural in-ceiling speakers that blend invisibly with lighting fixtures, audiophile stereo listening setups for dedicated music rooms, and landscape subwoofers buried discreetly in garden foliage.",
      "All zones are powered by discrete multi-channel matrix amplifiers and controlled effortlessly through Apple AirPlay 2, Spotify Connect, Roon, and TIDAL with zero delay between rooms."
    ],
    priceTier: "Custom Packages Available",
    completionTime: "1 to 3 Days",
    warranty: "3-Year Installation Warranty",
    deliverables: [
      "Multi-zone audio architecture design with independent volume controls",
      "Concealed in-ceiling and in-wall architectural speaker installation",
      "Landscape weatherproof outdoor audio speaker and buried subwoofer setup",
      "High-resolution lossless streaming matrix amplifier configuration",
      "Apple AirPlay 2, Spotify Connect, and Roon endpoint setup"
    ],
    features: [
      {
        icon: "bi-music-note-list",
        title: "Whole-Home Party Mode",
        desc: "One touch syncs every speaker inside and outside your villa for seamless entertaining."
      },
      {
        icon: "bi-cloud-sun",
        title: "Weatherproof Outdoor Audio",
        desc: "UV-treated, waterproof satellite speakers and subterranean subwoofers designed for extreme climates."
      },
      {
        icon: "bi-vinyl",
        title: "Audiophile 2-Channel Suites",
        desc: "Dedicated stereo listening spaces configured for vinyl turntables and high-resolution DSD playback."
      },
      {
        icon: "bi-layers",
        title: "Invisible Architectural Drivers",
        desc: "Option for completely invisible speakers plastered directly into drywall with zero visible grille."
      }
    ],
    processSteps: [
      {
        phase: "Phase 01",
        title: "Zone & Lifestyle Mapping",
        desc: "Mapping living areas, terraces, kitchens, and master suites for sound coverage."
      },
      {
        phase: "Phase 02",
        title: "Structured Speaker Wire Pulling",
        desc: "Pulling oxygen-free copper speaker cables to central equipment rack closet."
      },
      {
        phase: "Phase 03",
        title: "Transducer Installation & Sealing",
        desc: "Precision mounting with magnetic paintable grilles aligned with ceiling lighting grids."
      },
      {
        phase: "Phase 04",
        title: "Network Streaming & App Setup",
        desc: "Configuring zone groupings, bass/treble EQ, and client mobile devices."
      }
    ],
    specs: [
      { label: "Zone Capacity", value: "2 to 24+ Independent Audio Zones" },
      { label: "Audio Quality", value: "Up to 24-bit / 192kHz Lossless FLAC / ALAC" },
      { label: "Outdoor Rating", value: "IP66 / IP67 Salt-Spray & Dust Waterproof" },
      { label: "Streaming Platforms", value: "AirPlay 2, Spotify Connect, TIDAL Connect, Roon, TuneIn" }
    ],
    faqs: [
      {
        q: "Can different family members listen to different songs in different rooms?",
        a: "Yes. Every zone can stream its own independent source (e.g. jazz on the patio, classical in the study, and pop by the pool), or all zones can be linked together for whole-home party synchronization."
      },
      {
        q: "Are outdoor garden speakers durable enough to handle heavy monsoon rains?",
        a: "Yes. Our outdoor landscape satellites and in-ground subwoofers carry IP66/IP67 ratings, specifically engineered to withstand torrential rain, high humidity, and intense summer sun."
      }
    ],
    relatedServices: ["speaker-installation", "av-receiver-setup", "smart-home-integration", "cable-management"]
  },
  {
    id: "media-room-setup",
    aliases: ["media-room", "living-room-cinema", "hybrid-theatre"],
    name: "Media Room & Living Room Cinema",
    category: "Turnkey Cinema",
    categorySlug: "turnkey",
    badge: "Dual-Purpose Elegance",
    image: "images/gallery/theatre-05.webp",
    gallery: [
      "images/gallery/theatre-05.webp",
      "images/products/bose-soundbar.webp",
      "images/products/sony-bravia-98.webp"
    ],
    tagline: "High-performance entertainment seamlessly blended into multi-purpose living and lounge spaces.",
    shortDesc: "Dual-purpose living rooms engineered with motorized drop-down screens, ambient light rejecting displays, concealed audio, and discreet acoustics.",
    fullDesc: [
      "Not every homeowner has a dedicated windowless basement for a private cinema. A modern Media Room delivers 95% of dedicated cinema performance while serving as an elegant living room, family lounge, or entertaining space by day.",
      "AVÉRA Cinema designs multi-purpose rooms with concealed technology: motorized projection screens that retract flush into ceiling cavities, Ultra-Short-Throw laser consoles disguised as luxury credenzas, and invisible in-wall speakers.",
      "With a single button tap, motorized blackout drapes glide shut, the projection screen descends, and the space transforms from a bright, airy family salon into an awe-inspiring 135-inch entertainment showcase."
    ],
    priceTier: "Custom Packages Available",
    completionTime: "2 to 4 Days",
    warranty: "3-Year Installation Warranty",
    deliverables: [
      "Motorized drop-down screen recessed into ceiling drywall pocket",
      "Ambient Light Rejecting (ALR) optical surface matching room windows",
      "Flush-mounted architectural in-wall and in-ceiling surround sound array",
      "Discreet subwoofer integration concealed inside custom joinery",
      "One-touch room transformation lighting and shade controls"
    ],
    features: [
      {
        icon: "bi-eye-slash",
        title: "Disappearing Technology",
        desc: "All AV equipment, screens, and speakers vanish when not in use, preserving clean interior design."
      },
      {
        icon: "bi-sun",
        title: "Daylight Entertainment",
        desc: "Watch sports and stream daytime shows with brilliant contrast without blacking out the entire home."
      },
      {
        icon: "bi-controller",
        title: "Gaming & Sports Optimization",
        desc: "Configured for ultra-low 4K 120Hz input lag, high refresh rates, and multi-source split screen viewing."
      },
      {
        icon: "bi-house-check",
        title: "Preserves Resale Value",
        desc: "Maintains the natural functionality and flow of your home's primary entertaining spaces."
      }
    ],
    processSteps: [
      {
        phase: "Phase 01",
        title: "Multi-Functional Room Assessment",
        desc: "Analyzing window placement, natural light angles, and interior furniture layout."
      },
      {
        phase: "Phase 02",
        title: "Ceiling Pocket & Conduit Creation",
        desc: "Framing flush ceiling pockets for motorized screens and routing concealed wiring."
      },
      {
        phase: "Phase 03",
        title: "Concealed Audio & Screen Rigging",
        desc: "Mounting zero-bezel speakers and motorized tab-tensioned ALR screen."
      },
      {
        phase: "Phase 04",
        title: "Dual Mode Calibration",
        desc: "Programming two separate calibrated picture presets: 'Daylight Sports' and 'Nighttime Cinema'."
      }
    ],
    specs: [
      { label: "Screen Sizes", value: "100\" to 135\" Motorized Drop-Down / UST ALR" },
      { label: "Audio Configurations", value: "5.1.2 or 5.2.4 Concealed In-Wall/In-Ceiling" },
      { label: "Daytime Brightness", value: "3,000+ ANSI Lumens Laser Light Engine" },
      { label: "Discretion Level", value: "100% Concealed Upon Screen Retraction" }
    ],
    faqs: [
      {
        q: "What is the difference between a Home Theatre and a Media Room?",
        a: "A dedicated Home Theatre is a windowless, purpose-built room with fixed tiered seating and optimized dark acoustics. A Media Room is an open living room or lounge that seamlessly transforms into a cinema using motorized disappearing technology."
      },
      {
        q: "Can I watch football games during the day with the curtains open?",
        a: "Yes! By pairing high-output 4K laser projectors with specialized Ambient Light Rejecting (ALR) screens, you get vivid colors and punchy contrast even in sunlit rooms."
      }
    ],
    relatedServices: ["projector-screen-installation", "smart-home-integration", "tv-display-installation", "home-theatre-installation"]
  },
  {
    id: "cable-management",
    aliases: ["cables", "rack-wiring", "wire-management"],
    name: "Cable Management & Rack Dressing",
    category: "Smart Integration",
    categorySlug: "automation",
    badge: "Engineering Artistry",
    image: "images/products/marantz.webp",
    gallery: [
      "images/products/marantz.webp",
      "images/products/denon-flagship.webp",
      "images/services/acoustic-treatment.webp"
    ],
    tagline: "Aerospace-grade velcro dressing, laser-etched heat-shrink labels, and shielded signal separation.",
    shortDesc: "Complete rewiring and organization of messy AV cabinets, 19-inch equipment racks, and concealed in-wall conduits with military-grade precision.",
    fullDesc: [
      "Tangled bundles of cables behind entertainment units are not just an eyesore—they cause electromagnetic induction hums, loose connections, restricted airflow that cooks expensive amplifiers, and make troubleshooting nearly impossible.",
      "AVÉRA Cinema transforms messy 'rat's nests' into works of industrial engineering art. We rebuild existing AV cabinets and 19-inch racks with custom cut-to-length cables, horizontal lacing bars, and color-coded velcro bundling.",
      "High-voltage AC power lines are strictly separated and routed at 90-degree angles to low-voltage audio/video lines, eliminating ground-loop buzz and preserving pristine signal clarity."
    ],
    priceTier: "Custom Packages Available",
    completionTime: "1 to 2 Days",
    warranty: "Lifetime Organization Guarantee",
    deliverables: [
      "Disentanglement, tracing, and documentation of all existing AV lines",
      "Cut-to-length custom terminated speaker and interconnect cabling",
      "Laser-printed thermal heat-shrink labeling on every connector",
      "Horizontal and vertical cable lacing bar dressing",
      "Complete signal path documentation and wiring schematic handover"
    ],
    features: [
      {
        icon: "bi-check2-circle",
        title: "Aerospace Velcro Bundling",
        desc: "We use reusable velvet velcro ties rather than zip-ties, preventing cable crushing and sheath deformation."
      },
      {
        icon: "bi-tag",
        title: "Thermal Heat-Shrink Labels",
        desc: "Every cable is labeled at both ends with source, destination, and signal type for easy future upgrades."
      },
      {
        icon: "bi-shield-check",
        title: "Electromagnetic Isolation",
        desc: "High-voltage 230V AC lines run on the left rack rail; low-voltage audio/video lines run on the right rail."
      },
      {
        icon: "bi-wind",
        title: "Restored Thermal Airflow",
        desc: "Clearing bundled cable blockages allows exhaust fans to circulate cool air freely across amplifier heat sinks."
      }
    ],
    processSteps: [
      {
        phase: "Phase 01",
        title: "System Audit & Disconnection",
        desc: "Auditing all hardware connections, signal paths, and documenting inputs."
      },
      {
        phase: "Phase 02",
        title: "Cable Cutting & Precision Crimping",
        desc: "Trimming excess cabling and re-terminating with gold-plated compression connectors."
      },
      {
        phase: "Phase 03",
        title: "Lacing Bar Dressing & Velcroing",
        desc: "Routing cables along horizontal strain-relief bars with zero tension on equipment jacks."
      },
      {
        phase: "Phase 04",
        title: "Signal Continuity & Ground Testing",
        desc: "Testing every audio and HDMI line with cable analyzers to confirm zero loss or noise."
      }
    ],
    specs: [
      { label: "Rack Standard", value: "EIA-310 19-Inch Equipment Rack Standard" },
      { label: "Labeling Material", value: "Industrial Polyolefin Thermal Heat-Shrink Tubing" },
      { label: "Connector Standards", value: "Gold-Plated Locking Banana Plugs, Compression RCA, Shielded RJ45" },
      { label: "Isolation Clearance", value: "Minimum 4\" Separation Between AC Power & Unbalanced Audio" }
    ],
    faqs: [
      {
        q: "Why is zip-tying cables not recommended for AV racks?",
        a: "Plastic zip-ties apply uneven localized pressure that pinches delicate coaxial and twisted-pair cables, degrading high-speed 48Gbps HDMI signals. They also require cutters during maintenance, risking severed cables. We use military-spec velcro."
      },
      {
        q: "Can you clean up and reorganize my existing messy AV equipment cabinet?",
        a: "Yes! Our Cable Clean-Up service is frequently requested by clients who inherited disorganized systems from previous installers or builders. We completely rewire and label the system in 1-2 days."
      }
    ],
    relatedServices: ["av-receiver-setup", "smart-home-integration", "speaker-installation", "home-theatre-installation"]
  },
  {
    id: "audio-calibration",
    aliases: ["calibration", "dirac-live", "acoustic-tuning"],
    name: "Audio Calibration & Precision Tuning",
    category: "Acoustic Engineering",
    categorySlug: "acoustics",
    badge: "Dirac Live & HAA Certified",
    image: "images/products/jbl-subwoofer.webp",
    gallery: [
      "images/products/jbl-subwoofer.webp",
      "images/products/denon-flagship.webp",
      "images/services/surround-sound.webp"
    ],
    tagline: "Laboratory acoustic measurement, multi-subwoofer phase synchronization, and calibrated target curve sculpting.",
    shortDesc: "Comprehensive digital room correction and psychoacoustic tuning utilizing Dirac Live, Room EQ Wizard (REW), and multi-subwoofer bass management.",
    fullDesc: [
      "Even the most expensive speakers sound flawed without rigorous acoustic calibration. Every room imparts its own acoustic fingerprint—amplifying certain boomy bass frequencies while cancelling others out through boundary phase cancellations.",
      "AVÉRA Cinema's calibration service utilizes calibrated laboratory microphones (Earthworks / miniDSP UMIK-1) and high-resolution measurement suites. We take 9-point spatial frequency measurements across your seating area.",
      "We manually synchronize the phase and delay of every subwoofer down to 0.1 milliseconds, eliminate modal bass bloat, align speaker crossovers, and craft smooth Harman-style target curves that deliver goosebumps on every film soundtrack."
    ],
    priceTier: "Custom Quotation",
    completionTime: "1 Day",
    warranty: "Full Measurement Report & Calibration Backup",
    deliverables: [
      "9-point spatial impulse response measurement using calibrated microphones",
      "Multi-subwoofer phase and time-alignment down to sub-millisecond precision",
      "Crossover frequency optimization and speaker delay distance setting",
      "Dirac Live 3D filter generation or manual parametric EQ curve programming",
      "Before-and-after frequency response graphs provided in a PDF report"
    ],
    features: [
      {
        icon: "bi-graph-up",
        title: "Room EQ Wizard (REW) Analysis",
        desc: "High-resolution spectral waterfalls identifying room ringing and modal decay issues."
      },
      {
        icon: "bi-soundwave",
        title: "Multi-Subwoofer Alignment (MSO)",
        desc: "Synchronizes dual or quad subwoofers so every seat in the cinema experiences identical deep, tight bass."
      },
      {
        icon: "bi-mic",
        title: "Laboratory Grade Microphones",
        desc: "Calibrated Earthworks audio measurement microphones with zero distortion."
      },
      {
        icon: "bi-file-earmark-pdf",
        title: "Detailed Calibration Report",
        desc: "Includes comprehensive frequency curves, SPL readings, and backup configuration files on USB."
      }
    ],
    processSteps: [
      {
        phase: "Phase 01",
        title: "Microphone Array Rigging",
        desc: "Positioning measurement microphones at precise seated ear heights using laser levels."
      },
      {
        phase: "Phase 02",
        title: "Frequency & Phase Chirp Sweeps",
        desc: "Emitting logarithmic sine sweeps to measure impulse delay, phase, and frequency response."
      },
      {
        phase: "Phase 03",
        title: "Subwoofer Phase & Time Alignment",
        desc: "Adjusting delay matrices to lock subwoofers and main speakers into perfect phase unison."
      },
      {
        phase: "Phase 04",
        title: "Target Curve Sculpting & Listening",
        desc: "Uploading filters and validating with reference movie scenes (e.g. Dune, Blade Runner 2049)."
      }
    ],
    specs: [
      { label: "Measurement Tools", value: "miniDSP UMIK-1, Earthworks M30, REW Suite, Systune" },
      { label: "Correction Algorithms", value: "Dirac Live Bass Control, Audyssey MultEQ-X, Trinnov Optimizer" },
      { label: "Measurement Points", value: "9 to 17 Discrete Seating Positions Measured" },
      { label: "Target Profiles", value: "Reference Cinema, Audiophile Music, Late Night Low-Bass" }
    ],
    faqs: [
      {
        q: "Why is one seat booming with bass while the seat next to it has almost no bass?",
        a: "This is caused by standing waves (room modes)—sound waves bouncing between parallel walls and either doubling in intensity (peaks) or cancelling each other out (nulls). Our multi-subwoofer phase calibration smooths these variations so all seats hear balanced bass."
      },
      {
        q: "Can you calibrate a system installed by another company?",
        a: "Yes! Many clients hire us solely for our master calibration service after their initial system installation fails to deliver the punch and vocal clarity they expected."
      }
    ],
    relatedServices: ["av-receiver-setup", "surround-sound-installation", "acoustic-treatment", "dolby-atmos-setup"]
  }
];

// Helper functions for lookup
function getAllServices() {
  return AV_SERVICES;
}

function findServiceById(id) {
  if (!id) return null;
  const cleanId = String(id).trim().toLowerCase().replace(/^#/, '');
  return AV_SERVICES.find(s => 
    s.id.toLowerCase() === cleanId || 
    (s.aliases && s.aliases.some(alias => alias.toLowerCase() === cleanId))
  ) || null;
}

function getServicesByCategory(categorySlug) {
  if (!categorySlug || categorySlug === 'all') return AV_SERVICES;
  return AV_SERVICES.filter(s => s.categorySlug.toLowerCase() === categorySlug.toLowerCase());
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { AV_SERVICES, getAllServices, findServiceById, getServicesByCategory };
}
