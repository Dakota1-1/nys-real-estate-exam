const UNITS_DATA = [
  {
    id: 1,
    title: "License Law and Regulations",
    questions: [
      {
        q: "The salesperson's and broker's license must be renewed every",
        options: {A:"year.",B:"four years.",C:"third year.",D:"two years."},
        answer: "D",
        explanation: "Two years. The salesperson's license must be renewed every two years."
      },
      {
        q: "A person who wants to receive a salesperson's license must have completed a qualifying course of how many hours?",
        options: {A:"45",B:"75",C:"120",D:"22.5"},
        answer: "B",
        explanation: "75. A salesperson must take a 75-hour course."
      },
      {
        q: "All the following are requirements for obtaining a broker's license in New York EXCEPT",
        options: {A:"be a permanent resident of the United States.",B:"be 18 years old.",C:"have at least two full years' experience as a licensed salesperson.",D:"never have been convicted of a felony."},
        answer: "B",
        explanation: "The answer is be 18 years old. A broker must be at least 20 years of age and have at least two years' experience as a salesperson or three years' related experience."
      },
      {
        q: "Gloria Jones closed her real estate office and went to A. W. Smith & Co. as the office manager. She is neither a partner nor a corporate officer. She should be licensed as",
        options: {A:"an associate broker.",B:"a sponsoring broker.",C:"a salesperson.",D:"a broker."},
        answer: "A",
        explanation: "An associate broker. Gloria is an associate broker."
      },
      {
        q: "Broker Ben is a newly licensed real estate broker and a resident of New York. He lives and works in a town that borders Pennsylvania. For tax and marketing purposes, he wants to have his office located in a shopping center in Pennsylvania just across the border from his home. Is his plan permitted under New York's license law?",
        options: {A:"Yes, if Ben's principal place of residence is located within 5 miles of the state border",B:"Yes, if Ben posts a sign clearly indicating that he is licensed in the State of New York",C:"No, because New York licensees may not practice in other states",D:"No, because a licensed NYS real estate broker must maintain a principal place of business in New York"},
        answer: "D",
        explanation: "No, because a licensed NYS real estate broker must maintain a principal place of business in New York. A New York resident broker's principal place of business must be in New York."
      },
      {
        q: "How long must a broker keep documents relating to a transaction on file?",
        options: {A:"Six months",B:"One year",C:"Two years",D:"Three years"},
        answer: "D",
        explanation: "Three years. All documents must be kept on file for at least three years."
      },
      {
        q: "In New York, who is entitled to collect commission on the sale of real estate?",
        options: {A:"The supervising broker only",B:"Any associate broker",C:"Any salesperson",D:"The listing salesperson only"},
        answer: "A",
        explanation: "The supervising broker only. Only a supervising broker may collect a commission."
      },
      {
        q: "Which of the following is required for an advertisement for real property placed by a real estate broker?",
        options: {A:"The percentage commission split",B:"Clear identification as having been placed by a broker",C:"The license number of the salespersons supervised by the broker who may be involved",D:"The date the listing expires"},
        answer: "B",
        explanation: "Clear identification as having been placed by a broker. An ad must be identifiable as a \"broker\" ad. Posted ads stating \"broker\" or \"agent\" are allowed in NYS even if the name of the company does not appear in the ad."
      },
      {
        q: "A violation of New York's Article 12-A governing the real estate profession is, at minimum, considered to be",
        options: {A:"a felony.",B:"a legal error.",C:"a misdemeanor.",D:"a business offense."},
        answer: "C",
        explanation: "A misdemeanor. Violations of the laws, rules, and regulations are misdemeanors."
      },
      {
        q: "What is it called when brokers mix their personal accounts with deposited funds from their clients?",
        options: {A:"Commingling",B:"Extra service",C:"Agency accountability",D:"Net listing"},
        answer: "A",
        explanation: "Commingling. The correct term is commingling."
      },
      {
        q: "Broker blind ads that contain only a telephone number are",
        options: {A:"economical.",B:"institutional advertising.",C:"advisable.",D:"prohibited."},
        answer: "D",
        explanation: "Prohibited. Broker blind ads are prohibited."
      },
      {
        q: "Reciprocal licensing requires salespeople to",
        options: {A:"be licensed with a broker who has reciprocity with that state.",B:"take the licensing courses required by the state they wish reciprocity with.",C:"live in the state they want reciprocity with.",D:"file a certificate of entitlement."},
        answer: "A",
        explanation: "Be licensed with a broker who has reciprocity with that state. Reciprocal licensing requires the salesperson to be licensed with a broker who has reciprocity with that state."
      },
      {
        q: "The Department of State has the power to",
        options: {A:"bring criminal charges against an unlicensed broker.",B:"suspend, deny, or revoke any license it has granted.",C:"impose a fine of up to $10,000.",D:"terminate a license without a hearing."},
        answer: "B",
        explanation: "Suspend, deny, or revoke any license it has granted. The Department of State is the regulatory body that oversees real estate licenses. DOS powers are limited to regulation of licenses, imposition of a fine not exceeding $1,000, and the ability to initiate criminal charges for complaints regarding fair housing and antitrust violations. Licensees are entitled to a hearing before any action is determined."
      },
      {
        q: "What is escrow?",
        options: {A:"The holding of someone else's money, as in a trust account",B:"An activity permitted to attorneys only",C:"Disciplinary action of the Department of State",D:"Service performed by a mortgage broker"},
        answer: "A",
        explanation: "The holding of someone else's money, as in a trust account. An escrow account holds the funds deposited for the transaction."
      },
      {
        q: "An associate broker is",
        options: {A:"a partner in a real estate corporation.",B:"a salesperson with at least five years' experience.",C:"a licensed broker working in an office under the supervision of the broker who operates the office.",D:"a licensed broker who does not have an office and co-brokers all his deals with local brokers."},
        answer: "C",
        explanation: "A licensed broker working in an office under the supervision of the broker who operates the office. An associate broker is a licensed broker working in an office under the supervision of the broker who operates the office."
      },
      {
        q: "A real estate broker's license is required when",
        options: {A:"an attorney wants to hire and supervise real estate salespeople.",B:"an executor is appointed to dispose of real estate left in a will.",C:"a property manager working for a single owner signs leases in behalf of the owner.",D:"a city official is given the responsibility for finding tenants for city-owned offices."},
        answer: "A",
        explanation: "An attorney wants to hire and supervise real estate salespeople. A real estate broker's license is required when an attorney wants to hire and supervise real estate salespersons."
      },
      {
        q: "A broker decides that, in addition to his own office, he wants to open two branch offices. To be able to do this, he must",
        options: {A:"pay the DOS an additional $310 for two more brokers' licenses.",B:"hire two associate brokers to run the branch offices.",C:"have at least five years' experience operating his own office.",D:"find at least three licensed salespeople for each branch office."},
        answer: "A",
        explanation: "Pay the DOS an additional $300 for two more brokers' licenses. To be able to open two branch offices in addition to his own office, the broker must pay the DOS an additional $300 for two more brokers' licenses."
      },
      {
        q: "A real estate salesperson working with broker Bob decides that he wants to go to work for broker Charlie. The salesperson is required to",
        options: {A:"reimburse Bob for all office supplies he used while working in the office.",B:"have Bob file a termination with the DOS and have Charlie file a change of association with the DOS.",C:"submit a change-of-address card to the DOS.",D:"submit a change-of-association card to the DOS."},
        answer: "B",
        explanation: "Have Bob file a termination with the DOS and have Charlie file a change of association with the DOS."
      },
      {
        q: "The license fee for an apartment-sharing agent is",
        options: {A:"$100.",B:"$200.",C:"$300.",D:"$400."},
        answer: "D",
        explanation: "$400. The license fee for an apartment-sharing agent is $400."
      },
      {
        q: "To maintain an active real estate license, a licensee is required by the DOS to complete continuing education classes",
        options: {A:"until the licensee has at least 22.5 years experience.",B:"every two years before the license renewal.",C:"only for real estate salespeople.",D:"only for real estate salespeople who want to qualify for a broker's license."},
        answer: "B",
        explanation: "Every two years before the license renewal. The DOS requires the completion of continuing education classes every two years before the license renewal."
      },
    ]
  },
  {
    id: 2,
    title: "The Law of Agency",
    questions: [
      {
        q: "If a buyer retains a broker to represent him in locating real estate, the broker is the buyer's",
        options: {A:"principal.",B:"employer.",C:"agent.",D:"client."},
        answer: "C",
        explanation: "Agent. A broker who represents a buyer is the buyer's agent."
      },
      {
        q: "What is the relationship between a salesperson and the seller who is represented by the salesperson's supervising broker?",
        options: {A:"Independent contractor",B:"Subagent",C:"Agent",D:"Principal"},
        answer: "B",
        explanation: "Subagent. A salesperson is the broker's agent and seller's subagent."
      },
      {
        q: "Which of the following BEST defines the term special agent?",
        options: {A:"The transaction of some business or management of some affair on behalf of another",B:"Representing a principal in one specific transaction under detailed instructions",C:"The production of a ready, willing, and able buyer or a meeting of the minds in a real estate transaction",D:"The bringing together, for a fee or commission, of people who wish to buy, sell, exchange, or lease real estate"},
        answer: "B",
        explanation: "Representing a principal in one specific transaction under detailed instructions. Agency is representing a principal in one specific transaction under detailed instructions."
      },
      {
        q: "In a residential transaction, dual agency is permissible when",
        options: {A:"it is the only way a broker can collect a commission.",B:"the informed written consent of all parties has been given.",C:"the subagent wishes to purchase the property.",D:"the listing broker requires it."},
        answer: "B",
        explanation: "The informed written consent of all parties has been given. In residential transactions, dual agency is permissible when the informed written consent of all parties has been given."
      },
      {
        q: "The act of representing, or appearing to represent, the interests of both principals in the same transaction is called",
        options: {A:"fraud.",B:"self-dealing.",C:"dual agency.",D:"misrepresentation."},
        answer: "C",
        explanation: "Dual agency. Representing two principals in the same transaction is dual agency."
      },
      {
        q: "All of the following are characteristics of a ready, willing, and able buyer EXCEPT",
        options: {A:"prepared to buy on the seller's terms.",B:"ready to take positive steps toward the consummation of the transaction.",C:"willing to enter into a written representation agreement with a licensed broker.",D:"financially capable of making a purchase."},
        answer: "C",
        explanation: "Willing to enter into a written representation agreement with a licensed broker. Entering into an agency agreement is not a characteristic of a ready, willing, and able buyer."
      },
      {
        q: "A broker signs a listing agreement with the owner of Lofty Manor, under which she will receive a 6% commission. Two days later, the broker buys the property from the seller for the full listed price and collects her 6% commission. Which of the following terms BEST describes this transaction?",
        options: {A:"Kickback",B:"Self-dealing",C:"Agency coupled with an interest",D:"Fraud"},
        answer: "B",
        explanation: "Self-dealing. The broker is self-dealing."
      },
      {
        q: "An agent who has the authority to represent the principal in all matters that can be delegated is what kind of agent?",
        options: {A:"Special",B:"General",C:"Unlimited",D:"Universal"},
        answer: "D",
        explanation: "Universal. The statement defines a universal agent."
      },
      {
        q: "If a salesperson tells a prospective buyer about a very average property's \"lovely view,\" \"beautiful landscaping,\" and \"fine architecture,\" in what activity is the salesperson engaging?",
        options: {A:"Disclosure",B:"Ratification",C:"Self-dealing",D:"Puffing"},
        answer: "D",
        explanation: "Puffing. The salesperson is engaging in puffing, which are statements of opinion regarding the qualities of a property."
      },
      {
        q: "An agent who is authorized to represent the principal in one specific transaction under detailed instructions is which of the following kinds of agent?",
        options: {A:"Special",B:"General",C:"Limited",D:"Universal"},
        answer: "A",
        explanation: "Special. The statement defines the term special agent."
      },
      {
        q: "Compensation is ALWAYS",
        options: {A:"based on a percentage of the sales price.",B:"mutually negotiable.",C:"a set fee.",D:"paid by the seller."},
        answer: "B",
        explanation: "Mutually negotiable. Compensation is always mutually negotiable."
      },
      {
        q: "A salesperson is compensated by",
        options: {A:"the oil company who will pay a fee for the new buyer's name.",B:"the cooperating office.",C:"the seller's attorney.",D:"only his sponsoring broker."},
        answer: "D",
        explanation: "Only his sponsoring broker. A salesperson is compensated only by the broker."
      },
      {
        q: "A real estate agent usually acts as",
        options: {A:"a universal agent.",B:"a special agent.",C:"a general agent.",D:"a principal."},
        answer: "B",
        explanation: "A special agent. The real estate agent is usually asked to perform a specific duty with detailed instructions as a special agent."
      },
      {
        q: "The term accounting refers to",
        options: {A:"keeping a record of all personal expenditures.",B:"being prepared to account for all activities related to the transaction.",C:"reporting monetary expenses related to the transaction.",D:"the avoidance of commingling."},
        answer: "B",
        explanation: "Being prepared to account for all activities related to the transaction. Accountability for the entire transaction is required, monetary or otherwise."
      },
      {
        q: "The difference between client and customer is that",
        options: {A:"there is no difference; both terms mean the same thing.",B:"the client is owed fiduciary duties and the customer is owed honesty and fair dealing.",C:"the client is the seller and the buyer is the customer.",D:"the broker takes clients and the salesperson takes customers."},
        answer: "B",
        explanation: "The client is owed fiduciary duties and the customer is owed honesty and fair dealing."
      },
      {
        q: "Commission",
        options: {A:"is always a percentage of the purchase price.",B:"must be negotiated in writing.",C:"can never be a flat fee.",D:"is always negotiable between client and broker."},
        answer: "D",
        explanation: "Is always negotiable between client and broker. The commission can be a valuable item, flat fee, percentage of sale, or on a sliding scale, but it is always negotiable."
      },
      {
        q: "Specific fiduciary duties are",
        options: {A:"accounting, recording, listing, and marketing.",B:"accounting, confidentiality, loyalty, and care.",C:"advertising, marketing, negotiating, and agency disclosure.",D:"agency disclosure, feedback, advice, and counseling."},
        answer: "B",
        explanation: "Accounting, confidentiality, loyalty, and care. A client is owed accountability, confidentiality, loyalty, and care."
      },
      {
        q: "How should an agent handle the discovery of a problem with the property?",
        options: {A:"An agent needs to provide only the required agency disclosure form.",B:"Lead paint, agency, and property condition disclosures are required for clients only.",C:"If the problem is a material fact or condition, disclosure to both parties is mandatory, regardless of agency relationship.",D:"Disclosure is not advised if it jeopardizes a client's position."},
        answer: "C",
        explanation: "If the problem is a material fact or condition, disclosure to both parties is mandatory, regardless of agency relationship."
      },
      {
        q: "Undisclosed dual agency can be avoided if",
        options: {A:"a listing agent never cooperates with buyers' brokers.",B:"the buyer and the seller have given informed consent for the nature of representation.",C:"the agency disclosure is signed with one party to the transaction listed as a customer.",D:"all sales are handled in-house."},
        answer: "B",
        explanation: "The buyer and the seller have given informed consent for the nature of representation."
      },
      {
        q: "The fiduciary duty of confidentiality ends",
        options: {A:"at contract signing.",B:"when an offer is accepted.",C:"never.",D:"after title transfers."},
        answer: "C",
        explanation: "Never. The duty of confidentiality doesn't expire."
      },
    ]
  },
  {
    id: 3,
    title: "Agency Relationships and Disclosure",
    questions: [
      {
        q: "A New York real estate licensee may enter into any of the following types of listing agreements EXCEPT",
        options: {A:"open.",B:"single.",C:"net.",D:"exclusive agency."},
        answer: "C",
        explanation: "Net. Net listings are illegal in New York."
      },
      {
        q: "A single agent represents",
        options: {A:"a buyer or a seller, a landlord or a tenant.",B:"a buyer and a seller, if disclosed in writing.",C:"sellers only.",D:"one or more parties in a transaction."},
        answer: "A",
        explanation: "A buyer or a seller, a landlord or a tenant. A single agent represents either a buyer or a seller or a landlord or a tenant."
      },
      {
        q: "What must listing agents do before entering into a cooperative agreement creating a subagency?",
        options: {A:"Obtain the informed, written consent of all parties to the transaction",B:"Agree to a blanket unilateral offer of cooperation",C:"Ensure that they have signed an open listing agreement with the seller",D:"Obtain the informed consent of the seller"},
        answer: "D",
        explanation: "Obtain the informed consent of the seller. Listing agents should always obtain the informed consent of the seller before entering into a cooperative agreement that creates a subagency."
      },
      {
        q: "At what point are licensees required to disclose the nature of their representation to a potential buyer or seller?",
        options: {A:"At any time before closing",B:"Within 10 days of the first substantive contact",C:"At the time of the first substantive contact",D:"At various points; broker must disclose, salespeople not required to do so"},
        answer: "C",
        explanation: "At the time of the first substantive contact. Agents must disclose and obtain signed acknowledgments of their agency relationships at the time of the first substantive contact with a party."
      },
      {
        q: "Who may legally compensate a buyer's agent?",
        options: {A:"The seller only, from the proceeds of the sale, may legally compensate.",B:"The buyer and/or the seller may legally compensate.",C:"Only the buyer may compensate a buyer's agent.",D:"Buyer's agents are traditionally compensated by both principals to the transaction at the time of closing."},
        answer: "B",
        explanation: "The buyer and/or the seller may legally compensate. A buyer's agent may be compensated by either the buyer or the seller."
      },
      {
        q: "A seller's option to permit other brokers to participate in the sale without establishing a subagency relationship is",
        options: {A:"a blanket unilateral offer of subagency.",B:"an exclusive-agency listing agreement.",C:"a simple offer of cooperation.",D:"an implied creation of subagency."},
        answer: "C",
        explanation: "A simple offer of cooperation. The statement defines a simple offer of cooperation."
      },
      {
        q: "The preferred form of buyer-agency agreement is",
        options: {A:"an implied buyer agency.",B:"an exclusive right to represent.",C:"an exclusive agency agreement.",D:"an exclusive right-to-purchase agency agreement."},
        answer: "B",
        explanation: "An exclusive right to represent. An exclusive right to represent is the most common form of buyer agency."
      },
      {
        q: "In-house sales, cooperating brokers who are buyer's agents, and broker or salesperson self-dealing all pose a serious risk of",
        options: {A:"implied subagency.",B:"undisclosed dual agency.",C:"net listings.",D:"single agency."},
        answer: "B",
        explanation: "Undisclosed dual agency. The example illustrates circumstances that may give rise to undisclosed dual agency situations."
      },
      {
        q: "By which of the following listing agreements is the broker offered the LEAST protection?",
        options: {A:"Open",B:"Exclusive right to sell",C:"Exclusive agency",D:"Dual agency"},
        answer: "A",
        explanation: "Open. An open listing offers a broker the least protection because it applies the fewest restrictions on the seller."
      },
      {
        q: "A broker signs a listing agreement with a seller and a buyer agency agreement with a prospective purchaser. Both the seller and the prospective buyer sign written disclosure statements agreeing to this arrangement. What is this type of relationship called?",
        options: {A:"Disclosed subagency",B:"Disclosed single agency",C:"Disclosed dual agency",D:"Dual exclusive agency"},
        answer: "C",
        explanation: "Disclosed dual agency. The example defines disclosed dual agency."
      },
      {
        q: "If the buyer is represented by a buyer's agent, the buyer's financial condition",
        options: {A:"should be a confidential matter.",B:"is a material fact needed by the seller and must be disclosed to the seller.",C:"should be discussed only by the attorneys preparing the contract.",D:"is immaterial."},
        answer: "B",
        explanation: "Is a material fact needed by the seller and must be disclosed to the seller."
      },
      {
        q: "A broker is not liable for material defects he did not notice.",
        options: {A:"The statement is incorrect—a broker and his agents are required to perform due diligence.",B:"The statement is correct—a broker is not liable for unknown material defects.",C:"The statement is correct—only the engineer can disclose defects.",D:"The statement is correct—if the seller forbids disclosure, the broker must comply."},
        answer: "A",
        explanation: "The statement is incorrect—a broker and his agents are required to perform due diligence."
      },
      {
        q: "The first substantive contact occurs when",
        options: {A:"the buyer presents an offer.",B:"the seller accepts the offer.",C:"the office's internet site is looked at.",D:"the buyer or the seller first meet with the agent to discuss motivation or value."},
        answer: "D",
        explanation: "The buyer or the seller first meet with the agent to discuss motivation or value. First substantive contact occurs when the buyers walk into the agent's office and begins to discuss their needs or financial situation."
      },
      {
        q: "A broker specifically retained to represent the buyer is considered the buyer's",
        options: {A:"customer.",B:"facilitator.",C:"client.",D:"agent."},
        answer: "D",
        explanation: "Agent. Representation is a fiduciary duty that can only be given to an agent."
      },
      {
        q: "Dual agency",
        options: {A:"is forbidden in New York.",B:"is not encouraged by the New York DOS.",C:"occurs with each in-house transaction.",D:"is the best way for an agent to represent clients."},
        answer: "B",
        explanation: "Is not encouraged by the New York DOS. Dual agency is not easy to perform fairly, so the DOS discourages but does not actually prohibit dual agency."
      },
      {
        q: "In NYS, all written residential listing agreements must contain which of the following definitions?",
        options: {A:"MLS, exclusive right to represent, property condition",B:"Exclusive right to sell, agency choices, MLS rules",C:"Exclusive right to sell, exclusive agency, open listing",D:"Exclusive pocket listing, exclusive right to represent"},
        answer: "C",
        explanation: "Exclusive right to sell, exclusive agency, open listing. Article 12-A requires the legal definitions to ensure consumer choice."
      },
      {
        q: "Which of the following does NOT terminate a listing?",
        options: {A:"The sale of the property",B:"The broker filing for bankruptcy",C:"The destruction of the property by fire",D:"The fact that the only customers who see the property are brought by other brokers"},
        answer: "D",
        explanation: "The fact that the only customers who see the property are brought by other brokers. Finding a set number of customers has no effect on the validity of a listing."
      },
      {
        q: "When listing residential property, why would informed consent of the seller be needed to extend an offer of cooperation to the MLS?",
        options: {A:"A submission to MLS carries inherent risk to the seller (e.g., potential misrepresentation, vicarious liability).",B:"This is a general MLS rule to ensure the seller's agreement to pay a commission.",C:"Seller consent is not necessary.",D:"The buyer's agents need assurances that the listing is bona fide and that the seller actually owns the property."},
        answer: "A",
        explanation: "A submission to MLS carries inherent risk to the seller (e.g., potential misrepresentation, vicarious liability). All principals need informed consent in order to make a rational decision about dealing with cooperating brokers and whether or not to offer subagency."
      },
      {
        q: "Vicarious liability is",
        options: {A:"an archaic term that no longer should be disclosed.",B:"another term for misrepresentation.",C:"the agent's liability when an attorney is not used.",D:"the employer's or client's responsibility for certain acts of an employee or agent."},
        answer: "D",
        explanation: "The employer's or client's responsibility for certain acts of an employee or agent. Clients are responsible for the misdeeds of their agents and subagents as they pertain to the real estate transaction."
      },
      {
        q: "The Property Condition Disclosure Statement",
        options: {A:"must be filled out by the agent.",B:"must be filled out by the seller's attorney.",C:"is required by law.",D:"is the seller's option."},
        answer: "C",
        explanation: "Is required by law. The seller may not waive the statement, nor is it considered an option; it is required by law."
      },
    ]
  },
  {
    id: 4,
    title: "Estates and Interests",
    questions: [
      {
        q: "Which of the following includes both permanently attached, man-made improvements and the bundle of legal rights?",
        options: {A:"Land",B:"Real estate",C:"Real property",D:"Chattels"},
        answer: "C",
        explanation: "Real property. The statement defines real property."
      },
      {
        q: "A property owner sold the rights to oil or natural gas deposits to a refining company and sold the right to grow soybeans to a farmer. Which of the following correctly states the ownership rights involved under these facts?",
        options: {A:"The refining company owns the land, and the farmer owns the real estate.",B:"The refining company owns the subsurface rights, and the farmer owns the surface rights.",C:"The owner no longer holds legal interest in the property.",D:"The farmer automatically acquires the air rights along with the right to farm the land."},
        answer: "B",
        explanation: "The refining company owns the subsurface rights, and the farmer owns the surface rights. The surface and subsurface rights to property may be held by different owners."
      },
      {
        q: "If a parcel lies adjacent to a creek that is no more than 3 inches deep at its deepest point, what is the extent of the owner's rights to the waterway?",
        options: {A:"He owns the creek to the high-water mark, but the bed belongs to the State of New York.",B:"She holds littoral rights to the high-water mark.",C:"He has riparian rights to the creek bed only.",D:"She has riparian rights to the middle of the waterway."},
        answer: "D",
        explanation: "She has riparian rights to the middle of the waterway. An owner has riparian rights to the middle of a nonnavigable waterway."
      },
      {
        q: "Personal property installed by a tenant for a business purpose is classified as",
        options: {A:"a trade fixture.",B:"a leasehold estate.",C:"a chattel fixture.",D:"a leasehold fixture."},
        answer: "A",
        explanation: "A trade fixture. The statement defines a trade fixture."
      },
      {
        q: "Severalty of ownership is",
        options: {A:"many owners.",B:"a married couple.",C:"granted through foreclosure.",D:"sole ownership."},
        answer: "D",
        explanation: "Sole ownership. Severalty of ownership is sole ownership."
      },
      {
        q: "Under which form of ownership must the four unities exist?",
        options: {A:"Severalty",B:"Tenancy in common",C:"Joint tenancy",D:"Tenancy by the entirety"},
        answer: "C",
        explanation: "Joint tenancy."
      },
      {
        q: "A form of ownership that is limited to property acquired by a married couple in New York is",
        options: {A:"joint tenancy.",B:"tenancy by the entirety.",C:"tenancy in common.",D:"community property."},
        answer: "B",
        explanation: "Tenancy by the entirety. The statement defines tenancy by the entirety; New York is not a community property state."
      },
      {
        q: "A joint venture organized for a single project is a common type of",
        options: {A:"syndicate.",B:"partnership.",C:"limited liability company.",D:"corporation."},
        answer: "A",
        explanation: "Syndicate. The statement defines a type of syndicate."
      },
      {
        q: "An owner has a share in the corporation that holds title to his apartment building and a long-term lease to his living unit. What type of ownership is this?",
        options: {A:"Condominium",B:"Cooperative",C:"Tenancy in common",D:"Time-share"},
        answer: "B",
        explanation: "Cooperative. The statement defines cooperative ownership."
      },
      {
        q: "Property such as household goods is called",
        options: {A:"emblements.",B:"real estate.",C:"chattels.",D:"trade fixtures."},
        answer: "C",
        explanation: "Chattels. The statement is an example of chattels."
      },
      {
        q: "The concept of land ownership that includes all rights to the land is called",
        options: {A:"the bill of rights.",B:"the right-of-way.",C:"the riparian rights.",D:"the bundle of legal rights."},
        answer: "D",
        explanation: "The bundle of legal rights. The bundle of legal rights includes possession, control, and quiet enjoyment."
      },
      {
        q: "In a condominium, what are the areas held by all the owners called?",
        options: {A:"Air rights",B:"Common elements",C:"Individual garage units",D:"Schools and other public facilities"},
        answer: "B",
        explanation: "Common elements. Common elements such as sidewalks and staircases are owned by all the condominium owners."
      },
      {
        q: "The main difference between a condominium and a cooperative is in",
        options: {A:"its size.",B:"its architectural form.",C:"the ownership structure.",D:"the common areas."},
        answer: "C",
        explanation: "The ownership structure. Condominiums are deeded units, while cooperatives are individually leased with ownership consisting of shares of the corporation."
      },
      {
        q: "A gift of real property by will is considered",
        options: {A:"a bequest.",B:"a gift.",C:"a devise.",D:"a grant."},
        answer: "C",
        explanation: "A devise. Devise and bequest are similar, but the term devise specifically refers to real estate."
      },
      {
        q: "Emblements are usually found on",
        options: {A:"industrial real estate.",B:"agricultural real estate.",C:"commercial real estate.",D:"special-purpose real estate."},
        answer: "B",
        explanation: "Agricultural real estate. Emblements are usually annual crops and are considered personal property."
      },
      {
        q: "An example of a fixture would be",
        options: {A:"window treatments.",B:"a refrigerator.",C:"electric sconces.",D:"porch furniture."},
        answer: "C",
        explanation: "Electric sconces. Because electric sconces are wired to the building's electrical system and are permanently attached, they are considered fixtures."
      },
      {
        q: "Which of the following is NOT a form of ownership?",
        options: {A:"Corporation",B:"Remainder interest",C:"Reversionary interest",D:"Severalty"},
        answer: "A",
        explanation: "Corporation. A corporation is simply the creation of an \"unnatural person\" usually having the same rights and responsibilities of an individual. A corporation can own property, but in and of itself it is not a form of ownership."
      },
      {
        q: "Evidence of ownership is called",
        options: {A:"the deed.",B:"a contract.",C:"title.",D:"interest."},
        answer: "C",
        explanation: "Title. The deed transfers whatever interest the grantor had in the property but is not evidence of ownership. Proof of ownership is called title, sometimes known as clear title."
      },
      {
        q: "A real estate trust is",
        options: {A:"an ownership in severalty.",B:"a gentleman's agreement.",C:"a management account.",D:"a fiduciary arrangement where property is conveyed to one person (trustee) to be administered and held for another (beneficiary)."},
        answer: "D",
        explanation: "A fiduciary arrangement where property is conveyed to one person (trustee) to be administered and held for another (beneficiary)."
      },
      {
        q: "What are the four unities required to create a joint tenancy?",
        options: {A:"Interest, possession, time, and title",B:"Interest, possession, inheritance, and deed",C:"Deed, ownership, time, and inheritance",D:"Time, title, proprietorship, and trust"},
        answer: "A",
        explanation: "Interest, possession, time, and title. Because of the right of survivorship, proper creation of a joint tenancy is vital. Owners must have identical and equal shares acquired at the same time by the same deed."
      },
    ]
  },
  {
    id: 5,
    title: "Liens and Easements",
    questions: [
      {
        q: "When does a creditor's judgment become a lien on the debtor's real property?",
        options: {A:"At the time the suit is filed",B:"When the judgment is docketed",C:"When the foreclosure sale is ordered",D:"When a lis pendens is filed"},
        answer: "B",
        explanation: "When the judgment is docketed. A judgment becomes a lien when it is docketed."
      },
      {
        q: "A vendor's lien is",
        options: {A:"a seller's claim against a purchaser under an installment contract for failure to convey title.",B:"a purchaser's claim against a seller under an installment contract.",C:"a seller's claim against a purchaser.",D:"a purchaser's claim against a vendee."},
        answer: "C",
        explanation: "A seller's claim against a purchaser. A vendor's lien is a seller's claim against a purchaser who has not paid."
      },
      {
        q: "In an easement appurtenant, the tract that is benefited is called",
        options: {A:"the servient estate.",B:"the dominant estate.",C:"the gross estate.",D:"the encumbered estate."},
        answer: "B",
        explanation: "The dominant estate. The dominant tenement is benefited."
      },
      {
        q: "Temporary permission to enter another's property for a specific purpose is",
        options: {A:"an easement.",B:"an encumbrance.",C:"a permissive estate.",D:"a license."},
        answer: "D",
        explanation: "A license. The statement defines license."
      },
      {
        q: "All of the following are true of an easement appurtenant EXCEPT",
        options: {A:"it is a permanent right.",B:"it involves adjacent parcels.",C:"the easement conveys with the land.",D:"it attaches personally to the easement owner."},
        answer: "D",
        explanation: "It attaches personally to the easement owner. Personal attachment is an element of an easement in gross."
      },
      {
        q: "A wall or a fence that unlawfully extends onto an adjacent owner's property is",
        options: {A:"an easement in gross.",B:"an encroachment.",C:"an involuntary lien.",D:"an easement by necessity."},
        answer: "B",
        explanation: "An encroachment. The statement is an example of an encroachment."
      },
      {
        q: "Which type of easement may be acquired through the continuous, open, uninterrupted, exclusive, and adverse use of a property for a certain period?",
        options: {A:"Easement by prescription",B:"Easement in gross",C:"Easement by necessity",D:"Easement appurtenant"},
        answer: "A",
        explanation: "Easement by prescription. The statement defines easement by prescription."
      },
      {
        q: "A creditor who voluntarily accepts a later priority position in favor of another creditor has probably entered into",
        options: {A:"a voluntary lien.",B:"a lis pendens.",C:"a subordination agreement.",D:"a specific lien agreement."},
        answer: "C",
        explanation: "A subordination agreement. The facts describe a subordination agreement."
      },
      {
        q: "What is the principal requirement of a federal estate tax lien and a state inheritance tax lien?",
        options: {A:"The property must not be subject to deed restrictions.",B:"The property must be sold at a foreclosure sale.",C:"The owner must be deceased.",D:"The owner must voluntarily create the lien."},
        answer: "C",
        explanation: "The owner must be deceased. Estate and inheritance taxes are on the property of a deceased owner."
      },
      {
        q: "Which of the following liens depends on value having been added to the real estate involved?",
        options: {A:"Mechanic's lien",B:"Tax lien",C:"Judgment lien",D:"Mortgage lien"},
        answer: "A",
        explanation: "Mechanic's lien. The statement describes a mechanic's lien."
      },
      {
        q: "The actual, open, notorious, hostile, and continuous use of another's land under a claim of title is called",
        options: {A:"a quitclaim deed.",B:"an encumbrance.",C:"an easement by necessity.",D:"adverse possession."},
        answer: "D",
        explanation: "Adverse possession. The actual, open, notorious, hostile, and continuous use of another's land under a claim of title is called adverse possession. All the conditions described above must be in effect for a minimum of 10 years to be able to enforce the claim in court."
      },
      {
        q: "An affidavit of entitlement to commission is",
        options: {A:"a public notice that a commission is due on the property.",B:"a lien.",C:"a judgment.",D:"a commission guarantee."},
        answer: "A",
        explanation: "A public notice that a commission is due on the property. An affidavit is simply a public notice of entitlement and not a lien or a guarantee of payment."
      },
      {
        q: "Which of the following is NOT a cloud on title?",
        options: {A:"Tax lien",B:"Lis pendens",C:"Judgment",D:"Affidavit of entitlement"},
        answer: "D",
        explanation: "Affidavit of entitlement. A filed affidavit will not affect the title."
      },
      {
        q: "A general term for a claim by a nonowner that may diminish the value of the property is called",
        options: {A:"an encroachment.",B:"a right-of-way.",C:"a voluntary lien.",D:"an encumbrance."},
        answer: "D",
        explanation: "An encumbrance. An encumbrance includes anything that reduces value, such as certain types of liens or easements."
      },
      {
        q: "A property that has the right to use an easement over another person's property for a specific purpose is called",
        options: {A:"an easement by grant.",B:"an encroachment.",C:"a servient estate.",D:"a dominant estate."},
        answer: "D",
        explanation: "A dominant estate. One property owner (dominant) is allowed some specific use of another's property (servient). A right-of-way or an easement is owned by a dominant estate."
      },
      {
        q: "In a foreclosure sale, which of the following types of lien would have priority over all others?",
        options: {A:"Mortgage lien",B:"Mechanic's lien",C:"Property tax lien",D:"General lien"},
        answer: "C",
        explanation: "Property tax lien. The government always has first priority so the tax lien would have priority over all other liens."
      },
      {
        q: "Which of the following is a voluntary lien?",
        options: {A:"Mechanic's lien",B:"Mortgage lien",C:"Tax lien",D:"General lien"},
        answer: "B",
        explanation: "Mortgage lien. A mortgage lien is always given with the owner's consent."
      },
      {
        q: "A wall that is located at or on a boundary line and is used by both owners is called",
        options: {A:"a common wall.",B:"an encroachment.",C:"a right-of-way.",D:"a party wall."},
        answer: "D",
        explanation: "A party wall. The wall is called a party wall and is owned by both owners. Therefore, both parties are responsible for its upkeep."
      },
      {
        q: "An example of a license for the use of land would be",
        options: {A:"permission for a farmer to raise a crop on it.",B:"residential development.",C:"eminent domain.",D:"utility lines."},
        answer: "A",
        explanation: "Permission for a farmer to raise a crop on it. A license is not permanent. The farmer would be allowed to use the land but has no ownership rights."
      },
      {
        q: "In order to establish a property lien, one must first obtain",
        options: {A:"an easement.",B:"a lis pendens.",C:"a judgment.",D:"a deed restriction."},
        answer: "C",
        explanation: "A judgment. A judgment is a court order enforcing the lien."
      },
    ]
  },
  {
    id: 6,
    title: "Real Estate Instruments: Deeds",
    questions: [
      {
        q: "Which of the following methods of legal description uses monuments and a point of beginning?",
        options: {A:"Rectangular (government) survey",B:"Metes-and-bounds description",C:"Recorded plat of subdivision",D:"Geodetic survey"},
        answer: "B",
        explanation: "Metes-and-bounds description. A metes-and-bounds description uses monuments and a point of beginning."
      },
      {
        q: "A referee's deed contains",
        options: {A:"full covenant and warranties.",B:"only warranties.",C:"no covenants or warranties.",D:"title guarantees."},
        answer: "C",
        explanation: "No covenants or warranties. A referee's deed contains no covenants or warranties."
      },
      {
        q: "Which of the following is used to compute vertical elevations for air lots and condominium descriptions?",
        options: {A:"Rectangular (government) survey",B:"Metes-and-bounds description",C:"Recorded plat of subdivision",D:"Geodetic survey"},
        answer: "D",
        explanation: "Geodetic survey. The geodetic survey is used to compute vertical elevations."
      },
      {
        q: "The property of an owner who dies without leaving a will is conveyed by the law of",
        options: {A:"testamentary succession.",B:"reference to a plat.",C:"delivery.",D:"intestacy."},
        answer: "D",
        explanation: "Intestacy. The law of intestacy governs the property of a person who dies without leaving a will."
      },
      {
        q: "All of the following are requirements for a valid deed EXCEPT",
        options: {A:"an identifiable grantee.",B:"recital of consideration.",C:"a granting clause.",D:"recital of warranties and covenants."},
        answer: "D",
        explanation: "Recital of warranties and covenants. Recital of warranties and covenants is not necessary to a valid deed."
      },
      {
        q: "Which of the following deeds provides a grantee with the greatest protection?",
        options: {A:"General warranty",B:"Bargain and sale",C:"Quitclaim",D:"Full covenant and warranty"},
        answer: "D",
        explanation: "Full covenant and warranty. A full covenant and warranty deed offers the most protection."
      },
      {
        q: "A deed in which the grantor guarantees title against defects arising only during the period of his ownership is what type of deed?",
        options: {A:"General warranty",B:"Bargain and sale with covenant",C:"Quitclaim",D:"Special warranty"},
        answer: "B",
        explanation: "Bargain and sale with covenant. The statement defines bargain and sale with covenant."
      },
      {
        q: "Which of the following deeds provides a grantee with the LEAST protection?",
        options: {A:"General warranty",B:"Bargain and sale",C:"Quitclaim",D:"Special warranty"},
        answer: "C",
        explanation: "Quitclaim. A quitclaim deed provides the least protection."
      },
      {
        q: "How many acres are in one square mile?",
        options: {A:"6",B:"36",C:"64",D:"640"},
        answer: "D",
        explanation: "640. There are 640 acres in one square mile."
      },
      {
        q: "Which of the following deeds carries no warranties but implies that the grantor holds title?",
        options: {A:"General warranty",B:"Quitclaim",C:"Bargain and sale",D:"Bargain and sale with covenant"},
        answer: "C",
        explanation: "Bargain and sale. A bargain and sale deed carries no warranties but implies the grantor holds title."
      },
      {
        q: "Real estate can be gained or lost by the action of water, a process known as",
        options: {A:"accession and accretion.",B:"dedication.",C:"seisin and conveyance.",D:"alluvion or avulsion."},
        answer: "D",
        explanation: "Alluvion or avulsion. The flow of water downstream collects sediment and soil that is eventually deposited as alluvion. Land that is worn away is called avulsion."
      },
      {
        q: "Deed restrictions that prohibit future sale to a particular ethnic group are",
        options: {A:"enforceable.",B:"unenforceable.",C:"illegal.",D:"unenforceable with certain exceptions."},
        answer: "B",
        explanation: "Unenforceable. Deed restrictions that inhibit the free transfer of real property are generally unenforceable."
      },
      {
        q: "When property reverts to the state because of the decedent's lack of a will or heirs, the process is called",
        options: {A:"escheat.",B:"devise.",C:"covenant.",D:"eminent domain."},
        answer: "A",
        explanation: "Escheat. When an individual dies intestate with no heir, the property escheats (reverts to the state)."
      },
      {
        q: "When does title pass?",
        options: {A:"When the contract is signed",B:"When the deed is signed by the grantor",C:"When there is delivery and acceptance of the deed",D:"When probate is settled."},
        answer: "C",
        explanation: "When there is delivery and acceptance of the deed. Title is conveyed when the grantor delivers and the grantee accepts the deed (\"signed, sealed, and delivered\")."
      },
      {
        q: "A purchaser of real estate at a foreclosure auction will receive a referee's deed, which is equivalent to",
        options: {A:"a quitclaim deed.",B:"a full covenant and warranty deed.",C:"a bargain and sale deed without covenants.",D:"a bargain and sale deed with covenants."},
        answer: "C",
        explanation: "A bargain and sale deed without covenants."
      },
      {
        q: "An acceptable legal description is",
        options: {A:"an exact street address.",B:"the property tax account number.",C:"an updated listing of buildings on the property.",D:"a description complete enough for a surveyor to identify the parcel."},
        answer: "D",
        explanation: "A description complete enough for a surveyor to identify the parcel."
      },
      {
        q: "When a testator dies, who is usually required to bring the will through probate?",
        options: {A:"Attorney-in-fact",B:"Devisor",C:"Executor",D:"Heirs"},
        answer: "C",
        explanation: "Executor. If the decedent appoints an executor, that person will satisfy the conditions and distributions set out in the will."
      },
      {
        q: "In a metes-and-bounds description, the starting point is called",
        options: {A:"the plat.",B:"the benchmark.",C:"the rectangular survey.",D:"the place of beginning."},
        answer: "D",
        explanation: "The place of beginning. The place of beginning (POB) is the corner of the property considered the starting point."
      },
      {
        q: "What is a plat?",
        options: {A:"A local description of a parcel of real estate",B:"The satellite view of the parcel",C:"A map showing the specific boundaries of the town or community",D:"A map of subdivided land"},
        answer: "D",
        explanation: "A map of subdivided land. A plat map shows the various lots in a subdivision. In NYS, almost all assessors' offices will have plat maps."
      },
      {
        q: "Seisin is an old legal term for",
        options: {A:"adverse possession.",B:"ownership.",C:"an estate for life.",D:"eminent domain."},
        answer: "B",
        explanation: "Ownership. Seisin indicates the ownership and possession of land."
      },
    ]
  },
  {
    id: 7,
    title: "Real Estate Instruments: Leases",
    questions: [
      {
        q: "A leasehold estate that runs for an indefinite period creates",
        options: {A:"an estate for years.",B:"a periodic estate.",C:"a tenancy at sufferance.",D:"a gross lease."},
        answer: "B",
        explanation: "A periodic estate. A periodic lease runs for an indefinite period."
      },
      {
        q: "All of the following are requirements for a valid lease of one year or less EXCEPT",
        options: {A:"a demising clause.",B:"a description of the premises.",C:"a written document.",D:"a statement of terms."},
        answer: "C",
        explanation: "A written document. Only leases for more than one year must be in writing."
      },
      {
        q: "In New York, an oral lease is valid if it is for a period of",
        options: {A:"one year or less.",B:"one year or more.",C:"three years or less.",D:"none of these; oral leases are invalid."},
        answer: "A",
        explanation: "One year or less. An oral lease is valid if it is for a term of less than one year."
      },
      {
        q: "New York requires that owners hold tenants' security deposits in an interest-bearing New York bank account if they own how many residential units?",
        options: {A:"Three",B:"Four or more",C:"Five or fewer",D:"Six or more"},
        answer: "D",
        explanation: "Six or more. The security deposit requirement applies only to owners of six or more units."
      },
      {
        q: "All of the following events will terminate a lease EXCEPT",
        options: {A:"death of the tenant.",B:"expiration of the lease period.",C:"breach of a lease term.",D:"mutual agreement of the parties."},
        answer: "A",
        explanation: "Death of the tenant. A tenant's death does not terminate the lease."
      },
      {
        q: "The physical removal of a defaulted tenant from rental property is called",
        options: {A:"constructive eviction.",B:"tenancy at sufferance.",C:"actual eviction.",D:"breach of lease."},
        answer: "C",
        explanation: "Actual eviction. The statement defines actual eviction."
      },
      {
        q: "A week-to-week lease is an example of",
        options: {A:"a ground lease.",B:"a periodic estate.",C:"an estate for years.",D:"a tenancy at will."},
        answer: "B",
        explanation: "A periodic estate. The example illustrates a periodic lease."
      },
      {
        q: "A lease in which the landlord pays all property charges and the tenant pays only periodic rent is",
        options: {A:"a gross lease.",B:"a net lease.",C:"a percentage lease.",D:"a ground lease."},
        answer: "A",
        explanation: "A gross lease. The statement defines a gross lease."
      },
      {
        q: "A commercial lease in which the periodic rental is partially based on the tenant's gross sales is",
        options: {A:"a gross lease.",B:"a net lease.",C:"a percentage lease.",D:"a ground lease."},
        answer: "C",
        explanation: "A percentage lease. The statement defines a percentage lease."
      },
      {
        q: "A lease in which the tenant pays a fixed monthly rental, as well as a percentage of maintenance costs, property tax, and insurance, is",
        options: {A:"a gross lease.",B:"a net lease.",C:"a percentage lease.",D:"a ground lease."},
        answer: "B",
        explanation: "A net lease. The example illustrates a net lease."
      },
      {
        q: "The difference between actual and constructive eviction is",
        options: {A:"the landlord needs to go to court for an actual eviction but not a constructive eviction.",B:"nothing; there is no difference.",C:"in an actual eviction, the tenant is not liable for the defaulted or future rent.",D:"in an actual eviction, the tenant is forced to vacate the premises, whereas in a constructive eviction, lack of repairs or required landlord services allow the tenant to break the lease and vacate without being liable for further rent payments."},
        answer: "D",
        explanation: "In an actual eviction, the tenant is forced to vacate the premises, whereas in a constructive eviction, lack of repairs or required landlord services allow the tenant to break the lease and vacate without being liable for further rent payments."
      },
      {
        q: "An estate for years is",
        options: {A:"one that provides for changes based on economic conditions.",B:"a long-term lease of land only.",C:"the lease given to the owner of a co-op apartment.",D:"a lease agreement for a specific period."},
        answer: "D",
        explanation: "A lease agreement for a specific period. Although it is called a lease for years, the term estate for years actually applies to a lease that will end at a specific time."
      },
      {
        q: "The statute of frauds applies to",
        options: {A:"felony offenses.",B:"misrepresentation.",C:"real estate contracts.",D:"the length of time one has to file a complaint against an agent."},
        answer: "C",
        explanation: "Real estate contracts. The statute of frauds applies to certain contracts. The statute mandates that in order to be enforceable, a contract for the sale of real estate or for a lease of one year or more must be in writing."
      },
      {
        q: "Quiet enjoyment is",
        options: {A:"a landlord's promise that the tenant's occupancy will not be challenged.",B:"a requirement that tenants with disabilities be allowed to have service dogs.",C:"a clause that restricts the tenant from participating in noisy activities.",D:"a New York City rent-control requirement that is being phased out."},
        answer: "A",
        explanation: "A landlord's promise that the tenant's occupancy will not be challenged."
      },
      {
        q: "A proprietary lease",
        options: {A:"grants a tenant all the rights and privileges of the landlord.",B:"is used for condominiums.",C:"is owned by the purchaser of a cooperative apartment.",D:"applies to Section 8 subsidized apartments."},
        answer: "C",
        explanation: "Is owned by the purchaser of a cooperative apartment. In a cooperative, the shareholder has an undivided interest in the building and, as one of the proprietors, is entitled to a lease on one unit. The proprietary lease includes house rules, bylaws, and ownership in the building's corporation."
      },
      {
        q: "If a tenant wishes to sublet all or part of the leased premises, the tenant usually must",
        options: {A:"take the landlord to court.",B:"obtain landlord permission.",C:"go ahead and sublet without notifying the landlord.",D:"break the lease and have the new tenant sign a new one with the landlord."},
        answer: "B",
        explanation: "Obtain landlord permission. The lease provisions usually describe subletting procedures, but the state mandates that, in most cases, the landlord cannot unreasonably withhold permission for a sublease."
      },
      {
        q: "A suit for possession is",
        options: {A:"a landlord's petition to evict the tenant for cause.",B:"a tenant's petition to compel the landlord to make the premises habitable.",C:"a petition by both tenant and landlord to change the terms of the original agreement.",D:"a tenant's suit to recover rent from a nonpaying subtenant."},
        answer: "A",
        explanation: "A landlord's petition to evict the tenant for cause."
      },
      {
        q: "When a long-term lease includes rent increases based on some index, that index is",
        options: {A:"related to the rate of unemployment.",B:"the rent index.",C:"the cost-of-living index.",D:"none of these."},
        answer: "C",
        explanation: "The cost-of-living index. An index rate is based on the government's cost-of-living index."
      },
      {
        q: "If a tenant dies, the lease may be",
        options: {A:"terminated.",B:"sublet.",C:"suspended.",D:"enforced."},
        answer: "D",
        explanation: "Enforced. A lease is a contract. If the tenant dies, the estate will be responsible for all the decedent's obligations."
      },
      {
        q: "What recourse does a tenant have if the landlord refuses to correct serious safety issues?",
        options: {A:"The tenant has no recourse.",B:"The tenant may withhold rent until the problem is resolved.",C:"The tenant should repair the problems and bill the landlord.",D:"The tenant may abandon the premises."},
        answer: "B",
        explanation: "The tenant may withhold rent until the problem is resolved. Under the implied warranty of habitability, tenants may withhold the rent until the property is made habitable."
      },
    ]
  },
  {
    id: 8,
    title: "Real Estate Instruments: Contracts",
    questions: [
      {
        q: "A contract in which one party has an obligation to perform some act only if the other party acts is",
        options: {A:"an executory contract.",B:"a bilateral contract.",C:"a unilateral contract.",D:"an agreement but not a contract."},
        answer: "C",
        explanation: "A unilateral contract. The statement defines unilateral contract."
      },
      {
        q: "The transfer by one party of his rights or obligations under a contract by substituting a new contract is a legal action known as",
        options: {A:"assignment.",B:"release.",C:"novation.",D:"specific performance."},
        answer: "C",
        explanation: "Novation. The substitution of a new contract for an existing one is novation."
      },
      {
        q: "What is the statute of limitations in New York for a legal action based on a contract?",
        options: {A:"One year",B:"Three years",C:"Six years",D:"Eight years"},
        answer: "C",
        explanation: "Six years. The New York statute of limitations for contract actions is six years."
      },
      {
        q: "An agreement in which a buyer purchases a seller's real estate on time, taking possession and responsibility but not receiving a deed, is",
        options: {A:"an option agreement.",B:"a land contract.",C:"a contingency agreement.",D:"a memorandum of sale."},
        answer: "B",
        explanation: "A land contract. The statement defines a land contract."
      },
      {
        q: "The state law that requires deeds, real estate sales contracts, and certain leases to be in writing in order to be legally enforceable is",
        options: {A:"the statute of limitations.",B:"the statute of frauds.",C:"the statute of contracts.",D:"the New York Land Sales and Real Property Conveyances Law."},
        answer: "B",
        explanation: "The statute of frauds. The statute of frauds requires certain types of contracts be in writing."
      },
      {
        q: "Specific performance refers to which of the following?",
        options: {A:"A legal action to recover money damages resulting from a breach of contract",B:"The ordinary compliance by the parties with the terms and conditions of a valid contract",C:"One of the essential elements of a valid contract",D:"A legal action to compel one party to comply with the terms and conditions of a valid contract"},
        answer: "D",
        explanation: "A legal action to compel one party to comply with the terms and conditions of a valid contract. Specific performance is a legal action to compel compliance with a contract."
      },
      {
        q: "All of the following are essential elements of a valid contract EXCEPT",
        options: {A:"acceptance.",B:"signature of the parties.",C:"legality of object.",D:"monetary consideration."},
        answer: "D",
        explanation: "Monetary consideration. While consideration is an essential element of a contract, it does not have to be monetary."
      },
      {
        q: "A contract that appears to be valid, but with which a party cannot be forced to comply, is what type of contract?",
        options: {A:"Unilateral",B:"Invalid",C:"Unenforceable",D:"Equitable"},
        answer: "C",
        explanation: "Unenforceable. The statement defines an unenforceable contract."
      },
      {
        q: "A contract that has no legal force or effect because it lacks one of the essential elements is referred to as what type of contract?",
        options: {A:"Void",B:"Voidable",C:"Unenforceable",D:"Unilateral"},
        answer: "A",
        explanation: "Void. The statement defines a void contract."
      },
      {
        q: "A contract that, while valid, may be legally disaffirmed or rejected by one of the parties is what type of contract?",
        options: {A:"Void",B:"Voidable",C:"Unenforceable",D:"Unilateral"},
        answer: "B",
        explanation: "Voidable. The statement defines a voidable contract."
      },
      {
        q: "The legal term caveat emptor means",
        options: {A:"buyer beware.",B:"buyer agrees to accept the property in \"as is\" condition.",C:"risk of fire before closing is borne by the seller.",D:"buyer reserves the right to cancel the contract after an unsatisfactory inspection."},
        answer: "A",
        explanation: "Buyer beware. Let the buyer beware is still the law in NYS, though court rulings have gradually increased the seller's and broker's responsibility for disclosing problems."
      },
      {
        q: "If a contract contains a mortgage contingency clause but the buyer does NOT make an effort to secure a mortgage commitment, the seller may sue for",
        options: {A:"fraud.",B:"breach of contract.",C:"novation.",D:"liquidated damages."},
        answer: "B",
        explanation: "Breach of contract. Once a court determines that a breach exists, liquidated damages may be requested."
      },
      {
        q: "A contract may be voided because",
        options: {A:"one party changes her mind.",B:"the listing agent misrepresented the property taxes.",C:"the zoning has been downgraded.",D:"one party is incompetent."},
        answer: "D",
        explanation: "One party is incompetent. The law assumes that both parties or their agents have had sufficient time to investigate the deal, so of the choices presented, only the incompetence of one party can void the contract."
      },
      {
        q: "If a land contract does not prohibit it, the vendee who no longer wants the property may allow another potential buyer to take over his",
        options: {A:"novation.",B:"option.",C:"rescission.",D:"equitable title."},
        answer: "D",
        explanation: "Equitable title. The purchaser or contract vendee can sell his rights because he has equitable title."
      },
      {
        q: "Laches is the term for",
        options: {A:"the loss of a legal right that was not asserted in time.",B:"contract stipulations binding on the seller.",C:"the \"as is\" clause in a contract of sale.",D:"a contract that has been invalidated."},
        answer: "A",
        explanation: "The loss of a legal right that was not asserted in time."
      },
      {
        q: "Among other things, a residential real estate contract of sale must include",
        options: {A:"the property condition statement.",B:"a fully executed agency disclosure form.",C:"a contingency clause for the buyer's mortgage.",D:"all light fixtures and appliances."},
        answer: "B",
        explanation: "A fully executed agency disclosure form. A contract could have a property condition statement attached or a mortgage contingency. But it must have the agency disclosure form incorporated into the document."
      },
      {
        q: "Buyers submit a written offer to buy the property. Sellers return it with a counteroffer to sell for $10,000 more. At this point, who is free to change their minds and walk away from the transaction?",
        options: {A:"Seller",B:"Buyer",C:"Either buyer or seller",D:"Neither buyer nor seller"},
        answer: "B",
        explanation: "Buyer. The buyer's offer to purchase has been rejected. The buyer has no further obligation in this transaction and may accept, reject, or submit another counteroffer."
      },
      {
        q: "The parol evidence rule states that",
        options: {A:"a license applicant must never have been convicted of a felony.",B:"what is contained in the final contract takes precedence over oral promises or previous contracts.",C:"if a will names no executor, the court may appoint an administrator.",D:"all contracts for the sale of real property must be written in plain language."},
        answer: "B",
        explanation: "What is contained in the final contract takes precedence over oral promises or previous contracts."
      },
      {
        q: "A \"time is of the essence\" clause should be used",
        options: {A:"routinely in every purchase and sale contract.",B:"only with commercial contracts.",C:"with great care.",D:"when the buyer needs an immediate response to a purchase offer."},
        answer: "C",
        explanation: "With great care. The phrase is a powerful one that says in essence to \"show up on this date to close the deal or else.\" It can sometimes force a closing and sometimes lead to further trouble."
      },
      {
        q: "When a lease-option contract is in force, who could be legally bound to go through with the sale of the property?",
        options: {A:"Buyer",B:"Seller",C:"Both buyer and seller",D:"Neither buyer nor seller"},
        answer: "B",
        explanation: "Seller. The tenant is the one who has the option and may choose to buy the property according to the terms of the lease-option contract or may prefer just to rent the property until the lease is finished. The seller is not free to choose and must go through with the sale if asked or else simply remain as a landlord."
      },
    ]
  },
  {
    id: 9,
    title: "Title and Closing Costs",
    questions: [
      {
        q: "A prospective buyer would have actual notice of the fact that a property was currently occupied if",
        options: {A:"the current owner had properly recorded title in the county in which the property was located.",B:"the buyer visited the property and saw the occupants living there.",C:"the occupants currently possessed the property.",D:"the current owner's mortgage was properly recorded with the county clerk."},
        answer: "B",
        explanation: "The buyer visited the property and saw the occupants living there. Actual notice is real knowledge obtained by firsthand observation."
      },
      {
        q: "Which of the following is NOT evidence of title?",
        options: {A:"Torrens certificate",B:"Abstract of title and lawyer's opinion",C:"Closing Disclosure form",D:"Certificate of title"},
        answer: "C",
        explanation: "Closing Disclosure form. The Closing Disclosure form is not evidence of title."
      },
      {
        q: "A coinsurance clause requires insurance for what percentage of a property's replacement cost?",
        options: {A:"50",B:"60",C:"70",D:"80"},
        answer: "D",
        explanation: "80. A coinsurance clause requires 80% of replacement cost."
      },
      {
        q: "The condensed history of the title to a particular parcel of real estate is called",
        options: {A:"abstract of title.",B:"chain of title.",C:"broker's opinion of title.",D:"public record of title."},
        answer: "A",
        explanation: "Abstract of title. The statement defines an abstract of title."
      },
      {
        q: "Recording documents in the public record gives what type of notice to the world?",
        options: {A:"Actual",B:"Constructive",C:"Public",D:"Possessory"},
        answer: "B",
        explanation: "Constructive. Recording documents gives constructive notice to the world."
      },
      {
        q: "An amount that has been previously paid or that must be reimbursed to the party is entered on the closing statement as",
        options: {A:"a credit.",B:"a debit.",C:"a liability.",D:"an escrow."},
        answer: "A",
        explanation: "A credit. The statement defines credit."
      },
      {
        q: "A prepaid expense divided or distributed between the buyer and the seller at closing is",
        options: {A:"a credit.",B:"a debit.",C:"a liability.",D:"a proration."},
        answer: "D",
        explanation: "A proration. The statement defines proration."
      },
      {
        q: "Certain disclosures about mortgage loan costs are required to be provided to consumers by",
        options: {A:"the Torrens System.",B:"the Uniform Settlement Statement.",C:"TRID.",D:"the doctrine of caveat emptor."},
        answer: "C",
        explanation: "TRID. TRID rules require loan disclosures to the borrower."
      },
      {
        q: "A closing statement",
        options: {A:"proves that the grantor has transferred her interest in the property being sold.",B:"gives constructive notice to the world.",C:"is a tool to compute the actual amount to be paid by the buyer at closing.",D:"is the equivalent of an abstract of title."},
        answer: "C",
        explanation: "Is a tool to compute the actual amount to be paid by the buyer at closing. The statement defines a closing statement."
      },
      {
        q: "On a closing statement, a charge or amount a party owes and must pay is reflected as",
        options: {A:"a credit.",B:"a debit.",C:"an adjustment.",D:"an accrued item."},
        answer: "B",
        explanation: "A debit. The statement defines debit."
      },
      {
        q: "The Closing Disclosure form usually details",
        options: {A:"the chain of title.",B:"the homeowners insurance policy.",C:"the amounts paid, prorations, and dispersals.",D:"the mortgage details."},
        answer: "C",
        explanation: "The amounts paid, prorations, and dispersals. The Closing Disclosure form is a specific form detailing all the financial particulars of the transaction."
      },
      {
        q: "After a property is conveyed, the event is recorded at",
        options: {A:"the tax assessor's office.",B:"the public library.",C:"the building department.",D:"the county clerk's office."},
        answer: "D",
        explanation: "The county clerk's office. The county or city clerk's office maintains all public records, such as deeds and taxes."
      },
      {
        q: "A homeowners insurance policy usually covers",
        options: {A:"title defects.",B:"flood damage.",C:"fire and theft.",D:"auto liabilities."},
        answer: "C",
        explanation: "Fire and theft. Fire and theft are standard items in a homeowners insurance policy."
      },
      {
        q: "If the property to be sold has an outstanding mortgage, what does the seller's attorney need from the mortgagee to settle the account?",
        options: {A:"A closing statement",B:"A title report",C:"Mortgage commitment from the purchaser",D:"Mortgage reduction certificate"},
        answer: "D",
        explanation: "Mortgage reduction certificate. The mortgage reduction certificate states the amount still owing on the loan so that proper adjustments can be made, whether the loan is to be paid off or assumed by the buyer."
      },
      {
        q: "One remedy to remove a cloud on the title is to",
        options: {A:"secure title insurance.",B:"issue a quitclaim deed.",C:"bring a malpractice suit against the closing attorney.",D:"file a suit to quiet title."},
        answer: "D",
        explanation: "File a suit to quiet title. Of the choices, only a suit to quiet title will settle a title dispute."
      },
      {
        q: "Marketable title means",
        options: {A:"title with full covenants and warranties.",B:"a property is available for sale.",C:"property has no mortgage, liens, or encumbrances.",D:"a good title reasonably free from defects."},
        answer: "D",
        explanation: "A good title reasonably free from defects. Note the word reasonably. A competent title search may not discover any defects, but should a vendor place a lien on the property just after the search and before the closing, the buyer has taken title, lien and all. Yet the title was marketable."
      },
      {
        q: "At the closing, the buyer may have to reimburse the seller for prepaid",
        options: {A:"mortgage payments.",B:"attorney's fees.",C:"property taxes.",D:"inspection fees."},
        answer: "C",
        explanation: "Property taxes. Property taxes are paid in advance, so the seller may already have paid taxes for some of the time the buyer will be living in the house."
      },
      {
        q: "The seller of a residential property who decides NOT to furnish a property condition statement to the buyer",
        options: {A:"must credit the buyer $500 at closing.",B:"may be charged with a misdemeanor.",C:"is then free of liability for misstatements about the property.",D:"should require the listing agent to complete the form."},
        answer: "A",
        explanation: "Must credit the buyer $500 at closing. Failure to furnish the form does not relieve the seller of liability."
      },
      {
        q: "A deed is a document that",
        options: {A:"represents title to the property.",B:"guarantees that the property is free of liens.",C:"transfers title from one owner to another.",D:"proves ownership."},
        answer: "C",
        explanation: "Transfers title from one owner to another. A deed transfers title but does not really establish ownership."
      },
      {
        q: "What is a deed?",
        options: {A:"Title to the property",B:"Property guarantee",C:"Description of the interest(s) that have been transferred",D:"Proof of ownership"},
        answer: "C",
        explanation: "Description of the interest(s) that have been transferred. A deed conveys title but does not establish ownership."
      },
    ]
  },
  {
    id: 10,
    title: "Mortgages",
    questions: [
      {
        q: "In a typical mortgage relationship, the mortgagor is",
        options: {A:"the lender.",B:"the previous owner.",C:"the borrower.",D:"the title insurer."},
        answer: "C",
        explanation: "The borrower. The mortgagor is the borrower."
      },
      {
        q: "In a typical mortgage relationship, the mortgagee is",
        options: {A:"the lender.",B:"the previous owner.",C:"the borrower.",D:"the title insurer."},
        answer: "A",
        explanation: "The lender. The mortgagee is a lender."
      },
      {
        q: "Which of the following clears a mortgage lien?",
        options: {A:"Payment of the mortgage in full",B:"Recording the note and mortgage",C:"Recording the satisfaction piece",D:"Recording the release"},
        answer: "D",
        explanation: "Recording the release. Recording the release will clear a mortgage lien."
      },
      {
        q: "What is the statutory usury ceiling in New York?",
        options: {A:"10%",B:"20%",C:"Periodically adjusted",D:"None"},
        answer: "C",
        explanation: "Periodically adjusted. In New York, the statutory usury ceiling floats and is adjusted periodically."
      },
      {
        q: "A loan in excess of what amount would NOT be subject to the NYS usury law?",
        options: {A:"$500,000",B:"$1,000,000",C:"$2,000,000",D:"$2,500,000"},
        answer: "D",
        explanation: "$2,500,000. Loans of $2.5 million or more and loans made to corporations are generally exempt from usury laws, except for New York's criminal usury limit of 25% on loans up to $2.5 million."
      },
      {
        q: "What is a point?",
        options: {A:"An up-front fee charged by the lender, equal to 1% of the sales price of the property",B:"An up-front fee charged by the lender, equal to 1% of the loan amount",C:"An up-front fee charged by the lender, equal to 1% of the annualized interest rate",D:"The prorated equivalent value of the ownership in the property aside from the mortgage"},
        answer: "B",
        explanation: "An up-front fee charged by the lender, equal to 1% of the loan amount. The statement defines point."
      },
      {
        q: "In which case would a subsequent owner be held personally liable for a deficiency judgment against the original borrower?",
        options: {A:"If the subsequent owner assumed the loan",B:"If the subsequent owner acquired the property subject to the mortgage",C:"If the subsequent owner acquired the property in a seller-financed transaction",D:"If the proceeds of the foreclosure sale are insufficient to satisfy the debt"},
        answer: "A",
        explanation: "If the subsequent owner assumed the loan. A subsequent owner is personally liable when she assumes a loan."
      },
      {
        q: "A mortgage in which the interest rate may be increased or decreased at certain intervals, depending on the behavior of a specific economic indicator is",
        options: {A:"an ARM.",B:"a term loan.",C:"a balloon loan.",D:"an amortized loan."},
        answer: "A",
        explanation: "An ARM. The statement defines an adjustable-rate mortgage (ARM)."
      },
      {
        q: "New York follows which mortgage theory?",
        options: {A:"Lien",B:"Estoppel",C:"Equity",D:"Title"},
        answer: "A",
        explanation: "Lien. New York is a lien theory state."
      },
      {
        q: "The relationship between the amount of a mortgage loan and the value of the real estate being pledged as collateral is known as its",
        options: {A:"PITI ratio.",B:"LTV ratio.",C:"APR.",D:"buydown."},
        answer: "B",
        explanation: "LTV ratio. The statement defines loan-to-value ratio (LTV)."
      },
      {
        q: "The acceleration clause in a mortgage means that",
        options: {A:"the loan can be paid back at a rate faster than agreed.",B:"the prepayment penalty can be waived.",C:"if the loan is in default, the mortgagee may declare the entire debt immediately due and payable.",D:"in a variable-rate mortgage, if national interest rates rise, the mortgagee can increase the rate on the loan."},
        answer: "C",
        explanation: "If the loan is in default, the mortgagee may declare the entire debt immediately due and payable."
      },
      {
        q: "Bob agrees to buy Tim's house and to take over the existing mortgage. Bob will become personally liable for the debt if he",
        options: {A:"takes title subject to the existing mortgage.",B:"assumes the existing mortgage.",C:"accelerates the existing mortgage.",D:"obtains a reduction certificate."},
        answer: "B",
        explanation: "Assumes the existing mortgage. One who assumes a mortgage signs the original note or bond and becomes personally responsible for the debt."
      },
      {
        q: "With a balloon mortgage,",
        options: {A:"the interest rate is usually quite high.",B:"a second mortgage is placed after the first loan has been made.",C:"depending upon the note structure, the mortgagor is allowed to suspend payments for a specific time.",D:"the final payment is larger than the other payments because the loan is not fully amortized."},
        answer: "D",
        explanation: "The final payment is larger than the other payments because the loan is not fully amortized."
      },
      {
        q: "How does making half a payment biweekly pay off a conventional mortgage more quickly than originally scheduled?",
        options: {A:"The lender makes money on the float.",B:"Payments are never late because they are deducted directly from the borrower's savings or checking account.",C:"The hundreds of dollars the borrower spends to join the plan earn interest during the life of the loan.",D:"Biweekly means \"every two weeks,\" not \"twice a month,\" so the debt is paid off sooner."},
        answer: "D",
        explanation: "Biweekly means \"every two weeks,\" not \"twice a month,\" so the debt is paid off sooner. The borrower makes 26 half-payments a year, the equivalent of 13 payments."
      },
      {
        q: "A mortgage is",
        options: {A:"a note or a bond.",B:"a loan made by a bank or other financial institution.",C:"a document granting the lender a lien on the property.",D:"a deed of trust."},
        answer: "C",
        explanation: "A document granting the lender a lien on the property. By signing the mortgage the borrower gives the lender a financial claim against the property to serve as security for the loan."
      },
      {
        q: "Right after the purchase, the down payment is usually",
        options: {A:"the purchase money mortgage.",B:"a good-faith deposit.",C:"the amount of cash paid toward the purchase price.",D:"the amount of equity in the property."},
        answer: "C",
        explanation: "The amount of cash paid toward the purchase price. The down payment should not be confused with a good-faith deposit, which is often this \"earnest money\" is later credited as part of the down payment."
      },
      {
        q: "Equity is defined as",
        options: {A:"the value of the property.",B:"the mortgage balance.",C:"the percentage of interest each owner has in the property.",D:"the ownership interest a person has in the property minus debt or other liens on the property."},
        answer: "D",
        explanation: "The ownership interest a person has in the property minus debt or other liens on the property."
      },
      {
        q: "The time allowed beyond a specified performance or payment date before default occurs is called",
        options: {A:"forbearance.",B:"the grace period.",C:"the 10-day period.",D:"usury."},
        answer: "B",
        explanation: "The grace period. The time between the due date and default is usually called the grace period."
      },
      {
        q: "A PITI payment consists of",
        options: {A:"principal, interest, equity, and insurance.",B:"principal, interest, taxes, and utilities.",C:"principal, interest, taxes, and improvements.",D:"principal, interest, taxes, and insurance."},
        answer: "D",
        explanation: "Principal, interest, taxes, and insurance. The borrower's ability to pay the PITI payment is crucial in underwriting a mortgage loan."
      },
      {
        q: "What is the difference between an estoppel certificate and a mortgage reduction certificate?",
        options: {A:"Both describe the balance of a mortgage, but one is written by the lender and the other by the borrower.",B:"The estoppel certificate describes the original loan amount, and the mortgage reduction certificate shows the balance.",C:"No difference; they are the same document.",D:"One certificate is issued by a government lender and the other by a federally insured lender."},
        answer: "B",
        explanation: "The estoppel certificate describes the original loan amount, and the mortgage reduction certificate shows the balance."
      },
    ]
  },
  {
    id: 11,
    title: "Real Estate Finance",
    questions: [
      {
        q: "The limit on the size of any single interest-rate adjustment in an ARM is called",
        options: {A:"the margin.",B:"the ceiling.",C:"the cap.",D:"the ratio."},
        answer: "C",
        explanation: "The cap. The statement defines cap."
      },
      {
        q: "The maximum range of rate adjustments permitted over the life of a loan is called",
        options: {A:"a margin.",B:"a ceiling.",C:"a cap.",D:"a ratio."},
        answer: "B",
        explanation: "A ceiling. The statement defines ceiling."
      },
      {
        q: "The amount added to an adjustable-rate mortgage's index rate to cover the lender's costs is called",
        options: {A:"a margin.",B:"a ceiling.",C:"a cap.",D:"a ratio."},
        answer: "A",
        explanation: "A margin. The statement defines margin."
      },
      {
        q: "All of the following are federally related participants in the secondary mortgage market EXCEPT",
        options: {A:"FNMA.",B:"GNMA.",C:"ECOA.",D:"FHLMC."},
        answer: "C",
        explanation: "ECOA. ECOA is the Equal Credit Opportunity Act."
      },
      {
        q: "Which federal law is also known as the Truth in Lending Act?",
        options: {A:"ECOA",B:"RESPA",C:"Fair Housing Act",D:"Regulation Z"},
        answer: "D",
        explanation: "Regulation Z. The statement defines Regulation Z."
      },
      {
        q: "A short-term loan designed to cover a gap between the sale of one property and the purchase of another is",
        options: {A:"a participation loan.",B:"a wraparound mortgage.",C:"a bridge loan.",D:"a takeout loan."},
        answer: "C",
        explanation: "A bridge loan. The statement defines bridge loan."
      },
      {
        q: "What is Fannie Mae?",
        options: {A:"A corporation established to purchase primarily conventional mortgage loans in the secondary market",B:"A government-sponsored enterprise established to purchase mortgage loans in the secondary market from primary lenders",C:"A government agency that sells mortgage-backed securities backed by pools of FHA and VA loans",D:"A government agency that insures certain qualified loans made by lenders approved under its regulations"},
        answer: "B",
        explanation: "A government-sponsored enterprise established to purchase mortgage loans in the secondary market from primary lenders. The statement defines Fannie Mae."
      },
      {
        q: "Which of the following loans may be used primarily in new construction projects?",
        options: {A:"Swing",B:"Wraparound",C:"Takeout",D:"Package"},
        answer: "C",
        explanation: "Takeout. A takeout loan is permanent financing used in construction projects where the builder agrees to repay the lender in full upon completion of the project."
      },
      {
        q: "The gradual increase of the mortgage debt when all payments are made on time but do not cover all the interest due for that payment is a characteristic of",
        options: {A:"disintermediation.",B:"convertibility.",C:"imputed interest.",D:"negative amortization."},
        answer: "D",
        explanation: "Negative amortization. The statement defines negative amortization."
      },
      {
        q: "A transaction in which an owner sells his improved property and, as part of the same transaction, signs a long-term lease to remain in possession of the premises is",
        options: {A:"a reverse-annuity loan.",B:"a participation agreement.",C:"an equity-sharing agreement.",D:"a sale-leaseback agreement."},
        answer: "D",
        explanation: "A sale-leaseback agreement. The statement defines sale-leaseback agreement."
      },
      {
        q: "A mortgage covering more than one parcel of real estate that provides for each parcel's release upon repayment of a portion of the debt is called",
        options: {A:"a wraparound mortgage.",B:"a purchase money mortgage.",C:"an open-end mortgage.",D:"a blanket mortgage."},
        answer: "D",
        explanation: "A blanket mortgage. A blanket mortgage is commonly used by developers who finance the entire project. As individual units sell, the prorated portion of the loan is repaid and a release clause is issued."
      },
      {
        q: "With a VA mortgage, the actual cash comes from",
        options: {A:"the Department of Veterans Affairs.",B:"the state's mortgage authority.",C:"a regular lending institution.",D:"the Office of Housing and Urban Development (HUD)."},
        answer: "C",
        explanation: "A regular lending institution. The federal government simply guarantees the loan, which is made by a bank, a savings association, or other lending institution."
      },
      {
        q: "The federal government offers mortgage insurance on which type of loan?",
        options: {A:"FHA",B:"VA",C:"ARM",D:"GNMA"},
        answer: "A",
        explanation: "FHA. FHA mortgages can be placed with little or no down payment because HUD offers mortgage insurance to protect the lenders."
      },
      {
        q: "A home equity loan is a form of",
        options: {A:"second mortgage.",B:"renovation loan.",C:"interim financing.",D:"construction loan."},
        answer: "A",
        explanation: "Second mortgage. A home equity loan is simply a second mortgage tapping some of the equity in one's property."
      },
      {
        q: "With an adjustable-rate mortgage, the index is important because it",
        options: {A:"determines how the interest rate is adjusted.",B:"predicts where future interest rates should climb.",C:"limits the amount of interest that can be charged.",D:"determines when the rates will be adjusted."},
        answer: "A",
        explanation: "Determines how the interest rate is adjusted. The index reflects the current rate on mortgages around the country and is used as the basis for adjustment on the mortgage's interest rate."
      },
      {
        q: "A package loan might be useful for the purchase of",
        options: {A:"a principal residence and a second home at the same time.",B:"a strip mall.",C:"a fully furnished resort-area condo.",D:"a prefabricated building."},
        answer: "C",
        explanation: "A fully furnished resort-area condo. The package loan can include both real and personal property and is sometimes used for completely furnished units."
      },
      {
        q: "The reverse-annuity mortgage can be valuable for",
        options: {A:"senior citizens on a fixed income.",B:"borrowers who want to drop private mortgage insurance (PMI).",C:"first-time buyers who need assistance with closing costs.",D:"heading off foreclosure on a defaulted loan."},
        answer: "A",
        explanation: "Senior citizens on a fixed income. This mortgage allows seniors to tap the equity in their homes without having to sell."
      },
      {
        q: "A sale-leaseback is often used for",
        options: {A:"purchasers who do not plan to stay in their residences for a long period.",B:"an equity cash-out when the owner wishes to remain as a long-term tenant.",C:"a tax rebate.",D:"a buyer to create a rent roll."},
        answer: "B",
        explanation: "An equity cash-out when the owner wishes to remain as a long-term tenant. In a sale-leaseback the owner sells the property and then remains as a tenant."
      },
      {
        q: "The Closing Disclosure form is important because",
        options: {A:"the banks can no longer use bait-and-switch methods.",B:"it makes the buyers aware of all lender charges and fees.",C:"it informs the buyer and the seller up front of all lending fees.",D:"it informs the buyer and the seller up front of all closing costs."},
        answer: "B",
        explanation: "It makes the buyers aware of all lender charges and fees. RESPA is a federal law that covers mortgage loans for one-to-four-family residential properties."
      },
      {
        q: "A loan where the lender becomes a \"partner\" in the profits of a purchase is called",
        options: {A:"a swing loan.",B:"an open-end mortgage.",C:"a margin loan.",D:"a shared-equity mortgage."},
        answer: "D",
        explanation: "A shared-equity mortgage. The question defines shared-equity mortgage."
      },
    ]
  },
  {
    id: 12,
    title: "Mortgage Brokerage",
    questions: [
      {
        q: "Mezzanine financing is",
        options: {A:"a second mortgage.",B:"a subordinate loan.",C:"a loan that covers part of the required down payment.",D:"a construction loan."},
        answer: "C",
        explanation: "A loan that covers part of the required down payment. Mezzanine financing is a loan that covers part of the required down payment."
      },
      {
        q: "A borrower is getting a loan with a 75% LTV. The purchase price of the home is $1,350,000, but the house only has an appraised value of $1,300,000. The borrower will need a down payment of",
        options: {A:"$337,500.",B:"$350,000.",C:"$375,000.",D:"$325,000."},
        answer: "C",
        explanation: "$375,000. A bank will offer financing for 75% of the purchase price or appraised value, whichever is less. $1,300,000 × 75% = $975,000 (the 75% amount of money that the bank will lend). $1,300,000 × 25% = $325,000 (the required down payment). But the buyer is paying $1,350,000 for the house and will need an additional $50,000 to get the loan. $325,000 + $50,000 = $375,000 (total down payment required)."
      },
      {
        q: "The role of mortgage bankers in real estate transactions is to",
        options: {A:"find loans for borrowers for a fee.",B:"explain to borrowers the terms of offers to lend from various lenders.",C:"introduce borrowers to various lenders.",D:"originate loans."},
        answer: "D",
        explanation: "Originate loans. The other options describe the role of mortgage brokers."
      },
      {
        q: "Real estate agent Sid is also a registered mortgage broker. Sid sells a house and tells the buyers he can help them with getting financing. He gets a commitment letter from a bank, and the buyers take the loan. Sid collects his commission on the sale and collects a fee from the bank for bringing in a loan customer. Sid never mentions the fact that he is also a mortgage broker to his customer. This is an example of",
        options: {A:"good business practice.",B:"undisclosed dual agency.",C:"strategic planning.",D:"good customer service."},
        answer: "B",
        explanation: "Undisclosed dual agency. This situation is an example of undisclosed dual agency."
      },
      {
        q: "The term of a mortgage banker license is",
        options: {A:"one year.",B:"two years.",C:"three years.",D:"four years."},
        answer: "A",
        explanation: "One year. The term of a mortgage banker license is one year."
      },
      {
        q: "A major difference between a mortgage broker and a mortgage banker is that",
        options: {A:"a mortgage broker is licensed.",B:"a mortgage banker is able to originate a loan.",C:"a mortgage banker is registered.",D:"a mortgage broker must have a net worth of at least $250,000."},
        answer: "B",
        explanation: "A mortgage banker is able to originate a loan. A mortgage banker is able to originate a loan but a mortgage broker cannot."
      },
      {
        q: "A homebuyer buys a new house for $500,000. The buyer has $100,000 available for a down payment and borrows the balance from a bank. This is known as",
        options: {A:"LTV.",B:"equity financing.",C:"mezzanine financing.",D:"debt financing."},
        answer: "D",
        explanation: "Debt financing. This situation would be known as debt financing."
      },
      {
        q: "A mortgage broker also holds a real estate license. This may create a problem regarding",
        options: {A:"the validity of her mortgage broker license.",B:"dual agency.",C:"the ability for the borrower to get a low-rate loan.",D:"the ability for the borrower to qualify for a loan."},
        answer: "B",
        explanation: "Dual agency. If a mortgage broker also holds a real estate license, this may create a problem regarding dual agency."
      },
      {
        q: "A homebuyer wants to buy a home priced at $650,000. The buyer has $110,000 available for the down payment and qualifies for a loan with his bank. The buyer will also be required to take out",
        options: {A:"PMI.",B:"LTV.",C:"HUD.",D:"RESPA."},
        answer: "A",
        explanation: "PMI. A buyer who wants to buy a home priced at $650,000 who has $110,000 available for a down payment will be required to take out PMI because the down payment is less than the required 20% down payment."
      },
      {
        q: "An investor wants to buy a $3,000,000 strip mall. She has insufficient funds available for the required down payment. A bank is prepared to offer a 70% LTV loan. To come up with the balance of the required down-payment money, she will have to get",
        options: {A:"debt financing.",B:"a second mortgage.",C:"PMI.",D:"mezzanine financing."},
        answer: "D",
        explanation: "Mezzanine financing. To get the balance of the required down payment, the investor will have to get mezzanine financing."
      },
      {
        q: "The primary function of a mortgage broker is to assist the borrower in obtaining",
        options: {A:"a mortgage commitment letter.",B:"low-rate financing.",C:"a no-down-payment mortgage.",D:"a mortgage loan without PMI."},
        answer: "A",
        explanation: "A mortgage commitment letter. The primary function of a mortgage broker is to assist the borrower in obtaining a mortgage commitment letter."
      },
      {
        q: "Before a buyer looks for a house, the buyer will usually go to a bank to get",
        options: {A:"a preapplication form.",B:"an underwriter to approve a loan.",C:"preapproval.",D:"a nonconforming loan application."},
        answer: "C",
        explanation: "Preapproval. Usually a buyer will go to a bank to get preapproved before looking for a house."
      },
      {
        q: "A mortgage broker must renew his registration every",
        options: {A:"one year.",B:"two years.",C:"three years.",D:"four years."},
        answer: "A",
        explanation: "One year. A mortgage broker must renew his registration every year."
      },
      {
        q: "The lender's evaluation process of verifying all the borrower's information submitted on a mortgage loan application BEST describes",
        options: {A:"preapplication.",B:"prequalification.",C:"underwriting.",D:"debt financing."},
        answer: "C",
        explanation: "Underwriting. The lender verifies all the borrower's information during the underwriting process before making a decision."
      },
      {
        q: "A licensed real estate salesperson wants to register as a mortgage broker. The salesperson must",
        options: {A:"be licensed with the NYS Banking Department.",B:"obtain a real estate broker's license first.",C:"have at least one year of experience in credit analysis.",D:"supply credit reports to the NYS Banking Department."},
        answer: "D",
        explanation: "Supply credit reports to the NYS Banking Department. If a licensed real estate salesperson wants to register as a mortgage broker, she must supply credit reports to the NYS Banking Department."
      },
      {
        q: "A homebuyer shopping for a mortgage loan might see",
        options: {A:"a mortgage banker.",B:"a mortgage broker.",C:"a real estate broker.",D:"a real estate salesperson."},
        answer: "B",
        explanation: "A mortgage broker. A homebuyer shopping for a mortgage loan might see a mortgage broker."
      },
      {
        q: "To qualify as a mortgage banker, an individual must have",
        options: {A:"at least two years' experience as a mortgage broker.",B:"at least one year of experience originating loans.",C:"a surety bond of at least $50,000.",D:"an open line of credit of no less than $500,000."},
        answer: "C",
        explanation: "A surety bond of at least $50,000. To qualify as a mortgage banker, an individual must have a surety bond of at least $50,000."
      },
      {
        q: "In New York State, MOST mortgage loans for the purpose of buying a single-family home require a down payment of at LEAST",
        options: {A:"20%.",B:"15%.",C:"10%.",D:"3%."},
        answer: "A",
        explanation: "20%. In NYS, most mortgage loans for single-family homes require a down payment of at least 20%."
      },
      {
        q: "A mortgage broker who is also licensed as a real estate licensee is required to provide full disclosure to the borrower and must receive",
        options: {A:"a standard 5% loan application fee.",B:"a commitment letter from the borrower.",C:"an informed consent agreement.",D:"a warranty of no liability."},
        answer: "C",
        explanation: "An informed consent agreement. A mortgage broker who is also a licensed real estate licensee is required to provide full disclosure to the borrower and must receive an informed consent agreement."
      },
      {
        q: "For a mortgage banker to be licensed and a mortgage broker to get registered, both must provide",
        options: {A:"an escrow account statement.",B:"fingerprints for background checks.",C:"an umbrella insurance policy.",D:"proof of citizenship."},
        answer: "B",
        explanation: "Fingerprints for background checks. For a mortgage banker to be licensed and a mortgage broker to get registered, both must provide fingerprints for background checks."
      },
    ]
  },
  {
    id: 13,
    title: "Land-Use Regulations",
    questions: [
      {
        q: "A developer who wanted to ensure that no homes in a subdivision would ever have a garden shed or doghouse in the backyard could do so by",
        options: {A:"exercising the power of eminent domain.",B:"recording a deed restriction.",C:"enforcing the subdivision's master plan.",D:"obtaining a court injunction."},
        answer: "B",
        explanation: "Recording a deed restriction. Recording a deed restriction is the only method of exercising private land-use control."
      },
      {
        q: "Taxation and eminent domain are examples of",
        options: {A:"private land-use controls.",B:"government police powers.",C:"public land-use controls.",D:"zoning powers."},
        answer: "B",
        explanation: "Government police powers. Taxation and eminent domain are government powers."
      },
      {
        q: "Which of the following would MOST likely regulate the type of electrical wiring allowed in a proposed new building?",
        options: {A:"Zoning ordinances",B:"Building codes",C:"Deed restrictions",D:"Eminent domain"},
        answer: "B",
        explanation: "Building codes. The issues would be regulated by building codes."
      },
      {
        q: "A legal device used by municipalities to control development by separating various land uses is",
        options: {A:"a zoning ordinance.",B:"a deed restriction.",C:"a variance.",D:"a building code."},
        answer: "A",
        explanation: "A zoning ordinance. The statement defines zoning ordinances."
      },
      {
        q: "All the following are devices for avoiding strict compliance with a zoning ordinance EXCEPT",
        options: {A:"special-use permits.",B:"permissible nonconforming uses.",C:"variances.",D:"escheat."},
        answer: "D",
        explanation: "Escheat. Escheat is unrelated to zoning issues."
      },
      {
        q: "A document issued by a municipal authority stating that a building complies with certain quality standards is",
        options: {A:"a building permit.",B:"a special-use permit.",C:"a certificate of occupancy.",D:"a special assessment."},
        answer: "C",
        explanation: "A certificate of occupancy. The statement defines a certificate of occupancy."
      },
      {
        q: "The power of eminent domain may be exercised through",
        options: {A:"a certiorari proceeding.",B:"a condemnation suit.",C:"escheat.",D:"zoning ordinances."},
        answer: "B",
        explanation: "A condemnation suit. Condemnation is the method by which eminent domain is exercised."
      },
      {
        q: "A zoning board's decision to zone a 500-square-foot area in the middle of a residential neighborhood for heavy industry in order to allow the construction of an explosives factory would be an example of",
        options: {A:"illegal spot zoning.",B:"a special-use permit.",C:"a nonconforming use.",D:"legal eminent domain."},
        answer: "A",
        explanation: "Illegal spot zoning. The scenario is spot zoning; nonharmonious uses are illegal in New York."
      },
      {
        q: "The government's right to impose laws, statutes, and ordinances to protect the public health, safety, and welfare is called",
        options: {A:"police power.",B:"condemnation.",C:"eminent domain.",D:"escheat."},
        answer: "A",
        explanation: "Police power. The statement defines police power."
      },
      {
        q: "A use of property permitted even after a change in the local zoning ordinance prohibits such uses is referred to as",
        options: {A:"a special-use permit.",B:"a nonconforming use.",C:"a special assessment.",D:"a variance."},
        answer: "B",
        explanation: "A nonconforming use. The statement defines nonconforming use."
      },
      {
        q: "Accessory apartments are",
        options: {A:"a way to create extra income.",B:"permitted only by local ordinance.",C:"permitted only for family.",D:"examples of nonconforming use."},
        answer: "B",
        explanation: "Permitted only by local ordinance. Use due diligence when showing homes with possible in-law apartments; not all municipalities permit them."
      },
      {
        q: "An ad valorem tax is",
        options: {A:"based on the parcel's assessment.",B:"a special assessment.",C:"an example of spot zoning.",D:"charged with a special-use permit."},
        answer: "A",
        explanation: "Based on the parcel's assessment. Ad valorem is the tax levied according to property value."
      },
      {
        q: "Assessed value is",
        options: {A:"the amount of the property's tax bill.",B:"the municipality's estimate of the property's relative value.",C:"the amount of tax levied for every thousand dollars of value.",D:"the estimated cost of improvements that will benefit one particular area."},
        answer: "B",
        explanation: "The municipality's estimate of the property's relative value. Assessed value is the valuation placed on a property as a basis for taxation."
      },
      {
        q: "When renovations or additions to a property are completed, a new certificate of occupancy",
        options: {A:"is issued when the finished modifications comply with building codes and local zoning.",B:"certifies that the property is fit for human habitation.",C:"will not be issued if the project would violate private deed restrictions.",D:"requires that the contractor be bonded."},
        answer: "B",
        explanation: "Certifies that the property is fit for human habitation."
      },
      {
        q: "Cluster zoning creates",
        options: {A:"a congested development.",B:"an urban atmosphere.",C:"an open space not usually found in PUDs.",D:"an added tax burden with the additional population needing services."},
        answer: "C",
        explanation: "An open space not usually found in PUDs. Cluster zoning allows building on small lots and preserves open space."
      },
      {
        q: "A group home is",
        options: {A:"a commune.",B:"living unit where three or more unrelated individuals reside, functioning as a family.",C:"not permitted in residential neighborhoods.",D:"another name for a halfway house for rehabilitated drug users."},
        answer: "B",
        explanation: "Living unit where three or more unrelated individuals reside, functioning as a family. A group home is not a halfway house and comes under the fair housing laws as a protected class."
      },
      {
        q: "To obtain a variance, the owner must petition",
        options: {A:"the assessor's office.",B:"the mayor's office.",C:"the building department.",D:"the zoning board."},
        answer: "D",
        explanation: "The zoning board. Before granting a variance, the zoning board will hear the petitioner's appeal and study the impact on the neighborhood."
      },
      {
        q: "Special assessments are",
        options: {A:"levied at odd times during the tax year to balance the municipality's budget.",B:"temporary tax increases to create a special event, such as a town anniversary celebration.",C:"imposed only upon specific parcels that will benefit by the improvement.",D:"placed only on homes of school-age children."},
        answer: "C",
        explanation: "Imposed only upon specific parcels that will benefit by the improvement. Special assessments are levied on specific parcels that benefit by the improvement, such as sewers and street lighting."
      },
      {
        q: "A setback is",
        options: {A:"a reversal of situation.",B:"the minimum distance required between a building and the lot lines.",C:"a municipality's moratorium on further development.",D:"the liability of former owners for environmental contamination."},
        answer: "B",
        explanation: "The minimum distance required between a building and the lot lines. A setback is the distance of the building from the street and from its neighbors."
      },
      {
        q: "When renovations or additions are planned, a building permit",
        options: {A:"is issued when the proposed plans comply with building codes and local zoning.",B:"certifies that the property is fit for human habitation.",C:"will not be issued if the project would violate private deed restrictions.",D:"requires that the contractor be bonded."},
        answer: "A",
        explanation: "Is issued when the proposed plans comply with building codes and local zoning."
      },
    ]
  },
  {
    id: 14,
    title: "Municipal Agencies",
    questions: [
      {
        q: "A property owner files a petition for a variance for a property that has recently been rezoned. The application is rejected. The property owner has the right to appeal through",
        options: {A:"an Article 12-A proceeding.",B:"an Article 9-A proceeding.",C:"an Article 78 proceeding.",D:"an Article 87 proceeding."},
        answer: "C",
        explanation: "An Article 78 proceeding. The property owner has the right to appeal through what is known as an Article 78 proceeding."
      },
      {
        q: "Residents in a neighborhood want to prevent the demolition of a school building that was built in 1859. They should file an application with",
        options: {A:"the city planning commission.",B:"the department of buildings.",C:"the Landmarks Preservation Commission.",D:"the city council."},
        answer: "C",
        explanation: "The Landmarks Preservation Commission. The residents should file an application with land-use preservation."
      },
      {
        q: "A highrise office building has just been completed at a cost of $22,500,000. The builder had all of the required permits and followed the architectural plans meticulously. The building will NOT be legally usable until",
        options: {A:"a C of O has been issued.",B:"all the construction workers receive their bonuses.",C:"the city turns on the power.",D:"bus service becomes available."},
        answer: "A",
        explanation: "A C of O has been issued. The building will not be legally usable until a C of O has been issued."
      },
      {
        q: "In a single-family residential neighborhood zoned R-1, a hospital wants to open an emergency clinic. To do this, the hospital would have to",
        options: {A:"offer free medical services to local residents.",B:"apply for a variance.",C:"apply for a special-use permit.",D:"have the clinic look like a house."},
        answer: "C",
        explanation: "Apply for a special-use permit. The hospital has to apply for a special-use permit."
      },
      {
        q: "An architect files plans to build a single-family home in an R-1 zone. The plans are approved and a building permit is issued. The property owner then tells the contractor to build a three-family home on the site and simply modify the plans \"a little.\" Which statement is TRUE?",
        options: {A:"The property owner can build whatever he wants to build because he owns the property.",B:"The building department will not issue a C of O, and the building will be considered an illegal dwelling.",C:"The property owner can ignore all the rules if he personally occupies the top-floor apartment.",D:"As long as the property taxes are paid, the owner will not have problems."},
        answer: "B",
        explanation: "The building department will not issue a C of O, and the building will be considered an illegal dwelling."
      },
      {
        q: "An \"unnecessary hardship\" cannot be",
        options: {A:"self-created.",B:"for economic reasons.",C:"a septic tank overflow.",D:"a problem having to do with employees who are on strike."},
        answer: "A",
        explanation: "Self-created. An \"unnecessary hardship\" cannot be self-created."
      },
      {
        q: "Making sure that potholes get filled in every spring is the responsibility of",
        options: {A:"the department of city planning.",B:"the mayor's office.",C:"the city engineer.",D:"the department of buildings."},
        answer: "C",
        explanation: "The city engineer. The city engineer is responsible for making sure potholes get filled every spring."
      },
      {
        q: "A demolition permit is issued by",
        options: {A:"the department of transportation.",B:"the department of buildings.",C:"the department of finance.",D:"the department of city planning."},
        answer: "B",
        explanation: "The department of buildings. A demolition permit is issued by the department of buildings."
      },
      {
        q: "The law requires that tax assessments be based on",
        options: {A:"full value.",B:"percentage value.",C:"depreciated value.",D:"uniform value."},
        answer: "D",
        explanation: "Uniform value. Tax assessments are based on uniform value."
      },
      {
        q: "The New York City Council consists of",
        options: {A:"15 members appointed by the mayor.",B:"10 members from each borough.",C:"51 elected members.",D:"volunteers from various city agencies."},
        answer: "C",
        explanation: "51 elected members. The NYC Council consists of 51 elected members."
      },
      {
        q: "The first step in arriving at a real estate tax rate is",
        options: {A:"adopting a budget.",B:"increasing the previous year's tax rate by 3.5%.",C:"applying for federal aid.",D:"selling New York City tax-exempt bonds."},
        answer: "A",
        explanation: "Adopting a budget. The first step in arriving at a real estate tax rate is the adoption of a budget."
      },
      {
        q: "The section of the New York Real Property Law that governs subdivision is",
        options: {A:"Article 12-A.",B:"Article 11-A.",C:"Article 10-A.",D:"Article 9-A."},
        answer: "D",
        explanation: "Article 9-A. The section of the New York Real Property Law that governs subdivision is Article 9-A."
      },
      {
        q: "A municipality may place a temporary halt to further construction by declaring",
        options: {A:"a cease-and-desist order.",B:"a moratorium.",C:"a restrictive covenant.",D:"all building permits void."},
        answer: "B",
        explanation: "A moratorium. A municipality may place a temporary halt to further construction by declaring a moratorium."
      },
      {
        q: "To allow use of a property that is not in accordance with zoning regulations but provides a service that is in the public interest, the owner of the property may obtain",
        options: {A:"a variance.",B:"a special-use permit.",C:"a permit from the department of buildings.",D:"a permit from the city council."},
        answer: "B",
        explanation: "A special-use permit. The owner of a property may obtain a special-use permit to allow use of the property that is not in accordance with zoning regulations but provides a service that is in the public interest."
      },
      {
        q: "A developer buys an 11-acre site zoned for residential use and plans to subdivide the property. The regulation that governs the development of the site is",
        options: {A:"Article 12-A.",B:"Article 87.",C:"Article 78.",D:"Article 9-A."},
        answer: "D",
        explanation: "Article 9-A. The regulation that governs the development of a site zoned for residential use is Article 9-A."
      },
      {
        q: "An application for listing a property on the National Historic Register is filed with",
        options: {A:"OPRHP.",B:"OSHA.",C:"RESPA.",D:"FNMA."},
        answer: "A",
        explanation: "OPRHP. An application for listing a property on the National Historic Register is filed with OPRHP."
      },
      {
        q: "The property tax assessment is made by",
        options: {A:"the mayor's office.",B:"a popular vote by all property owners.",C:"the city council.",D:"the tax assessor."},
        answer: "D",
        explanation: "The tax assessor. The property tax assessment is made by the tax assessor."
      },
      {
        q: "Development goals of a municipality are recognized through",
        options: {A:"a zoning ordinance.",B:"an infrastructure renovation plan.",C:"a master plan.",D:"a city council meeting."},
        answer: "C",
        explanation: "A master plan. Development goals of a municipality are recognized through a master plan."
      },
      {
        q: "A property owner who has suffered a hardship due to a new zoning ordinance may seek relief by asking for",
        options: {A:"a special-use permit.",B:"a variance.",C:"an exemption.",D:"a preexisting-use permit."},
        answer: "B",
        explanation: "A variance. A property owner who has suffered a hardship due to a new zoning ordinance may seek relief by asking for a variance."
      },
      {
        q: "Issuing demolition permits, building permits, and certificates of occupancy is a primary function of",
        options: {A:"the building department.",B:"the finance department.",C:"the city planning commission.",D:"the parks and recreation department."},
        answer: "A",
        explanation: "The building department. The building department issues demolition permits, building permits, and certificates of occupancy."
      },
    ]
  },
  {
    id: 15,
    title: "Introduction to Construction",
    questions: [
      {
        q: "All of the following are components of a foundation EXCEPT",
        options: {A:"footings.",B:"slab.",C:"steel rods.",D:"gussets."},
        answer: "D",
        explanation: "Gussets. Gussets are found in a truss roof."
      },
      {
        q: "The type of exterior wall framing in which wall studs extend all the way from the first floor to the second floor ceiling is",
        options: {A:"platform framing.",B:"balloon framing.",C:"post-and-beam framing.",D:"truss framing."},
        answer: "B",
        explanation: "Balloon framing. The statement defines balloon framing."
      },
      {
        q: "A window that opens horizontally on a track is",
        options: {A:"a sash.",B:"a slider.",C:"a jalousie.",D:"a casement."},
        answer: "B",
        explanation: "A slider. The statement defines slider windows."
      },
      {
        q: "Which two types of windows are opened and closed with gear systems?",
        options: {A:"Sash and slider",B:"Slider and jalousie",C:"Jalousie and casement",D:"Slider and casement"},
        answer: "C",
        explanation: "Jalousie and casement. Jalousie and casement windows use gears."
      },
      {
        q: "Which of the following types of doors are used only on the interior of a house?",
        options: {A:"Panel",B:"Slab",C:"Hollow core",D:"Solid core flush"},
        answer: "C",
        explanation: "Hollow core. Hollow-core doors are interior only."
      },
      {
        q: "What is the minimum value of home improvement goods and services to which the NYS Home Improvement Law applies?",
        options: {A:"$100",B:"$350",C:"$500",D:"$1,000"},
        answer: "C",
        explanation: "$500. The New York home improvement law applies to purchases over $500."
      },
      {
        q: "In New York, new-home buyers are entitled to a warranty against defects in heating, ventilation, and electrical systems. How many years does this warranty last?",
        options: {A:"One",B:"Two",C:"Three",D:"Six"},
        answer: "B",
        explanation: "Two. The systems warranty lasts for two years."
      },
      {
        q: "In New York, new-home buyers are entitled to a warranty against defects in construction and materials. How many years does this warranty last?",
        options: {A:"One",B:"Two",C:"Three",D:"Six"},
        answer: "A",
        explanation: "One. The materials warranty lasts for one year."
      },
      {
        q: "In New York, new-home buyers are entitled to a warranty against major structural defects. How many years does this warranty last?",
        options: {A:"One",B:"Two",C:"Three",D:"Six"},
        answer: "D",
        explanation: "Six. The structural defects warranty is for six years."
      },
      {
        q: "Which of the following R-values represents the MOST resistance to heat transfer?",
        options: {A:"0.95",B:"1.50",C:"8.00",D:"3:AA"},
        answer: "C",
        explanation: "8.00. Higher R-value equals more resistance."
      },
      {
        q: "In New York State, the electrical code requires a minimum current of",
        options: {A:"220 volts.",B:"110 volts.",C:"150 amps.",D:"100 amps."},
        answer: "D",
        explanation: "100 amps. The code requires 100 amps, which is really too low for today's uses."
      },
      {
        q: "When suggesting structural renovations, the broker should be especially careful about advising the removal of",
        options: {A:"kitchen cabinets and appliances.",B:"bearing walls.",C:"bathroom tiles and faucets.",D:"nonbearing walls."},
        answer: "B",
        explanation: "Bearing walls. While the answer is bearing walls, brokers should be careful not to stray outside their level of expertise. No wall, load-bearing or not, should be removed without an expert opinion."
      },
      {
        q: "If a building inspector says the flashing needs replacing, what does that mean?",
        options: {A:"The waterproof seal on roofs, chimneys, and wall seams is defective and leaks are possible.",B:"The chimney is cracked and needs to be flashed.",C:"The electrical wiring coming into the house is defective.",D:"The soil by the foundation needs grading away from the building."},
        answer: "A",
        explanation: "The waterproof seal on roofs, chimneys, and wall seams is defective and leaks are possible. Flashing is the material that provides a waterproof seal on roofs, chimneys, and wall seams."
      },
      {
        q: "The percolation rate is a measure of",
        options: {A:"how quickly water seeps into the basement.",B:"how quickly water drains from a second-floor bathroom.",C:"the ability of water to drain through the ground.",D:"how much rainwater overflows from gutters and downspouts."},
        answer: "C",
        explanation: "The ability of water to drain through the ground. The percolation rate is essential in determining the feasibility of installing a septic system or the soundness of an existing one."
      },
      {
        q: "A common sheathing material is",
        options: {A:"pine paneling.",B:"wallpaper.",C:"plywood.",D:"tile."},
        answer: "C",
        explanation: "Plywood. Plywood sheathes the walls; the other choices are wall finishes."
      },
      {
        q: "R-value is important in determining",
        options: {A:"the radon levels in a property.",B:"the quality of the insulation.",C:"the pitch of the roof.",D:"the BTUs."},
        answer: "B",
        explanation: "The quality of the insulation. R-value is the numerical measurement of insulation's resistance to heat transfer."
      },
      {
        q: "In construction, studs are",
        options: {A:"lath sticks.",B:"a type of finishing nail.",C:"vertical supports.",D:"roof supports."},
        answer: "C",
        explanation: "Vertical supports. Studs are upright supports placed 16 inches to 24 inches apart."
      },
      {
        q: "After April 1, 2019, smoke detectors sold in New York State must",
        options: {A:"be either hard-wired or contain a 10-year non-removable or non-replaceable battery.",B:"have a back-up battery system integrated in the product design.",C:"have an Energy Star rating.",D:"be hard wired if the home was built before 1978."},
        answer: "A",
        explanation: "Be either hard-wired or contain a 10-year non-removable or non-replaceable battery."
      },
      {
        q: "The term HVAC refers to",
        options: {A:"the state agency that oversees building codes.",B:"ground fault interrupters.",C:"the generic name for Tyvek exterior wrap.",D:"heating, ventilating, and air-conditioning systems."},
        answer: "D",
        explanation: "Heating, ventilating, and air-conditioning systems. HVAC stands for heating, ventilation, and air-conditioning systems."
      },
      {
        q: "Every set of building plans must be certified by",
        options: {A:"a local builder or contractor.",B:"an architect or engineer.",C:"a home inspector.",D:"a Department of Health monitor."},
        answer: "B",
        explanation: "An architect or engineer. Before a building permit is issued, the set of building plans must be signed by a state-licensed architect or engineer."
      },
    ]
  },
  {
    id: 16,
    title: "Valuation Process",
    questions: [
      {
        q: "The purpose of a comparative market analysis (CMA) is to establish an amount that would be used to",
        options: {A:"qualify the property for a mortgage loan.",B:"calculate the real estate tax on the property.",C:"assist an owner in establishing a listing price.",D:"determine the amount of insurance that should be carried on the property."},
        answer: "C",
        explanation: "Assist an owner in establishing a listing price. A CMA is generally used by real estate brokers as a tool for obtaining listings."
      },
      {
        q: "The present worth of a property's future benefits defines its",
        options: {A:"price.",B:"supply.",C:"demand.",D:"value."},
        answer: "D",
        explanation: "Value."
      },
      {
        q: "The price commanded by a property in an arm's-length transaction between informed parties is its",
        options: {A:"present value.",B:"market value.",C:"demand.",D:"depreciation."},
        answer: "B",
        explanation: "Market value. The statement defines market value."
      },
      {
        q: "The effect of a run-down, low-valued property on neighboring home values is called",
        options: {A:"progression.",B:"deterioration.",C:"plottage.",D:"regression."},
        answer: "D",
        explanation: "Regression. Regression refers to a negative effect of one property's value on neighboring home prices."
      },
      {
        q: "An estimate of value based on the expenditure required to replace the subject property is used in which of the methods of appraisal?",
        options: {A:"Cost approach",B:"Market data approach",C:"Income capitalization approach",D:"Sales comparison approach"},
        answer: "A",
        explanation: "Cost approach. Determining value based on expenditures is the cost approach."
      },
      {
        q: "The method of appraisal that would focus on the amount of rent generated by the subject property is",
        options: {A:"the cost approach.",B:"the market data approach.",C:"the income capitalization approach.",D:"the sales comparison approach."},
        answer: "C",
        explanation: "The income capitalization approach. Rents are used in the income capitalization approach."
      },
      {
        q: "A loss of value over time due to physical, functional, or locational factors is called",
        options: {A:"income capitalization.",B:"depreciation.",C:"market price.",D:"situs."},
        answer: "B",
        explanation: "Depreciation. The statement defines depreciation."
      },
      {
        q: "A six-bedroom home with a single bathroom would most likely suffer from",
        options: {A:"external obsolescence.",B:"economic obsolescence.",C:"physical deterioration.",D:"functional obsolescence."},
        answer: "D",
        explanation: "Functional obsolescence. The property suffers from functional obsolescence."
      },
      {
        q: "The exterior brick walls of a seaside property have been seriously damaged by exposure to the salty air. The resulting depreciation in the property's value is due to",
        options: {A:"external obsolescence.",B:"economic obsolescence.",C:"physical deterioration.",D:"functional obsolescence."},
        answer: "C",
        explanation: "Physical deterioration. The example describes physical deterioration."
      },
      {
        q: "A study of recent comparable sales designed to assist a seller in establishing a listing price is a characteristic of",
        options: {A:"an income capitalization approach to value.",B:"a sales comparison approach to value.",C:"a comparative market analysis.",D:"a subject property valuation study."},
        answer: "C",
        explanation: "A comparative market analysis. The statement defines CMA."
      },
      {
        q: "In an appraisal, a community amenity would be the local",
        options: {A:"cost of construction labor.",B:"public swimming pool.",C:"master plan.",D:"building code."},
        answer: "B",
        explanation: "Public swimming pool. Amenities are elements that contribute to the property's attractiveness to potential buyers."
      },
      {
        q: "An arm's-length transaction is",
        options: {A:"a transaction between relative strangers, each trying to do the best for himself.",B:"a figure of speech for a transaction occurring without conflict.",C:"a transaction where the principals are neighbors.",D:"a court-ordered mandate to sell marital assets."},
        answer: "A",
        explanation: "A transaction between relative strangers, each trying to do the best for himself."
      },
      {
        q: "In real estate, assemblage is the term for",
        options: {A:"the merging of several parcels.",B:"the positioning of improvements on the lot.",C:"the reconciliation of various forms of appraisal.",D:"the adjustments between the subject property and comparables."},
        answer: "A",
        explanation: "The merging of several parcels. Assemblage is the process of combining two or more adjacent lots to increase their total value."
      },
      {
        q: "The rate of return a property will produce on the owner's investment is called its",
        options: {A:"gross rent multiplier.",B:"capital gain.",C:"capitalization rate.",D:"CMA."},
        answer: "C",
        explanation: "Capitalization rate. The capitalization rate, or cap rate, is essential for determining the value of income-producing property."
      },
      {
        q: "If the comparable property has a two-car garage worth $10,000 and the subject property has none, the appraiser would make what adjustment?",
        options: {A:"Add $10,000 to the value of the subject property",B:"Subtract $10,000 from the value of the subject property",C:"Make no adjustment at all",D:"Subtract $10,000 from the value of the comparable property"},
        answer: "D",
        explanation: "Subtract $10,000 from the value of the comparable property. It looks as if the subject property may be worth $10,000 less than the one whose sales price we already know. Adjustments are always made to the comparable property."
      },
      {
        q: "An appraiser's license or certification is required for",
        options: {A:"no appraisal work in New York State.",B:"estate- and divorce-related appraisals.",C:"listing agents' recommendations to sellers about sales price.",D:"any federally related appraisal of property worth $250,000 or more."},
        answer: "D",
        explanation: "Any federally related appraisal of property worth $250,000 or more."
      },
      {
        q: "When analyzing economic conditions for an appraisal, the appraiser will look very carefully at which of the following?",
        options: {A:"Mortgage rates",B:"Employment",C:"Supply and demand",D:"All of these"},
        answer: "D",
        explanation: "All of these. Local mortgage rates, employment, and supply and demand are all important factors in an appraisal."
      },
      {
        q: "The MOST common approach for residential sales would be",
        options: {A:"the cost approach.",B:"the replacement cost.",C:"the direct sales comparison.",D:"the income capitalization approach."},
        answer: "C",
        explanation: "The direct sales comparison. Direct sales is the most common form of appraisal for residential property, though new construction may be best served by the cost approach."
      },
      {
        q: "Reconciliation is",
        options: {A:"the final step in the appraisal process.",B:"the process to determine what approach to use in an appraisal.",C:"the procedure a bank underwriter uses to examine two different appraisals for the same property.",D:"the process where two or more co-owners differ on the value of their property."},
        answer: "A",
        explanation: "The final step in the appraisal process. In the final step in the appraisal, the appraiser takes the estimates from the various approaches and analyzes them to arrive at the estimated value."
      },
      {
        q: "Schools, churches, and hospitals are BEST appraised by which approach?",
        options: {A:"Cost",B:"Market",C:"Income",D:"Situs"},
        answer: "A",
        explanation: "Cost. Because it is often impossible to find comparable sales for special-use buildings, the cost or replacement approach is usually used."
      },
    ]
  },
  {
    id: 17,
    title: "Human Rights and Fair Housing",
    questions: [
      {
        q: "All of the following are protected classes under the federal Fair Housing Act EXCEPT",
        options: {A:"religion.",B:"sexual orientation.",C:"sex.",D:"familial status."},
        answer: "B",
        explanation: "Sexual orientation. Sexual orientation is protected by some local laws but not by federal law."
      },
      {
        q: "Under the federal Fair Housing Act, which of the following exemptions apply to real estate brokers?",
        options: {A:"Transactions involving the sale of single-family homes",B:"Rental transactions involving dwellings with fewer than four units",C:"Rental transactions involving dwellings with fewer than six units",D:"None, because absolutely no exemptions apply to brokers"},
        answer: "D",
        explanation: "None, because absolutely no exemptions apply to brokers. There are no exemptions for brokers."
      },
      {
        q: "All of the following are permitted exemptions under the federal Fair Housing Act EXCEPT",
        options: {A:"the sale of a single-family home by the owner.",B:"the rental of units in an owner-occupied three-unit dwelling.",C:"discrimination by a religious organization on the basis of membership in the religion.",D:"racial discrimination based on a broker's good-faith intent to preserve the ethnic character of a neighborhood."},
        answer: "D",
        explanation: "Racial discrimination based on a broker's good-faith intent to preserve the ethnic character of a neighborhood. There are no exemptions for race."
      },
      {
        q: "Steering is",
        options: {A:"the best way to integrate minorities into a community.",B:"ill-advised but not illegal.",C:"the illegal channeling of homeseekers into neighborhoods based on discrimination.",D:"a way to keep neighborhood quotas in balance."},
        answer: "C",
        explanation: "The illegal channeling of homeseekers into neighborhoods based on discrimination."
      },
      {
        q: "Members of civil rights or neighborhood organizations who pretend to be customers or clients as a means of observing fair housing compliance in real estate transactions are called",
        options: {A:"neighborhood block watchers.",B:"federal or state fair housing compliance officers.",C:"testers.",D:"affirmative marketing agents."},
        answer: "C",
        explanation: "Testers. You do not need to be a bona fide customer or client to bring about a fair housing complaint."
      },
      {
        q: "If an individual violates the Civil Rights Act of 1866, what is the maximum monetary penalty that the person may have to pay?",
        options: {A:"The fine would be $25,000.",B:"The fine would be $50,000.",C:"Only injunctive relief is available under the Civil Rights Act of 1866, not monetary damages.",D:"There is no limit to the monetary damages available for a violation of the Civil Rights Act of 1866."},
        answer: "D",
        explanation: "There is no limit to the monetary damages available for a violation of the Civil Rights Act of 1866."
      },
      {
        q: "Informing buyers in a minority community about all available housing opportunities is a practice known as",
        options: {A:"blockbusting.",B:"reverse discrimination.",C:"affirmative marketing.",D:"steering."},
        answer: "C",
        explanation: "Affirmative marketing. The statement defines affirmative marketing."
      },
      {
        q: "Inducing homeowners to sell their properties by suggesting that minority persons have or are about to move into the neighborhood is a practice known as",
        options: {A:"blockbusting.",B:"reverse discrimination.",C:"affirmative marketing.",D:"steering."},
        answer: "A",
        explanation: "Blockbusting. The statement defines blockbusting."
      },
      {
        q: "Because of the ADA, real estate agents must be particularly sensitive to the needs of",
        options: {A:"all protected classes.",B:"disabled individuals.",C:"same-sex couples.",D:"single females."},
        answer: "B",
        explanation: "Disabled individuals. All the answer choices are protected classes, but the Americans with Disabilities Act (ADA) specifically protects disabled individuals."
      },
      {
        q: "In NYS, a cooperative board may reject a couple who are applying for an apartment because they",
        options: {A:"are not married.",B:"have children.",C:"do not meet the building's financial requirements.",D:"are disabled and want specific accommodations."},
        answer: "C",
        explanation: "Do not meet the building's financial requirements. Cooperative boards may reject an applicant for almost any reason, even unfairly. But they are never permitted to reject an application because of protected class discrimination."
      },
      {
        q: "Does a prospective tenant have the right to install a wheelchair ramp?",
        options: {A:"Only with the landlord's permission",B:"Yes, but at his own expense",C:"Not unless the development is specifically reserved for the disabled",D:"No, because it would pose a hazard for other tenants"},
        answer: "B",
        explanation: "Yes, but at his own expense. The disabled tenant has the right to make reasonable accommodations but must remove the changes when the rental is finished."
      },
      {
        q: "Those who think they have encountered a violation of the federal fair housing laws should file their complaints with",
        options: {A:"RESPA.",B:"ADA.",C:"HUD.",D:"the NYS Division of Human Rights."},
        answer: "C",
        explanation: "HUD. The Department of Housing and Urban Development (HUD) enforces federal fair housing laws."
      },
      {
        q: "The term familial status refers to which protected class?",
        options: {A:"Marital status",B:"Group homes",C:"Children",D:"Communes"},
        answer: "C",
        explanation: "Children. The term familial status specifically refers to children."
      },
      {
        q: "Which NYS agency handles discrimination complaints?",
        options: {A:"Department of State",B:"Office of the Attorney General",C:"Department of Health Education and Welfare",D:"Division of Human Rights"},
        answer: "D",
        explanation: "Division of Human Rights. The Division of Human Rights is the best answer because this agency would most likely handle discrimination complaints."
      },
      {
        q: "Landlords, brokers, and sellers are NOT allowed to discriminate on the basis of someone's membership in",
        options: {A:"a protected class.",B:"a bankruptcy support group.",C:"a credit counseling program.",D:"a political party."},
        answer: "A",
        explanation: "A protected class. Groups of individuals needing protection by federal, state, and local agencies against discriminatory practices are known as protected classes."
      },
      {
        q: "Redlining is",
        options: {A:"another name for the protected classes.",B:"the practice of denying or restricting loans on the basis of location.",C:"essentially the same as steering.",D:"concerned with illegal solicitation of listings."},
        answer: "B",
        explanation: "The practice of denying or restricting loans on the basis of location. Redlining is the illegal restriction of lending in certain areas based on ethnic or racial composition."
      },
      {
        q: "Which of these phrases in a real estate ad would violate fair housing regulations?",
        options: {A:"\"Family room\"",B:"\"Wheelchair accessible\"",C:"\"Seeking female roommate\"",D:"\"No families with children\""},
        answer: "D",
        explanation: "\"No families with children.\" According to HUD guidelines, \"advertisements may not ... state a preference for adults, couples, or singles.\""
      },
      {
        q: "The protected class for which there are no exceptions under fair housing laws is",
        options: {A:"sexual preference.",B:"race.",C:"disability.",D:"religion."},
        answer: "B",
        explanation: "Race. The Civil Rights Act of 1866 mandates equal treatment in real estate matters for all races and no limit on penalties for violations."
      },
      {
        q: "Children can be excluded from some housing developments if",
        options: {A:"all residents are age 55 or older.",B:"all units are either studios or one-bedroom apartments.",C:"the development is limited to members of one sex only.",D:"some units are occupied by recovering alcoholics."},
        answer: "A",
        explanation: "All residents are age 55 or older. A development may also exclude children if each unit is occupied by at least one person age 55 or older, and it includes special facilities that are clearly intended for seniors."
      },
      {
        q: "The law that specifically prohibits discrimination based on race, color, religion, or national origin is",
        options: {A:"the ADA.",B:"Title VIII of the Civil Rights Act of 1968.",C:"the Civil Rights Act of 1866.",D:"New York Real Property Law Article 12-A."},
        answer: "B",
        explanation: "Title VIII of the Civil Rights Act of 1968. The law that specifically prohibits discrimination based on race, color, religion, or national origin is Title VIII of the Civil Rights Act of 1968."
      },
    ]
  },
  {
    id: 18,
    title: "Environmental Issues",
    questions: [
      {
        q: "Asbestos poses a health hazard only when it",
        options: {A:"is used in paint, primarily in pre-1978 homes.",B:"builds up in poorly ventilated areas.",C:"is released into the air as dust and fibers.",D:"is released into the groundwater."},
        answer: "C",
        explanation: "Is released into the air as dust and fibers. Asbestos is hazardous as dust and fibers."
      },
      {
        q: "What is a common source of lead contamination?",
        options: {A:"Underground storage tanks",B:"Plumbing pipe insulation",C:"Paint, plumbing pipes, and airborne particles",D:"Electromagnetic fields"},
        answer: "C",
        explanation: "Paint, plumbing pipes, and airborne particles. Paint, plumbing pipes, and airborne particles are a common source of lead contamination."
      },
      {
        q: "An owner is required by federal law to do all the following EXCEPT",
        options: {A:"disclose the location of known lead paint.",B:"test for the presence of lead-based hazards.",C:"give a lead-based paint disclosure form to buyers and tenants.",D:"allow a 10-day inspection period."},
        answer: "B",
        explanation: "Test for the presence of lead-based hazards. Owners are not required to test for lead."
      },
      {
        q: "The owner of a property knows that the EPA has cited a gas station on the corner with a LUST violation. He knows that the leakage may have reached his own property and caused contamination, but because it wasn't his fault he asks the real estate agent not to mention this to any customer. The real estate agent should",
        options: {A:"obey the owner's instructions.",B:"ask the owner to have a Phase II inspection done.",C:"disclose this information to all customers.",D:"market the property as a fixer-upper."},
        answer: "C",
        explanation: "Disclose this information to all customers. Real estate agents are required by law to disclose knowledge of known or suspected environmental contamination to their customers."
      },
      {
        q: "Liability under Superfund is",
        options: {A:"limited to the current owner of record.",B:"joint and several but not retroactive.",C:"voluntary but not strict.",D:"joint and several, strict, and retroactive."},
        answer: "D",
        explanation: "Joint and several, strict, and retroactive. Superfund liability is joint and several, strict, and retroactive."
      },
      {
        q: "Due diligence is the responsibility of",
        options: {A:"all the professionals involved in the transaction.",B:"the buyer.",C:"the attorney.",D:"the real estate agent."},
        answer: "A",
        explanation: "All the professionals involved in the transaction. Due diligence is the responsibility of all the professionals involved in the transaction."
      },
      {
        q: "The ability of soil to process wastewater is tested by",
        options: {A:"percolation.",B:"PRPs.",C:"septic systems.",D:"the EPA."},
        answer: "A",
        explanation: "Percolation. The statement defines percolation."
      },
      {
        q: "An artificially created environmental impurity is the definition of",
        options: {A:"radon gas.",B:"hazardous substances.",C:"pollution.",D:"SBS."},
        answer: "C",
        explanation: "Pollution. The statement defines pollution."
      },
      {
        q: "Impaired physical and mental development in children is a symptom of",
        options: {A:"exposure to radon.",B:"lead poisoning.",C:"sick building syndrome.",D:"prolonged exposure to EMFs."},
        answer: "B",
        explanation: "Lead poisoning. The statement describes the symptoms of lead poisoning."
      },
      {
        q: "Which of the following is a potentially hazardous chemical used in electrical transformers?",
        options: {A:"PCBs",B:"CFCs",C:"Radon",D:"Lead"},
        answer: "A",
        explanation: "PCBs. The statement describes PCBs."
      },
      {
        q: "Treatment of mold problems includes",
        options: {A:"encapsulating affected areas.",B:"remediating damp areas.",C:"submitting test canisters to a laboratory.",D:"using paint to cover up the mold."},
        answer: "B",
        explanation: "Remediating damp areas. After mold is removed, leaks and damp areas must be eliminated."
      },
      {
        q: "Only certain parts of New York State have problems with",
        options: {A:"termites.",B:"mold.",C:"radon.",D:"lead plumbing."},
        answer: "C",
        explanation: "Radon. Radon is not a problem in many parts of the state."
      },
      {
        q: "Chlorofluorocarbons such as Freon are banned because",
        options: {A:"they are an allergen when sprayed.",B:"the gases are used by adolescents as an intoxicant.",C:"the gases destroy the ozone layer.",D:"the pressure has been known to cause explosions."},
        answer: "C",
        explanation: "The gases destroy the ozone layer. While all the answer choices could be considered, the destruction of the earth's ozone layer was the catalyst in getting chlorofluorocarbons banned."
      },
      {
        q: "Electromagnetic fields (EMFs)",
        options: {A:"cause specific brain cancers and should be banned.",B:"are dangerous over a certain current strength so agents should always advise their clients or customers to have the neighborhood high tension wires tested for emissions.",C:"are not a problem and should be ignored.",D:"are energy fields created by high tension wires and appliances."},
        answer: "D",
        explanation: "Are energy fields created by high tension wires and appliances. To date no health hazard or measurements have been established and no one knows for certain whether or not EMFs are a medical problem."
      },
      {
        q: "Any proposed major development is required to submit",
        options: {A:"an electromagnetic field measurement.",B:"a Comprehensive Environmental Response, Compensation, and Liability Statement.",C:"an environmental impact statement.",D:"a radon gas investigation report."},
        answer: "C",
        explanation: "An environmental impact statement. Development cannot be approved without the submission of a satisfactory environmental impact study."
      },
      {
        q: "A home has heating pipes in the basement that are covered with asbestos insulation that is encapsulated and not damaged in any way. If the owners decide to sell the house, they are required to",
        options: {A:"do nothing.",B:"replace all the encapsulating material.",C:"remove the insulation and replace it.",D:"have a Phase I inspection completed before putting the house on the market."},
        answer: "A",
        explanation: "Do nothing. If the asbestos is completely wrapped and the wrapping is undamaged, nothing has to be done."
      },
      {
        q: "Because of potential liability, it can be particularly difficult to sell property that has",
        options: {A:"old lead paint.",B:"asbestos-wrapped hot-air ducts.",C:"underground storage tanks.",D:"suspected radon problems."},
        answer: "C",
        explanation: "Underground storage tanks. Radon is easily treated and lead paint and asbestos can be encapsulated. Leaking underground tanks would require the removal of a great deal of earth and are extremely expensive to remedy."
      },
      {
        q: "The SARA amendment to the Superfund offered some relief from responsibility for",
        options: {A:"landowners suspected in contaminating a property.",B:"later, innocent buyers of contaminated property.",C:"commercial owners of large underground tanks.",D:"real estate appraisers who omit environmental considerations from their estimates."},
        answer: "B",
        explanation: "Later, innocent buyers of contaminated property. Later owners may be free of the expense of cleanup if they can show that they properly investigated before buying."
      },
      {
        q: "A Phase I environmental impact statement includes",
        options: {A:"a review of former ownership and uses of the property.",B:"sample testing and evaluation.",C:"remedying of contamination.",D:"management of environmental hazards."},
        answer: "A",
        explanation: "A review of former ownership and uses of the property. A Phase I review consists of careful examination of all relevant records and a visual site inspection to determine whether hazardous substances might be present."
      },
      {
        q: "Federal laws regulate the installation and maintenance of underground storage tanks with a capacity of more than",
        options: {A:"10 gallons.",B:"100 gallons.",C:"1,000 gallons.",D:"1,100 gallons."},
        answer: "D",
        explanation: "1,100 gallons. Owners of even smaller tanks, however, can be held liable for cleanup in the event of a leak."
      },
    ]
  },
  {
    id: 19,
    title: "Independent Contractor/Employee",
    questions: [
      {
        q: "What percentage of real estate salespeople are estimated to work as independent contractors?",
        options: {A:"10",B:"25",C:"75",D:"90"},
        answer: "D",
        explanation: "90. A few brokerages do treat their salespersons as employees. There is no law against it."
      },
      {
        q: "The classification of a licensee as an employee or an independent contractor depends on all the following factors EXCEPT",
        options: {A:"the licensee's conduct.",B:"the broker's conduct.",C:"the terms of a written agreement.",D:"the number of hours worked."},
        answer: "D",
        explanation: "The number of hours worked. The number of hours worked is irrelevant."
      },
      {
        q: "A broker typically would provide which of the following for an independent contractor?",
        options: {A:"Workers' compensation",B:"Health insurance",C:"Unemployment insurance",D:"Office space"},
        answer: "D",
        explanation: "Office space. A broker may provide office space for an independent contractor."
      },
      {
        q: "All the following are included in the IRS safe-harbor guidelines that define independent contractors in the real estate industry EXCEPT",
        options: {A:"income based on sales output.",B:"a written contract.",C:"licensure as a broker or salesperson.",D:"access to unemployment insurance and workers' compensation benefits."},
        answer: "D",
        explanation: "Access to unemployment insurance and workers' compensation benefits. The safe-harbor guidelines include source of income, contract, and licensure."
      },
      {
        q: "The IRS definition of independent contractor is sometimes in conflict with",
        options: {A:"New York State's definition.",B:"DOS requirements about the supervision of salespeople.",C:"the Sherman Antitrust Act.",D:"the National Association of REALTORS®."},
        answer: "B",
        explanation: "DOS requirements about the supervision of salespeople. Brokers are required to exercise close control of the activities of salespeople, but independent contractors should have more autonomy."
      },
      {
        q: "All of the following contract provisions are required for independent contractor status for real estate licensees under New York law EXCEPT the licensee",
        options: {A:"will not receive compensation based on hours worked.",B:"may work out of his home.",C:"may terminate the agreement at any time.",D:"must work during specific set hours."},
        answer: "D",
        explanation: "Must work during specific set hours. The licensee may work any hours he chooses."
      },
      {
        q: "The employment contract between a broker and a salesperson should be renewed",
        options: {A:"monthly.",B:"quarterly.",C:"annually.",D:"every two years."},
        answer: "C",
        explanation: "Annually. The employment contract should be renewed each year."
      },
      {
        q: "An independent contractor must",
        options: {A:"comply with the broker's policy.",B:"attend office meetings.",C:"take office duty when assigned.",D:"meet a specific sales quota."},
        answer: "A",
        explanation: "Comply with the broker's policy. An independent contractor must comply with the broker's policy."
      },
      {
        q: "A salesperson who is an independent contractor must pay for her own",
        options: {A:"Social Security taxes.",B:"For Sale signs.",C:"office telephone.",D:"errors and omission insurance."},
        answer: "A",
        explanation: "Social Security taxes. As a self-employed individual, the salesperson will pay almost a double amount of FICA tax."
      },
      {
        q: "The real estate agent who expects paid vacations should look for a firm that treats its associates as",
        options: {A:"independent contractors.",B:"brokers.",C:"outside labor.",D:"employees."},
        answer: "D",
        explanation: "Employees. Receiving paid vacations would make the agent an employee in the eyes of the Internal Revenue Service."
      },
      {
        q: "If the associate is treated as an employee, the broker is liable for",
        options: {A:"workers' compensation taxes.",B:"Social Security taxes.",C:"unemployment insurance premiums.",D:"all of these."},
        answer: "D",
        explanation: "All of these. Withholding taxes would also have to be set aside on the salesperson's earnings."
      },
      {
        q: "The difference between a real estate agent functioning as an independent contractor and an employee is",
        options: {A:"how closely the agent must be supervised.",B:"that one is licensed and one isn't.",C:"the nature of the employment.",D:"how the agent is compensated."},
        answer: "C",
        explanation: "The nature of the employment. How the agent is compensated is a component but not the entire definition. An independent contractor is an IRS status describing how one is to work under the supervision of the broker."
      },
      {
        q: "The IRS may rule that someone is an employee who",
        options: {A:"is paid by the hour.",B:"attends sales meetings.",C:"shares in earned commissions.",D:"takes unpaid vacations."},
        answer: "A",
        explanation: "Is paid by the hour. The IRS and NYS guidelines state that a real estate agent who is an independent contractor must be paid for sales output only."
      },
      {
        q: "The broker who wants to avoid problems with the New York Department of Labor should begin by",
        options: {A:"having a written contract with each associate.",B:"requiring attendance at all sales meetings.",C:"enforcing a professional dress code.",D:"providing educational sessions on fair housing compliance."},
        answer: "A",
        explanation: "Having a written contract with each associate. The state pays particular attention to a written independent contractor agreement renewed annually by broker and associate."
      },
      {
        q: "While an employee has taxes withheld from each paycheck, an independent contractor must pay estimated taxes",
        options: {A:"upon receipt of every commission check from their broker.",B:"every month.",C:"quarterly.",D:"only if they earn over $5,000 in any one month."},
        answer: "C",
        explanation: "Quarterly. Independent contractors are required to file and pay quarterly tax returns and file a full return annually."
      },
    ]
  },
  {
    id: 20,
    title: "Income Tax Issues in Real Estate Transactions",
    questions: [
      {
        q: "The IRS allows use of IRA funds (up to $10,000) for the purchase of a first home without payment of what percentage penalty?",
        options: {A:"5",B:"10",C:"15",D:"28"},
        answer: "B",
        explanation: "10. The IRS allows use of IRA funds (up to $10,000) for the purchase of a first home without a payment of a 10% penalty."
      },
      {
        q: "A claim for a tax deduction for mortgage interest payments is limited to",
        options: {A:"$100,000 if filing as single.",B:"$750,000 if filing as married filing jointly.",C:"$500,000 if filing as divorced.",D:"no limit no matter how you file."},
        answer: "B",
        explanation: "$750,000 if filing as married filing jointly. A claim for a tax deduction for mortgage interest payments is limited to $750,000 if filing as \"married filing jointly.\""
      },
      {
        q: "To qualify as a primary or principal residence the property must be the location where a taxpayer has resided for at least how many days or months during the previous five years?",
        options: {A:"370 days; 12 months",B:"540 days; 18 months",C:"730 days; 24 months",D:"37 days; 1 month"},
        answer: "C",
        explanation: "730 days; 24 months. To qualify as a primary or principal residence, the property must be the location where a taxpayer has resided for at least 730 days or 24 months during the previous five years."
      },
      {
        q: "An investor owns a large office building and has 16 employees who maintain and operate the property. When filing a tax return, the investor is considered to have earned",
        options: {A:"portfolio income.",B:"capital gains.",C:"active income.",D:"passive income."},
        answer: "D",
        explanation: "Passive income. The investor would be considered to have earned passive income."
      },
      {
        q: "An owner of a fast-food restaurant has a location at the foot of an exit ramp of a major highway. When additional lanes are added to the highway, the exit ramp is moved and drivers have no access to the restaurant. This is considered",
        options: {A:"bad luck.",B:"physical depreciation.",C:"external obsolescence.",D:"physical obsolescence."},
        answer: "C",
        explanation: "External obsolescence. This situation would be considered external obsolescence."
      },
      {
        q: "Based on the straight-line depreciation method, an owner of a residential income-producing property can depreciate the property over",
        options: {A:"27.5 years.",B:"2.75 years.",C:"3.90 years.",D:"39 years."},
        answer: "A",
        explanation: "27.5 years. Based on the straight-line depreciation method, the owner can depreciate the property over 27.5 years."
      },
      {
        q: "A commercial investment property allows the owner a $62,750 annual tax deduction. The depreciable basis is",
        options: {A:"$1,851,125.",B:"$244,725.",C:"$2,447,250.",D:"$185,112.50."},
        answer: "C",
        explanation: "$2,447,250. As a commercial property, it can be depreciated over 39 years. $62,750 (annual allowable depreciation amount) × 39 (years) = $2,447,250 (the depreciable basis)."
      },
      {
        q: "An investor who owns a three-family rental property wants to do a 1031 exchange to avoid tax liability. The type of property the investor could buy to qualify for the tax exemption would be",
        options: {A:"commercial property that produces income.",B:"residential property that produces income.",C:"a vacant lot.",D:"any of these."},
        answer: "D",
        explanation: "Any of these. The investor could buy commercial property that produces income, residential property that produces income, or a vacant lot to qualify for the tax exemption."
      },
      {
        q: "A property owner has owned an income-producing commercial property for 33 years and has decided to sell it. He finds a buyer and a closing date is scheduled. At the closing, the seller receives a check and deposits the funds in his bank account. He then finds out about a like-kind exchange rule that allows deferment of tax payments and decides to use the money to buy another property. The funds he received will be taxed as capital gains because",
        options: {A:"he did not identify at least three properties.",B:"he can do the 1031 exchange at any time.",C:"he bought property in another state.",D:"he did not use a qualified intermediary to hold the funds."},
        answer: "D",
        explanation: "He did not use a qualified intermediary to hold the funds. The funds would be taxed as capital gains because he did not use a qualified intermediary to hold the funds."
      },
      {
        q: "A 35-year-old first-time homebuyer may use up to how much of his IRA funds for a down payment without paying an early withdrawal penalty?",
        options: {A:"$5,000",B:"$10,000",C:"$15,000",D:"$20,000"},
        answer: "B",
        explanation: "$10,000. A 35-year-old first-time homebuyer may use up to $10,000 of his IRA funds for a down payment without paying an early withdrawal penalty."
      },
      {
        q: "A couple buys their first home for $725,000. They have sufficient funds for a 20% down payment. Their bank has approved a mortgage loan for the balance with a charge of 2.5 points for the transaction. The fee that they are being charged for this loan is",
        options: {A:"$14,500.",B:"$18,175.",C:"$3,625.",D:"$15,000."},
        answer: "A",
        explanation: "$14,500. $725,000 × 20% = $145,000 (the down payment), leaving a balance of $580,000 (the amount of the mortgage loan). $580,000 × 2.5% = $14,500."
      },
      {
        q: "A homeowner owns a vacation home that is only used during the summer months. If the vacation home is rented out during the rest of the year,",
        options: {A:"the income is tax-free.",B:"taxes are only due on the first two weeks of rental income.",C:"all the collected rental income is taxable.",D:"no taxes are due as long as the rental income is put into an IRA account."},
        answer: "C",
        explanation: "All the collected rental income is taxable. If the vacation home is rented out during the rest of the year, all the collected rental income is taxable."
      },
      {
        q: "A couple owns a condo in Manhattan that they only use on weekends. They do not rent it out. They have owned the condo for four and a half years and have decided to sell it. If they file their tax return as married filing jointly, they would be allowed to keep up to how much of the sales proceeds as tax-free income?",
        options: {A:"$0",B:"$250,000",C:"$500,000",D:"100%"},
        answer: "A",
        explanation: "$0. The couple can keep none of the sales proceeds as tax-free income."
      },
      {
        q: "Income earned from a real estate investment property is considered",
        options: {A:"active income.",B:"passive income.",C:"portfolio income.",D:"tax-free income."},
        answer: "B",
        explanation: "Passive income. Income from real estate investment property is considered passive income."
      },
      {
        q: "Capital gains are",
        options: {A:"the adjusted basis less the sales price.",B:"the sales price plus rental income less the adjusted basis.",C:"the sales price plus cost of improvements less the adjusted basis.",D:"the sales price less the adjusted basis."},
        answer: "D",
        explanation: "The sales price less the adjusted basis. Capital gains equal the sales price less the adjusted basis."
      },
      {
        q: "Shared bathrooms in a multifamily dwelling are an indication of",
        options: {A:"functional obsolescence.",B:"physical obsolescence.",C:"internal obsolescence.",D:"physical deterioration."},
        answer: "A",
        explanation: "Functional obsolescence. Shared bathrooms in a multifamily dwelling are an indication of functional obsolescence."
      },
      {
        q: "The current cost recovery period for a residential income-producing property is",
        options: {A:"5 years.",B:"39 years.",C:"17.5 years.",D:"27.5 years."},
        answer: "D",
        explanation: "27.5 years. The current cost recovery period for a residential income-producing property is 27.5 years."
      },
      {
        q: "A property owner wants to sell her investment property but wants to defer payment of capital gains taxes. The IRS says she can do this by",
        options: {A:"selling the property at a loss.",B:"doing a 1031 exchange.",C:"placing the sales proceeds in an IRA account.",D:"investing the sales proceeds in municipal bonds."},
        answer: "B",
        explanation: "Doing a 1031 exchange. He can do this by doing a 1031 exchange."
      },
      {
        q: "Under federal tax laws, gains realized on the sale of an investment property qualify for long-term capital gains tax treatment if the property was held for at LEAST",
        options: {A:"one year and one day.",B:"two years and one day.",C:"five years and one day.",D:"10 years and one day."},
        answer: "A",
        explanation: "One year and one day. The gains realized qualify for long-term capital gains tax treatment if the property was held for at least one year and one day."
      },
      {
        q: "Commissions paid to a real estate agent are considered",
        options: {A:"passive income.",B:"active income.",C:"shared income.",D:"portfolio income."},
        answer: "B",
        explanation: "Active income. Commissions paid to a real estate agent are considered active income."
      },
    ]
  },
  {
    id: 21,
    title: "Commercial and Investment Properties",
    questions: [
      {
        q: "Adjusted net operating income is considered part of",
        options: {A:"the cash world.",B:"the tax world.",C:"both worlds.",D:"neither world."},
        answer: "B",
        explanation: "The tax world. Adjusted net operating income is considered part of the tax world."
      },
      {
        q: "Generally, a residential lease is",
        options: {A:"a gross lease.",B:"a net lease.",C:"a percentage lease.",D:"an adjusted lease."},
        answer: "A",
        explanation: "A gross lease. A residential lease is generally a gross lease."
      },
      {
        q: "Apex Distributors, Inc., rents a warehouse from Realty Associates, LLC, for a five-year term. During the fourth year of the lease term, the property is sold to Property Managers, LLC. Because Apex Distributors is currently paying rent at below-market rates, Property Managers has the right to",
        options: {A:"raise the rent to current levels.",B:"discard the current lease and prepare a new short-term lease with a higher rental rate.",C:"evict Apex Distributors because it refuses to pay additional rent.",D:"do nothing until the current lease expires."},
        answer: "D",
        explanation: "Do nothing until the current lease expires. Property managers have the right to do nothing until the current lease expires."
      },
      {
        q: "A commercial tenant has a 10-year lease with an escalation clause in it. The escalation clause would give the landlord the right to",
        options: {A:"raise the rent on an arbitrary schedule.",B:"raise the rent in any way that benefits the landlord.",C:"raise the rent based on the agreed-upon escalation rate.",D:"evict the tenant if the landlord found another tenant willing to pay a higher rent."},
        answer: "C",
        explanation: "Raise the rent based on the agreed-upon escalation rate. The escalation clause would give the landlord the right to raise the rent based on the agreed-upon escalation rate."
      },
      {
        q: "Using OPM in a real estate transaction is",
        options: {A:"illegal in New York State.",B:"a method of using rental payments to offset the purchase price of the property.",C:"utilizing leverage.",D:"the determining factor in deciding what type of ownership the buyer receives."},
        answer: "C",
        explanation: "Utilizing leverage. Using OPM in a real estate transaction is utilizing leverage."
      },
      {
        q: "The most liquid method of investing in real property would be",
        options: {A:"buying into a REIT.",B:"owning beachfront real estate.",C:"owning a fully rented office building.",D:"owning a yacht club."},
        answer: "A",
        explanation: "Buying into a REIT. The most liquid method of investing in real property would be buying into a REIT."
      },
      {
        q: "A gift shop in a large shopping mall would MOST likely have",
        options: {A:"a gross lease.",B:"a net lease.",C:"an adjustable lease.",D:"a percentage lease."},
        answer: "D",
        explanation: "A percentage lease. A gift shop in a large shopping mall would most likely have a percentage lease."
      },
      {
        q: "An investor owns a property that generates an NOI of $221,570. He has $15,750 set aside for reserves for replacement. Annual mortgage interest payments equal $67,250. Annual depreciation is $18,900. The carryover/suspended loss equals $4,990. If the investor is in the 28% marginal rate, the tax payment would be",
        options: {A:"$49,304.04.",B:"$40,930.40.",C:"$4,093.04.",D:"$32,110.12."},
        answer: "B",
        explanation: "$40,930.40. NOI + reserve – interest – depreciation – carryover/loss (C & L) = taxable income × 28% = $40,930.40."
      },
      {
        q: "The oldest type of investment property is",
        options: {A:"vacant land.",B:"old factory buildings.",C:"old office buildings.",D:"stores on main street built before 1900."},
        answer: "A",
        explanation: "Vacant land. The oldest type of investment property is vacant land."
      },
      {
        q: "Net operating income is",
        options: {A:"cash flow after deducting all operational expenses.",B:"cash flow after deducting debt service.",C:"cash flow after deducting all operational expenses but before deducting debt service.",D:"cash flow after deducting all operational expenses and including the vacancy loss factor."},
        answer: "C",
        explanation: "Cash flow after deducting all operational expenses but before deducting debt service. Net operating income is cash flow after deducting all operational expenses but before deducting debt service."
      },
      {
        q: "The use of leverage in a real estate transaction refers to the ability to",
        options: {A:"corner the other party into an agreement that favors you.",B:"use more of OPM to finance the transaction.",C:"find a better deal.",D:"sell at the highest possible price."},
        answer: "B",
        explanation: "Use more of OPM to finance the transaction. The use of leverage in a real estate transaction refers to the ability to use more of OPM to finance the transaction."
      },
      {
        q: "The cash flow attributable to a property after deducting all operating expenses but before deducting debt service, depreciation, and previous year's losses is called",
        options: {A:"NOI.",B:"ROI.",C:"PGI.",D:"EGI."},
        answer: "A",
        explanation: "NOI. The cash flow attributable to the property would be NOI."
      },
      {
        q: "A tenant who holds a valid lease may be evicted as a result of foreclosure by the bank if the lease contains",
        options: {A:"an alienation clause.",B:"an acceleration clause.",C:"a subordination clause.",D:"an escalation clause."},
        answer: "C",
        explanation: "A subordination clause. If the lease contains a subordination clause, the tenant may be evicted as a result of foreclosure."
      },
      {
        q: "A method through which tenants may benefit by having lower electric bills is known as",
        options: {A:"direct metered service.",B:"metric metered service.",C:"alternate metered service.",D:"submetered service."},
        answer: "D",
        explanation: "Submetered service. Tenants may have lower electric bills through submetered service."
      },
      {
        q: "A big-box store signing a 20-year lease on a building would MOST likely get a",
        options: {A:"gross lease.",B:"net lease.",C:"graduated net lease.",D:"percentage lease."},
        answer: "C",
        explanation: "Graduated net lease. A big-box store that signed a 20-year lease would most likely get a graduated net lease."
      },
      {
        q: "An investor buys a property with a small down payment. The investor wants to take advantage of low interest rates and takes out a large mortgage loan for 93% of the purchase price. This investment would be considered",
        options: {A:"low risk.",B:"high risk.",C:"capitalized risk.",D:"low leveraged risk."},
        answer: "B",
        explanation: "High risk. This investment would be considered high risk."
      },
      {
        q: "A first-class hotel with several shops in the lobby area would be considered",
        options: {A:"residential property.",B:"commercial property.",C:"special-use property.",D:"mixed-use property."},
        answer: "B",
        explanation: "Commercial property. A first-class hotel with several shops in the lobby area would be considered commercial property."
      },
      {
        q: "PGI is an analysis of an investment assuming that the property is",
        options: {A:"fully vacant.",B:"fully renovated.",C:"completely paid for.",D:"fully leased."},
        answer: "D",
        explanation: "Fully leased. PGI is an analysis of an investment assuming that the property is fully leased."
      },
      {
        q: "Property taxes are considered",
        options: {A:"fixed expenses.",B:"variable expenses.",C:"adjustable expenses.",D:"reserve expenses."},
        answer: "A",
        explanation: "Fixed expenses. Property taxes are considered fixed expenses."
      },
      {
        q: "A property owner receives $634,375 per year NOI from her property. The property has been put up for sale. An investor who is looking for an ROI of at least 7.25% would be prepared to pay up to how much for this property?",
        options: {A:"$7,850,000",B:"$8,750,000",C:"$5,635,000",D:"$6,354,000"},
        answer: "B",
        explanation: "$8,750,000. An investor should be prepared to pay up to $8,750,000 to receive an ROI of at least 7.25%. Value = NOI/ROI. To determine value to this investor: $634,375 / 0.0725 = $8,750,000."
      },
    ]
  },
  {
    id: 22,
    title: "Real Property Management",
    questions: [
      {
        q: "A CPM designation may be earned by taking property management courses with",
        options: {A:"IREM.",B:"HUD.",C:"BOMA.",D:"DHCR."},
        answer: "A",
        explanation: "IREM. A CPM designation may be earned by taking property management courses with IREM."
      },
      {
        q: "In New York City, the MBR is established for apartments regulated by",
        options: {A:"Section 8 housing.",B:"rent stabilization.",C:"rent control.",D:"luxury decontrol."},
        answer: "C",
        explanation: "Rent control. In NYC, the MBR is established for apartments regulated by rent control."
      },
      {
        q: "When a tenant pays a fixed monthly rental with no additional fees due to the landlord, the tenant has",
        options: {A:"a net lease.",B:"a graduated lease.",C:"a percentage lease.",D:"a gross lease."},
        answer: "D",
        explanation: "A gross lease. When a tenant pays a fixed monthly rental with no additional fees due to the landlord, the tenant has a gross lease."
      },
      {
        q: "A type of real estate NOT usually rented by the square foot is",
        options: {A:"retail property.",B:"residential apartments.",C:"boutique shops in a large mall.",D:"professional office space."},
        answer: "B",
        explanation: "Residential apartments. Residential apartments are not usually rented by the square foot."
      },
      {
        q: "A property manager schedules periodic inspections of the roof, elevators, and heating system in his building. This is considered",
        options: {A:"a legal requirement.",B:"preventive maintenance.",C:"corrective maintenance.",D:"nonproductive."},
        answer: "B",
        explanation: "Preventive maintenance. When a property manager schedules periodic inspections of the roof, elevators, and heating system in the building it is considered preventive maintenance."
      },
      {
        q: "To ascertain how much rent she can charge for an apartment, a property manager should consider all of the following EXCEPT",
        options: {A:"the rental rates in comparable buildings in the area.",B:"the amenities being offered.",C:"the rental rates being paid by local store tenants.",D:"current supply and demand for apartments."},
        answer: "C",
        explanation: "The rental rates being paid by local store tenants. To determine rent, a property manager should consider the rental rates being paid by local store tenants."
      },
      {
        q: "In selecting tenants for an apartment building, a property manager may NOT",
        options: {A:"ask the tenant to pay for a credit report.",B:"ask for bank statements.",C:"ask for income verification.",D:"refuse to lease to a disabled tenant."},
        answer: "D",
        explanation: "Refuse to lease to a disabled tenant. A property manager may not refuse to lease to a disabled tenant."
      },
      {
        q: "If a security deposit is held in an interest-bearing account, the property manager is entitled to keep",
        options: {A:"up to 1% of the earned interest.",B:"all the interest.",C:"the entire deposit if the tenant leaves and does not ask for it.",D:"nothing."},
        answer: "A",
        explanation: "Up to 1% of the earned interest. If a security deposit is held in an interest-bearing account, the property manager may keep up to 1% of the interest earned."
      },
      {
        q: "When advertising an apartment for rent, the property manager may advertise",
        options: {A:"no pets allowed.",B:"no unmarried couples allowed.",C:"no foreigners allowed.",D:"no children allowed."},
        answer: "A",
        explanation: "No pets allowed. A property manager may advertise no pets allowed but may not advertise no unmarried couples allowed, no foreigners allowed, or no children allowed."
      },
      {
        q: "The relationship between a property manager and the property owner is that of",
        options: {A:"universal agent.",B:"special agent.",C:"exclusive agent.",D:"general agent."},
        answer: "D",
        explanation: "General agent. The relationship between a property manager and the property owner is that of a general agent."
      },
      {
        q: "An investor owns a three-family house that was built in 1975. The three apartments have always been leased, but no lease has ever run longer than five years. The legal rental rate of the apartments would be determined by",
        options: {A:"rent-control regulations.",B:"rent-stabilization regulations.",C:"market conditions.",D:"ETPA regulations."},
        answer: "C",
        explanation: "Market conditions. This property is subject to market conditions."
      },
      {
        q: "A low-income tenant wants to rent an apartment in Section 8 housing. The tenant earns $12,000 per year. The rent for the apartment is $800 per month. How much will this tenant pay per month?",
        options: {A:"$800",B:"$300",C:"$500",D:"Nothing; HUD will pay the entire rent."},
        answer: "B",
        explanation: "$300. The tenant will pay $300."
      },
      {
        q: "In New York City, Local Law 11 applies to",
        options: {A:"single-family homes.",B:"two-story garden apartments.",C:"parking garages.",D:"any building that is more than 75 feet high."},
        answer: "D",
        explanation: "Any building that is more than 75 feet high. Local Law 11 in NYC applies to any building that is more than 75 feet high."
      },
      {
        q: "An indication that rental rates are too low would be a",
        options: {A:"20% vacancy rate.",B:"100% occupancy rate.",C:"high rate of late rental payments.",D:"recession."},
        answer: "B",
        explanation: "100% occupancy rate. A 100% occupancy rate is a sign that rental rates are too low."
      },
      {
        q: "A tenant renting industrial warehouse space would MOST likely get",
        options: {A:"a gross lease.",B:"a percentage lease.",C:"a net lease.",D:"a month-to-month lease."},
        answer: "C",
        explanation: "A net lease. A tenant renting industrial warehouse space would most likely get a net lease."
      },
      {
        q: "The BEST way for a property manager to ensure timely rent collections is to",
        options: {A:"require a high security deposit.",B:"qualify prospective tenants.",C:"add high late payment fees.",D:"require that tenants pay their rent with electronic transfers."},
        answer: "B",
        explanation: "Qualify prospective tenants. The best way to ensure timely rent collection is to qualify prospective tenants."
      },
      {
        q: "Owners of mobile home parks with more than two units must register with",
        options: {A:"the DHCR.",B:"the Department of Parks and Recreation.",C:"the Department of Finance.",D:"HUD."},
        answer: "A",
        explanation: "The DHCR. Owners of mobile home parks with more than two units must register with the DHCR."
      },
      {
        q: "Periodic inspections of elevators, the roof, and HVAC systems indicate that the property manager is performing",
        options: {A:"preventive maintenance.",B:"corrective maintenance.",C:"constructive maintenance.",D:"annual maintenance."},
        answer: "A",
        explanation: "Preventive maintenance. Periodic inspections performed by the property manager are preventive maintenance."
      },
      {
        q: "In New York City, rent-controlled apartments have an MBR that is adjusted every",
        options: {A:"year.",B:"two years.",C:"three years.",D:"four years."},
        answer: "B",
        explanation: "Two years. In NYC, rent-controlled apartments have an MBR that is adjusted every two years."
      },
      {
        q: "Rent-stabilization regulations in New York City apply to buildings built between February 1, 1947, and January 1, 1974, that have",
        options: {A:"12 or more units.",B:"10 or more units.",C:"8 or more units.",D:"6 or more units."},
        answer: "D",
        explanation: "6 or more units. Rent stabilization regulations in NYC apply to buildings built between February 1, 1947, and January 1, 1974, that have six or more units."
      },
    ]
  },
  {
    id: 23,
    title: "Taxes and Assessments",
    questions: [
      {
        q: "A municipality decides to improve the lighting in a neighborhood where the streetlights do not function properly. New streetlights are installed. The homeowners on those streets that have new lights are billed for this service. The bill is known as",
        options: {A:"an ad valorem tax.",B:"a special assessment.",C:"a tax lien.",D:"a full-value tax."},
        answer: "B",
        explanation: "A special assessment. The bill for new streetlights is known as a special assessment."
      },
      {
        q: "A homeowner decides that he wants to convert his basement into an apartment and rent it out. Because he is handy, he decides to install a kitchenette and a bathroom by himself. He does not apply for a building permit. After completing the work, he puts a tenant into the new apartment. The improvements made by the homeowner",
        options: {A:"are illegal.",B:"will increase the value of the house.",C:"will increase the real estate taxes.",D:"will qualify the homeowner for a tax exemption."},
        answer: "A",
        explanation: "Are illegal. These improvements are illegal."
      },
      {
        q: "The method used to ensure uniform assessments between districts is known as",
        options: {A:"in rem.",B:"appropriation.",C:"an equalization factor.",D:"a mill rate."},
        answer: "C",
        explanation: "An equalization factor. The method used to ensure uniform assessments between districts is known as an equalization factor."
      },
      {
        q: "To protest a property tax bill, a homeowner may file",
        options: {A:"a grievance.",B:"a certiorari.",C:"an injunction.",D:"a redemption."},
        answer: "A",
        explanation: "A grievance. A homeowner may file a grievance to protest a property tax bill."
      },
      {
        q: "A tax protest is denied. The homeowner may",
        options: {A:"stop payment.",B:"file a tax certiorari proceeding.",C:"file a claim in small claims court.",D:"apply for a STAR exemption."},
        answer: "B",
        explanation: "File a tax certiorari proceeding. A homeowner may file a tax certiorari proceeding if a tax protest is denied."
      },
      {
        q: "A combat veteran files for a tax exemption. The veteran will need",
        options: {A:"a medical assessment form.",B:"a U.S. passport.",C:"a DD 214.",D:"a filing fee of $50."},
        answer: "C",
        explanation: "A DD 214."
      },
      {
        q: "A homeowner files a protest on the assessed value of her home. A legitimate reason for winning the protest would be",
        options: {A:"the property is not worth as much as the tax assessor says it is worth.",B:"the tax rate is too high.",C:"the taxes paid are used for unnecessary services.",D:"the homeowner is unemployed."},
        answer: "A",
        explanation: "The property is not worth as much as the tax assessor says it is worth."
      },
      {
        q: "When asked, \"What are the taxes?\" by a customer considering the purchase of a home, a real estate agent should quote the true tax, which is",
        options: {A:"the taxes due after all exemptions are taken.",B:"the taxes due before all exemptions are taken.",C:"the assessed value of the property.",D:"the taxes due after the equalization factor is computed."},
        answer: "B",
        explanation: "The taxes due before all exemptions are taken. The \"true tax\" is the tax due before all exemptions are taken."
      },
      {
        q: "A property is assessed as follows: Land value: $3,500; Improvement value: $241,000. If the tax rate is 24 mills on the total assessed value, the taxes that would be due are",
        options: {A:"$58,680.",B:"$586.80.",C:"$58.68.",D:"$5,868."},
        answer: "D",
        explanation: "$5,868. The taxes that would be due are $5,868."
      },
      {
        q: "A homeowner gets an annual tax bill for $3,862. If the owner sells the house and the new assessed value of the property increases the real estate tax bill by $1,175 over the next five years, the new owner can expect to see the property tax increase by how much per year?",
        options: {A:"17.5%",B:"$470",C:"$235",D:"$117.59"},
        answer: "C",
        explanation: "$235. The new owner can expect to see the property tax increase by $235 per year."
      },
      {
        q: "In New York City after a tax foreclosure auction, the homeowners who lost the house are entitled to a statutory exemption period that will allow them to redeem the property for a period of up to",
        options: {A:"2 months.",B:"4 months.",C:"12 months.",D:"24 months."},
        answer: "B",
        explanation: "4 months. The property can be redeemed for a period of up to four months."
      },
      {
        q: "An inducement offered by many municipalities to bring business to that municipality is known as",
        options: {A:"a tax abatement.",B:"a STAR exemption.",C:"a certiorari.",D:"an ad valorem."},
        answer: "A",
        explanation: "A tax abatement. An inducement offered by many municipalities to bring business to that municipality is known as a tax abatement."
      },
      {
        q: "When a property owner is delinquent in making real estate tax payments, the city may take the property as collateral by recording",
        options: {A:"an in rem procedure.",B:"a tax lien.",C:"a notice of a tax foreclosure sale.",D:"an ad valorem tax."},
        answer: "B",
        explanation: "A tax lien. The city may take the property as collateral by recording a tax lien."
      },
      {
        q: "A real estate agent wants to know the assessed values of homes on a certain block. The best source for this information would be",
        options: {A:"old listings.",B:"the tax assessment rolls.",C:"a bank.",D:"asking the homeowners on that block."},
        answer: "B",
        explanation: "The tax assessment rolls. The best source of information on assessed values of homes on a certain block would be the tax assessment rolls."
      },
      {
        q: "A self-storage warehouse would be categorized as",
        options: {A:"unimproved property.",B:"homestead.",C:"nonhomestead.",D:"full-value real estate."},
        answer: "C",
        explanation: "Nonhomestead. A self-storage warehouse would be categorized as nonhomestead."
      },
      {
        q: "The department of sanitation wants to buy six new trucks. In order to get money to pay for these trucks, there must be",
        options: {A:"a special assessment.",B:"a property tax increase.",C:"an equalization of tax revenue disbursement.",D:"an appropriation."},
        answer: "D",
        explanation: "An appropriation. There must be an appropriation to get money to pay for six new trucks."
      },
      {
        q: "A tax bill is calculated by",
        options: {A:"dividing the assessed value by the tax rate and adding $500.",B:"multiplying the assessed value by the tax rate.",C:"multiplying the equalization factor by the tax rate.",D:"dividing the equalization rate by the assessed value."},
        answer: "B",
        explanation: "Multiplying the assessed value by the tax rate."
      },
      {
        q: "New York City starts a foreclosure action against a house when real estate taxes have not been paid in two years. This action is called",
        options: {A:"a tax foreclosure.",B:"foreclosure in rem.",C:"tax certiorari.",D:"default."},
        answer: "B",
        explanation: "Foreclosure in rem. This action is called foreclosure in rem."
      },
      {
        q: "A property will always be reassessed for tax purposes when",
        options: {A:"special assessments are necessary.",B:"a new mayor is elected.",C:"the property is sold.",D:"the property owner gets divorced."},
        answer: "C",
        explanation: "The property is sold. A property will always be reassessed for tax purposes when the property is sold."
      },
      {
        q: "In New York State, all upstate communities, when assessing property, are required by law to use",
        options: {A:"a uniform percentage of value.",B:"only elected tax assessors.",C:"ad valorem taxes.",D:"full-value assessments."},
        answer: "A",
        explanation: "A uniform percentage of value. In NYS, all upstate communities when assessing properties are required by law to use a uniform percentage of value."
      },
    ]
  },
  {
    id: 24,
    title: "Condominiums and Cooperatives",
    questions: [
      {
        q: "A condominium is managed by",
        options: {A:"a sponsor.",B:"a board of managers.",C:"a board of directors.",D:"an ad hoc group of people in the neighborhood."},
        answer: "B",
        explanation: "A board of managers. A condominium is managed by a board of managers."
      },
      {
        q: "The monthly charges paid by a co-op owner are called",
        options: {A:"maintenance charges.",B:"common charges.",C:"voluntary charges.",D:"assessments."},
        answer: "A",
        explanation: "Maintenance charges. The monthly charges paid by a co-op owner are called maintenance charges."
      },
      {
        q: "Before buying a condominium unit, a buyer should read",
        options: {A:"the NYS regulations concerning condominium ownership.",B:"Article 12-A.",C:"the red herring.",D:"the offering plan."},
        answer: "D",
        explanation: "The offering plan. Before buying a condominium unit, a buyer should read the offering plan."
      },
      {
        q: "CC&R stands for",
        options: {A:"covenants, closings, and restrictions.",B:"covenants, conditions, and redevelopment.",C:"covenants, conditions, and restrictions.",D:"conversions, control, and restrictions."},
        answer: "C",
        explanation: "Covenants, conditions, and restrictions. CC&Rs stands for covenants, conditions, and restrictions."
      },
      {
        q: "Reserve money is usually held to pay for",
        options: {A:"salaries of the board of directors.",B:"major building maintenance.",C:"property tax payments.",D:"underlying mortgage payments."},
        answer: "B",
        explanation: "Major building maintenance. Reserve money is usually held to pay for major building maintenance."
      },
      {
        q: "At the closing, a new co-op owner usually receives",
        options: {A:"a deed to the unit and a parking space.",B:"a long-term lease with the right to sublet.",C:"an option to cancel the contract within 30 days.",D:"a stock certificate and a proprietary lease."},
        answer: "D",
        explanation: "A stock certificate and a proprietary lease. At the closing, a new co-op owner usually receives a stock certificate and a proprietary lease."
      },
      {
        q: "The holder of \"unsold shares\" is usually",
        options: {A:"the sponsor.",B:"the attorney general's office.",C:"a tenant who does not want to buy.",D:"the bank."},
        answer: "A",
        explanation: "The sponsor. The holder of \"unsold shares\" is usually the sponsor."
      },
      {
        q: "When a \"flip tax\" is charged, the money is usually",
        options: {A:"given to the sponsor.",B:"paid as a dividend to the remaining unit owners.",C:"put into the reserve fund account.",D:"used to pay the underlying mortgage."},
        answer: "C",
        explanation: "Put into the reserve fund account. When a \"flip tax\" is charged, the money is usually put into the reserve fund account."
      },
      {
        q: "A proprietary lease is a lease where",
        options: {A:"a tenant cannot be evicted.",B:"the unit owner is the landlord.",C:"the sponsor is the landlord.",D:"the board of managers is the landlord."},
        answer: "B",
        explanation: "The unit owner is the landlord. A proprietary lease is a lease in which the unit owner is the landlord."
      },
      {
        q: "In an eviction plan co-op conversion, the number of units in the building that must be sold for the plan to become effective is",
        options: {A:"15%.",B:"51%.",C:"15% in New York City and 51% in Rockland, Westchester, and Nassau counties.",D:"51% in New York City and 15% in Rockland, Westchester, and Nassau counties."},
        answer: "B",
        explanation: "51%. The number of units in the building that must be sold for the plan to become effective is 51%."
      },
      {
        q: "A co-op owner receives a stock certificate when buying a co-op unit. This certificate is considered",
        options: {A:"real property.",B:"personal property.",C:"an easement.",D:"a contract."},
        answer: "B",
        explanation: "Personal property. This certificate is considered personal property."
      },
      {
        q: "Condominium owners are bound by the rules set forth by the owners association. These rules are known as",
        options: {A:"bylaws.",B:"covenants.",C:"deed restrictions.",D:"encumbrances."},
        answer: "A",
        explanation: "Bylaws. These rules are known as bylaws."
      },
      {
        q: "A condominium is usually managed by",
        options: {A:"a board of directors.",B:"a board of managers.",C:"shareholders.",D:"a sponsor."},
        answer: "B",
        explanation: "A board of managers. A condo is usually managed by a board of managers."
      },
      {
        q: "Before a developer can build a new condominium or cooperative building, he must first file",
        options: {A:"an appeal for a zoning variance.",B:"an application with the city planning board.",C:"an application with the Department of Finance.",D:"a disclosure statement with the Office of the Attorney General."},
        answer: "D",
        explanation: "A disclosure statement with the Office of the Attorney General. The developer must first file for a disclosure statement with the office of the attorney general."
      },
      {
        q: "For a noneviction plan cooperative building to become effective, the percentage of current tenants who must agree to buy their units must be at LEAST",
        options: {A:"15%.",B:"25%.",C:"35%.",D:"51%."},
        answer: "A",
        explanation: "15%. The percentage of current tenants who must agree must be at least 15%."
      },
      {
        q: "Before a sponsor is allowed to offer condominium units for sale to the public, the sponsor must first wait for the offering plan to be approved by",
        options: {A:"the department of city planning.",B:"the DOB.",C:"the Office of the Attorney General.",D:"the DHCR."},
        answer: "C",
        explanation: "The Office of the Attorney General. The offering plan must be approved by the Office of the Attorney General."
      },
      {
        q: "A co-op owner may retain ownership of her unit",
        options: {A:"for up to 49 years.",B:"as a qualified fee owner.",C:"for as long as the cooperative corporation is in existence.",D:"as a tenant-at-will."},
        answer: "C",
        explanation: "For as long as the cooperative corporation is in existence. A co-op owner may retain ownership of her unit for as long as the cooperative corporation is in existence."
      },
      {
        q: "How does the IRS treat expenses of the owner of a cooperative?",
        options: {A:"The expenses receive the same income tax treatment as the owner of a condominium or a single home.",B:"None of the expenses may be deducted because the owner holds personal property in the form of stock.",C:"Expenses may be deducted only if at least 80% of the co-op profits are distributed as dividends to shareholders.",D:"Expenses may be deducted only if no single shareholder in the cooperative owns more than 20% of all outstanding co-op stock."},
        answer: "B",
        explanation: "None of the expenses may be deducted because the owner holds personal property in the form of stock. Owner expenses are not deductible."
      },
      {
        q: "When a co-op is initially formed, the organizing party is called",
        options: {A:"the fee simple owner.",B:"the sponsor.",C:"the developer.",D:"the director of the board."},
        answer: "B",
        explanation: "The sponsor. The organizing party is called the sponsor."
      },
      {
        q: "A preliminary prospectus for the conversion of a rental property into a condominium is known as",
        options: {A:"an offering plan.",B:"the black book.",C:"the red herring.",D:"the BLT."},
        answer: "C",
        explanation: "The red herring. The preliminary prospectus is known as the red herring."
      },
    ]
  },
  {
    id: 25,
    title: "Property Insurance",
    questions: [
      {
        q: "The MOST comprehensive homeowners policy that a homeowner can get is",
        options: {A:"HO-1.",B:"HO-2.",C:"HO-3.",D:"HO-4."},
        answer: "C",
        explanation: "HO-3. The most comprehensive homeowners policy that a homeowner can get is HO-3."
      },
      {
        q: "A downturn in business activity due to recession is considered to be",
        options: {A:"dynamic risk.",B:"static risk.",C:"liability risk.",D:"business interruption risk."},
        answer: "A",
        explanation: "Dynamic risk. A downturn in business activity due to recession is considered to be dynamic risk."
      },
      {
        q: "Collecting a PITI mortgage payment protects the lender against",
        options: {A:"property tax increases.",B:"delinquent property tax and insurance premium payments.",C:"delinquent mortgage payments.",D:"insurance premium increases."},
        answer: "B",
        explanation: "Delinquent property tax and insurance premium payments. Collecting a PITI mortgage payment protects the lender against delinquent property tax and insurance premium payments."
      },
      {
        q: "At a closing, a new homeowner must produce",
        options: {A:"a valid deed.",B:"a guarantor.",C:"proof of employment.",D:"a certificate of insurance."},
        answer: "D",
        explanation: "A certificate of insurance. At a closing, a new homeowner must produce a certificate of insurance."
      },
      {
        q: "For the BEST rates on flood insurance, the property owner should go to",
        options: {A:"Allstate.",B:"GEICO.",C:"FEMA.",D:"AIG."},
        answer: "C",
        explanation: "FEMA. For the best rates on flood insurance, the property owner should go to FEMA."
      },
      {
        q: "After an ice storm, a pedestrian slips, falls, and is injured on the sidewalk in front of someone's home. Even if the owners have shoveled and salted the walkway, they may still be sued for medical bills and other damages. The type of policy that would offer the BEST protection for this liability would be",
        options: {A:"HO-4.",B:"a FEMA policy.",C:"HO-3.",D:"a commercial policy."},
        answer: "C",
        explanation: "HO-3. The type of policy that would offer the best protection would be HO-3."
      },
      {
        q: "A property manager does not tell the landlord that he is also licensed as an insurance agent. After being asked to obtain an insurance policy for the building, the manager buys a policy from himself and collects a commission. The property manager may be charged with",
        options: {A:"self-dealing.",B:"a surety bond.",C:"a felony.",D:"an increase in premium payments."},
        answer: "A",
        explanation: "Self-dealing. The property manager may be charged with self-dealing."
      },
      {
        q: "An apartment building employee is charged with stealing a bicycle from the storage room. The building owner is sued for damages. The best type of coverage to have for this type of event is",
        options: {A:"liability.",B:"HO-5.",C:"a business interruption policy.",D:"a surety bond."},
        answer: "D",
        explanation: "A surety bond. The best type of coverage would be a surety bond."
      },
      {
        q: "A building employee is injured on the job. The coverage that would pay for medical bills the employee may incur as a result of the injury would be",
        options: {A:"fire and hazard.",B:"workers' compensation.",C:"PITI coverage.",D:"FEMA coverage."},
        answer: "B",
        explanation: "Workers' compensation. The coverage that would pay for medical bills would be workers' compensation."
      },
      {
        q: "Flood insurance is available from",
        options: {A:"Allstate.",B:"State Farm.",C:"FEMA.",D:"all of these."},
        answer: "C",
        explanation: "FEMA. Flood insurance is available from FEMA."
      },
      {
        q: "The maximum amount of replacement coverage that a property owner can obtain is",
        options: {A:"80% of the replacement cost.",B:"90% of the replacement cost.",C:"100% of the replacement cost.",D:"125% of the replacement cost."},
        answer: "D",
        explanation: "125% of the replacement cost. The maximum amount of replacement coverage is 125% of the replacement cost."
      },
      {
        q: "A property owner placed several claims for losses during the previous 12 months and was refused coverage renewal by his carrier. The MOST likely reason for this coverage cancellation would be that the underwriter did not like",
        options: {A:"the neighborhood where the property was located.",B:"that the building was being rezoned.",C:"the results of the loss run schedule.",D:"proposed new property tax increases on the property."},
        answer: "C",
        explanation: "The results of the loss run schedule. The most likely reason would be that the underwriter did not like the results of the loss run schedule."
      },
      {
        q: "PITI payments include",
        options: {A:"principal, interest, taxes, and inflation.",B:"principal, interest, title, and insurance.",C:"principal, interest, taxes, and insurance.",D:"policies, interest, taxes, and insurance."},
        answer: "C",
        explanation: "Principal, interest, taxes, and insurance. PITI payments include principal, interest, taxes, and insurance."
      },
      {
        q: "After a fire destroys a store and causes a business to close, the business owner may file a claim if he has a policy under",
        options: {A:"FEMA.",B:"HO-4.",C:"workers' compensation.",D:"business interruption."},
        answer: "D",
        explanation: "Business interruption. The business owner may file a claim if he or she has a business interruption policy."
      },
      {
        q: "A warehouse owner has a fireproof warehouse building and has installed a sprinkler system, fire alarms, a high-tech security system, a passive loss control system, and a heavy-duty gate around the property perimeter. The property may qualify for lower insurance premiums because the property is classified as",
        options: {A:"HPR.",B:"HO-6.",C:"a coinsured property.",D:"not being in a flood zone."},
        answer: "A",
        explanation: "HPR. The property is classified as HPR."
      },
      {
        q: "In a homeowners insurance policy, a named lienholder is usually",
        options: {A:"the mortgagee.",B:"the mortgagor.",C:"the grantee.",D:"the grantor."},
        answer: "A",
        explanation: "The mortgagee. The named lienholder is usually the mortgagee."
      },
      {
        q: "For a property bought for $1,750,000, federal tax law attributes how much to the value of the land?",
        options: {A:"$175,000",B:"$350,000",C:"$437,500",D:"$495,000"},
        answer: "B",
        explanation: "$350,000. Federal tax law attributes $350,000 to the value of the land."
      },
      {
        q: "A home purchased for $875,000 must have a homeowners policy in effect. The coinsurance clause requires coverage for a minimum amount of",
        options: {A:"$500,000.",B:"$600,000.",C:"$700,000.",D:"$800,000."},
        answer: "C",
        explanation: "$700,000. The coinsurance clause requires coverage for a minimum amount of $700,000."
      },
      {
        q: "A store that sells electronic products learns that its $2,000,000 inventory of HDTVs has become obsolete because a newer technology has been introduced to the public. Sales of these HDTVs have dropped to zero. The store files a claim for the loss and is told that its coverage does not include this type of loss because it is considered",
        options: {A:"dynamic risk.",B:"static risk.",C:"a business risk.",D:"a package risk."},
        answer: "A",
        explanation: "Dynamic risk. This type of loss is considered dynamic risk."
      },
      {
        q: "Static risk includes all of the following EXCEPT",
        options: {A:"fire.",B:"vandalism.",C:"liability.",D:"recession."},
        answer: "D",
        explanation: "Recession. Static risk does not include recession. It does include fire, vandalism, and liability."
      },
    ]
  },
  {
    id: 26,
    title: "Real Estate Mathematics",
    questions: [
      {
        q: "If your monthly rent is $525, what percentage would this be of an annual income of $21,000?",
        options: {A:"2.5%",B:"25%",C:"30%",D:"40%"},
        answer: "A",
        explanation: "2.5%. $21,000 × x% = $525x% = $525 / $21,000 = 0.025 = 2.5%."
      },
      {
        q: "Find the number of square feet in a lot with a frontage of 75 feet, 6 inches and a depth of 140 feet, 9 inches.",
        options: {A:"10,626.63",B:"10,652.04",C:"216.25",D:"25,510.81"},
        answer: "A",
        explanation: "10,626.63. 6\" ÷ 12 = 0.5' + 75' = 75.5' frontage + 9\" ÷ 12 = 0.75' + 140 = 140.75' depth. 140.75' × 75.5' = 10,626.63 square feet."
      },
      {
        q: "A salesperson sells a property for $58,500. The contract he has with his broker entitles him to 40% of the full commission earned. The commission due the broker is 6%. What is the salesperson's share of the commission?",
        options: {A:"$2,106",B:"$1,404",C:"$3,510",D:"$2,340"},
        answer: "B",
        explanation: "$1,404. $58,500 sales price × 6% (or 0.06) = $3,510 full commission × 40% (or 0.4) = $1,404."
      },
      {
        q: "What is the interest rate on a $10,000 loan with semiannual interest of $450?",
        options: {A:"7%",B:"9%",C:"11%",D:"13.5%"},
        answer: "B",
        explanation: "9%. 450 × 2 = $900 annual interest. $900 annual interest ÷ $10,000 loan = 0.09 or 9%."
      },
      {
        q: "A warehouse is 80 feet wide and 120 feet long with ceilings 14 feet high. If 1,200 square feet of floor surface has been partitioned off, floor to ceiling, for an office, how many cubic feet of space will be left in the warehouse for storage space?",
        options: {A:"151,200",B:"134,400",C:"133,200",D:"117,600"},
        answer: "D",
        explanation: "117,600. 120' × 80' = 9,600 square feet in building – 1,200 square feet for office = 8,400 square feet left in warehouse × 14' ceiling = 117,600 cubic feet left in warehouse."
      },
      {
        q: "If the broker received a 6.5% commission that was $5,200, what was the sales price of the house?",
        options: {A:"$80,400",B:"$80,000",C:"$77,200",D:"$86,600"},
        answer: "B",
        explanation: "$80,000. $5,200 full commission ÷ 6.5% (or 0.065) = $80,000 sales price."
      },
      {
        q: "The seller received a $121,600 check at closing after paying a 7% commission, $31,000 in other closing costs, and the $135,700 loan payoff. What was the total sales price?",
        options: {A:"$288,300",B:"$306,300",C:"$308,500",D:"$310,000"},
        answer: "D",
        explanation: "$310,000. $121,600 seller's net + $31,000 closing costs + $135,700 loan payoff = $288,300 net after commission. 100% sales price – 7% commission = 93% net after commission. $288,300 net after commission ÷ 93% (or 0.93) = $310,000 sales price."
      },
      {
        q: "A fence is being built to enclose a rectangular lot 125 feet by 350 feet. If there will be one 10-foot gate, how many running feet of fence will it take?",
        options: {A:"465",B:"600",C:"940",D:"960"},
        answer: "C",
        explanation: "940. 125' + 350' + 125' + 350' – 10' gate = 940 running feet."
      },
      {
        q: "If you purchase a lot that is 125 feet by 150 feet for $6,468.75, what price did you pay per front foot?",
        options: {A:"$23.52",B:"$43.13",C:"$51.75",D:"$64.69"},
        answer: "C",
        explanation: "$51.75. $6,468.75 price ÷ 125 front feet = $51.75 per front foot."
      },
      {
        q: "The seller paid the full property tax of $2,430 in January. The new buyers took title on May 1. What is the prorated share of the taxes credited to the seller? (Assume a 360-day year is used.)",
        options: {A:"$202.50",B:"$810",C:"$1,250",D:"$1,620"},
        answer: "D",
        explanation: "$1,620. The seller was credited for eight months ($1,620)."
      },
      {
        q: "The village equalization rate is $303 per thousand dollars of assessed valuation. The subject property is assessed at $22,000. What are the annual property taxes?",
        options: {A:"$66",B:"$666",C:"$6,000",D:"$6,666"},
        answer: "D",
        explanation: "$6,666. The annual property taxes are computed by multiplying 22 (assessed value) by $303 (equalization rate)."
      },
      {
        q: "John sells his house for $590,000 and pays Arnow Agency, his exclusive agent, a total commission equal to 5% of the sales price. Sally is the cooperating broker and was offered 60% of the commission paid to Arnow Agency. What is the listing office's net commission?",
        options: {A:"$29,500",B:"$17,700",C:"$11,800",D:"$870"},
        answer: "C",
        explanation: "$11,800. $11,800, which is 2% of the total commission. Arnow offered Sally 3% of the total sales price, leaving 2% for the office."
      },
      {
        q: "John sells his house for $590,000 and pays Arnow Agency, his exclusive agent, a total commission equal to 5% of the sales price. If the seller's exclusive agent pays his listing agent 50% of what his office nets on the commission earned, what is the listing agent's commission?",
        options: {A:"$29,500",B:"$17,700",C:"$11,800",D:"$5,900"},
        answer: "D",
        explanation: "$5,900. Half of the office commission of $11,800 equals $5,900."
      },
      {
        q: "An owner receives $23,500 for a small vacant lot after a 6% commission was paid. The property sold for",
        options: {A:"$21,300.",B:"$24,500.",C:"$25,000.",D:"$25,800."},
        answer: "C",
        explanation: "$25,000. The equation is as follows: $23,500 is 94% of what price? Or, $23,500 is to 94% as what is to 100%? Solving the equation or the ratio yields the answer $25,000."
      },
      {
        q: "A real estate broker sold a parcel of land 150 feet by 250 feet for $58 per square foot. His commission on the sale was $119,625. What was the rate of commission?",
        options: {A:"6.2%",B:"5.75%",C:"5.5%",D:"5.9%"},
        answer: "C",
        explanation: "5.5%."
      },
      {
        q: "If the annual 7.2% interest payment on a mortgage equals $35,640, what is the amount of the principal?",
        options: {A:"$425,000",B:"$595,000",C:"$395,000",D:"$495,000"},
        answer: "D",
        explanation: "$495,000. Mortgage amount × 7.2% = $35,640; $35,640 ÷ 7.2% = $495,000."
      },
      {
        q: "A property is assessed at $137,800. The tax rate is 54 mills. What are the property taxes?",
        options: {A:"$74,4112",B:"$7,441.20",C:"$744.12",D:"$74.42"},
        answer: "B",
        explanation: "$7,441.20. $137,800 × 0.054 (54 mills) = $7,441.20."
      },
      {
        q: "A parcel measuring 96 feet by 122 feet was sold for $26,496. What was the sales price per front foot?",
        options: {A:"$276",B:"$2.26",C:"$27.65",D:"$227.62"},
        answer: "A",
        explanation: "$276. $26,496 ÷ 96' = $276."
      },
      {
        q: "The monthly rent for an office is $3,437.50. The size of the office is 20 feet by 75 feet. What is the annual rent per square foot?",
        options: {A:"$25.70",B:"$2.57",C:"$12.25",D:"$27.50"},
        answer: "D",
        explanation: "$27.50. $3,437.50 × 12 = $41,250. Office size = 20' × 75' = 1,500'; $41,250 ÷ 1,500 = $27.50 per square foot."
      },
      {
        q: "What would a broker's net commission be if, on the sale of a property for $876,500 with a 6% commission, her expenses were as follows: 5% listing fee off the top of the gross commission; 50% of the remainder for the salesperson's commissions (the salesperson who sold the property); 8% of the gross commission for advertising expenses; 12% of the gross commission for office expenses?",
        options: {A:"$16,442.75",B:"$14,462.25",C:"$17,642.55",D:"$22,975.25"},
        answer: "B",
        explanation: "$14,462.25. $876,500 × 6% = $52,590 = gross commission. Expenses: (1) 5% listing fee = $52,590 × 5% = $2,629.50; (2) 50% of remainder for salesperson's commission = $49,960.50 ÷ 2 = $24,980.25; (3) 8% of gross for advertising = $52,590 × 8% = $4,207.20; (4) 12% of gross for office expenses = $52,590 × 12% = $6,310.80; (5) Total expenses = $38,127.75; (6) Net for the broker = $52,590 – $38,127.75 = $14,462.25."
      },
    ]
  },
];
