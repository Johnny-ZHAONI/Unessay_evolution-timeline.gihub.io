// script.js

const events = {
  "early-primates": {
    title: "Early Primates",
    tagline: "Small, tree-dwelling mammals with grasping hands and large eyes.",
    time: "55–50 million years ago (Eocene)",
    keyPoints: [
      "True primates appear with traits such as forward-facing eyes, grasping hands, and nails instead of claws.",
      "Many early primates lived in forest canopies and were likely nocturnal or crepuscular.",
      "These traits are adaptations for life in three-dimensional arboreal environments."
    ],
    significance:
      "Early primates show how visual and locomotor adaptations laid the foundation for later primate diversity, including monkeys, apes, and eventually humans."
  },
  "early-apes": {
    title: "Early Apes",
    tagline: "Tailless primates with more flexible shoulders and larger bodies.",
    time: "23–16 million years ago (Miocene)",
    keyPoints: [
      "Genera like Proconsul represent early apes that lacked tails and had more mobile shoulder joints.",
      "They combined monkey-like bodies with ape-like upper limbs.",
      "Diet and ecology varied, but many early apes were still forest-dwelling."
    ],
    significance:
      "Early apes highlight the anatomical shifts that separate apes from monkeys, especially in the shoulder and spine, which later support suspensory and knuckle-walking locomotion."
  },
  "sahelanthropus": {
    title: "Sahelanthropus tchadensis",
    tagline: "A possible very early hominin from Central Africa.",
    time: "~7 million years ago",
    keyPoints: [
      "Known mainly from a cranium found in Chad.",
      "The position of the foramen magnum suggests a more vertical head posture, possibly linked to bipedalism.",
      "Shows a mix of ape-like and human-like features in the face and teeth."
    ],
    significance:
      "Sahelanthropus sits close to the split between the human and chimpanzee lineages, raising questions about what the earliest hominins looked like and how early bipedal traits emerged."
  },
  "ardipithecus": {
    title: "Ardipithecus ramidus",
    tagline: '"Ardi" shows a mosaic of arboreal and bipedal traits.',
    time: "4.4 million years ago",
    keyPoints: [
      "Fossils from Ethiopia include a partial skeleton nicknamed Ardi.",
      "Pelvis and some limb features suggest facultative bipedalism on the ground.",
      "Feet retain a grasping big toe, indicating continued use of trees.",
      "Canine teeth are reduced compared to many apes, suggesting changes in social behavior."
    ],
    significance:
      "Ardipithecus demonstrates that early hominins experimented with new forms of locomotion—walking upright on the ground while still climbing trees—rather than moving in a simple linear direction toward modern human anatomy."
  },
  "afarensis": {
    title: "Australopithecus afarensis",
    tagline: '"Lucy" and other fossils show committed bipedalism.',
    time: "3.9–2.9 million years ago",
    keyPoints: [
      "Best known from the famous Lucy skeleton and multiple individuals at Hadar and Laetoli.",
      "Pelvis, femur, and vertebral column clearly support habitual bipedal walking.",
      "Laetoli footprints preserve evidence of upright walking with a human-like gait.",
      "Brain size is still small, similar to modern chimpanzees.",
      "Sexual dimorphism in body size suggests complex social structures."
    ],
    significance:
      "A. afarensis shows that efficient bipedalism evolves well before major increases in brain size, supporting the concept of mosaic evolution in the hominin lineage."
  },
  "homo-habilis": {
    title: "Homo habilis",
    tagline: '"Handy man" associated with early stone tools.',
    time: "2.5–1.8 million years ago",
    keyPoints: [
      "Fossils show slightly larger brain size than Australopithecus, with more rounded cranial vaults.",
      "Often associated with Oldowan stone tools—simple core and flake technologies.",
      "Postcranial skeleton still shows a mix of primitive and derived features.",
      "Diet likely included more meat and marrow, accessed with tools."
    ],
    significance:
      "Homo habilis links tool use, dietary change, and brain expansion, underlining the importance of culture and technology in human evolution."
  },
  "homo-erectus": {
    title: "Homo erectus",
    tagline: "A long-distance walker and early global traveler.",
    time: "1.8 million–300,000 years ago",
    keyPoints: [
      "First hominin species with a body plan close to modern humans, including long legs and shorter arms.",
      "Associated with Acheulean stone tools such as handaxes.",
      "Shows substantial increase in brain size compared to earlier hominins.",
      "Evidence suggests control of fire and long-distance movement out of Africa into Eurasia."
    ],
    significance:
      "Homo erectus represents a major shift toward modern human body proportions and behavior, illustrating how mobility, technology, and ecology are intertwined."
  },
  "archaic-humans": {
    title: "Archaic Humans",
    tagline: "Neanderthals, Denisovans, and other close relatives.",
    time: "300,000–30,000 years ago",
    keyPoints: [
      "Neanderthals in Europe and western Asia show large brains, robust skeletons, and adaptations to cold climates.",
      "Archaeological evidence documents complex tools, fire use, and possible symbolic behaviors.",
      "DNA from Denisovans reveals another distinct population known mostly from genetic data.",
      "Genetic studies show interbreeding between archaic humans and early Homo sapiens."
    ],
    significance:
      "Archaic humans demonstrate that our lineage was never a single straight line of almost humans but a branching network of populations that sometimes mixed genetically."
  },
  "homo-sapiens": {
    title: "Homo sapiens",
    tagline: "Symbolic thinkers with global reach.",
    time: "200,000 years ago–Present",
    keyPoints: [
      "Anatomically modern humans first appear in Africa, with high, rounded skulls and reduced brow ridges.",
      "Archaeological evidence shows symbolic behavior: art, personal ornaments, and complex tools.",
      "Homo sapiens spreads out of Africa, eventually occupying every major landmass.",
      "Culture and technology—rather than purely anatomical changes—become the primary drivers of adaptation."
    ],
    significance:
      "Homo sapiens highlights how biological evolution and cultural evolution interact, and how a primate lineage with relatively modest anatomical changes can dramatically transform the planet."
  }
};

// Render detail content into the right-hand panel
function renderDetail(id) {
  const panel = document.getElementById("detail-panel");
  const ev = events[id];
  if (!ev) return;

  panel.innerHTML = `
    <h3>${ev.title}</h3>
    <p class="detail-tagline">${ev.tagline}</p>
    <p class="detail-meta"><strong>Time:</strong> ${ev.time}</p>
    <p><strong>Key traits and evidence:</strong></p>
    <ul>
      ${ev.keyPoints.map((p) => `<li>${p}</li>`).join("")}
    </ul>
    <p><strong>Why this matters for human evolution:</strong></p>
    <p>${ev.significance}</p>
  `;
}

// Handle clicking on timeline cards
function setupTimeline() {
  const cards = document.querySelectorAll(".event-card");
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      cards.forEach((c) => c.classList.remove("active"));
      card.classList.add("active");
      const id = card.getAttribute("data-id");
      renderDetail(id);
    });
  });

  // Initial state: render first event
  const firstId = cards[0].getAttribute("data-id");
  renderDetail(firstId);
}

document.addEventListener("DOMContentLoaded", setupTimeline);

