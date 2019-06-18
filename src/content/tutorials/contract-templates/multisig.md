---
type: tutorial
category: contract-templates
title: Multisig
priority: 1
---

Multisig contracts are used to represent a group of users which collectively control some amount of tokens.

The multisig contract right now supports the following functionality:

- **Transfer** - the key owners are able to transfer a balance of tokens to any external contract.
- **Change ownership** - The key owners are able to change the delegates and the keys controlling the multisig.

_*All of the above functionality is contingent on the key owners providing valid signatures for their keys._

_**The multisig has been formally verified, meaning that executing the multisig will produce certain outcomes with mathematical certainty._
