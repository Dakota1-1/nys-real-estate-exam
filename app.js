/* ============================================================
   NYS Real Estate Exam — Premium Study Portal
   app.js
   ============================================================ */

'use strict';

/* ── Unit Overviews ── */
const UNIT_OVERVIEWS = {
  1: {
    summary: `New York State real estate licenses are governed by Article 12-A of the Real Property Law and administered by the Department of State (DOS). All real estate activity — including buying, selling, leasing, and negotiating — requires a license unless a statutory exemption applies. The DOS has broad regulatory authority to issue, suspend, revoke, or deny licenses and may impose fines up to $1,000 per violation. Violations of Article 12-A are classified as misdemeanors at minimum.\n\nSalesperson licenses must be renewed every two years and require completion of 75 hours of qualifying education before the initial license, plus 22.5 hours of continuing education every two years at renewal. Broker licenses require the applicant to be at least 20 years old, have at least two years of full-time salesperson experience (or three years of related experience), complete a 120-hour qualifying course, and pass a state exam. Brokers must maintain their principal place of business in New York.\n\nBrokers may supervise associate brokers and salespersons. Only the supervising broker may collect commissions — commissions are then split with associates per agreement. Brokers must keep all transaction documents on file for at least three years. Mixing client funds with personal funds is called commingling and is prohibited. Blind ads (ads without broker identification) are also prohibited.`,
    concepts: [
      "Licenses renew every 2 years; 22.5 hours CE required at renewal",
      "Salesperson qualifying course: 75 hours; Broker: 120 hours",
      "Broker must be at least 20 years old with 2 years salesperson experience",
      "Only the supervising broker may collect commissions",
      "All transaction documents must be kept on file for 3 years",
      "Commingling (mixing client/personal funds) is prohibited",
      "Blind ads (no broker ID) are prohibited",
      "DOS can suspend, revoke, or deny licenses; fines up to $1,000",
      "Violations of Article 12-A are misdemeanors",
      "Branch office requires an additional broker's license ($300 each)",
      "Escrow accounts hold client funds in trust",
      "Apartment-sharing agent license fee: $400"
    ],
    tip: "Remember: The DOS regulates licenses — not the real estate board. Brokers must be 20+ (not 18), and license renewal is every 2 years (not annually)."
  },
  2: {
    summary: `Agency is the legal relationship in which one party (the agent) acts on behalf of another (the principal) in dealing with third parties. In real estate, the broker is the agent and the client (seller or buyer) is the principal. The salesperson is a subagent of the broker. Agency can be created expressly (by contract), impliedly (by conduct), or ostensibly (by apparent authority).\n\nA real estate agent owes the principal fiduciary duties, often remembered by the acronym OLDCAR: Obedience, Loyalty, Disclosure, Confidentiality, Accountability, and Reasonable Care. The duty of loyalty means the agent must put the client's interests above all others, including their own. The duty of disclosure requires revealing all material facts. The duty of confidentiality survives termination of the agency relationship.\n\nAgency can be terminated by completion of the purpose, expiration of time, mutual agreement, revocation by the principal, renunciation by the agent, death or incapacity of either party, or destruction of the subject matter. An agent who acts beyond the scope of their authority may be liable for unauthorized acts.`,
    concepts: [
      "Fiduciary duties: OLDCAR — Obedience, Loyalty, Disclosure, Confidentiality, Accountability, Reasonable Care",
      "Broker is the agent; client (seller/buyer) is the principal",
      "Salesperson is a subagent of the supervising broker",
      "Agency created expressly (written contract), impliedly (conduct), or ostensibly (apparent authority)",
      "Loyalty: agent must place client's interest above all others including their own",
      "Confidentiality survives termination of agency",
      "Disclosure: must reveal all material facts to principal",
      "Agency terminated by: completion, expiration, mutual agreement, death, destruction of subject matter",
      "Unauthorized acts by agent may create personal liability",
      "Ratification: principal approves previously unauthorized act"
    ],
    tip: "The fiduciary duties (OLDCAR) apply to the principal only — agents owe the third party (customer) honesty and fair dealing but NOT full fiduciary duties."
  },
  3: {
    summary: `New York requires real estate licensees to provide an Agency Disclosure Form to every buyer and seller at first substantive contact — before any confidential information is exchanged. This form explains the different types of agency relationships available in NY: Seller's Agent, Buyer's Agent, Broker's Agent, Dual Agent, and Dual Agent with Designated Sales Agents.\n\nA seller's agent (listing agent) represents only the seller. A buyer's agent represents only the buyer. A dual agent represents both parties in the same transaction simultaneously, which requires informed written consent from both parties. In designated agency, the broker assigns one salesperson to represent the seller and another to represent the buyer, reducing conflicts of interest while the broker remains a dual agent.\n\nSub-agency (where a cooperating broker acts as an agent of the listing broker, not the buyer) has become rare in NY because it creates conflicts. Most buyers are now represented by buyer's agents. The agency disclosure must be signed and a copy retained by the licensee. Failure to provide the form is a violation of DOS rules.`,
    concepts: [
      "Agency Disclosure Form required at first substantive contact",
      "Types: Seller's Agent, Buyer's Agent, Broker's Agent, Dual Agent, Designated Agent",
      "Dual agency: representing both parties — requires written informed consent from both",
      "Designated agency: one agent for seller, one for buyer under same broker",
      "Sub-agency: cooperating broker acts as agent of listing broker (now rare in NY)",
      "Buyer's agent owes full fiduciary duties to buyer",
      "Seller's agent must not disclose seller's motivation or bottom line to buyer",
      "Buyer's agent must not disclose buyer's top price to seller",
      "Disclosure form must be signed; copy retained by licensee",
      "Failure to disclose agency is a DOS violation"
    ],
    tip: "In NY, the agency disclosure form must be given at 'first substantive contact' — not at signing. The form explains options; it does not create the agency relationship."
  },
  4: {
    summary: `Real property ownership is classified by the type of estate held. A freehold estate represents ownership for an indefinite duration. The most complete form of ownership is fee simple absolute — the owner has unlimited rights to use, enjoy, and dispose of the property, with no restrictions on inheritance. A fee simple defeasible (or qualified fee) can be lost if a condition is violated. A life estate grants ownership for the duration of someone's life; upon death the property either reverts to the grantor (reversion) or passes to a named third party (remainder).\n\nLeasehold estates are non-freehold estates representing the tenant's right to possess property for a limited period. Types include: estate for years (fixed term), estate from period to period (month-to-month), estate at will (either party can terminate), and estate at sufferance (holdover tenant).\n\nConcurrent ownership (co-ownership) includes: tenancy in common (undivided interests, no right of survivorship, freely transferable), joint tenancy (equal undivided interests, right of survivorship, requires four unities: time, title, interest, possession), and tenancy by the entirety (available only to married couples in NY, right of survivorship, cannot be unilaterally severed).`,
    concepts: [
      "Fee simple absolute: most complete ownership, unlimited inheritance rights",
      "Fee simple defeasible: ownership that can be lost if a condition is violated",
      "Life estate: ownership for duration of a life; remainderman receives property upon death",
      "Reversion: property returns to grantor when life estate ends",
      "Leasehold estates: estate for years, period-to-period, at will, at sufferance",
      "Tenancy in common: no survivorship; interests are freely transferable",
      "Joint tenancy: right of survivorship; requires four unities (TTIP)",
      "Tenancy by the entirety: married couples only; right of survivorship",
      "Emblements: crops planted by a tenant — tenant retains rights even if lease ends at harvest",
      "Dower/curtesy rights have been abolished in NY and replaced by elective share"
    ],
    tip: "Joint tenancy has 'right of survivorship' — when one joint tenant dies, their share passes automatically to the surviving joint tenants, NOT through a will."
  },
  5: {
    summary: `A lien is a legal claim against property as security for a debt or obligation. Liens are encumbrances that attach to title and must typically be resolved before a clear title can be conveyed. Liens are either general (attaching to all property owned by the debtor) or specific (attaching only to a particular property). They are also classified as voluntary (e.g., mortgage — willingly granted) or involuntary (e.g., tax lien — imposed by law).\n\nCommon lien types include: mortgage liens (voluntary, specific), property tax liens (involuntary, specific — always have priority regardless of recording date), mechanic's liens (filed by contractors for unpaid work), judgment liens (general, attaching to all real property in the county), and lis pendens (notice of pending litigation).\n\nEasements are non-possessory rights to use another's land for a specific purpose. An easement appurtenant benefits an adjacent parcel (dominant estate) and burdens another (servient estate); it runs with the land. An easement in gross benefits a person or entity (utility easements). Easements can be created by express grant, reservation, implication, necessity, or prescription (open, notorious, continuous, hostile use for 10 years in NY). A license is a personal, revocable permission to use land — not an easement.`,
    concepts: [
      "Lien: legal claim against property as security for a debt",
      "General lien: attaches to all property; Specific lien: attaches to one property",
      "Voluntary lien: mortgage; Involuntary lien: tax lien, mechanic's lien",
      "Property tax liens always have priority (ahead of all other liens)",
      "Mechanic's lien: contractor files for unpaid work; specific to property",
      "Judgment lien: general lien, attaches to all real property in the county",
      "Lis pendens: notice that litigation is pending affecting the property",
      "Easement appurtenant: runs with land; benefits dominant estate, burdens servient estate",
      "Easement in gross: personal right (utilities, billboards) — does not run with land",
      "Prescriptive easement: created by ONCHA use for 10 years in NY (Open, Notorious, Continuous, Hostile, Actual)",
      "License: revocable personal permission — not an easement"
    ],
    tip: "Tax liens always have priority regardless of when they were recorded. A mechanic's lien relates back to the date work BEGAN, not when filed."
  },
  6: {
    summary: `A deed is the legal instrument used to transfer title (ownership) to real property. For a deed to be valid in New York, it must: identify the grantor and grantee, contain words of conveyance (granting clause), include a legal description of the property, be signed by the grantor, be acknowledged (notarized), and be delivered and accepted. The grantor must have legal capacity (be of legal age and sound mind). A deed does not need to be recorded to be valid between the parties, but recording provides constructive notice to the public.\n\nTypes of deeds: A General Warranty Deed (Full Covenant and Warranty Deed in NY) provides the greatest protection — the grantor warrants title against all claims, past and present. A Special Warranty Deed warrants only against claims arising during the grantor's ownership. A Bargain and Sale Deed (with or without covenants against grantor's acts) implies the grantor owns the property but makes limited warranties. A Quitclaim Deed conveys only whatever interest the grantor has — no warranties at all. Executors, trustees, and referees typically use Executor's/Referee's deeds.\n\nThe GREET acronym helps remember deed essentials: Grantor and Grantee identified, Reality (legal description), Execution (signature), Expressed words of conveyance, Transfer (delivery and acceptance).`,
    concepts: [
      "Valid deed requirements: grantor/grantee, words of conveyance, legal description, signature, acknowledgment, delivery & acceptance",
      "General Warranty Deed: broadest protection; warrants against all claims forever",
      "Special Warranty Deed: warrants only against grantor's own acts",
      "Bargain and Sale Deed: implies ownership; limited covenants",
      "Quitclaim Deed: conveys only grantor's interest; no warranties",
      "Recording provides constructive notice; not required for validity between parties",
      "Acknowledgment (notarization) required for recording",
      "Grantor must have legal capacity (age + mental competence)",
      "GREET: Grantor/Grantee, Reality (description), Execution, Expressed words, Transfer (delivery)",
      "Referee's deed used in foreclosure sales"
    ],
    tip: "A quitclaim deed conveys 'whatever I have' — even if the grantor has nothing. It gives the buyer zero warranty. Used in divorce settlements, clearing title defects, or between family members."
  },
  7: {
    summary: `A lease is a contract granting a tenant (lessee) the right to possess and use real property owned by a landlord (lessor) for a specified period in exchange for rent. A lease is both a contract and a conveyance of a leasehold interest. In NY, leases for more than one year must be in writing under the Statute of Frauds.\n\nLease types by rent structure: A gross lease (flat lease) has the tenant pay fixed rent and the landlord pay all expenses. A net lease requires the tenant to pay rent plus some property expenses (taxes, insurance, maintenance). A triple-net (NNN) lease has the tenant pay all expenses. A percentage lease (common in retail) requires rent plus a percentage of gross sales.\n\nIn NY, landlord-tenant law provides significant tenant protections. The warranty of habitability requires landlords to maintain premises in livable condition. Rent stabilization and rent control apply to many NYC apartments. A landlord's constructive eviction occurs when conditions make the premises uninhabitable. A tenant who remains beyond the lease term without permission is a holdover tenant (estate at sufferance). NY requires 30–90 days notice to terminate month-to-month leases depending on tenancy length.`,
    concepts: [
      "Lease: contract + conveyance of leasehold interest",
      "Leases over 1 year must be in writing (Statute of Frauds)",
      "Gross lease: tenant pays fixed rent; landlord pays all expenses",
      "Net lease: tenant pays rent + some expenses",
      "Triple-net (NNN) lease: tenant pays rent + all operating expenses",
      "Percentage lease: rent + % of gross sales (retail)",
      "Warranty of habitability: landlord must maintain livable conditions",
      "Constructive eviction: uninhabitable conditions forcing tenant to leave",
      "Holdover tenant (estate at sufferance): occupies beyond lease term without permission",
      "Assignment: tenant transfers entire remaining lease interest",
      "Sublease: tenant transfers partial lease interest; original tenant remains liable"
    ],
    tip: "In a gross lease, the landlord nets less when expenses rise — it's 'gross' because the tenant pays one gross amount. In NNN leases, the landlord's income is more predictable."
  },
  8: {
    summary: `A valid real estate contract requires: an offer, acceptance (creating a meeting of the minds), consideration, competent parties, lawful purpose, and must be in writing and signed (Statute of Frauds applies to real estate contracts). A contract is executory when obligations remain and executed when fully performed. Contracts can be void (no legal effect), voidable (one party can rescind), or unenforceable.\n\nKey contract types in real estate: A listing agreement creates the agency relationship between seller and broker. Types include exclusive right to sell (broker earns commission regardless of who sells), exclusive agency (seller can sell themselves without paying commission), open listing (non-exclusive; first broker to sell earns commission), and net listing (broker keeps everything above a set price — illegal in some states, discouraged in NY). A purchase contract (contract of sale) is the agreement between buyer and seller to transfer title. It typically includes contingencies for financing, inspection, and title.\n\nContingencies are conditions that must be met for the contract to be binding. If a contingency fails, the party protected may void the contract and recover their deposit. Earnest money (good faith deposit) is held in escrow. Time is of the essence clauses make deadlines strictly enforceable. Breach remedies include: liquidated damages (keeping the deposit), specific performance (court orders the sale), or rescission.`,
    concepts: [
      "Valid contract: offer, acceptance, consideration, competent parties, lawful purpose, written & signed",
      "Statute of Frauds: real estate contracts must be in writing",
      "Exclusive Right to Sell: broker earns commission regardless of who finds buyer",
      "Exclusive Agency: seller can sell themselves without owing commission",
      "Open Listing: non-exclusive; commission only to broker who finds buyer",
      "Net listing: broker keeps profit above seller's net — discouraged/risky in NY",
      "Contingency: condition that must be satisfied; failure allows contract rescission",
      "Earnest money held in escrow; forfeited if buyer defaults without cause",
      "Time is of the essence: deadlines are strictly enforceable",
      "Breach remedies: liquidated damages, specific performance, rescission",
      "Executory contract: obligations still to be performed; Executed: fully performed"
    ],
    tip: "The exclusive right to sell listing gives the broker the most protection — they earn a commission even if the OWNER finds the buyer. It's the most common listing type."
  },
  9: {
    summary: `Title refers to legal ownership of real property. Before closing, a title search examines public records to verify the seller's ownership and identify any encumbrances (liens, easements, restrictions). Title insurance protects against undiscovered title defects. An owner's title policy protects the buyer; a lender's (mortgagee's) policy protects the lender. Title insurance is a one-time premium paid at closing.\n\nAt closing, the buyer and seller reconcile all financial obligations in the transaction. Closing costs include: origination fees, discount points, title insurance, attorney fees, recording fees, transfer taxes, and prepaid items (insurance, taxes, interest). In NY, the seller typically pays the transfer tax (0.4% of purchase price; NYC has additional transfer taxes). RESPA (Real Estate Settlement Procedures Act) governs federally related mortgage loans and prohibits kickbacks.\n\nProration is the fair division of recurring expenses between buyer and seller as of the closing date. Items typically prorated: property taxes, HOA fees, prepaid rents, fuel oil. The HUD-1 Settlement Statement (replaced by the Closing Disclosure for post-2015 loans) itemizes all closing costs for both parties. A deed is delivered at closing to complete the transfer of title.`,
    concepts: [
      "Title search: examines public records for ownership history and encumbrances",
      "Title insurance: protects against undiscovered defects; owner's policy + lender's policy",
      "Owner's policy protects buyer; Lender's policy protects the mortgagee",
      "One-time premium paid at closing; does not renew annually",
      "NY transfer tax: 0.4% of purchase price (paid by seller); NYC has additional taxes",
      "RESPA: prohibits kickbacks on federally related loans; requires good faith estimate",
      "Proration: dividing recurring costs (taxes, HOA, fuel) as of closing date",
      "Closing Disclosure (formerly HUD-1): itemizes all closing costs for buyer and seller",
      "Abstract of title: summary of all recorded documents affecting title",
      "Attorney's certificate of title: attorney's opinion on title validity",
      "Recording fee paid by buyer to put deed on public record"
    ],
    tip: "Title insurance is retroactive — it covers past defects. Unlike other insurance, it's paid once at closing and protects for as long as you own the property."
  },
  10: {
    summary: `A mortgage is a legal document in which a borrower (mortgagor) pledges real property as collateral to a lender (mortgagee) in exchange for a loan. In NY (a lien theory state), the borrower retains title and the lender holds a lien. A promissory note is the personal promise to repay the debt; the mortgage secures that promise against the property. Both documents are required in a mortgage transaction.\n\nMortgage types include: conventional (not government-backed), FHA (Federal Housing Administration — low down payment, mortgage insurance required), VA (Veterans Affairs — for eligible veterans, no down payment required), and adjustable-rate mortgages (ARM — interest rate varies with an index). A purchase money mortgage is seller financing. A wraparound mortgage (all-inclusive) is a second mortgage that includes the balance of an existing first mortgage. A blanket mortgage covers multiple properties.\n\nIf a borrower defaults, the lender may foreclose — the legal process to satisfy the debt by selling the property. NY is a judicial foreclosure state, meaning foreclosure must go through the courts. Before foreclosure, the borrower has the equitable right of redemption (right to cure the default). After a foreclosure sale, some states allow statutory redemption. A satisfaction of mortgage (or discharge) is recorded when the loan is paid in full, releasing the lien.`,
    concepts: [
      "Mortgagor = borrower (pledges property); Mortgagee = lender (holds lien)",
      "NY is a lien theory state: borrower keeps title; lender holds a lien",
      "Promissory note: personal obligation to repay; Mortgage: security instrument",
      "Conventional mortgage: not government-backed",
      "FHA loan: low down payment; requires mortgage insurance premium (MIP)",
      "VA loan: for eligible veterans; no down payment required",
      "ARM (adjustable-rate mortgage): rate tied to an index; can rise or fall",
      "Purchase money mortgage: seller finances the sale",
      "NY foreclosure is judicial: must go through court process",
      "Equitable right of redemption: right to cure default before foreclosure sale",
      "Satisfaction of mortgage: recorded document releasing the lien upon payoff",
      "Blanket mortgage: covers multiple properties; includes release clause"
    ],
    tip: "Don't confuse mortgagor and mortgagee: the mortgagOR is the borrowER (think: 'or' = owner). The mortgagEE is the lendEE — the lender."
  },
  11: {
    summary: `Real estate finance encompasses the sources of funds (primary and secondary mortgage markets), loan structures, and qualifying standards. The primary mortgage market involves the direct lending relationship between borrower and lender (banks, credit unions, savings institutions). The secondary mortgage market involves the purchase and sale of existing mortgages, primarily through government-sponsored enterprises: Fannie Mae (FNMA — buys conventional loans), Freddie Mac (FHLMC — buys conventional loans), and Ginnie Mae (GNMA — guarantees FHA and VA loans).\n\nAmortization is the process of paying off a loan through regular payments of principal and interest. In a fully amortizing loan, the final payment brings the balance to zero. The loan-to-value ratio (LTV) compares the loan amount to the property value; lower LTV means less lender risk. Discount points are prepaid interest paid at closing to reduce the interest rate (1 point = 1% of loan amount). The annual percentage rate (APR) includes interest plus all fees, providing a true cost comparison.\n\nQualifying ratios guide underwriters: the housing expense ratio (front-end) should not exceed 28–31% of gross monthly income; the total debt-to-income ratio (back-end) should not exceed 36–43%. Private mortgage insurance (PMI) is required for conventional loans with LTV above 80%.`,
    concepts: [
      "Primary market: direct lending (banks, credit unions)",
      "Secondary market: purchase/sale of existing mortgages (Fannie Mae, Freddie Mac, Ginnie Mae)",
      "Fannie Mae (FNMA) and Freddie Mac (FHLMC): buy conventional loans",
      "Ginnie Mae (GNMA): guarantees FHA and VA loans",
      "Amortization: paying off loan via regular P&I payments",
      "LTV ratio: loan amount ÷ property value; higher LTV = higher risk",
      "Discount points: 1 point = 1% of loan; reduces interest rate",
      "APR: true cost of credit including fees (higher than note rate)",
      "Front-end ratio (housing): should not exceed ~28–31% of gross income",
      "Back-end ratio (total debt): should not exceed ~36–43% of gross income",
      "PMI required on conventional loans with LTV > 80%"
    ],
    tip: "Discount points lower the interest rate — each point costs 1% of the loan amount at closing but saves interest over the life of the loan. More points up front = lower monthly payment."
  },
  12: {
    summary: `A mortgage broker acts as an intermediary between borrowers and lenders — they do not lend their own money. In NY, mortgage brokers are licensed by the Department of Financial Services (DFS), not the DOS. Mortgage bankers (also called direct lenders) lend their own funds and may sell those loans on the secondary market.\n\nREPA (Real Estate Settlement Procedures Act) governs federally related mortgage transactions and requires lenders to provide borrowers with a Loan Estimate (formerly Good Faith Estimate) within 3 business days of loan application. The GFE/Loan Estimate discloses expected closing costs. A Closing Disclosure must be provided 3 business days before closing. RESPA prohibits kickbacks and referral fees between settlement service providers.\n\nPredatory lending includes practices such as: excessive fees, loan flipping (repeated refinancing), balloon payments without ability to repay, and targeting vulnerable borrowers. The Truth in Lending Act (TILA/Regulation Z) requires disclosure of the APR and all loan terms. The Equal Credit Opportunity Act (ECOA) prohibits discrimination in lending on the basis of race, color, religion, national origin, sex, age, or receipt of public assistance. The Community Reinvestment Act (CRA) encourages lending in low-to-moderate income areas.`,
    concepts: [
      "Mortgage broker: intermediary — does not lend own money; licensed by DFS in NY",
      "Mortgage banker: lends own money; may sell loans on secondary market",
      "RESPA: requires Loan Estimate within 3 business days of application",
      "Closing Disclosure: provided 3 business days before closing",
      "RESPA prohibits kickbacks and unearned referral fees",
      "Predatory lending: excessive fees, loan flipping, targeting vulnerable borrowers",
      "TILA (Reg Z): requires APR disclosure and all loan terms",
      "ECOA: prohibits credit discrimination based on protected classes",
      "Community Reinvestment Act (CRA): encourages lending in underserved areas",
      "APR includes interest rate + fees; always higher than note rate",
      "Yield spread premium: fee paid by lender to broker for above-market rate loans"
    ],
    tip: "Mortgage BROKERS don't lend — they shop loans. Mortgage BANKERS lend their own money. The distinction matters for licensing: brokers are DFS-licensed; they don't need a real estate license."
  },
  13: {
    summary: `Land-use regulation controls how private land may be used through government powers. The primary tool is zoning — the division of a municipality into districts (zones) with permitted uses and development standards. Zoning categories include residential (R), commercial (C), industrial (I), and agricultural (A). Mixed-use zones allow combinations. Zoning ordinances specify setbacks, lot coverage, building height, density, and parking requirements.\n\nA nonconforming use is a pre-existing use that does not comply with current zoning but is allowed to continue under grandfather provisions. It generally cannot be expanded. A variance is an exception to zoning requirements granted by the Zoning Board of Appeals (ZBA) when strict application would cause undue hardship. An area variance relates to dimensional requirements; a use variance allows a use not otherwise permitted. A special use permit (special exception) allows uses specifically listed in the ordinance subject to conditions.\n\nSubdivision regulations govern how land is divided into lots for development. A plat is a recorded map of a subdivision. Developers may be required to dedicate land for streets, parks, or utilities. Environmental regulations (SEQRA in NY — State Environmental Quality Review Act) require environmental impact assessment for significant actions. The master plan (comprehensive plan) is the long-range policy guide for land use in a municipality.`,
    concepts: [
      "Zoning: divides municipality into districts with permitted uses",
      "Zoning categories: Residential, Commercial, Industrial, Agricultural",
      "Nonconforming use: pre-existing legal use that doesn't conform; cannot be expanded",
      "Variance: exception to zoning; granted by ZBA for undue hardship",
      "Area variance: dimensional exception; Use variance: permits non-allowed use",
      "Special use permit: conditionally permitted use listed in the ordinance",
      "Subdivision: dividing land into lots; requires plat recording",
      "SEQRA: NY environmental review for significant land-use actions",
      "Master/Comprehensive Plan: long-range policy guide for land use",
      "Buffer zone: transitional area between incompatible uses",
      "Spot zoning: rezoning one parcel inconsistently with surrounding area (often illegal)"
    ],
    tip: "A variance is an exception to the RULE (you need a variance from the ZBA). A nonconforming use is GRANDFATHERED IN — it existed before the rule changed. Don't confuse them."
  },
  14: {
    summary: `Municipal agencies regulate real estate development through multiple layers of government oversight. The Planning Board (or Planning Commission) reviews subdivision plats, site plans, and may recommend zoning changes to the local legislature. It does not grant variances — that is the ZBA's role. The Zoning Board of Appeals (ZBA) hears appeals from zoning officer decisions and grants variances and special use permits.\n\nBuilding departments enforce building codes (NY adopts the New York State Uniform Fire Prevention and Building Code). A building permit must be obtained before construction begins. After construction, a Certificate of Occupancy (CO) is issued when the building complies with all codes and is safe to occupy. A Certificate of Compliance may be issued for pre-existing structures. An Assessor's office determines the assessed value of properties for tax purposes.\n\nEnvironmental regulations at the local level include review under SEQRA (State Environmental Quality Review Act), which requires lead agencies to consider environmental impacts of significant actions. Historic preservation boards protect designated landmarks and historic districts. The Board of Health regulates septic systems, well water, and other public health concerns affecting real estate.`,
    concepts: [
      "Planning Board: reviews subdivisions, site plans; recommends zoning changes — does NOT grant variances",
      "Zoning Board of Appeals (ZBA): hears zoning appeals; grants variances and special use permits",
      "Building permit required before construction begins",
      "Certificate of Occupancy (CO): issued when building is code-compliant and safe to occupy",
      "NY Uniform Fire Prevention and Building Code: statewide building code standard",
      "Assessor: determines assessed value for property tax purposes",
      "SEQRA: environmental impact review for significant local actions",
      "Historic preservation: landmarks and historic districts have additional restrictions",
      "Board of Health: regulates septic systems, wells, public health issues",
      "Lead agency: the agency primarily responsible for SEQRA review"
    ],
    tip: "Planning Board ≠ Zoning Board. Planning Board plans and recommends. ZBA decides on appeals and grants variances. Know which body does which — it's a common exam trick."
  },
  15: {
    summary: `Understanding construction basics helps real estate professionals evaluate properties and communicate with clients. A building's foundation is its most critical structural element. Foundation types include: full basement (below grade), crawl space (partial depth), slab-on-grade (concrete poured directly on ground), and pier/post foundations. The foundation material is typically poured concrete or concrete block.\n\nWood frame construction (the most common residential method in the US) uses either platform framing (each floor built as a platform) or balloon framing (continuous studs from foundation to roof — older method). Masonry construction uses brick, stone, or concrete block. Steel frame is common in commercial buildings. The roof structure (rafters and joists) is covered with sheathing, underlayment, and finish roofing material (shingles, tiles, metal).\n\nMechanical systems include: HVAC (heating, ventilation, air conditioning), plumbing (supply and drain/waste/vent), electrical (service panel, wiring, circuits), and insulation (R-value measures thermal resistance). A home inspection is a visual examination of accessible systems and components. In NY, real estate agents must provide buyers with a property condition disclosure statement or offer a $500 credit at closing in lieu of disclosure.`,
    concepts: [
      "Foundation types: full basement, crawl space, slab-on-grade, pier/post",
      "Platform framing: most common modern method; each floor is a separate platform",
      "Balloon framing: older method; continuous studs from foundation to roof",
      "Masonry: brick, stone, concrete block — used in both residential and commercial",
      "Roof structure: rafters/trusses → sheathing → underlayment → finish material",
      "R-value: measures thermal resistance of insulation (higher = better insulation)",
      "HVAC, plumbing, and electrical are key mechanical systems",
      "Home inspection: visual examination of accessible systems — not a guarantee",
      "NY Property Condition Disclosure: seller provides form or gives $500 credit at closing",
      "Certificate of Occupancy required before building can be legally occupied"
    ],
    tip: "The Property Condition Disclosure Statement in NY gives sellers two options: (1) complete the form honestly, or (2) give the buyer a $500 credit at closing and skip the form. Most sellers opt for the credit."
  },
  16: {
    summary: `Valuation (appraisal) is the process of estimating a property's market value. Market value is the most probable price a property would sell for in a competitive, open market between a willing buyer and willing seller, both having reasonable knowledge and neither under undue pressure. An appraisal is a professional estimate of value; a Comparative Market Analysis (CMA) is performed by real estate agents.\n\nThree approaches to value: (1) Sales Comparison Approach (Market Approach) — compares subject property to recently sold comparable properties (comps), with adjustments for differences. Most useful for residential property. (2) Cost Approach — estimates what it would cost to replace the building (replacement cost new) minus depreciation, plus land value. Used for special-purpose properties, new construction, and insurance. (3) Income Approach — capitalizes net operating income (NOI) to estimate value: Value = NOI ÷ Cap Rate. Used for income-producing properties.\n\nDepreciation is loss in value from any cause. Types: physical deterioration (wear and tear — curable or incurable), functional obsolescence (outdated features — curable or incurable), and external/economic obsolescence (outside factors — always incurable). The principle of substitution underlies all three approaches: a buyer will pay no more than the cost of an equally desirable substitute property.`,
    concepts: [
      "Market value: most probable price in competitive, open market between willing parties",
      "Sales Comparison Approach: compares to recent comps; primary method for residential",
      "Cost Approach: replacement cost new − depreciation + land value",
      "Income Approach: Value = NOI ÷ Cap Rate; used for income-producing properties",
      "NOI = Gross Income − Vacancy − Operating Expenses",
      "Cap Rate = NOI ÷ Value (or purchase price)",
      "Depreciation: physical deterioration, functional obsolescence, external obsolescence",
      "External/economic obsolescence is always incurable",
      "Principle of substitution: buyer pays no more than cost of equally desirable substitute",
      "GRM (Gross Rent Multiplier) = Sales Price ÷ Monthly Gross Rent (quick rough estimate)",
      "Appraisal: professional opinion; CMA: agent's market analysis (not an appraisal)"
    ],
    tip: "For the income approach: Value = NOI ÷ Cap Rate. If the cap rate goes UP, value goes DOWN (inverse relationship). Higher risk = higher cap rate = lower value."
  },
  17: {
    summary: `The federal Fair Housing Act (Title VIII of the Civil Rights Act of 1968) prohibits discrimination in the sale, rental, or financing of housing based on seven protected classes: race, color, national origin, religion, sex, familial status (families with children under 18, pregnant women), and disability/handicap. There are NO exemptions for real estate brokers — the exemptions for private owners and small landlords do NOT apply to brokers or agents.\n\nNew York's Human Rights Law (Executive Law Article 15) is broader than federal law and adds protected classes including: age, sexual orientation, gender identity/expression, marital status, and military status. NYC's Human Rights Law is even more expansive, adding source of income, lawful occupation, and more. Illegal practices include: blockbusting (inducing panic selling by claiming a protected class is moving in), steering (directing buyers/renters to or away from areas based on protected characteristics), and redlining (refusing to lend or insure in certain areas based on demographics).\n\nThe Americans with Disabilities Act (ADA) requires reasonable accommodations and modifications for persons with disabilities. Landlords must allow reasonable modifications (though tenants may bear cost). The Fair Housing Amendments Act of 1988 added familial status and disability. Testers — people who pose as buyers/renters to test compliance — are a valid enforcement tool.`,
    concepts: [
      "Federal Fair Housing Act: 7 protected classes (Race, Color, National Origin, Religion, Sex, Familial Status, Disability)",
      "NO exemptions apply to real estate brokers — ever",
      "NY Human Rights Law adds: age, sexual orientation, gender identity, marital status, military status",
      "Blockbusting: inducing panic selling by implying protected class is moving in",
      "Steering: directing people to/away from neighborhoods based on protected characteristics",
      "Redlining: denying loans/insurance to areas based on demographics",
      "ADA: reasonable accommodations and modifications for persons with disabilities",
      "Familial status and disability added by Fair Housing Amendments Act of 1988",
      "Testers: valid enforcement tool; testing is legal",
      "Civil Rights Act of 1866: prohibits racial discrimination — NO exemptions (predates Fair Housing Act)",
      "Penalties: HUD complaints, civil suits, damages, attorney's fees, injunctions"
    ],
    tip: "Sexual orientation is NOT a federal Fair Housing protected class — but it IS protected under NY State and NYC law. Brokers have NO exemptions from the Fair Housing Act, even for small rentals."
  },
  18: {
    summary: `Environmental issues affect real estate value and can create significant liability. Key hazardous materials include: lead-based paint (LBP — common in homes built before 1978; federal disclosure required for pre-1978 homes in sales and rentals), asbestos (used in insulation, floor tiles, pipe wrap until the 1980s; friable asbestos is most dangerous), and radon (naturally occurring radioactive gas from uranium decay; accumulates in basements; EPA action level = 4 pCi/L).\n\nUnderground storage tanks (USTs) — especially old fuel oil or gasoline tanks — can contaminate soil and groundwater. Phase I Environmental Site Assessment identifies recognized environmental conditions (RECs) using records and site inspection (no sampling). Phase II involves actual sampling and testing. CERCLA (Comprehensive Environmental Response, Compensation, and Liability Act — "Superfund") imposes strict, joint, and several liability for cleanup of contaminated sites — even innocent purchasers can be held liable unless they qualify for the innocent landowner defense (due diligence).\n\nWetlands are regulated by federal (Army Corps of Engineers) and state law; draining or filling wetlands requires permits. Floodplains require flood insurance (NFIP). In NY, sellers must disclose known environmental conditions on the Property Condition Disclosure Statement.`,
    concepts: [
      "Lead paint: disclosure required for pre-1978 homes; 10-day inspection period for buyers",
      "Asbestos: friable (crumbling) is most dangerous; must be abated by licensed professionals",
      "Radon: EPA action level = 4 pCi/L; mitigated with sub-slab depressurization",
      "Underground storage tanks (USTs): potential soil/groundwater contamination",
      "Phase I ESA: records review + site inspection, no sampling",
      "Phase II ESA: actual sampling and lab analysis",
      "CERCLA (Superfund): strict, joint & several liability for contaminated site cleanup",
      "Innocent landowner defense requires due diligence (Phase I ESA)",
      "Wetlands: require permits for filling/draining (Army Corps + NY DEC)",
      "NFIP (National Flood Insurance Program): required for properties in flood zones",
      "NY Property Condition Disclosure: sellers must disclose known environmental issues"
    ],
    tip: "CERCLA's 'innocent landowner defense' protects buyers who performed proper due diligence (Phase I ESA) BEFORE purchase. Buy first, get contaminated, and you own the cleanup."
  },
  19: {
    summary: `Real estate salespersons may be classified as independent contractors or employees — and the distinction has major tax and legal implications. Approximately 90% of real estate salespeople work as independent contractors. Under the IRS safe-harbor rules for real estate, a salesperson qualifies as an independent contractor if: (1) they hold a current real estate license, (2) substantially all compensation is based on sales output (not hours worked), and (3) there is a written independent contractor agreement.\n\nHowever, the New York DOS also requires brokers to supervise their salespeople, which can create tension with true independent contractor status. For NY purposes, the key distinctions include: independent contractors set their own hours, are not required to attend meetings, pay their own taxes (self-employment tax = ~15.3% FICA), and are not entitled to employee benefits (workers' comp, unemployment insurance, health insurance). The broker may provide office space and tools but generally cannot mandate specific work hours or methods.\n\nIf the relationship is deemed employment, the broker must withhold income taxes, pay the employer's share of FICA, provide workers' compensation, and pay unemployment insurance. The independent contractor agreement should be renewed annually. The Department of Labor looks carefully at the actual working relationship — not just what the contract says.`,
    concepts: [
      "~90% of real estate salespeople are independent contractors",
      "IRS safe-harbor: licensed + output-based pay + written agreement",
      "Independent contractors set own hours, pay own taxes, no benefits",
      "Self-employment tax: ~15.3% FICA (both employer and employee shares)",
      "Independent contractors pay estimated taxes quarterly",
      "Written IC agreement should be renewed annually",
      "Broker may provide office space but cannot mandate hours/methods",
      "If employee: broker withholds taxes, pays FICA, provides workers' comp & unemployment",
      "NY DOS supervision requirement can conflict with true IC status",
      "Department of Labor looks at actual relationship, not just the contract",
      "Paid vacation = employee status indicator per IRS"
    ],
    tip: "Being paid by the hour is the #1 indicator of EMPLOYEE status per the IRS. Independent contractors must be paid based on OUTPUT (commissions) only."
  },
  20: {
    summary: `Real estate transactions have significant income tax implications for both buyers and sellers. When a homeowner sells their primary residence, they may exclude up to $250,000 of capital gains from income ($500,000 for married couples filing jointly) under IRC Section 121, provided they owned and lived in the home as their principal residence for at least 2 of the 5 years preceding the sale. This exclusion can be used once every two years.\n\nThe adjusted basis of a property is the original purchase price plus capital improvements minus depreciation (for income property). Capital gain = selling price − adjusted basis − selling costs. Long-term capital gains (property held more than 1 year) are taxed at preferential rates. Depreciation on investment property is recaptured at 25% upon sale.\n\nA 1031 Exchange (like-kind exchange) allows an investor to defer capital gains tax by exchanging one investment property for another of equal or greater value. Rules: the replacement property must be identified within 45 days of sale and closed within 180 days. A qualified intermediary holds the proceeds. Personal residences and property held for personal use do not qualify. Installment sales (seller financing) allow the seller to spread gain over the years payments are received.`,
    concepts: [
      "Section 121 exclusion: $250,000 single / $500,000 married on primary residence sale",
      "Must own AND use as primary residence 2 of 5 years before sale",
      "Can use Section 121 exclusion once every 2 years",
      "Adjusted basis = purchase price + capital improvements − depreciation",
      "Capital gain = sale price − adjusted basis − selling costs",
      "Long-term capital gains (held >1 year): taxed at preferential rates",
      "Depreciation recapture: taxed at 25% on sale of investment property",
      "1031 Exchange: defer capital gains on investment property by buying replacement property",
      "1031 rules: 45 days to identify, 180 days to close; qualified intermediary required",
      "Installment sale: seller receives payments over time; gain recognized as payments received",
      "Points paid by buyer on purchase: fully deductible in year paid"
    ],
    tip: "The $500,000 exclusion applies to MARRIED couples filing JOINTLY — not $250,000 each. And both spouses must meet the use requirement (2 of 5 years)."
  },
  21: {
    summary: `Commercial and investment real estate involves properties purchased for income generation or business use. Key property types include: office buildings, retail (shopping centers, strip malls), industrial (warehouses, manufacturing), multifamily (apartment buildings with 5+ units), hotels/hospitality, and mixed-use. Real estate investment analysis focuses on cash flow, return on investment, and tax benefits.\n\nNet Operating Income (NOI) is the income a property generates after all operating expenses (but before debt service and taxes): NOI = Gross Potential Income − Vacancy & Collection Loss − Operating Expenses. The capitalization rate (cap rate) converts NOI into value: Value = NOI ÷ Cap Rate. A lower cap rate indicates lower risk (and higher value); a higher cap rate indicates higher risk.\n\nThe Gross Rent Multiplier (GRM) = Sales Price ÷ Gross Monthly Rent (a quick, rough valuation tool). Cash-on-cash return = Annual Cash Flow (before tax) ÷ Total Cash Invested. Real estate investment trusts (REITs) allow small investors to own shares in large commercial portfolios. Common lease structures in commercial: gross lease, net lease, triple-net (NNN), and percentage lease.`,
    concepts: [
      "NOI = Gross Potential Income − Vacancy − Operating Expenses (before debt service)",
      "Cap Rate = NOI ÷ Value (or Sale Price)",
      "Value = NOI ÷ Cap Rate (income approach)",
      "Lower cap rate = lower risk = higher value; Higher cap rate = higher risk = lower value",
      "GRM = Sales Price ÷ Gross Monthly Rent (quick rough estimate)",
      "Cash-on-cash return = Annual Cash Flow ÷ Cash Invested",
      "Effective gross income = potential income − vacancy and collection loss",
      "Operating expenses exclude mortgage payments and income taxes",
      "NNN lease: tenant pays rent + taxes + insurance + maintenance",
      "REIT: allows small investors to invest in commercial real estate portfolios",
      "Percentage lease: base rent + % of gross sales (common in retail)"
    ],
    tip: "Cap rates and value move in OPPOSITE directions. If the cap rate rises from 5% to 6%, the value of the property DROPS (same NOI ÷ higher rate = lower value)."
  },
  22: {
    summary: `Property management involves the operation, maintenance, and oversight of real estate on behalf of an owner. A property manager is typically employed by the owner under a management agreement — a contract specifying duties, authority, compensation, and duration. The property manager owes fiduciary duties to the owner (principal). In NY, a property manager who negotiates leases must hold a real estate license.\n\nKey property management functions include: tenant selection (following fair housing laws), lease execution, rent collection, maintenance and repairs, budgeting (annual operating budget), financial reporting (monthly income/expense reports), and handling tenant relations and disputes. A management fee is typically a percentage of gross rents collected (5–10% for residential; 4–6% for commercial).\n\nThe property manager must maintain proper records and keep owner funds in a separate trust account (no commingling). A capital reserve fund is set aside for major repairs and replacements. Preventive maintenance schedules help preserve property value. Tenant retention is important — vacancy is the largest cost in property management. In residential management, the manager must comply with the warranty of habitability and all landlord-tenant laws.`,
    concepts: [
      "Property manager acts as agent for the owner; owes fiduciary duties to owner",
      "Management agreement: contract specifying duties, authority, fees, and term",
      "In NY, negotiating leases requires a real estate license",
      "Management fee: typically % of gross rents collected (5–10% residential)",
      "Key duties: tenant selection, leases, rent collection, maintenance, budgeting, reporting",
      "Tenant selection must comply with Fair Housing laws (no discrimination)",
      "Operating budget: projects income and expenses for the year",
      "Trust account: owner funds kept separate from manager's funds (no commingling)",
      "Capital reserve fund: funds set aside for major repairs/replacements",
      "Vacancy is the largest cost; tenant retention is a priority",
      "Warranty of habitability must be maintained in residential management"
    ],
    tip: "The property manager works FOR the owner — the owner is the principal, the manager is the agent. The property manager collects rent on the owner's behalf and must account for every dollar."
  },
  23: {
    summary: `Property taxes are a major source of revenue for local governments (municipalities, school districts, counties). The property tax is calculated by multiplying the assessed value of the property by the tax rate (mill rate). The assessment is the value assigned to the property by the assessor for tax purposes, which may differ from market value. The assessment ratio (equalization rate) reflects the relationship between assessed values and market values in a jurisdiction.\n\nTax formula: Annual Taxes = Assessed Value × Tax Rate (mill rate). One mill = $1 of tax per $1,000 of assessed value (or 0.1%). The equalization rate adjusts for districts that assess at less than full market value. If a property is assessed at less than market value, the equalization rate is less than 100%.\n\nNY offers several tax exemptions. The STAR (School Tax Relief) Program reduces school taxes for owner-occupied primary residences. Basic STAR is available to all eligible homeowners; Enhanced STAR is for seniors (65+). Veterans, religious organizations, and nonprofit entities may also qualify for exemptions. A special assessment is a charge levied on properties that directly benefit from a public improvement (sidewalk, sewer).`,
    concepts: [
      "Property tax = Assessed Value × Tax Rate (mill rate)",
      "1 mill = $1 per $1,000 of assessed value (0.001 or 0.1%)",
      "Assessed value set by assessor; may differ from market value",
      "Equalization rate: ratio of assessed to market value across a taxing district",
      "If equalization rate < 100%, properties are assessed below market value",
      "STAR Program: reduces school taxes for NY primary residences",
      "Enhanced STAR: for seniors 65+; larger reduction",
      "Veterans' exemption: reduces assessed value for eligible veterans",
      "Special assessment: charged to properties specifically benefiting from a public improvement",
      "Property owner may grieve (appeal) an assessment to the Assessment Review Board",
      "Tax lien has priority over all other liens — even mortgage liens"
    ],
    tip: "Equalization rate tells you how assessments compare to market value. If the rate is 50%, properties are assessed at half their market value — so multiply assessed value by 2 to get approximate market value."
  },
  24: {
    summary: `Condominiums and cooperatives are two distinct forms of multi-unit housing common in New York. In a condominium, each owner holds fee simple title to their individual unit and an undivided interest in the common elements (hallways, lobby, roof, grounds). Condo owners pay monthly common charges (maintenance fees) and separate property taxes on their own unit. They may mortgage their unit individually.\n\nIn a cooperative, residents do not own real property — they own shares in a corporation that owns the building. In exchange for their shares, residents receive a proprietary lease granting them the right to occupy a specific apartment. Co-op owners pay a monthly maintenance fee that covers their proportionate share of the building's mortgage, property taxes, and operating expenses (making the co-op's underlying mortgage a key financial concern). Lenders issue a share loan (not a mortgage) to co-op buyers. Co-op boards typically have the right to approve or reject prospective buyers.\n\nIn NY, new condo and co-op developments must register an offering plan (prospectus) with the Attorney General's office before units can be marketed. A black book offering plan is for new construction; a red herring is the preliminary version pending AG review. Conversion of rental buildings to condos or co-ops is common in NYC and requires an offering plan.`,
    concepts: [
      "Condo: fee simple ownership of unit + undivided interest in common elements",
      "Condo owners pay: common charges + individual property taxes",
      "Condo owners can mortgage their unit individually",
      "Co-op: shareholders own stock in corporation that owns the building",
      "Co-op residents hold a proprietary lease for their unit",
      "Co-op owners pay monthly maintenance (includes building mortgage, taxes, operating costs)",
      "Co-op financing: share loan (not a traditional mortgage)",
      "Co-op board has right to approve or reject purchasers",
      "Offering plan: required for new condo/co-op sales; filed with NY AG",
      "Red herring: preliminary offering plan pending AG review",
      "Conversion: rental building converted to condo/co-op; requires offering plan"
    ],
    tip: "Key difference: condo owners hold REAL PROPERTY title; co-op owners hold PERSONAL PROPERTY (shares in a corporation). This affects financing, taxes, and transfer rights significantly."
  },
  25: {
    summary: `Property insurance protects real estate owners against financial losses from covered perils. Homeowner's insurance policies combine property coverage (the dwelling and personal property) with liability coverage. Standard policy forms include: HO-1 (basic named-peril), HO-2 (broad named-peril), HO-3 (special form — open peril on dwelling, named peril on contents — most common), HO-4 (renter's insurance), HO-5 (comprehensive), HO-6 (condo unit owner), and HO-8 (older/modified coverage for historic homes).\n\nActual cash value (ACV) coverage pays replacement cost minus depreciation. Replacement cost coverage pays the full cost to replace damaged property with like kind and quality, without deduction for depreciation. Coinsurance (co-insurance) requires the homeowner to insure the property to at least 80% of replacement cost to receive full coverage — if underinsured, the owner bears a proportionate share of any loss.\n\nTitle insurance protects against pre-existing title defects (not future losses). Flood insurance is provided through the National Flood Insurance Program (NFIP) — standard homeowner's policies do NOT cover floods. Earthquake coverage requires a separate rider. Mortgage lenders typically require hazard insurance on the property they finance. PMI (private mortgage insurance) protects the lender against borrower default — it is not property insurance.`,
    concepts: [
      "HO-3: most common homeowner policy; open peril on dwelling, named peril on contents",
      "HO-4: renter's insurance (covers contents and liability, not the dwelling)",
      "HO-6: condo unit owner's policy",
      "ACV (Actual Cash Value): replacement cost minus depreciation",
      "Replacement cost coverage: full cost to rebuild without depreciation deduction",
      "Coinsurance: must insure to 80% of replacement cost to receive full loss coverage",
      "Flood insurance: separate NFIP policy — standard HO does NOT cover floods",
      "Title insurance: protects against pre-existing title defects (not ongoing risks)",
      "PMI (private mortgage insurance): protects lender against default (NOT property coverage)",
      "Earthquake coverage: separate rider required",
      "Lenders require hazard insurance as a condition of the mortgage"
    ],
    tip: "PMI is NOT homeowner's insurance — it protects the LENDER, not the owner, against default. You pay it, but it doesn't benefit you. It can be canceled once LTV drops below 80%."
  },
  26: {
    summary: `Real estate math is tested on nearly every licensing exam. Key calculations include: commission, area and volume, proration, interest, appreciation/depreciation, and tax/assessment problems. Having a solid understanding of these formulas and how to apply them is essential.\n\nCommission: Sales Price × Commission Rate = Total Commission. To find sales price when commission is known: Sales Price = Commission ÷ Rate. To find a salesperson's share: Total Commission × Salesperson's Split %.\n\nArea: Length × Width (square feet). Volume: Length × Width × Height (cubic feet). Proration: determine daily rate (annual amount ÷ 360 or 365 days), then multiply by number of days. Interest: Principal × Rate × Time = Interest. To find annual property taxes: Assessed Value × Mill Rate (mills ÷ 1,000). Appreciation: New Value = Original Value × (1 + Rate). Depreciation: Annual Depreciation = Cost ÷ Economic Life. Capitalization: Value = NOI ÷ Cap Rate.`,
    concepts: [
      "Commission = Sales Price × Rate; to find price: Price = Commission ÷ Rate",
      "Area = Length × Width (sq ft); Volume = L × W × Height (cubic ft)",
      "Proration: daily rate = annual amount ÷ 360 (or 365); multiply by days",
      "Simple interest: Principal × Rate × Time = Interest",
      "Mill rate: 1 mill = $0.001; Taxes = Assessed Value × (Mills ÷ 1,000)",
      "To find assessed value from taxes: Taxes ÷ Mill Rate = Assessed Value",
      "Appreciation: New Value = Old Value × (1 + annual rate)^years",
      "Straight-line depreciation: Cost ÷ Economic Life = Annual Depreciation",
      "Cap rate: Value = NOI ÷ Cap Rate; NOI = Value × Cap Rate",
      "GRM: Sales Price ÷ Gross Monthly Rent = GRM; Value = GRM × Monthly Rent",
      "LTV: Loan Amount ÷ Appraised Value = LTV%"
    ],
    tip: "In proration problems, use a 360-day year (30-day months) unless told otherwise. Seller is credited (or debited) from January 1 through (but not including) the closing date."
  }
};

/* ============================================================
   STATE
   ============================================================ */
let currentPage = null;
let quizState = {};
let flashcardState = {};
let threeScene = null;
let supabaseClient = null;
let currentUser    = null;
let currentProfile = null;

/* ============================================================
   THREE.JS BACKGROUND
   ============================================================ */
function initThreeBackground(canvasId) {
  const canvas = document.getElementById(canvasId);
  if (!canvas || !window.THREE) return;

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 30;

  // Particles
  const particleCount = 200;
  const geo = new THREE.BufferGeometry();
  const positions = new Float32Array(particleCount * 3);
  const velocities = [];

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3]     = (Math.random() - 0.5) * 80;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 60;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 40;
    velocities.push({
      x: (Math.random() - 0.5) * 0.02,
      y: (Math.random() - 0.5) * 0.02,
      z: (Math.random() - 0.5) * 0.01
    });
  }
  geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  const mat = new THREE.PointsMaterial({
    color: 0xC9A84C,
    size: 0.3,
    transparent: true,
    opacity: 0.6,
    sizeAttenuation: true
  });
  const particles = new THREE.Points(geo, mat);
  scene.add(particles);

  // Geometric shapes
  const shapes = [];
  const shapeGeometries = [
    new THREE.OctahedronGeometry(1.2),
    new THREE.TetrahedronGeometry(1),
    new THREE.IcosahedronGeometry(0.9),
    new THREE.BoxGeometry(1.2, 1.2, 1.2)
  ];
  const shapeMat = new THREE.MeshBasicMaterial({
    color: 0xC9A84C,
    wireframe: true,
    transparent: true,
    opacity: 0.15
  });

  for (let i = 0; i < 8; i++) {
    const mesh = new THREE.Mesh(
      shapeGeometries[i % shapeGeometries.length],
      shapeMat.clone()
    );
    mesh.position.set(
      (Math.random() - 0.5) * 60,
      (Math.random() - 0.5) * 40,
      (Math.random() - 0.5) * 20
    );
    mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
    const scale = 0.5 + Math.random() * 2;
    mesh.scale.set(scale, scale, scale);
    scene.add(mesh);
    shapes.push({ mesh, rx: (Math.random() - 0.5) * 0.005, ry: (Math.random() - 0.5) * 0.007 });
  }

  let animId;
  function animate() {
    animId = requestAnimationFrame(animate);
    const pos = particles.geometry.attributes.position.array;
    for (let i = 0; i < particleCount; i++) {
      pos[i * 3]     += velocities[i].x;
      pos[i * 3 + 1] += velocities[i].y;
      pos[i * 3 + 2] += velocities[i].z;
      if (Math.abs(pos[i * 3]) > 40)     velocities[i].x *= -1;
      if (Math.abs(pos[i * 3 + 1]) > 30) velocities[i].y *= -1;
      if (Math.abs(pos[i * 3 + 2]) > 20) velocities[i].z *= -1;
    }
    particles.geometry.attributes.position.needsUpdate = true;
    shapes.forEach(s => {
      s.mesh.rotation.x += s.rx;
      s.mesh.rotation.y += s.ry;
    });
    renderer.render(scene, camera);
  }
  animate();

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });

  return { scene, renderer, animId };
}

/* ============================================================
   SUPABASE INIT & AUTH FLOW
   ============================================================ */
const PORTAL_KEY = 'nyre_portal_unlocked'; // localStorage key — persists across refreshes

function initSupabase() {
  supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON, {
    auth: {
      // Send email confirmation links to the live site, not localhost
      redirectTo: window.location.origin
    }
  });
}

async function bootApp() {
  // Show the auth form immediately — never block the UI waiting for network
  showAuthScreen();

  try {
    initSupabase();
  } catch (e) {
    showAuthError('Could not connect to auth service. Please refresh.');
    return;
  }

  supabaseClient.auth.onAuthStateChange(async (event, session) => {
    if (event === 'SIGNED_IN' && session && !currentUser) {
      await afterSignIn(session.user);
    }
    if (event === 'SIGNED_OUT') {
      currentUser = null;
      currentProfile = null;
      localStorage.removeItem(PORTAL_KEY);
      showAuthScreen();
    }
    if (event === 'PASSWORD_RECOVERY') {
      showAuthScreen();
      switchAuthTab('signin');
      showAuthSuccess('Password reset — sign in with your new password.');
    }
  });

  // Silently check for an existing session (8s timeout so it never hangs)
  try {
    const race = await Promise.race([
      supabaseClient.auth.getSession(),
      new Promise((_, rej) => setTimeout(() => rej(new Error('timeout')), 8000))
    ]);
    if (race.data?.session) {
      await afterSignIn(race.data.session.user);
    }
  } catch (_) {
    // Timeout or network error — user stays on auth screen and can sign in manually
  }
}

function setAuthLoading(on) {
  const spinner = document.getElementById('auth-spinner');
  const forms   = document.querySelectorAll('.auth-form, .auth-tabs');
  if (!spinner) return;
  spinner.style.display = on ? 'flex' : 'none';
  forms.forEach(f => {
    f.style.opacity = on ? '0.4' : '1';
    f.style.pointerEvents = on ? 'none' : '';
  });
}

async function afterSignIn(user) {
  currentUser = user;

  let profile = null;
  try {
    profile = await fetchOrCreateProfile(user);
  } catch (e) {
    // Profile table may not exist yet — still let user through to password gate
  }
  currentProfile = profile;

  if (profile && profile.is_banned) {
    showBannedScreen();
    return;
  }

  // Skip portal password if user already unlocked it (persists across refreshes)
  if (localStorage.getItem(PORTAL_KEY) === '1') {
    showApp();
  } else {
    showPasswordScreen();
  }
}

async function fetchOrCreateProfile(user) {
  const { data } = await supabaseClient
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single();

  if (data) return data;

  // First time — create the profile row
  const isAdmin = user.email.toLowerCase() === ADMIN_EMAIL.toLowerCase();
  const { data: created } = await supabaseClient
    .from('profiles')
    .insert({ id: user.id, email: user.email, is_admin: isAdmin, is_banned: false })
    .select()
    .single();

  return created;
}

/* ── Auth Screen ── */
function showAuthScreen() {
  document.getElementById('auth-screen').style.display = 'flex';
  document.getElementById('password-screen').style.display = 'none';
  document.getElementById('banned-screen').style.display = 'none';
  document.getElementById('app').style.display = 'none';
  setAuthLoading(false);
}

function switchAuthTab(tab) {
  document.getElementById('signin-form').style.display    = tab === 'signin'   ? 'block' : 'none';
  document.getElementById('register-form').style.display  = tab === 'register' ? 'block' : 'none';
  document.getElementById('tab-signin').classList.toggle('active',   tab === 'signin');
  document.getElementById('tab-register').classList.toggle('active', tab === 'register');
  clearAuthMessages();
}

function clearAuthMessages() {
  const e = document.getElementById('auth-error');
  const s = document.getElementById('auth-success');
  if (e) e.textContent = '';
  if (s) s.textContent = '';
}

async function handleSignIn() {
  clearAuthMessages();
  const email    = document.getElementById('si-email').value.trim();
  const password = document.getElementById('si-password').value;
  if (!email || !password) { showAuthError('Please enter your email and password.'); return; }

  setAuthLoading(true);
  const { data, error } = await supabaseClient.auth.signInWithPassword({ email, password });
  setAuthLoading(false);
  if (error) {
    showAuthError(error.message === 'Email not confirmed'
      ? 'Please confirm your email first — check your inbox (and spam folder).'
      : error.message);
    return;
  }
  // onAuthStateChange SIGNED_IN → afterSignIn
}

async function handleRegister() {
  clearAuthMessages();
  const email   = document.getElementById('reg-email').value.trim();
  const pass    = document.getElementById('reg-password').value;
  const confirm = document.getElementById('reg-confirm').value;
  if (!email || !pass || !confirm) { showAuthError('Please fill in all fields.'); return; }
  if (pass.length < 6)  { showAuthError('Password must be at least 6 characters.'); return; }
  if (pass !== confirm)  { showAuthError('Passwords do not match.'); return; }

  setAuthLoading(true);
  const { data, error } = await supabaseClient.auth.signUp({
    email,
    password: pass,
    options: { emailRedirectTo: window.location.origin }
  });
  setAuthLoading(false);
  if (error) { showAuthError(error.message); return; }

  // If Supabase returns a session immediately, email confirmation is disabled — sign straight in
  if (data.session) {
    await afterSignIn(data.user);
  } else {
    showAuthSuccess('Account created! Check your email for a confirmation link, then sign in here.');
  }
}

async function handleForgotPassword() {
  const email = document.getElementById('si-email').value.trim();
  if (!email) { showAuthError('Enter your email address first, then click forgot password.'); return; }
  const { error } = await supabaseClient.auth.resetPasswordForEmail(email, {
    redirectTo: window.location.origin
  });
  if (error) { showAuthError(error.message); return; }
  showAuthSuccess('Password reset link sent! Check your inbox.');
}

async function handleSignOut() {
  localStorage.removeItem(PORTAL_KEY);
  currentUser = null;
  currentProfile = null;
  await supabaseClient.auth.signOut();
  showAuthScreen();
}

function showAuthError(msg) {
  const el = document.getElementById('auth-error');
  if (el) el.textContent = msg;
}
function showAuthSuccess(msg) {
  const el = document.getElementById('auth-success');
  if (el) el.textContent = msg;
}

function showBannedScreen() {
  document.getElementById('auth-screen').style.display = 'none';
  document.getElementById('password-screen').style.display = 'none';
  document.getElementById('app').style.display = 'none';
  document.getElementById('banned-screen').style.display = 'flex';
}

/* ── Password Gate ── */
function showPasswordScreen() {
  document.getElementById('auth-screen').style.display = 'none';
  document.getElementById('banned-screen').style.display = 'none';
  document.getElementById('app').style.display = 'none';
  document.getElementById('password-screen').style.display = 'flex';
  initThreeBackground('bg-canvas');

  if (currentUser) {
    const name = currentUser.email.split('@')[0];
    const el = document.getElementById('pw-greeting');
    if (el) el.textContent = `Welcome, ${name} — enter the portal password`;
  }

  const inp = document.getElementById('password-input');
  if (inp) {
    inp.value = '';
    inp.focus();
    inp.addEventListener('keydown', e => { if (e.key === 'Enter') handleLogin(); });
  }
}

function handleLogin() {
  const val = document.getElementById('password-input').value;
  if (val === 'Rishab Is The Best') {
    localStorage.setItem(PORTAL_KEY, '1'); // persists across refreshes
    const screen = document.getElementById('password-screen');
    screen.classList.add('hiding');
    setTimeout(() => {
      screen.style.display = 'none';
      showApp();
    }, 600);
  } else {
    const card = document.getElementById('login-card');
    const err  = document.getElementById('login-error');
    err.textContent = 'Incorrect password. Please try again.';
    card.classList.remove('shake');
    void card.offsetWidth;
    card.classList.add('shake');
  }
}

function showApp() {
  document.getElementById('auth-screen').style.display = 'none';
  document.getElementById('password-screen').style.display = 'none';
  document.getElementById('banned-screen').style.display = 'none';
  document.getElementById('app').style.display = 'block';
  buildNav();
  updateNavProgress();
  initRouter();
}

/* ============================================================
   NAVIGATION
   ============================================================ */
function buildNav() {
  const dropdown = document.getElementById('units-dropdown');
  const mobileLinks = document.getElementById('mobile-units-links');
  dropdown.innerHTML = '';
  mobileLinks.innerHTML = '';

  UNITS_DATA.forEach(unit => {
    const a = document.createElement('a');
    a.className = 'dropdown-item';
    a.href = '#unit/' + unit.id;
    a.innerHTML = `<span class="unit-num">U${unit.id}</span>${unit.title}`;
    a.addEventListener('click', e => { e.preventDefault(); navigate('unit', unit.id); });
    dropdown.appendChild(a);

    const m = document.createElement('a');
    m.className = 'mobile-link';
    m.href = '#unit/' + unit.id;
    m.textContent = `Unit ${unit.id}: ${unit.title}`;
    m.addEventListener('click', e => { e.preventDefault(); navigate('unit', unit.id); closeMobileMenu(); });
    mobileLinks.appendChild(m);
  });

  // Show admin link if user is admin
  if (currentProfile && currentProfile.is_admin) {
    document.getElementById('nav-admin-link').style.display = 'inline-flex';
    document.getElementById('mobile-admin-link').style.display = 'block';
  }
}

function updateNavProgress() {
  let totalCorrect = 0, totalQuestions = 0;
  UNITS_DATA.forEach(unit => {
    const p = loadProgress(unit.id);
    if (p) { totalCorrect += p.correct; totalQuestions += p.total; }
  });
  const pct = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;
  document.getElementById('nav-pct').textContent = pct + '%';
  const circumference = 2 * Math.PI * 14;
  const offset = circumference - (pct / 100) * circumference;
  const ring = document.getElementById('nav-ring');
  if (ring) ring.style.strokeDashoffset = offset;
}

function toggleMobileMenu() {
  document.getElementById('mobile-menu').classList.toggle('open');
}
function closeMobileMenu() {
  document.getElementById('mobile-menu').classList.remove('open');
}

/* ============================================================
   ROUTER
   ============================================================ */
function initRouter() {
  window.addEventListener('hashchange', routeFromHash);
  routeFromHash();
}

function routeFromHash() {
  const hash = window.location.hash.replace('#', '') || 'dashboard';
  if (hash === 'dashboard' || hash === '') {
    renderDashboard();
  } else if (hash === 'final') {
    renderFinalPage();
  } else if (hash === 'admin') {
    if (currentProfile && currentProfile.is_admin) {
      renderAdminPage();
    } else {
      renderDashboard();
    }
  } else if (hash.startsWith('unit/')) {
    const id = parseInt(hash.split('/')[1]);
    if (id >= 1 && id <= 26) renderUnitPage(id);
  } else {
    renderDashboard();
  }
}

function navigate(type, id) {
  if (type === 'dashboard') {
    window.location.hash = '#dashboard';
  } else if (type === 'unit') {
    window.location.hash = '#unit/' + id;
  } else if (type === 'final') {
    window.location.hash = '#final';
  } else if (type === 'admin') {
    window.location.hash = '#admin';
  }
}

function setPage(html) {
  const content = document.getElementById('page-content');
  content.innerHTML = html;
  content.scrollTop = 0;
  window.scrollTo(0, 0);
}

/* ============================================================
   PROGRESS (localStorage)
   ============================================================ */
function saveProgress(unitId, correct, total) {
  localStorage.setItem('nyre_progress_' + unitId, JSON.stringify({ correct, total }));
  updateNavProgress();
}

function loadProgress(unitId) {
  const raw = localStorage.getItem('nyre_progress_' + unitId);
  return raw ? JSON.parse(raw) : null;
}

/* ============================================================
   PROGRESS RING SVG
   ============================================================ */
function makeRingSVG(pct, size, stroke, color, bgColor) {
  const r = (size - stroke) / 2;
  const circ = 2 * Math.PI * r;
  const offset = circ - (pct / 100) * circ;
  const cx = size / 2, cy = size / 2;
  return `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" class="ring-svg">
    <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${bgColor}" stroke-width="${stroke}"/>
    <circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${color}" stroke-width="${stroke}"
      stroke-dasharray="${circ.toFixed(2)}" stroke-dashoffset="${offset.toFixed(2)}"
      stroke-linecap="round" transform="rotate(-90 ${cx} ${cy})"
      style="transition: stroke-dashoffset 1s ease;"/>
  </svg>`;
}

/* ============================================================
   DASHBOARD
   ============================================================ */
function renderDashboard() {
  let totalCorrect = 0, totalQuestions = 0, unitsDone = 0;
  UNITS_DATA.forEach(unit => {
    const p = loadProgress(unit.id);
    if (p && p.total > 0) {
      totalCorrect += p.correct;
      totalQuestions += p.total;
      if (p.correct / p.total >= 0.7) unitsDone++;
    }
  });
  const overallPct = totalQuestions > 0 ? Math.round((totalCorrect / totalQuestions) * 100) : 0;

  let cardsHTML = '';
  UNITS_DATA.forEach(unit => {
    const p = loadProgress(unit.id);
    const pct = p && p.total > 0 ? Math.round((p.correct / p.total) * 100) : 0;
    const ring = makeRingSVG(pct, 52, 3.5, '#C9A84C', 'rgba(201,168,76,0.15)');
    const scoreText = p && p.total > 0
      ? `<div class="unit-card-score">Score: <span class="score-val">${p.correct}/${p.total} (${pct}%)</span></div>`
      : `<div class="unit-card-score" style="color:var(--text-muted)">Not started</div>`;

    cardsHTML += `
      <div class="unit-card" data-unit="${unit.id}" onclick="navigate('unit',${unit.id})">
        <div class="unit-card-header">
          <div class="unit-num-large">${unit.id}</div>
          <div class="unit-progress-ring">${ring}</div>
        </div>
        <div class="unit-card-title">${unit.title}</div>
        <div class="unit-card-meta">${unit.questions.length} questions</div>
        ${scoreText}
        <button class="study-btn">Study Unit ${unit.id} →</button>
      </div>`;
  });

  const html = `
    <div class="page">
      <div class="dashboard-hero">
        <div class="hero-eyebrow">NYS Real Estate Exam Prep</div>
        <h1 class="hero-title">Master Your Real Estate Exam</h1>
        <p class="hero-subtitle">26 comprehensive units · Flashcards · Quizzes · Final Exam</p>
        <div class="hero-stats">
          <div class="hero-stat">
            <span class="hero-stat-num">26</span>
            <span class="hero-stat-label">Units</span>
          </div>
          <div class="hero-stat">
            <span class="hero-stat-num">${UNITS_DATA.reduce((a,u)=>a+u.questions.length,0)}</span>
            <span class="hero-stat-label">Questions</span>
          </div>
          <div class="hero-stat">
            <span class="hero-stat-num">${overallPct}%</span>
            <span class="hero-stat-label">Overall Score</span>
          </div>
          <div class="hero-stat">
            <span class="hero-stat-num">${unitsDone}</span>
            <span class="hero-stat-label">Units ≥70%</span>
          </div>
        </div>
      </div>

      <div class="units-section">
        <div class="section-header">
          <h2 class="section-title">Study <span>Units</span></h2>
          <span style="font-size:13px;color:var(--text-muted)">Click any card to begin studying</span>
        </div>
        <div class="units-grid" id="units-grid">
          ${cardsHTML}
        </div>
      </div>
    </div>`;

  setPage(html);
  initCardTilt();
}

/* Card 3D tilt */
function initCardTilt() {
  document.querySelectorAll('.unit-card').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const cx = rect.width / 2;
      const cy = rect.height / 2;
      const rotX = ((y - cy) / cy) * -8;
      const rotY = ((x - cx) / cx) * 8;
      card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(4px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
    });
  });
}

/* ============================================================
   UNIT PAGE
   ============================================================ */
function renderUnitPage(unitId) {
  const unit = UNITS_DATA.find(u => u.id === unitId);
  if (!unit) { renderDashboard(); return; }
  const overview = UNIT_OVERVIEWS[unitId];

  const html = `
    <div class="page unit-page">
      <div class="unit-page-header">
        <div class="unit-page-eyebrow">Unit ${unitId}</div>
        <h1 class="unit-page-title">${unit.title}</h1>
        <div class="unit-page-sub">${unit.questions.length} practice questions</div>
      </div>

      <div class="tab-bar">
        <button class="tab-btn active" id="tab-overview" onclick="switchTab('overview',${unitId})">Overview</button>
        <button class="tab-btn" id="tab-flashcards" onclick="switchTab('flashcards',${unitId})">Flashcards</button>
        <button class="tab-btn" id="tab-quiz" onclick="switchTab('quiz',${unitId})">Quiz</button>
      </div>

      <div id="tab-content"></div>
    </div>`;

  setPage(html);
  renderOverviewTab(unitId, overview);
}

function switchTab(tab, unitId) {
  ['overview', 'flashcards', 'quiz'].forEach(t => {
    document.getElementById('tab-' + t).classList.toggle('active', t === tab);
  });
  if (tab === 'overview')   renderOverviewTab(unitId, UNIT_OVERVIEWS[unitId]);
  if (tab === 'flashcards') renderFlashcardsTab(unitId);
  if (tab === 'quiz')       renderQuizTab(unitId);
}

/* ── Overview ── */
function renderOverviewTab(unitId, ov) {
  if (!ov) {
    document.getElementById('tab-content').innerHTML = '<p style="color:var(--text-muted);padding:20px">No overview available.</p>';
    return;
  }
  const paragraphs = ov.summary.split('\n\n').map(p => `<p>${p}</p>`).join('');
  const conceptItems = ov.concepts.map(c => `<li>${c}</li>`).join('');

  document.getElementById('tab-content').innerHTML = `
    <div class="tab-content">
      <div class="overview-summary">${paragraphs}</div>
      <div class="overview-concepts">
        <h3>Key Concepts</h3>
        <ul class="concept-list">${conceptItems}</ul>
      </div>
      <div class="pro-tip">
        <div class="pro-tip-label">Pro Tip</div>
        <p>${ov.tip}</p>
      </div>
    </div>`;
}

/* ── Flashcards ── */
function renderFlashcardsTab(unitId) {
  const unit = UNITS_DATA.find(u => u.id === unitId);
  const questions = unit.questions;

  if (!flashcardState[unitId] || flashcardState[unitId].questions !== questions) {
    flashcardState[unitId] = {
      questions,
      order: shuffleArray(questions.map((_, i) => i)),
      current: 0,
      seen: new Set(),
      flipped: false
    };
  }

  renderFlashcard(unitId);
}

function renderFlashcard(unitId) {
  const state = flashcardState[unitId];
  const total = state.order.length;
  const curr = state.current;
  const qIdx = state.order[curr];
  const q = state.questions[qIdx];
  state.seen.add(qIdx);

  const seenPct = Math.round((state.seen.size / total) * 100);
  const answerText = q.options[q.answer] || q.answer;

  const flipClass = state.flipped ? 'flipped' : '';

  document.getElementById('tab-content').innerHTML = `
    <div class="tab-content">
      <div class="flashcard-controls">
        <div class="flashcard-counter">Card <span>${curr + 1}</span> of <span>${total}</span></div>
        <div style="font-size:13px;color:var(--text-muted)">Seen: ${state.seen.size}/${total}</div>
      </div>
      <div class="fc-progress-bar">
        <div class="fc-progress-fill" style="width:${seenPct}%"></div>
      </div>

      <div class="flashcard-scene" onclick="flipFlashcard(${unitId})">
        <div class="flashcard ${flipClass}" id="flashcard-el">
          <div class="flashcard-face flashcard-front">
            <div class="fc-face-label">Question</div>
            <div class="fc-question">${escapeHTML(q.q)}</div>
          </div>
          <div class="flashcard-face flashcard-back">
            <div class="fc-face-label">Answer</div>
            <div class="fc-answer">${q.answer}: ${escapeHTML(answerText)}</div>
            <div class="fc-explanation">${escapeHTML(q.explanation)}</div>
          </div>
        </div>
      </div>
      <p class="fc-click-hint">Click the card to flip · ${state.flipped ? 'Showing answer' : 'Showing question'}</p>

      <div class="fc-nav-btns">
        <button class="fc-btn fc-btn-prev" onclick="fcPrev(${unitId})" ${curr === 0 ? 'disabled style="opacity:0.4"' : ''}>← Prev</button>
        <button class="fc-btn fc-btn-shuffle" onclick="fcShuffle(${unitId})">⇄ Shuffle</button>
        <button class="fc-btn fc-btn-next" onclick="fcNext(${unitId})" ${curr === total - 1 ? 'disabled style="opacity:0.4"' : ''}>Next →</button>
      </div>
      <div class="fc-seen-label">Cards seen: ${state.seen.size} / ${total} (${seenPct}%)</div>
    </div>`;
}

function flipFlashcard(unitId) {
  flashcardState[unitId].flipped = !flashcardState[unitId].flipped;
  renderFlashcard(unitId);
}
function fcPrev(unitId) {
  const s = flashcardState[unitId];
  if (s.current > 0) { s.current--; s.flipped = false; renderFlashcard(unitId); }
}
function fcNext(unitId) {
  const s = flashcardState[unitId];
  if (s.current < s.order.length - 1) { s.current++; s.flipped = false; renderFlashcard(unitId); }
}
function fcShuffle(unitId) {
  const s = flashcardState[unitId];
  s.order = shuffleArray(s.questions.map((_, i) => i));
  s.current = 0;
  s.flipped = false;
  renderFlashcard(unitId);
}

/* ── Quiz ── */
function renderQuizTab(unitId) {
  const unit = UNITS_DATA.find(u => u.id === unitId);
  quizState[unitId] = {
    questions: shuffleArray([...unit.questions]),
    current: 0,
    correct: 0,
    answered: false,
    unitId
  };
  renderQuizQuestion(unitId);
}

function renderQuizQuestion(unitId) {
  const state = quizState[unitId];
  if (state.current >= state.questions.length) {
    renderQuizComplete(unitId);
    return;
  }

  const q = state.questions[state.current];
  const total = state.questions.length;
  const curr = state.current + 1;
  const pct = Math.round(((curr - 1) / total) * 100);

  const optionsHTML = Object.entries(q.options).map(([letter, text]) => `
    <button class="quiz-option" id="opt-${letter}" onclick="answerQuiz('${unitId}','${letter}')">
      <div class="option-letter">${letter}</div>
      <div class="option-text">${escapeHTML(text)}</div>
    </button>`).join('');

  document.getElementById('tab-content').innerHTML = `
    <div class="tab-content">
      <div class="quiz-progress">
        <div class="quiz-progress-header">
          <div class="quiz-progress-label">Question <span>${curr}</span> of <span>${total}</span></div>
          <div class="quiz-progress-label">Score: <span>${state.correct}</span> correct</div>
        </div>
        <div class="quiz-progress-bar">
          <div class="quiz-progress-fill" style="width:${pct}%"></div>
        </div>
      </div>

      <div class="quiz-question-card">
        <div class="quiz-question-num">Question ${curr}</div>
        <div class="quiz-question-text">${escapeHTML(q.q)}</div>
      </div>

      <div class="quiz-options" id="quiz-options">${optionsHTML}</div>
      <div id="quiz-feedback"></div>
    </div>`;
}

function answerQuiz(unitId, selected) {
  const state = quizState[unitId];
  if (state.answered) return;
  state.answered = true;

  const q = state.questions[state.current];
  const correct = q.answer;
  const isCorrect = selected === correct;
  if (isCorrect) state.correct++;

  // Style options
  document.querySelectorAll('.quiz-option').forEach(btn => {
    const letter = btn.id.replace('opt-', '');
    if (letter === correct) btn.classList.add('correct');
    else if (letter === selected && !isCorrect) btn.classList.add('incorrect');
    else btn.classList.add('dimmed');
    btn.disabled = true;
  });

  // Show explanation if wrong
  const feedback = document.getElementById('quiz-feedback');
  let feedbackHTML = '';
  if (!isCorrect) {
    feedbackHTML = `
      <div class="quiz-explanation">
        <div class="quiz-explanation-label">Explanation</div>
        <div class="quiz-explanation-text">${escapeHTML(q.explanation)}</div>
      </div>`;
  }
  feedbackHTML += `<button class="quiz-next-btn" onclick="nextQuizQuestion('${unitId}')">
    ${state.current < state.questions.length - 1 ? 'Next Question →' : 'See Results →'}
  </button>`;
  feedback.innerHTML = feedbackHTML;
}

function nextQuizQuestion(unitId) {
  const state = quizState[unitId];
  state.current++;
  state.answered = false;
  renderQuizQuestion(unitId);
}

function renderQuizComplete(unitId) {
  const state = quizState[unitId];
  const total = state.questions.length;
  const correct = state.correct;
  const pct = Math.round((correct / total) * 100);

  // Save progress
  saveProgress(unitId, correct, total);

  const ringColor = pct >= 70 ? '#22C55E' : pct >= 50 ? '#C9A84C' : '#EF4444';
  const ring = makeRingSVG(pct, 140, 8, ringColor, 'rgba(255,255,255,0.07)');

  let grade = 'Needs Work';
  let gradeSub = 'Keep studying and try again!';
  if (pct >= 90) { grade = 'Excellent!'; gradeSub = 'Outstanding performance!'; }
  else if (pct >= 70) { grade = 'Passing'; gradeSub = 'You\'re on track — keep it up!'; }
  else if (pct >= 50) { grade = 'Getting There'; gradeSub = 'Review the material and retry.'; }

  document.getElementById('tab-content').innerHTML = `
    <div class="tab-content">
      <div class="quiz-complete">
        <div class="complete-ring-container">
          ${ring}
          <div class="complete-score-text">
            <div class="complete-pct">${pct}%</div>
            <div class="complete-label">Score</div>
          </div>
        </div>
        <h2 class="complete-title">${grade}</h2>
        <p class="complete-subtitle">${gradeSub}</p>
        <div class="complete-stats">
          <div class="complete-stat">
            <span class="complete-stat-num green">${correct}</span>
            <span class="complete-stat-label">Correct</span>
          </div>
          <div class="complete-stat">
            <span class="complete-stat-num red">${total - correct}</span>
            <span class="complete-stat-label">Incorrect</span>
          </div>
          <div class="complete-stat">
            <span class="complete-stat-num" style="color:var(--gold)">${total}</span>
            <span class="complete-stat-label">Total</span>
          </div>
        </div>
        <div class="complete-btns">
          <button class="btn-outline" onclick="navigate('dashboard')">← Dashboard</button>
          <button class="btn-gold" onclick="renderQuizTab(${unitId})">Retry Quiz</button>
        </div>
      </div>
    </div>`;
}

/* ============================================================
   FINAL EXAM PAGE
   ============================================================ */
function renderFinalPage() {
  const html = `
    <div class="page final-page">
      <div class="final-hero">
        <div class="hero-eyebrow">Final Review</div>
        <h1 class="final-hero-title">Final Exam Simulation</h1>
        <p class="final-hero-sub">Test your knowledge across all 26 units with a comprehensive exam.</p>
        <div class="final-info-cards">
          <div class="final-info-card">
            <span class="final-info-num">52</span>
            <span class="final-info-label">Questions</span>
          </div>
          <div class="final-info-card">
            <span class="final-info-num">26</span>
            <span class="final-info-label">Units</span>
          </div>
          <div class="final-info-card">
            <span class="final-info-num">2</span>
            <span class="final-info-label">Per Unit</span>
          </div>
        </div>
        <p style="color:var(--text-muted);font-size:14px;margin-bottom:28px">
          2 random questions from each unit · Shuffled each attempt
        </p>
        <button class="btn-gold" style="padding:14px 40px;font-size:16px" onclick="startFinalExam()">
          Start Final Exam →
        </button>
      </div>
      <div id="final-exam-area"></div>
    </div>`;

  setPage(html);
}

function startFinalExam() {
  // Pick 2 random from each unit
  const examQuestions = [];
  UNITS_DATA.forEach(unit => {
    const shuffled = shuffleArray([...unit.questions]);
    const picked = shuffled.slice(0, Math.min(2, shuffled.length));
    picked.forEach(q => examQuestions.push({ ...q, _unitId: unit.id, _unitTitle: unit.title }));
  });
  shuffleArray(examQuestions);

  window._finalExamState = {
    questions: examQuestions,
    current: 0,
    correct: 0,
    answered: false,
    unitResults: {}
  };
  UNITS_DATA.forEach(u => {
    window._finalExamState.unitResults[u.id] = { title: u.title, correct: 0, total: 0 };
  });

  document.querySelector('.final-hero').style.display = 'none';
  renderFinalQuestion();
}

function renderFinalQuestion() {
  const state = window._finalExamState;
  if (state.current >= state.questions.length) {
    renderFinalComplete();
    return;
  }

  const q = state.questions[state.current];
  const total = state.questions.length;
  const curr = state.current + 1;
  const pct = Math.round(((curr - 1) / total) * 100);

  const optionsHTML = Object.entries(q.options).map(([letter, text]) => `
    <button class="quiz-option" id="fopt-${letter}" onclick="answerFinal('${letter}')">
      <div class="option-letter">${letter}</div>
      <div class="option-text">${escapeHTML(text)}</div>
    </button>`).join('');

  document.getElementById('final-exam-area').innerHTML = `
    <div class="quiz-progress" style="margin-bottom:20px">
      <div class="quiz-progress-header">
        <div class="quiz-progress-label">Question <span>${curr}</span> of <span>${total}</span></div>
        <div class="quiz-progress-label" style="font-size:12px;color:var(--text-muted)">Unit ${q._unitId}: ${q._unitTitle}</div>
      </div>
      <div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${pct}%"></div></div>
    </div>
    <div class="quiz-question-card">
      <div class="quiz-question-num">Question ${curr} · Unit ${q._unitId}</div>
      <div class="quiz-question-text">${escapeHTML(q.q)}</div>
    </div>
    <div class="quiz-options" id="final-options">${optionsHTML}</div>
    <div id="final-feedback"></div>`;
}

function answerFinal(selected) {
  const state = window._finalExamState;
  if (state.answered) return;
  state.answered = true;

  const q = state.questions[state.current];
  const correct = q.answer;
  const isCorrect = selected === correct;

  if (isCorrect) state.correct++;
  state.unitResults[q._unitId].total++;
  if (isCorrect) state.unitResults[q._unitId].correct++;

  document.querySelectorAll('.quiz-option').forEach(btn => {
    const letter = btn.id.replace('fopt-', '');
    if (letter === correct) btn.classList.add('correct');
    else if (letter === selected && !isCorrect) btn.classList.add('incorrect');
    else btn.classList.add('dimmed');
    btn.disabled = true;
  });

  const feedback = document.getElementById('final-feedback');
  let html = '';
  if (!isCorrect) {
    html += `<div class="quiz-explanation">
      <div class="quiz-explanation-label">Explanation</div>
      <div class="quiz-explanation-text">${escapeHTML(q.explanation)}</div>
    </div>`;
  }
  html += `<button class="quiz-next-btn" onclick="nextFinalQuestion()">
    ${state.current < state.questions.length - 1 ? 'Next Question →' : 'See Results →'}
  </button>`;
  feedback.innerHTML = html;
}

function nextFinalQuestion() {
  const state = window._finalExamState;
  state.current++;
  state.answered = false;
  renderFinalQuestion();
}

function renderFinalComplete() {
  const state = window._finalExamState;
  const total = state.questions.length;
  const correct = state.correct;
  const pct = Math.round((correct / total) * 100);

  const ringColor = pct >= 70 ? '#22C55E' : pct >= 50 ? '#C9A84C' : '#EF4444';
  const ring = makeRingSVG(pct, 140, 8, ringColor, 'rgba(255,255,255,0.07)');

  // Breakdown table
  let tableRows = '';
  UNITS_DATA.forEach(unit => {
    const r = state.unitResults[unit.id];
    if (!r || r.total === 0) return;
    const upct = Math.round((r.correct / r.total) * 100);
    const cls = upct >= 70 ? 'good' : upct >= 50 ? 'mid' : 'bad';
    tableRows += `<tr>
      <td style="color:var(--gold);font-weight:600">Unit ${unit.id}</td>
      <td style="color:var(--text)">${unit.title}</td>
      <td style="text-align:center">${r.correct}/${r.total}</td>
      <td class="breakdown-pct ${cls}" style="text-align:center">${upct}%</td>
    </tr>`;
  });

  // Weak units
  const weakUnits = UNITS_DATA.filter(unit => {
    const r = state.unitResults[unit.id];
    return r && r.total > 0 && (r.correct / r.total) < 0.5;
  });
  let weakHTML = '';
  if (weakUnits.length > 0) {
    const links = weakUnits.map(u =>
      `<span class="weak-unit-link" onclick="navigate('unit',${u.id})">Unit ${u.id}: ${u.title}</span>`
    ).join('');
    weakHTML = `<div class="weak-units">
      <h3>Study These Units</h3>
      <p style="font-size:13px;color:var(--text-muted);margin-bottom:12px">You scored below 50% in these units — review and retry:</p>
      <div class="weak-unit-links">${links}</div>
    </div>`;
  }

  document.getElementById('final-exam-area').innerHTML = `
    <div class="quiz-complete">
      <div class="complete-ring-container">${ring}
        <div class="complete-score-text">
          <div class="complete-pct">${pct}%</div>
          <div class="complete-label">Final Score</div>
        </div>
      </div>
      <h2 class="complete-title">${pct >= 70 ? 'Exam Ready!' : pct >= 50 ? 'Getting Close' : 'Keep Studying'}</h2>
      <p class="complete-subtitle">${correct} of ${total} questions correct across all 26 units</p>
      <div class="complete-stats">
        <div class="complete-stat">
          <span class="complete-stat-num green">${correct}</span>
          <span class="complete-stat-label">Correct</span>
        </div>
        <div class="complete-stat">
          <span class="complete-stat-num red">${total - correct}</span>
          <span class="complete-stat-label">Incorrect</span>
        </div>
        <div class="complete-stat">
          <span class="complete-stat-num" style="color:var(--gold)">${pct}%</span>
          <span class="complete-stat-label">Overall</span>
        </div>
      </div>
    </div>

    ${weakHTML}

    <div class="final-breakdown">
      <h3>Unit-by-Unit Breakdown</h3>
      <table class="breakdown-table">
        <thead>
          <tr>
            <th>Unit</th>
            <th>Topic</th>
            <th style="text-align:center">Score</th>
            <th style="text-align:center">%</th>
          </tr>
        </thead>
        <tbody>${tableRows}</tbody>
      </table>
    </div>

    <div style="text-align:center;margin-top:24px;display:flex;justify-content:center;gap:12px;flex-wrap:wrap">
      <button class="btn-outline" onclick="navigate('dashboard')">← Dashboard</button>
      <button class="btn-gold" onclick="renderFinalPage();setTimeout(startFinalExam,50)">Retake Exam</button>
    </div>`;
}

/* ============================================================
   UTILITIES
   ============================================================ */
function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function escapeHTML(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/* ============================================================
   ADMIN PAGE
   ============================================================ */
async function renderAdminPage() {
  setPage(`<div class="page"><div class="admin-loading"><div class="spinner-ring" style="width:36px;height:36px;border-width:3px"></div><p style="margin-top:16px;color:var(--text-muted)">Loading users…</p></div></div>`);

  const { data: profiles, error } = await supabaseClient
    .from('profiles')
    .select('*')
    .order('created_at', { ascending: false });

  if (error) {
    setPage(`<div class="page"><div class="admin-error">
      <p>⚠️ Could not load users.</p>
      <p style="font-size:13px;margin-top:8px;color:var(--text-muted)">${escapeHTML(error.message)}</p>
      <p style="font-size:12px;margin-top:8px;color:var(--text-muted)">Make sure you've run the SQL setup in your Supabase dashboard.</p>
    </div></div>`);
    return;
  }

  const total     = (profiles || []).length;
  const banned    = (profiles || []).filter(p => p.is_banned).length;
  const active    = total - banned;

  const rows = (profiles || []).map(p => {
    const isMe     = p.id === currentUser.id;
    const joined   = new Date(p.created_at).toLocaleDateString('en-US', { month:'short', day:'numeric', year:'numeric' });

    const statusBadge = p.is_admin
      ? `<span class="badge-admin">Admin</span>`
      : p.is_banned
        ? `<span class="badge-banned">Banned</span>`
        : `<span class="badge-active">Active</span>`;

    const actions = isMe
      ? `<span class="admin-you-badge">You</span>`
      : `<div class="admin-actions">
          ${p.is_banned
            ? `<button class="admin-btn unban-btn" onclick="adminSetBan('${p.id}',false)">Unban</button>`
            : `<button class="admin-btn ban-btn"   onclick="adminSetBan('${p.id}',true)">Ban</button>`}
          <button class="admin-btn reset-btn" onclick="adminSendReset('${escapeHTML(p.email)}')">Reset PW</button>
        </div>`;

    return `
      <tr class="${p.is_banned ? 'row-banned' : ''}">
        <td class="admin-email-cell">
          <div class="admin-email">${escapeHTML(p.email)}</div>
          <div class="admin-uid">ID: ${p.id.substring(0,8)}…</div>
        </td>
        <td class="admin-pw-cell">
          <span class="pw-secured" title="Passwords are bcrypt-hashed — unrecoverable by design">🔒 Secured</span>
        </td>
        <td>${statusBadge}</td>
        <td class="admin-date">${joined}</td>
        <td>${actions}</td>
      </tr>`;
  }).join('');

  setPage(`
    <div class="page">
      <div class="admin-header">
        <div>
          <div class="page-eyebrow">Admin Panel</div>
          <h1 class="page-title">User Management</h1>
          <p class="page-subtitle">${total} registered accounts</p>
        </div>
        <div class="admin-stat-chips">
          <div class="admin-chip">${active} <span>Active</span></div>
          <div class="admin-chip chip-banned">${banned} <span>Banned</span></div>
        </div>
      </div>

      <div class="admin-notice">
        🔒 <strong>Passwords are never stored in plain text.</strong>
        Supabase uses bcrypt hashing — no one, including you, can see a user's password.
        Use <em>Reset PW</em> to send them a reset email.
      </div>

      <div class="admin-table-wrap">
        <table class="admin-table">
          <thead>
            <tr>
              <th>Email</th>
              <th>Password</th>
              <th>Status</th>
              <th>Joined</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    </div>`);
}

async function adminSetBan(userId, banned) {
  const { error } = await supabaseClient
    .from('profiles')
    .update({ is_banned: banned })
    .eq('id', userId);
  if (error) { alert('Error: ' + error.message); return; }
  renderAdminPage();
}

async function adminSendReset(email) {
  if (!confirm(`Send a password reset email to ${email}?`)) return;
  const { error } = await supabaseClient.auth.resetPasswordForEmail(email, {
    redirectTo: window.location.origin
  });
  if (error) { alert('Error: ' + error.message); return; }
  alert(`Password reset email sent to ${email}`);
}

/* ============================================================
   BOOT
   ============================================================ */
document.addEventListener('DOMContentLoaded', () => {
  bootApp();
});
