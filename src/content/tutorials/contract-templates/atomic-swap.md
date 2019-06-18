---
type: tutorial
category: contract-templates
title: Atomic Swap
priority: 4
---

When transferring tokens between blockchains, a user can opt to engage in an atomic swap. Imagin that a user, Alice, wants to exchange her 100 tez for Bob's 100 eth. She and Bob together come up with a number n, and compute the hash of that number, h(n). They both send a transaction to the atomic swap contracts on their network. In the Tezos case, Alice's transaction specifies the hash, h(n), Bob's address, along with a timestamp for a future block, and her address along with a later timestamp. Then, it's up to Bob to claim the Tez by sending a transaction to the contract specifying the preimage of the hash, n. If bob fails to claim the Tez before his timestamp has passed, then Alice can claim her Tez back, by sending a transaction to the contract with the preimage as well.

The atomic swap contract supports the following functionality:

- **Initial transfer request** - end-users notify the contract of a request to exchange tokens, specifying a hash value, addresses (a1 and a2) and timestamps (t1 and t2).
- **Claim tokens (a1)** - if all goes well, a1 claims the tokens specified by a previous transfer requeswt by specifying the preimage, n, for that request.
- **Claim tokens (a2)** - if the transfer request fails for some reason (one of the users backs out, for instance) then a2 can claim the original tokens specified after a1's timestamp has expired.
