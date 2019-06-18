---
type: tutorial
category: contract-templates
title: Escrows
priority: 2
---

Escrow contracts are used to hold tokens in storage until some condition has been fultilled. There are two main parties in this contract - the set of recipients and the set of "judges" or validators.

The escrow contract right now supports the following functionality:

- **"Storing" transaction** - denoting a recipient for the attached tez and a third-party validator to notify the contract when the condition has been fulfilled or will never be fulfilled.
- **"Validating" transaction** - the validator sends a transactin to the contract containing a valid signature, and a boolean value representing whether or not the condition was met.
