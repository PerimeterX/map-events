# Map All the Browsers! (JS Event-Handlers)

[![DeepScan grade](https://deepscan.io/api/teams/11583/projects/14477/branches/270636/badge/grade.svg)](https://deepscan.io/dashboard#view=project&tid=11583&pid=14477&bid=270636)
![CircleCI](https://img.shields.io/circleci/build/github/alexwiegmanpx/map-events?token=df2fa5d58721a5670674b82841a4c459ec94506e)
![Depfu](https://img.shields.io/depfu/alexwiegmanpx/map-events?style=plastic)

![https://knowyourmeme.com/memes/all-the-things](https://raw.githubusercontent.com/alexwiegmanpx/map-events-website/master/src/img/Map%20All%20Event%20Handlers%20Meme.jpg)

## Description

"Events mapped out [completely](https://perimeterx.github.io/map-events-website/) - across browsers

Using this powerful little tool will map out for you all Events in any browser you'd wish to execute it on."

-- [Gal Weizman](https://weizman.github.io/)

Which is a great way to describe this project in a couple of lines, but does obscure some of the potential benefits of this project at its full potential.

The Mozilla Developer Network has, over the years, maintained [somewhat of a dictionary](https://developer.mozilla.org/en-US/docs/Web/API/Window) of the JavaScript events available in stable releases of web browsers, and some which are still being proposed via an RFC. 

That said, what if you wanted to know more about every event in every browser (including, of course, those not maintained by / following Mozilla's open-source standards)? (It's unlikely, but let's consider a case of an undocumented object or event, such as those that might appear as experimental within alpha, beta, or nightly versions of browsers.)

Gal's logic allows anyone to run a tiny amount of code within their developer tools' console window, and your output will be a very, very long list of every object and event of each object to be supported by that browser, since it will recursively query for events from every object present in the browser (assuming all objects are some prototype of the window object, as our focus is _browser_ events).

## So why do this?

Ultimately, Gal, myself, and probably a lot of you out (maybe) work for a security organisation.

And while this research project is conducted on behalf of PerimeterX, as an organisation [we support Open Source knowledge for the community at large](https://www.globenewswire.com/news-release/2020/10/06/2104341/0/en/Snyk-and-PerimeterX-Partner-to-Address-Open-Source-JavaScript-Risk-Increasingly-Common-in-Web-Applications.html) (security, developers, ecosystem, students, etc.)

And even if you aren't a member of the Security Team at your organisation, you the reader (looking at this repository), probably at least (have an interest to) write (a lot more than I would!) JavaScript programs as part of your daily work (perhaps you are a front-end developer or a server-side Database [tools] developer -- JS is also found in MongoDB etc.)

Either way, one of the tenets of security applies rather well here -- the first step of knowing vulnerabilities is knowing the threat landscape. And having every event from every object is a good first step in that direction.

That said, while the above is interesting, this project also has a second meaning for me. It is incentive for me to find the entire dictionary of events to search for in MDN and learn more about web programming in JS.

So eventually, whether it be documented notes in a separate directory, or some form of usage 'man' messages that can be displayed when a specific (prototype and?) event is passed as an argument, I will attempt to build something to support a learner's purpose as well.
