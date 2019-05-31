export default [
  {
    slug: "baking",
    title: "Baking",
    tutorials: [
      {
        title: "Set up your own Secure Baker",
        author: "Obsidian Systems",
        link: "https://medium.com/@obsidian.systems/setting-up-a-secure-baker-27bb12363679",
        body: `
          <p>Thinking of Running your own Baker? Obsidian Systems gives some helpful tips on how to up your own at-home baker.</p>
        `
      },
      {
        title: "Helpful articles for Bakers",
        author: "Cryptium Labs",
        link: "https://medium.com/cryptium",
        body: `
          <p>Cryptium Labs has many helpful articles for bakers that range from understanding the baking process to storing your Tez in wallets and delegating your baking rights.</p>
        `
      }
    ]
  },
  {
    slug: "hardware-wallets",
    title: "Hardware Wallets",
    tutorials: [
      {
        title: "How to Configure Tezos on the Leger Nano S",
        author: "Lorem ipsum",
        link: "https://medium.com/@PosBakerz/how-to-configure-tezos-on-ledger-nano-s-a2439186956d",
        body: `
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat in ante metus dictum.</p>
        `
      },
      {
        title: "Tezos Ledger Nano S Tutorial",
        author: "Lorem ipsum",
        link: "https://www.youtube.com/watch?v=PdeilPjIE-Q",
        body: `
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat in ante metus dictum.</p>
        `
      },
      {
        title: "How to Delegate Tez (Tezos' XTZ) with Your Ledger Nano S",
        author: "Lorem ipsum",
        link: "https://medium.com/cryptium/how-to-delegate-tezzies-tezos-xtz-with-your-ledger-nano-s-with-initial-setup-screenshots-519c9ae6654f",
        body: `
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat in ante metus dictum.</p>
        `
      },
      {
        title: "Tezos Ledger Applications: Releases",
        author: "Lorem ipsum",
        link: "https://github.com/obsidiansystems/ledger-app-tezos/releases",
        body: `
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat in ante metus dictum.</p>
        `
      },
      {
        title: "Tezos Ledger Applications: Mac-specific CLI Installation Guide",
        author: "Lorem ipsum",
        link: "https://github.com/obsidiansystems/ledger-app-tezos/blob/master/MacInstallation.md",
        body: `
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat in ante metus dictum.</p>
        `
      },
      {
        title: "Debugging Linux Connection Issues",
        author: "Lorem ipsum",
        link: "https://support.ledger.com/hc/en-us/articles/115005165269-Fix-connection-issues",
        body: `
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat in ante metus dictum.</p>
        `
      },
      {
        title: "Storage and Delegation with Ledger Nano S - Magnum Wallet",
        author: "Lorem ipsum",
        link: "https://medium.com/cryptium/how-to-store-your-tezos-xtz-in-your-ledger-nano-s-and-delegate-with-magnum-wallet-3871dc4bd3b7",
        body: `
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat in ante metus dictum.</p>
        `
      },
      {
        title: "Storage and Delegation with Ledger Nano S - TezBox Wallet",
        author: "Lorem ipsum",
        link: "https://medium.com/cryptium/how-to-store-your-tezos-xtz-in-your-ledger-nano-s-and-delegate-with-tezbox-wallet-8fb4ac2d3355",
        body: `
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat in ante metus dictum.</p>
        `
      },
      {
        title: "Storage and Delegation with Trezor Model T - TezBox Wallet",
        author: "Lorem ipsum",
        link: "https://medium.com/cryptium/how-to-store-your-tezos-xtz-in-your-trezor-model-t-and-delegate-with-tezbox-e26c578f7a8b",
        body: `
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat in ante metus dictum.</p>
        `
      },
      {
        title: "Storage and Delegation with Trezor Model T - Magnum Wallet",
        author: "Lorem ipsum",
        link: "https://medium.com/cryptium/how-to-store-your-tezos-xtz-in-your-trezor-model-t-and-delegate-with-magnum-wallet-51525aab5122",
        body: `
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat in ante metus dictum.</p>
        `
      }
    ]
  },
  {
    slug: "dapp",
    title: "DApp",
    tutorials: [
      {
        title: "Tezos Software Architecture: The Big Picture",
        link: "http://tezos.gitlab.io/mainnet/whitedoc/the_big_picture.html",
        body: `
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Feugiat in ante metus dictum.</p>
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
