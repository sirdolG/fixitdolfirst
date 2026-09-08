document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       DIAGNOSIS SYSTEM
    ===================================================== */

    const diagnosisForm =
        document.getElementById("diagnosisForm");


    if (diagnosisForm) {

        diagnosisForm.addEventListener("submit", function (event) {

            event.preventDefault();


            const category =
                document.getElementById("category").value;

            const problem =
                document.getElementById("problem").value
                .toLowerCase()
                .trim();


            if (!category) {

                alert("Please choose a problem category.");

                return;

            }


            if (!problem) {

                alert("Please describe the problem.");

                return;

            }


            const diagnosis =
                diagnose(category, problem);


            displayDiagnosis(diagnosis);

        });

    }



    /* =====================================================
       CONTACT FORM
    ===================================================== */

    const contactForm =
        document.getElementById("contactForm");


    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();


            const message =
                document.getElementById("contactMessage");


            if (message) {

                message.textContent =
                    "Thanks! Your message has been received.";

            }


            contactForm.reset();

        });

    }

});



/* =========================================================
   DIAGNOSIS DATABASE
========================================================= */

function diagnose(category, text) {


    /* =====================================================
       EMERGENCY CHECK
    ===================================================== */

    if (
        hasAny(text, [
            "fire",
            "flames",
            "smoke everywhere",
            "gas smell",
            "gas leak",
            "sparking",
            "sparks",
            "burning wire",
            "electrical fire",
            "ceiling collapsing",
            "roof collapsing"
        ])
    ) {

        return {

            title: "Potential emergency or serious safety hazard",

            description:
                "The symptoms you described may indicate a dangerous condition. This should not be treated as a normal DIY repair.",

            confidence: "High",

            difficulty: "Dangerous",

            time: "Do not DIY",

            cost: "Professional assessment",

            steps: [
                "Stop using the affected equipment or area.",
                "Move away from the hazard.",
                "If there is an active fire or immediate danger, contact your local emergency service.",
                "Do not touch exposed electrical wiring or damaged structural components.",
                "Have the problem assessed by an appropriate qualified professional."
            ],

            safety:
                "STOP: Your description contains a potential emergency warning. Safety should come before diagnosis."

        };

    }



    /* =====================================================
       DOORS
    ===================================================== */

    if (category === "doors") {


        if (
            hasAny(text, [
                "creak",
                "creaking",
                "squeak",
                "squeaking"
            ])
        ) {

            return {

                title: "Dry or worn door hinges",

                description:
                    "The most likely cause of the noise is insufficient lubrication, dirt, rust, or wear in one or more door hinges.",

                confidence: "High",

                difficulty: "Easy",

                time: "10–20 minutes",

                cost: "$5–$15",

                steps: [
                    "Open the door and inspect each hinge.",
                    "Look for dirt, rust or visible damage.",
                    "Apply a small amount of suitable hinge lubricant.",
                    "Open and close the door several times to distribute the lubricant.",
                    "If the noise remains, check for loose screws or worn hinge components."
                ],

                safety:
                    "If the hinge is badly damaged or the door is unstable, do not force it."

            };

        }


        if (
            hasAny(text, [
                "stuck",
                "won't open",
                "wont open",
                "hard to open"
            ])
        ) {

            return {

                title: "Door alignment or latch problem",

                description:
                    "The door may have shifted on its hinges, be rubbing against the frame, or have a problem with the latch.",

                confidence: "High",

                difficulty: "Medium",

                time: "30–60 minutes",

                cost: "$10–$50",

                steps: [
                    "Open the door as far as it will safely go.",
                    "Look for areas where the door rubs against the frame.",
                    "Check all visible hinge screws.",
                    "Tighten loose screws.",
                    "Test the latch and door several times."
                ],

                safety:
                    "Do not force a badly stuck door because this can damage the frame or hardware."

            };

        }


        if (
            hasAny(text, [
                "handle",
                "knob",
                "loose handle"
            ])
        ) {

            return {

                title: "Loose or worn door handle",

                description:
                    "The handle or knob likely has loose mounting screws or a worn internal mechanism.",

                confidence: "High",

                difficulty: "Easy",

                time: "10–30 minutes",

                cost: "$5–$40",

                steps: [
                    "Check the handle for excessive movement.",
                    "Locate the mounting screws.",
                    "Tighten the screws carefully.",
                    "Operate the handle several times.",
                    "Replace the handle if the internal mechanism is damaged."
                ],

                safety:
                    "If this is an exterior security door, repair damaged locking hardware promptly."

            };

        }


        if (
            hasAny(text, [
                "lock",
                "key",
                "key won't turn",
                "key wont turn"
            ])
        ) {

            return {

                title: "Door lock or key alignment problem",

                description:
                    "The lock may be dirty, worn, misaligned with the strike plate, or affected by a damaged key.",

                confidence: "Medium",

                difficulty: "Easy–Medium",

                time: "15–45 minutes",

                cost: "$5–$60",

                steps: [
                    "Check the key for bending or visible damage.",
                    "Try operating the key while gently moving the door.",
                    "Inspect the latch and strike plate.",
                    "Use an appropriate lock lubricant if needed.",
                    "Replace damaged hardware if the problem continues."
                ],

                safety:
                    "Do not force the key because it could break inside the lock."

            };

        }


        return categoryFallback("doors");

    }



    /* =====================================================
       PLUMBING
    ===================================================== */

    if (category === "plumbing") {


        if (
            hasAny(text, [
                "leak",
                "leaking",
                "dripping",
                "water coming out"
            ])
        ) {

            return {

                title: "Plumbing leak from a fitting, seal or pipe",

                description:
                    "The symptoms suggest a water leak. Common causes include loose connections, worn seals, washers, valves or damaged pipework.",

                confidence: "High",

                difficulty: "Medium",

                time: "30–90 minutes",

                cost: "$15–$100",

                steps: [
                    "Find the exact point where the water begins.",
                    "Place a towel or container underneath the leak.",
                    "Inspect visible connections for looseness.",
                    "If appropriate, turn off the local water supply.",
                    "Repair the fitting or contact a plumber if the leak continues."
                ],

                safety:
                    "Keep water away from electrical equipment. Major flooding should be handled by a professional."

            };

        }


        if (
            hasAny(text, [
                "clog",
                "blocked",
                "slow drain",
                "draining slowly",
                "drain won't drain"
            ])
        ) {

            return {

                title: "Blocked or restricted drain",

                description:
                    "A buildup of hair, food, grease, soap or other material is likely restricting water flow.",

                confidence: "High",

                difficulty: "Easy–Medium",

                time: "15–45 minutes",

                cost: "$5–$30",

                steps: [
                    "Remove any visible material from the drain.",
                    "Try a suitable plunger.",
                    "Flush with warm water if appropriate for the fixture.",
                    "Do not mix different chemical drain cleaners.",
                    "If the blockage remains, contact a plumber."
                ],

                safety:
                    "Never mix chemical drain-cleaning products."

            };

        }


        if (
            hasAny(text, [
                "toilet won't flush",
                "toilet wont flush",
                "toilet not flushing"
            ])
        ) {

            return {

                title: "Toilet flush mechanism problem",

                description:
                    "The handle, chain, flapper, fill mechanism or another internal component may not be operating correctly.",

                confidence: "High",

                difficulty: "Easy–Medium",

                time: "20–45 minutes",

                cost: "$10–$50",

                steps: [
                    "Remove the tank lid.",
                    "Check whether the handle and chain are connected.",
                    "Inspect the flapper and fill mechanism.",
                    "Replace a damaged inexpensive component if necessary.",
                    "Test the toilet several times."
                ],

                safety:
                    "If the toilet is overflowing, stop the water supply immediately."

            };

        }


        return categoryFallback("plumbing");

    }



    /* =====================================================
       ELECTRICAL
    ===================================================== */

    if (category === "electrical") {


        if (
            hasAny(text, [
                "sparking",
                "spark",
                "burning smell",
                "burning",
                "hot outlet"
            ])
        ) {

            return {

                title: "Possible electrical fault",

                description:
                    "Sparks, burning smells or an unusually hot outlet can indicate damaged wiring, an overloaded circuit or a faulty electrical component.",

                confidence: "High",

                difficulty: "Dangerous",

                time: "Professional inspection",

                cost: "$75–$500+",

                steps: [
                    "Stop using the affected outlet or equipment.",
                    "Keep away from exposed wires.",
                    "If safe, switch off the affected circuit.",
                    "Do not remove the outlet cover.",
                    "Contact a qualified electrician."
                ],

                safety:
                    "DO NOT attempt internal electrical repairs unless you are properly qualified."

            };

        }


        if (
            hasAny(text, [
                "outlet not working",
                "socket not working",
                "power not working",
                "no power"
            ])
        ) {

            return {

                title: "Possible tripped circuit or faulty outlet",

                description:
                    "The problem may be caused by a tripped breaker, safety outlet, overloaded circuit or failed outlet.",

                confidence: "Medium",

                difficulty: "Medium",

                time: "15–60 minutes",

                cost: "$50–$250+",

                steps: [
                    "Check whether other nearby outlets also have no power.",
                    "Look for a tripped breaker.",
                    "If appropriate, reset a safety outlet.",
                    "Do not remove the outlet cover.",
                    "Contact an electrician if the problem remains."
                ],

                safety:
                    "Do not touch exposed wiring or dismantle an electrical outlet."

            };

        }


        if (
            hasAny(text, [
                "light not working",
                "light won't turn on",
                "light wont turn on"
            ])
        ) {

            return {

                title: "Possible bulb, switch or circuit problem",

                description:
                    "The simplest cause may be a failed bulb, but the issue could also involve the switch or electrical circuit.",

                confidence: "Medium",

                difficulty: "Easy–Professional",

                time: "10–45 minutes",

                cost: "$5–$150+",

                steps: [
                    "Turn the light off.",
                    "If appropriate, replace the bulb with a compatible bulb.",
                    "Test the switch.",
                    "Check whether other lights on the same circuit work.",
                    "If the problem continues, contact an electrician."
                ],

                safety:
                    "Never work on exposed electrical wiring while power is connected."

            };

        }


        return categoryFallback("electrical");

    }



    /* =====================================================
       APPLIANCES
    ===================================================== */

    if (category === "appliance") {


        if (
            hasAny(text, [
                "washing machine",
                "washer"
            ])
        ) {

            if (
                hasAny(text, [
                    "won't drain",
                    "wont drain",
                    "not draining"
                ])
            ) {

                return {

                    title: "Washing machine drainage problem",

                    description:
                        "A blocked filter, kinked drain hose or drainage pump problem may be preventing the machine from removing water.",

                    confidence: "High",

                    difficulty: "Medium",

                    time: "30–90 minutes",

                    cost: "$10–$150",

                    steps: [
                        "Turn the machine off.",
                        "Check the drain hose for kinks.",
                        "Inspect the accessible filter if your model has one.",
                        "Remove accessible debris according to the manufacturer's instructions.",
                        "Contact an appliance technician if the pump appears faulty."
                    ],

                    safety:
                        "Disconnect power before inspecting accessible components."

                };

            }


            return {

                title: "Washing machine operating problem",

                description:
                    "The machine may have a drainage, water supply, door-lock, balance or control problem.",

                confidence: "Medium",

                difficulty: "Medium",

                time: "30–90 minutes",

                cost: "$10–$200",

                steps: [
                    "Check that the machine has power.",
                    "Check the water supply.",
                    "Make sure the door is fully closed.",
                    "Check for obvious hose problems.",
                    "Look at the machine's error code if one is displayed."
                ],

                safety:
                    "Disconnect power before inspecting anything beyond normal user controls."

            };

        }


        if (
            hasAny(text, [
                "fridge",
                "refrigerator"
            ])
        ) {

            return {

                title: "Refrigerator cooling or airflow problem",

                description:
                    "The cause may be a temperature setting, blocked airflow, dirty ventilation area, damaged door seal or cooling-system fault.",

                confidence: "Medium",

                difficulty: "Medium",

                time: "30–120 minutes",

                cost: "$20–$300+",

                steps: [
                    "Check the temperature setting.",
                    "Make sure the refrigerator door closes fully.",
                    "Check that internal air vents are not blocked.",
                    "Clean accessible exterior ventilation areas.",
                    "Contact an appliance technician if cooling does not improve."
                ],

                safety:
                    "Do not attempt to repair the sealed refrigeration system yourself."

            };

        }


        return categoryFallback("appliance");

    }



    /* =====================================================
       HOME / BUILDING
    ===================================================== */

    if (category === "home") {


        if (
            hasAny(text, [
                "crack",
                "cracked",
                "wall crack",
                "ceiling crack"
            ])
        ) {

            return {

                title: "Wall or ceiling crack requiring assessment",

                description:
                    "The crack may be cosmetic, caused by normal movement, moisture, or potentially structural movement. Its size and progression matter.",

                confidence: "Medium",

                difficulty: "Easy–Professional",

                time: "1–4 hours",

                cost: "$10–$500+",

                steps: [
                    "Measure or photograph the crack so you can monitor changes.",
                    "Check for nearby moisture or water damage.",
                    "Look for signs that the crack is growing.",
                    "Small stable surface cracks may be repairable with filler.",
                    "Have large, spreading or structural-looking cracks professionally inspected."
                ],

                safety:
                    "Do not ignore large or rapidly growing structural cracks."

            };

        }


        if (
            hasAny(text, [
                "window",
                "draft",
                "cold air"
            ])
        ) {

            return {

                title: "Possible window seal or frame problem",

                description:
                    "Cold air or drafts around a window can be caused by worn seals, gaps around the frame, or poor alignment.",

                confidence: "Medium",

                difficulty: "Easy–Medium",

                time: "30–90 minutes",

                cost: "$10–$100",

                steps: [
                    "Check where the draft is entering.",
                    "Inspect the visible window seal.",
                    "Check whether the window closes evenly.",
                    "Replace a worn weather seal if appropriate.",
                    "Seal gaps around the frame where suitable."
                ],

                safety:
                    "If the frame is severely damaged, have it professionally inspected."

            };

        }


        return categoryFallback("home");

    }


    return generalDiagnosis(text);

}



/* =========================================================
   CATEGORY FALLBACKS
   NO UNKNOWN RESULTS
========================================================= */

function categoryFallback(category) {


    const fallbacks = {


        doors: {

            title: "General door hardware or alignment problem",

            description:
                "The symptoms suggest the door, frame, hinges, latch or hardware should be inspected. The most common causes are loose hardware, alignment changes, dirt or normal wear.",

            confidence: "Medium",

            difficulty: "Easy–Medium",

            time: "20–60 minutes",

            cost: "$5–$75",

            steps: [
                "Operate the door slowly and identify exactly where the problem occurs.",
                "Inspect the hinges and visible hardware.",
                "Check for loose screws or obvious damage.",
                "Clean and lubricate suitable moving components.",
                "If the door remains difficult to operate, consider professional adjustment."
            ],

            safety:
                "Do not force a damaged or unstable door."

        },


        plumbing: {

            title: "General plumbing fixture problem",

            description:
                "The problem appears related to a plumbing fixture or water system. Loose fittings, worn seals, blockages and valves are common causes.",

            confidence: "Medium",

            difficulty: "Medium",

            time: "30–90 minutes",

            cost: "$15–$150",

            steps: [
                "Identify the exact fixture involved.",
                "Look for visible leaks or loose connections.",
                "Check whether water flow is normal.",
                "Turn off the local water supply before disassembling a fixture.",
                "Contact a plumber if the source cannot be identified safely."
            ],

            safety:
                "Keep water away from electrical equipment."

        },


        electrical: {

            title: "Electrical system problem requiring caution",

            description:
                "The symptoms suggest an electrical issue, but more information or professional inspection may be needed to identify the exact fault.",

            confidence: "Medium",

            difficulty: "Professional",

            time: "15–60 minutes",

            cost: "$75–$500+",

            steps: [
                "Stop using the affected equipment.",
                "Check only normal user controls such as switches or breakers.",
                "Do not remove outlet or switch covers.",
                "Look for signs of heat, burning or physical damage from a safe distance.",
                "Contact a qualified electrician if the problem continues."
            ],

            safety:
                "Do not work on exposed electrical wiring."

        },


        appliance: {

            title: "General appliance fault",

            description:
                "The appliance may have a power, control, mechanical, drainage or component problem. The exact symptom determines the repair.",

            confidence: "Medium",

            difficulty: "Medium",

            time: "30–120 minutes",

            cost: "$10–$300+",

            steps: [
                "Check that the appliance has power.",
                "Check the normal user controls and settings.",
                "Look for an error code.",
                "Inspect accessible hoses, filters or vents where appropriate.",
                "Contact an appliance technician if the fault continues."
            ],

            safety:
                "Disconnect power before inspecting accessible components."

        },


        home: {

            title: "General home maintenance problem",

            description:
                "The problem appears to be a general household maintenance issue. The likely cause depends on the location, symptoms and visible damage.",

            confidence: "Medium",

            difficulty: "Easy–Medium",

            time: "30–120 minutes",

            cost: "$10–$150",

            steps: [
                "Identify exactly where the problem occurs.",
                "Check for visible damage, moisture, movement or loose components.",
                "Compare the affected area with a nearby unaffected area.",
                "Make only simple repairs if the cause is clear.",
                "Contact a qualified professional if the problem involves structural, gas or electrical systems."
            ],

            safety:
                "Stop if the problem appears structural, electrical, gas-related or otherwise dangerous."

        }

    };


    return fallbacks[category];

}



/* =========================================================
   GENERAL DIAGNOSIS
========================================================= */

function generalDiagnosis(text) {


    let title =
        "General household maintenance issue";

    let description =
        "The symptoms suggest a common household maintenance problem. The safest approach is to identify the exact location and visible symptoms before attempting a repair.";

    let confidence =
        "Medium";

    let difficulty =
        "Easy–Medium";

    let time =
        "30–90 minutes";

    let cost =
        "$10–$100";

    let steps = [
        "Identify exactly where the problem is occurring.",
        "Look for visible damage, loose components, leaks, unusual sounds or smells.",
        "Check whether the problem changes when the item is operated.",
        "Try only simple maintenance if the cause is clearly visible.",
        "If the problem involves electrical, gas, structural or major water damage, contact a qualified professional."
    ];

    let safety =
        "Stop and seek professional help if you discover a serious electrical, gas, structural or flooding hazard.";


    if (
        hasAny(text, [
            "noise",
            "sound",
            "rattling",
            "vibration",
            "buzzing"
        ])
    ) {

        title =
            "Possible loose or worn component";

        description =
            "An unusual sound or vibration commonly comes from a loose fastener, dry moving part, worn component or something contacting another surface.";

        confidence =
            "Medium";

        difficulty =
            "Easy–Medium";

        time =
            "15–60 minutes";

        cost =
            "$5–$100";

        steps = [
            "Identify exactly when the sound occurs.",
            "Locate the area where the sound is strongest.",
            "Check for loose screws, panels or hardware.",
            "Look for parts rubbing or vibrating against each other.",
            "If the component is damaged or difficult to access, seek professional help."
        ];

    }


    if (
        hasAny(text, [
            "smell",
            "odor",
            "odour"
        ])
    ) {

        title =
            "Unusual household odor requiring investigation";

        description =
            "The source of an unusual smell needs to be identified before attempting a repair. The cause could range from moisture or debris to an electrical or gas-related hazard.";

        confidence =
            "Medium";

        difficulty =
            "Investigate first";

        time =
            "15–60 minutes";

        cost =
            "$0–$150+";

        steps = [
            "Identify where the smell is strongest.",
            "Check for visible moisture, mold, overheating or damaged materials.",
            "Do not ignore a burning or gas-like smell.",
            "Ventilate the area when appropriate.",
            "Contact an appropriate professional if the source is unclear or potentially dangerous."
        ];

        safety =
            "A gas-like or burning smell can indicate a serious hazard. Leave the area and seek appropriate emergency assistance."

    }


    if (
        hasAny(text, [
            "loose",
            "wobbly",
            "moving",
            "shaking"
        ])
    ) {

        title =
            "Loose or unstable component";

        description =
            "The symptoms suggest that a fixture, fitting or component may have become loose or worn.";

        confidence =
            "Medium";

        difficulty =
            "Easy–Medium";

        time =
            "15–60 minutes";

        cost =
            "$5–$75";

        steps = [
            "Identify exactly which component is moving.",
            "Check visible screws, bolts or mounting points.",
            "Tighten suitable hardware carefully.",
            "Check whether the component remains stable.",
            "Replace damaged hardware or seek professional help if necessary."
        ];

    }


    return {

        title,
        description,
        confidence,
        difficulty,
        time,
        cost,
        steps,
        safety

    };

}



/* =========================================================
   KEYWORD HELPER
========================================================= */

function hasAny(text, keywords) {

    return keywords.some(function (keyword) {

        return text.includes(keyword);

    });

}



/* =========================================================
   DISPLAY RESULT
========================================================= */

function displayDiagnosis(result) {


    const resultPanel =
        document.getElementById("diagnosisResult");


    document.getElementById("resultTitle")
        .textContent = result.title;


    document.getElementById("resultDescription")
        .textContent = result.description;


    document.getElementById("confidence")
        .textContent = result.confidence;


    document.getElementById("difficulty")
        .textContent = result.difficulty;


    document.getElementById("repairTime")
        .textContent = result.time;


    document.getElementById("cost")
        .textContent = result.cost;


    const steps =
        document.getElementById("fixSteps");


    steps.innerHTML = "";


    result.steps.forEach(function (step) {

        const item =
            document.createElement("li");

        item.textContent = step;

        steps.appendChild(item);

    });


    document.getElementById("safetyWarning")
        .textContent = result.safety;


    document.getElementById("resultStatus")
        .textContent = "RESULT READY";


    resultPanel.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

}document.addEventListener("DOMContentLoaded", function () {


    /* =====================================================
       DIAGNOSIS SYSTEM
    ===================================================== */

    const diagnosisForm =
        document.getElementById("diagnosisForm");


    if (diagnosisForm) {

        diagnosisForm.addEventListener("submit", function (event) {

            event.preventDefault();


            const category =
                document.getElementById("category").value;

            const problem =
                document.getElementById("problem").value
                .toLowerCase()
                .trim();


            if (!category) {

                alert("Please choose a problem category.");

                return;

            }


            if (!problem) {

                alert("Please describe the problem.");

                return;

            }


            const diagnosis =
                diagnose(category, problem);


            displayDiagnosis(diagnosis);

        });

    }



    /* =====================================================
       CONTACT FORM
    ===================================================== */

    const contactForm =
        document.getElementById("contactForm");


    if (contactForm) {

        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();


            const message =
                document.getElementById("contactMessage");


            if (message) {

                message.textContent =
                    "Thanks! Your message has been received.";

            }


            contactForm.reset();

        });

    }

});



/* =========================================================
   DIAGNOSIS DATABASE
========================================================= */

function diagnose(category, text) {


    /* =====================================================
       EMERGENCY CHECK
    ===================================================== */

    if (
        hasAny(text, [
            "fire",
            "flames",
            "smoke everywhere",
            "gas smell",
            "gas leak",
            "sparking",
            "sparks",
            "burning wire",
            "electrical fire",
            "ceiling collapsing",
            "roof collapsing"
        ])
    ) {

        return {

            title: "Potential emergency or serious safety hazard",

            description:
                "The symptoms you described may indicate a dangerous condition. This should not be treated as a normal DIY repair.",

            confidence: "High",

            difficulty: "Dangerous",

            time: "Do not DIY",

            cost: "Professional assessment",

            steps: [
                "Stop using the affected equipment or area.",
                "Move away from the hazard.",
                "If there is an active fire or immediate danger, contact your local emergency service.",
                "Do not touch exposed electrical wiring or damaged structural components.",
                "Have the problem assessed by an appropriate qualified professional."
            ],

            safety:
                "STOP: Your description contains a potential emergency warning. Safety should come before diagnosis."

        };

    }



    /* =====================================================
       DOORS
    ===================================================== */

    if (category === "doors") {


        if (
            hasAny(text, [
                "creak",
                "creaking",
                "squeak",
                "squeaking"
            ])
        ) {

            return {

                title: "Dry or worn door hinges",

                description:
                    "The most likely cause of the noise is insufficient lubrication, dirt, rust, or wear in one or more door hinges.",

                confidence: "High",

                difficulty: "Easy",

                time: "10–20 minutes",

                cost: "$5–$15",

                steps: [
                    "Open the door and inspect each hinge.",
                    "Look for dirt, rust or visible damage.",
                    "Apply a small amount of suitable hinge lubricant.",
                    "Open and close the door several times to distribute the lubricant.",
                    "If the noise remains, check for loose screws or worn hinge components."
                ],

                safety:
                    "If the hinge is badly damaged or the door is unstable, do not force it."

            };

        }


        if (
            hasAny(text, [
                "stuck",
                "won't open",
                "wont open",
                "hard to open"
            ])
        ) {

            return {

                title: "Door alignment or latch problem",

                description:
                    "The door may have shifted on its hinges, be rubbing against the frame, or have a problem with the latch.",

                confidence: "High",

                difficulty: "Medium",

                time: "30–60 minutes",

                cost: "$10–$50",

                steps: [
                    "Open the door as far as it will safely go.",
                    "Look for areas where the door rubs against the frame.",
                    "Check all visible hinge screws.",
                    "Tighten loose screws.",
                    "Test the latch and door several times."
                ],

                safety:
                    "Do not force a badly stuck door because this can damage the frame or hardware."

            };

        }


        if (
            hasAny(text, [
                "handle",
                "knob",
                "loose handle"
            ])
        ) {

            return {

                title: "Loose or worn door handle",

                description:
                    "The handle or knob likely has loose mounting screws or a worn internal mechanism.",

                confidence: "High",

                difficulty: "Easy",

                time: "10–30 minutes",

                cost: "$5–$40",

                steps: [
                    "Check the handle for excessive movement.",
                    "Locate the mounting screws.",
                    "Tighten the screws carefully.",
                    "Operate the handle several times.",
                    "Replace the handle if the internal mechanism is damaged."
                ],

                safety:
                    "If this is an exterior security door, repair damaged locking hardware promptly."

            };

        }


        if (
            hasAny(text, [
                "lock",
                "key",
                "key won't turn",
                "key wont turn"
            ])
        ) {

            return {

                title: "Door lock or key alignment problem",

                description:
                    "The lock may be dirty, worn, misaligned with the strike plate, or affected by a damaged key.",

                confidence: "Medium",

                difficulty: "Easy–Medium",

                time: "15–45 minutes",

                cost: "$5–$60",

                steps: [
                    "Check the key for bending or visible damage.",
                    "Try operating the key while gently moving the door.",
                    "Inspect the latch and strike plate.",
                    "Use an appropriate lock lubricant if needed.",
                    "Replace damaged hardware if the problem continues."
                ],

                safety:
                    "Do not force the key because it could break inside the lock."

            };

        }


        return categoryFallback("doors");

    }



    /* =====================================================
       PLUMBING
    ===================================================== */

    if (category === "plumbing") {


        if (
            hasAny(text, [
                "leak",
                "leaking",
                "dripping",
                "water coming out"
            ])
        ) {

            return {

                title: "Plumbing leak from a fitting, seal or pipe",

                description:
                    "The symptoms suggest a water leak. Common causes include loose connections, worn seals, washers, valves or damaged pipework.",

                confidence: "High",

                difficulty: "Medium",

                time: "30–90 minutes",

                cost: "$15–$100",

                steps: [
                    "Find the exact point where the water begins.",
                    "Place a towel or container underneath the leak.",
                    "Inspect visible connections for looseness.",
                    "If appropriate, turn off the local water supply.",
                    "Repair the fitting or contact a plumber if the leak continues."
                ],

                safety:
                    "Keep water away from electrical equipment. Major flooding should be handled by a professional."

            };

        }


        if (
            hasAny(text, [
                "clog",
                "blocked",
                "slow drain",
                "draining slowly",
                "drain won't drain"
            ])
        ) {

            return {

                title: "Blocked or restricted drain",

                description:
                    "A buildup of hair, food, grease, soap or other material is likely restricting water flow.",

                confidence: "High",

                difficulty: "Easy–Medium",

                time: "15–45 minutes",

                cost: "$5–$30",

                steps: [
                    "Remove any visible material from the drain.",
                    "Try a suitable plunger.",
                    "Flush with warm water if appropriate for the fixture.",
                    "Do not mix different chemical drain cleaners.",
                    "If the blockage remains, contact a plumber."
                ],

                safety:
                    "Never mix chemical drain-cleaning products."

            };

        }


        if (
            hasAny(text, [
                "toilet won't flush",
                "toilet wont flush",
                "toilet not flushing"
            ])
        ) {

            return {

                title: "Toilet flush mechanism problem",

                description:
                    "The handle, chain, flapper, fill mechanism or another internal component may not be operating correctly.",

                confidence: "High",

                difficulty: "Easy–Medium",

                time: "20–45 minutes",

                cost: "$10–$50",

                steps: [
                    "Remove the tank lid.",
                    "Check whether the handle and chain are connected.",
                    "Inspect the flapper and fill mechanism.",
                    "Replace a damaged inexpensive component if necessary.",
                    "Test the toilet several times."
                ],

                safety:
                    "If the toilet is overflowing, stop the water supply immediately."

            };

        }


        return categoryFallback("plumbing");

    }



    /* =====================================================
       ELECTRICAL
    ===================================================== */

    if (category === "electrical") {


        if (
            hasAny(text, [
                "sparking",
                "spark",
                "burning smell",
                "burning",
                "hot outlet"
            ])
        ) {

            return {

                title: "Possible electrical fault",

                description:
                    "Sparks, burning smells or an unusually hot outlet can indicate damaged wiring, an overloaded circuit or a faulty electrical component.",

                confidence: "High",

                difficulty: "Dangerous",

                time: "Professional inspection",

                cost: "$75–$500+",

                steps: [
                    "Stop using the affected outlet or equipment.",
                    "Keep away from exposed wires.",
                    "If safe, switch off the affected circuit.",
                    "Do not remove the outlet cover.",
                    "Contact a qualified electrician."
                ],

                safety:
                    "DO NOT attempt internal electrical repairs unless you are properly qualified."

            };

        }


        if (
            hasAny(text, [
                "outlet not working",
                "socket not working",
                "power not working",
                "no power"
            ])
        ) {

            return {

                title: "Possible tripped circuit or faulty outlet",

                description:
                    "The problem may be caused by a tripped breaker, safety outlet, overloaded circuit or failed outlet.",

                confidence: "Medium",

                difficulty: "Medium",

                time: "15–60 minutes",

                cost: "$50–$250+",

                steps: [
                    "Check whether other nearby outlets also have no power.",
                    "Look for a tripped breaker.",
                    "If appropriate, reset a safety outlet.",
                    "Do not remove the outlet cover.",
                    "Contact an electrician if the problem remains."
                ],

                safety:
                    "Do not touch exposed wiring or dismantle an electrical outlet."

            };

        }


        if (
            hasAny(text, [
                "light not working",
                "light won't turn on",
                "light wont turn on"
            ])
        ) {

            return {

                title: "Possible bulb, switch or circuit problem",

                description:
                    "The simplest cause may be a failed bulb, but the issue could also involve the switch or electrical circuit.",

                confidence: "Medium",

                difficulty: "Easy–Professional",

                time: "10–45 minutes",

                cost: "$5–$150+",

                steps: [
                    "Turn the light off.",
                    "If appropriate, replace the bulb with a compatible bulb.",
                    "Test the switch.",
                    "Check whether other lights on the same circuit work.",
                    "If the problem continues, contact an electrician."
                ],

                safety:
                    "Never work on exposed electrical wiring while power is connected."

            };

        }


        return categoryFallback("electrical");

    }



    /* =====================================================
       APPLIANCES
    ===================================================== */

    if (category === "appliance") {


        if (
            hasAny(text, [
                "washing machine",
                "washer"
            ])
        ) {

            if (
                hasAny(text, [
                    "won't drain",
                    "wont drain",
                    "not draining"
                ])
            ) {

                return {

                    title: "Washing machine drainage problem",

                    description:
                        "A blocked filter, kinked drain hose or drainage pump problem may be preventing the machine from removing water.",

                    confidence: "High",

                    difficulty: "Medium",

                    time: "30–90 minutes",

                    cost: "$10–$150",

                    steps: [
                        "Turn the machine off.",
                        "Check the drain hose for kinks.",
                        "Inspect the accessible filter if your model has one.",
                        "Remove accessible debris according to the manufacturer's instructions.",
                        "Contact an appliance technician if the pump appears faulty."
                    ],

                    safety:
                        "Disconnect power before inspecting accessible components."

                };

            }


            return {

                title: "Washing machine operating problem",

                description:
                    "The machine may have a drainage, water supply, door-lock, balance or control problem.",

                confidence: "Medium",

                difficulty: "Medium",

                time: "30–90 minutes",

                cost: "$10–$200",

                steps: [
                    "Check that the machine has power.",
                    "Check the water supply.",
                    "Make sure the door is fully closed.",
                    "Check for obvious hose problems.",
                    "Look at the machine's error code if one is displayed."
                ],

                safety:
                    "Disconnect power before inspecting anything beyond normal user controls."

            };

        }


        if (
            hasAny(text, [
                "fridge",
                "refrigerator"
            ])
        ) {

            return {

                title: "Refrigerator cooling or airflow problem",

                description:
                    "The cause may be a temperature setting, blocked airflow, dirty ventilation area, damaged door seal or cooling-system fault.",

                confidence: "Medium",

                difficulty: "Medium",

                time: "30–120 minutes",

                cost: "$20–$300+",

                steps: [
                    "Check the temperature setting.",
                    "Make sure the refrigerator door closes fully.",
                    "Check that internal air vents are not blocked.",
                    "Clean accessible exterior ventilation areas.",
                    "Contact an appliance technician if cooling does not improve."
                ],

                safety:
                    "Do not attempt to repair the sealed refrigeration system yourself."

            };

        }


        return categoryFallback("appliance");

    }



    /* =====================================================
       HOME / BUILDING
    ===================================================== */

    if (category === "home") {


        if (
            hasAny(text, [
                "crack",
                "cracked",
                "wall crack",
                "ceiling crack"
            ])
        ) {

            return {

                title: "Wall or ceiling crack requiring assessment",

                description:
                    "The crack may be cosmetic, caused by normal movement, moisture, or potentially structural movement. Its size and progression matter.",

                confidence: "Medium",

                difficulty: "Easy–Professional",

                time: "1–4 hours",

                cost: "$10–$500+",

                steps: [
                    "Measure or photograph the crack so you can monitor changes.",
                    "Check for nearby moisture or water damage.",
                    "Look for signs that the crack is growing.",
                    "Small stable surface cracks may be repairable with filler.",
                    "Have large, spreading or structural-looking cracks professionally inspected."
                ],

                safety:
                    "Do not ignore large or rapidly growing structural cracks."

            };

        }


        if (
            hasAny(text, [
                "window",
                "draft",
                "cold air"
            ])
        ) {

            return {

                title: "Possible window seal or frame problem",

                description:
                    "Cold air or drafts around a window can be caused by worn seals, gaps around the frame, or poor alignment.",

                confidence: "Medium",

                difficulty: "Easy–Medium",

                time: "30–90 minutes",

                cost: "$10–$100",

                steps: [
                    "Check where the draft is entering.",
                    "Inspect the visible window seal.",
                    "Check whether the window closes evenly.",
                    "Replace a worn weather seal if appropriate.",
                    "Seal gaps around the frame where suitable."
                ],

                safety:
                    "If the frame is severely damaged, have it professionally inspected."

            };

        }


        return categoryFallback("home");

    }


    return generalDiagnosis(text);

}



/* =========================================================
   CATEGORY FALLBACKS
   NO UNKNOWN RESULTS
========================================================= */

function categoryFallback(category) {


    const fallbacks = {


        doors: {

            title: "General door hardware or alignment problem",

            description:
                "The symptoms suggest the door, frame, hinges, latch or hardware should be inspected. The most common causes are loose hardware, alignment changes, dirt or normal wear.",

            confidence: "Medium",

            difficulty: "Easy–Medium",

            time: "20–60 minutes",

            cost: "$5–$75",

            steps: [
                "Operate the door slowly and identify exactly where the problem occurs.",
                "Inspect the hinges and visible hardware.",
                "Check for loose screws or obvious damage.",
                "Clean and lubricate suitable moving components.",
                "If the door remains difficult to operate, consider professional adjustment."
            ],

            safety:
                "Do not force a damaged or unstable door."

        },


        plumbing: {

            title: "General plumbing fixture problem",

            description:
                "The problem appears related to a plumbing fixture or water system. Loose fittings, worn seals, blockages and valves are common causes.",

            confidence: "Medium",

            difficulty: "Medium",

            time: "30–90 minutes",

            cost: "$15–$150",

            steps: [
                "Identify the exact fixture involved.",
                "Look for visible leaks or loose connections.",
                "Check whether water flow is normal.",
                "Turn off the local water supply before disassembling a fixture.",
                "Contact a plumber if the source cannot be identified safely."
            ],

            safety:
                "Keep water away from electrical equipment."

        },


        electrical: {

            title: "Electrical system problem requiring caution",

            description:
                "The symptoms suggest an electrical issue, but more information or professional inspection may be needed to identify the exact fault.",

            confidence: "Medium",

            difficulty: "Professional",

            time: "15–60 minutes",

            cost: "$75–$500+",

            steps: [
                "Stop using the affected equipment.",
                "Check only normal user controls such as switches or breakers.",
                "Do not remove outlet or switch covers.",
                "Look for signs of heat, burning or physical damage from a safe distance.",
                "Contact a qualified electrician if the problem continues."
            ],

            safety:
                "Do not work on exposed electrical wiring."

        },


        appliance: {

            title: "General appliance fault",

            description:
                "The appliance may have a power, control, mechanical, drainage or component problem. The exact symptom determines the repair.",

            confidence: "Medium",

            difficulty: "Medium",

            time: "30–120 minutes",

            cost: "$10–$300+",

            steps: [
                "Check that the appliance has power.",
                "Check the normal user controls and settings.",
                "Look for an error code.",
                "Inspect accessible hoses, filters or vents where appropriate.",
                "Contact an appliance technician if the fault continues."
            ],

            safety:
                "Disconnect power before inspecting accessible components."

        },


        home: {

            title: "General home maintenance problem",

            description:
                "The problem appears to be a general household maintenance issue. The likely cause depends on the location, symptoms and visible damage.",

            confidence: "Medium",

            difficulty: "Easy–Medium",

            time: "30–120 minutes",

            cost: "$10–$150",

            steps: [
                "Identify exactly where the problem occurs.",
                "Check for visible damage, moisture, movement or loose components.",
                "Compare the affected area with a nearby unaffected area.",
                "Make only simple repairs if the cause is clear.",
                "Contact a qualified professional if the problem involves structural, gas or electrical systems."
            ],

            safety:
                "Stop if the problem appears structural, electrical, gas-related or otherwise dangerous."

        }

    };


    return fallbacks[category];

}



/* =========================================================
   GENERAL DIAGNOSIS
========================================================= */

function generalDiagnosis(text) {


    let title =
        "General household maintenance issue";

    let description =
        "The symptoms suggest a common household maintenance problem. The safest approach is to identify the exact location and visible symptoms before attempting a repair.";

    let confidence =
        "Medium";

    let difficulty =
        "Easy–Medium";

    let time =
        "30–90 minutes";

    let cost =
        "$10–$100";

    let steps = [
        "Identify exactly where the problem is occurring.",
        "Look for visible damage, loose components, leaks, unusual sounds or smells.",
        "Check whether the problem changes when the item is operated.",
        "Try only simple maintenance if the cause is clearly visible.",
        "If the problem involves electrical, gas, structural or major water damage, contact a qualified professional."
    ];

    let safety =
        "Stop and seek professional help if you discover a serious electrical, gas, structural or flooding hazard.";


    if (
        hasAny(text, [
            "noise",
            "sound",
            "rattling",
            "vibration",
            "buzzing"
        ])
    ) {

        title =
            "Possible loose or worn component";

        description =
            "An unusual sound or vibration commonly comes from a loose fastener, dry moving part, worn component or something contacting another surface.";

        confidence =
            "Medium";

        difficulty =
            "Easy–Medium";

        time =
            "15–60 minutes";

        cost =
            "$5–$100";

        steps = [
            "Identify exactly when the sound occurs.",
            "Locate the area where the sound is strongest.",
            "Check for loose screws, panels or hardware.",
            "Look for parts rubbing or vibrating against each other.",
            "If the component is damaged or difficult to access, seek professional help."
        ];

    }


    if (
        hasAny(text, [
            "smell",
            "odor",
            "odour"
        ])
    ) {

        title =
            "Unusual household odor requiring investigation";

        description =
            "The source of an unusual smell needs to be identified before attempting a repair. The cause could range from moisture or debris to an electrical or gas-related hazard.";

        confidence =
            "Medium";

        difficulty =
            "Investigate first";

        time =
            "15–60 minutes";

        cost =
            "$0–$150+";

        steps = [
            "Identify where the smell is strongest.",
            "Check for visible moisture, mold, overheating or damaged materials.",
            "Do not ignore a burning or gas-like smell.",
            "Ventilate the area when appropriate.",
            "Contact an appropriate professional if the source is unclear or potentially dangerous."
        ];

        safety =
            "A gas-like or burning smell can indicate a serious hazard. Leave the area and seek appropriate emergency assistance."

    }


    if (
        hasAny(text, [
            "loose",
            "wobbly",
            "moving",
            "shaking"
        ])
    ) {

        title =
            "Loose or unstable component";

        description =
            "The symptoms suggest that a fixture, fitting or component may have become loose or worn.";

        confidence =
            "Medium";

        difficulty =
            "Easy–Medium";

        time =
            "15–60 minutes";

        cost =
            "$5–$75";

        steps = [
            "Identify exactly which component is moving.",
            "Check visible screws, bolts or mounting points.",
            "Tighten suitable hardware carefully.",
            "Check whether the component remains stable.",
            "Replace damaged hardware or seek professional help if necessary."
        ];

    }


    return {

        title,
        description,
        confidence,
        difficulty,
        time,
        cost,
        steps,
        safety

    };

}



/* =========================================================
   KEYWORD HELPER
========================================================= */

function hasAny(text, keywords) {

    return keywords.some(function (keyword) {

        return text.includes(keyword);

    });

}



/* =========================================================
   DISPLAY RESULT
========================================================= */

function displayDiagnosis(result) {


    const resultPanel =
        document.getElementById("diagnosisResult");


    document.getElementById("resultTitle")
        .textContent = result.title;


    document.getElementById("resultDescription")
        .textContent = result.description;


    document.getElementById("confidence")
        .textContent = result.confidence;


    document.getElementById("difficulty")
        .textContent = result.difficulty;


    document.getElementById("repairTime")
        .textContent = result.time;


    document.getElementById("cost")
        .textContent = result.cost;


    const steps =
        document.getElementById("fixSteps");


    steps.innerHTML = "";


    result.steps.forEach(function (step) {

        const item =
            document.createElement("li");

        item.textContent = step;

        steps.appendChild(item);

    });


    document.getElementById("safetyWarning")
        .textContent = result.safety;


    document.getElementById("resultStatus")
        .textContent = "RESULT READY";


    resultPanel.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

    /* =========================================================
   HERO IMAGE SLIDESHOW
========================================================= */

const heroSlide = document.getElementById("heroSlide");
const heroDots = document.querySelectorAll(".hero-dots span");

if (heroSlide) {

    const heroImages = [

        "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=1200&q=80",

        "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=1200&q=80",

        "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?auto=format&fit=crop&w=1200&q=80",

        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80"

    ];

    let currentSlide = 0;

    function changeHeroImage() {

        heroSlide.classList.add("fade-out");

        setTimeout(() => {

            currentSlide++;

            if (currentSlide >= heroImages.length) {
                currentSlide = 0;
            }

            heroSlide.src = heroImages[currentSlide];

            heroDots.forEach((dot, index) => {
                dot.classList.toggle(
                    "active",
                    index === currentSlide
                );
            });

            heroSlide.classList.remove("fade-out");

        }, 800);
    }

    /* Change picture every 4 seconds */
    setInterval(changeHeroImage, 4000);

}


}

    window.addEventListener("load", () => {
        setTimeout(() => {
            document
                .getElementById("emergencyTab")
                .classList.add("show");
        }, 500);
    });

    function toggleEmergency() {
        document
            .getElementById("emergencyTab")
            .classList.toggle("show");
    }
document.addEventListener("DOMContentLoaded", () => {

    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.12
        }
    );

    elements.forEach((element) => {
        observer.observe(element);
    });

});
// Scroll reveal animation

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }

    });

}, {
    threshold: 0.1
});

revealElements.forEach((element) => {
    revealObserver.observe(element);
});
console.log("FixItFirst animation loaded");
