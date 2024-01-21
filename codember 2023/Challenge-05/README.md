# Codember Challenge 05

## The Final Problem

In the ever-evolving landscape of cyber warfare, a new challenge emerges. Hackers have infiltrated and corrupted a vital database. Yet, amidst the chaos, they've left a cryptic message hidden within. The task is to unearth this concealed communication.

The compromised database is structured in a .csv format with the following columns: id, username, email, age, location.

To determine the legitimacy of a user, the following criteria must be met:

- **id**: Must exist and be alphanumeric.
- **username**: Must exist and be alphanumeric.
- **email**: Must exist and be in a valid format (user@domain.com).
- **age**: Optional, but must be a number if present.
- **location**: Optional, but must be a text string if present.

### Examples:

- Entry: 1a421fa,alex,alex9@gmail.com,18,Barcelona
  Result: ✅ Valid

- Entry: 9412p_m,maria,mb@hotmail.com,22,CDMX
  Result: ❌ Invalid (id is not alphanumeric, the _ is extra)

- Entry: 494ee0,madeval,mdv@twitch.tv,,
  Result: ✅ Valid (age and location are optional)

- Entry: 494ee0,madeval,twitch.tv,22,Montevideo
  Result: ❌ Invalid (email is not valid)

### How to Solve It

1. Examine the list of database entries to identify the invalid ones. The data can be found here: [database_attacked.txt](https://codember.dev/data/database_attacked.txt).

2. Collect the first letter of the username from each invalid user. Arrange these letters in the order they appear to decipher the hidden message. Once you have the message, submit it using the "submit" command. For instance:

```
submit att4ck
```

Embark on this digital detective journey and unravel the hidden message! 🕵️‍♂️🔍