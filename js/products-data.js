/**
 * AVÉRA CINEMA — Curated Reference Equipment Catalog
 * High-resolution specifications, acoustic engineering data, and features
 */

const AV_PRODUCTS = [
  {
    id: "sony-vpl-xw5000es",
    aliases: ["sony-projector", "sony-xw5000es", "xw5000es"],
    brand: "Sony",
    name: "Sony VPL-XW5000ES 4K Laser Projector",
    shortName: "Sony VPL-XW5000ES",
    category: "Projectors",
    categorySlug: "projectors",
    badge: "Native 4K SXRD Laser",
    dealerBadge: "Official Sony Professional AV Partner",
    priceInfo: "Price on Consultation / Custom Room Calibration Included",
    image: "images/products/sony-projector.webp",
    gallery: [
      "images/products/sony-projector.webp",
      "images/products/sony-bravia-98.webp",
      "images/gallery/theatre-02.webp"
    ],
    tagline: "Compact Native 4K SXRD Laser Cinema Projector with 2,000 Lumens & X1™ Ultimate Engine",
    shortDesc: "Compact native 4K SXRD laser home cinema projector with 2,000 lumens brightness, HDR Enhancer, and Triluminos Pro color processing.",
    fullDesc: [
      "The Sony VPL-XW5000ES sets a reference benchmark for private home cinema projection by merging true native 4K SXRD panel resolution (3,840 x 2,160) with an ultra-pure Z-Phosphor™ laser diode light source.",
      "Engineered with Sony's flagship X1™ Ultimate processor adapted specifically for cinema projection, the system performs real-time frame-by-frame analysis to drive the Dynamic HDR Enhancer. Individual visual elements are enhanced independently, generating luminous specular highlights while preserving ink-black shadow detail in dark movie scenes.",
      "With 2,000 lumens of long-lasting laser illumination, 95% DCI-P3 color reproduction via TRILUMINOS PRO™, and whisper-quiet 24dB operation, the VPL-XW5000ES effortlessly fills screens from 100 inches up to 200 inches with jaw-dropping cinematic realism."
    ],
    specs: [
      { label: "Display Technology", value: "Native 4K SXRD Panel (0.61\" x 3)" },
      { label: "Native Resolution", value: "3,840 x 2,160 Pixels (8.3 Million Pixels)" },
      { label: "Light Engine", value: "Z-Phosphor™ Laser Diode (20,000 Hours Lifespan)" },
      { label: "Luminous Brightness", value: "2,000 ANSI Lumens" },
      { label: "Processing Engine", value: "X1™ Ultimate for Projector" },
      { label: "Color Gamut", value: "95% DCI-P3 with TRILUMINOS PRO™" },
      { label: "HDR Processing", value: "Dynamic HDR Enhancer (HDR10 / HLG)" },
      { label: "Lens Shift", value: "Manual: Vertical ±71%, Horizontal ±25%" },
      { label: "Throw Ratio", value: "1.38:1 to 2.21:1 (Approx. 1.6x Manual Zoom)" },
      { label: "Input Latency", value: "21 ms at 4K 60Hz / 13 ms at 2K 120Hz" },
      { label: "Acoustic Noise", value: "24 dB (Whisper-Quiet Mode)" },
      { label: "Dimensions & Weight", value: "460 x 200 x 472 mm | 13.0 kg" }
    ],
    features: [
      {
        title: "Native 4K SXRD Technology",
        desc: "Three native 4K SXRD panels deliver uncompromised pixel density without digital pixel-shifting or optical artifacts.",
        icon: "bi-aspect-ratio"
      },
      {
        title: "X1™ Ultimate Picture Engine",
        desc: "Dual-database object-based super resolution sharpens textures and contours in real-time.",
        icon: "bi-cpu"
      },
      {
        title: "20,000-Hour Laser Lifespan",
        desc: "Mercury-free laser diode ensures decades of consistent brightness without lamp replacements or thermal warm-up delays.",
        icon: "bi-lightning-charge"
      },
      {
        title: "Dynamic HDR Enhancer",
        desc: "Analyzes luminance on a frame-by-frame basis to expand dynamic range and reveal delicate shadow gradients.",
        icon: "bi-brightness-high"
      },
      {
        title: "TRILUMINOS PRO™ Color",
        desc: "Expanded spectral color mapping reproduces deep crimsons, emerald greens, and natural skin tones with master-monitor accuracy.",
        icon: "bi-palette"
      },
      {
        title: "Low-Lag Gaming Pipeline",
        desc: "Lightning-fast 13ms response time at 120Hz provides immersive competitive and cinematic gaming on a grand scale.",
        icon: "bi-controller"
      }
    ],
    relatedIds: [
      "yamaha-aventage-rx-a8a",
      "sony-bravia-xr-98",
      "jbl-synthesis-hdi-3800",
      "denon-avc-x8500ha"
    ]
  },
  {
    id: "bose-designmax",
    aliases: ["bose-speakers", "bose-inceiling", "bose-dm8c"],
    brand: "Bose",
    name: "Bose DesignMax In-Ceiling Architectural Speakers",
    shortName: "Bose DesignMax In-Ceiling",
    category: "Speakers",
    categorySlug: "speakers",
    badge: "Architectural In-Ceiling",
    dealerBadge: "Bose Authorized Commercial & Residential Dealer",
    priceInfo: "Price on Consultation / Turnkey Architectural Integration",
    image: "images/products/bose-inceiling.webp",
    gallery: [
      "images/products/bose-inceiling.webp",
      "images/products/bose.webp",
      "images/gallery/theatre-01.webp"
    ],
    tagline: "Premium Coaxial Two-Way Architectural Ceiling Speakers for Invisible Luxury Sound",
    shortDesc: "Premium architectural ceiling speakers engineered with coaxial two-way drivers for rich lows and clear, intelligible highs without visual clutter.",
    fullDesc: [
      "The Bose DesignMax architectural speaker series brings audiophile clarity to luxury interiors where hardware must remain virtually invisible while delivering uncompromising spatial immersion.",
      "Engineered with a coaxial two-way driver configuration comprising an 8-inch low-frequency woofer and a center-aligned 1-inch compression tweeter, DesignMax delivers a wide, uniform 130-degree conical dispersion pattern. This ensures every seating location experiences pristine tonal balance and dialogue intelligibility.",
      "The ultra-thin magnetic grilles feature an edge-to-edge bezel-free profile that can be paint-matched to any ceiling or wood panel finish. Paired with Bose QuickHold mounting arms, installation is secure, vibration-damped, and acoustically isolated."
    ],
    specs: [
      { label: "Transducer Architecture", value: "Coaxial 2-Way (8\" Woofer + 1\" Neodymium Compression Driver)" },
      { label: "Frequency Range (-10 dB)", value: "52 Hz – 20,000 Hz" },
      { label: "Frequency Response (±3 dB)", value: "60 Hz – 20,000 Hz" },
      { label: "Nominal Dispersion", value: "130° Conical Coverage" },
      { label: "Power Handling", value: "125 W Continuous / 500 W Peak" },
      { label: "Maximum SPL @ 1m", value: "111 dB Continuous / 117 dB Peak" },
      { label: "Nominal Impedance", value: "8 Ω (Direct Bypass Mode)" },
      { label: "Multi-Tap Transformer", value: "70V / 100V with taps up to 80W" },
      { label: "Cutout Diameter", value: "349 mm (13.74 inches)" },
      { label: "Ceiling Mounting Depth", value: "235 mm (9.25 inches)" },
      { label: "Grille Finish", value: "Magnetically attached, paintable micro-perforated steel" },
      { label: "Net Weight", value: "9.5 kg (20.9 lbs) per speaker" }
    ],
    features: [
      {
        title: "Coaxial Driver Alignment",
        desc: "Point-source acoustic dispersion produces coherent wavefronts without phase cancellation between drivers.",
        icon: "bi-disc"
      },
      {
        title: "Disappearing Aesthetics",
        desc: "Bezel-free, paintable magnetic grilles seamlessly integrate into plasterboard, timber slats, or acoustic fabric ceilings.",
        icon: "bi-eye-slash"
      },
      {
        title: "Wide 130° Dispersion",
        desc: "Broad conical coverage eliminates sonic hot spots and dead zones across luxury residential living rooms.",
        icon: "bi-broadcast"
      },
      {
        title: "QuickHold Mounting Arms",
        desc: "Spring-assisted brackets minimize ceiling strain and decouple vibrations from structural drywall.",
        icon: "bi-tools"
      },
      {
        title: "Voiced for Multi-Channel Atmos",
        desc: "Acoustically calibrated for overhead Dolby Atmos height elevation and discrete surround channels.",
        icon: "bi-soundwave"
      },
      {
        title: "Euroblock Terminals",
        desc: "Heavy-duty industrial terminal blocks allow solid connection with heavy-gauge audiophile speaker cables.",
        icon: "bi-plug"
      }
    ],
    relatedIds: [
      "marantz-cinema-40",
      "bose-smart-ultra-soundbar",
      "jbl-hdi-1200p-subwoofer",
      "denon-avc-x8500ha"
    ]
  },
  {
    id: "yamaha-aventage-rx-a8a",
    aliases: ["yamaha-receiver", "yamaha-rx-a8a", "rx-a8a"],
    brand: "Yamaha",
    name: "Yamaha AVENTAGE RX-A8A 11.2-Channel AV Receiver",
    shortName: "Yamaha AVENTAGE RX-A8A",
    category: "Receivers",
    categorySlug: "receivers",
    badge: "11.2-Channel Flagship",
    dealerBadge: "Yamaha AVENTAGE Premier Dealer",
    priceInfo: "Price on Consultation / Precision DSP Acoustic Calibration",
    image: "images/products/yamaha.webp",
    gallery: [
      "images/products/yamaha.webp",
      "images/products/yamaha-receiver.webp",
      "images/gallery/theatre-03.webp"
    ],
    tagline: "Flagship 11.2-Channel AV Receiver with Dual ESS SABRE PRO DACs & SURROUND:AI™",
    shortDesc: "Flagship 11.2 channel AV receiver equipped with SURROUND:AI™, dual ESS SABRE PRO DACs, HDMI 2.1 8K passthrough, and Anti-Resonance Technology.",
    fullDesc: [
      "The Yamaha AVENTAGE RX-A8A stands at the absolute zenith of home theatre amplification. Engineered from the ground up to embody pure musicality and unrestrained cinema dynamics, it houses 11 channels of discrete amplification within a reinforced mechanical frame.",
      "The RX-A8A features dual 32-bit ESS SABRE PRO ES9042PRO digital-to-analog converters, delivering an astonishing signal-to-noise ratio and ultra-low jitter. Yamaha's proprietary SURROUND:AI™ analyzes the acoustic profile of scenes in real time—instantly differentiating between spoken dialogue, ambient soundscapes, and explosions to optimize the DSP envelope.",
      "Equipped with full-bandwidth HDMI 2.1 inputs supporting 8K/60Hz, 4K/120Hz, and HDR10+, along with YPAO™-R.S.C. 64-bit room calibration and XLR balanced audio terminals, the RX-A8A is the master control unit for uncompromised private screening rooms."
    ],
    specs: [
      { label: "Amplifier Channels", value: "11.2 Channels Powered" },
      { label: "Rated Power (8Ω, 20Hz-20kHz)", value: "150 W per channel (0.06% THD, 2 Channels Driven)" },
      { label: "Maximum Power (4Ω, 1kHz)", value: "220 W per channel (0.9% THD, 1 Channel Driven)" },
      { label: "DAC Architecture", value: "Dual ESS SABRE PRO ES9042PRO (384kHz / 32-bit)" },
      { label: "Surround Formats", value: "Dolby Atmos, DTS:X Pro, Auro-3D, CINEMA DSP HD4" },
      { label: "Scene Intelligence", value: "SURROUND:AI™ Real-Time Neural Processing" },
      { label: "Room Calibration", value: "YPAO™-R.S.C. with 3D Angle Measurement & 64-bit EQ" },
      { label: "HDMI Connectivity", value: "7 Inputs / 3 Outputs (All HDMI 2.1 / 40Gbps / HDCP 2.3)" },
      { label: "Video Capabilities", value: "8K/60Hz, 4K/120Hz, HDR10+, Dolby Vision, VRR, ALLM" },
      { label: "Analog & Pre-outs", value: "11.2 Channel Pre-Outs with XLR Balanced In/Out" },
      { label: "Network & Streaming", value: "MusicCast, AirPlay 2, TIDAL, Spotify Connect, Roon Tested" },
      { label: "Dimensions & Weight", value: "435 x 192 x 477 mm | 21.4 kg (47.2 lbs)" }
    ],
    features: [
      {
        title: "SURROUND:AI™ Intelligence",
        desc: "Analyzes movie content millisecond-by-millisecond to dynamically shape cinema soundfields with zero coloration.",
        icon: "bi-cpu-fill"
      },
      {
        title: "Dual ESS SABRE PRO DACs",
        desc: "Studio-master 32-bit digital decoding provides pristine dynamic range and total elimination of clock jitter.",
        icon: "bi-soundwave"
      },
      {
        title: "A.R.T. Wedge 5th Foot",
        desc: "Anti-Resonance Technology dampens transformer and chassis vibrations for dead-silent acoustic backgrounds.",
        icon: "bi-shield-check"
      },
      {
        title: "Full 40Gbps HDMI 2.1",
        desc: "Future-proof high-speed video routing for next-generation 8K cinematic playback and 4K120 console gaming.",
        icon: "bi-display"
      },
      {
        title: "Balanced XLR Interconnects",
        desc: "Professional balanced inputs and outputs eliminate electrical ground loops in dedicated equipment racks.",
        icon: "bi-reception-4"
      },
      {
        title: "YPAO™-R.S.C. Multi-Point EQ",
        desc: "Calibrates speaker angles, reflections, and crossover curves with mathematical 64-bit floating point precision.",
        icon: "bi-sliders"
      }
    ],
    relatedIds: [
      "sony-vpl-xw5000es",
      "jbl-synthesis-hdi-3800",
      "jbl-hdi-1200p-subwoofer",
      "bose-designmax"
    ]
  },
  {
    id: "denon-avc-x8500ha",
    aliases: ["denon-receiver", "denon-amplifier", "x8500ha"],
    brand: "Denon",
    name: "Denon AVC-X8500HA 13.2-Channel Reference AV Amplifier",
    shortName: "Denon AVC-X8500HA",
    category: "Receivers",
    categorySlug: "receivers",
    badge: "13.2-Channel Monolithic",
    dealerBadge: "Denon Flagship Certified Dealer",
    priceInfo: "Price on Consultation / Reference Installation & Tuning",
    image: "images/products/denon.webp",
    gallery: [
      "images/products/denon.webp",
      "images/products/denon-flagship.webp",
      "images/gallery/theatre-04.webp"
    ],
    tagline: "Flagship 13.2-Channel Monolithic Amplifier Handcrafted in Shirakawa, Japan",
    shortDesc: "Monolithic 13.2 channel AV amplifier powering up to 7.2.6 or 9.2.4 speaker arrays with Dolby Atmos, DTS:X Pro, IMAX Enhanced, and Auro-3D.",
    fullDesc: [
      "The Denon AVC-X8500HA is a monumental achievement in home theatre amplification. Meticulously handcrafted at Denon’s reference audio facility in Shirakawa, Japan, this 13.2-channel powerhouse drives expansive Dolby Atmos 7.2.6 and 9.2.4 speaker layouts without external power amplifiers.",
      "Each of the 13 discrete channels is isolated on its own independent amplifier board in a monolithic construction scheme. Powered by a massive 8.2kg toroidal power transformer and custom-built 22,000µF capacitors, the amplifier delivers 210 watts of high-current power per channel with staggering reserve dynamics.",
      "Featuring dual dual-core SHARC+ DSP processors, the AVC-X8500HA natively decodes DTS:X Pro up to 13.2 channels, IMAX Enhanced, Auro-3D, and Dolby Atmos. Full 8K/60Hz passthrough and Audyssey MultEQ XT32 room correction complete this ultimate flagship cinema engine."
    ],
    specs: [
      { label: "Amplifier Channels", value: "13.2 Discrete Channels (Monolithic Construction)" },
      { label: "Rated Power (8Ω, 20Hz-20kHz)", value: "150 W per channel (0.05% THD, 2 Channels Driven)" },
      { label: "Rated Power (6Ω, 1kHz)", value: "210 W per channel (1% THD, 1 Channel Driven)" },
      { label: "DSP Processing", value: "Dual Dual-Core SHARC+ Griffin Lite DSP Processors" },
      { label: "Audio Formats", value: "Dolby Atmos, DTS:X Pro (13.2 ch), IMAX Enhanced, Auro-3D" },
      { label: "Acoustic Calibration", value: "Audyssey MultEQ XT32 with Sub EQ HT and Dual Sub Tuning" },
      { label: "HDMI Architecture", value: "8 Inputs (1x 8K/60Hz Dedicated) / 3 Outputs (eARC enabled)" },
      { label: "HDR Formats", value: "Dolby Vision, HDR10+, Dynamic HDR, HLG" },
      { label: "Pre-Out Channels", value: "15.2 Channel Pre-Out Terminals (Gold-Plated)" },
      { label: "Power Supply", value: "Custom Oversized Toroidal Transformer (8.2 kg) & Monolithic Heat Sinks" },
      { label: "Manufacturing", value: "Handcrafted in Shirakawa, Japan" },
      { label: "Dimensions & Weight", value: "434 x 195 x 482 mm | 23.3 kg (51.4 lbs)" }
    ],
    features: [
      {
        title: "Monolithic 13-Channel Design",
        desc: "Each channel occupies its own modular amplifier board, eliminating magnetic crosstalk and channel interference.",
        icon: "bi-layers"
      },
      {
        title: "DTS:X Pro 13.2 Decoding",
        desc: "Drives up to 13 discrete ear-level and overhead height channels without requiring secondary external power blocks.",
        icon: "bi-badge-hd"
      },
      {
        title: "IMAX Enhanced Certification",
        desc: "Digitally re-mastered cinema audio profiles deliver thunderous, visceral low frequencies as intended by filmmakers.",
        icon: "bi-film"
      },
      {
        title: "Audyssey Sub EQ HT Dual Tuning",
        desc: "Individual delay, level, and frequency calibration for twin subwoofers ensures perfectly linear bass throughout the room.",
        icon: "bi-sliders2"
      },
      {
        title: "HEOS Multi-Room Streaming",
        desc: "Stream lossless 24-bit/192kHz FLAC and DSD 5.6MHz music across your entire luxury residence seamlessly.",
        icon: "bi-wifi"
      },
      {
        title: "Shirakawa Craftsmanship",
        desc: "Constructed with rigid three-layer chassis panels and custom audiophile capacitors made exclusively for Denon.",
        icon: "bi-award"
      }
    ],
    relatedIds: [
      "jbl-synthesis-hdi-3800",
      "jbl-hdi-1200p-subwoofer",
      "sony-vpl-xw5000es",
      "bose-designmax"
    ]
  },
  {
    id: "jbl-synthesis-hdi-3800",
    aliases: ["jbl-speakers", "jbl-hdi-3800", "hdi-3800"],
    brand: "JBL",
    name: "JBL Synthesis HDI-3800 Floorstanding Loudspeaker",
    shortName: "JBL Synthesis HDI-3800",
    category: "Speakers",
    categorySlug: "speakers",
    badge: "Reference Loudspeaker",
    dealerBadge: "JBL Synthesis Certified Luxury Dealer",
    priceInfo: "Price on Consultation / Acoustic Integration Included",
    image: "images/products/jbl-speaker.webp",
    gallery: [
      "images/products/jbl-speaker.webp",
      "images/products/jbl-speaker.webp",
      "images/gallery/theatre-05.webp"
    ],
    tagline: "High-Definition Imaging Waveguide Loudspeaker with Triple 8-Inch Matrix Woofers",
    shortDesc: "High-Definition Imaging compression horn driver loudspeaker paired with triple 8-inch Advanced Aluminum Matrix cone woofers for visceral cinema dynamics.",
    fullDesc: [
      "Designed and engineered in JBL’s world-renowned acoustic research facility in Northridge, California, the HDI-3800 is the flagship reference floorstanding loudspeaker of the JBL Synthesis HDI series.",
      "The core of the HDI-3800 is JBL’s patented High-Definition Imaging (HDI™) waveguide horn geometry, coupled to the revolutionary 2410H-2 1-inch Teonex compression driver. This assembly delivers razor-sharp transient response, vast dynamic scale, and effortless high-frequency realism with zero distortion at concert volume levels.",
      "The low end is propelled by three 8-inch (200mm) Advanced Aluminum Matrix cone woofers in a heavy bass-reflex cabinet with dual rear-firing computer-optimized ports. Finished in luxury furniture-grade automotive gloss lacquer and natural wood veneers, the HDI-3800 commands visual and acoustic authority in any screening room."
    ],
    specs: [
      { label: "Enclosure Type", value: "Bass-Reflex with Dual Rear-Firing Slipstream Ports" },
      { label: "High-Frequency Transducer", value: "1\" (25mm) 2410H-2 Teonex Compression Driver" },
      { label: "Waveguide Technology", value: "Patented JBL High-Definition Imaging (HDI™) Waveguide" },
      { label: "Low-Frequency Transducers", value: "Three 8\" (200mm) Cast-Frame Advanced Aluminum Matrix Cones" },
      { label: "Crossover Frequencies", value: "800 Hz, 1,800 Hz" },
      { label: "Frequency Response (-6 dB)", value: "37 Hz – 30,000 Hz" },
      { label: "Sensitivity (2.83V @ 1m)", value: "92 dB" },
      { label: "Nominal Impedance", value: "4 Ω" },
      { label: "Recommended Power", value: "25 W – 300 W RMS" },
      { label: "Terminals", value: "Dual Gold-Plated 5-Way Binding Posts (Bi-Amp / Bi-Wire Ready)" },
      { label: "Cabinet Dimensions (H x W x D)", value: "1,100.5 x 300.0 x 417.8 mm" },
      { label: "Net Weight", value: "38.0 kg (83.8 lbs) per loudspeaker" }
    ],
    features: [
      {
        title: "Patented HDI™ Waveguide",
        desc: "Delivers exceptionally neutral in-room frequency response with laser-accurate acoustic imaging.",
        icon: "bi-megaphone"
      },
      {
        title: "2410H-2 Compression Driver",
        desc: "Lightweight polymer Teonex diaphragm enhances transient speed and removes high-frequency breakup.",
        icon: "bi-volume-up"
      },
      {
        title: "Triple 8\" Aluminum Woofers",
        desc: "Long-throw motor structures with 1.5-inch voice coils produce bone-crushing cinema dynamics and speed.",
        icon: "bi-soundwave"
      },
      {
        title: "Curved Resonant-Free Cabinet",
        desc: "Extensively braced curved walls eliminate cabinet resonances and standing waves for uncolored sonic purity.",
        icon: "bi-shield-shaded"
      },
      {
        title: "Bi-Wire / Bi-Amp Binding Posts",
        desc: "Independent crossover paths allow discrete high and low frequency amplifier drive for maximum transparency.",
        icon: "bi-bezier2"
      },
      {
        title: "High Sensitivity 92dB",
        desc: "Effortlessly converts amplifier wattage into live, lifelike dynamics that capture the emotional punch of film scores.",
        icon: "bi-speedometer2"
      }
    ],
    relatedIds: [
      "jbl-hdi-1200p-subwoofer",
      "yamaha-aventage-rx-a8a",
      "denon-avc-x8500ha",
      "sony-vpl-xw5000es"
    ]
  },
  {
    id: "marantz-cinema-40",
    aliases: ["marantz-receiver", "cinema-40", "marantz-cinema40"],
    brand: "Marantz",
    name: "Marantz Cinema 40 Reference 9.4-Channel Receiver",
    shortName: "Marantz Cinema 40",
    category: "Receivers",
    categorySlug: "receivers",
    badge: "Reference 9.4-Channel",
    dealerBadge: "Marantz Authorized Reference Dealer",
    priceInfo: "Price on Consultation / Sound Master Calibrated",
    image: "images/products/marantz.webp",
    gallery: [
      "images/products/marantz.webp",
      "images/gallery/theatre-03.webp",
      "images/gallery/theatre-01.webp"
    ],
    tagline: "Reference 9.4-Channel AV Receiver with Marantz HDAM-SA2 & Dirac Live Calibration",
    shortDesc: "Premium reference 9.4 channel AV receiver featuring Marantz HDAM amplification, Dirac Live calibration, and high-resolution streaming with HEOS®.",
    fullDesc: [
      "The Marantz CINEMA 40 is a high-performance 9.4-channel AV receiver engineered for enthusiasts who demand both cinematic grandeur and audiophile musical warmth. Tuned by the Marantz Sound Master in Shirakawa, Japan, it presents sound with expansive spatial imaging, velvety mids, and sparkling transient detail.",
      "At its core lies Marantz’s proprietary HDAM-SA2 (Hyper Dynamic Amplifier Modules) discrete amplification circuitry, delivering 125 watts per channel of pure, low-distortion power. Uniquely equipped with four independent subwoofer outputs, it allows directional bass management to smooth room modes across all seating positions.",
      "The CINEMA 40 supports 11.4-channel processing, full 8K HDMI 2.1 switching, Dolby Atmos, DTS:X, Auro-3D, and both Audyssey MultEQ XT32 and optional Dirac Live calibration. Encased in a sculpted aluminum chassis with side accent lighting and the iconic porthole display, it is a masterclass in acoustic luxury."
    ],
    specs: [
      { label: "Amplifier Channels", value: "9 Discrete Channels (Processing for 11.4 Channels)" },
      { label: "Rated Power (8Ω, 20Hz-20kHz)", value: "125 W per channel (0.05% THD, 2 Channels Driven)" },
      { label: "Amplifier Topology", value: "Class A/B with Proprietary Marantz HDAM-SA2 Modules" },
      { label: "Subwoofer Channels", value: "4 Independent Subwoofer Outputs (Directional Mode Ready)" },
      { label: "Surround Decoding", value: "Dolby Atmos, DTS:X, Auro-3D, IMAX Enhanced, 360 Reality Audio" },
      { label: "Room Calibration", value: "Audyssey MultEQ XT32 (Included) & Dirac Live Upgradeable" },
      { label: "HDMI Switching", value: "7 Inputs / 3 Outputs (All HDMI 2.1, 8K/60Hz, 4K/120Hz, eARC)" },
      { label: "Analog Phono Stage", value: "High-Performance MM Phono EQ with HDAM Processing" },
      { label: "Porthole Display", value: "Iconic Circular Marantz OLED Display with Warm Ambient Side Glow" },
      { label: "Pre-Amplifier Mode", value: "Disconnects internal amps for ultra-clean AV processor operation" },
      { label: "Dimensions & Weight", value: "442 x 185 x 414 mm | 15.1 kg (33.3 lbs)" }
    ],
    features: [
      {
        title: "Proprietary HDAM-SA2 Circuitry",
        desc: "Replaces off-the-shelf op-amps with discrete modules for unmatched musical warmth, speed, and low noise floor.",
        icon: "bi-soundwave"
      },
      {
        title: "Quad Subwoofer Outputs",
        desc: "Connect and independently calibrate up to four subwoofers to eliminate acoustic standing waves in the room.",
        icon: "bi-sliders"
      },
      {
        title: "Dirac Live & Audyssey Ready",
        desc: "Choose between Audyssey MultEQ XT32 or advanced Dirac Live room correction for studio-grade acoustic tuning.",
        icon: "bi-graph-up"
      },
      {
        title: "Architectural Industrial Design",
        desc: "Brushed aluminum front panel with subtle warm LED side lighting and the legendary Marantz porthole window.",
        icon: "bi-gem"
      },
      {
        title: "Pure Pre-Amp Mode",
        desc: "Completely powers down internal amplifier stages to convert the unit into an ultra-clean high-end processor.",
        icon: "bi-toggles"
      },
      {
        title: "HEOS Multi-Room & Hi-Res",
        desc: "Stream 24-bit/192kHz audio from TIDAL, Spotify, and local NAS storage throughout your entire residence.",
        icon: "bi-cast"
      }
    ],
    relatedIds: [
      "bose-designmax",
      "bose-smart-ultra-soundbar",
      "jbl-hdi-1200p-subwoofer",
      "sony-vpl-xw5000es"
    ]
  },
  {
    id: "bose-smart-ultra-soundbar",
    aliases: ["bose-soundbar", "bose-ultra-soundbar", "smart-ultra-soundbar"],
    brand: "Bose",
    name: "Bose Smart Ultra Soundbar with Dolby Atmos",
    shortName: "Bose Smart Ultra Soundbar",
    category: "Soundbars",
    categorySlug: "soundbars",
    badge: "Dolby Atmos Spatial",
    dealerBadge: "Bose Authorized Cinema Partner",
    priceInfo: "Price on Consultation / Seamless Media Room Setup",
    image: "images/products/bose-soundbar.webp",
    gallery: [
      "images/products/bose-soundbar.webp",
      "images/products/bose-inceiling.webp",
      "images/gallery/theatre-02.webp"
    ],
    tagline: "Flagship Spatial Soundbar with Upward-Firing Dipole Transducers & AI Dialogue Mode",
    shortDesc: "Flagship soundbar with upward-firing dipole transducers, A.I. Dialogue Mode, and TrueSpace technology for multi-dimensional spatial sound in any room.",
    fullDesc: [
      "The Bose Smart Ultra Soundbar delivers a breathtaking multi-dimensional acoustic envelope in spaces where traditional floorstanding speakers and discrete ceiling wiring are not desired. It encapsulates decades of proprietary Bose acoustic engineering inside an impossibly sleek architectural profile.",
      "Equipped with nine precision transducers—including two custom upward-firing dipole drivers—it bounces soundwaves off your ceiling to create genuine overhead height realism with Dolby Atmos®. For content not mixed in Atmos, Bose TrueSpace™ technology intelligently remaps the soundstage to deliver immersive 3D audio.",
      "The integrated A.I. Dialogue Mode leverages machine learning to dynamically isolate voices and balance spoken words over explosive cinematic sound effects. Finished with polished tempered glass and an acoustically transparent wraparound metal grille, it elevates any modern luxury living space."
    ],
    specs: [
      { label: "Transducer Array", value: "9 Transducers (including 2 Custom Upward-Firing Dipole Drivers)" },
      { label: "Immersive Audio Support", value: "Dolby Atmos, Dolby Digital, Dolby TrueHD, Dolby Digital Plus" },
      { label: "Spatial Intelligence", value: "Bose TrueSpace™ Multi-Channel Spatial Processing" },
      { label: "Vocal Enhancement", value: "A.I. Dialogue Mode with Dynamic Frequency Realignment" },
      { label: "Acoustic Calibration", value: "ADAPTiQ Room Calibration Audio Headset Included" },
      { label: "Connectivity", value: "HDMI eARC, Optical TOSLink, Bluetooth 5.0, Wi-Fi" },
      { label: "Wireless Streaming", value: "Apple AirPlay 2, Spotify Connect, Chromecast Built-in" },
      { label: "Expansion Compatibility", value: "Bose Bass Module 700 & Bose Surround Speakers 700" },
      { label: "Exterior Materials", value: "Premium Tempered Glass Top & Wrap-Around Metal Grille" },
      { label: "Dimensions & Weight", value: "1,045 x 58.2 x 107 mm | 5.8 kg (12.7 lbs)" }
    ],
    features: [
      {
        title: "Upward-Firing Dipole Drivers",
        desc: "Projects sound vertically to bounce off ceilings, reproducing authentic overhead Dolby Atmos elevation effects.",
        icon: "bi-arrow-up-circle"
      },
      {
        title: "A.I. Dialogue Mode",
        desc: "Machine-learning algorithm dynamically balances vocals so actor dialogue remains crystal-clear in heavy action scenes.",
        icon: "bi-chat-left-dots"
      },
      {
        title: "Bose TrueSpace™ Spatial Engine",
        desc: "Upmixes standard 2-channel stereo and 5.1 soundtracks into an expansive, room-filling multi-channel experience.",
        icon: "bi-broadcast-pin"
      },
      {
        title: "ADAPTiQ Calibration",
        desc: "Analyzes the acoustic reflections of your living space to customize the frequency curve to your specific furniture and room layout.",
        icon: "bi-sliders2"
      },
      {
        title: "Tempered Glass & Metal Grille",
        desc: "Sophisticated materials seamlessly complement ultra-thin 4K OLED displays and bespoke media consoles.",
        icon: "bi-gem"
      },
      {
        title: "One-Cable HDMI eARC Setup",
        desc: "Transmits uncompressed multichannel audio directly from your television with single-remote volume synchronisation.",
        icon: "bi-tv"
      }
    ],
    relatedIds: [
      "sony-bravia-xr-98",
      "bose-designmax",
      "jbl-hdi-1200p-subwoofer",
      "marantz-cinema-40"
    ]
  },
  {
    id: "jbl-hdi-1200p-subwoofer",
    aliases: ["jbl-subwoofer", "jbl-hdi-1200p", "hdi-1200p"],
    brand: "JBL",
    name: "JBL Synthesis HDI-1200P Powered Subwoofer",
    shortName: "JBL HDI-1200P Subwoofer",
    category: "Subwoofers",
    categorySlug: "subwoofers",
    badge: "1,000W RMS Bass Engine",
    dealerBadge: "JBL Synthesis Certified Luxury Dealer",
    priceInfo: "Price on Consultation / In-Room Subwoofer Phase Alignment",
    image: "images/products/jbl.webp",
    gallery: [
      "images/products/jbl.webp",
      "images/products/jbl-subwoofer.webp",
      "images/gallery/theatre-04.webp"
    ],
    tagline: "High-Performance 1,000W RMS Powered Subwoofer with 12-Inch Poly-plas™ Woofer",
    shortDesc: "1,000 Watt RMS Class-D powered 12-inch sub with cast-aluminum frame Poly-plas™ cone, delivering thunderous bass down to 28Hz without distortion.",
    fullDesc: [
      "The JBL HDI-1200P is engineered to provide the tactile, subterranean low-frequency foundation required for reference home cinema screening rooms. Delivering uncompressed acoustic authority down to 28Hz, it reproduces cinematic explosions and musical basslines with zero mechanical overhang.",
      "The heart of the HDI-1200P is an internal 1,000-watt RMS Class-D switching amplifier driving a proprietary 12-inch (300mm) black Poly-plas™ cone transducer. With a cast-aluminum basket and a 3-inch high-temp voice coil, this driver delivers immense thermal power handling and linear excursion.",
      "The heavily braced enclosure features dual down-firing computer-optimized flared ports to eliminate turbulent wind noise. On-board parametric EQ and continuous phase controls allow our CEDIA calibration engineers to seamlessly integrate the subwoofer with your main speaker array."
    ],
    specs: [
      { label: "Amplifier Power", value: "1,000 Watts RMS / 2,000 Watts Peak (Class-D)" },
      { label: "Transducer", value: "12\" (300mm) Cast-Frame Poly-plas™ Cone with 3\" Voice Coil" },
      { label: "Enclosure Tuning", value: "Bass-Reflex with Dual Down-Firing Slipstream Ports" },
      { label: "Low Frequency Extension", value: "28 Hz (-6 dB)" },
      { label: "Low-Pass Crossover", value: "50 Hz – 150 Hz (Continuously Variable, 24dB/octave)" },
      { label: "Phase Control", value: "Continuously Variable 0° to 180°" },
      { label: "Parametric Room EQ", value: "Single-Band Parametric EQ (Frequency, Level, Q Bandwidth)" },
      { label: "Input Connectivity", value: "Balanced XLR Line Input & Gold-Plated RCA LFE Inputs" },
      { label: "Cabinet Construction", value: "Heavily Braced 3/4\" MDF with Curved Radiused Edges" },
      { label: "Dimensions (H x W x D)", value: "430.5 x 414.0 x 451.3 mm" },
      { label: "Net Weight", value: "31.8 kg (70.1 lbs)" }
    ],
    features: [
      {
        title: "1,000W RMS Class-D Muscle",
        desc: "Provides instant current reserves for seismic movie transients without clipping or compression.",
        icon: "bi-lightning-fill"
      },
      {
        title: "12\" Poly-plas™ Transducer",
        desc: "Reinforced cellulose composite cone combines low moving mass with high rigidity for pitch-accurate bass.",
        icon: "bi-disc-fill"
      },
      {
        title: "Down-Firing Aerodynamic Ports",
        desc: "Computer-sculpted flares eliminate port chuffing and turbulence even during demanding low-frequency passages.",
        icon: "bi-soundwave"
      },
      {
        title: "On-Board Parametric EQ",
        desc: "Allows surgical notch filtering of problematic room modes to eliminate boomy bass peaks.",
        icon: "bi-sliders"
      },
      {
        title: "Balanced XLR Input",
        desc: "Studio-grade XLR connector guarantees hum-free connection across long cable runs from rack-mounted processors.",
        icon: "bi-plug-fill"
      },
      {
        title: "Acoustically Inactive Enclosure",
        desc: "Internal matrix bracing ensures that acoustic energy enters the room through the transducer, not cabinet vibration.",
        icon: "bi-box-seam"
      }
    ],
    relatedIds: [
      "jbl-synthesis-hdi-3800",
      "yamaha-aventage-rx-a8a",
      "denon-avc-x8500ha",
      "bose-designmax"
    ]
  },
  {
    id: "sony-bravia-xr-98",
    aliases: ["sony-display", "sony-98", "bravia-98"],
    brand: "Sony",
    name: "Sony BRAVIA XR 98\" Cinema Display",
    shortName: "Sony BRAVIA XR 98\" Cinema",
    category: "Displays",
    categorySlug: "displays",
    badge: "98-Inch Master Display",
    dealerBadge: "Sony Professional Master Display Partner",
    priceInfo: "Price on Consultation / Certified White-Glove Wall Installation",
    image: "images/products/sony.webp",
    gallery: [
      "images/products/sony.webp",
      "images/products/sony-bravia-98.webp",
      "images/gallery/theatre-01.webp"
    ],
    tagline: "Mammoth 98-Inch 4K HDR Full Array LED Display with Cognitive Processor XR™",
    shortDesc: "Mammoth 98-inch 4K Full Array LED powered by Cognitive Processor XR™, engineered for light-filled media rooms and private viewing suites.",
    fullDesc: [
      "The monumental 98-inch Sony BRAVIA XR display delivers the grandeur of the cinema screen into daylight-drenched penthouses and multipurpose media salons where front projection is not practical. Spanning over 8 feet of diagonal visual surface, it commands absolute visual awe.",
      "Driven by Sony’s ground-breaking Cognitive Processor XR™, the display cross-analyzes hundreds of thousands of visual elements simultaneously—emulating the way the human brain focuses on focal points. Paired with Full Array LED local dimming and XR Contrast Booster, bright highlights pop with radiance while shadows maintain velvety blackness.",
      "The integrated Acoustic Multi-Audio™ technology utilizes sound-positioning tweeters in the frame, aligning audio origin points precisely with actors on screen. With 4K/120Hz HDMI 2.1 inputs, Dolby Vision, IMAX Enhanced certification, and a seamless slim aluminum bezel, the 98-inch BRAVIA XR transforms any luxury room into a private viewing suite."
    ],
    specs: [
      { label: "Screen Size & Diagonal", value: "98 Inches (248 cm Diagonal)" },
      { label: "Display Resolution", value: "3,840 x 2,160 Pixels (Native 4K UHD)" },
      { label: "Backlight Technology", value: "Full Array LED with Direct Local Dimming & XR Contrast Booster" },
      { label: "Image Processor", value: "Cognitive Processor XR™ with Human Perspective Modeling" },
      { label: "HDR Formats", value: "Dolby Vision, HDR10, HLG, IMAX Enhanced Certified" },
      { label: "Color Enhancement", value: "XR TRILUMINOS PRO™ (Over 1 Billion Colors)" },
      { label: "Motion & Refresh Rate", value: "XR Motion Clarity with Native 120 Hz Panel" },
      { label: "Audio System", value: "Acoustic Multi-Audio™ (Frame Tweeters + Subwoofers, 40W Output)" },
      { label: "HDMI Connectivity", value: "4 Ports (2x HDMI 2.1 supporting 4K/120Hz, VRR, ALLM, eARC)" },
      { label: "Smart Platform", value: "Google TV™ with Apple AirPlay 2, HomeKit, and Chromecast" },
      { label: "Bezel Design", value: "Seamless Edge Metal Bezel with Dark Silver Titanium Accent" },
      { label: "Dimensions & Weight", value: "2,199 x 1,255 x 85 mm | 67.2 kg (without stand)" }
    ],
    features: [
      {
        title: "Cognitive Processor XR™",
        desc: "Understands how the human brain perceives depth and color, rendering scenes with astonishing three-dimensional realism.",
        icon: "bi-cpu"
      },
      {
        title: "Full Array Local Dimming",
        desc: "Hundreds of discrete LED zones adjust intensity dynamically for piercing highlights and inky, uniform black levels.",
        icon: "bi-brightness-high"
      },
      {
        title: "Acoustic Multi-Audio™",
        desc: "Sound-positioning tweeters ensure that audio emerges directly from the screen where the action takes place.",
        icon: "bi-speaker"
      },
      {
        title: "Daylight Cinema Performance",
        desc: "High peak luminance and anti-reflective panel coating deliver vivid contrast even in bright, open architectural spaces.",
        icon: "bi-sun"
      },
      {
        title: "Next-Gen 4K120 Gaming",
        desc: "Supports 4K resolution at 120fps with Auto Low Latency Mode (ALLM) and Variable Refresh Rate (VRR).",
        icon: "bi-controller"
      },
      {
        title: "IMAX Enhanced Certified",
        desc: "Meets stringent performance standards set by IMAX and DTS engineers to deliver reference picture and sound.",
        icon: "bi-film"
      }
    ],
    relatedIds: [
      "yamaha-aventage-rx-a8a",
      "bose-smart-ultra-soundbar",
      "bose-designmax",
      "marantz-cinema-40"
    ]
  }
];

// Helper to look up a product by ID or alias
function findProductById(idOrAlias) {
  if (!idOrAlias) return null;
  const clean = String(idOrAlias).toLowerCase().trim();
  return AV_PRODUCTS.find(p => p.id === clean || (p.aliases && p.aliases.includes(clean))) || null;
}

// Attach to window for global access in browsers
if (typeof window !== 'undefined') {
  window.AV_PRODUCTS = AV_PRODUCTS;
  window.findProductById = findProductById;
}

// Export for Node.js test environments
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { AV_PRODUCTS, findProductById };
}
