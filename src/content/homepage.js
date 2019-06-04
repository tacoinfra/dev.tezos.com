import resourcesPageData from './resources'

const gettingStarted = [
  {
    title: "Starting up a node",
    description: "Install Tezos binaries, master the command-line interface, and start exploring the blockchain.",
    tutorials: [
      {
        title: "How to Get Tezos",
        link: "http://tezos.gitlab.io/mainnet/introduction/howtoget.html"
      },
      {
        title: "Build a Mainnet node for Debian, Ubuntu, or MacOS",
        link: "https://github.com/tezoscommunity/FAQ/blob/master/Compile_Mainnet.md"
      },
      {
        title: "Run a Tezos node in Kiln (GUI)",
        link: "https://gitlab.com/obsidian.systems/tezos-bake-monitor"
      },
      {
        title: "Getting started with Tezos command-line client on betanet (MacOS)",
        link: "https://medium.com/@csoreff/getting-started-with-the-tezos-command-line-client-on-betanet-macos-484d16be4612",
      }
    ]
  },
  {
    title: "Learning a smart-contracts programming language",
    description: "Choose one of the high-level languages to program in or use Michelson (the smart-contract language of Tezos) directly",
    tutorials: [
      {
        title: "What is Michelson",
        link: "https://gitlab.com/camlcase-dev/michelson-tutorial/tree/master/01"
      },
      {
        title: "Michelson & The Tezos Blockchain",
        link: "https://gitlab.com/camlcase-dev/michelson-tutorial/tree/master/02"
      }
    ],
    resources: [
      {
        title: "Michelson emacs mode",
        link: "https://github.com/tezos/tezos/tree/master/emacs"
      }
    ]
  },
  {
    title: "Deploying transactions to the testnet and mainet",
    description: "Create and sign transactions. Deploy and interact with the contracts that you’ve created.",
    tutorials: [
      {
        title: "Contract Origination & Interaction",
        link: "https://gitlab.com/camlcase-dev/michelson-tutorial/tree/master/03"
      },
      {
        title: "Michelson Data Structures",
        link: "https://gitlab.com/camlcase-dev/michelson-tutorial/tree/master/04"
      },
      {
        title: "Deploying Our First Michelson Contract On Tezos",
        link: "https://medium.com/@catsigma/decentralized-app-development-on-tezos-for-beginners-part-4-d453b3584a3d"
      }
    ],
    resources: [
      {
        title: "Testnet Faucet",
        link: "https://tezos.gitlab.io/alphanet/introduction/howtouse.html#faucet"
      },
      {
        title: "TzScan",
        link: "https://tzscan.io/"
      },
      {
        title: "TezBridge",
        link: "https://www.tezbridge.com/"
      }
    ]
  },
  {
    title: "Interacting with your contract",
    description: "Learn to query your node for information about your contracts. Start building applications.",
    tutorials: [
      {
        title: "Interacting with your contract",
        link: "https://medium.com/@catsigma/decentralized-app-development-on-tezos-for-beginners-part-5-b90f1244c846"
      }
    ],
    resources: [
      {
        title: "EzTz",
        link: "https://github.com/TezTech/eztz"
      },
      {
        title: "Go-Tezos",
        link: "https://github.com/DefinitelyNotAGoat/go-tezos"
      }
    ]
  }
]

const additionalTutorials = [
  {
    title: "Hardware Wallets",
    link: "/tutorials/#hardware-wallets",
    posts: [
      {
        title: "How to Configure Tezos on the Leger Nano S",
        link: "https://medium.com/@PosBakerz/how-to-configure-tezos-on-ledger-nano-s-a2439186956d"
      },
      {
        title: "Tezos Ledger Nano S Tutorial",
        link: "https://www.youtube.com/watch?v=PdeilPjIE-Q"
      },
      {
        title: "How to Delegate Tez (Tezos' XTZ) with Your Ledger Nano S",
        link: "https://medium.com/cryptium/how-to-delegate-tezzies-tezos-xtz-with-your-ledger-nano-s-with-initial-setup-screenshots-519c9ae6654f"
      },
      {
        title: "Tezos Ledger Applications: Releases",
        link: "https://github.com/obsidiansystems/ledger-app-tezos/releases"
      },
      {
        title: "Tezos Ledger Applications: Mac-specific CLI Installation Guide",
        link: "https://github.com/obsidiansystems/ledger-app-tezos/blob/master/MacInstallation.md"
      }
    ]
  },
  {
    title: "Baking",
    link: "/tutorials/#baking",
    posts: [
      {
        title: 'Bake with Kiln (GUI)',
        link: 'https://gitlab.com/obsidian.systems/tezos-bake-monitor'
      },
      {
        title: "It's a Baker's Life for Me",
        link: "https://medium.com/tezos/its-a-baker-s-life-for-me-c214971201e1"
      },
      {
        title: "Tezos Baking How To",
        link: "https://gist.github.com/dakk/bdf6efe42ae920acc660b20080a506dd"
      },
      {
        title: "Setting up a Secure Baker",
        link: "https://medium.com/@obsidian.systems/setting-up-a-secure-baker-27bb12363679"
      }
    ]
  },
  {
    title: "App Development",
    link: "/tutorials/#app-development",
    posts: [
      {
        title: "Tezos Software Architecture: The Big Picture",
        link: "http://tezos.gitlab.io/mainnet/whitedoc/the_big_picture.html"
      }
    ]
  }
]

const resources =
  resourcesPageData
    .map(resource => ({
      ...resource,
      posts: resource.posts.slice(0, 3)
    }))


export default {
  gettingStarted,
  additionalTutorials,
  resources
}
