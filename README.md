Skapalon
=========

## What does it do?
Skapalon is a command-line program which reads a text template and expands it using the environment variables. It reads the template from the stdin and outputs on the stdout. Here is how you can use it:

	cat template.txt | skapalon | result.txt

And now for a bit more detailed example
	
	$ cat template.txt

	Your home holder is {{HOME}}
	Your shell is {{SHELL}}
	Your PATH is {{PATH}}

	$ cat template.txt | skapalon	
	
	Your home holder is /Users/petar
	Your shell is /bin/zsh
	Your PATH is ./node_modules/.bin:/Users/petar/bin:/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin

## What is it good for
I use it to generate configuration files for my apps inside Docker containers.

## What is it with the name
Skapalon means "template" in Icelandic