export default [
  {
    slug: "hardware-wallets",
    title: "Hardware Wallets",
    tutorials: [
      {
        title: "How to Configure Tezos on the Leger Nano S",
        author: "PosBakerz",
        link: "https://medium.com/@PosBakerz/how-to-configure-tezos-on-ledger-nano-s-a2439186956d",
        body: `
          <p>An easy tutorial on how to store your Tezos Tokens on a Nano S Ledger.</p>
        `
      },
      {
        title: "Tezos Ledger Nano S Tutorial",
        author: "Arthur Breitman",
        link: "https://www.youtube.com/watch?v=PdeilPjIE-Q",
        body: `
          <p>How to use the Tezos command line client with a Ledger Nano S hardware wallet.</p>
        `
      },
      {
        title: "How to Delegate Tez (Tezos' XTZ) with Your Ledger Nano S",
        author: "Cryptium",
        link: "https://medium.com/cryptium/how-to-delegate-tezzies-tezos-xtz-with-your-ledger-nano-s-with-initial-setup-screenshots-519c9ae6654f",
        body: `
          <p>This article aims to be guideline for setting up your Ledger Nano for receiving XTZ and making delegations to bakers.</p>
        `
      },
      {
        title: "Tezos Ledger Applications: Releases",
        author: "Obsidian Systems",
        link: "https://github.com/obsidiansystems/ledger-app-tezos/releases",
        body: `
          <p>Stay up to date on Obsidian Systems' latest Tezos Ledger App releases.</p>
        `
      },
      {
        title: "Tezos Ledger Applications: Mac-specific CLI Installation Guide",
        author: "Obsidian Systems",
        link: "https://github.com/obsidiansystems/ledger-app-tezos/blob/master/MacInstallation.md",
        body: `
          <p>How to set up your Tezos Baking and Tezos Wallet applications on a Mac.</p>
        `
      },
      {
        title: "Debugging Linux Connection Issues",
        author: "Ledger",
        link: "https://support.ledger.com/hc/en-us/articles/115005165269-Fix-connection-issues",
        body: `
          <p>Users may encounter connection issues when trying to connect their Ledger Nano S or Ledger Blue device. Here are some steps to help you troubleshoot.</p>
        `
      },
      {
        title: "Storage and Delegation with Ledger Nano S - Magnum Wallet",
        author: "Cryptium",
        link: "https://medium.com/cryptium/how-to-store-your-tezos-xtz-in-your-ledger-nano-s-and-delegate-with-magnum-wallet-3871dc4bd3b7",
        body: `
          <p>If you own a Ledger Nano S, Tezos (XTZ), and your favourite wallet happens to be Magnum Wallet, you can store your funds in the hardware wallet and link it to a Magnum Wallet whenever you want to make transfers or delegations. </p>
        `
      },
      {
        title: "Storage and Delegation with Ledger Nano S - TezBox Wallet",
        author: "Cryptium",
        link: "https://medium.com/cryptium/how-to-store-your-tezos-xtz-in-your-ledger-nano-s-and-delegate-with-tezbox-wallet-8fb4ac2d3355",
        body: `
          <p>TezBox is a community developed wallet for the Tezos network that is cross-platform, open-source and decentralized - <a href="https://tezbox.com" target="_blank" rel="noopener noreferrer">https://tezbox.com</a></p>
        `
      },
      {
        title: "Storage and Delegation with Trezor Model T - TezBox Wallet",
        author: "Cryptium",
        link: "https://medium.com/cryptium/how-to-store-your-tezos-xtz-in-your-trezor-model-t-and-delegate-with-tezbox-e26c578f7a8b",
        body: `
          <p>While Trezor is working on supporting a Tezos wallet, a Tezos holder who owns a Trezor Model T can only interact with the network through another wallet, such as SimpleStaking, in combination with the device.</p>
        `
      },
      {
        title: "Storage and Delegation with Trezor Model T - Magnum Wallet",
        author: "Cryptium",
        link: "https://medium.com/cryptium/how-to-store-your-tezos-xtz-in-your-trezor-model-t-and-delegate-with-magnum-wallet-51525aab5122",
        body: `
          <p>If you own a TREZOR Model T, Tezos (XTZ), and your favourite wallet happens to be Magnum Wallet, you can store your funds in the hardware wallet and link it to a Magnum Wallet whenever you want to make transfers or delegations.</p>
        `
      }
    ]
  },
  {
    slug: "baking",
    title: "Baking",
    tutorials: [
      {
        title: "It's a Baker's Life for Me",
        author: "Arthur Breitman",
        link: "https://medium.com/tezos/its-a-baker-s-life-for-me-c214971201e1",
        body: `
          <p>How to become a Tezos validator (baker)</p>
        `
      },
      {
        title: "Set up your own Secure Baker",
        author: "Obsidian Systems",
        link: "https://medium.com/@obsidian.systems/setting-up-a-secure-baker-27bb12363679",
        body: `
          <p>Tips on how to up your own at-home baker.</p>
        `
      },
      {
        title: "Helpful articles for Bakers",
        author: "Cryptium Labs",
        link: "https://medium.com/cryptium",
        body: `
          <p>Learn about the baking process, how to store your Tez in wallets, and how to delegate your baking rights.</p>
        `
      }
    ]
  },
  {
    slug: "app-development",
    title: "App Development",
    tutorials: [
      {
        title: "Tezos Software Architecture: The Big Picture",
        link: "http://tezos.gitlab.io/mainnet/whitedoc/the_big_picture.html",
        body: `
          <p>This article describes the main elements of Tezos from a distance. It abstracts from all plumbing and both internal and system dependencies to give a simple view of the main components, their responsibilities and interactions</p>
        `
      }
    ]
  },
  {
    slug: "contract-templates",
    title: "Contract Templates",
    body: `
      <p>Developers at <a href="https://www.nomadic-labs.com/" target="_blank" rel="noopener noreferrer">Nomadic Labs</a> have created and formally verified a set of commonly used smart-contracts. The following template contracts have been developed for general purpose use.</p>
    `,
    tutorials: [
      {
        title: "Multisig",
        body: `
          <p>Multisig contracts are used to represent a group of users which collectively control some amount of tokens.</p>
          <p>The multisig contract right now supports the following functionality:</p>
          <ul>
            <li><strong>Transfer</strong> - the key owners are able to transfer a balance of tokens to any external contract.</li>
            <li><strong>Change ownership</strong> - The key owners are able to change the delegates and the keys controlling the multisig.</li>
          </ul>
          <p><em>* All of the above functionality is contingent on the key owners providing valid signatures for their keys.</em></p>
          <p><em>** The multisig has been formally verified, meaning that executing the multisig will produce certain outcomes with mathematical certainty.</em></p>
        `
      },
      {
        title: "Escrows",
        body: `
          <p>Escrow contracts are used to hold tokens in storage until some condition has been fultilled. There are two main parties in this contract - the set of recipients and the set of "judges" or validators.</p>
          <p>The escrow contract right now supports the following functionality:</p>
          <ul>
            <li><strong>"Storing" transaction</strong> - denoting a recipient for the attached tez and a third-party validator to notify the contract when the condition has been fulfilled or will never be fulfilled.</li>
            <li><strong>"Validating" transaction</strong> - the validator sends a transactin to the contract containing a valid signature, and a boolean value representing whether or not the condition was met.</li>
          </ul>
        `
      },
      {
        title: "Oracle",
        body: `
          <p>Oracle contracts are used as a source of truth for other contracts. A specific address is designated as the "oracle" - this address is the only one authorized to write to the contract's storage. Other users can query the contract's storage, and provide a callback function for the oracle to call. The oracle contract is here:</p>
          <p>The oracle contract supports the following functionality:</p>
          <ul>
            <li><strong>Storing a truth</strong> - the oracle is able to sotre a value at a certain key in the contract's storage.</li>
            <li><strong>Querying a key</strong> - end-users are able to query the contract for a value associated with a certain key. Users must provide a fee, and a certain callback function to be executed.</li>
            <li><strong>Retrieving the balance</strong> - Oracles are able to "cash out" and retrieve the balance that is stored in the contract, built up by end users paying for the service.</li>
          </ul>
        `
      },
      {
        title: "Atomic Swap",
        body: `
          <p>When transferring tokens between blockchains, a user can opt to engage in an atomic swap. Imagin that a user, Alice, wants to exchange her 100 tez for Bob's 100 eth. She and Bob together come up with a number n, and compute the hash of that number, h(n). They both send a transaction to the atomic swap contracts on their network. In the Tezos case, Alice's transaction specifies the hash, h(n), Bob's address, along with a timestamp for a future block, and her address along with a later timestamp. Then, it's up to Bob to claim the Tez by sending a transaction to the contract specifying the preimage of the hash, n. If bob fails to claim the Tez before his timestamp has passed, then Alice can claim her Tez back, by sending a transaction to the contract with the preimage as well.</p>
          <p>The atomic swap contract supports the following functionality:</p>
          <ul>
            <li><strong>Initial transfer request</strong> - end-users notify the contract of a request to exchange tokens, specifying a hash value, addresses (a1 and a2) and timestamps (t1 and t2).</li>
            <li><strong>Claim tokens (a1)</strong> - if all goes well, a1 claims the tokens specified by a previous transfer requeswt by specifying the preimage, n, for that request.</li>
            <li><strong>Claim tokens (a2)</strong> - if the transfer request fails for some reason (one of the users backs out, for instance) then a2 can claim the original tokens specified after a1's timestamp has expired.</li>
          </ul>
        `
      }
    ]
  }
]
