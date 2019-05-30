import resourcesPageData from './resources'

const gettingStarted = [
  {
    title: "Starting up a node on Tezos",
    description: "Learn how to install the Tezos binaries, Master the command-line interface, and start exploring the blockchain.",
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
        title: "Tezos Installation Guide",
        link: "https://medium.com/coinmonks/tezos-installation-guide-8175b3f0b748"
      },
      {
        title: "Building Tezos on Ubuntu & Debian - Fast Build",
        link: "https://medium.com/@shaunbelcher/building-tezos-on-ubuntu-fast-build-b2397bf01678"
      },
      {
        title: "Getting Started with Tezos Command-line client on betanet (MacOS)",
        link: "https://medium.com/@csoreff/getting-started-with-the-tezos-command-line-client-on-betanet-macos-484d16be4612",
      }
    ]
  },
  {
    title: "Learning a smart-contract language",
    description: "Learn about Michelson, the smart-contract language of Tezos. Choose one of the high-level languages to program in, or program in Michelson directly.",
    tutorials: [
      {
        title: "What is Michelson",
        link: "https://gitlab.com/camlcase-dev/michelson-tutorial/tree/master/01"
      },
      {
        title: "Michelson & The Tezos Blockchain",
        link: "https://gitlab.com/camlcase-dev/michelson-tutorial/tree/master/02"
      },
      {
        title: "Tezos Blockstars Program",
        link: "https://tezos.b9lab.com/"
      }
    ],
    resources: [
      {
        title: "Morley/Lorentz",
        link: "http://hackage.haskell.org/package/morley"
      },
      {
        title: "Ligo",
        link: "https://gitlab.com/gabriel.alfour/ligo"
      },
      {
        title: "Michelson emacs mode",
        link: "https://github.com/tezos/tezos/tree/master/emacs"
      }
    ]
  },
  {
    title: "Deploying transactions to the testnet and mainet",
    description: "Create and sign transactions to be sent to the mainnet. This is where you’ll learn to deploy and interact with the contracts that you’ve created.",
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
    title: "Interacting with your contract through your code",
    description: "Retrieve information about your contracts. Learn to query your node for information. Build applications, websites, and more!",
    tutorials: [
      {
        title: "Interacting with your contract",
        link: "https://medium.com/@catsigma/decentralized-app-development-on-tezos-for-beginners-part-5-b90f1244c846"
      }
    ],
    resources: [
      {
        title: "TzScan",
        link: "https://tzscan.io/"
      },
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
    title: "Baking",
    link: "/tutorials",
    posts: [
      {
        title: "Benefits and Risks of Home Baking",
        link: "https://medium.com/@obsidian.systems/benefits-and-risks-of-home-baking-a631c9ca745"
      },
      {
        title: "It's a Baker's Life for Me",
        link: "https://medium.com/tezos/its-a-baker-s-life-for-me-c214971201e1"
      },
      {
        title: "Baking on Tezos",
        link: "https://medium.com/@bakechain/baking-on-tezos-34d952d79c9d"
      },
      {
        title: "Tezos Mainnet - Setting Up Home Baking",
        link: "https://medium.com/@tezbaker.io/tezos-mainnet-setting-up-home-baking-4bf258a9fd30"
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
    title: "Hardware Wallets",
    link: "/tutorials",
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
      },
      {
        title: "Debugging Linux connection Issues",
        link: "https://support.ledger.com/hc/en-us/articles/115005165269-Fix-connection-issues"
      },
      {
        title: "Storage and Delegation with Ledger Nano S - Magnum Wallet",
        link: "https://medium.com/cryptium/how-to-store-your-tezos-xtz-in-your-ledger-nano-s-and-delegate-with-magnum-wallet-3871dc4bd3b7"
      },
      {
        title: "Storage and Delegation with Ledger Nano S - TezBox Wallet",
        link: "https://medium.com/cryptium/how-to-store-your-tezos-xtz-in-your-ledger-nano-s-and-delegate-with-tezbox-wallet-8fb4ac2d3355"
      },
      {
        title: "Storage and Delegation with Trezor Model T - TezBox Wallet",
        link: "https://medium.com/cryptium/how-to-store-your-tezos-xtz-in-your-trezor-model-t-and-delegate-with-tezbox-e26c578f7a8b"
      },
      {
        title: "Storage and Delegation with Trezor Model T - Magnum Wallet",
        link: "https://medium.com/cryptium/how-to-store-your-tezos-xtz-in-your-trezor-model-t-and-delegate-with-magnum-wallet-51525aab5122"
      }
    ]
  },
  {
    title: "DApp",
    link: "/tutorials",
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
