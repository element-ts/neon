# neon

Welcome to the neon wiki! This is a work in progress and will be constantly updated. Below you will find pages to
this wiki but also feel free to view some nice features and information about the package.

[Want to buy my next coffee? :)](https://www.buymeacoffee.com/elijahjcobb)

## Summary
Neon is a simple package the provides really helpful logging. With even just the default options, Neon makes
`console.log()` look like a smudge on a rock. It provides the type of the logged value, the stack it came from, and
prints using the [colors](https://www.npmjs.com/package/colors) package.

In order to use Neon, once you import it and make a new instance, call `enable()`. The reason you have to enable it
is so when you are ready for logs to go away, all you have to do is remove that line, or call `disable()`.

#### Example
```typescript
import {Neon} from "@element-ts/neon";

const neon = new Neon();

neon.enable();

neon.setTitle("MyLogger");
neon.log("Hello from MyLogger.");
neon.clearTitle();
neon.log("Hello, world!");
neon.log(1223456789);
neon.log(true);
neon.log({foo: "bar"});
neon.log([1, 2, 3]);
neon.log(Buffer.from("Hello, world!"));

neon.err("AHHHH!");
neon.err(new Error("WHOA WHOA!"));
neon.err("AHHHH!", true);
```

![neon example from terminal](./neon-example.png)

## About

### Why not make it static methods?!
I originally had it all being static methods but when I wanted to use neon in multiple projects and then the projects
together it would not work because only one instance of neon could ever exist and different components of a codebase
might want to log things in separate ways. This way you can just attach an instance of neon as a static property on a
class. For example, in [element-ts/silicon](https://github.com/element-ts/silicon) there is a static property called
`logger` on `SiDatabase` so all silicon code can just reference its own neon instance.

### Language
All of Neon is written in [TypeScript](https://www.typescriptlang.org). If you do not know how to use TypeScript don't
worry. It is completely compatible with JavaScript.

### Why?
I kept writing the same kind of logging system in all of my projects.

### Author/Maintainer
My name is [Elijah Cobb](https://elijahcobb.com). I am a computer science student at
[Michigan Technological University](https://mtu.edu).