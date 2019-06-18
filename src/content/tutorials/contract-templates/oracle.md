---
type: tutorial
category: contract-templates
title: Oracle
priority: 2
---

Oracle contracts are used as a source of truth for other contracts. A specific address is designated as the "oracle" - this address is the only one authorized to write to the contract's storage. Other users can query the contract's storage, and provide a callback function for the oracle to call. The oracle contract is here:

The oracle contract supports the following functionality:

- **Storing a truth** - the oracle is able to sotre a value at a certain key in the contract's storage.
- **Querying a key** - end-users are able to query the contract for a value associated with a certain key. Users must provide a fee, and a certain callback function to be executed.
- **Retrieving the balance** - Oracles are able to "cash out" and retrieve the balance that is stored in the contract, built up by end users paying for the service.
