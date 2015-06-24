---
layout: post
title: "Program Specification: RISC Virtual Machine"
category: blog
tags:
 - programming
 - specification
 - assembly
 - project
---

This project has the aim of creating a simple Reduced Instruction Set Computing virtual machine.

The aim for the code is for it to be as simple as possible.

## Instruction Set Architecture

The virtual machine's ISA will be similar to the one used in [MIPS Assembly](https://en.wikipedia.org/wiki/MIPS_instruction_set), but with a friendlier stack interface. As the machine uses [RISC](https://en.wikipedia.org/wiki/Reduced_instruction_set_computing), operations that act on data may only act on registers and immediate values.

To use data kept in memory, it must first be read into a register before being operated upon. To save the result of an operation to memory, it must first be saved to a register before being pushed to the stack.

## Registers

Registers shall be accessible using `$Xn` notation, where `X` is the register's letter and `n` is its number. Examples of registers might be: `$a3`, `$v0`, `$s7`. What the registers are named and how many of each letter there can be is implementation-specific.

## Instruction Format

Instructions are to be written and formatted in the following style (all whitespace apart from carriage returns is ignored):

	op,$dest,$src1,$src2

Where `op` is the operation to be executed, `$dest` is the register to save the computed value in, `$src1` is the register to be read and `$src2` is the second register to be read. All three registers are optional, depending on the operation be applied and at most one source register may be replaced with an immediate value if the operation allows it.

Labels should also be present and are of the form `labelname:`. They may appear on their own line or in front of an instruction. A label name may contain any characters other than `$` (dollar sign), `,` (comma) and `:` (colon), and must start with a letter.

## Instructions

> The instructions of the virtual machine are to be described in another file.

## Further Work

As further work, a parser could be written for the virtual machine to read code in before interpreting it. As the code follows a simple format, this should not be too difficult.
