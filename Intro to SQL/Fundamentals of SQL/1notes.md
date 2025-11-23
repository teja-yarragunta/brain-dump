SQL - Structured Query Language

it is used to store, access and manipulate data within a database
we write commands or queries to perform actions on tables within a database

one of the most popular language for Development and Data Science

used with MySQL, PostgreSQL, Microsoft SQL, Oracle SQL -- they all use the same underlying syntax and language

```
SQL INJECTION (SQLI)
```
SQLI refers to the malicious practice of inputting SQL statements to compromise the security of an application.

Attackers will attempt to input data to a site which will interfere with or expose data from a database

Typically, this happens when a site does not correctly process user input before posting it to a database.

A user can enter malicious input from frontend which will be processed as SQL.

This can be used to:
    1) expose sensitive data
    2) bypass authentication
    3) modify or delete data
    4) execute admin operations

Injections can be prevented by
    1) using parameterised queries
    2) using ORMs
    3) validating and sanitize inputs
    4) limiting database privileges
    5) using web application firewalls